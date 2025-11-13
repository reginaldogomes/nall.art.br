"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

// 1. Dados centralizados em um objeto para fácil manutenção
const aboutData = {
  title: "DJ em Pirapora: Rock, Eletrônico e Brasilidades",
  avatar: {
    src: "/nall.png", // Substitua pela URL da sua imagem
    alt: "Foto de perfil do DJ Nall",
    fallback: "DN",
  },
  description: [
    "DJ Nall é um artista versátil da música eletrônica, com foco em House e Techno, atualmente baseado em Pirapora – MG. Com uma identidade sonora marcante, ele se especializa em criar experiências únicas e imersivas, explorando texturas melódicas e atmosferas profundas.",
    "Formado em Produção Musical pela AIMEC (Academia Internacional de Música Eletrônica) em Curitiba/PR, Nall combina técnica, sensibilidade e criatividade para construir narrativas musicais envolventes.",
    "Seus sets enérgicos, repletos de linhas melódicas e progressivas, são a alma de festas eletrônicas, eventos corporativos, lounges e pubs em Pirapora e região. Sempre atento ao público e ao clima do evento, adapta seu repertório para entregar a energia certa no momento certo.",
    "Para ocasiões que pedem diversidade, o artista também explora com fluidez o rock alternativo, metal e brasilidades, criando transições inteligentes e mantendo uma estética sonora única. O resultado é uma performance autêntica, cheia de personalidade, capaz de transformar qualquer ambiente.",
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
