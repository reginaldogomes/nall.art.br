import { PortfolioCard } from "@/components/PortfolioCard";
import { portfolioData } from "@/data/portfolioData";

export default function PortfolioPage() {
  return (
      <div className="container mx-auto max-w-5xl px-4 py-20">
      <h1 className="mb-12 text-center text-4xl font-bold text-white">
        Meus Trabalhos
      </h1>
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
    </div>
  );
}
