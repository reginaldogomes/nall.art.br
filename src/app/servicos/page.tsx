import { Footer } from "@/components/Footer";
import { HomeStudioSection } from "@/components/HomeStudioSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Produção Musical",
    description:
      "Criação de músicas originais, desde a concepção da ideia até a masterização final. Ideal para artistas, bandas e projetos que buscam uma identidade sonora única.",
    features: [
      "Composição e arranjo",
      "Gravação de instrumentos e vocais",
      "Mixagem e masterização profissional",
      "Criação de trilhas sonoras",
    ],
  },
  {
    title: "Criação de Beats",
    description:
      "Desenvolvimento de beats exclusivos para rappers, cantores e produtores de conteúdo. Estilos variados, do trap ao boom bap, sempre com a mais alta qualidade.",
    features: [
      "Beats personalizados sob demanda",
      "Venda de beats pré-produzidos",
      "Colaboração em projetos",
      "Samples e loops exclusivos",
    ],
  },
  {
    title: "Edição de Áudio",
    description:
      "Serviços de edição para podcasts, vídeos, audiobooks e qualquer outro material que precise de um tratamento de áudio profissional. Clareza e qualidade para sua mensagem.",
    features: [
      "Remoção de ruídos e imperfeições",
      "Equalização e compressão",
      "Normalização de volume",
      "Edição e montagem de diálogos",
    ],
  },
];

export default function ServicosPage() {
  return (
    <>
      <div className="container mx-auto max-w-5xl px-4 py-20">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">
          Serviços de Produção Musical
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-zinc-900/30 border-zinc-800"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-cyan-400">
                  {service.title}
                </CardTitle>
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
      </div>
      <HomeStudioSection />
    </>
  );
}
