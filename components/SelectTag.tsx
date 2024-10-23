"use client";

import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const categories = ["Tous", "React", "Node.js", "Next.js", "MERN Stack"];

const SelectTag = () => {
  const [category, setCategory] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const onSelectCategory = (category: string) => {
    let newUrl = "";
    if (category && category !== "All") {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: category,
      });
    } else {
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["query"],
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <select
      className="h-[50px] px-4 bg-blue-950 rounded-md"
      value={category}
      onChange={(e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        onSelectCategory(selectedCategory);
      }}
    >
      {categories.map((category) => (
        <option key={category} value={category} className="text-white">
          {category}
        </option>
      ))}
    </select>
  );
};

export default SelectTag;
