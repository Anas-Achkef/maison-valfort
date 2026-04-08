import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bordeaux: "#6D0303",
        creme: "#F5F3EF",
        noir: "#000000",
        blanc: "#FFFFFF",
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
