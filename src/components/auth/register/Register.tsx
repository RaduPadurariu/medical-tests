import MedicalBreadcrumbs from "@/components/breadcrumbs/MedicalBreadcrumbs";
import PageHeader from "@/components/pageHeader/PageHeader";
import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
import RegisterForm from "./RegisterForm";

const Register = ({ lang }: { lang: LangType }) => {
  const t = translations[lang].registerPage;
  return (
    <section className=" py-12 md:py-16">
      <PageHeader title={t.title} description={t.description} />
      <MedicalBreadcrumbs lang={lang} />
      <div className="medical-container mt-8 lg:mt-10">
        <RegisterForm lang={lang} />
      </div>
    </section>
  );
};

export default Register;
