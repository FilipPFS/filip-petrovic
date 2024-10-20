import React from "react";
import { Button } from "./ui/moving-border";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

type Props = {
  color?: string;
};

const SocialButtons = ({ color }: Props) => {
  return (
    <section className="flex items-center gap-4">
      <Button className={`bg-[${color}] hover:bg-blue-950 p-2`}>
        <a href="https://github.com/FilipPFS" target="_blank">
          <FaGithub />
        </a>
      </Button>
      <Button className={`bg-[${color}] hover:bg-blue-950 p-2`}>
        <a href="https://x.com/fp__business" target="_blank">
          <FaXTwitter />
        </a>
      </Button>
      <Button className={`bg-[${color}] hover:bg-blue-950 p-2`}>
        <a
          href="https://www.linkedin.com/in/filip-petrovic-business/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </Button>
    </section>
  );
};

export default SocialButtons;
