"use client";

import WhatsAppButton from "@/components/WhatsAppButton"; // ajuste o caminho se necessário
import { motion } from "framer-motion";

// Estrutura de dados para o conteúdo da seção
const ctaContent = {
  headline: {
    part1: "Vamos criar a atmosfera ",
    highlight: "perfeita",
    part2: " para seu evento?",
  },
  subheadline:
    "Entre em contato, fale sobre sua ideia e vamos agendar uma data.",

  subheadline2: "Atende em Pirapora e região",
};

export function CtaSection() {
  return (
    // Cores variadas para dar mais destaque à seção
    <section className="w-full py-20 sm:py-28 bg-background/50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto flex flex-col items-center gap-6 px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          {ctaContent.headline.part1}
          {/* Palavra em destaque usando a cor da marca */}
          <span className="text-cyan-400">{ctaContent.headline.highlight}</span>
          {ctaContent.headline.part2}
        </h2>
        {/* Cor semântica para o subtítulo */}
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          {ctaContent.subheadline}
        </p>
        <p className="max-w-2xl text-base text-muted-foreground pb-4 sm:text-lg">
          {ctaContent.subheadline2}
        </p>
        <WhatsAppButton />
      </motion.div>
    </section>
  );
}
