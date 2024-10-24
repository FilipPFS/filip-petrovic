import Link from "next/link";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <main className="p-20 flex gap-10 justify-center items-center">
      <div>
        <FaExclamationTriangle className="text-9xl text-white" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">Page non trouvé</h1>
        <p>Cette page n'existe pas.</p>
        <Link href="/" className="underline">
          Revenir à l'accueil
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
