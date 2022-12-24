/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
        orange_: "#FCAB5E",
        light_gray: "#A9A9A9",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
