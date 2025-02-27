import React, { useState } from "react";
import Hero from "../components/Studio/Hero";
import TrustedPartners from "../components/Studio/TrustedPartners";
import Services from "../components/Studio/Services";
import About from "../components/Studio/About";
import Work from "../components/Studio/Work";

function Studio() {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  return (
    <div className="">
      {/* Hero Section */}
      <Hero onImageLoad={() => setHeroImageLoaded(true)} />

      {/* Render other sections only after Hero image has loaded */}
      {heroImageLoaded && (
        <>
          <Services />
          <About />
          <Work />
          <TrustedPartners />
        </>
      )}
    </div>
  );
}

export default Studio;
