/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#00f6ff",
        darkBlue: "#284b63",
        lightBlue: "#e0fbfc",
        greyish: "#808080",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",

      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
