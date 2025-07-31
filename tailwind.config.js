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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
