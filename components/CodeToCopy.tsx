"use client";

import { useState } from "react";
import { FaCheck, FaClipboard, FaRegClipboard } from "react-icons/fa6";

type Props = {
  text: string;
  id: string;
};

const CodeToCopy = ({ text, id }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const codeBlock = document.getElementById(id);
    if (codeBlock) {
      navigator.clipboard.writeText(codeBlock.textContent || "");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="relative w-full rounded-xl bg-gray-900 p-4 h-full max-h-[300px] border-2 border-opacity-20 border-blue-300 max-md:scroll-hide overflow-auto">
      <div className="max-h-full">
        <pre>
          <code id={id} className="text-sm text-gray-300 whitespace-pre">
            {text}
          </code>
        </pre>
      </div>
      <div className="absolute top-2 right-2 bg-gray-700">
        <button
          onClick={handleCopy}
          className="text-gray-900 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border"
        >
          {isCopied ? (
            <span className="inline-flex items-center">
              <span className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-500">
                <FaCheck /> Copié
              </span>
            </span>
          ) : (
            <span className="inline-flex items-center">
              <span className="text-xs font-semibold flex items-center gap-2">
                <FaClipboard /> Copier
              </span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeToCopy;
