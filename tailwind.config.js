/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-10": 'rgba(255, 255, 255, 0.1)',
        "primary-20": 'rgba(255, 255, 255, 0.2)',
        "primary-30": 'rgba(255, 255, 255, 0.3)',
        "primary-50": 'rgba(255, 255, 255, 0.5)',
        "primary-70": 'rgba(255, 255, 255, 0.7)',
        "primary-100": '#05293C'
      }
    },
  },
  plugins: [],
}