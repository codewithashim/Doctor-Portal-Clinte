import React from "react";
import ContactBg from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      className="p-10"
      style={{
        backgroundImage: `url(${ContactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold text-center text-secondary">
          Contact Us
        </h1>
        <p className="text-4xl text-white my-2">Stay connected with us</p>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center mx-auto my-6 md:w-[450px]">
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered w-full"
        />
        <textarea
          className="textarea w-full"
          placeholder="Your message"
        ></textarea>
        <input
          type="submit"
          className="btn bg-gradient-to-r from-primary to-secondary hover:from-pink-500 hover:to-yellow-500 font-bold text-white"
          value="Submit"
        />
      </div>
    </section>
  );
};

export default Contact;
