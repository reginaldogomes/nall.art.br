"use client";

import WhatsAppButton from "@/components/WhatsAppButton"; // ajuste o caminho se necessário
import { motion } from "framer-motion";
import Logo from "./Logo";

// Dados centralizados para facilitar a manutenção
const heroData = {
  slogan: {
    part1: "DJ em",
    highlight: "Pirapora",
    part2: "com identidade para o seu evento",
  },
  genres: "Rock • Eletrônico • Brasilidades em Pirapora",
  contact: {
    phone: "5531998811678",
    message: "Olá! Gostaria de saber mais sobre seus serviços de DJ.",
  },
};

// Variantes de animação para simplificar o código
const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

export function HeroSection() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-background/50 py-16 sm:py-20 md:py-24 mt-8 sm:mt-10 md:mt-12">
      <div className="z-10 flex flex-col items-center gap-6 text-center text-white">
        <motion.div {...fadeIn(0)}>
          <Logo />
        </motion.div>

        <motion.h1
          {...fadeIn(0.2)}
          className="max-w-3xl text-3xl sm:text-4xl font-heading font-medium tracking-tight text-gray-200 md:text-5xl"
        >
          {heroData.slogan.part1}{" "}
          <span className="font-bold text-cyan-400">
            {heroData.slogan.highlight}
          </span>{" "}
          {heroData.slogan.part2}
        </motion.h1>

        <motion.p
          {...fadeIn(0.4)}
          className="text-base text-gray-300 md:text-lg"
        >
          {heroData.genres}
        </motion.p>

        <motion.div {...fadeIn(0.6)}>
          <WhatsAppButton />
        </motion.div>
      </div>
    </section>
  );
}
