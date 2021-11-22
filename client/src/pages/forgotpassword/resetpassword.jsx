/* eslint-disable no-console */
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { z } from "zod";
import {
  forgotButton, homeButton, LinkButtons, loginButton,
} from "../../components";
import "../login/login.css";

const loading = {
  margin: "1em",
  fontSize: "24px",
};


const updatePasswordSchema = z
  .object({
    password: z.string().nonempty("Password required."),
  });


function ResetPassword() {
  const token = useParams();

  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(updatePasswordSchema),
    mode: "all",
  });


  const [username, setUsername] = useState("");
  const [updated, setUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/reset", {
      params: {
        resetPasswordToken: token,
      },
    }).then((response) => {
      if (response.data.message === "password reset link a-ok") {
        console.log("a");
        setUsername(response.data.username);
        setUpdated(false);
        setIsLoading(false);
        setError(false);
      } else {
        console.log("b");
        setIsLoading(false);
        setError(true);
      }
    })
      .catch((error) => {
        console.log("c");
        console.log(error);
        setUpdated(false);
        setIsLoading(false);
        setError(true);
      });
    // console.log(response);
  }, [token]);

  const updatePassword = async (data) => {
    const password = data;
    try {
      const response = await axios.put(
        "http://localhost:5000/updatePasswordViaEmail",
        {
          username,
          password,
          resetPasswordToken: token,
        },
      );
      console.log(response.data);
      if (response.data.message === "password updated") {
        setUpdated(true);
        setError(false);
      } else {
        setUpdated(false);
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.log(error.response.data);
      setError(true);
    }
  };

  if (error) {
    return (
      <div className="imge">
        <div
          className="fullscreen row justify-content-center align-items-center"
        >
          <div className="col-4 justify-content-start">
            <div className="card p-1 mb-0">
              <div className="card-body">
                <div className="text-center">
                  <div style={loading}>
                    <h4>
                    Problem resetting password. Please send another reset link.
                    </h4>
                    <LinkButtons
                      buttonText="Go Home"
                      buttonStyle={homeButton}
                      link="/"
                    />
                    <LinkButtons
                      buttonStyle={forgotButton}
                      buttonText="Forgot Password?"
                      link="/forgotpassword"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    );
  }
  if (isLoading) {
    return (
      <div className="imge">
        <div
          className="fullscreen row justify-content-center align-items-center"
        >
          <div className="col-4 justify-content-start">
            <div className="card p-1 mb-0">
              <div className="card-body">
                <div className="text-center">
                  <h2 className="mt-2 mb-3">
                    <div style={loading}>Loading User Data...</div>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
  return (
    <div className="imge">
      <div className="fullscreen row justify-content-center align-items-center">
        <div className="col-4 justify-content-start">
          <div className="card p-1 mb-0">
            <div className="card-body">
              <div className="text-center">
                <h2 className="mt-2 mb-3">
                </h2>

                <form
                  className="password-form"
                  onSubmit={handleSubmit(updatePassword)}
                >
                  <input
                    {...register("password")}
                    className="btn-border input-style form-control"
                    placeholder="Password"
                    type="password"
                  />
                  <div className="mt-4 col text-center justify-content-center">
                    <button
                      type='submit'
                      className="col-6 btn btn-block btn-warning"
                    >
                      Update Password
                    </button>
                  </div>

                </form>

                {updated && (
                  <div>
                    <p>
                        Your password has been successfully reset,
                        please try logging in again.
                    </p>
                    <LinkButtons
                      buttonStyle={loginButton}
                      buttonText="Login"
                      link="/login"
                    />
                  </div>
                )}
                <LinkButtons
                  buttonText="Go Home"
                  buttonStyle={homeButton}
                  link="/"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ResetPassword;
