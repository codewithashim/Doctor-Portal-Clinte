import React from "react";
import Clock from "../../../assets/icons/clock.svg";
import Marker from "../../../assets/icons/marker.svg";
import Phone from "../../../assets/icons/phone.svg";
import Info from "./Info";

const infoData = [
  {
    id: 1,
    title: "Opening Hours",
    description: "We are open 7 days 8am-8pm",
    icon: Clock,
    background: "bg-gradient-to-r from-primary to-secondary",
  },
  {
    id: 2,
    title: "Visit our location",
    description: "Brooklyn, NY 10036, United States",
    icon: Marker,
    background: "bg-accent",
  },
  {
    id: 3,
    title: "Contact us now",
    description: "+000 123 456789",
    icon: Phone,
    background: "bg-gradient-to-r from-primary to-secondary",
  },
];

const InfoSection = () => {
  return (
    <>
      <div className="md:flex gap-4 p-4">
        {infoData.map((item) => {
          return <Info key={item.id} item={item}></Info>;
        })}
      </div>
    </>
  );
};

export default InfoSection;
