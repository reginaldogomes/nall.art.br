"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";

const planos = [
  {
    name: "Start",
    features: [
      "Vinheta de 30s",
      "Sem locução",
      "1 revisão",
      "Arquivos MP3 + WAV",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    features: [
      "Versões de 15s, 30s e 60s",
      "Com locução",
      "2 revisões",
      "Formatos prontos para redes sociais",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    features: [
      "Todas as versões",
      "Locução profissional",
      "Arquivos Stems (separados)",
      "Adaptação para rádio/streaming",
      "3 revisões",
    ],
    highlight: false,
  },
];

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

export const PlanosVinhetas = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.h2
          {...fadeIn(0)}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-12"
        >
          Nossos Planos
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {planos.map((plano, index) => (
            <motion.div
              key={index}
              {...fadeIn(0.2 * (index + 1))}
              className={`bg-zinc-800/50 p-8 rounded-lg flex flex-col h-full ${
                plano.highlight
                  ? "border-2 border-cyan-500 scale-105"
                  : "border border-zinc-700"
              }`}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
                {plano.name}
              </h3>
              <ul className="space-y-4 mb-8 flex-grow">
                {plano.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-zinc-300">
                    <FaCheck className="text-cyan-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`${
                  plano.highlight
                    ? "bg-cyan-500 hover:bg-cyan-600"
                    : "bg-gray-500 hover:bg-gray-600"
                } text-white font-bold py-3 px-6 rounded-lg mt-auto`}
              >
                Contratar
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
