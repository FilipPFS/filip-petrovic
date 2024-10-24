"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SiCloudinary,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";

const AboutSkills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col px-4 items-center gap-5">
      <h1 className="text-3xl font-semibold">Mes comptétences</h1>
      <section className="flex flex-col items-center gap-3">
        <h2 className="text-xl">Front-End</h2>
        <div
          data-aos="zoom-in"
          className="flex flex-wrap justify-center items-center gap-3"
        >
          <FaHtml5 className="text-5xl text-blue-100" />
          <FaCss3 className="text-5xl text-blue-100" />
          <SiTailwindcss className="text-5xl text-blue-100" />
          <FaJs className="text-5xl text-blue-100" />
          <SiTypescript className="text-[42px] text-blue-100" />
          <FaReact className="text-5xl text-blue-100" />
          <SiNextdotjs className="text-5xl text-blue-100" />
        </div>
      </section>
      <section className="flex flex-col items-center gap-3">
        <h2 className="text-xl">Back-End</h2>
        <div
          data-aos="zoom-in"
          className="flex flex-wrap  justify-center items-center gap-3"
        >
          <FaNodeJs className="text-5xl text-blue-100" />
          <SiMongodb className="text-5xl text-blue-100" />
          <SiNextdotjs className="text-5xl text-blue-100" />
          <SiCloudinary className="text-5xl text-blue-100" />
          <SiStripe className="text-5xl text-blue-100" />
        </div>
      </section>
      <section className="flex flex-col items-center gap-3">
        <h2 className="text-xl">Meta Projets</h2>
        <div
          data-aos="zoom-in"
          className="flex flex-wrap justify-center items-center gap-3"
        >
          <FaGit className="text-5xl text-blue-100" />
          <FaGithub className="text-5xl text-blue-100" />
        </div>
      </section>
    </div>
  );
};

export default AboutSkills;
