import FpButton from "@/components/ui/fp-button";
import path from "path";
import fs from "fs";
import { FaXTwitter } from "react-icons/fa6";

const assets = [
  {
    test: true,
    slug: "custom-animated-button",
    title: "Button Animé - Personnalisable",
    desc: "Bouton ou lien avec un effet d'animation au survol.",
    img: "https://res.cloudinary.com/dd2syl2jl/image/upload/v1730977848/BUTTON_timjbp.webp",
    component: (
      <FpButton
        containerClassName="text-blue-200"
        icon={<FaXTwitter className="text-2xl object-contain mr-5 z-10" />}
        href="https://x.com/fp__business"
      >
        Mon Compte Twitter
      </FpButton>
    ),
    code: `
import FpButton from "@/components/ui/fp-button";
import { FaLinkedin } from "react-icons/fa6";

const Test = () => {
  return (
    <FpButton
      containerClassName="text-blue-200"
      icon={<FaLinkedin className="text-2xl object-contain mr-5 z-10" />}
      href="https://www.linkedin.com/in/filip-petrovic-business/"
    >
      Voir mon Linkedin
    </FpButton>
  );
};

export default Test;
    `,
    readFile: fs.readFileSync(
      path.join(`components/ui/fp-button.tsx`),
      "utf-8"
    ),
    installation: `
    npm i clsx
    npm i react-icons
    `,
    configFile: `
    boxShadow: {
        500: "0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(40, 51, 111, 0.7)",
      },
    fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    `,
    globals: `
@layer utilities {
  .base-bold {
    @apply text-[16px] font-bold leading-[24px];
  }

  .glow-before {
    @apply before:g8 before:absolute before:left-[40%] before:top-0 before:z-[4] before:h-0.5 before:w-[60%] before:opacity-0 before:transition-all before:duration-500 before:content-[''] group-hover:before:left-4 group-hover:before:opacity-40;
  }

  .glow-after {
    @apply after:g8 after:absolute after:bottom-0 after:left-4 after:z-[4] after:h-0.5 after:w-[35%] after:opacity-0 after:transition-all after:duration-500 after:content-[''] group-hover:after:left-[60%] group-hover:after:opacity-40;
  }

  .inner-before {
    @apply before:g7 before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500 before:content-[''];
  }

  .g4 {
    background: linear-gradient(#253575, #162561);
  }

  .g5 {
    background: linear-gradient(#334679, #162561);
  }

  .g7 {
    background: linear-gradient(#1b275a, #0e1434);
  }

  .g8 {
    background: linear-gradient(to right, transparent, #2ef2ff, transparent);
  }
}
    `,
  },
];

export default assets;
