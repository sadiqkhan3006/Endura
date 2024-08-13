import React from "react";
import Hero from "../components/Hero";
import { Features } from "../components/Features";
import { Team } from "../components/Team";
import { Originals } from "../components/Originals";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Edura - Train. Transform. Thrive</title>
        <meta
          name="description"
          content="Endura Fitness goes beyond just workouts. We empower you with personalized guidance, comprehensive tracking, and expert consultations to make fitness a sustainable lifestyle."
        />
        <link rel="canonical" href="https://www.endurafitness.in/" />
      </Helmet>
      <Hero />
      <Features />
      <Originals />
      <Team />
    </div>
  );
}

export default Home;
