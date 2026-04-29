"use client";

import MedicalBreadcrumbs from "@/components/common/breadcrumbs/MedicalBreadcrumbs";
import PageHeader from "@/components/common/pageHeader/PageHeader";
import { translations } from "@/data/translations";
import { LangType, UserType } from "@/types/types";

const PrintPreview = ({
  lang,
  currentUser,
}: {
  lang: LangType;
  currentUser: UserType;
}) => {
  const t = translations[lang].myListPage;

  const getSexPreviewValue = (value: string) => {
    if (value === "male") return t.editPrintHeaderPage.sexOptionMale;
    if (value === "female") return t.editPrintHeaderPage.sexOptionFemale;
    return value.trim() || "";
  };

  const getPreviewValue = (value: string) => value.trim() || "";

  return (
    <section className="py-12 md:py-16 print:py-0">
      <div className="print:hidden">
        <PageHeader
          title={t.printPreviewPage.title}
          description={t.printPreviewPage.description}
        />
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
              {t.printPreviewPage.printButton}
            </button>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[794px] flex-col rounded-xl border border-slate-300 bg-white p-6 shadow-sm md:p-8 lg:h-[1123px] print:mx-0 print:max-w-none print:shadow-none">
          <div className="rounded-lg border border-slate-300 p-4">
            <h2 className="text-lg font-semibold text-slate-900">
              {t.printPreviewPage.headerTitle}
            </h2>
            <div className="mt-3 grid gap-2 text-sm text-slate-800 sm:grid-cols-2">
              <p>
                <span className="font-semibold">{t.fullNameLabel}:</span>{" "}
                {getPreviewValue(currentUser.headerData.fullName)}
              </p>
              <p>
                <span className="font-semibold">{t.ageLabel}:</span>{" "}
                {getPreviewValue(currentUser.headerData.age)}
              </p>
              <p>
                <span className="font-semibold">{t.sexLabel}:</span>{" "}
                {getSexPreviewValue(currentUser.headerData.sex)}
              </p>
              <p>
                <span className="font-semibold">{t.cityLabel}:</span>{" "}
                {getPreviewValue(currentUser.headerData.city)}
              </p>
            </div>
          </div>

          <div className="mt-6 flex min-h-0 flex-1 flex-col px-4">
            <h3 className="text-lg font-semibold text-slate-900">
              {t.printPreviewPage.testsTitle}
            </h3>
            <ul className="mt-3 h-full columns-1 gap-x-8 [column-fill:auto] lg:columns-2 print:columns-2 print:gap-x-8 print:[column-fill:auto]">
              {currentUser.savedAnalyses.map((test, index) => (
                <li
                  key={test.name}
                  className="mb-2 break-inside-avoid py-1 text-sm text-slate-800 print:mb-1 print:break-inside-avoid"
                  style={{ pageBreakInside: "avoid" }}
                >
                  {index + 1}. {test.name}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 px-4 text-xs text-slate-500 italic lg:mt-10">
            * Generated with medical-tests.vercel.app
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrintPreview;
