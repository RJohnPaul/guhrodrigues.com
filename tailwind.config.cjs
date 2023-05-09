/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary: "#D2EAFF",
        tertiary: "#d6d6dc",
        backgroundPrimaryDark: "#0c0c0c",
      },
    },
    screens: {
      sm: "100px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      poppins: ["Poppins"],
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
