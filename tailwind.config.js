/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        heritage: {
          50: '#faf8f5',
          100: '#f5f1e8',
          200: '#ebe3d1',
          300: '#ddd0b4',
          400: '#c9b592',
          500: '#b89968',
          600: '#a67c45',
          700: '#8a6638',
          800: '#6d5130',
          900: '#584229',
        },
        parchment: {
          50: '#fdfcfa',
          100: '#faf7f0',
          200: '#f4ede0',
          300: '#ebe1cc',
          400: '#dfd0b0',
          500: '#d1ba91',
          600: '#b89e70',
          700: '#9e8456',
          800: '#816a47',
          900: '#6a563b',
        },
        gold: {
          50: '#fdfbf3',
          100: '#faf5e0',
          200: '#f4e8b8',
          300: '#edd785',
          400: '#e5bc4a',
          500: '#d9a235',
          600: '#c08323',
          700: '#9d651e',
          800: '#81501f',
          900: '#6e431e',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
