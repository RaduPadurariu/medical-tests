"use client";

import { translations } from "@/data/translations";
import { LangType, NavLinkType } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarActiveLink = ({
  item,
  setNavOpen,
  lang,
}: {
  lang: LangType;
  item: NavLinkType;
  setNavOpen: (value: boolean) => void;
}) => {
  const t = translations[lang].nav;

  const pathname = usePathname();

  const localizedHref = item.href === "/" ? `/${lang}` : `/${lang}${item.href}`;

  const isActive =
    localizedHref === `/${lang}`
      ? pathname === `/${lang}`
      : pathname.startsWith(localizedHref);

  return (
    <li className="py-3.75 pl-5 md:pl-7 group">
      <Link
        onClick={() => setNavOpen(false)}
        href={localizedHref}
        className={`relative text-[17px] md:text-[15px] py-0 px-0.5 font-medium flex items-center justify-between md:before:content-[''] md:before:absolute md:before:left-0 md:before:-bottom-1.5 md:before:h-0.5 md:before:bg-(--secondary-color) md:before:transition-all md:before:duration-300 ${isActive ? "text-(--secondary-color) md:before:w-full" : "text-(--primary-color) md:before:w-0 md:group-hover:text-(--secondary-color) md:group-hover:before:w-full"}`}
      >
        {t[item.key]}
      </Link>
    </li>
  );
};

export default NavbarActiveLink;
