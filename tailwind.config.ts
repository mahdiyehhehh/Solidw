import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        brand: {
          indigo: "#6D5EF5",
          violet: "#9D6BFF",
          cyan: "#33E1D6",
        },
        whatsapp: "#25D366",
        telegram: "#229ED9",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(115deg, #6D5EF5 0%, #9D6BFF 50%, #33E1D6 100%)",
        "brand-gradient-soft": "linear-gradient(115deg, rgba(109,94,245,0.16) 0%, rgba(157,107,255,0.12) 50%, rgba(51,225,214,0.10) 100%)",
        "radial-fade": "radial-gradient(60% 60% at 50% 0%, rgba(109,94,245,0.20) 0%, rgba(109,94,245,0) 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "80%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "gradient-pan": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.2, 0.8, 0.2, 1) infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        marquee: "marquee 26s linear infinite",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(109,94,245,0.15), 0 8px 40px -8px rgba(109,94,245,0.35)",
        card: "0 2px 8px -2px rgba(16,18,27,0.06), 0 12px 32px -12px rgba(16,18,27,0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
