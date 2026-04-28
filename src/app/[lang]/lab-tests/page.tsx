import MedicalTests from "@/components/medicalTests/MedicalTests";
import { buildInitialUserData } from "@/lib/buildInitialUserData";
import { getCurrentUser } from "@/lib/currentUser";
import { LangType, dbUserType } from "@/types/types";

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
