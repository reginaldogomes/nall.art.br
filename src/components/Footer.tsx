import { Mail, Music } from "lucide-react";
import { contactData } from "@/data/contactData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-950/90 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1 - Sobre */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center justify-center md:justify-start gap-2">
              <Music className="h-5 w-5 text-cyan-400" />
              NALL
            </h3>
            <p className="text-sm text-zinc-400">
              Produtor Musical especializado em Melodic Techno e Progressive House.
            </p>
          </div>

          {/* Coluna 2 - Contato */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-3">Contato</h3>
            <a
              href={`mailto:${contactData.email}`}
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="h-4 w-4" />
              {contactData.email}
            </a>
            <p className="mt-2 text-sm text-zinc-500">
              Produção Musical • Mixagem • Masterização
            </p>
          </div>

          {/* Coluna 3 - Redes Sociais */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-3">Redes Sociais</h3>
            <div className="flex justify-center md:justify-end gap-4">
              {contactData.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:bg-cyan-400/20 hover:text-cyan-400 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divisória e Copyright */}
        <div className="border-t border-zinc-800 pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} <span className="font-semibold text-cyan-400">NALL</span> – Produtor Musical. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
