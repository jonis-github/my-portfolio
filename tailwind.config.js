/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{jsx,js}" ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f98e2b",
        secondary: "#f3f3f3"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "3rem",
        }
      }
    },
  },
  plugins: [],
}

