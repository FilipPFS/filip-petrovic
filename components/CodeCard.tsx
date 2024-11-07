import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  slug: string;
  title: string;
};

const CodeCard = ({ image, slug, title }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="block p-4 border-4 border-opacity-15 border-blue-200 rounded-2xl">
        <Link href={`/code/${slug}`}>
          <Image
            src={image}
            alt="componenet preview"
            width={400}
            height={200}
          />
        </Link>
      </div>
      <h1 className="uppercase text-xl font-bold text-blue-200 text-center">
        {title}
      </h1>
    </div>
  );
};

export default CodeCard;
