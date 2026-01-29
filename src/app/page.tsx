import AboutSection from "@/components/About";
import { SocialsSection } from "@/components/SocialsSection";
import { CtaSection } from "@/components/CtaSection";
import { HeroSection } from "@/components/Hero";
import RepertoireSection from "@/components/RepertoireSection";
import { KeywordsSection } from "@/components/KeywordsSection";
import { ProducaoMusicalSection } from "@/components/ProducaoMusicalSection";
import { ServicosSection } from "@/components/ServicosSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProducaoMusicalSection />
      <ServicosSection />
      <AboutSection />
      <RepertoireSection />
      <CtaSection />
      <SocialsSection />
      <KeywordsSection />
    </>
  );
}
