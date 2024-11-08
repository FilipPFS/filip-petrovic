import CodeCard from "@/components/CodeCard";
import assets from "@/constants/assets";
import React from "react";

const Code = () => {
  return (
    <div className="py-14 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-center mb-4">Code & Templates</h1>
      <div className="grid px-10 py-8 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center bg-gray-900">
        {assets.map((item) => (
          <CodeCard image={item.img} slug={item.slug} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Code;
