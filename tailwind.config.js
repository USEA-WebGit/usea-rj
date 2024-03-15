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
      KHMMOOL1: ["KHMMOOL1", "sans-serif"],
      Khmer_OS_Battambang: ["Khmer_OS_Battambang", "sans-serif"],
      Khmer_OS_Muol_Light: ["Khmer_OS_Muol_Light", "sans-serif"],
    },
  },
  plugins: [],
};

