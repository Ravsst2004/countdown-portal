/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        handjet: ["'Handjet'", "sans-serif"],
      },
      keyframes: {
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
