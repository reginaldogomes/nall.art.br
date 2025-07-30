import AboutSection from "@/components/About";
import { SocialsSection } from "@/components/SocialsSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Hero";
import RepertoireSection from "@/components/RepertoireSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <RepertoireSection />
      <CtaSection />
      <SocialsSection />
      <Footer />
    </>
  );
}
