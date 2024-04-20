/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "space-red": {
          default: "#ECA198",
          bright: "#F4C9C4",
        },
        "space-green": {
          default: "#BDE8D0",
          bright: "#D9F2E4",
        },
        "space-blue": {
          default: "#BCDEDA",
          bright: "#D8ECEA",
        },
        "space-yellow": {
          default: "#ECCE95",
          bright: "#F4E3C2",
        },
        "space-main": "#F0EADD",
        "space-bg": "#BEAD9F",
        "space-accent": "#F5E4C1",
        "space-dark-blue": "#8D99AE",
        "space-black": "#2D2931",
      },
      fontFamily: {
        play: ["Play", "system-ui"],
        sofia: ["Sofia Sans", "system-ui"],
      },
      boxShadow: {
        comic: "10px 10px 0px 0px rgba(45,41,49,1)",
        "comic-b": "0px 10px 0px 4px rgba(45,41,49,1)",
        "comic-b-h": "0px 0px 0px 4px rgba(45,41,49,1)",
      },
    },
  },
  plugins: [],
};
