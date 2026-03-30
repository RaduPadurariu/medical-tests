import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
const HowItWorksSection = ({ lang }: { lang: LangType }) => {
  const t = translations[lang].home.howItWorks;
  return (
    <section className="bg-(--light-color) py-16 lg:py-24">
      <div className="medical-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-(--heading-color) md:text-4xl text-balance">
            {t.howItWorksTitle}
          </h2>
          <p className="mt-4 text-base text-(--text-color) md:text-lg">
            {t.howItWorksDescription}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.howItWorksSteps.map((step, index) => (
            <div
              key={step.id}
              className="relative overflow-hidden rounded-lg border border-(--border-color) bg-white p-6"
            >
              <div className="relative">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-(--secondary-color) text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-(--heading-color)">
                  {step.title}
                </h3>
                <p className="text-sm text-(--text-color) leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
