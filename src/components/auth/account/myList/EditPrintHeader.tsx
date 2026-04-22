"use client";

import PageHeader from "@/components/common/pageHeader/PageHeader";
import MedicalBreadcrumbs from "@/components/common/breadcrumbs/MedicalBreadcrumbs";
import { translations } from "@/data/translations";
import { useEditPrintHeader } from "@/hooks/useEditPrintHeader";
import { LangType } from "@/types/types";
import Link from "next/link";

const EditPrintHeader = ({ lang }: { lang: LangType }) => {
  const t = translations[lang].myListPage.editPrintHeaderPage;
  const myListT = translations[lang].myListPage;
  const { state, dispatch } = useEditPrintHeader();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Save logic will be wired when backend profile update is added.
  };

  return (
    <section className="py-12 md:py-16">
      <PageHeader title={t.title} description={t.description} />
      <MedicalBreadcrumbs lang={lang} />
      <div className="medical-container mt-8 lg:mt-10">
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-(--border-color) bg-white p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label
                htmlFor="edit-print-header-full-name"
                className="mb-1.5 block text-sm font-medium text-(--heading-color)"
              >
                {myListT.fullNameLabel}
              </label>
              <input
                id="edit-print-header-full-name"
                type="text"
                value={state.fullName}
                onChange={(event) =>
                  dispatch({
                    type: "SET_FULL_NAME",
                    payload: event.target.value,
                  })
                }
                placeholder={myListT.editPrintHeaderPage.fullNamePlaceholder}
                className="w-full rounded-lg border border-(--border-color) bg-white px-3 py-2.5 text-sm text-(--heading-color) outline-none ring-(--secondary-color) transition-shadow placeholder:text-(--text-muted) focus:border-(--secondary-color) focus:ring-2 focus:ring-(--secondary-color)/20"
              />
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="edit-print-header-age"
                className="mb-1.5 block text-sm font-medium text-(--heading-color)"
              >
                {myListT.ageLabel}
              </label>
              <input
                id="edit-print-header-age"
                type="number"
                min="0"
                step="1"
                value={state.age}
                onChange={(event) =>
                  dispatch({ type: "SET_AGE", payload: event.target.value })
                }
                placeholder={myListT.editPrintHeaderPage.agePlaceholder}
                className="w-full rounded-lg border border-(--border-color) bg-white px-3 py-2.5 text-sm text-(--heading-color) outline-none ring-(--secondary-color) transition-shadow placeholder:text-(--text-muted) focus:border-(--secondary-color) focus:ring-2 focus:ring-(--secondary-color)/20"
              />
            </div>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label
                htmlFor="edit-print-header-sex"
                className="mb-1.5 block text-sm font-medium text-(--heading-color)"
              >
                {myListT.sexLabel}
              </label>
              <select
                id="edit-print-header-sex"
                value={state.sex}
                onChange={(event) =>
                  dispatch({ type: "SET_SEX", payload: event.target.value })
                }
                className="w-full rounded-lg border border-(--border-color) bg-white px-3 py-2.5 text-sm text-(--heading-color) outline-none ring-(--secondary-color) focus:border-(--secondary-color) focus:ring-2 focus:ring-(--secondary-color)/20"
              >
                <option value="">
                  {myListT.editPrintHeaderPage.sexOptionEmpty}
                </option>
                <option value="male">
                  {myListT.editPrintHeaderPage.sexOptionMale}
                </option>
                <option value="female">
                  {myListT.editPrintHeaderPage.sexOptionFemale}
                </option>
                <option value="preferNotToSay">
                  {myListT.editPrintHeaderPage.sexOptionPreferNotToSay}
                </option>
              </select>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="edit-print-header-city"
                className="mb-1.5 block text-sm font-medium text-(--heading-color)"
              >
                {myListT.cityLabel}
              </label>
              <input
                id="edit-print-header-city"
                type="text"
                value={state.city}
                onChange={(event) =>
                  dispatch({ type: "SET_CITY", payload: event.target.value })
                }
                placeholder={myListT.editPrintHeaderPage.cityPlaceholder}
                className="w-full rounded-lg border border-(--border-color) bg-white px-3 py-2.5 text-sm text-(--heading-color) outline-none ring-(--secondary-color) transition-shadow placeholder:text-(--text-muted) focus:border-(--secondary-color) focus:ring-2 focus:ring-(--secondary-color)/20"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Link
              href={`/${lang}/account/my-list`}
              className="inline-flex w-full items-center justify-center rounded-lg border border-(--border-color) bg-white px-5 py-3 text-sm font-semibold text-(--heading-color) transition-colors hover:bg-slate-50 sm:w-auto"
            >
              {t.cancelButton}
            </Link>
            <button
              type="submit"
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-(--secondary-color) px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 sm:w-auto"
            >
              {t.saveButton}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditPrintHeader;
