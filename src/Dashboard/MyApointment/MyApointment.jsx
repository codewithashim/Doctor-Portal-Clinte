import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";

const MyApointment = () => {
  const { user } = useContext(AuthContext);
  // const url = `http://localhost:8000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8000/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accesToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <>
      <div className="text-3xl py-4">
        <h1>My Appointment</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>SERVICE</th>
              <th>DATE</th>
              <th>TIME</th>
              <th>STATUS</th>
              <th>PAYMENT</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.length &&
              bookings?.map((booking, i) => {
                const {
                  _id,
                  precentName,
                  selectedDate,
                  tritment,
                  slot,
                  price,
                } = booking;
                return (
                  <tr key={_id}>
                    <th>{i + 1}</th>
                    <td>{precentName}</td>
                    <td>{tritment}</td>
                    <td>{selectedDate}</td>
                    <td>{slot}</td>
                    <td>
                      {
                        // if booking.paid is true then show this
                        booking.price && booking.paid ? (
                          <span className="text-green-500">Paid</span>
                        ) : (
                          // if booking.paid is false then show this

                          <span className="text-red-500">Pending</span>
                        )
                      }
                    </td>
                    <td>
                      {price && !booking.paid && (
                        <>
                          <Link
                            to={`/dashboard/payment/${_id}`}
                            className="btn btn-primary btn-sm"
                          >
                            Pay Now
                          </Link>
                        </>
                      )}
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

export default MyApointment;
