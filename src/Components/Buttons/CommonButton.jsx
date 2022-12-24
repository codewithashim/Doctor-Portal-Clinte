import React from "react";

const CommonButton = ({ children }) => {
  return (
    <button
      type="button"
      className="btn bg-gradient-to-r from-primary to-secondary hover:from-pink-500 hover:to-yellow-500 font-bold text-white"
    >
      {children}
    </button>
  );
};

export default CommonButton;
