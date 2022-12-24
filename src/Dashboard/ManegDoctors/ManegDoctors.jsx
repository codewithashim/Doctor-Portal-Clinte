import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Swal from "sweetalert2";
import ActionModal from "../../Components/ActionModal/ActionModal";
import Loading from "../../Pages/Sheards/Loading/Loading";
import ManegDoctor from "./ManegDoctor/ManegDoctor";

const ManegDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);

  const clouseModal = () => {
    setDeleteDoctor(null);
  };

  const { data: manegDoctor = [], isLoading, refetch } = useQuery({
    queryKey: ["manegDoctor"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/doctors`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accesToken")}`,
        },
      });
      const data = await res.json();
      return data.data;
    },
  });

  const hendelDeleteDoctor = (id) => {
    fetch(`http://localhost:8000/doctors/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accesToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
        refetch();
      });
  };

  if (isLoading) return <Loading></Loading>;

  return (
    <section>
      <div>
        <h1 className="text-2xl font-bold">Maneg Doctors</h1>
        <div className="divider"></div>
      </div>
      <div className="manegeDoctorsContainer">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>PROFILE</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>SPECIALITY</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {manegDoctor.map((doctor, i) => (
                <ManegDoctor
                  key={doctor._id}
                  i={i}
                  doctor={doctor}
                  setDeleteDoctor={setDeleteDoctor}
                ></ManegDoctor>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {deleteDoctor && (
        <ActionModal
          title={`Are you sure you want to delete ${deleteDoctor.name}`}
          message="This action cannot be undone"
          henselAction={() => hendelDeleteDoctor(deleteDoctor._id)}
          modalData={deleteDoctor}
          clouseModal={clouseModal}
          sucessBtnName="Delete"
        ></ActionModal>
      )}
    </section>
  );
};

export default ManegDoctors;
