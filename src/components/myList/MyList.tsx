import { LangType } from "@/types/types";
import PageHeader from "../pageHeader/PageHeader";
import { translations } from "@/data/translations";
import MedicalBreadcrumbs from "../breadcrumbs/MedicalBreadcrumbs";

const MyList = ({ lang }: { lang: LangType }) => {
  const t = translations[lang].myListPage;
  return (
    <section className="py-12 md:py-16">
      <PageHeader title={t.title} description={t.description} />
      <MedicalBreadcrumbs lang={lang} />
    </section>
  );
};

export default MyList;
