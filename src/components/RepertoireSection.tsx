const RepertoireSection = () => (
  <section id="repertorio" className="py-20 md:py-32">
    <div className="container mx-auto max-w-4xl px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Repertório & Estilos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-900/30">
          <h3 className="text-2xl font-semibold mb-3 text-green-400">
            Rock Alternativo
          </h3>
          <p className="text-zinc-400">
            Do indie rock ao post-punk, uma seleção refinada para quem aprecia
            guitarras e atitude.
          </p>
        </div>
        <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-900/30">
          <h3 className="text-2xl font-semibold mb-3 text-blue-400">
            Eletrônico
          </h3>
          <p className="text-zinc-400">
            Batidas contemporâneas, do house ao techno, que ditam o ritmo da
            pista de dança.
          </p>
        </div>
        <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-900/30">
          <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
            Brasilidades
          </h3>
          <p className="text-zinc-400">
            Uma viagem pelos sons tropicais, do samba-rock à nova MPB, com
            remixes exclusivos.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default RepertoireSection;
