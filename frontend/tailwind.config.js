/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("tailwindcss-animate")],
  theme: {
    extend: {
      fontFamily: {
        valorant: ["Valorant", "sans-serif"],
        opsans: ["OPsans", "sans-serif"],
        moon: ["Moon", "sans-serif"],
      },
      colors: {
        button: "#F9CDFD",
        lgradient: "#F8D0FF",
        dgradient: "#735BD1",
      },
    },
  },
};
