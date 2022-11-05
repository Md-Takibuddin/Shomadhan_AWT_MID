/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],

    theme: {
        extend: {
            container: {
                center: true,
            },
            fontFamily: {
                roboto: ["Roboto"],
            },
            colors: {
                purple: "#8A70D6",
                green: "#27AE60",
                gray__: "#2D3748",
                blue__: "#579BE4",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
