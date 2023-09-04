/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ECE6C2',
        secondary: '#73BDA8',
        tertiary: '#D9D9D9',
        "capital-primary": '#604D4D',
      }
    },
  },
  plugins: [],
}

