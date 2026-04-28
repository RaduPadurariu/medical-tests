"use client";

import { LangType, UserType } from "@/types/types";
import PageHeader from "../../../common/pageHeader/PageHeader";
import { translations } from "@/data/translations";
import MedicalBreadcrumbs from "../../../common/breadcrumbs/MedicalBreadcrumbs";
import Link from "next/link";
import DisplayHeaderData from "./header/DisplayHeaderData";
import MyListTests from "./MyListTests";

const MyList = ({
  lang,
  currentUser,
}: {
  lang: LangType;
  currentUser: UserType;
}) => {
  const t = translations[lang].myListPage;

  return (
    <section className="py-12 md:py-16">
      <PageHeader title={t.title} description={t.description} />
      <MedicalBreadcrumbs lang={lang} />
      <div className="medical-container mt-8 grid gap-8 lg:mt-10">
        <DisplayHeaderData lang={lang} currentUser={currentUser} />
        <MyListTests lang={lang} currentUser={currentUser} />
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
