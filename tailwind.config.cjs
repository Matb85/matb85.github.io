const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*"],
  theme: {
    extend: {},
    fontFamily: {
      primary: "Prata, serif",
      secondary: "Times New Roman, Verdana, Geneva, Tahoma, sans-serif",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      primary: colors.slate,
    },
  },
  plugins: [],
};
