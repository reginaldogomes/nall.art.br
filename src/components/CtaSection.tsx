"use client";

import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

// Estrutura de dados para o conteúdo da seção
const ctaContent = {
  headline: {
    part1: "Pronto para dar vida ao seu ",
    highlight: "projeto musical",
    part2: "?",
  },
  subheadline:
    "Entre em contato para produção musical, colaborações ou bookings.",
  subheadline2: "Disponível para projetos em todo o Brasil",
  email: "contato@nall.art.br",
};

export function CtaSection() {
  return (
    <section className="w-full py-20 sm:py-28 bg-gradient-to-b from-background/50 to-zinc-900/30">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto flex flex-col items-center gap-6 px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          {ctaContent.headline.part1}
          <span className="text-cyan-400">{ctaContent.headline.highlight}</span>
          {ctaContent.headline.part2}
        </h2>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          {ctaContent.subheadline}
        </p>
        <p className="max-w-2xl text-base text-muted-foreground pb-4 sm:text-lg">
          {ctaContent.subheadline2}
        </p>
        
        {/* Botões de CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <WhatsAppButton />
          <a
            href={`mailto:${ctaContent.email}`}
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-purple-600 px-6 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:ring-2 hover:ring-purple-400/50"
          >
            <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-[350ms] ease-out group-hover:w-full"></div>
            <div className="relative flex items-center">
              <Mail className="mr-3 h-5 w-5" />
              <span className="text-sm md:text-base">Enviar E-mail</span>
            </div>
          </a>
        </div>
        
        <p className="text-sm text-zinc-500 mt-2">
          {ctaContent.email}
        </p>
      </motion.div>
    </section>
  );
}
