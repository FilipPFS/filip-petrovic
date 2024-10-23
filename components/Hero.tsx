"use client";

import React, { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "./ui/typewritter-effect";
import Image from "next/image";
import SocialButtons from "./SocialButtons";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const startWords = [
    {
      text: "Développeur",
    },
  ];
  const [words, setWords] = useState<
    {
      text: string;
      className?: string;
    }[][]
  >([
    [{ text: "JavaScript", className: "text-purple-200" }],
    [{ text: "React/Next.js", className: "text-purple-200" }],
    [{ text: "TypeScript", className: "text-purple-200" }],
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000); // 8000 milliseconds = 8 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="flex flex-col gap-12 sm:flex-row items-center sm:justify-center">
      <section className="w-full sm:w-[60%] flex flex-col items-center sm:items-start gap-4">
        <div className="flex flex-col sm:flex-row items-center sm:gap-2">
          <TypewriterEffectSmooth words={startWords} />
          {index === 0 && <TypewriterEffectSmooth words={words[index]} />}
          {index === 1 && <TypewriterEffectSmooth words={words[index]} />}
          {index === 2 && <TypewriterEffectSmooth words={words[index]} />}
        </div>
        <p className="mb-3 text-center text-[13px] sm:text-left sm:text-[14px] md:text-[16px] 2xl:text-[18px] w-[90%] sm:w-[80%]">
          Bonjour, je suis Filip Petrovic. Vous trouverez sur ce site mon
          parcours en tant qu'un Développeur Web, mes projets, mes réseaux et
          mes contacts.
        </p>
        <SocialButtons color="#191970" />
      </section>
      <section className="flex flex-col items-center p-6 sm:p-0">
        <Image
          src={"/assets/images/photo.webp"}
          alt="personal photo"
          width={350}
          height={350}
        />
      </section>
    </div>
  );
};

export default Hero;
