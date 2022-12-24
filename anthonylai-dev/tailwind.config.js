const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './react-bricks/**/*.tsx',
    './node_modules/react-bricks-ui/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      'dark-main-100': '#353535',
      'light-bg-100': '#e5e5e5',
      'light-text': '#f9f9f9',
      'teal': '#3C6E71'
    },
    fontFamily: {

    },
    extend: {
      animation: {
        fadeIn: 'fade 500ms ease-in-out',
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      }
    },
  }
}
