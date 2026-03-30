import Contact from "@/components/contact/Contact";
import { LangType } from "@/types/types";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  return <Contact lang={lang} />;
}
