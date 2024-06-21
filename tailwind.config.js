/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        gabarito: ["Gabarito", "sans-serif"],
        beneton: ["Benton"],
        forgotten: ["Forgotten+Futurist"],
      },
      colors: {
        primary: "#002740",
        textColor: "#EEF5FF",
        gradientTo: "#CEE6F3",
        gradientFrom: "#87C4FF",
        primary1: "#00B5E2",
        black: "#141212",
        graay: "#606A70",
        gradient1: "#80d0c7",
        gradient2: "#13547a",
        gradient3: "#eca0ff",
        g1: "#7F7FD5",
        g2: "#91EAE4",
        g3: "#e93a28",
      },
      animation: {
        tilt: "tilt 10s infinite linear",
        blob: "blob 7s infinite",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(3deg)",
          },
          "75%": {
            transform: "rotate(-3deg)",
          },
        },
        blob: {
          "0%": {
            transform: "scale(1.0) translate(0px, 0px)",
          },
          "25%": {
            transform: "scale(1.1) translate(15px, -15px)",
          },
          "50%": {
            transform: "scale(1.2) translate(30px, 10px)",
          },
          "75%": {
            transform: "scale(1.1) translate(15px, -15px)",
          },
          "100%": {
            transform: "scale(1.0) translate(0px, 0px)",
          },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
