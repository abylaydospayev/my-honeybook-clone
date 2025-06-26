/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // Added a 'colors' object to define your custom brand palette
      colors: {
        'brand-blue': '#3860BE',
        'dark-gray': '#142127',
        'light-gray': '#f0f2f5',
        'brand-dark-blue': '#0B1E3D'
      },
      animation: {
        'infinite-scroll': 'scroll 30s linear infinite',
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
    require('tailwind-scrollbar-hide') 
  ],
};