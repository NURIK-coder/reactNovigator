/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './App.js'],
  darkMode: ['selector'],

  theme: {
    extend: {
      colors: {
        bg: 'black'
      }
    },
  },
  plugins: [],
}

