/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg2: { max: "1623px" },
      lg1: { max: "1323px" },
      mg: { max: "1123px" },
      lg: { max: "1023px" },
      ml: { max: "850px" },
      tl: { max: "723px" },
    },
    extend: {},
  },
  plugins: [],
};
