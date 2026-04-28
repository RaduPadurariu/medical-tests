import SingleTest from "@/components/medicalTests/SingleTest";
import { labTestsList } from "@/data/labTestsList";
import { buildInitialUserData } from "@/lib/buildInitialUserData";
import { getCurrentUser } from "@/lib/currentUser";
import { LangType, dbUserType } from "@/types/types";

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
    return <div>Test not found</div>;
  }
  return (
    <SingleTest
      test={test}
      lang={lang}
      savedAnalysisNames={savedAnalysisNames}
    />
  );
}
