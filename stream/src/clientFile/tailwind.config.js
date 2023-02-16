/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans' : ['Qwitcher Grypen', 'cursive'],
    },
  },
  darkMode: 'class',
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

  // theme: {
  //   screens: {
  //     sm: '480px',
  //     md: '768px',
  //     lg: '1020px',
  //     xl: '1440px',
  //   },