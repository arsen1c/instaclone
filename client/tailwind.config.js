module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        '96': '30rem'
      },
      width: {
        '86': '30rem',
        '96': '40rem',
        '98': '50rem',
        '100': '62rem'
      },
      height: {
        '96': '40rem',
        '98': '20rem',
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
