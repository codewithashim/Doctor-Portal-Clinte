import React from "react";

const CommonButton = ({ children }) => {
  return (
    <button
      type="button"
      class="btn bg-gradient-to-r from-primary font-bold text-white to-secondary hover:from-pink-500 hover:to-yellow-500 ..."
    >
      {children}
    </button>
  );
};

export default CommonButton;
