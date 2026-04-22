"use client";

import { LangType } from "@/types/types";
import PageHeader from "../../../common/pageHeader/PageHeader";
import { translations } from "@/data/translations";
import MedicalBreadcrumbs from "../../../common/breadcrumbs/MedicalBreadcrumbs";
import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";

const MyList = ({ lang }: { lang: LangType }) => {
  const t = translations[lang].myListPage;
  const [headerData] = useState({
    fullName: "Radu",
    age: "",
    sex: "",
    city: "",
  });
  const [listNameInput, setListNameInput] = useState("");
  const [tests, setTests] = useState([
    { id: crypto.randomUUID(), name: "Hemoleucograma completa" },
    { id: crypto.randomUUID(), name: "Glicemie" },
  ]);

  const canAddTest = useMemo(
    () => listNameInput.trim().length > 0,
    [listNameInput],
  );

  const handleAddTest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = listNameInput.trim();
    if (!trimmedName) return;

    setTests((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: trimmedName },
    ]);
    setListNameInput("");
  };

  const handleDeleteTest = (id: string) => {
    setTests((prev) => prev.filter((item) => item.id !== id));
  };

  const getPreviewValue = (value: string) => value.trim() || t.notProvided;

  return (
    <section className="py-12 md:py-16">
      <PageHeader title={t.title} description={t.description} />
      <MedicalBreadcrumbs lang={lang} />
      <div className="medical-container mt-8 grid gap-8 lg:mt-10">
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
                {getPreviewValue(headerData.fullName)}
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {t.ageLabel}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900">
                {getPreviewValue(headerData.age)}
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {t.sexLabel}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900">
                {getPreviewValue(headerData.sex)}
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {t.cityLabel}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900">
                {getPreviewValue(headerData.city)}
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

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
            {t.testsSectionTitle}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {t.testsSectionDescription}
          </p>

          <form
            onSubmit={handleAddTest}
            className="mt-5 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="text"
              value={listNameInput}
              onChange={(event) => setListNameInput(event.target.value)}
              placeholder={t.newTestPlaceholder}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none transition-colors focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={!canAddTest}
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
            >
              {t.addTestButton}
            </button>
          </form>

          <ul className="mt-6 grid gap-3">
            {tests.length === 0 && (
              <li className="rounded-lg border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-500">
                {t.emptyListMessage}
              </li>
            )}

            {tests.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <p className="font-medium text-slate-900">{item.name}</p>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                    >
                      {t.editButton}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteTest(item.id)}
                      className="rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700"
                    >
                      {t.deleteButton}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex justify-end">
          <Link
            href={`/${lang}/account/my-list/print-preview`}
            className=" cursor-pointer rounded-lg bg-(--secondary-color) px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            {t.goToPrintButton}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyList;
