"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";

export function HeroSection() {
  const WHATSAPP_LINK =
    "https://wa.me/5531999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20DJ.";

  return (
    <section className="relative flex min-h-[350px] w-full items-center justify-center overflow-hidden p-6 border border-zinc-800 rounded-lg bg-zinc-900/30">
      {/* Content */}
      <div className="relative z-20 mx-4 px-4 text-center text-white sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold uppercase tracking-wide"
        >
          <Logo />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-4xl mx-auto text-5xl sm:text-xl md:text-5xl text-gray-200"
        >
          Som com <span className="font-bold text-cyan-400">identidade</span>{" "}
          para o seu evento
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-xl mx-auto text-base md:text-lg text-gray-300"
        >
          Rock • Eletrônico • Brasilidades
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-xl mx-auto text-base md:text-lg text-gray-300"
        >
          Atende em Belo Horizonte e todo o Brasil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <Button
            asChild
            size="lg"
            className="group bg-cyan-500 text-black hover:bg-cyan-400 transition-transform duration-300 hover:scale-105"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="mr-2 h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
              Chamar no WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
