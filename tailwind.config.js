/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      width: {
        'perfil-circle': '40px'
      },
      height: {
        '92vh': '92vh',
        'perfil-circle': '40px'
      },
      screens: {
        'mobile': {'max': '400px'},
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

