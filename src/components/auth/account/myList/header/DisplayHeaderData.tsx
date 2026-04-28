import { translations } from "@/data/translations";
import { LangType, UserType } from "@/types/types";
import Link from "next/link";

const DisplayHeaderData = ({
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
    return getPreviewValue(value);
  };

  const getPreviewValue = (value: string) => value.trim() || t.notProvided;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
        {t.printHeaderSectionTitle}
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        {t.printHeaderSectionDescription}
      </p>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t.fullNameLabel}
          </p>
          <p className="mt-1 text-sm font-medium text-slate-900">
            {getPreviewValue(currentUser.headerData.fullName)}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t.ageLabel}
          </p>
          <p className="mt-1 text-sm font-medium text-slate-900">
            {getPreviewValue(currentUser.headerData.age)}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t.sexLabel}
          </p>
          <p className="mt-1 text-sm font-medium text-slate-900">
            {getSexPreviewValue(currentUser.headerData.sex)}
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t.cityLabel}
          </p>
          <p className="mt-1 text-sm font-medium text-slate-900">
            {getPreviewValue(currentUser.headerData.city)}
          </p>
        </div>
      </div>
      <div className="mt-5">
        <Link
          href={`/${lang}/account/my-list/edit-print-header`}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
        >
          {t.editPrintHeaderButton}
        </Link>
      </div>
    </div>
  );
};

export default DisplayHeaderData;
