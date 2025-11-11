import { SiSoundcloud, SiTiktok, SiInstagram } from "react-icons/si";

// 1. DADOS DE OBJETO: Centraliza os links, ícones e estilos de hover.
const socialsData = [
  {
    name: "Instagram",
    href: "https://instagram.com/nall.dj", // Substitua pelo seu link
    icon: SiInstagram,
    hoverColor: "hover:text-[#E4405F]", // Cor do Instagram
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/nall.dj", // Substitua pelo seu link
    icon: SiTiktok,
    hoverColor: "hover:text-[#00F2EA]", // Cor do TikTok
  },
  {
    name: "SoundCloud",
    href: "https://soundcloud.com/kosmophonic", // Substitua pelo seu link
    icon: SiSoundcloud,
    hoverColor: "hover:text-[#FF5500]", // Cor do SoundCloud
  },
];

export const SocialsSection = () => {
  return (
    <footer id="redes" className="py-20 text-center bg-background/50">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">Siga o DJ Nall em Pirapora nas Redes</h2>
        <div className="flex justify-center gap-6 md:gap-8">
          {/* 2. Mapeamento dos ícones a partir do objeto de dados */}
          {socialsData.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link para o ${social.name}`}
              // 3. EFEITOS E DESTAQUES: Efeitos de hover com cor, sombra e animação.
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
        </div>
      </div>
    </footer>
  );
};
