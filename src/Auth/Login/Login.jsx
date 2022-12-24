import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/UserContext";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);

  const from = location?.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { userLoing, googleLogin } = useContext(AuthContext);

  const hendelLogin = (data) => {
    userLoing(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoginUserEmail(data.email);

        Swal.fire(
          "Succesfuly Login Done !",
          "You clicked the button!",
          "success"
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const hendelGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        Swal.fire(
          "Succesfuly Login Done !",
          "You clicked the button!",
          "success"
        );
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // The email of the user's account used.
        const email = error.email;
        console.log(email);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };

  return (
    <section className="p-10">
      <div className="card shadow-xl mx-auto md:w-2/5 p-6 border">
        <div className="cardDetails">
          <h2 className="text-2xl font-bold text-center text-secondary">
            Login
          </h2>
        </div>
        <form onSubmit={handleSubmit(hendelLogin)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                Email filde is required
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                Password filde is required
              </p>
            )}
            <label className="label">
              <Link className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-primary w-full"
              value="Login"
            />
          </div>
          <div className="p-2 text-center">
            <p>
              New to Doctors Portal?{" "}
              <Link className="text-secondary" to="/register">
                Create new account
              </Link>
            </p>
          </div>
        </form>

        <div className="divider">OR</div>
        <div className="text-ceter">
          <Link className="btn btn-outline w-full" onClick={hendelGoogleLogin}>
            {" "}
            <FaGoogle className="mx-2 text-2xl"></FaGoogle> CONTINUE WITH GOOGLE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
