import MedicalTests from "@/components/medicalTests/MedicalTests";
import { LangType } from "@/types/types";

export default async function MedicalTestsPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  return <MedicalTests lang={lang} />;
}
