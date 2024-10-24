import { diplomaList } from "@/constants";
import React from "react";

type Props = {};

const AboutDiplomas = (props: Props) => {
  return (
    <div className="w-full py-8 bg-[#09092c] flex flex-col gap-5 items-center">
      <h1 className="text-3xl font-semibold">Ma formation</h1>
      <ol className="relative border-s border-blue-100 flex flex-col w-[90%] sm:w-[80%] lg:w-[60%]">
        {diplomaList.map((diploma) => (
          <li key={diploma.title} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <div data-aos="zoom-in" className="w-full">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {diploma.time}
              </time>
              <h3 className="text-xl font-semibold mt-2 text-blue-200">
                {diploma.title}
              </h3>
              <p className="mb-4 text-base font-normal mt-2 text-white">
                {diploma.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AboutDiplomas;
