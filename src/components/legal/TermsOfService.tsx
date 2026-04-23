import { LangType } from "@/types/types";
import PageHeader from "../common/pageHeader/PageHeader";
import MedicalBreadcrumbs from "../common/breadcrumbs/MedicalBreadcrumbs";
import { translations } from "@/data/translations";
import { termsContent } from "@/data/content/terms";

const TermsOfService = ({ lang }: { lang: LangType }) => {
  const t = translations[lang].legal.termsOfService;
  const content = termsContent[lang];

  return (
    <section className=" py-12 md:py-16">
      <PageHeader title={t.title} description={t.description} />
      <MedicalBreadcrumbs lang={lang} />
      <div className="medical-container mt-8 lg:mt-10">
        <div className="rounded-2xl border border-(--border-color) bg-white p-5 shadow-sm md:p-8">
          <p className="text-sm text-(--text-muted)">
            <span className="font-semibold text-(--heading-color)">
              {content.lastUpdatedLabel}:
            </span>{" "}
            {content.lastUpdatedValue}
          </p>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-(--text-color) md:text-base">
            {content.intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 space-y-8">
            {content.sections.map((section, sectionIndex) => (
              <article key={sectionIndex}>
                <h2 className="text-lg font-semibold text-(--heading-color)">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-(--text-color) md:text-base">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-(--text-color) md:text-base">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-(--border-color) bg-(--light-color) p-4">
            <h2 className="text-base font-semibold text-(--heading-color)">
              {content.contactTitle}
            </h2>
            <p className="mt-2 text-sm text-(--text-color) md:text-base">
              {content.contactEmail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
