"use client";

import { motion } from "framer-motion";
import { Headphones, Volume2, PenTool, Users } from "lucide-react";

const servicosData = {
  title: "Serviços",
  subtitle: "Soluções completas em produção musical",
  services: [
    {
      icon: Headphones,
      title: "Produção Musical",
      emoji: "🎧",
      description:
        "Criação de faixas originais do zero, com identidade sonora única. Desenvolvimento completo de produções em Melodic Techno, Progressive House e estilos relacionados.",
      color: "cyan",
    },
    {
      icon: Volume2,
      title: "Mixagem & Masterização",
      emoji: "🔊",
      description:
        "Tratamento profissional de áudio para garantir qualidade competitiva em streaming. Mixagem balanceada e masterização com loudness adequado para todas as plataformas.",
      color: "purple",
    },
    {
      icon: PenTool,
      title: "Composição & Arranjos",
      emoji: "✍️",
      description:
        "Desenvolvimento de melodias, harmonias e estruturas musicais. Criação de arranjos criativos para artistas solo, bandas e projetos audiovisuais.",
      color: "pink",
    },
    {
      icon: Users,
      title: "Colaborações Artísticas",
      emoji: "🤝",
      description:
        "Parcerias criativas com outros artistas e produtores. Remixes, features vocais e projetos colaborativos com visão artística compartilhada.",
      color: "orange",
    },
  ],
};

const colorClasses = {
  cyan: {
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/30",
    text: "text-cyan-400",
    hover: "hover:border-cyan-400/60",
    shadow: "hover:shadow-cyan-400/20",
  },
  purple: {
    bg: "bg-purple-400/10",
    border: "border-purple-400/30",
    text: "text-purple-400",
    hover: "hover:border-purple-400/60",
    shadow: "hover:shadow-purple-400/20",
  },
  pink: {
    bg: "bg-pink-400/10",
    border: "border-pink-400/30",
    text: "text-pink-400",
    hover: "hover:border-pink-400/60",
    shadow: "hover:shadow-pink-400/20",
  },
  orange: {
    bg: "bg-orange-400/10",
    border: "border-orange-400/30",
    text: "text-orange-400",
    hover: "hover:border-orange-400/60",
    shadow: "hover:shadow-orange-400/20",
  },
};

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

export function ServicosSection() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div {...fadeIn(0)} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {servicosData.title}
          </h2>
          <p className="text-lg text-zinc-400">
            {servicosData.subtitle}
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicosData.services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={service.title}
                {...fadeIn(0.1 * (index + 1))}
                className={`
                  group p-8 rounded-2xl bg-zinc-900/40 border ${colors.border} 
                  ${colors.hover} transition-all duration-300 
                  hover:shadow-lg ${colors.shadow} hover:-translate-y-1
                `}
              >
                {/* Ícone e Emoji */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${colors.bg}`}>
                    <service.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  <span className="text-3xl">{service.emoji}</span>
                </div>

                {/* Título */}
                <h3 className={`text-2xl font-semibold mb-3 ${colors.text}`}>
                  {service.title}
                </h3>

                {/* Descrição */}
                <p className="text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
