/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#f8e7ea',
        cream: '#fffaf3',
        sage: '#dce8de',
        lavender: '#ece8fb',
        baby: '#e5efff',
        sand: '#f3e7d7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 25px rgba(24, 24, 24, 0.06)',
      },
    },
  },
  plugins: [],
}
