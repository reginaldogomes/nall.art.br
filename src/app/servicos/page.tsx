import { Footer } from "@/components/Footer";
import { HomeStudioSection } from "@/components/HomeStudioSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Headphones, Volume2, PenTool, Users, Mail } from "lucide-react";

const services = [
  {
    title: "Produção Musical",
    icon: Headphones,
    description:
      "Criação de músicas originais, desde a concepção da ideia até a masterização final. Ideal para artistas, bandas e projetos que buscam uma identidade sonora única em Melodic Techno e Progressive House.",
    features: [
      "Produção completa de faixas",
      "Desenvolvimento de identidade sonora",
      "Criação de trilhas sonoras",
      "Remixes e versões alternativas",
    ],
  },
  {
    title: "Mixagem & Masterização",
    icon: Volume2,
    description:
      "Tratamento profissional de áudio para garantir qualidade competitiva em todas as plataformas de streaming. Mixagem balanceada e masterização com loudness adequado.",
    features: [
      "Mixagem profissional",
      "Masterização para streaming",
      "Equalização e compressão",
      "Otimização de dinâmica",
    ],
  },
  {
    title: "Composição & Arranjos",
    icon: PenTool,
    description:
      "Desenvolvimento de melodias, harmonias e estruturas musicais. Criação de arranjos criativos para artistas solo, bandas e projetos audiovisuais.",
    features: [
      "Composição original",
      "Arranjos criativos",
      "Melodias e harmonias",
      "Estruturação musical",
    ],
  },
  {
    title: "Colaborações Artísticas",
    icon: Users,
    description:
      "Parcerias criativas com outros artistas e produtores. Remixes, features vocais e projetos colaborativos com visão artística compartilhada.",
    features: [
      "Remixes oficiais",
      "Features e parcerias",
      "Co-produções",
      "Consultoria musical",
    ],
  },
];

export default function ServicosPage() {
  return (
    <>
      <div className="container mx-auto max-w-6xl px-4 py-20">
        <h1 className="mb-4 text-center text-4xl font-bold text-white">
          Serviços de Produção Musical
        </h1>
        <p className="mb-12 text-center text-lg text-zinc-400 max-w-2xl mx-auto">
          Soluções completas em produção musical profissional. 
          Do conceito inicial ao produto final, com qualidade e identidade sonora única.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-zinc-900/30 border-zinc-800 hover:border-cyan-400/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10">
                    <service.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-cyan-400">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-zinc-400"
                    >
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA de Contato */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-zinc-800">
          <h2 className="text-2xl font-bold text-white mb-4">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Entre em contato para discutir sua ideia e receber um orçamento personalizado.
          </p>
          <a
            href="mailto:contato@nall.art.br"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
          >
            <Mail className="w-5 h-5" />
            contato@nall.art.br
          </a>
        </div>
      </div>
      <HomeStudioSection />
    </>
  );
}
