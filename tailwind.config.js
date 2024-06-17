/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        '92vh': '92vh'
      },
      screens: {
        'mobile': {'max': '400px'},
      }
    },
  },
  plugins: [],
}

