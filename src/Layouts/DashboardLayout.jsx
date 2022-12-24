import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import useAdmin from "../Hooks/useAdmin";

import Headers from "../Pages/Sheards/Headers/Headers";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <section className="px-4">
      <Headers></Headers>
      <div>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-72 text-base-content">
              <li>
                <Link to="/dashboard">My Apointment</Link>
              </li>
              {isAdmin && (
                <>
                  <li>
                    <Link to="/dashboard/users">Users</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/addDoctors">Add Doctors</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/manegDoctors">Maneg Doctors</Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/dashboard/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
