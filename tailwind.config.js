/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client", "./server"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
    },
  },
  plugins: [],
}
