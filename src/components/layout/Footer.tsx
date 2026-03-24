"use client";

import { useLanguageContext } from "@/context/languageContext/useLanguageContext";
import { translations } from "@/data/translations";

const Footer = () => {
  const { lang } = useLanguageContext();
  return (
    <footer className="py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Medical Tests. {translations[lang].footer}{" "}
      Radu Padurariu.
    </footer>
  );
};

export default Footer;
