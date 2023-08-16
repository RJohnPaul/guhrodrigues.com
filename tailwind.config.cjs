/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                primary: "#fff",
                background: "#08070B",
            },
            keyframes: {
                "fade-in": {
                    from: { opacity: "0", transform: "translateY(8px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "fade-in": "fade-in 0.4s ease",
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
