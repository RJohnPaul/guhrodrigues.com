const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: colors.white,
        foreground: colors.neutral[300],
        background: "#08070B",
        input: "#131415",
      },
    },
    screens: {
      sm: "100px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      title: ["Kanit", "sans-serif"],
    },
  },
  plugins: [],
};
