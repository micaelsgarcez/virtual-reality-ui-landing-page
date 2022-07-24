/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#101828',
        accent: '#006D77',
        accent1: '#475467',
        accent2: '#DBECE5',
        dark2: '#66728B'
      }
    }
  },
  plugins: []
}
