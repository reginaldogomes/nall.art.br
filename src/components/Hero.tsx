"use client";

import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { Mail } from "lucide-react";

// Dados centralizados para facilitar a manutenção
const heroData = {
  title: "NALL – Produtor Musical & DJ",
  subtitle: "Produção Musical • Mixagem • Masterização • Composição",
  slogan: {
    part1: "Melodias profundas em uma",
    highlight: "Atmosfera Dark",
    part2: "e Emocional",
  },
  genres: "Melodic Techno • Progressive House • Emotional",
  email: "contato@nall.art.br",
  contact: {
    phone: "5531998811678",
    message: "Olá! Gostaria de saber mais sobre produção musical e colaborações.",
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

        {/* Título Principal - Posicionamento */}
        <motion.h1
          {...fadeIn(0.15)}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-white"
        >
          {heroData.title}
        </motion.h1>

        {/* Subtítulo - Serviços */}
        <motion.p
          {...fadeIn(0.25)}
          className="text-lg sm:text-xl md:text-2xl font-medium text-cyan-400"
        >
          {heroData.subtitle}
        </motion.p>

        {/* Slogan */}
        <motion.p
          {...fadeIn(0.35)}
          className="max-w-3xl text-xl sm:text-2xl font-heading font-medium tracking-tight text-gray-200 md:text-3xl"
        >
          {heroData.slogan.part1}{" "}
          <span className="font-bold text-purple-400">
            {heroData.slogan.highlight}
          </span>{" "}
          {heroData.slogan.part2}
        </motion.p>

        <motion.p
          {...fadeIn(0.45)}
          className="text-base text-gray-400 md:text-lg"
        >
          {heroData.genres}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeIn(0.55)} className="flex flex-col sm:flex-row gap-4 items-center">
          <WhatsAppButton />
          <a
            href={`mailto:${heroData.email}`}
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-cyan-400/50"
          >
            <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
            <div className="relative flex items-center">
              <Mail className="mr-3 h-5 w-5" />
              <span className="text-sm md:text-base">Solicitar Orçamento</span>
            </div>
          </a>
        </motion.div>

        {/* Email de contato */}
        <motion.p
          {...fadeIn(0.65)}
          className="text-sm text-gray-500"
        >
          {heroData.email}
        </motion.p>
      </div>
    </section>
  );
}
