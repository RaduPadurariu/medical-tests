import CallToAction from "@/components/home/callToAction/CallToAction";
import Home from "@/components/home/Home";
import HowItWorks from "@/components/home/howItWorks/HowItWorks";

export default function HomePage() {
  return (
    <div className="">
      <Home />
      <HowItWorks />
      <CallToAction />
    </div>
  );
}
