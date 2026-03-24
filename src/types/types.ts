type NavKeys = "home" | "labTests" | "contact";

export type NavLinkType = {
  id: number;
  key: NavKeys;
  href: string;
};

export type LangType = "en" | "ro";

export type LanguageContextType = {
  lang: LangType;
  setLang: (value: LangType) => void;
};

export type LanguageContextProviderType = {
  children: React.ReactNode;
};

export type Language = {
  id: number;
  code: LangType;
  flag: string;
  label: string;
};
