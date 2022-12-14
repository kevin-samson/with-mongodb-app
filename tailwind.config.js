/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#36404a",
        darker: "#262F34",
        lightblue: "#7368EF",
        chatbackground: "#262F34",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
});
