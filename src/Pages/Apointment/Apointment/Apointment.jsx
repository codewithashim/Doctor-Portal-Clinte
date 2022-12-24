import React, { useState } from "react";
import ApointmentHero from "../ApointmetHero/ApointmentHero";
import AvailableApointment from "../AvailableApointment/AvailableApointment";

const Apointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <section>
   
      <ApointmentHero
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      ></ApointmentHero>
      <AvailableApointment
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      ></AvailableApointment>
    </section>
  );
};

export default Apointment;
