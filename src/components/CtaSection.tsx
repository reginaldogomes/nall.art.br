"use client";

import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export function CtaSection() {
  const WHATSAPP_LINK =
    "https://wa.me/5531999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20DJ.";

  return (
    <section className="w-full bg-gray-950 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto flex flex-col items-center gap-6 px-6 text-center"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Vamos criar a atmosfera perfeita para seu evento?
        </h2>
        <p className="max-w-2xl text-lg text-gray-300">
          Entre em contato, fale sobre sua ideia e vamos agendar uma data.
        </p>
        <Button
          asChild
          size="lg"
          className="group mt-4 bg-cyan-500 text-gray-900 hover:bg-cyan-400 transition-transform duration-300 hover:scale-105"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="mr-3 h-7 w-7 transition-transform duration-300 group-hover:rotate-12" />
            Agendar via WhatsApp
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
