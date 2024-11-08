"use client";

import { useState } from "react";
import CodeToCopy from "./CodeToCopy";
import clsx from "clsx";
import { FaCode, FaRegCirclePlay } from "react-icons/fa6";

type Props = {
  component: JSX.Element;
  readFile: string;
};

const SelectCodeOrJsx = ({ component, readFile }: Props) => {
  const [selected, setSelected] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      <section className="flex gap-3">
        <button
          className={clsx(
            "flex gap-2 items-center px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg",
            selected && "bg-blue-700"
          )}
          onClick={() => setSelected(true)}
        >
          <FaRegCirclePlay />
          Preview
        </button>
        <button
          className={clsx(
            "flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg",
            !selected && "bg-blue-700"
          )}
          onClick={() => setSelected(false)}
        >
          <FaCode />
          Code
        </button>
      </section>

      <section className="bg-gray-900 border-2 border-opacity-20 border-blue-300 rounded-xl h-[200px] flex justify-center items-center">
        {selected ? (
          <span>{component}</span>
        ) : (
          <CodeToCopy text={readFile} id="1" />
        )}
      </section>
    </div>
  );
};

export default SelectCodeOrJsx;
