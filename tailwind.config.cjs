/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        red: {
          600: '#c32033',
        },
        blue: {
          800: '#11284a',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

module.exports = {
  ...config,
};
