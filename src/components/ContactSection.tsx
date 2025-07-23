import { Instagram, LinkIcon, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const ContactSection = () => {
  const whatsappNumber = "5531999999999"; // <-- SUBSTITUA PELO SEU NÚMERO
  const whatsappMessage = "Olá! Gostaria de fazer um orçamento para um evento.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  const email = "contato@nall.dj";

  return (
    <footer id="contato" className="py-20 text-center border-t border-zinc-800">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Entre em Contato
        </h2>
        <div className="mb-8">
          <Button
            asChild
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg rounded-full px-8 py-6 transition-transform transform hover:scale-105"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {/* Ícone corrigido */}
              <Phone className="mr-3 h-6 w-6" />
              Chamar no WhatsApp
            </a>
          </Button>
        </div>
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-8 mb-8 text-zinc-300">
          <a
            href={`mailto:${email}`}
            className="flex items-center hover:text-white transition-colors"
          >
            <Mail className="mr-2 h-5 w-5" />
            {email}
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          {/* Substitua '#' pelos seus links reais */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Instagram className="h-7 w-7" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <LinkIcon className="h-7 w-7" />
          </a>
        </div>
        <p className="text-zinc-500 mt-12 text-sm">
          &copy; {new Date().getFullYear()} DJ Nall. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};
