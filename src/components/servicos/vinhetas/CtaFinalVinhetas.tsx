import { Button } from "@/components/ui/button";
import { FaPaperPlane } from "react-icons/fa";

export const CtaFinalVinhetas = () => {
  return (
    <section className="py-20 sm:py-24 md:py-28 bg-cyan-950/30 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Pronto para Criar sua Identidade Sonora?
        </h2>
        <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-transform hover:scale-105">
          <FaPaperPlane className="mr-3" />
          Solicitar Orçamento
        </Button>
      </div>
    </section>
  );
};
