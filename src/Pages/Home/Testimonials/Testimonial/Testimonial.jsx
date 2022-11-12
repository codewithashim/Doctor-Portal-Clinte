import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Testimonial = ({ testimonial }) => {
  const { name, from, img, descibctions } = testimonial;
  return (
    <div className="card bg-base-100 shadow-xl m-4 p-4">
      <div className="card-body">
        <p>{descibctions.slice(0, 100)} ...</p>
      </div>
      <div className="flex gap-4 items-center">
        <div>
          <img
            src={img}
            alt=""
            className="rounded-full w-20 h-20"
            style={{
              border: "4px solid #1CC7C1",
            }}
          />
        </div>
        <div>
          <h1 className="font-bold">{name}</h1>
          <p className="flex gap-2 items-center">
            <FaMapMarkerAlt></FaMapMarkerAlt> {from}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
