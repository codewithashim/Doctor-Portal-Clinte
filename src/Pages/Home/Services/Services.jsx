import React from "react";
import Fluroide from "../../../assets/images/fluoride.png";
import Whitening from "../../../assets/images/whitening.png";
import Cavity from "../../../assets/images/cavity.png";
import Service from "./Service/Service";

const servicesData = [
  {
    id: 1,
    title: "Fluoride Treatment",
    description:
      "Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay. It works by strengthening tooth enamel, making it more resistant to decay.",
    img: Fluroide,
  },
  {
    id: 2,
    title: "Cavity Filling",
    description:
      "Cavity filling is a dental procedure that repairs and restores the surface of a tooth that has been damaged by decay.",
    img: Cavity,
  },
  {
    id: 3,
    title: "Teeth Whitening",
    description:
      "Teeth whitening is a common dental procedure that can lighten the color of your teeth. It can be done in a dentist's office or at home.",
    img: Whitening,
  },
];

const Services = () => {
  return (
    <section>
      <div className="text-center my-4">
        <h2 className="font-bold text-3xl mb-1 text-center text-secondary">
          Services
        </h2>
        <p className="text-2xl">Services We Provide</p>
      </div>
      <div className="servicesSection md:flex gap-4 p-4">
        {servicesData.map((service) => {
          return <Service key={service.id} service={service}></Service>;
        })}
      </div>
    </section>
  );
};

export default Services;
