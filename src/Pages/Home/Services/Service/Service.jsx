import React from "react";

const Service = ({ service }) => {
  const { title, description, img } = service;
  return (
    <div className="card m-4 p-6 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100)}</p>
      </div>
    </div>
  );
};

export default Service;
