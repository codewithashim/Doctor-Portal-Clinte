import React from "react";

const ManegDoctor = ({ doctor, setDeleteDoctor, i }) => {
  const { name, email, spicality, image } = doctor;
  return (
    <tr>
      <th>
        <label>
          <p>{i + 1}</p>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt={name} />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{spicality}</td>
      <th>
        <label
          onClick={() => setDeleteDoctor(doctor)}
          htmlFor="actionModal"
          className="btn btn-error btn-sm"
        >
          Delete
        </label>
      </th>
    </tr>
  );
};

export default ManegDoctor;
