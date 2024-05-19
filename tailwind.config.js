/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'anta': ['Anta', 'sans-serif'],
      },
      screens: {
        'lg1300': '1300px',
        'lg1000': '1000px',
        'md650': '650px',
      },
    },
  },
  plugins: [],
}

