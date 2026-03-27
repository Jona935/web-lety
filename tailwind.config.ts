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
        // Lety Maldonado Eventos brand palette
        cream: {
          DEFAULT: "#F0EBE3",   // Warm linen cream
          light: "#F7F4F0",      // Near-white cream
          warm: "#E8E0D5",       // Deeper warm cream
          dark: "#D8CDBF",       // Warm beige
        },
        ebony: {
          DEFAULT: "#1C1916",   // Deep warm black
          light: "#2E2A27",      // Softer dark
          muted: "#6B6560",      // Mid-tone warm gray
          subtle: "#9B9590",     // Subtle warm gray
        },
        taupe: {
          DEFAULT: "#9B8070",   // Warm taupe accent
          light: "#BFB0A3",      // Light taupe
          dark: "#7A6255",       // Deep taupe
        },
        gold: {
          DEFAULT: "#C4A882",   // Warm champagne gold
          light: "#DED0BE",      // Light gold
          dark: "#A08860",       // Deep gold
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-pinyon)", "cursive"],
      },
      fontSize: {
        "display-xl": ["clamp(4rem, 9vw, 8rem)", { lineHeight: "0.95" }],
        "display-lg": ["clamp(3rem, 6vw, 6rem)", { lineHeight: "1.0" }],
        "display-md": ["clamp(2rem, 4vw, 3.8rem)", { lineHeight: "1.05" }],
        "display-sm": ["clamp(1.6rem, 3vw, 2.8rem)", { lineHeight: "1.1" }],
        "script-lg": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "1.2" }],
        "script-md": ["clamp(1.8rem, 3.5vw, 3.5rem)", { lineHeight: "1.3" }],
      },
      letterSpacing: {
        "mega": "0.35em",
        "ultra": "0.5em",
        "wide-sm": "0.12em",
      },
      animation: {
        "fade-up": "fadeUp 1s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 1.2s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
