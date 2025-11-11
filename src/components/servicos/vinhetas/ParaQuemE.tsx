const publico = [
  "Eventos",
  "Empresas",
  "Influenciadores",
  "Lançamento de Produtos",
  "Campanhas Publicitárias",
  "Streaming",
  "Rádio",
  "Reels / TikTok / Shorts",
];

export const ParaQuemE = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Para Quem é Este Serviço?
        </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {publico.map((item, index) => (
            <div key={index} className="bg-cyan-800/20 border border-cyan-700 text-cyan-300 text-sm sm:text-base font-semibold py-2 px-4 rounded-full transition-colors hover:bg-cyan-800/40">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
