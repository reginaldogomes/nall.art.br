"use client";

import { Button } from "@/components/ui/button";
import { FaHeadphones, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

export const HeroVinhetas = () => {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-background/50 py-16 sm:py-20 md:py-24 mt-12 sm:mt-10 md:mt-12">
      <div className="z-10 flex flex-col items-center gap-6 text-center text-white">
        <motion.h1
          {...fadeIn(0)}
          className="max-w-3xl text-3xl sm:text-4xl font-heading font-medium tracking-tight text-gray-200 md:text-5xl"
        >
          Vinhetas Musicais Profissionais para{" "}
          <span className="font-bold text-cyan-400">Sua Campanha</span>
        </motion.h1>
        <motion.p
          {...fadeIn(0.2)}
          className="text-base text-gray-300 md:text-lg max-w-3xl"
        >
          Crie uma identidade sonora única e impactante para sua marca, produto ou evento.
        </motion.p>
        <motion.div {...fadeIn(0.4)} className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg w-full sm:w-auto">
            <FaPaperPlane className="mr-2" />
            Solicitar Orçamento
          </Button>
          <Button variant="outline" className="border-cyan-500 text-cyan-500 hover:bg-cyan-900 hover:text-white font-bold py-3 px-6 rounded-lg w-full sm:w-auto">
            <FaHeadphones className="mr-2" />
            Ouvir Portfólio
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
