import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import SocialButtons from "./SocialButtons";

const Footer = () => {
  const words = "Vous trouvez mon profil interessant?";

  function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  return (
    <footer className="mt-auto p-10 flex flex-col items-center gap-5 bg-grid-white/[0.2]">
      <div className="flex items-center justify-center">
        <TextGenerateEffect
          duration={2}
          filter={false}
          words={words}
          className="text-center"
        />
      </div>
      <button className="relative sm:inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 hover:bg-slate-900 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
          <a
            href="https://res.cloudinary.com/dd2syl2jl/image/upload/v1731056867/CV_-_Developpeur_Web_h9jobk.pdf"
            target="_blank"
          >
            Télécharger mon CV
          </a>
        </span>
      </button>
      <div className="w-full flex flex-col gap-3 items-center sm:flex-row justify-between">
        <span>Filip Petrovic © {getCurrentYear()}</span>
        <SocialButtons color="#0f0f36" />
      </div>
    </footer>
  );
};

export default Footer;
