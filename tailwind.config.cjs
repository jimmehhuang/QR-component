/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit']
      },
    },
    colors: {
      'white': '#ffffff',
      'lightgrey': '#d6e2f0',
      'darkgrey': '#7b879d',
      'darkblue': '#1f3251'
    }
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
