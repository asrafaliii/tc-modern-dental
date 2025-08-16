import React from "react";
import Hero from "./Sections/Hero";
import AboutUs from "./Sections/AboutUs";
import Counters from "./Sections/Counters";
import WhyChoose from "./Sections/WhyChoose";
import FAQ from "./Sections/FAQ";
import Testimonials from "./Sections/Testimonials";
import Services from "./Sections/Services";
import ContactInfo from "./Sections/ContactInfo";

const Home = () => {
  return (
    <div className="">
      <Hero />
      {/* <ContactInfo /> */}
      <AboutUs />
      <Services />
      {/* <WhyChoose /> */}
      {/* <Counters /> */}
      <FAQ />
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;
