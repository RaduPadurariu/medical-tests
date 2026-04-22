import { labTestsOptions } from "@/data/labTestsList";

type NavKeys = "home" | "labTests" | "contact";

export type NavLinkType = {
  id: number;
  key: NavKeys;
  href: string;
};

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

export type LangType = "en" | "ro";

export type LangParamsType = {
  lang: string;
};

export type LangLayoutType = {
  children: React.ReactNode;
  params: Promise<LangParamsType>;
};

export type BreadcrumbType = {
  id: number;
  key: string;
  slug: string;
};

export type LabTestCategoryKey =
  keyof (typeof labTestsOptions)["en"]["categories"];
export type LabTestSubcategoryKey =
  keyof (typeof labTestsOptions)["en"]["subcategories"];

export type LocalizedString = { en: string; ro: string };
export type LabTestDetailHighlight = {
  icon: string;
  title: LocalizedString;
  text: LocalizedString;
};
export type LabTestCollectionStep = {
  icon: string;
  label: LocalizedString;
};
export type LabTestDetail = {
  whatItMeasures: LocalizedString;
  whyItMatters: LocalizedString;
  typicalTurnaround: LocalizedString;
  referenceMinMale: string;
  referenceMaxMale: string;
  referenceMinFemale: string;
  referenceMaxFemale: string;
  unitMeasure: string;
  longDescription: LocalizedString;
  belowReference: LocalizedString;
  aboveReference: LocalizedString;
  stepSpecial: LocalizedString;
};

export type TestType = {
  id: number;
  image: string;
  name: {
    en: string;
    ro: string;
  };
  description: {
    en: string;
    ro: string;
  };
  category: LabTestCategoryKey;
  subcategory: LabTestSubcategoryKey;
  detailPage?: LabTestDetail;
};
