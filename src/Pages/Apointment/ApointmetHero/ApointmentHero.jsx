import React from "react";
import Chears from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import HeroBg from "../../../assets/images/bg.png";
import { format } from "date-fns";

const ApointmentHero = ({ selectedDate, setSelectedDate }) => {
  return (
    <header>
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage: `url(${HeroBg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={Chears}
            alt="chair"
            className="md:w-2/4 w-full rounded-lg shadow-2xl"
          />
          <div>
            <DayPicker
              className="shadow-lg p-2 bg-slate-50 rounded"
              mode="single"
              selected={selectedDate}
              onSelect={(data) => {
                if (data) {
                  setSelectedDate(data);
                }
              }}
            ></DayPicker>
            <p className="text-center font-bold text-black">
              You Picked {format(selectedDate, "PP")}.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ApointmentHero;
