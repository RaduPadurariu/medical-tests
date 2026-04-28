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

// User type for the frontend
export type UserType = {
  id: string;
  email: string;
  name: string;
  headerData: HeaderDataType;
  savedAnalyses: SavedAnalysisType[];
};

export type HeaderDataType = {
  fullName: string;
  age: string;
  sex: SexType | "";
  city: string;
};

export type SavedAnalysisType = {
  id: string;
  name: string;
};

export type SexType = "male" | "female";

// Database user type
export type dbUserType = {
  _id: string;
  email: string;
  name: string | null;
  headerData: DBUserHeaderDataType;
  savedAnalyses: DBUserSavedAnalysisType[];
};

export type DBUserHeaderDataType = {
  fullName: string | null;
  age: string | null;
  sex: SexType | null;
  city: string | null;
};

export type DBUserSavedAnalysisType = {
  _id: string | { toString: () => string };
  name: string;
};

// Return type for useUnsavedChangesGuard
export type UseUnsavedChangesGuardParams = {
  isDirty: boolean;
  message?: string;
};
