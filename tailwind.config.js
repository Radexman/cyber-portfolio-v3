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
        'glitch-3': 'cyber-glitch-3 1s linear infinite',
        'glitch-4': 'cyber-glitch-4 5s linear infinite',
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
        'glitch-3': {
          '0%': {
            visibility: 'visible',
          },
          '49%': {
            visibility: 'visible',
          },
          '50%': {
            visibility: 'hidden',
          },
          '100%': {
            visibility: 'hidden',
          },
        },
        'glitch-4': {
          '0%': {
            visibility: 'visible',
          },
          '1%': {
            visibility: 'hidden',
          },
          '2%': {
            visibility: 'hidden',
          },
          '3%': {
            visibility: 'visible',
          },

          '20%': {
            visibility: 'visible',
          },
          '21%': {
            visibility: 'hidden',
          },
          '24%': {
            visibility: 'hidden',
          },
          '25%': {
            visibility: 'visible',
          },

          '40%': {
            visibility: 'visible',
          },
          '41%': {
            visibility: 'hidden',
          },
          '42%': {
            visibility: 'hidden',
          },
          '43%': {
            visibility: 'visible',
          },

          '44%': {
            visibility: 'visible',
          },
          '45%': {
            visibility: 'hidden',
          },
          '46%': {
            visibility: 'hidden',
          },
          '47%': {
            visibility: 'visible',
          },

          '60%': {
            visibility: 'visible',
          },
          '61%': {
            visibility: 'hidden',
          },
          '64%': {
            visibility: 'hidden',
          },
          '65%': {
            visibility: 'visible',
          },

          '70%': {
            visibility: 'visible',
          },
          '71%': {
            visibility: 'hidden',
          },
          '72%': {
            visibility: 'hidden',
          },
          '73%': {
            visibility: 'visible',
          },

          '100%': {
            visibility: 'visible',
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
