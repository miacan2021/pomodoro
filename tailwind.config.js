module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    backgroundColor: theme => ({
     ...theme('colors'),
     'primary': '#f5cac3',
     'secondary': '#f6bd60',
     'forest': '#84a59d',
     'danger': '#f28482',
     'base': '#f7ede2',
    }),
    textColor: theme => theme('colors'),
     textColor: {
     'primary': '#f5cac3',
     'secondary': '#f6bd60',
     'forest': '#84a59d',
     'danger': '#f28482',
     'base': '#f7ede2',
    }
}
}
