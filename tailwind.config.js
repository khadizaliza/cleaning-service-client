module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  daisyui: {
    themes: [
      {
        light: {
        
"primary": "#36D399",
        
"secondary": "#D926A9",
        
"accent": "#1FB2A6",
        
"neutral": "#191D24",
        
"base-100": "#2A303C",
        
"info": "#3ABFF8",
        
"success": "#6419E6",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
      {
        dark: {
        
"primary": "#D9F99D",
        
"secondary": "#FDF68A",
        
"accent": "#FFEDD5",
        
"neutral": "#F3F4F6",
        
"base-100": "#FFFfff",
        
"info": "#98A8DD",
        
"success": "#1BBB70",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}