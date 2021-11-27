import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  LinkButtons,
  registerButton,
} from "../../components";
import "../login/login.css";
const loginSchema = z
  .object({
    email: z.string().email("Please enter a valid email"),
  });

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "all",
  });


  const [messageFromServer, setMessageFromServer] = useState("");
  const [showError, setShowError] = useState(false);
  const sendEmail = async (data) => {
    const { email } = data;
    if (email === "") {
      setShowError(false);
      setMessageFromServer("");
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_URL}/forgotPassword`,
          {
            email,
          },
        );
        console.log(response.data);
        if (response.data === "recovery email sent") {
          setShowError(false);
          setMessageFromServer("recovery email sent");
        }
      } catch (error) {
        console.error(error.response.data);

        if (error.response.data === "email not in db") {
          setShowError(true);
          setMessageFromServer("");
        }
      }
    }
  };

  return (
    <div className="imge">
      <div className="fullscreen row justify-content-center align-items-center">
        <div className="col-4 justify-content-start">
          <div className="card p-1 mb-0">
            <div className="card-body">
              <div className="text-center">
                <h2 className="mt-2 mb-3">
                  <b>Reset Password</b>
                </h2>
              </div>
              <form
                className="profile-form"
                onSubmit={handleSubmit(sendEmail)}
              >
                <input
                  {...register("email")}
                  className="btn-border input-style form-control"
                  placeholder="E-mail"
                  type="email"
                />
                <small className="align-self-start error-text">
                  {errors.email?.message}
                </small>
                <div className="mt-4 col text-center justify-content-center">
                  <button
                    type='submit'
                    className="col-6 btn btn-block btn-warning"
                  >
                      Reset Password
                  </button>
                </div>

              </form>
              {showError && (
                <div>
                  <p>
                      That email address isn&apos;t recognized.
                      Please try again or
                      register for a new account.
                  </p>
                  <LinkButtons
                    buttonText="Register"
                    buttonStyle={registerButton}
                    link="/signup"
                  />
                </div>
              )}
              {messageFromServer === "recovery email sent" && (
                <div>
                  <h3>Password Reset Email Successfully Sent!</h3>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
