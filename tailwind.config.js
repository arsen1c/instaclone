module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '96': '30rem'
      },
      width: {
        '96': '40rem'
      }
    },
    fontFamily: {
      'Pacifico': ['Pacifico', 'cursive']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
