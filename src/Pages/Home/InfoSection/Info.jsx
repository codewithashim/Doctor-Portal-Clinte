import React from "react";

const Info = ({ item }) => {
  const { title, description, icon, background } = item;
  return (
    <div
      className={`card card-side ${background} m-4 p-4 sm:w-full mx-auto md:w-1/3`}
    >
      <figure>
        <img src={icon} alt={title} />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Info;
