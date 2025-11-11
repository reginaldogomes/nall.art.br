import { FaCheckCircle } from "react-icons/fa";

const entregaveis = [
  "Vinheta musical 100% exclusiva",
  "Arquivos em alta qualidade (WAV + MP3)",
  "Versões com e sem locução",
  "Durações de 15s, 30s e 60s",
  "1 a 2 rodadas de revisão",
  "Direitos de uso comercial inclusos",
];

export const OQueVoceRecebe = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          O que Você Recebe
        </h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {entregaveis.map((item, index) => (
              <li key={index} className="flex items-center text-base sm:text-lg text-zinc-300">
                <FaCheckCircle className="text-cyan-400 mr-4 text-xl" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
