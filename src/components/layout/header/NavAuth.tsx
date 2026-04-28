import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const NavAuth = ({
  lang,
  isAuthenticated,
}: {
  lang: LangType;
  isAuthenticated: boolean;
}) => {
  const t = translations[lang].auth;

  return (
    <ul className="text-white text-sm flex items-center justify-center text-center">
      {isAuthenticated ? (
        <>
          <li className="ml-4">
            <Link href={`/${lang}/account`}>{t.profile}</Link>
          </li>
          <LogoutButton lang={lang} />
        </>
      ) : (
        <li className="ml-4">
          <Link href={`/${lang}/signin`}>{t.signin}</Link>
        </li>
      )}
    </ul>
  );
};

export default NavAuth;
