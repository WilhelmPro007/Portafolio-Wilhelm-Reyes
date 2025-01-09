/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Adjust this path according to the location of your HTML files
  ],
  theme: {
    extend: {
      colors: {             // Collors from realtimecolors.com https://www.realtimecolors.com/?colors=eaeffa-03060c-86afe4-231b7e-693fd5&fonts=Inter-Inter
        'text': '#eaeffa',
        'background': '#03060c',
        'primary': '#86afe4',
        'secondary': '#231b7e',
        'accent': '#693fd5',
       },
       
    },
  },
  plugins: [],
};
