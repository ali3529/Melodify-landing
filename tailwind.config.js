/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      black: "#0B0B0D",
      primary: "#242429",
      gray1: "#303036",
      gray2: "#3F3F3F",
      gray3: "#4C4C50",
      gray4: "#171717",
      gray5: "#A7A7A9",
      gray6: "#B0B0B5",
      gray7: "#E5E5E6",
      gray8: "#767676",
      red: "#EB5757",
      green: "#219653",
      yellow: "#F2C94C",

      "yellow-dark": "#FFB300",
      orange: "#F2994A",
      white: " #FAFAFA",
    },

    extend: {
      screens: {
        lg: "1150px",
      },

      fontFamily: {
        dana: ["Dana"],
        kalameh: ["Kalameh"],
        faNum: ["dana-num"],
        poppins: ["poppins"],
      },

      backgroundImage: {
        "header-image":
          "url('/src/assets/common/header/header_background.webp')",
        "header-image-sm":
          "url('/src/assets/common/header/header_background-sm.webp')",
        "dj-overlay":
          "linear-gradient(180deg, rgba(33, 33, 33, 0.30) 0%, rgba(33, 33, 33, 0.70) 28.31%, rgba(33, 33, 33, 0.85) 49.30%, rgba(33, 33, 33, 0.98) 100%);",
        "dj-overlay-sm":
          "linear-gradient(180deg, rgba(33, 33, 33, 0.20) 0%, rgba(33, 33, 33, 0.60) 28.31%, rgba(33, 33, 33, 0.80) 49.30%, rgba(33, 33, 33, 0.90) 100%);",
        "dj-background": "url('/src/assets/dj/dj-background.png')",
        "dj-background-sm": "url('/src/assets/dj/dj-background-sm.png')",
        "dj-card":
          "linear-gradient(180deg, rgba(48, 48, 48, 0.60) 0%, rgba(48, 48, 48, 0.60) 100%)",
        "dj-card-sm":
          "linear-gradient(180deg, rgba(48, 48, 48, 0.40) 0%, rgba(48, 48, 48, 0.30) 100%)",
      },
      listStyleImage: {
        chevronLeft: 'url("/src/assets/common/footer/ChevronLeft.svg")',
        chevronLeftYellow:
          'url("/src/assets/common/footer/chevronLeftYellow.svg")',
      },
      boxShadow: {
        "platform-frame-shadow": " 0px 4px 40px 0px rgba(0, 0, 0, 0.40)",
      },
    },
  },
  plugins: [],
};
