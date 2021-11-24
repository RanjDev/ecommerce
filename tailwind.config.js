module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        actionBlue: "#2A2F8C",
        bgDark: "#0f3659",
        bgLight: "#cbb880",
        blurTrust: {
          light: "#3b42c4",
          dark: "#2a2f8c",
          darkest: "#1d2162",
        },
        mainBlue: {
          light: "#165083",
          default: "#0f3659",
          dark: " #071b2c",
        },
        goldenBalance: {
          extraLight: "#f8f5ed",
          light: "#cbb880",
          default: "#bba35a",
          dark: "#917b3b",
        },
        warningRed: "#bb5858",
        successGreen: "#58bb71",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      backgroundColor: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
