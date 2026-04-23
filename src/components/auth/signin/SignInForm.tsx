"use client";

import GoogleMark from "@/components/auth/GoogleMark";
import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
import { signIn } from "next-auth/react";

const SignInForm = ({ lang }: { lang: LangType }) => {
  const t = translations[lang].signinPage;

  return (
    <div className="mx-auto mt-20 max-w-md rounded-xl border border-(--border-color) bg-white p-6 shadow-sm md:p-8">
      <button
        type="button"
        onClick={() => signIn("google", { callbackUrl: `/${lang}` })}
        className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-700 shadow-sm transition-[box-shadow,background-color,border-color] hover:bg-neutral-50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        <GoogleMark className="h-5 w-5 shrink-0" />
        <span>{t.continueWithGoogle}</span>
      </button>
      {/* <p className="mt-6 text-center text-sm text-neutral-600">
        {t.switchPrompt}{" "}
        <Link
          href={`/${lang}/register`}
          className="font-medium text-(--secondary-color) underline-offset-2 hover:underline"
        >
          {t.switchLink}
        </Link>
      </p> */}
    </div>
  );
};

export default SignInForm;
