const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      oswald: ["Oswald", ...defaultTheme.fontFamily.sans],
      poiret: ["Poiret One", ...defaultTheme.fontFamily.sans],
    },

    debugScreens: {
      position: ["bottom", "left"],
      style: {
        backgroundColor: "#C0FFEE",
        color: "black",
      },
    },

    extend: {
      colors: {
        primary: "#231709",
        secondary: "#5e2c04",
      },

      aspectRatio: {
        "21/9": "21 / 9",
        "3/1": "3/1",
      },

      backgroundImage: {
        homeParalax:
          'url("https://www.credencehousingltd.com/admin/uploads/page/parallax-image/1920x930/1665920358BLLwU_m.jpg")',
      },
    },
  },
  // plugins: [require("flowbite/plugin")],
};
