module.exports = {
  purge: ['./src/**/*.ejs', './src/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Kanit"', 'sans-serif'],
        body: ['"Trirong"', 'sans-serif'],
      },
      colors: {
        dark: '#424242',
        light: '#E6FFFE',
      },
    },
  },
  variants: {},
  plugins: [],
};
