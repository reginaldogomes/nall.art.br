// src/fonts.ts
import { Orbitron, Exo_2 } from "next/font/google";

export const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["400", "600", "800"],
});

export const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});
