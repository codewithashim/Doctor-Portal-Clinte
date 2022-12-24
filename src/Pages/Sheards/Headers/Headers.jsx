import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../Context/UserContext";
// import CommonButton from "../../../Components/Buttons/CommonButton";
import userIcon from "../../../assets/userIcon.png";
import Swal from "sweetalert2";

const Headers = () => {
  const { user, userLogout } = useContext(AuthContext);
  const hendelLogout = () => {
    userLogout()
      .then(() => {
        Swal.fire("Sucessfully Logout !", "You clicked the button!", "success");
        localStorage.removeItem("accesToken");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire("OPPs Somthing Warn!", "You clicked the button!", "error");
      });
  };

  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>

      {/* <li>
        <Link to="/about">About</Link>
      </li> */}
      <li>
        <Link to="/apointment">Appointment</Link>
      </li>
      {/* <li>
        <Link to="/dashboard/profile">Reviews</Link>
      </li> */}
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>{/* <Link to="/login">Login</Link> */}</li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>

          <Link className="btn btn-ghost normal-case text-xl" to="/">
            <img
              src={logo}
              alt="Doctor Portal"
              className="rounded-full"
              style={{ width: "2rem" }}
            />{" "}
            <span className="mx-2">Doctor Portal</span>
          </Link>

          <div>
            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>

        <div className="navbar-end">
          {user?.email ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {user?.photoURL ? (
                      <>
                        <img src={user?.photoURL} alt={user?.displayName} />
                      </>
                    ) : (
                      <>
                        <img src={userIcon} alt={user?.displayName} />
                      </>
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link>{user.displayName}</Link>
                  </li>
                  <li>
                    <Link className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link onClick={() => hendelLogout()}>Logout</Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Headers;
