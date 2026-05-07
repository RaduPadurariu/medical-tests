import MedicalTests from "@/components/medicalTests/MedicalTests";
import { translations } from "@/data/translations";
import { buildInitialUserData } from "@/lib/buildInitialUserData";
import { getCurrentUser } from "@/lib/currentUser";
import { LangType, dbUserType } from "@/types/types";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = translations[lang].medicalTests;
  const url = `/${lang}/lab-tests`;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: url,
      languages: {
        en: "/en/lab-tests",
        ro: "/ro/lab-tests",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url,
      type: "website",
    },
    twitter: {
      title: t.title,
      description: t.description,
      card: "summary_large_image",
    },
  };
}

export default async function MedicalTestsPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: LangType }>;
  searchParams: Promise<{
    category: string;
    subcategory: string;
    q: string;
    page: string;
  }>;
}) {
  const { lang } = await params;
  const { category, subcategory, q, page } = await searchParams;
  const dbUser: dbUserType | null = await getCurrentUser();
  const savedAnalysisNames = buildInitialUserData(dbUser).savedAnalyses.map(
    (analysis) => analysis.name,
  );
  return (
    <MedicalTests
      lang={lang}
      category={category ?? "all"}
      subcategory={subcategory ?? "all"}
      q={q ?? ""}
      page={page ?? "1"}
      savedAnalysisNames={savedAnalysisNames}
    />
  );
}
