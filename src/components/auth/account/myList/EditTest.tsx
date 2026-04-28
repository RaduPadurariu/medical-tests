"use client";
import PageHeader from "@/components/common/pageHeader/PageHeader";
import { translations } from "@/data/translations";
import { LangType, SavedAnalysisType } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditTest = ({
  lang,
  savedAnalysis,
}: {
  lang: LangType;
  savedAnalysis: SavedAnalysisType;
}) => {
  const t = translations[lang].myListPage.editTestPage;
  const [name, setName] = useState(savedAnalysis.name);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError(t.saveError);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/account/saved-analyses/${savedAnalysis.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: trimmedName }),
        },
      );
      if (response.status === 409) {
        setError(t.duplicateNameError);
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to update test");
      }
      router.push(`/${lang}/account/my-list`);
    } catch (error) {
      console.error(error);
      setError(t.saveError);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="py-12 md:py-16">
      <PageHeader title={t.title} description={t.description} />
      <div className="medical-container mt-8 lg:mt-10">
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-(--border-color) bg-white p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label
                htmlFor="edit-test-name"
                className="mb-1.5 block text-sm font-medium text-(--heading-color)"
              >
                {t.nameLabel}
              </label>
              <input
                id="edit-test-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={t.namePlaceholder}
                className="w-full rounded-lg border border-(--border-color) bg-white px-3 py-2.5 text-sm text-(--heading-color) outline-none ring-(--secondary-color) transition-shadow placeholder:text-(--text-muted) focus:border-(--secondary-color) focus:ring-2 focus:ring-(--secondary-color)/20"
              />
            </div>
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <Link
                onClick={(event) => {
                  const hasUnsavedChanges =
                    name.trim() !== savedAnalysis.name.trim();
                  if (!hasUnsavedChanges) return;

                  if (!window.confirm(t.confirmCancel)) {
                    event.preventDefault();
                  }
                }}
                href={`/${lang}/account/my-list`}
                className="inline-flex w-full items-center justify-center rounded-lg border border-(--border-color) bg-white px-5 py-2.5 text-sm font-semibold text-(--heading-color) transition-colors hover:bg-slate-50 sm:w-auto"
              >
                {t.cancelButton}
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer rounded-lg bg-(--secondary-color) px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-(--secondary-color)/80 disabled:cursor-not-allowed disabled:bg-(--secondary-color)/50"
              >
                {isSubmitting ? t.savingButton : t.saveButton}
              </button>
            </div>
          </div>
          {error && (
            <p className="mt-3 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EditTest;
