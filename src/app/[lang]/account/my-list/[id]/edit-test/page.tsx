import EditTest from "@/components/auth/account/myList/EditTest";
import { buildInitialUserData } from "@/lib/buildInitialUserData";
import { getCurrentUser } from "@/lib/currentUser";
import { dbUserType, LangType, UserType } from "@/types/types";
import { notFound } from "next/navigation";

export default async function EditSavedAnalysisPage({
  params,
}: {
  params: Promise<{ lang: LangType; id: string }>;
}) {
  const { lang, id } = await params;

  const dbUser: dbUserType | null = await getCurrentUser();
  const currentUser: UserType = buildInitialUserData(dbUser);
  const savedAnalysis = currentUser.savedAnalyses.find(
    (analysis) => analysis.id === id,
  );
  if (!savedAnalysis) {
    notFound();
  }
  return <EditTest lang={lang} savedAnalysis={savedAnalysis} />;
}
