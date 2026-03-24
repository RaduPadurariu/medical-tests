"use client";

import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { LangType, LanguageContextProviderType } from "@/types/types";

export const LanguageContextProvider = ({
  children,
}: LanguageContextProviderType) => {
  const [lang, setLang] = useState<LangType>("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
