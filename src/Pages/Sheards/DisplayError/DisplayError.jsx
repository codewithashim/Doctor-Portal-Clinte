import React, { useContext } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/UserContext";

const DisplayError = () => {
  const { userLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const hendelLogout = () => {
    userLogout()
      .then(() => {
        Swal.fire("Sucessfully Logout !", "You clicked the button!", "success");
        localStorage.removeItem("accesToken");
        navigate("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire("OPPs Somthing Warn!", "You clicked the button!", "error");
      });
  };
  const error = useRouteError();
  return (
    <div className="flex justify-center flex-col gap-4 items-center my-5">
      <p className="text-red-500">
        Something went wrong. Please try again later.
      </p>
      <p>{error.statusText || error.message}</p>
      <p>{error.status}</p>
      <p>{error.url}</p>
      <p>{error.type}</p>

      <h1>
        Pless{" "}
        <Link className="btn btn-sm btn-primary" to="/">
          Back to Home
        </Link>
      </h1>
      <h1>
        Pless{" "}
        <Link onClick={hendelLogout} className="btn btn-sm btn-primary">
          Logout
        </Link>
      </h1>
    </div>
  );
};

export default DisplayError;
