import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import AddDoctors from "../Dashboard/AddDoctors/AddDoctors";
import ManegDoctors from "../Dashboard/ManegDoctors/ManegDoctors";
import MyApointment from "../Dashboard/MyApointment/MyApointment";
import Payment from "../Dashboard/Payment/Payment";
import Profile from "../Dashboard/Profile/Profile";
import Users from "../Dashboard/Users/Users";
import DashboardLayout from "../Layouts/DashboardLayout";
import MainLayouts from "../Layouts/MainLayouts";
import Apointment from "../Pages/Apointment/Apointment/Apointment";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Reviews from "../Pages/Reviews/Reviews";
import DisplayError from "../Pages/Sheards/DisplayError/DisplayError";
import AdminRoute from "./AdminRoute";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/apointment",
        element: <Apointment></Apointment>,
      },
      {
        path: "/about",
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <MyApointment></MyApointment>,
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addDoctors",
        element: (
          <AdminRoute>
            <AddDoctors></AddDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manegDoctors",
        element: (
          <AdminRoute>
            <ManegDoctors></ManegDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(`https://doctor-portal-server-phi.vercel.app/bookings/${params.id}`),
        element: (
          <AdminRoute>
            <Payment></Payment>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
