/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // extend: {
    // fontFamily: {
    //   'DM Sans': ["DM Sans", "sans-serif"],
    // },
    colors: {
      "background-color": "--background-color",
      "card-background": "var(--card-background)",
      "text-color": "var(--text-color)",
      "text-color-secondary": "var(--text-color-secondary)",
      "text-color-sold-out": "var(--text-color-sold-out)",
      "price-card-background": "var(--price-card-background)",
      "star-color": "var(--star-color)",
    },
    // },
  },
  plugins: [],
};
