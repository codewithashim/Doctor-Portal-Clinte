import React from "react";
import Doctor from "../../../assets/images/doctor.png";
import Apointment from "../../../assets/images/appointment.png";
import CommonButton from "../../../Components/Buttons/CommonButton";
import { Link } from "react-router-dom";

const MakeApointment = () => {
  return (
    <section
      className="mt-24"
      style={{
        backgroundImage: `url(${Apointment})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={Doctor}
            alt="doctor"
            className="-mt-40 -mb-4 hidden md:block lg:w-1/2 rounded-lg "
          />
          <div>
            <h2 className="text-secondary font-bold text-2xl">Appointment</h2>
            <h1 className="text-4xl font-bold text-white">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white w-[80%]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <CommonButton>
              <Link to="/apointment">GET STARTED</Link>
            </CommonButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeApointment;
