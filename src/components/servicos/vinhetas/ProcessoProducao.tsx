const passos = [
  { title: "Briefing", description: "Entendemos suas necessidades e objetivos." },
  { title: "Planejamento e Referências", description: "Definimos o estilo e a direção criativa." },
  { title: "Produção Musical", description: "Criamos a trilha sonora exclusiva." },
  { title: "Locução (Opcional)", description: "Gravamos a locução com profissionais." },
  { title: "Mixagem e Masterização", description: "Finalizamos o áudio com qualidade profissional." },
  { title: "Entrega dos Arquivos", description: "Enviamos tudo pronto para você usar." },
];

export const ProcessoProducao = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
          Nosso Processo de Produção
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 w-0.5 h-full bg-zinc-700 hidden sm:block"></div>
          {passos.map((passo, index) => (
            <div key={index} className="relative flex items-center mb-8 sm:mb-12">
              <div className="sm:w-1/2 sm:pr-8 sm:text-right">
                <div className="bg-zinc-800/50 p-4 rounded-lg sm:bg-transparent sm:p-0">
                  <h3 className="text-lg sm:text-xl font-bold text-cyan-400">{`${index + 1}. ${passo.title}`}</h3>
                  <p className="text-sm sm:text-base text-zinc-300 mt-1">{passo.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-cyan-500 rounded-full border-4 border-zinc-900 hidden sm:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
