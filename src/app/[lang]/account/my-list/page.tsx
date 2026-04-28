import MyList from "@/components/auth/account/myList/MyList";
import { buildInitialUserData } from "@/lib/buildInitialUserData";
import { getCurrentUser } from "@/lib/currentUser";
import { dbUserType, LangType, UserType } from "@/types/types";

export default async function MyListPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  const dbUser: dbUserType | null = await getCurrentUser();
  const currentUser: UserType = buildInitialUserData(dbUser);
  return <MyList lang={lang} currentUser={currentUser} />;
}
