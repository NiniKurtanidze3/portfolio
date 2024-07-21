/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#33323D",
        darkGreen: "#203A4C",
        tag: "#5FB4A2",
        error: "#F43030",
      },
    },
  },
  plugins: [],
}

