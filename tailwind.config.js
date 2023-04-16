const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    debugScreens: {
      position: ["bottom", "left"],
      style: {
        backgroundColor: "#C0FFEE",
        color: "black",
      },
    },
    extend: {
      aspectRatio: {
        "21/9": "21 / 9",
      },
      backgroundImage: {
        homeParalax:
          'url("https://www.credencehousingltd.com/admin/uploads/page/parallax-image/1920x930/1665920358BLLwU_m.jpg")',
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
