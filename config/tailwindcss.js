/** @type {import('tailwindcss').Config} */
//https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/stubs/defaultConfig.stub.js

module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false,
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      'max-xl': { max: '1279px' },
      'max-lg': { max: '1023px' },
      'max-md': { max: '767px' },
      'max-sm': { max: '639px' },
    },
    extend: {
      colors: {
        gray: {
          0: '#FFFFFF',
          100: '#F4F5F6',
          200: '#EBEEF2',
          300: '#DEE0E3',
          400: '#9298A0',
          500: '#686F78',
          600: '#5D6168',
          700: '#393C41',
          800: '#ffffff',
          black: '#090A0B',
        },
        blue: {
          100: '#E5F4FF',
          200: '#D5EEFF',
          300: '#C9E9FF',
          400: '#8BCBF9',
          500: '#3FA9F5',
          600: '#1697F3',
          700: '#085E9B',
          800: '#004B81',
          900: '#4439c7',
        },
        pink: '#e65ced',
        violet: '#9d46ff',
      },
      backgroundImage: {
        'linear-2':
          'linear-gradient(36deg, rgb(157, 70, 255), rgb(230, 92, 237));',
        'linear-1':
          'linear-gradient(36deg, rgb(230, 92, 237), rgb(157, 70, 255);',
        'radial-1':
          'radial-gradient(circle, rgb(230, 92, 237), rgb(157, 70, 255));',
        'radial-2':
          'radial-gradient(circle, #896ba9 10%, rgb(230, 92, 237) 120%);',
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: '#0000EE',
            },
          },
        },
      }),

      fontFamily: {
        display: ['RobotoCondensed', 'sans-serif'],
        sans: [
          'Roboto',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '1.5rem',
          lg: '2.5rem',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
