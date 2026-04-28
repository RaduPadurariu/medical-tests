import { translations } from "@/data/translations";
import { LangType, UserType } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const MyListTests = ({
  lang,
  currentUser,
}: {
  lang: LangType;
  currentUser: UserType;
}) => {
  const t = translations[lang].myListPage;
  const router = useRouter();
  const [listNameInput, setListNameInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeletingAll, setIsDeletingAll] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const canAddTest = useMemo(
    () => listNameInput.trim().length > 0,
    [listNameInput],
  );

  const handleAddTest = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = listNameInput.trim();
    if (!trimmedName) return;
    if (isSubmitting) return;

    const normalizedName = trimmedName.toLocaleLowerCase();
    const alreadyExists = currentUser.savedAnalyses.some(
      (analysis) => analysis.name.trim().toLocaleLowerCase() === normalizedName,
    );
    if (alreadyExists) {
      setSubmitError(t.duplicateTestError);
      return;
    }

    setSubmitError("");
    setIsSubmitting(true);

    try {
      const addTest = await fetch("/api/account/saved-analyses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
        }),
      });

      if (addTest.status === 409) {
        setSubmitError(t.duplicateTestError);
        return;
      }

      if (!addTest.ok) {
        throw new Error("Failed to add test");
      }

      setListNameInput("");
      router.refresh();
    } catch (error) {
      console.error(error);
      setSubmitError(t.addTestError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteTest = async (id: string) => {
    try {
      const deleteTest = await fetch(`/api/account/saved-analyses/${id}`, {
        method: "DELETE",
      });
      if (!deleteTest.ok) {
        throw new Error("Failed to delete test");
      }
      router.refresh();
    } catch (error) {
      console.error(error);
      setSubmitError(t.deleteTestError);
    }
  };

  const handleDeleteAllTests = async () => {
    if (isDeletingAll || currentUser.savedAnalyses.length === 0) return;
    if (!window.confirm(t.deleteAllTestsConfirm)) return;

    setSubmitError("");
    setIsDeletingAll(true);
    try {
      const deleteAllTests = await fetch("/api/account/saved-analyses", {
        method: "DELETE",
      });
      if (!deleteAllTests.ok) {
        throw new Error("Failed to delete all tests");
      }
      router.refresh();
    } catch (error) {
      console.error(error);
      setSubmitError(t.deleteAllTestsError);
    } finally {
      setIsDeletingAll(false);
    }
  };
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
        {t.testsSectionTitle}
      </h2>
      <p className="mt-2 text-sm text-slate-600">{t.testsSectionDescription}</p>

      <form
        onSubmit={handleAddTest}
        className="mt-5 flex flex-col gap-3 sm:flex-row"
      >
        <input
          type="text"
          value={listNameInput}
          onChange={(event) => {
            setListNameInput(event.target.value);
            if (submitError) {
              setSubmitError("");
            }
          }}
          placeholder={t.newTestPlaceholder}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none transition-colors focus:border-blue-500"
        />
        <button
          type="submit"
          disabled={!canAddTest || isSubmitting}
          className="rounded-lg cursor-pointer bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
        >
          {t.addTestButton}
        </button>
      </form>
      {submitError && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {submitError}
        </p>
      )}

      {currentUser.savedAnalyses.length > 0 && (
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={handleDeleteAllTests}
            disabled={isDeletingAll}
            className="cursor-pointer rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 transition-colors hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isDeletingAll ? t.deletingAllTestsButton : t.deleteAllTestsButton}
          </button>
        </div>
      )}

      <ul className="mt-6 grid gap-3">
        {currentUser.savedAnalyses.length === 0 && (
          <li className="rounded-lg border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-500">
            {t.emptyListMessage}
          </li>
        )}

        {currentUser.savedAnalyses.map((item) => {
          return (
            <li
              key={item.id}
              className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="font-medium text-slate-900">{item.name}</p>

              <div className="flex items-center gap-2">
                <Link
                  href={`/${lang}/account/my-list/${item.id}/edit-test`}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                >
                  {t.editButton}
                </Link>
                <button
                  type="button"
                  onClick={() => handleDeleteTest(item.id)}
                  className="cursor-pointer rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-700"
                >
                  {t.deleteButton}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MyListTests;
