import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { orbitron, exo2 } from "@/fonts"; // ajuste o caminho se necessário

export const metadata: Metadata = {
  title: "DJ em Pirapora e Região – NALL | Rock, Eletrônico e Brasilidades",
  description:
    "Procurando DJ em Pirapora? NALL é especialista em Rock, Eletrônico e Brasilidades, criando a atmosfera perfeita para seu evento, festa ou bar. Som com identidade e versatilidade.",
  keywords: [
    "DJ em Pirapora",
    "DJ para festas em Pirapora",
    "DJ eventos Pirapora",
    "DJ Rock e Eletrônico em Pirapora",
    "Contratar DJ em Pirapora",
    "DJ para casamento em Pirapora",
    "DJ para bar em Pirapora",
    "DJ Brasilidades",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${orbitron.variable} ${exo2.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="relative min-h-screen 
             bg-fixed bg-cover bg-center bg-no-repeat
             bg-[url('/bg.webp')]
             before:content-[''] before:absolute before:inset-0 
             before:-z-10 before:bg-black/85 antialiased text-body"
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
        <Navbar />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
