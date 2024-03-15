/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "usea_primary" : "#3389D4",
        "container_color" : "#E8ECF2",
        "active_color" : "#893B01",
      }
    },
    fontFamily: {
      hanuman: ["hanuman", "sans-serif"],
      KHMMOOL: ["KHMMOOL", "sans-serif"],
    },
  },
  plugins: [],
};
