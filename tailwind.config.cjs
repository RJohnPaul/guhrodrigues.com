/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                primary: "#fff",
                background: "#08070B",
            },
            transitionProperty: {
                multiple: "width, height, opacity",
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
        },
    },
    plugins: [],
};
