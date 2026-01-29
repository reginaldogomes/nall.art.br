"use client";

import { motion } from "framer-motion";
import { contactData } from "@/data/contactData";

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

export const SocialsSection = () => {
  return (
    <footer id="redes" className="py-20 text-center bg-background/50">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.h2
          {...fadeIn(0)}
          className="mb-8 text-3xl font-bold md:text-4xl"
        >
          Siga NALL nas Redes
        </motion.h2>
        <motion.div
          {...fadeIn(0.2)}
          className="flex justify-center gap-6 md:gap-8"
        >
          {contactData.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link para o ${social.name}`}
              className={`
                flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full
                bg-zinc-800/60 text-zinc-400 shadow-lg
                transition-all duration-300 ease-in-out
                hover:-translate-y-2 hover:scale-110 hover:shadow-xl hover:shadow-current
                ${social.hoverColor}
              `}
            >
              <social.icon className="h-7 w-7 md:h-8 md:w-8" />
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};
