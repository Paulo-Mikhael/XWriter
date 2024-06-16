/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        '90vh': '90vh'
      },
      screens: {
        'mobile': {'max': '400px'},
      }
    },
  },
  plugins: [],
}

