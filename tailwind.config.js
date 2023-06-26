const {colors} = require("tailwindcss/colors")
const {fontFamily} = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:['class'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["var(--font-inter)",fontFamily.sans]
      },
      colors:{
        ...colors,
        'light-gold':"#f5bc51",
        'dark-gold':"#533519"
      }
    },
  },
  plugins: [],
}