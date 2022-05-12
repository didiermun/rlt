module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.tsx'],
  darkMode: 'class',
  mode: 'jit',
  important: true, // important in prod is must be

  theme: {
    fontFamily:{
      primary: ['Montserrat', 'sans-serif'],
    },
    extend: {
     
      colors: {
        primary: {
          default: '#18A058FF',
          deep: '#0C7A43FF',
          shallow: '#36AD6AFF',
        },
        ground: '#666666',
        brown: "#915907",
        dimgray: "#666666",
        lblue: "#0A66C2",
        darkgray: "#E0E0E0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
