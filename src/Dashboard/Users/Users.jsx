import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { FaRegTrashAlt, FaUserCog } from "react-icons/fa";
import Swal from "sweetalert2";

const Users = () => {
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/users`);
      const data = await res.json();
      return data;
    },
  });

  const hendelMakeAdmin = (id) => {
    fetch(`http://localhost:8000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accesToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Succesfuly Make Admin !",
            "You clicked the button!",
            "success"
          );
          refetch();
        } else {
          Swal.fire(
            "Only Admin Can This Opearation !",
            "You clicked the button!",
            "error"
          );
        }
      });
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Profile Pic</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allUsers?.data?.map((userData, i) => {
              const { name, email, photoURL } = userData;
              return (
                <tr key={userData?._id}>
                  <th>{i + 1}</th>
                  <td>
                    <img
                      src={photoURL}
                      alt=""
                      className="rounded-full"
                      style={{ width: "4rem" }}
                    />
                  </td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    {userData?.role !== "admin" && (
                      <Link
                        onClick={() => hendelMakeAdmin(userData?._id)}
                        className="btn btn-sm bg-primary text-white flex items-center justify-center gap-2"
                      >
                        <FaUserCog></FaUserCog>
                        Make Admin
                      </Link>
                    )}
                  </td>
                  <td>
                    <Link className="btn btn-sm bg-error text-white flex items-center justify-center gap-2">
                      <FaRegTrashAlt className="text-2xl"></FaRegTrashAlt>{" "}
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
