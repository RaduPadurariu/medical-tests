"use client";

import { NavLinkType } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarActiveLink = ({
  item,
  setNavOpen,
}: {
  item: NavLinkType;
  setNavOpen: (value: boolean) => void;
}) => {
  const pathname = usePathname();

  const isActive =
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

  return (
    <li className="py-3.75 pl-5 sm:pl-7 group">
      <Link
        onClick={() => setNavOpen(false)}
        href={item.href}
        className={`relative text-[17px] sm:text-[15px] py-0 px-0.5 font-medium flex items-center justify-between sm:before:content-[''] sm:before:absolute sm:before:left-0 sm:before:-bottom-1.5 sm:before:h-0.5 sm:before:bg-(--secondary-color) sm:before:transition-all sm:before:duration-300 ${isActive ? "text-(--secondary-color) sm:before:w-full" : "text-(--primary-color) sm:before:w-0 sm:group-hover:text-(--secondary-color) sm:group-hover:before:w-full"}`}
      >
        {item.title}
      </Link>
    </li>
  );
};

export default NavbarActiveLink;
