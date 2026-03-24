"use client";

import { useLanguageContext } from "@/context/languageContext/useLanguageContext";
import { translations } from "@/data/translations";
import Link from "next/link";

const CallToActionContent = () => {
  const { lang } = useLanguageContext();
  const t = translations[lang].home.callToAction;
  return (
    <>
      <h2 className="text-3xl tracking-tight text-white md:text-4xl text-balance font-semibold">
        {t.title}
      </h2>
      <p className="mt-4 text-lg text-white/80">{t.description}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/register"
          className="inline-flex items-center gap-2 rounded-md bg-(--light-color) px-6 py-3 text-sm font-medium text-(--heading-color) transition-colors hover:bg-white after:content-['→'] after:ml-1 after:transition-transform hover:after:translate-x-1"
        >
          {t.getStarted}
        </Link>
        <Link
          href="/lab-tests"
          className="inline-flex items-center rounded-md border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
        >
          {t.viewLabTests}
        </Link>
      </div>
    </>
  );
};

export default CallToActionContent;
