import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "DJ NALL – Som com identidade para o seu evento",
  description:
    "Contrate DJ NALL para seu evento, festa, bar ou casamento. Especialista em Rock, Eletrônico e Brasilidades com uma identidade única. Atende em Belo Horizonte e todo o Brasil.",
  keywords: [
    "DJ para festas",
    "DJ eventos Belo Horizonte",
    "DJ Rock e Eletrônico",
    "Contratar DJ",
    "DJ para casamento",
    "DJ para bar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body
        className="relative min-h-screen 
             bg-fixed bg-cover bg-center bg-no-repeat
             bg-[url('/bg.webp')]
             before:content-[''] before:absolute before:inset-0 
             before:-z-10 before:bg-black/85 antialiased"
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M2WT384Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <GoogleTagManager gtmId="GTM-M2WT384Z" />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
