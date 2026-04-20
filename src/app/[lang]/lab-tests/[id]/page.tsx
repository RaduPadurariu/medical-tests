import SingleTest from "@/components/medicalTests/SingleTest";
import { labTestsList } from "@/data/labTestsList";
import { LangType } from "@/types/types";

export default async function LabTestByIdPage({
  params,
}: {
  params: Promise<{ lang: LangType; id: string }>;
}) {
  const { id, lang } = await params;
  const test = labTestsList.find((t) => t.id === Number(id));
  if (!test) {
    return <div>Test not found</div>;
  }
  return <SingleTest test={test} lang={lang} />;
}
