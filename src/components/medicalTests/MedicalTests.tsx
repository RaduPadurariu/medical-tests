import { LangType } from "@/types/types";
import { translations } from "@/data/translations";
import Breadcrumbs from "../breadcrumbs/MedicalBreadcrumbs";
import PageHeader from "../pageHeader/PageHeader";

const MedicalTests = ({ lang }: { lang: LangType }) => {
  const t = translations[lang].medicalTests;
  return (
    <section className=" py-12 md:py-16">
      <PageHeader title={t.title} description={t.description} />
      <Breadcrumbs lang={lang} />
    </section>
  );
};

export default MedicalTests;
