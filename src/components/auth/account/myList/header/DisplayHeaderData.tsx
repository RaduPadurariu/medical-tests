"use client";

import { translations } from "@/data/translations";
import { LangType, UserType } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";

const DisplayHeaderData = ({
  lang,
  currentUser,
  successMessage,
}: {
  lang: LangType;
  currentUser: UserType;
  successMessage?: string;
}) => {
  const t = translations[lang].myListPage;
  const storageKey = "my-list-print-header-collapsed";
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    const savedValue = window.localStorage.getItem(storageKey);
    return savedValue === "true";
  });

  useEffect(() => {
    window.localStorage.setItem(storageKey, String(isHeaderCollapsed));
  }, [isHeaderCollapsed]);

  const toggleHeaderVisibility = () => {
    setIsHeaderCollapsed((prevValue) => !prevValue);
  };

  const getSexPreviewValue = (value: string) => {
    if (value === "male") return t.editPrintHeaderPage.sexOptionMale;
    if (value === "female") return t.editPrintHeaderPage.sexOptionFemale;
    return getPreviewValue(value);
  };

  const getPreviewValue = (value: string) => value.trim() || t.notProvided;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
          {t.printHeaderSectionTitle}
        </h2>
        <button
          type="button"
          onClick={toggleHeaderVisibility}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold text-(--secondary-color) transition-colors hover:bg-slate-100"
          aria-expanded={!isHeaderCollapsed}
        >
          <span>
            {isHeaderCollapsed
              ? t.showPrintHeaderButton
              : t.hidePrintHeaderButton}
          </span>
          <i
            className={`fa-solid fa-chevron-${
              isHeaderCollapsed ? "down" : "up"
            } text-xs`}
            aria-hidden
          />
        </button>
      </div>
      {!isHeaderCollapsed ? (
        <>
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
            {successMessage ? (
              <p className="mt-3 text-sm text-emerald-700" role="status">
                {successMessage}
              </p>
            ) : null}
          </div>
        </>
      ) : (
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <p className="text-sm text-slate-600">{t.printHeaderCollapsedNote}</p>
          <Link
            href={`/${lang}/account/my-list/edit-print-header`}
            className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
          >
            {t.editPrintHeaderButton}
          </Link>
          {successMessage ? (
            <p className="text-sm text-emerald-700" role="status">
              {successMessage}
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default DisplayHeaderData;
