import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header/Header";
import { LangLayoutType, LangType } from "@/types/types";
const locales = ["en", "ro"] as const;

export default async function Layout({ children, params }: LangLayoutType) {
  const { lang } = await params;

  if (!locales.includes(lang as LangType)) {
    notFound();
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <Header lang={lang as LangType} />
      <main className="flex-1 pt-30">{children}</main>
      <Footer lang={lang as LangType} />
    </div>
  );
}
