const diferenciais = [
  "Produção 100% Original",
  "Qualidade Profissional",
  "Estética Moderna",
  "Direcionada ao Público-Alvo",
  "Consultoria Inclusa",
  "Entrega Rápida (3-7 dias)",
];

export const DiferenciaisVinhetas = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Nossos Diferenciais
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {diferenciais.map((item, index) => (
            <div key={index} className="bg-zinc-900/50 border border-zinc-800 p-4 sm:p-6 rounded-lg text-center transition-colors hover:border-cyan-500 hover:bg-zinc-900">
              <p className="text-base sm:text-lg font-semibold text-cyan-400">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
