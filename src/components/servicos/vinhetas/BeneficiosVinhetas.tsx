"use client";

import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaChartLine,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa";

const beneficios = [
  {
    icon: <FaBullhorn className="text-cyan-400 text-3xl sm:text-4xl mb-4" />,
    title: "Aumento do Reconhecimento da Marca",
    description:
      "Uma vinheta marcante faz sua marca ser lembrada instantaneamente.",
  },
  {
    icon: <FaPaintBrush className="text-cyan-400 text-3xl sm:text-4xl mb-4" />,
    title: "Identidade Sonora Única",
    description:
      "Destaque-se da concorrência com uma assinatura musical exclusiva.",
  },
  {
    icon: <FaChartLine className="text-cyan-400 text-3xl sm:text-4xl mb-4" />,
    title: "Aumento de Retenção em Redes Sociais",
    description: "Capture a atenção do seu público nos primeiros segundos.",
  },
  {
    icon: <FaMobileAlt className="text-cyan-400 text-3xl sm:text-4xl mb-4" />,
    title: "Ideal para Campanhas Promocionais",
    description: "Perfeita para Reels, TikTok, Shorts, YouTube e muito mais.",
  },
];

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

export const BeneficiosVinhetas = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.h2
          {...fadeIn(0)}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-12"
        >
          Benefícios de uma Vinheta Profissional
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              {...fadeIn(0.2 * (index + 1))}
              className="bg-zinc-800/50 p-6 rounded-lg text-center transition-transform hover:scale-105 hover:bg-zinc-800"
            >
              {beneficio.icon}
              <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-2">
                {beneficio.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300">
                {beneficio.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
