import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useStore } from "../../store/store";
import { userLogin } from "../../store/userReducer";
import "../login/login.css";

const loginSchema = z
  .object({

    email: z.string().email("Please enter a valid email"),
    password: z.string().nonempty("Password required."),
  });

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "all",
  });

  const [, dispatch] = useStore();


  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();


  const onSubmit = useCallback((data) => {
    const user = {
      email: data.email,
      password: data.password,
    };
    console.log(user);
    axios
      .post(`${process.env.REACT_APP_URL}/users/login/${user.email}`, { data: { user: user } })
      .then((res) => {
        console.log(res);
        if (res.status === 200 && res.data.message) {
          setErrorMessage(res.data.message);
        } else if (res.status === 200) {
          setErrorMessage("You logged in succesfully");
          const dbUser = res.data;
          console.log("login user:", dbUser);
          dispatch(userLogin(dbUser));
          navigate("/home");
        } else {
          setErrorMessage("Error! Please try again.");
        }
      })
      .catch((err) => {
        console.log("Error:", err);
        setErrorMessage("Error! Please try again.");
      });
  }, [navigate, dispatch]);
  return (
    <div className="imge">
      <div className="fullscreen row justify-content-center align-items-center">
        <div className="col-4 justify-content-start">
          <div className="card p-1 mb-0 card-shadow">
            <div className="card-body">
              <div className="text-center">
                <h2 className="mt-2 mb-3">
                  <b>SIGN IN</b>
                </h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <p className="errorMessage">{errorMessage}</p>
                <div className="mt-4 d-flex flex-column">
                  <input
                    {...register("email")}
                    className="btn-border input-style form-control"
                    placeholder="E-mail"
                    type="email"
                  >
                  </input>
                  <small className="align-self-start error-text">
                    {errors.email?.message}
                  </small>
                </div>
                <div className="mt-3 d-flex flex-column">
                  <input
                    {...register("password")}
                    className="btn-border input-style form-control"
                    placeholder="Password"
                    type="password"
                  >
                  </input>
                  <small className="align-self-start error-text">
                    {errors.password?.message}
                  </small>
                </div>

                <div className="mt-5 row text-center justify-content-center">
                  <button
                    type='submit'
                    className="col-6 btn btn-block btn-success"
                  >
                      SIGN IN
                  </button>
                </div>
                <div className="mt-3 row text-center justify-content-center">
                  <div className="col-12">
                    <span
                      className="link-line-gap d-flex justify-content-center"
                    >
                      <Link
                        className="link-success"
                        to="/forgotpassword"
                      ><p> Forgot your password?</p>
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="mt-3 row text-center justify-content-center">
                  <div className="col-12">
                    <span
                      className="link-line-gap d-flex justify-content-center"
                    >
                    Don&apos;t have an account?
                      <Link
                        className="link-success"
                        to="/signup"
                      >
                        <p>   Create one!</p>
                      </Link>
                    </span>
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

export default Login;
