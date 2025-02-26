import React from "react";
import Hero from "../components/Studio/Hero";
import TrustedPartners from "../components/Studio/TrustedPartners";
import Services from "../components/Studio/Services";
import About from "../components/Studio/About";
import Work from "../components/Studio/Work";
function Studio() {
  return (
    <div className="">
      <Hero />
      <Services />
      <About />
      <Work />
      <TrustedPartners />
    </div>
  );
}

export default Studio;
