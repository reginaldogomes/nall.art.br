const depoimentos = [
  {
    name: "Ana, Organizadora de Eventos",
    text: "A vinheta criada superou todas as expectativas. Deu um toque profissional e moderno ao nosso evento.",
  },
  {
    name: "Carlos, Gerente de Marketing",
    text: "O processo foi rápido e a equipe entendeu perfeitamente o que precisávamos. O resultado foi uma identidade sonora incrível para nossa campanha.",
  },
  {
    name: "Juliana, Influenciadora Digital",
    text: "Minha audiência amou a nova vinheta! A retenção nos meus vídeos aumentou significativamente.",
  },
];

export const DepoimentosVinhetas = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          O que Nossos Clientes Dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div key={index} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg">
              <p className="text-zinc-300 italic mb-4">"{depoimento.text}"</p>
              <p className="font-bold text-cyan-400 text-right">- {depoimento.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
