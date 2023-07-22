// tailwind.config.js

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tp: {
          pblue: "#000AFF",
          pgreen: "#08BD2B",
          swhite: "#ECE8DC",
          syellow: "#FFC700",
          sblue: "#4F9CD1",
          spurple: "#BA7EEA",
          sred: "#FF2E00",
        },
      },
      fontSize: {
        body: ["18px", { fontWeight: "400", lineHeight: "27.27px" }],
        "body-bold": ["16px", { fontWeight: "500", lineHeight: "20px" }],
        button: ["17px", { fontWeight: "400", lineHeight: "23.4px" }],
        header: ["48px", { fontWeight: "300", lineHeight: "55.2px" }],
        "header-bold": ["48px", { fontWeight: "700", lineHeight: "55.2px" }],
        title: ["36px", { fontWeight: "700", lineHeight: "41.4px" }],
      },
      visibility: ["group-hover"],
    },
  },
};
