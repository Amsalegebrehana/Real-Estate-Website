/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#3A0CA3",
        secondary:"rgba(67, 97, 238, 0.3)",
        color2:"#4CC9F0",
        color3:"#7209B7",
        color4:"#F72585",
        textcolor1:"#0B090A",
        textcolor2:"#2B2B2B",
        textcolor3:"#808080",
        textcolor4:"#AAAAAA",
        textcolor5:"#D4D4D4",
        graycolor:"rgba(212, 212, 212, 0.2)",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'sm': '13.3px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',

      }
    },
  },
  plugins: [],
}