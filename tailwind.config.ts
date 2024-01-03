import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.white,
        background: "#0E0F11",
        foreground: colors.neutral[400],
        muted: "#15161A",
        border: "#2D2E30",
        divider: "#1F2022",
      },
      backgroundImage: {
        "globe-pattern": "url('/globe-pattern.svg')",
        "fade-gradient":
          "linear-gradient(90deg, #0E0F11, transparent 20%, transparent 80%, #0E0F11)",
      },
      animation: {
        slide: "slide 100s linear infinite",
      },
      keyframes: {
        slide: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-50%)",
          },
        },
      },
    },
    screens: {
      sm: "100px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    lineHeight: {
      relaxed: "1.8",
    },
    fontFamily: {
      poppins: "var(--font-default)",
      mono: "var(--font-mono)",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
