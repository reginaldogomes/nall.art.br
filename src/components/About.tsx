"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

// 1. Dados centralizados em um objeto para fácil manutenção
const aboutData = {
  title: "NALL: Produtor Musical & DJ",
  avatar: {
    src: "/nall.png", // Substitua pela URL da sua imagem
    alt: "Foto de perfil do NALL MUSIC - Produtor Musical",
    fallback: "NL",
  },
  description: [
    "NALL é um produtor musical e DJ focado em Melodic Techno e Progressive House, onde melodias profundas e melancólicas se fundem em uma atmosfera dark e emocional. Com experiência tanto em estúdio quanto em performances ao vivo, oferece produção musical profissional com identidade sonora única.",
    "Especializado em produção completa de faixas, mixagem, masterização e composição, NALL une técnica apurada com sensibilidade artística. Cada projeto é desenvolvido com atenção aos detalhes, garantindo qualidade profissional para lançamentos em todas as plataformas.",
    "Mais do que entretenimento, NALL usa a música como forma de protesto e expressão. Suas produções dão voz a causas urgentes, denunciando injustiças sociais e transformando indignação em arte sonora que toca a alma.",
    "Disponível para produção musical, colaborações artísticas e bookings. Entre em contato para transformar sua ideia em música.",
  ],
};

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true },
});

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto max-w-5xl px-4">
        {/* 3. Layout em grid para responsividade (coluna única no mobile, duas no desktop) */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
          {/* Coluna do Avatar */}
          <motion.div
            {...fadeIn(0)}
            className="flex justify-center md:col-span-1"
          >
            <Avatar className="h-36 w-36 md:h-48 md:w-48 border-4 border-zinc-700/80 shadow-lg">
              <AvatarImage
                src={aboutData.avatar.src}
                alt={aboutData.avatar.alt}
              />
              <AvatarFallback className="text-4xl">
                {aboutData.avatar.fallback}
              </AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Coluna do Texto */}
          <motion.div {...fadeIn(0.2)} className="md:col-span-2">
            <h2 className="mb-6 text-center text-3xl font-bold text-white md:text-left md:text-4xl">
              {aboutData.title}
            </h2>
            <div className="flex flex-col gap-4">
              {/* 2. Mapeamento dos parágrafos do objeto de dados */}
              {aboutData.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-center text-base leading-relaxed text-zinc-300 sm:text-lg md:text-left"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
