/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#8364e2",
        darkpurple: "#403f83",
        bgpurple: '#6f42c1',
        bgindigo: '#6610f2',
        bgdarkpurple: '#403f83'

      }
    },
  },
  plugins: [],
}
