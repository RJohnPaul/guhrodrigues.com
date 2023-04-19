/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        secondary: "#D2EAFF",
        color: "#d6d6dc",
        backgroundPrimaryLight: "#F2F2F2",
        backgroundSecondaryLight: "#e7e7e7",
        backgroundPrimaryDark: "#0c0c0c",
        backgroundSecondaryDark: "#111",
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
