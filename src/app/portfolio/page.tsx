import { PortfolioCard } from "@/components/PortfolioCard";
import { portfolioData } from "@/data/portfolioData";
import { Mail } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-20">
      <h1 className="mb-4 text-center text-4xl font-bold text-white">
        Produções Originais
      </h1>
      <p className="mb-12 text-center text-lg text-zinc-400 max-w-2xl mx-auto">
        Confira algumas das faixas produzidas por NALL. Cada produção carrega uma identidade sonora única,
        unindo técnica profissional com sensibilidade artística.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map((item, index) => (
          <PortfolioCard
            key={index}
            title={item.title}
            description={item.description}
            soundcloudUrl={item.soundcloudUrl}
            type={item.type}
          />
        ))}
      </div>
      
      {/* CTA para colaborações */}
      <div className="mt-16 text-center p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
        <h2 className="text-2xl font-bold text-white mb-4">
          Quer produzir sua próxima faixa?
        </h2>
        <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
          Entre em contato para discutir seu projeto de produção musical, colaboração ou remix.
        </p>
        <a
          href="mailto:contato@nall.art.br"
          className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold rounded-full transition-all duration-300"
        >
          <Mail className="w-5 h-5" />
          contato@nall.art.br
        </a>
      </div>
    </div>
  );
}
