"use client";

import { LangType } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLogoLink = ({ lang }: { lang: LangType }) => {
  const pathname = usePathname();

  return (
    <Link
      href={`/${lang}`}
      onClick={(event) => {
        if (pathname !== `/${lang}`) return;
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="logo flex flex-col"
    >
      <h1 className="text-[30px] m-0 font-bold text-(--heading-color)">
        Medical Tests
      </h1>
    </Link>
  );
};

export default HeaderLogoLink;
