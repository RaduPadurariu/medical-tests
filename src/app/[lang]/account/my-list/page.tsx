import MyList from "@/components/auth/account/myList/MyList";
import { buildInitialUserData } from "@/lib/buildInitialUserData";
import { getCurrentUser } from "@/lib/currentUser";
import { dbUserType, LangType, UserType } from "@/types/types";

export default async function MyListPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: LangType }>;
  searchParams: Promise<{ success?: string }>;
}) {
  const { lang } = await params;
  const { success } = await searchParams;
  const dbUser: dbUserType | null = await getCurrentUser();
  const currentUser: UserType = buildInitialUserData(dbUser);
  return <MyList lang={lang} currentUser={currentUser} success={success} />;
}
