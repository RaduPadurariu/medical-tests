"use client";

import { useContact } from "@/hooks/useContact";
import { checkEmail, checkMessage, checkName } from "./ValidationErrors";
import { LangType } from "@/types/types";
import { translations } from "@/data/translations";

const ContactForm = ({ lang }: { lang: LangType }) => {
  const { state, dispatch } = useContact();
  const t = translations[lang].contactPage.form;

  const nameErrors = state.isAfterSubmit ? checkName(state.name) : [];
  const emailErrors = state.isAfterSubmit ? checkEmail(state.email) : [];
  const messageErrors = state.isAfterSubmit ? checkMessage(state.message) : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({ type: "SET_IS_AFTER_SUBMIT", payload: true });

    const nameErrors = checkName(state.name);
    const emailErrors = checkEmail(state.email);
    const messageErrors = checkMessage(state.message);

    if (
      nameErrors.length > 0 ||
      emailErrors.length > 0 ||
      messageErrors.length > 0
    ) {
      return;
    }

    dispatch({ type: "SET_NAME", payload: "" });
    dispatch({ type: "SET_EMAIL", payload: "" });
    dispatch({ type: "SET_SUBJECT", payload: "" });
    dispatch({ type: "SET_MESSAGE", payload: "" });
    dispatch({ type: "SET_IS_AFTER_SUBMIT", payload: false });
    dispatch({ type: "SET_SUBMIT_STATUS", payload: true });
    setTimeout(() => {
      dispatch({ type: "SET_SUBMIT_STATUS", payload: false });
    }, 3000);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-(--border-color) bg-white p-6 shadow-sm md:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-medium text-(--heading-color)"
          >
            {t.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
            placeholder={t.namePlaceholder}
            className="w-full rounded-lg border border-(--border-color) bg-white px-3 py-2.5 text-sm text-(--heading-color) outline-none ring-(--secondary-color) transition-shadow placeholder:text-(--text-muted) focus:border-(--secondary-color) focus:ring-2 focus:ring-(--secondary-color)/20"
          />
          <div className="text-xs text-red-400 mt-1 ml-1">
            {nameErrors.length > 0 &&
              nameErrors.map((err, i) => <span key={i}>{err}</span>)}
          </div>
        </div>
        <div className="sm:col-span-1">
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-sm font-medium text-(--heading-color)"
          >
            {t.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
            placeholder={t.emailPlaceholder}
            className="w-full rounded-lg border border-(--border-color) bg-white px-3 py-2.5 text-sm text-(--heading-color) outline-none ring-(--secondary-color) transition-shadow placeholder:text-(--text-muted) focus:border-(--secondary-color) focus:ring-2 focus:ring-(--secondary-color)/20"
          />
          <div className="text-xs text-red-400 mt-1 ml-1">
            {emailErrors.length > 0 &&
              emailErrors.map((err, i) => <span key={i}>{err}</span>)}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="contact-subject"
          className="mb-1.5 block text-sm font-medium text-(--heading-color)"
        >
          {t.subject}
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={state.subject}
          onChange={(e) =>
            dispatch({ type: "SET_SUBJECT", payload: e.target.value })
          }
          className="w-full rounded-lg border border-(--border-color) bg-white px-3 py-2.5 text-sm text-(--heading-color) outline-none ring-(--secondary-color) focus:border-(--secondary-color) focus:ring-2 focus:ring-(--secondary-color)/20"
        >
          <option value="general">{t.subjectGeneral}</option>
          <option value="bug">{t.subjectBug}</option>
          <option value="feature">{t.subjectFeature}</option>
        </select>
      </div>

      <div className="mt-5">
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-medium text-(--heading-color)"
        >
          {t.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={state.message}
          onChange={(e) =>
            dispatch({ type: "SET_MESSAGE", payload: e.target.value })
          }
          placeholder={t.messagePlaceholder}
          className="w-full resize-y rounded-lg border border-(--border-color) bg-white px-3 py-2.5 text-sm text-(--heading-color) outline-none ring-(--secondary-color) transition-shadow placeholder:text-(--text-muted) focus:border-(--secondary-color) focus:ring-2 focus:ring-(--secondary-color)/20"
        />
        <div className="text-xs text-red-400 mt-1 ml-1">
          {messageErrors.length > 0 &&
            messageErrors.map((err, i) => <span key={i}>{err}</span>)}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-(--secondary-color) px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {t.submit}
      </button>
      <div className="text-xs text-green-800 mt-1 ml-1 ">
        {state.submitStatus && t.submitSuccess}
      </div>
    </form>
  );
};

export default ContactForm;
