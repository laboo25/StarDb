/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    gridTemplateColumns: {
      'cardCol': 'repeat(200px, minmax(290px, 1fr))',
    },
    gridAutoColumns: {
      '2fr': 'minmax(250px, 2fr)',
    },
  },
  plugins: [],
}

