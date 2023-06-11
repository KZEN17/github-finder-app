/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "!./node_modules",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
