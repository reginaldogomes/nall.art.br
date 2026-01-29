const keywords = [
  "Produtor Musical",
  "Produção Musical",
  "Mixagem",
  "Masterização",
  "Melodic Techno",
  "Progressive House",
  "Composição Musical",
  "Arranjos",
  "Sound Design",
  "DJ",
  "Techno Melódico",
  "Dark Atmosphere",
  "Emotional Music",
  "Electronic Music Producer",
  "Home Studio",
  "Original Mix",
  "Ableton Live",
  "Synthesizer",
  "Atmospheric",
  "Cinematic",
];

export function KeywordsSection() {
  return (
    <section id="keywords" className="py-10 bg-background/50">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Universo Sonoro
        </h2>
        <p className="mb-6 text-zinc-400">
          Produtor Musical & DJ especializado em música eletrônica
        </p>
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
