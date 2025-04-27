/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode toggle with a class
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#E0F2F1',
          DEFAULT: '#26A69A',
          dark: '#00796B',
        },
        background: '#fefefe',
        surface: '#ffffff',
        text: '#1a1a1a',
        muted: '#6b7280',
        darkBackground: '#121212',
        darkText: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
