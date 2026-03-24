import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const HeroSection = ({ lang }: { lang: LangType }) => {
  const t = translations[lang].heroSection;
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-(--light-color) via-(--light-color) to-(--secondary-color)/10 py-16 lg:py-24">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="medical-container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <ul className="flex flex-wrap gap-3">
              <li className="px-3 py-1.5 text-sm flex items-center gap-2  bg-(--secondary-color)/10 text-(--primary-color) rounded-md">
                <i className="fa-solid fa-cloud h-3.5 w-3.5 text-(--secondary-color)"></i>{" "}
                {t.badges.cloud}
              </li>
              <li className="px-3 py-1.5 text-sm flex items-center gap-2 bg-(--secondary-color)/10 text-(--primary-color) rounded-md">
                <i className="fa-regular fa-file-lines h-3.5 w-3.5 text-(--secondary-color)"></i>{" "}
                {t.badges.pdf}
              </li>
            </ul>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl lg:text-6xl text-balance">
              {t.headline.start}{" "}
              <span className="text-(--secondary-color) underline decoration-(--secondary-color)/30  underline-offset-4">
                {t.headline.middle}
              </span>{" "}
              {t.headline.end}
            </h1>

            {/* Description */}
            <p className="max-w-lg text-lg leading-relaxed text-(--text-muted)">
              {t.description}
            </p>

            {/* Stats */}
            <div className="flex gap-8 py-4 flex-wrap">
              <div>
                <p className="text-3xl font-bold text-(--secondary-color)">
                  {t.stats.tests.value}
                </p>
                <p className="text-sm text-(--text-muted)">
                  {t.stats.tests.secondary}
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-(--secondary-color)">
                  {t.stats.free.value}
                </p>
                <p className="text-sm text-(--text-muted)">
                  {t.stats.free.secondary}
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-(--secondary-color)">
                  {t.stats.save.value}
                </p>
                <p className="text-sm text-(--text-muted)">
                  {t.stats.save.secondary}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${lang}/register`}
                className="inline-flex items-center gap-2 rounded-md bg-(--secondary-color) px-6 py-3 text-sm font-medium text-(--light-color) transition-colors hover:bg-blue-600"
              >
                <i className="fa-solid fa-clipboard-list text-sm" />
                {t.cta.getStarted}
              </Link>
              <Link
                href={`/${lang}/lab-tests`}
                className="inline-flex items-center rounded-md border border-(--border-color) bg-transparent px-6 py-3 text-sm font-medium text-(--heading-color) transition-colors hover:bg-(--secondary-color)/10"
              >
                {t.cta.viewLabTests}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/hero-img.jpg"
                alt="Laboratory professional"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Card - Top Right */}
            <div className="absolute top-8 flex flex-col items-center gap-3 rounded-xl border border-(--border-color) bg-white/95 p-4 shadow-lg backdrop-blur right-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--secondary-color)/10">
                <i className="fa-solid fa-clipboard-list text-(--secondary-color)" />
              </div>
              <div>
                <p className="text-sm font-semibold text-(--heading-color)">
                  {t.floatingCard.myTestList}
                </p>
                <p className="text-xs text-(--text-muted)">
                  0 {t.floatingCard.testsSelected}
                </p>
              </div>
            </div>

            {/* Floating Card - Bottom Left */}
            <div className="absolute bottom-16 rounded-xl border border-(--border-color) bg-white/95 p-4 shadow-lg backdrop-blur left-0">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-sm" />
                ))}
              </div>
              <p className="mt-4 mb-3 text-lg font-bold text-(--heading-color)">
                {t.floatingCard.pdfReady}
              </p>
              <p className="text-xs text-(--text-muted)">
                {t.floatingCard.printableExport}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
