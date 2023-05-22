/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: {
          100: "#FFFFFF",
          200: "#F6F8FB",
        },
        gray: {
          100: "#E7E7E8",
          200: "#F3F3F3",
          300: "#D0D4D7",
          400: "#B7BEC7",
          500: "#5E6166",
          600: "#8B8B8B",
          700: "#8A8A8A",
        },
        brown: "#372F0A",
        pink: "#FF4869",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
