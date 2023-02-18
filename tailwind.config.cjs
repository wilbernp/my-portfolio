const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        container: "2.5rem",
        nav:"5rem"
      },
      colors:{
        "dark-gradient":"linear-gradient(to right, #243B55, #141E30)"
      }
    }
  }
}
