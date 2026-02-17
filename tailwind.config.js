// tailwind.config.js
module.exports = {
  darkMode: "class", // ✅ enable dark mode using a class on <html>
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease forwards",
        fadeInUp: "fadeInUp 1s ease forwards",
      },
    },
  },
  plugins: [],
};