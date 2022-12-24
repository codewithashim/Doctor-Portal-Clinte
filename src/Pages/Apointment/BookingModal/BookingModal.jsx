import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";
import Swal from "sweetalert2";

const BookingModal = ({ tritment, selectedDate, setTritment, refetch }) => {
  const { user } = useContext(AuthContext);
  const { name: tritmentName, slots, price } = tritment;
  const date = format(selectedDate, "PP");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;

    const booking = {
      email,
      phone,
      slot,
      precentName: name,
      selectedDate: date,
      tritment: tritmentName,
      price,
    };

    fetch("https://doctor-portal-server-phi.vercel.app/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sucess) {
          Swal.fire(
            "Successfully Booked Now!",
            "You clicked the button!",
            "success"
          );
          refetch();
          setTritment(null);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${data.message}`,
          });
        }
      });
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="bookignModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookignModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{tritmentName}</h3>
          <div>
            <form
              onSubmit={handleSubmit}
              action=""
              className="m-2 flex flex-col gap-4 justify-center items-center mt-10"
            >
              <input
                type="text"
                name="date"
                placeholder="Apontment Date"
                defaultValue={date}
                disabled
                className="input input-bordered input-primary w-full "
              />
              <select className="select select-primary w-full" name="slot">
                {slots.map((slot, idx) => {
                  return (
                    <option key={idx} value={slot}>
                      {slot}
                    </option>
                  );
                })}
              </select>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                readOnly
                required
                placeholder="Your Name"
                className="input input-bordered input-primary w-full "
              />
              <input
                type="number"
                name="phone"
                required
                placeholder="Your Phone"
                className="input input-bordered input-primary w-full "
              />
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                required
                placeholder="Your Email"
                className="input input-bordered input-primary w-full "
              />
              <input
                type="submit"
                value="Submit"
                className="input cursor-pointer input-bordered input-primary w-full "
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
