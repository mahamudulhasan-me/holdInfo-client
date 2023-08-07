/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        black1: "#2e3241",
        dark2: "#7E8187",
        p1: "#5dc7c2",
      },
    },
  },
  plugins: [],
};
