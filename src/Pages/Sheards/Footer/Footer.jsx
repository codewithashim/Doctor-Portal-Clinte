import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import footerBg from "../../../assets/images/footer.png";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="footer p-10 text-black mt-5"
      style={{
        background: `url(${footerBg})`,
        backgroundBlendMode: "color",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <img src={logo} alt="Doctor Portal" style={{ width: "5rem" }} />
        <p>
          Doctor Portal
          <br />
          Providing reliable health care services for you and your family
        </p>
        <p>© Copyright 2022 All Rights Reserved by Doctor Portal</p>
      </div>
      <div>
        <span className="footer-title font-bold">SERVICES</span>
        <Link className="link link-hover">Emergency Checkup</Link>
        <Link className="link link-hover">Monthly Checkup</Link>
        <Link className="link link-hover">Weekly Checkup</Link>
        <Link className="link link-hover">Deep Checkup</Link>
      </div>
      <div>
        <span className="footer-title font-bold">ORAL HEALTH</span>
        <Link className="link link-hover">Fluoride Treatment</Link>
        <Link className="link link-hover">Cavity Filling</Link>
        <Link className="link link-hover">Teath Whitening</Link>
      </div>
      <div>
        <span className="footer-title font-bold">OUR ADDRESS</span>
        <Link className="link link-hover flex justify-center items-center gap-2">
          <FaMapMarkerAlt></FaMapMarkerAlt> New York - 101010 Hudson
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
