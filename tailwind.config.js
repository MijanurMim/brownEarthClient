const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    debugScreens: {
      position: ["bottom", "left"],
      style: {
        backgroundColor: "#C0FFEE",
        color: "black",
      },
    },
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
