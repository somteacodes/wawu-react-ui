/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':{
          DEFAULT: '#9FD356',
          '50': '#F2F9E8',
          '100': '#E9F5D7',
          '200': '#D6ECB7',
          '300': '#C4E497',
          '400': '#B1DB76',
          '500': '#9FD356',
          '600': '#84BF32',
          '700': '#669326',
          '800': '#47661B',
          '900': '#283A0F'
        },
        'secondary': {
          DEFAULT: '#3C91E6',
          '50': '#DFEDFB',
          '100': '#CDE3F9',
          '200': '#A8CEF4',
          '300': '#84BAEF',
          '400': '#60A5EB',
          '500': '#3C91E6',
          '600': '#1B75CF',
          '700': '#14599E',
          '800': '#0E3D6C',
          '900': '#07213A'
        },
        'alternate': {
          DEFAULT: '#FA824C',
          '50': '#FFFFFF',
          '100': '#FEF1EB',
          '200': '#FDD5C3',
          '300': '#FCB99B',
          '400': '#FB9E74',
          '500': '#FA824C',
          '600': '#F85C15',
          '700': '#D04506',
          '800': '#993304',
          '900': '#632103'
        },
      },
    },
  },
  plugins: [],
}
