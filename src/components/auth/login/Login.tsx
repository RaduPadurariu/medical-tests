import MedicalBreadcrumbs from "@/components/breadcrumbs/MedicalBreadcrumbs";
import PageHeader from "@/components/pageHeader/PageHeader";
import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
import LoginForm from "./LoginForm";

const Login = ({ lang }: { lang: LangType }) => {
  const t = translations[lang].loginPage;
  return (
    <section className=" py-12 md:py-16">
      <PageHeader title={t.title} description={t.description} />
      <MedicalBreadcrumbs lang={lang} />
      <div className="medical-container mt-8 lg:mt-10">
        <LoginForm lang={lang} />
      </div>
    </section>
  );
};

export default Login;
