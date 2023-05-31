/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    spacing: {
      "102": "6.375rem",
      "9": ".526rem",
      "4": "0.25rem",
      "8": "0.5rem",
      "6": ".375rem",
      "11": ".687rem",
      "12": "0.75rem",
      "16": "1rem",
      "20": "1.25rem",
      "24": "1.5rem",
      "28": "1.75rem",
      "32": "2rem",
      "36": "2.25rem",
      "40": "2.5rem",
      "48": "3rem",
      "56": "3.5rem",
      "64": "4rem",
      "72": "4.5rem",
      "80": "5rem",
      "120": "7.5rem",
      "140": "8.75rem",
      "406": "25.375rem",
      "235": "14.6rem",
      "-40": "-2.5rem"
    },
    extend: {
      colors: {
        "BLACK": "#0B0B0D",
        "PRIMARY": "#242429",
        "GRAY1": "#303036",
        "GRAY2": "#3F3F3F",
        "GRAY3": "#4C4C50",
        "GRAY4": "#171717",
        "GRAY5": "#A7A7A9",
        "GRAY6": "#B0B0B5",
        "GRAY7": "#E5E5E6",
        "GRAY8": "#767676",
        "RED": "#EB5757",
        "GREEN": "#219653",
        "YELLOW": "#F2C94C",
        "YELLOW-DARK": "#FFB300",
        "ORANGE": "#F2994A"
      },

      borderRadius: {
        "7": ".4375rem"
      },
      fontSize: {
        "32": "2rem",
        "26": "1.625rem",
        "24": "1.5",
        "22": "1.375rem",
        "20": "1.25rem",
        "18": "1.125rem",
        "16": "1rem",
        "14": "0.87rem",
        "12": "0.75rem",
        "10": ".625rem",

      },
      backgroundImage: {
        "header-image": "url('/src/img/header.png')",
        "lines": "url('/src/img/lines.svg')",
      },
    },
  },
  plugins: [],
}