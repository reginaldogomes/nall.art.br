import { getSortedArticlesData } from "@/lib/markdown";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function ArtigosPage() {
  const articles = await getSortedArticlesData();

  return (
    <>
      <div className="container mx-auto max-w-5xl px-4 py-20">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">
          Artigos e Dicas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} href={`/artigos/${article.id}`}>
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
    </>
  );
}

