"use client";

import MedicalBreadcrumbs from "@/components/common/breadcrumbs/MedicalBreadcrumbs";
import PageHeader from "@/components/common/pageHeader/PageHeader";
import { translations } from "@/data/translations";
import { LangType } from "@/types/types";

const PrintPreview = ({ lang }: { lang: LangType }) => {
  const t = translations[lang].myListPage.printPreviewPage;

  const printHeaderData = {
    fullName: "Ion Popescu",
    age: "34",
    sex: lang === "ro" ? "Masculin" : "Male",
    city: "Suceava",
  };

  const testList = [
    "Hemoleucograma completa",
    "Glicemie",
    "Creatinina serica",
    "Uree serica",
    "Colesterol total",
    "HDL colesterol",
    "LDL colesterol",
    "Trigliceride",
    "TSH",
    "Vitamina D (25-OH)",
  ];

  return (
    <section className="py-12 md:py-16 print:py-0">
      <div className="print:hidden">
        <PageHeader title={t.title} description={t.description} />
        <MedicalBreadcrumbs lang={lang} />
      </div>

      <div className="medical-container mt-8 lg:mt-10 print:mt-0 print:max-w-none! print:px-0!">
        <div className="mb-5 flex justify-end print:hidden">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-lg bg-(--secondary-color) px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              {t.printButton}
            </button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[794px] rounded-xl border border-slate-300 bg-white p-6 shadow-sm md:p-8 print:mx-0 print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none">
          <div className="rounded-lg border border-slate-300 p-4">
            <h2 className="text-lg font-semibold text-slate-900">
              {t.headerTitle}
            </h2>
            <div className="mt-3 grid gap-2 text-sm text-slate-800 sm:grid-cols-2">
              <p>
                <span className="font-semibold">{t.fullNameLabel}:</span>{" "}
                {printHeaderData.fullName}
              </p>
              <p>
                <span className="font-semibold">{t.ageLabel}:</span>{" "}
                {printHeaderData.age}
              </p>
              <p>
                <span className="font-semibold">{t.sexLabel}:</span>{" "}
                {printHeaderData.sex}
              </p>
              <p>
                <span className="font-semibold">{t.cityLabel}:</span>{" "}
                {printHeaderData.city}
              </p>
            </div>
          </div>

          <div className="mt-6 px-4">
            <h3 className="text-lg font-semibold text-slate-900">
              {t.testsTitle}
            </h3>
            <ul className="mt-3 grid gap-2">
              {testList.map((test, index) => (
                <li
                  key={test}
                  className="break-inside-avoid py-1 text-sm text-slate-800"
                >
                  {index + 1}. {test}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 px-4 text-xs text-slate-500 italic">
            * Generated with medical-tests.vercel.app
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrintPreview;
