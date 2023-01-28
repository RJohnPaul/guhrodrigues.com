/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2cd9ff",
        secondary: "#7effb2",
        backgroundPrimary: "#111",
        backgroundSecondary: "#1C1C1C",
        color: "#d6d6dc"
      },
    },
    screens: {
      'sm': '100px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}