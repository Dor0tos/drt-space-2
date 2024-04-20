/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: [],
    colors: {
      "space-red": "#ECA198",
      "space-green": "#BDE8D0",
      "space-blue": "#BCDEDA",
      "space-yellow": "#ECCE95",
      "space-main": "#F0EADD",
      "space-bg": "#BEAD9F",
      "space-accent": "#F5E4C1",
      "space-dark-blue": "#8D99AE",
      "space-black": "#2D2931",
    },
    fontFamily: {
      'play' : ['Play', 'system-ui'],
      'sofia' : ['Sofia Sans', 'system-ui'],
    }
  },
  plugins: [],
}

