/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'title-black': '#111212',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      container: {
        padding: {
          DEFAULT: '2rem',  // 32px
        },
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}