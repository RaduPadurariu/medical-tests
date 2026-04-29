import PrintPreview from "@/components/auth/account/myList/PrintPreview";
import { buildInitialUserData } from "@/lib/buildInitialUserData";
import { getCurrentUser } from "@/lib/currentUser";
import { dbUserType, LangType, UserType } from "@/types/types";

export default async function PrintPreviewPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;

  const dbUser: dbUserType | null = await getCurrentUser();
  const currentUser: UserType = buildInitialUserData(dbUser);
  return <PrintPreview lang={lang} currentUser={currentUser} />;
}
