/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0184fc",
        secondary: "#00e3eb",
        backgroundPrimary: "#0c0c0c",
        backgroundSecondary: "#111",
        color: "#d6d6dc"
      },
    },
    screens: {
      'sm': '100px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      poppins: ["Poppins"],
      signature: ["Great Vibes"]
    }
  },
  plugins: [],
}