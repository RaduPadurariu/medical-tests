"use client";

import MedicalBreadcrumbs from "@/components/common/breadcrumbs/MedicalBreadcrumbs";
import PageHeader from "@/components/common/pageHeader/PageHeader";
import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
import { signOut } from "next-auth/react";
import { useState } from "react";

const Account = ({ lang, userName }: { lang: LangType; userName: string }) => {
  const t = translations[lang].accountPage;
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteAccount = async () => {
    if (isDeleting) return;
    const shouldDelete = window.confirm(t.deleteAccountConfirm);

    if (!shouldDelete) {
      return;
    }

    try {
      setIsDeleting(true);
      const response = await fetch("/api/account", {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete account");
      }

      alert(t.deleteAccountSuccess);
      await signOut({ callbackUrl: `/${lang}` });
    } catch {
      alert(t.deleteAccountError);
      setIsDeleting(false);
    }
  };

  return (
    <section className=" py-12 md:py-16">
      <PageHeader title={t.title} description={t.description} />
      <MedicalBreadcrumbs lang={lang} />
      <div className="medical-container mt-8 lg:mt-10">
        <div className="mx-auto mt-20 flex w-full max-w-xl flex-col items-start gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            {t.helloUser} {userName}
          </h2>
          <button
            type="button"
            onClick={handleDeleteAccount}
            disabled={isDeleting}
            className="cursor-pointer rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
          >
            {isDeleting ? t.deleteAccountLoading : t.deleteAccount}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Account;
