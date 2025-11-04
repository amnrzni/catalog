import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0f1729",
          secondary: "#1a1f35",
          tertiary: "#1e2537",
        },
        primary: {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
          dark: "#7c3aed",
        },
        accent: {
          blue: "#3b82f6",
          pink: "#ec4899",
          orange: "#f97316",
          green: "#10b981",
        },
        text: {
          primary: "#f1f5f9",
          secondary: "#cbd5e1",
          tertiary: "#94a3b8",
          quaternary: "#64748b",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        deep: "0 20px 60px rgba(0, 0, 0, 0.6)",
        glow: "0 0 20px rgba(139, 92, 246, 0.5)",
        "glow-strong": "0 0 40px rgba(139, 92, 246, 0.7)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "spin-slow": "spin 20s linear infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
