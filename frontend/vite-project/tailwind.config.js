/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      dropShadow: {
        'custom': '0 0 2px 2px rgba(1, 1, 1, 1)',
        'lightShadow': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'mediumShadow': '0 8px 12px rgba(0, 0, 0, 0)',
        'darkShadow': '0 12px 16px rgba(0, 0, 0, 0.1)',
      },

      animation:{
        'spin-slow': 'spin 4s 4s linear infinite',
      },

      colors:{
        accent:"#179957",
        accentDark:"#184D47",
        naturalGreen: "#1c3305",
        neutralBlack: "#1E1502",
      },
      container:{
        center:true,
        padding:"15px"
      }
    },
  },
  plugins: [],
}