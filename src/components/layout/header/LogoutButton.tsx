"use client";

import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
import { signOut } from "next-auth/react";

const LogoutButton = ({ lang }: { lang: LangType }) => {
  const t = translations[lang].auth;
  return (
    <li className="ml-4">
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => signOut({ callbackUrl: `/${lang}` })}
      >
        {t.logout}
      </button>
    </li>
  );
};

export default LogoutButton;
