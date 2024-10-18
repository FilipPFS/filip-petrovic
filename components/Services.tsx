"use client";

import React, { useEffect } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { services } from "@/constants";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="p-0 sm:p-8 flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold">Mes services</h1>
      <div className="flex items-stretch justify-between w-full flex-col gap-6 lg:flex-row">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full lg:w-[30%] h-full"
            data-aos="fade-up"
          >
            <BackgroundGradient className="rounded-md p-4 sm:p-10 bg-[#0f0f36] text-white flex flex-col gap-4 items-center">
              <p className="text-xl sm:text-2xl lg:text-2xl w-[90%] text-center">
                {service.title}
              </p>
              <p className="text-sm text-center">{service.description}</p>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
