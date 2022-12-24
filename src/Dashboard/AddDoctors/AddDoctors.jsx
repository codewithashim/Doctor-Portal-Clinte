import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Pages/Sheards/Loading/Loading";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddDoctors = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const imgHostingKey = process.env.REACT_APP_imgbb_Key;

  const { data: spicality, isLoading } = useQuery({
    queryKey: ["spicality"],
    queryFn: async () => {
      const res = await fetch(`https://doctor-portal-server-phi.vercel.app/appointmentspciality`);
      const data = await res.json();
      return data;
    },
  });

  const hendelAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((photoData) => {
        if (photoData.success) {
          const doctorData = {
            name: data.name,
            email: data.email,
            spicality: data.spicality,
            image: photoData.data.url,
          };

          console.log(doctorData);

          // save doctor data to database

          fetch("https://doctor-portal-server-phi.vercel.app/doctors", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `bearer ${localStorage.getItem("accesToken")}`,
            },
            body: JSON.stringify(doctorData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                Swal.fire(
                  "Doctors Added Sucesfully!",
                  "You clicked the button!",
                  "success"
                );
                navigate("/dashboard/manegDoctors");
              }
              
            });
        }
      });
  };

  if (isLoading) return <Loading></Loading>;

  return (
    <section>
      <div className="text-2xl px-4">
        <h1>Add Doctors</h1>
        <div className="divider"></div>
      </div>
      <div className="w-96 p-4">
        <form onSubmit={handleSubmit((data) => hendelAddDoctor(data))}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="input input-bordered"
            />
            {errors.name?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                Name filde is required
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                Email filde is required
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Spicality</span>
            </label>
            <select
              className="select input-bordered w-full"
              name="spicality"
              {...register("spicality", { required: true })}
            >
              <option disabled selected>
                Select Spicality
              </option>
              {spicality?.map((spicalityDocter) => {
                const { _id, name } = spicalityDocter;
                return (
                  <option key={_id} value={name}>
                    {name}
                  </option>
                );
              })}
            </select>
            {errors.spicality?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                PhotoURL filde is required
              </p>
            )}
          </div>

          <div className="form-control">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Pick a file</span>
              </label>
              <input
                type="file"
                {...register("image", {
                  required: "Photo is Required",
                })}
                className="file-input file-input-bordered w-full"
              />
              {errors.img && (
                <p className="text-red-500">{errors.img.message}</p>
              )}
            </div>
            {errors.photo?.type === "required" && (
              <p role="alert" className="text-red-600 mt-1">
                PhotoURL filde is required
              </p>
            )}
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-primary w-full"
              value="Add Doctor"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddDoctors;
