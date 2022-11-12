import React from "react";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import InfoSection from "../InfoSection/InfoSection";
import MakeApointment from "../MakeApointment/MakeApointment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Tritment from "../Tritment/Tritment";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <InfoSection></InfoSection>
      <Services></Services>
      <Tritment></Tritment>
      <MakeApointment></MakeApointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </>
  );
};

export default Home;
