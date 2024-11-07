import CodeCard from "@/components/CodeCard";
import assets from "@/constants/assets";
import React from "react";

const Code = () => {
  return (
    <div className="px-4 sm:px-14 sm:p-12 py-14 flex flex-col gap-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {assets.map((item) => (
          <CodeCard image={item.img} slug={item.slug} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Code;
