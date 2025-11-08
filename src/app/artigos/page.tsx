import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const articles = [
  {
    title: "Como Contratar o DJ Certo em Montes Claros para seu Evento",
    slug: "como-contratar-dj-em-montes-claros",
    description:
      "Dicas essenciais para garantir que você escolha o DJ perfeito para sua festa, casamento ou evento corporativo em Montes Claros.",
  },
  {
    title: "DJ para Festas em Pirapora: O Guia Completo",
    slug: "dj-para-festas-em-pirapora",
    description:
      "Tudo o que você precisa saber para contratar um DJ para sua festa em Pirapora, desde os estilos musicais até a estrutura necessária.",
  },
  {
    title: "Música para Eventos em Várzea da Palma: Como Criar a Atmosfera Ideal",
    slug: "musica-para-eventos-em-varzea-da-palma",
    description:
      "A importância da música na criação de uma experiência memorável para seus convidados em Várzea da Palma.",
  },
];

export default function ArtigosPage() {
  return (
    <>
      <div className="container mx-auto max-w-5xl px-4 py-20">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">
          Artigos e Dicas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.slug} href={`/artigos/${article.slug}`}>
              <Card className="bg-zinc-900/30 border-zinc-800 h-full hover:border-cyan-400 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-cyan-400">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-300">{article.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
