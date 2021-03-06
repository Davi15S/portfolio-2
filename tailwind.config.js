module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "source-code-pro": ['Source Code Pro'],
      "ubuntu": ["Ubuntu"]
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
