const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

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
        nav: "5rem"
      },
      fontSize: {
        "xs": ["0.95rem", { lineHeight: "1rem" }]
      },
      backgroundImage: {
        'contact-image': "url('./src/assets/contactImage.svg')",
      },

      colors: {
        "main": "#022873",
        "primary": "#035AA6",
        "secondary": "#05C7F2",
        "alert": "#F2C063",
        "danger": "#F25E7A",
        "font-color": "#d5e1f1"
      },

    }
  }
}
