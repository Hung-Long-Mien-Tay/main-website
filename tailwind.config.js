/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primaryGreen: '#00C008',
      darkGreen: '#004d00',
      darkTeal: '#041007',
      white: '#FFF',
      black: '#000',
      lightgray: '#EEEEEE',
      greyShadow: '#686868',
    },
    screens: {
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontWeight: {
      'bold': 640,
    },
    fontFamily: {
      sans: ['Nunito']
    },
    letterSpacing:{
      'base': '0.03em'
    },
    backgroundImage: {
      'homebg': "url('assets/homepage/homebg.png')",
      'global': "url('assets/global.png')",
      'contactbg': "url('assets/cropsbg.png')",
      'green-gradient-tr': 'linear-gradient(to top right, #000 0%, #004A15 100%)',
      'green-gradient-horizontal': 'linear-gradient(to right, #004d00, #00ff00)',
    },
    lineHeight: {
      'extra-tight': '1.1',  // Custom tighter line-height
    }
  },
  plugins: [],
}

