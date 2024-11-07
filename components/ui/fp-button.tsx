// componets/ui/fp-button.tsx

import clsx from "clsx";
import Image from "next/image";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";

type Props = {
  icon?: ReactElement | string | IconType | undefined;
  children?: React.ReactNode;
  href?: string;
  containerClassName?: string;
  onClick?: () => void;
  markerFill?: string;
};

const FpButton = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
}: Props) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center w-fit h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        {icon &&
          (typeof icon === "string" ? (
            <Image
              src={icon}
              width={40}
              height={40}
              alt="icon"
              className="size-10 object-contain mr-5 z-10"
            />
          ) : (
            <>{icon}</>
          ))}

        <span className="relative font-poppins font-bold text-blue-200 uppercase">
          {children}
        </span>
      </span>

      <span className="glow-before" />
      <span className="glow-after" />
    </>
  );
  return href ? (
    <a
      className={clsx(
        "relative block w-fit p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative block w-fit p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default FpButton;
