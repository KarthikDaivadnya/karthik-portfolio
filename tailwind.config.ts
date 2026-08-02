import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        bg2: "#0A0F26",
        bg3: "#0E1430",
        primary: "#6C63FF",
        secondary: "#00F5D4",
        accent: "#FF4D8D",
        ink: "#F5F6FF",
        inkDim: "#9AA0C0",
      },
      fontFamily: {
        grotesk: ["var(--font-grotesk)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backdropBlur: { xs: "2px" },
    },
  },
  plugins: [],
};
export default config;
