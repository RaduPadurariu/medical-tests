import Login from "@/components/auth/login/Login";
import { LangType } from "@/types/types";

export default async function LoginPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  return <Login lang={lang} />;
}
