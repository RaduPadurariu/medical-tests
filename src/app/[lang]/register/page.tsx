import Register from "@/components/auth/register/Register";
import { LangType } from "@/types/types";

export default async function RegisterPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  return <Register lang={lang} />;
}
