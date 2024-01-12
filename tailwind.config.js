/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A2E",
        primaryHover: "#484858",
        secondary: "#DD7224",
        secondaryHover: "#FF8B37",
      },
    },
  },
  plugins: [],
};

export default config;