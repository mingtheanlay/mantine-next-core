/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./{pages,components,screens}/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {},
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
