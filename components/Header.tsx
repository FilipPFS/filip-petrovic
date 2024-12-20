"use client";

import { headerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import clsx from "clsx";

const Header = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      clearTimeout(timeout); // Clear the timeout to avoid multiple triggers
      timeout = setTimeout(() => {
        setHasScrolled(window.scrollY > 40); // Adjust threshold as needed
      }, 50); // Debounce delay in milliseconds
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout); // Clean up the timeout
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={clsx(
          "sticky top-0 p-6 px-8 md:px-16 flex items-center justify-between z-50 transition-all duration-300 ease-in-out", // Smooth transitions
          hasScrolled ? "h-[100px] bg-[#03030f]" : "h-[150px]"
        )}
      >
        <Link href={"/"} className="w-[120px]">
          <Image
            src={"/assets/images/logofp.webp"}
            width={65}
            height={65}
            alt="logo"
          />
        </Link>
        <nav className="bg-[#08081e] rounded-lg px-5 py-1 border border-light-blue-opacity hidden sm:block">
          <ul className="flex items-center gap-4">
            {headerLinks.map((hLink) => (
              <li
                key={hLink.label}
                className="inline-block py-2 px-4 transition-all duration-300 ease-in-out hover:text-blue-50 hover:-translate-y-1.5"
              >
                <Link href={hLink.route}>{hLink.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="hidden relative sm:inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 hover:bg-slate-900 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
            <Link href={"/#contact"}>Contacter Moi</Link>
          </span>
        </button>
        <button
          onClick={() => setOpenMobile(!openMobile)}
          className="flex relative w-10 h-10 sm:hidden items-center justify-center"
        >
          <span
            className={`block absolute w-full h-1 rounded-sm bg-white transition-transform duration-300 ${
              openMobile ? "rotate-45" : "-translate-y-2"
            }`}
          ></span>
          <span
            className={`block absolute w-full h-1 rounded-sm bg-white transition-transform duration-300 ${
              openMobile ? "-rotate-45" : "translate-y-2"
            }`}
          ></span>
        </button>
      </header>
      {openMobile && <MobileNav setMobileOpen={setOpenMobile} />}
    </>
  );
};

export default Header;
