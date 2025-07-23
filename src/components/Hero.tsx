import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./Logo";

export const HeroSection = () => {
  // Número de WhatsApp e mensagem pré-definida para o CTA
  const whatsappNumber = "5531999999999"; // <-- SUBSTITUA PELO SEU NÚMERO
  const whatsappMessage =
    "Olá! Vi seu site e gostaria de saber mais sobre seus serviços de DJ para um evento.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-6 text-center p-4"
    >
      <div className="space-y-4">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-white">
          <Logo />
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 tracking-wide">
          Rock • Eletrônico • Brasilidades
        </p>
      </div>
      <div className="mt-8">
        <Button
          asChild
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg rounded-full px-8 py-6 transition-transform transform hover:scale-105"
        >
          {/* O componente Link do Next.js foi substituído por uma tag <a> para evitar erros de compilação em ambientes sem Next.js */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            {/* Ícone corrigido */}
            <Phone className="mr-3 h-6 w-6" />
            Agende seu evento
          </a>
        </Button>
      </div>
    </section>
  );
};
