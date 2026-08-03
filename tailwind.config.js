/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        accent: '#ff3d29',
        dark: '#080808',
      },
    },
  },
  plugins: [],
};
