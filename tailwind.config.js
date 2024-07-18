/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    container:{
      center:true,
      screens:{
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px'
      }
    },

    extend: {
      fontFamily: {
        inter: [ "Inter", "sans-serif"],
        gemunu:["Gemunu Libre", "sans-serif"],
        open:["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        arsenalsc: ["Arsenal SC", "sans-serif"],
        eduavusturalia: ["Edu AU VIC WA NT Hand", "cursive"],

        
      },
      
      colors: {
        'gate-color': '#B748FF',
        
      },
      
      spacing: {
        '128': '32 rem'
      }

    },
  },
  plugins: [],
}