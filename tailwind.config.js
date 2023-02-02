const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      black: colors.black,
      white: colors.white,
      indigo: colors.indigo,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.amber,
      teal: colors.teal
    },
    extend: {

    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
