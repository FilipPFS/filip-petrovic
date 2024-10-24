import AboutDesc from "@/components/AboutDesc";
import AboutDiplomas from "@/components/AboutDiplomas";
import AboutSkills from "@/components/AboutSkills";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-8 items-center pb-10">
      <AboutDesc />
      <AboutSkills />
      <AboutDiplomas />
    </div>
  );
};

export default About;
