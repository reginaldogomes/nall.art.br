"use client";

import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMicrophoneAlt,
  FaRecordVinyl,
  FaSoundcloud,
  FaTractor,
  FaWaveSquare,
  FaCommentDots, // Added for ChatGPT
  FaRobot, // Added for Google Gemini
  FaMusic, // Added for Ableton Live
} from "react-icons/fa";
import { SiMui, SiSuno } from "react-icons/si";

const studioItems = {
  software: [
    { name: "Ableton Live", icon: FaMusic },
    { name: "Suno Pro AI", icon: SiSuno },
    { name: "Traktor Pro 3", icon: FaTractor },
    { name: "ChatGPT", icon: FaCommentDots }, // Added ChatGPT
    { name: "Google Gemini", icon: FaRobot }, // Added Google Gemini
  ],
  hardware: [
    { name: "Monitores de Audio: Yamaha HS5", icon: FaWaveSquare },
    { name: "Placa de Audio: M-AUDIO Air 192/4", icon: FaRecordVinyl },
    { name: "Notebook: Dell Gamer G Series", icon: FaLaptopCode },
    { name: "Controladora MIDI: Akai MPK mini", icon: SiMui },
    { name: "Controladora de DJ: Traktor Kontrol MK2", icon: FaSoundcloud },
    { name: "Microfone: KSR Pro - KM 980", icon: FaMicrophoneAlt },
    { name: "Headphone: Audio-Technica", icon: FaWaveSquare },
  ],
};

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

export const HomeStudioSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto max-w-5xl px-4">
        <motion.h2
          {...fadeIn(0)}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
        >
          Ferramentas do Home Studio
        </motion.h2>
        <motion.p
          {...fadeIn(0.1)}
          className="text-center text-lg text-zinc-400 mb-12 max-w-3xl mx-auto"
        >
          Utilizo ferramentas de Inteligência Artificial como ChatGPT e Google
          Gemini para auxiliar na composição e produção, garantindo inovação e
          eficiência em cada projeto.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div {...fadeIn(0.2)}>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              Softwares
            </h3>
            <div className="flex flex-col gap-4">
              {studioItems.software.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  {item.icon && <item.icon className="h-6 w-6 text-cyan-400" />}
                  <span className="text-zinc-300 text-lg">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeIn(0.4)}>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              Hardwares
            </h3>
            <div className="flex flex-col gap-4">
              {studioItems.hardware.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <item.icon className="h-6 w-6 text-cyan-400" />
                  <span className="text-zinc-300 text-lg">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
