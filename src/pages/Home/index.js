import React from "react";
import Hero from "../../components/Hero";
import Nav from "../../components/navbar";
import Events from "../../components/Past Events";
import About from "../../components/What We Do";


const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Events />
   
    </div>
  );
};

export default Home;
   