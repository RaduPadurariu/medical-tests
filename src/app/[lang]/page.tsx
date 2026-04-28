import CallToActionSection from "@/components/home/CallToActionSection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import { authOptions } from "@/lib/auth";
import { LangType } from "@/types/types";
import { getServerSession } from "next-auth";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  const session = await getServerSession(authOptions);
  const isAuthenticated = !!session?.user?.email;
  return (
    <div>
      <HeroSection lang={lang} isAuthenticated={isAuthenticated} />
      <HowItWorksSection lang={lang} />
      <CallToActionSection lang={lang} isAuthenticated={isAuthenticated} />
    </div>
  );
}
