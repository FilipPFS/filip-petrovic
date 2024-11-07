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
