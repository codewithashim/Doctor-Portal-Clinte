import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import ApointmentOpction from "./ApointmentOpction/ApointmentOpction";
import BookingModal from "../BookingModal/BookingModal";
import Loading from "../../Sheards/Loading/Loading";

const AvailableApointment = ({ selectedDate }) => {
  const [tritment, setTritment] = useState(null);
  const date = format(selectedDate, "PP");
  // Queries
  
  const { data: availableApointment = [], refetch, isLoading } = useQuery({
    queryKey: ["apointmentOpction", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8000/apointmentOpction?date=${date}`
      );
      const data = await res.json();
      const mainData = data.data;
      return mainData;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <div>
        <h2 className="text-2xl p-4 font-bold text-center text-secondary">
          Available Apointment on {format(selectedDate, "PP")}
        </h2>
      </div>

      <div className="availabeleOpctionContainer gap-3 grid md:grid-cols-3">
        {availableApointment.map((apointment) => {
          return (
            <ApointmentOpction
              setTritment={setTritment}
              tritment={tritment}
              key={apointment._id}
              apointment={apointment}
            ></ApointmentOpction>
          );
        })}
      </div>
      {tritment && (
        <BookingModal
          setTritment={setTritment}
          tritment={tritment}
          refetch={refetch}
          selectedDate={selectedDate}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableApointment;
