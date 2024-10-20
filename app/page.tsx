import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HomeProjects from "@/components/HomeProjects";
import Services from "@/components/Services";
import Message from "@/lib/database/models/Message";
import mongoose from "mongoose";
import React from "react";

const Home = () => {
  console.log("MODELS", mongoose.models);
  console.log("MESSAGE", Message);
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
