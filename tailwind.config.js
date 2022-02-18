module.exports = {
  content: ["./src/*.{html,js}","./index.html"],
  theme: {
    extend: {
      fontFamily:{
        'space-mono': ["Space Mono"]
      },
      colors:{
        "strong-cyan": "hsl(172, 67%, 45%)",
        "very-dark-cyan": 'hsl(183, 100%, 15%)',
      
        darkGrayishCyan:{
          1: "hsl(186, 14%, 43%)",
          2: "hsl(184, 14%, 56%)"
        },
        lightGrayishCyan:{
          1: "hsl(185, 41%, 84%)",
          2: "hsl(189, 41%, 97%)" 
          }
        },
      backgroundImage:{
        "dollar-svg": "url(/images/icon-dollar.svg)"
      }
    },
  },
  plugins: [],
}
