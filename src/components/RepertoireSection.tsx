"use client";

import { motion } from "framer-motion";

const repertoireItems = [
  {
    title: "Melodic Techno",
    color: "text-cyan-400",
    description:
      "A fusão perfeita entre a força do techno e a emoção das melodias. Beats hipnóticos e sintetizadores profundos que criam uma viagem sonora única.",
  },
  {
    title: "Progressive House",
    color: "text-purple-400",
    description:
      "Construções longas e envolventes, com camadas de harmonia que evoluem progressivamente. A trilha sonora ideal para momentos de introspecção e êxtase.",
  },
  {
    title: "Dark & Emotional",
    color: "text-red-400",
    description:
      "Atmosferas densas e sentimentais. Música com propósito, que toca em feridas e cura através da dança. O lado mais profundo e artístico da música eletrônica.",
  },
];

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

const RepertoireSection = () => (
  <section id="repertorio" className="py-20 md:py-32">
    <div className="container mx-auto max-w-5xl px-4">
      <motion.h2
        {...fadeIn(0)}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Identidade Musical
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {repertoireItems.map((item, index) => (
          <motion.div
            key={index}
            {...fadeIn(0.2 * (index + 1))}
            className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/30"
          >
            <h3 className={`text-2xl font-semibold mb-3 ${item.color}`}>
              {item.title}
            </h3>
            <p className="text-zinc-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RepertoireSection;
