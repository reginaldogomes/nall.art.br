import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// 1. Dados centralizados em um objeto para fácil manutenção
const aboutData = {
  title: "DJ em Pirapora: Rock, Eletrônico e Brasilidades",
  avatar: {
    src: "/nall.png", // Substitua pela URL da sua imagem
    alt: "Foto de perfil do DJ Nall",
    fallback: "DN",
  },
  description: [
    "DJ Nall é um artista versátil com foco em música eletrônica, especialmente House e Techno, agora com base em Pirapora. Com uma identidade sonora marcante, ele se especializa em criar experiências únicas e imersivas.",
    "Seus sets enérgicos, com linhas melódicas e progressivas, são a alma de festas eletrônicas, eventos corporativos, lounges e pubs em Pirapora e região. DJ Nall adapta seu som a cada ambiente, criando atmosferas imersivas com identidade e sensibilidade únicas, sempre em sintonia com o público e o clima do evento.",
    "Para eventos em Pirapora que pedem algo diferente, Nall expande seu repertório com o melhor do rock alternativo e metal, além de brasilidades para momentos mais descontraídos.",
  ],
};

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background/50">
      <div className="container mx-auto max-w-5xl px-4">
        {/* 3. Layout em grid para responsividade (coluna única no mobile, duas no desktop) */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
          {/* Coluna do Avatar */}
          <div className="flex justify-center md:col-span-1">
            <Avatar className="h-48 w-48 border-4 border-zinc-700/80 shadow-lg">
              <AvatarImage
                src={aboutData.avatar.src}
                alt={aboutData.avatar.alt}
              />
              <AvatarFallback className="text-4xl">
                {aboutData.avatar.fallback}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Coluna do Texto */}
          <div className="md:col-span-2">
            <h2 className="mb-6 text-center text-3xl font-bold text-white md:text-left md:text-4xl">
              {aboutData.title}
            </h2>
            <div className="flex flex-col gap-4">
              {/* 2. Mapeamento dos parágrafos do objeto de dados */}
              {aboutData.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-center text-lg leading-relaxed text-zinc-300 md:text-left"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
