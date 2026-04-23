"use client";

import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const NavAuth = ({ lang }: { lang: LangType }) => {
  const t = translations[lang].auth;
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <ul className="text-white text-sm flex items-center justify-center text-center">
      {isAuthenticated ? (
        <>
          <li className="ml-4">
            <Link href={`/${lang}/account`}>{t.profile}</Link>
          </li>
          <li className="ml-4">
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => signOut({ callbackUrl: `/${lang}` })}
            >
              {t.logout}
            </button>
          </li>
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
