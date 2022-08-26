/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        main: "#23a96e",
        hover: "#44d193",
        "bg-color": "#2F4858",
        "bg-secondary": "#1A5B6E",
      },
      fontFamily: {
        cairo: "Cairo, sans-serif",
      },
    },
  },
  plugins: [],
};
