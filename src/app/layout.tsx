import type { Metadata } from "next";
import "./globals.css";
import { localBusinessSchema } from "@/lib/schema";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { orbitron, exo2 } from "@/fonts"; // ajuste o caminho se necessário

export const metadata: Metadata = {
  metadataBase: new URL("https://nall.art.br"),
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
  openGraph: {
    url: "https://nall.art.br/",
    type: "website",
    title: "DJ em Pirapora e Região – NALL | Rock, Eletrônico e Brasilidades",
    description:
      "Procurando DJ em Pirapora? NALL é especialista em Rock, Eletrônico e Brasilidades, criando a atmosfera perfeita para seu evento, festa ou bar. Som com identidade e versatilidade.",
    images: [
      "https://opengraph.b-cdn.net/production/images/2264deb7-f9e8-4e44-91c7-843fc1ce8954.png?token=-pO8f9W7Ud-W93uSNBGZlGjAzcxm6BLriTqkvtpbYXM&height=402&width=402&expires=33298872008",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DJ em Pirapora e Região – NALL | Rock, Eletrônico e Brasilidades",
    description:
      "Procurando DJ em Pirapora? NALL é especialista em Rock, Eletrônico e Brasilidades, criando a atmosfera perfeita para seu evento, festa ou bar. Som com identidade e versatilidade.",
    images: [
      "https://opengraph.b-cdn.net/production/images/2264deb7-f9e8-4e44-91c7-843fc1ce8954.png?token=-pO8f9W7Ud-W93uSNBGZlGjAzcxm6BLriTqkvtpbYXM&height=402&width=402&expires=33298872008",
    ],
  },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
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
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Main className="flex-grow">{children}</Main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
