/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./public/**/*.html'],
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit']
      },
    },
    colors: {
      'white': hsl(0, 0, 100),
      'grey': hsl(212, 45, 89)
    }
  },
  plugins: [],
}
