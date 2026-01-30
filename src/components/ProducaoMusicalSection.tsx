"use client";

import { motion } from "framer-motion";
import { Music, Headphones, PenTool, Users, Mail } from "lucide-react";

const producaoData = {
  title: "Produção Musical",
  description:
    "Com experiência em música eletrônica e performance ao vivo, NALL atua em estúdio oferecendo produção musical profissional, unindo técnica, sensibilidade e identidade sonora própria.",
  email: "ozzynall@gmail.com",
  services: [
    {
      icon: Music,
      title: "Produção Completa de Faixas",
      description:
        "Do conceito inicial até o produto final, criação de músicas originais com identidade sonora única e profissional.",
    },
    {
      icon: Headphones,
      title: "Mixagem e Masterização",
      description:
        "Tratamento profissional de áudio para garantir qualidade de som competitiva em todas as plataformas de streaming.",
    },
    {
      icon: PenTool,
      title: "Arranjos e Composição",
      description:
        "Desenvolvimento de arranjos criativos e composição de músicas originais para artistas, bandas e projetos audiovisuais.",
    },
    {
      icon: Users,
      title: "Consultoria Musical",
      description:
        "Orientação profissional para projetos e lançamentos, desde a concepção até a estratégia de distribuição.",
    },
  ],
};

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

export function ProducaoMusicalSection() {
  return (
    <section id="producao-musical" className="py-20 md:py-32 bg-gradient-to-b from-background/50 to-zinc-900/50">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header da Seção */}
        <motion.div {...fadeIn(0)} className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-cyan-400 bg-cyan-400/10 rounded-full">
            Estúdio Profissional
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {producaoData.title}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-zinc-300 leading-relaxed">
            {producaoData.description}
          </p>
        </motion.div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {producaoData.services.map((service, index) => (
            <motion.div
              key={service.title}
              {...fadeIn(0.1 * (index + 1))}
              className="group p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-400/20 group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA de Contato */}
        <motion.div {...fadeIn(0.5)} className="text-center">
          <p className="text-lg text-zinc-400 mb-6">
            Entre em contato para produção musical ou colaborações
          </p>
          <a
            href={`mailto:${producaoData.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
          >
            <Mail className="w-5 h-5" />
            {producaoData.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
