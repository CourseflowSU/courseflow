import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";
import "../signup/signup.css";
const signUpSchema = z
  .object({
    username: z.string().nonempty(),
    university: z.string().nonempty(),
    email: z.string().email("Please enter a valid email"),

    password: z
      .string()
      .min(4, { message: "Password must be at least 8 character" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*';."_)(+,/:>\]<=?@\\^`|[}{~-])/,
        {
          message:
            "Password must contain uppercase, lowercase, numeric and special character",
        }
      ),
    passwordConfirm: z.string(),
    
    privacyAgreement: z
      .boolean()
      .refine((val) => val, {
        message: 'You have to accept privay policy'
      })
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords are not the same",
    path: ["passwordConfirm"],
  });

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: "all",
  });

  const [errorMessage, setErrorMessage] = useState("");

  function onSubmit(data) {

    const newperson = {
      username: data.username,
      university: data.university,
      email: data.email,
      password: data.password
    };
 
    axios
      .post("http://localhost:5000/users/add", newperson)
      .then((res) => {setErrorMessage(res.data.message)})
      .catch(err => console.log(err));
  }

  return (
    <div className="imge">
      <div className="fullscreen row justify-content-center align-items-center">
        <div className="col-4 justify-content-start">
          <div className="card p-1 mb-0">
            <div className="card-body">
              <div className="text-left">
                <h2 className="mt-2">
                  <b>SIGN UP</b>
                </h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} method={'post'}>
                <p className="errorMessage">{errorMessage}</p>
                <div className="mt-4 d-flex flex-column">
                  <input
                    {...register("username")}
                    className="btn-border input-style form-control"
                    placeholder="Username"
                    type="text"
                  ></input>
                <small className="align-self-start">{errors.username?.message}</small>

                </div>
                <div className="mt-4 d-flex flex-column">
                  <input
                    {...register("university")}
                    className="btn-border input-style form-control"
                    placeholder="University"
                    type="text"
                  ></input>
                <small className="align-self-start">{errors.university?.message}</small>

                </div>
                <div className="mt-4 d-flex flex-column">
                  <input
                    {...register("email")}
                    className="btn-border input-style form-control"
                    placeholder="E-mail"
                    type="email"
                  ></input>
                <small className="align-self-start">{errors.email?.message}</small>

                </div>
                <div className="mt-3 d-flex flex-column">
                  <input
                    {...register("password")}
                    className="btn-border input-style form-control"
                    placeholder="Password"
                    type="password"

                  ></input>
                   <small className="align-self-start">{errors.password?.message}</small>
                </div>

                <div className="mt-3 d-flex flex-column">
                  <input
                    {...register("passwordConfirm")}
                    className="btn-border form-control input-style"
                    placeholder="Confirm Password"
                    type="password"

                  ></input>
                  <small className="align-self-start">{errors.passwordConfirm?.message}</small>
                </div>

                
                <div className="mt-3 d-flex flex-row">
                  <input
                    {...register("privacyAgreement")}
                    className="form-check-input"
                    id="checkbox"
                    type="checkbox"
                  ></input>
                  <small>
                    I have read and accepted <a href="s">Document1</a>
                  </small>
                  
                </div>
                <small className="align-self-start">{errors.privacyAgreement?.message}</small>

                <div className="mt-3 row text-center justify-content-center">
                  <div className="col-12">
                    <button className="btn btn-block btn-warning">
                      SIGN UP
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
