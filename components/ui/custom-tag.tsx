import Link from "next/link";
import React from "react";

type Props = {
  text: string;
};

const CustomTag = ({ text }: Props) => {
  return (
    <button className="relative sm:inline-flex h-8 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full items-center justify-center rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
        {text}
      </span>
    </button>
  );
};

export default CustomTag;
