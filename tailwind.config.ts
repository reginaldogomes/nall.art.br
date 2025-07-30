import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-orbitron)", "sans-serif"],
        body: ["var(--font-exo2)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
