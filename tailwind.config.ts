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
        primary: {
          DEFAULT: "hsl(355, 30%, 65%)",
          dark: "hsl(355, 45%, 40%)",
          light: "hsl(355, 35%, 82%)",
        },
        wine: {
          DEFAULT: "hsl(340, 42%, 20%)",
          light: "hsl(340, 30%, 30%)",
        },
        gold: {
          DEFAULT: "hsl(42, 78%, 55%)",
          light: "hsl(42, 70%, 75%)",
          dark: "hsl(38, 80%, 40%)",
        },
        cream: {
          DEFAULT: "hsl(38, 45%, 96%)",
          warm: "hsl(35, 40%, 90%)",
        },
        charcoal: {
          DEFAULT: "hsl(220, 15%, 14%)",
          light: "hsl(220, 10%, 35%)",
          muted: "hsl(220, 8%, 55%)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "1.0" }],
        "display-lg": ["clamp(2.8rem, 6vw, 5.5rem)", { lineHeight: "1.05" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.15" }],
      },
      spacing: {
        section: "clamp(5rem, 10vw, 9rem)",
        "section-sm": "clamp(3rem, 6vw, 5rem)",
      },
      letterSpacing: {
        "extra-wide": "0.25em",
        "ultra-wide": "0.4em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-shimmer":
          "linear-gradient(105deg, transparent 40%, rgba(212,175,55,0.3) 50%, transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
