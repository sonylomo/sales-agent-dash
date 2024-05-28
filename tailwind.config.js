/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary-pink": "#D95448",
        "secondary-pink": "#F2BBB6",
        "try-pink": "#F3D6D0",
        "neutral-grey": "#F8F8F8",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        montserrat: ["Montserrat Alternates", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};
