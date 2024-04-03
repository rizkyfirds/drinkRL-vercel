/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'thunder' : ['Thunder', 'sans-serif'],
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '6xl': '3.75rem',
        '7xl': '6rem',
        '8xl': '7rem',
        '9xl': '8rem',
        '12xl': '14rem',
        'xxl': '19rem',
      },
      lineHeight: {
        'xxl': '0.01rem',
      },
      letterSpacing: {
        'xxl': '-0.01em',
      },
    },
  },
  plugins: [],
}
