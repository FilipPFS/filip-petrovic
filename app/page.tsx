import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HomeProjects from "@/components/HomeProjects";
import Services from "@/components/Services";
import React from "react";

const Home = () => {
  return (
    <div className="p-4 sm:p-12 py-14 flex flex-col gap-16">
      <Hero />
      <Services />
      <HomeProjects />
      <Contact />
    </div>
  );
};

export default Home;
