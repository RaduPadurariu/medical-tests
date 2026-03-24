import CallToActionSection from "@/components/home/CallToActionSection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import { LangType } from "@/types/types";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: LangType }>;
}) {
  const { lang } = await params;
  return (
    <div>
      <HeroSection lang={lang} />
      <HowItWorksSection lang={lang} />
      <CallToActionSection lang={lang} />
    </div>
  );
}
