import React from "react";
import tritments from "../../../assets/images/treatment.png";
import CommonButton from "../../../Components/Buttons/CommonButton";

const Tritment = () => {
  return (
    <section className="flex justify-center items-center my-6">
      <div className="hero">
        <div className="hero-content gap-10 md:w-5/6 mx-auto flex-col lg:flex-row">
          <img
            src={tritments}
            alt="Doctor Portal"
            className=" rounded-lg shadow-2xl md:w-2/6"
          />

          <div className="mx-8">
            <h1 className="text-5xl font-bold">
              Exceptional Dental <br /> Care, on Your Terms
            </h1>
            <p className="py-6 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <CommonButton>GET STARTED</CommonButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tritment;
