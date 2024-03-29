/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: "auto 1fr",
        ghosts: "repeat(auto-fill, minmax(24rem, 1fr))",
      },
    },
  },
  plugins: [],
};
