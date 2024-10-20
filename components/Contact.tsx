"use client";

import React, { useEffect } from "react";
import { Button } from "./ui/moving-border";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div id="contact" className="flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold">Contactez-moi</h1>
      <section className="w-full flex flex-col md:flex-row gap-10 md:justify-between px-4 md:px-6 lg:px-10">
        <div
          data-aos="fade-left"
          className="flex flex-col items-center md:items-start gap-4 w-full md:w-[50%]"
        >
          <h2 className="text-xl text-center sm:text-2xl">
            Mes informations de contact
          </h2>
          <p className="text-center sm:text-left w-full sm:w-[80%]">
            Vous trouverez ici mes informations de contact ainsi que mon
            adresse. Vous pouvez me contacter via la messagerie sur Linkedin ou
            m'enoyer un message grâce au formulaire.
          </p>
          <span className="border border-opacity-30 border-white w-full"></span>
          <div className="text-gray-300 flex flex-col gap-6">
            <span className="flex items-center gap-4">
              <FaLocationDot className="text-3xl" /> Montmagny 95360
            </span>
            <span className="flex items-center gap-4">
              <FaEnvelope className="text-3xl" /> filippetrovicfr04@gmail.com
            </span>
            <span className="flex items-center gap-4">
              <FaPhone className="text-3xl" /> 07 68 45 00 84
            </span>
            <span className="border border-opacity-30 border-white w-full"></span>
            <button className="relative sm:inline-flex w-fit h-8 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-fit cursor-pointer items-center justify-center rounded-md bg-slate-950 hover:bg-slate-900 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                <a
                  href={"https://www.linkedin.com/in/filip-petrovic-business/"}
                  className="text:sm sm:text-xs lg:text-sm"
                  target="_blank"
                >
                  Envoyer un message sur Linkedin
                </a>
              </span>
            </button>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-col items-center md:items-start gap-4"
        >
          <h2 className="text-xl md:text-2xl">Envoyer un message</h2>
          <Button
            duration={9000}
            className="p-6 w-[320px] lg:w-[400px] xl:w-[500px] border-[1px] border-opacity-10 border-blue-100"
          >
            <form className="flex flex-col gap-4 w-full">
              <input
                className="input-field bg-transparent border-2 border-opacity-20 border-blue-100"
                placeholder="Nom complet"
                required
              />
              <input
                className="input-field bg-transparent border-2 border-opacity-20 border-blue-100"
                placeholder="Email"
                required
              />
              <textarea
                className="textarea-field h-40 bg-transparent border-2 border-opacity-20 border-blue-100"
                placeholder="Votre message"
                required
              />
              <input
                type="submit"
                value="Envoyer"
                className="w-full bg-transparent cursor-pointer p-2 rounded-md font-semibold hover:bg-slate-950 border border-blue-700 border-opacity-50"
              />
            </form>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
