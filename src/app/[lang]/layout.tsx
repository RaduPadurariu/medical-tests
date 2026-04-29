import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/header/Header";
import AuthSessionProvider from "@/components/providers/AuthSessionProvider";
import { LangLayoutType, LangType } from "@/types/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { buildInitialUserData } from "@/lib/buildInitialUserData";
import { getCurrentUser } from "@/lib/currentUser";

const locales = ["en", "ro"] as const;

export default async function Layout({ children, params }: LangLayoutType) {
  const { lang } = await params;

  if (!locales.includes(lang as LangType)) {
    notFound();
  }

  const session = await getServerSession(authOptions);
  const isAuthenticated = !!session?.user?.email;
  const dbUser = isAuthenticated ? await getCurrentUser() : null;
  const myListCount = buildInitialUserData(dbUser).savedAnalyses.length;
  return (
    <AuthSessionProvider>
      <div className="flex min-h-dvh flex-col">
        <Header
          lang={lang as LangType}
          isAuthenticated={isAuthenticated}
          myListCount={myListCount}
        />
        <main className="flex-1 pt-30 print:pt-0">{children}</main>
        <Footer lang={lang as LangType} />
      </div>
    </AuthSessionProvider>
  );
}
