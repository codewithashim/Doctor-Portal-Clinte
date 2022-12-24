import React from "react";

const ActionModal = ({
  clouseModal,
  title,
  message,
  henselAction,
  modalData,
  sucessBtnName,
}) => {
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="actionModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              htmlFor="actionModal"
              onClick={() => henselAction(modalData)}
              className="btn btn-sm btn-success"
            >
              {sucessBtnName}
            </label>
            <button className="btn btn-sm btn-error" onClick={clouseModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionModal;
