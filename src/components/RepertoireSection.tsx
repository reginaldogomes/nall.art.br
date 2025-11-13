"use client";

import { motion } from "framer-motion";

const repertoireItems = [
  {
    title: "Rock Alternativo & Clássicos",
    color: "text-green-400",
    description:
      "O melhor do rock para seu evento em Pirapora. De Radiohead a Arctic Monkeys, passando por clássicos como Queen, Nirvana e The Cure. Um set para amantes de guitarras, atitude e nostalgia.",
  },
  {
    title: "House, Techno & Melodic",
    color: "text-blue-400",
    description:
      "A batida perfeita para festas eletrônicas em Pirapora. Do groove do House ao som hipnótico do Melodic Techno, uma jornada sonora com kicks potentes e atmosferas imersivas.",
  },
  {
    title: "Brasilidades, Lounge & Tropicais",
    color: "text-yellow-400",
    description:
      "O toque brasileiro que seu evento em Pirapora precisa. Remixes de samba-rock, MPB e sons tropicais, ideal para bares, lounges e sunsets vibrantes.",
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
        Repertório de DJ para Festas em Pirapora
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
