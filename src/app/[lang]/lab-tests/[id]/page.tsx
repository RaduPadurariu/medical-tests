import SingleTest from "@/components/medicalTests/SingleTest";
import { labTestsList } from "@/data/labTestsList";
import { buildInitialUserData } from "@/lib/buildInitialUserData";
import { getCurrentUser } from "@/lib/currentUser";
import { notFound } from "next/navigation";
import { LangType, dbUserType } from "@/types/types";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LangType; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const test = labTestsList.find((t) => t.id === Number(id));
  const url = `/${lang}/lab-tests/${id}`;
  const fallbackTitle =
    lang === "ro"
      ? "Analiză medicală | Medical Tests"
      : "Lab Test | Medical Tests";
  const fallbackDescription =
    lang === "ro"
      ? "Vezi detalii informative despre aceasta analiză medicală."
      : "View informative details about this lab test.";
  const title = test?.name[lang] ?? fallbackTitle;
  const description = test?.description[lang] ?? fallbackDescription;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `/en/lab-tests/${id}`,
        ro: `/ro/lab-tests/${id}`,
      },
    },
    robots: test ? undefined : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
    },
  };
}

export default async function LabTestByIdPage({
  params,
}: {
  params: Promise<{ lang: LangType; id: string }>;
}) {
  const { id, lang } = await params;
  const test = labTestsList.find((t) => t.id === Number(id));
  const dbUser: dbUserType | null = await getCurrentUser();
  const savedAnalysisNames = buildInitialUserData(dbUser).savedAnalyses.map(
    (analysis) => analysis.name,
  );
  if (!test) {
    notFound();
  }
  return (
    <SingleTest
      test={test}
      lang={lang}
      savedAnalysisNames={savedAnalysisNames}
    />
  );
}
