"use client";

import { motion } from "framer-motion";

const diferenciais = [
  "Produção 100% Original",
  "Qualidade Profissional",
  "Estética Moderna",
  "Direcionada ao Público-Alvo",
  "Consultoria Inclusa",
  "Entrega Rápida (3-7 dias)",
];

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

export const DiferenciaisVinhetas = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.h2
          {...fadeIn(0)}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-12"
        >
          Nossos Diferenciais
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {diferenciais.map((item, index) => (
            <motion.div
              key={index}
              {...fadeIn(0.1 * (index + 1))}
              className="bg-zinc-900/50 border border-zinc-800 p-4 sm:p-6 rounded-lg text-center transition-colors hover:border-cyan-500 hover:bg-zinc-900"
            >
              <p className="text-base sm:text-lg font-semibold text-cyan-400">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
