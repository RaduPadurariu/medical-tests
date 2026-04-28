import Link from "next/link";

import { translations } from "@/data/translations";
import { LangType } from "@/types/types";

const CallToActionSection = ({
  lang,
  isAuthenticated,
}: {
  lang: LangType;
  isAuthenticated: boolean;
}) => {
  const t = translations[lang].home.callToAction;
  const getStartedHref = isAuthenticated ? `/${lang}/account/my-list` : `/${lang}/signin`;
  return (
    <section className="bg-(--secondary-color) py-16 lg:py-20">
      <div className="medical-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl tracking-tight text-white md:text-4xl text-balance font-semibold">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-white/80">{t.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href={getStartedHref}
              className="inline-flex items-center gap-2 rounded-md bg-(--light-color) px-6 py-3 text-sm font-medium text-(--heading-color) transition-colors hover:bg-white after:content-['→'] after:ml-1 after:transition-transform hover:after:translate-x-1"
            >
              {t.getStarted}
            </Link>
            <Link
              href={`/${lang}/lab-tests`}
              className="inline-flex items-center rounded-md border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              {t.viewLabTests}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
