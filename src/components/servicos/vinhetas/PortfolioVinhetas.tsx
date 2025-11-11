
import { FaPlayCircle } from "react-icons/fa";

export const PortfolioVinhetas = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">Portfólio</h2>
        <div className="text-center">
          <FaPlayCircle className="text-cyan-400 text-6xl mx-auto mb-4" />
          <p className="text-lg text-zinc-300">
            Em breve, exemplos de nossas produções estarão disponíveis aqui.
          </p>
        </div>
      </div>
    </section>
  );
};
