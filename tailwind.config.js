/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cyber: ['Cyber', 'sans-serif'],
      },
      animation: {
        'glitch-1': 'glitch-1 5s linear infinite',
        'glitch-2': 'cyber-glitch-1 5s linear infinite',
      },
      keyframes: {
        'glitch-1': {
          '0%': {
            filter: 'blur(0) brightness(100%) contrast(100%)',
          },
          '2%': {
            filter: 'blur(0.05rem) brightness(120%) contrast(120%)',
          },
          '4%': {
            filter: 'blur(0.1rem) brightness(150%) contrast(150%)',
          },
          '6%': {
            filter: 'blur(0.2rem) brightness(170%) contrast(170%)',
          },
          '8%': {
            filter: 'blur(0) brightness(100%) contrast(100%)',
          },
          '10%': {
            filter: 'blur(0) brightness(100%) contrast(100%)',
          },
          '60%': {
            filter: 'blur(0) brightness(100%) contrast(100%)',
          },
          '62%': {
            filter: ' blur(0.05rem) brightness(60%) contrast(100%)',
          },
          '64%': {
            filter: 'blur(0.1rem) brightness(40%) contrast(100%)',
          },
          '66%': {
            filter: 'blur(0) brightness(100%) contrast(100%)',
          },
          '68%': {
            filter: 'blur(0.05rem) brightness(60%) contrast(100%)',
          },
          '70%': {
            filter: 'blur(0.1rem) brightness(40%) contrast(100%)',
          },
          '72%': {
            filter: 'blur(0) brightness(100%) contrast(100%)',
          },
          '100%': {
            filter: 'blur(0) brightness(100%) contrast(100%)',
          },
        },
        'glitch-2': {
          '0%': {
            transform: 'translate(0, 0) skew(0deg)',
            filter: 'invert(0)',
          },
          '1%': {
            transform: 'translate(0, 0) skew(-3deg)',
            filter: 'invert(0)',
          },
          '2%': {
            transform: 'translate(0, 0) skew(3deg)',
            filter: 'invert(0)',
          },
          '3%': {
            transform: 'translate(0, 0) skew(0deg)',
            filter: 'invert(0)',
          },
          '60%': {
            transform: ',translate(0, 0) skew(0deg)',
            filter: 'invert(0)',
          },
          '61%': {
            transform: 'translate(0, 0) skew(-3deg)',
            filter: 'invert(0.2)',
          },
          '62%': {
            transform: ' translate(0, 0) skew(0deg)',
            filter: 'invert(0.2)',
          },
          '63%': {
            transform: 'translate(0, 0) skew(3deg)',
            filter: 'invert(0.8)',
          },
          ' 64%': {
            transform: 'translate(0, 0) skew(0deg)',
            filter: 'invert(0.2)',
          },
          '65%': {
            transform: 'translate(0, 0) skew(0deg)',
            filter: 'invert(0)',
          },
        },
      },
    },
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
