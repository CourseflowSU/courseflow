const express = require("express");
const bcrypt = require("bcryptjs");
const nodemailer = require('nodemailer');
const crypto = require("crypto");
const Sequelize = require("sequelize");
const fileUpload = require('express-fileupload');
const Op = Sequelize.Op;
const fs = require('fs');

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /users.
const userRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");
var Binary = require('mongodb').Binary;
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
const { request } = require("express");
userRoutes.use(fileUpload());

// This section will help you get a list of all the users.
userRoutes.route("/users").get(function (req, res) {
  let db_connect = dbo.getDb("courseflow");
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single users by id
// userRoutes.route("/users/:id").get(function (req, res) {
//   let db_connect = dbo.getDb("courseflow");
//   let myquery = { _id: ObjectId(req.params.id) };
//   db_connect
//     .collection("users")
//     .findOne(myquery, function (err, result) {
//       if (err) throw err;
//       res.json(result);
//     });
// });

// This section will help you get a single users by email
userRoutes.route("/users/login/:email").post(function (req, res) {
  let db_connect = dbo.getDb("courseflow");
  let myquery = {"email": req.params.email};
  let currUser = req.body.data.user;
  db_connect
    .collection("users")
    .findOne(myquery, async (err, result) => {
      if (err) console.log(err.message);
      
      if (result) {
        const validPassword = await bcrypt.compare(currUser.password, result.password);
        if (validPassword) {
          res.status(200).json(result);
        } else {
          res.status(200).json({ message: "Invalid Password" });
        }
      }
      else {
        res.status(200).json({ message: "Invalid E-mail" });
      }
    });
});

// This section will help you create a new users.
userRoutes.route("/users/signup/add").post(function (req, response) {

  let db_connect = dbo.getDb("courseflow");
  
  let user = {
    username: req.body.username,
    university: req.body.university,
    email: req.body.email,
    password: req.body.password,
  };

  // hashing time
  const saltRounds = 10;

  // encrypting the password
  bcrypt.genSalt(saltRounds, function (saltError, salt) {
    if (saltError) {
      return saltError
    } else {
      bcrypt.hash(req.body.password, salt, function (hashError, hash) {
        if (hashError) {
          return hashError
        }

        user.password = hash;

        // inserting to users collection after hashing
        db_connect.collection("users").find({ "email": req.body.email }).toArray()
          .then((result) => {
            if (result.length === 0) {
              db_connect.collection("users").insertOne(user, function (err, res) {
                if (err) throw err;
                response.json(res);
              });
            }
            else {
              response.json({ message: 'This email has already been used!' });
            }
          })
      })
    }
  })

  // user information





});

// This section will help you update a users by id.
userRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      person_name: req.body.person_name,
      person_position: req.body.person_position,
      person_level: req.body.person_level,
    },
  };
  db_connect
    .collection("users")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a users
userRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("users").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
  });
});


userRoutes.post('/forgotPassword', (req, res) => {
  let db_connect = dbo.getDb("courseflow");
  if (req.body.email === '') {
    res.status(400).send('email required');
  }
  console.error(req.body.email);
  db_connect.collection("users").findOne({
      "email": req.body.email,
  }).then((user) => {
    if (user === null) {
      console.error('email not in database');
      res.status(403).send('email not in db');
    } else {
      const token = crypto.randomBytes(20).toString('hex');
      db_connect.collection("users").updateOne({"email": req.body.email}, 
      { $set: {"resetPasswordToken": token, "resetPasswordExpires": Date.now() + 3600000}
      });
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${process.env.EMAIL_ADDRESS}`,
          pass: `${process.env.EMAIL_PASSWORD}`,
        },
      });

      const mailOptions = {
        from: 'courseflowSU@gmail.com',
        to: `${user.email}`,
        subject: 'Link To Reset Password',
        text:
          'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
          + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
          + `${process.env.REACT_APP_URL}/reset/${token}\n\n`
          + 'If you did not request this, please ignore this email and your password will remain unchanged.\n',
      };

      console.log('sending mail');

      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          console.error('there was an error: ', err);
        } else {
          console.log('here is the res: ', response);
          res.status(200).json('recovery email sent');
        }
      });
    }
  });
});


userRoutes.get('/reset', (req, res) => {
  let db_connect = dbo.getDb("courseflow");
  db_connect.collection("users").findOne({
      "resetPasswordToken": JSON.parse(req.query.resetPasswordToken).token,
      "resetPasswordExpires": {
       $gt: Date.now(),
     },
  }).then((user) => {
    if (user == null || user.resetPasswordExpires == null) {
      console.error('password reset link is invalid or has expired');
      res.status(401).send('password reset link is invalid or has expired');
    } 
    else {
      res.status(200).send({
        username: user.username,
        message: 'password reset link a-ok',
      });
    }
  });
});


userRoutes.put('/updatePasswordViaEmail', (req, res) => {
  let db_connect = dbo.getDb("courseflow");
  const BCRYPT_SALT_ROUNDS = 10;
  console.log(req.body.username); console.log(" ", req.body.resetPasswordToken.token); console.log(Date.now());
  db_connect.collection("users").findOne({
      "username": req.body.username,
      "resetPasswordToken": req.body.resetPasswordToken.token,
       "resetPasswordExpires": {
       $gt: Date.now(),
      },
  }).then(user => {
    if (user == null) {
      console.error('password reset link is invalid or has expired');
      res.status(403).send('password reset link is invalid or has expired');
    } else if (user != null) {
      console.log('user exists in db');

      bcrypt.genSalt(BCRYPT_SALT_ROUNDS, function (saltError, salt) {
        if (saltError) {
          console.log(saltError);
          return saltError
        } 
        else {
          bcrypt.hash(req.body.password.password, salt, function (hashError, hash) {
            if (hashError) {
              console.log(hashError);
              return hashError
            }
            console.log("updating...");
            db_connect.collection("users").updateOne({ "username": req.body.username }, {
              $set: {
                "password": hash,
                "resetPasswordToken": null,
                "resetPasswordExpires": null,
              }
            })
              .then(() => {
                console.log('password updated');
                res.status(200).send({ message: 'password updated' });
              });
          })
        }
    });
    } else {
      console.error('no user exists in db to update');
      res.status(401).json('no user exists in db to update');
    }
  });
});

userRoutes.post('/upload', (req, res) => {
  let db_connect = dbo.getDb("courseflow");
  if (!req.files) {
      return res.status(500).send({ msg: "file is not found" })
  }
      // accessing the file
  const myFile = req.files.file;
  const file = {}
  myFile.data= Binary(myFile.data);
  file.file = myFile;
  file.info = req.body;
  db_connect.collection("files").insertOne(file,  function (err, response) {
    if (err) throw err;
    res.json(response);
  });
});

module.exports = userRoutes;