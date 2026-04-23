import MedicalBreadcrumbs from "@/components/common/breadcrumbs/MedicalBreadcrumbs";
import PageHeader from "@/components/common/pageHeader/PageHeader";
import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
import SignInForm from "./SignInForm";

const SignIn = ({ lang }: { lang: LangType }) => {
  const t = translations[lang].signinPage;
  return (
    <section className=" py-12 md:py-16">
      <PageHeader title={t.title} description={t.description} />
      <MedicalBreadcrumbs lang={lang} />
      <div className="medical-container mt-8 lg:mt-10">
        <SignInForm lang={lang} />
      </div>
    </section>
  );
};

export default SignIn;
