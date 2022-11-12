import React from "react";
import Quites from "../../../assets/icons/quote.svg";
import pepole1 from "../../../assets/images/people1.png";
import pepole2 from "../../../assets/images/people2.png";
import pepole3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial/Testimonial";

const testimonialData = [
  {
    id: 1,
    name: "Winson Herry",
    from: "California",
    img: pepole1,
    descibctions:
      "I'm very happy with the service I received from Dr. Smith and his staff. They are very professional and friendly. I would highly recommend them to anyone looking for a dentist.",
  },
  {
    id: 2,
    name: "Jhon Herry",
    from: "California",
    img: pepole2,
    descibctions:
      "I'm very happy with the service I received from Dr. Smith and his staff. They are very professional and friendly. I would highly recommend them to anyone looking for a dentist.",
  },
  {
    id: 3,
    name: "Rebeka Herry",
    from: "California",
    img: pepole3,
    descibctions:
      "So chipe cost and good service , I'm very happy with the service I received from Dr. Smith and his staff. They are very professional and friendly. I would highly recommend them to anyone looking for a dentist.",
  },
];

const Testimonials = () => {
  return (
    <section className="p-10">
      <div className="testimonialTitle flex justify-between p-10">
        <div className="TitleText">
          <h1 className="text-secondary font-bold text-2xl">Testimonial</h1>
          <p className="text-3xl ">What Our Patients Says</p>
        </div>
        <img src={Quites} alt="Testimonial" className="w-[5rem]" />
      </div>
      <div className="testimonialContainer md:flex gap-4 p-4">
        {testimonialData.map((testimonial) => {
          return (
            <Testimonial
              key={testimonial.id}
              testimonial={testimonial}
            ></Testimonial>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
