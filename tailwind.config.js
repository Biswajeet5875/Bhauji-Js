/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'baloo': ['"Baloo Bhai 2"', 'cursive'],
        'mono': ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        cream: {
          100: '#FDF6E3',
          200: '#F7E6B7',
        },
        wine: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        purple: {
          750: '#553C7B',
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
};