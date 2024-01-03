/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1E1E1E',
          'primary-content': '#DCDDDB',
          secondary: '#A9131E',
          'secondary-content': '#ED403F',
          accent: '#191919',
          neutral: '#111111',
          'base-100': '#ffffff',
        },
      },
    ],
  },
};
