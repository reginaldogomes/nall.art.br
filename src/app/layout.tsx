import type { Metadata } from "next";
import "./globals.css";
import { personSchema } from "@/lib/schema";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { orbitron, exo2 } from "@/fonts"; // ajuste o caminho se necessário

export const metadata: Metadata = {
  metadataBase: new URL("https://nall.art.br"),
  title: "NALL MUSIC | Produtor Musical & DJ - Produção Musical, Mixagem e Masterização",
  description:
    "NALL MUSIC - Produtor Musical & DJ especializado em Melodic Techno e Progressive House. Serviços de produção musical, mixagem, masterização e composição. Entre em contato: ozzynall@gmail.com",
  keywords: [
    "Produtor Musical",
    "Produção Musical",
    "Mixagem",
    "Masterização",
    "Melodic Techno",
    "Progressive House",
    "DJ",
    "Composição Musical",
    "NALL MUSIC",
    "Techno Melódico",
    "Música Eletrônica",
    "Estúdio Musical",
  ],
  openGraph: {
    url: "https://nall.art.br/",
    type: "website",
    title: "NALL MUSIC | Produtor Musical & DJ - Produção Musical Profissional",
    description:
      "Produtor Musical & DJ especializado em Melodic Techno e Progressive House. Serviços de produção, mixagem, masterização e composição. Contato: contato@nall.art.br",
    images: [
      "https://opengraph.b-cdn.net/production/images/2264deb7-f9e8-4e44-91c7-843fc1ce8954.png?token=-pO8f9W7Ud-W93uSNBGZlGjAzcxm6BLriTqkvtpbYXM&height=402&width=402&expires=33298872008",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NALL MUSIC | Produtor Musical & DJ - Produção Musical Profissional",
    description:
      "Produtor Musical & DJ especializado em Melodic Techno e Progressive House. Produção, mixagem e masterização. Contato: contato@nall.art.br",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
