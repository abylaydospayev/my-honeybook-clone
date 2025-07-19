/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],

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
        'dark-gray': '#142127',
        'light-gray': '#f0f2f5',
        'brand-dark-blue': '#0B1E3D'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Source Serif Pro', 'serif'],
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out both',
        'spin-slow': 'spin 2s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          'from': { 
            opacity: '0',
            transform: 'translateY(10px)' 
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0px)' 
          },
        },
        // Added the keyframes used by the 'spin-slow' animation
        spin: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    // Added the official Tailwind Forms plugin
    require('@tailwindcss/forms'),
  ],
};