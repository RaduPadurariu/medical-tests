import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
import Link from "next/link";

const NavAuth = ({ lang }: { lang: LangType }) => {
  const t = translations[lang].auth;

  return (
    <ul className="text-white text-sm flex items-center justify-center text-center">
      <li className="ml-4">
        <Link href={`/${lang}/register`}>{t.signup}</Link>
      </li>
      <li className="ml-4">
        <Link href={`/${lang}/login`}>{t.login}</Link>
      </li>
      {/* <li className="ml-4">
        <Link href={`/${lang}/account`}>{t.profile}</Link>
      </li>
      <li className="ml-4">
        <button className="cursor-pointer">{t.logout}</button>
      </li> */}
    </ul>
  );
};

export default NavAuth;
