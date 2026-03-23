import React from "react";
import Featured from "../components/Featured";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero />
      {/* <Featured /> */}
      <Services />
      <Gallery />
    </div>
  );
}

export default Home;
