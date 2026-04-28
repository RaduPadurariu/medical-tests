import EditPrintHeader from "@/components/auth/account/myList/header/EditPrintHeader";
import { buildInitialUserData } from "@/lib/buildInitialUserData";
import { getCurrentUser } from "@/lib/currentUser";
import { dbUserType, LangType, UserType } from "@/types/types";

export default async function EditPrintHeaderPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;

  const dbUser: dbUserType | null = await getCurrentUser();
  const currentUser: UserType = buildInitialUserData(dbUser);
  return (
    <EditPrintHeader lang={lang} initialHeaderData={currentUser.headerData} />
  );
}
