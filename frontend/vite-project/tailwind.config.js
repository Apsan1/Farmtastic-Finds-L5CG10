/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'spin-slow': 'spin 4s 4s linear infinite',
      },

      colors:{
        accent:"#179957",
        accentDark:"#184D47"
      },
      container:{
        center:true,
        padding:"15px"
      }
    },
  },
  plugins: [],
}