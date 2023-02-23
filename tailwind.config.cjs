const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      spacing: {
        container: "2.5rem",
        nav:"5rem"
      },
      fontSize:{
        "xs":["0.95rem",{lineHeight:"1rem"}]
      },
      colors:{
        "dark-gradient":"linear-gradient(to right, #243B55, #141E30)"
      }
    }
  }
}
