/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        bgBack: "#C8DEC8",
        bgTodo: "#0D0714",
        bgBtn: "#9E78CF",
        headingColor: "#FFFFFF",
        bgItem: "#15101C",
        btnHover: "#2B114E",
      },
    },
  },
  plugins: [],
};

