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
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
