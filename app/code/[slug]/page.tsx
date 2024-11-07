import CodeToCopy from "@/components/CodeToCopy";
import SelectCodeOrJsx from "@/components/SelectCodeOrJsx";
import FpButton from "@/components/ui/fp-button";
import assets from "@/constants/assets";
import React from "react";
import { FaLinkedin } from "react-icons/fa6";

const CodePage = ({ params: { slug } }: { params: { slug: string } }) => {
  const template = assets.find((item) => item.slug === slug);

  return (
    <div className="px-4 sm:px-14 sm:p-12 py-14 flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-4xl text-blue-200 font-bold">
            {template?.title}
          </h1>
          <p className="text-gray-300 text-lg mt-2">{template?.desc}</p>
        </div>
        <SelectCodeOrJsx
          component={template!.component}
          readFile={template!.readFile}
        />
        <h1 className="text-2xl font-bold mt-6">Installation</h1>
        <CodeToCopy text={template!.installation} id="2" />
        <h3>
          Ajoutez dans <span className="text-gray-300">tailwind.config.ts</span>
        </h3>
        <CodeToCopy text={template!.configFile} id="3" />
        <h3>
          Ajoutez dans le <span className="text-gray-300">globals.css</span>
        </h3>
        <CodeToCopy text={template!.globals} id="4" />
        <h1 className="text-2xl font-bold mt-6">Exemple</h1>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <CodeToCopy text={template!.code} id="5" />
          <span className="flex justify-center w-full md:w-[30%]">
            {template!.test && (
              <FpButton
                containerClassName="text-blue-200"
                icon={
                  <FaLinkedin className="text-2xl object-contain mr-5 z-10" />
                }
                href="https://www.linkedin.com/in/filip-petrovic-business/"
              >
                Voir mon Linkedin
              </FpButton>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CodePage;
