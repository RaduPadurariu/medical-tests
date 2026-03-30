import MyList from "@/components/myList/MyList";
import { LangType } from "@/types/types";

export default async function MyListPage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  return <MyList lang={lang} />;
}
