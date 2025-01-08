/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Adjust this path according to the location of your HTML files
  ],
  theme: {
    extend: {
      colors: {
        'text': '#cdcffe',
        'background': '#010428',
        'primary': '#777efd',
        'secondary': '#9c0297',
        'accent': '#fc1db1',
      },
    },
  },
  plugins: [],
};