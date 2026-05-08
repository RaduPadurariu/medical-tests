import { translations } from "@/data/translations";
import { LangType } from "@/types/types";

export function checkName(name: string, lang: LangType) {
  const t = translations[lang].contactPage.form;
  const errors: string[] = [];

  if (name.trim().length === 0) {
    errors.push(t.nameRequired);
  }

  return errors;
}

export function checkEmail(email: string, lang: LangType) {
  const t = translations[lang].contactPage.form;
  const errors: string[] = [];

  if (email.trim().length === 0) {
    errors.push(t.emailRequired);
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push(t.emailInvalid);
    }
  }

  return errors;
}

export function checkMessage(message: string, lang: LangType) {
  const t = translations[lang].contactPage.form;
  const errors: string[] = [];

  if (message.trim().length === 0) {
    errors.push(t.messageRequired);
  }

  return errors;
}
