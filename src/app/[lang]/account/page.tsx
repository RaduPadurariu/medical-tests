import Account from "@/components/auth/account/Account";
import { LangType } from "@/types/types";

export default async function AccountPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  return <Account lang={lang} />;
}
