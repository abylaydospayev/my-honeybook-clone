/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],

  // Add the safelist property here
  safelist: [
    'bg-blue-50',
    'bg-green-50',
    'bg-yellow-50',
    'bg-purple-50',
  ],
  
  theme: {
    extend: {
      colors: {
        'brand-blue': '#20BAD1',
        // 'brand-blue': '#3860BE',
        'dark-gray': '#142127',
        'light-gray': '#f0f2f5',
        'brand-dark-blue': '#0B1E3D'
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};