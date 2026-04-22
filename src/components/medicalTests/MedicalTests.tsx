import { LangType } from "@/types/types";
import Breadcrumbs from "../common/breadcrumbs/MedicalBreadcrumbs";
import PageHeader from "../common/pageHeader/PageHeader";
import { translations } from "@/data/translations";
import MedicalTestsFilterSection from "./MedicalTestsFilterSection";
import MedicalTestsList from "./MedicalTestsList";

const MedicalTests = ({
  lang,
  category,
  subcategory,
  q,
  page,
}: {
  lang: LangType;
  category: string;
  subcategory: string;
  q: string;
  page: string;
}) => {
  const t = translations[lang].medicalTests;

  return (
    <section className=" py-12 md:py-16">
      <PageHeader title={t.title} description={t.description} />
      <Breadcrumbs lang={lang} />
      <MedicalTestsFilterSection
        lang={lang}
        category={category}
        subcategory={subcategory}
        q={q}
      />

      <MedicalTestsList
        t={t}
        lang={lang}
        category={category}
        subcategory={subcategory}
        q={q}
        page={page}
      />
    </section>
  );
};

export default MedicalTests;
