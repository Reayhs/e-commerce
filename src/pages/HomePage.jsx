import React from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Services from "../components/Services";
import Contact from "../components/Contact";

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </>
  );
}

export default HomePage;
