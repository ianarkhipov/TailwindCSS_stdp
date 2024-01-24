module.exports = {
  content: ["./index.html"],
  // darkMode: 'class',
  purge: [
    './index.html',
    './tailwind.config.js',
    './src/main.css',
    './public/styles.css'
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': 'auto 1fr auto'
      },
      colors: {
        //  your custom colors
      },
      fontFamily: {
        main: ['Montserrat'],
      },
    },
  },
  plugins: [],
}
