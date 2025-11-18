export interface PortfolioItem {
  title: string;
  description: string;
  soundcloudUrl: string;
  type: "Musica" | "Vinheta Musical";
}

export const portfolioData: PortfolioItem[] = [
    {
    title: "Nall — Em Pirapora (feat. Daniel Jr)",
    description: "Faixa com atmosfera emotiva e regional, unindo elementos melódicos e vocais marcantes em uma narrativa musical envolvente.",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nallmusic/em-pirapora-feat-daniel-jr&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    type: "Musica"
  },
  {
    title: "NALL — Crowley Reimagined (Original Mix)",
    description: "Uma releitura atmosférica e envolvente com texturas eletrônicas e uma construção melódica profunda, assinada por Nall.",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nallmusic/nall-crowley-reimagined&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    type: "Musica"
  },
  {
    title: "NALL — Synthetic Soul (Original Mix)",
    description: "Faixa original de Nall que combina grooves eletrônicos, ambiência profunda e uma atmosfera hipnótica que conecta corpo e alma.",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nallmusic/synthetic-soul-original-mix&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    type: "Musica"
  },
  {
    title: "Nall — Transcendental Flow (Original Mix)",
    description: "Uma jornada sonora transcendental com elementos de Melodic Techno, atmosferas etéreas e uma progressão emocional intensa.",
    soundcloudUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/nallmusic/transcendental-flow-original-mix&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    type: "Musica"
  }
];
