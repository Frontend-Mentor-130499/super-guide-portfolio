/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#151515',
      green: '#4EE1A0',
      grey: {
        100: '#D9D9D9',
        900: '#242424',
      },
      red: '#FF6F5B',
      white: '#FFFFFF',
    },
    fontSize: {
      sm: ['1.125rem', '1.5'],
      md: ['1.5rem', '1.33'],
      lg: ['3rem', '1.167'],
      xl: ['5.5rem', '1'],
    },
    borderWidth: {
      1: '1px',
    },
    textUnderlineOffset: {
      10: '10px',
    },
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/container-queries'),
  ],
};
