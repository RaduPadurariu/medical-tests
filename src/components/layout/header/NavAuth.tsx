"use client";

import { useLanguageContext } from "@/context/languageContext/useLanguageContext";
import { translations } from "@/data/translations";
import Link from "next/link";

const NavAuth = () => {
  const { lang } = useLanguageContext();
  const t = translations[lang].auth;

  return (
    <ul className="text-white text-sm flex items-center justify-center text-center">
      <li className="ml-4">
        <Link href={"/register"}>{t.signup}</Link>
      </li>
      <li className="ml-4">
        <Link href={"/login"}>{t.login}</Link>
      </li>
      {/* <li className="ml-4">
        <Link href={"/account"}>{t.profile}</Link>
      </li>
      <li className="ml-4">
        <button className="cursor-pointer">{t.logout}</button>
      </li> */}
    </ul>
  );
};

export default NavAuth;
