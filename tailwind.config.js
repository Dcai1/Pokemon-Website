module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "pokeball-pattern": "url('/images/pokeball.png')",
        "pokeball-background": "url('/images/pokeball-background.png')",
      },
      colors: {
        "rose-num": {
          50: "#fff8f9",
          100: "#fdeff0",
          200: "#fbd8dc",
          300: "#f6bfc5",
          400: "#f09aa6",
          500: "#e97287",
          600: "#d4556f",
          700: "#b6455b",
          800: "#913b49",
          900: "#6f2f3a",
        },
        rose: {
          50: "#fff8f9",
          100: "#fdeff0",
          200: "#fbd8dc",
          300: "#f6bfc5",
          400: "#f09aa6",
          500: "#e97287",
          600: "#d4556f",
          700: "#b6455b",
          800: "#913b49",
          900: "#6f2f3a",
        },
        red: {
          50: "#fff7f7",
          100: "#ffecec",
          200: "#ffdede",
          300: "#ffcfcf",
          400: "#ffb3b3",
          500: "#ff9f9f",
          600: "#ff7f7f",
          700: "#ff5f5f",
          800: "#ff3f3f",
          900: "#ff1f1f",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
