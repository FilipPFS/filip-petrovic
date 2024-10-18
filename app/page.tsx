import Hero from "@/components/Hero";
import Services from "@/components/Services";
import React from "react";

const Home = () => {
  return (
    <div className="p-12 py-14 flex flex-col gap-16">
      <Hero />
      <Services />
    </div>
  );
};

export default Home;
