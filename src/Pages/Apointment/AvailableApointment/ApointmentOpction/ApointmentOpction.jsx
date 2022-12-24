import React from "react";

const ApointmentOpction = ({ apointment, setTritment }) => {
  const { name, slots, price } = apointment;

  return (
    <div className="card m-4 p-6 bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl text-secondary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Tomorows"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Availabel
        </p>
        <p className="text-2xl text-secondary">Price: ${price}</p>

        <div className="mt-3">
          <label
            htmlFor="bookignModal"
            onClick={() => setTritment(apointment)}
            disabled={slots.length === 0}
            className="btn bg-gradient-to-r from-primary to-secondary hover:from-pink-500 hover:to-yellow-500 font-bold text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default ApointmentOpction;
