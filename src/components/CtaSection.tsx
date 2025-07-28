"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

// Estrutura de dados para o conteúdo da seção
const ctaContent = {
  headline: {
    part1: "Vamos criar a atmosfera ",
    highlight: "perfeita",
    part2: " para seu evento?",
  },
  subheadline:
    "Entre em contato, fale sobre sua ideia e vamos agendar uma data.",
  buttonText: "Agendar via WhatsApp",
  whatsappLink:
    "https://wa.me/5531998811678?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20DJ.",
};

export function CtaSection() {
  return (
    // Cores variadas para dar mais destaque à seção
    <section className="w-full bg-card py-20 sm:py-28 border-t border-cyan-500/20">
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
        <p className="max-w-2xl text-lg text-muted-foreground">
          {ctaContent.subheadline}
        </p>
        <Button
          asChild
          size="lg"
          className="group mt-4 bg-cyan-500 text-gray-900 hover:bg-cyan-400 transition-transform duration-300 hover:scale-105"
        >
          <a
            href={ctaContent.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <MessageCircle className="mr-3 h-7 w-7 transition-transform duration-300 group-hover:rotate-12" />
            {ctaContent.buttonText}
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
