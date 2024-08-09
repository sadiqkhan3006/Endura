import React from "react";
import Hero from "../components/Hero";
import { Features } from "../components/Features";
import { Team } from "../components/Team";

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Team />
    </div>
  );
}

export default Home;
