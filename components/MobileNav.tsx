import { headerLinks } from "@/constants";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileNav = ({ setMobileOpen }: Props) => {
  return (
    <nav className="sm:hidden block bg-[#08081e] fixed w-full top-0 pt-40 left-0 min-h-screen z-30  opacity-0 animate-fadein">
      <ul className="flex flex-col gap-8 px-6 w-full">
        {headerLinks.map((hLink) => (
          <li className="w-full">
            <Link
              onClick={() => setMobileOpen(false)}
              href={hLink.route}
              className="w-full block text-[23px] relative after-line hover:text-blue-100"
            >
              {hLink.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
