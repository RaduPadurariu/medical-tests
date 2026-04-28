"use client";

import PageHeader from "@/components/common/pageHeader/PageHeader";
import MedicalBreadcrumbs from "@/components/common/breadcrumbs/MedicalBreadcrumbs";
import { translations } from "@/data/translations";
import { useEditPrintHeader } from "@/hooks/useEditPrintHeader";
import { HeaderDataType, LangType } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EditPrintHeader = ({
  lang,
  initialHeaderData,
}: {
  lang: LangType;
  initialHeaderData: HeaderDataType;
}) => {
  const t = translations[lang].myListPage.editPrintHeaderPage;
  const myListT = translations[lang].myListPage;
  const { state, dispatch } = useEditPrintHeader(initialHeaderData);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Check if there are any unsaved changes
  const isDirty =
    state.fullName !== initialHeaderData.fullName ||
    state.age !== initialHeaderData.age ||
    state.sex !== initialHeaderData.sex ||
    state.city !== initialHeaderData.city;

  const message = t.confirmCancel;

  // Set unsaved changes guard
  useEffect(() => {
    if (!isDirty) return;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      // Chrome/Safari ignora custom text, dar trebuie setat pt trigger.
      event.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty, message]);

  // Handle back button
  useEffect(() => {
    if (!isDirty) return;

    // Add a history entry so the first Back press can be intercepted.
    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      if (window.confirm(message)) {
        window.removeEventListener("popstate", handlePopState);
        router.back();
        return;
      }

      // Keep user on current page when canceling leave.
      window.history.pushState(null, "", window.location.href);
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, [isDirty, message, router]);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const updateHeaderData = await fetch("/api/account", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: state.fullName,
          age: state.age,
          sex: state.sex,
          city: state.city,
        }),
      });
      if (!updateHeaderData.ok) {
        throw new Error("Failed to update header data");
      }
      router.push(`/${lang}/account/my-list`);
    } catch (error) {
      console.error(error);
      setSubmitError(t.saveError);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Confirm leave page
  const confirmLeave = () => {
    if (!isDirty) return true;
    return window.confirm(message);
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
              onClick={(e) => {
                if (!confirmLeave()) {
                  e.preventDefault();
                }
              }}
              href={`/${lang}/account/my-list`}
              className="inline-flex w-full items-center justify-center rounded-lg border border-(--border-color) bg-white px-5 py-3 text-sm font-semibold text-(--heading-color) transition-colors hover:bg-slate-50 sm:w-auto"
            >
              {t.cancelButton}
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-(--secondary-color) px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 sm:w-auto"
            >
              {isSubmitting ? t.savingButton : t.saveButton}
            </button>
          </div>
          {submitError && (
            <p className="mt-3 text-sm text-red-600" role="alert">
              {submitError}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EditPrintHeader;
