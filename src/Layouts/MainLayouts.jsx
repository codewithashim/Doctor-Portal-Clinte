import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheards/Footer/Footer";
import Headers from "../Pages/Sheards/Headers/Headers";

const MainLayouts = () => {
  return (
    <>
      <Headers></Headers>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayouts;
