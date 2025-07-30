"use client";

import WhatsAppButton from "@/components/WhatsAppButton"; // ajuste o caminho se necessário
import { motion } from "framer-motion";
import Logo from "./Logo";

// Dados centralizados para facilitar a manutenção
const heroData = {
  slogan: {
    part1: "Som com",
    highlight: "identidade",
    part2: "para o seu evento",
  },
  genres: "Rock • Eletrônico • Brasilidades",
  location: "Atende em Belo Horizonte e todo o Brasil",
  contact: {
    phone: "5531998811678",
    message: "Olá! Gostaria de saber mais sobre seus serviços de DJ.",
  },
};

// Variantes de animação para simplificar o código
const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

export function HeroSection() {
  return (
    <section className="relative flex min-h-[450px] w-full items-center justify-center overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/30 p-4">
      <div className="z-10 flex flex-col items-center gap-6 text-center text-white">
        <motion.div {...fadeIn(0)}>
          <Logo />
        </motion.div>

        <motion.h2
          {...fadeIn(0.2)}
          className="max-w-3xl text-4xl font-medium tracking-tight text-gray-200 md:text-5xl"
        >
          {heroData.slogan.part1}{" "}
          <span className="font-bold text-cyan-400">
            {heroData.slogan.highlight}
          </span>{" "}
          {heroData.slogan.part2}
        </motion.h2>

        <motion.p
          {...fadeIn(0.4)}
          className="text-base text-gray-300 md:text-lg"
        >
          {heroData.genres}
        </motion.p>

        <motion.p
          {...fadeIn(0.5)}
          className="text-base text-gray-400 md:text-lg"
        >
          {heroData.location}
        </motion.p>

        <motion.div {...fadeIn(0.6)}>
          <WhatsAppButton />
        </motion.div>
      </div>
    </section>
  );
}
