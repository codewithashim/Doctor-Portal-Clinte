import React from "react";
import Chear from "../../../assets/images/chair.png";
import HeroBg from "../../../assets/images/bg.png";
import CommonButton from "../../../Components/Buttons/CommonButton";

const Hero = () => {
  return (
    <>
      <div
        className="hero p-4"
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundRepeat: "no-repeat",
          height: "530px",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={Chear}
            alt="Doctor with patient"
            className="w-2/4 rounded-lg "
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <CommonButton>GET STARTED</CommonButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
