import AboutSection from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/Hero";
import HighlightsSection from "@/components/HighlightsSection";
import RepertoireSection from "@/components/RepertoireSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <RepertoireSection />
      <ContactSection />
      <CtaSection />
      <Footer />
    </>
  );
}
