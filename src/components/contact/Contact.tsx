"use client";

import { translations } from "@/data/translations";
import { LangType } from "@/types/types";
import Link from "next/link";
import PageHeader from "../pageHeader/PageHeader";
import MedicalBreadcrumbs from "../breadcrumbs/MedicalBreadcrumbs";
import ContactForm from "./ContactForm";

const Contact = ({ lang }: { lang: LangType }) => {
  const t = translations[lang].contactPage;

  return (
    <section className=" py-12 md:py-16">
      <PageHeader title={t.title} description={t.description} />
      {/* <p className="mt-4 rounded-lg border border-(--border-color) bg-white/80 px-4 py-3 text-left text-sm text-(--text-muted)">
          {t.disclaimer}
        </p> */}

      <MedicalBreadcrumbs lang={lang} />
      <div className="medical-container mt-8 lg:mt-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <ContactForm lang={lang} />
          </div>

          <aside className="lg:col-span-5">
            <div className="space-y-4">
              <div className="rounded-xl border border-(--border-color) bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-(--text-muted)">
                  {t.aside.emailTitle}
                </p>
                <Link
                  href={`mailto:${t.aside.emailAddress}`}
                  className="mt-1 block text-base font-medium text-(--secondary-color) underline-offset-2 hover:underline"
                >
                  {t.aside.emailAddress}
                </Link>
              </div>
              <div className="rounded-xl border border-(--border-color) bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-(--text-muted)">
                  {t.aside.locationTitle}
                </p>
                <p className="mt-1 text-base text-(--heading-color)">
                  {t.aside.locationValue}
                </p>
              </div>
              <p className="text-sm text-(--text-muted)">{t.aside.replyNote}</p>
            </div>

            <div className="mt-10">
              <h2 className="text-lg font-semibold text-(--heading-color)">
                {t.faqTitle}
              </h2>
              <ul className="mt-4 space-y-2">
                {t.faq.map((item, i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-(--border-color) bg-white"
                  >
                    <details className="group px-4 py-3">
                      <summary className="cursor-pointer list-none text-sm font-medium text-(--heading-color) outline-none marker:content-none [&::-webkit-details-marker]:hidden">
                        <span className="flex items-center justify-between gap-2">
                          {item.q}
                          <i className="fa-solid fa-chevron-down text-xs text-(--text-muted) transition-transform group-open:rotate-180" />
                        </span>
                      </summary>
                      <p className="mt-3 border-t border-(--border-color) pt-3 text-sm leading-relaxed text-(--text-color)">
                        {item.a}
                      </p>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
