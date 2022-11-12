import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import footerBg from "../../../assets/images/footer.png";

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
      </div>
      <div>
        <span className="footer-title">Services</span>
        <Link className="link link-hover">Branding</Link>
        <Link className="link link-hover">Design</Link>
        <Link className="link link-hover">Marketing</Link>
        <Link className="link link-hover">Advertisement</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Jobs</Link>
        <Link className="link link-hover">Press kit</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
