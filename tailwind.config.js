/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lylas': ['"Love Ya Like A Sister"', 'cursive'],
        'sanchez': ['Sanchez', 'serif']
      },
    },
  },
  plugins: [],
}
