const express = require("express");
const bcrypt = require("bcryptjs")
// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /users.
const userRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
const { request } = require("express");


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
userRoutes.route("/users/:email").post(function (req, res) {
  let db_connect = dbo.getDb("courseflow");
  let myquery = {"email": req.params.email};
  let currUser = req.body.data.user;
  db_connect
    .collection("users")
    .findOne(myquery, async (err, result) => {
      if (err) throw err;
      const validPassword = await bcrypt.compare(currUser.password, result.password);
      if (validPassword) {
        res.status(200).json(result);
      } else {
        res.status(200).json({ message: "Invalid Password" });
      }
    });
});

// This section will help you create a new users.
userRoutes.route("/users/add").post(function (req, response) {

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

module.exports = userRoutes;