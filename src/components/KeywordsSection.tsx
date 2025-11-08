const keywords = [
  "DJ em Pirapora",
  "DJ Rock em Pirapora",
  "DJ Música Eletrônica em Pirapora",
  "DJ Brasilidades em Pirapora",
  "Contratar DJ em Pirapora",
  "DJ para festas em Pirapora",
  "DJ para eventos em Pirapora",
  "Melhor DJ de Pirapora",
  "DJ para casamento em Pirapora",
  "DJ para balada em Pirapora",
  "DJ para bar em Pirapora",
  "DJ versátil em Pirapora",
  "Música para eventos Pirapora",
  "Sonorização para festas Pirapora",
  "DJ profissional em Pirapora",
  "Eventos com DJ em Pirapora",
  "DJ de House em Pirapora",
  "DJ de Techno em Pirapora",
  "DJ de Rock Alternativo em Pirapora",
  "DJ de MPB em Pirapora",
  "DJ para formatura em Pirapora",
  "DJ para aniversário em Pirapora",
  "Serviço de DJ em Pirapora",
  "DJ com experiência em Pirapora",
  "DJ com repertório variado em Pirapora",
];

export function KeywordsSection() {
  return (
    <section id="keywords" className="py-10 bg-background/50">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Encontre o DJ Nall em Pirapora
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-400"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
