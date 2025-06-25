/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",     
    "./components/**/*.{js,ts,jsx,tsx}" 
  ],
  theme: {
    extend: {
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
  plugins: [],
};
