/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-light': '#FFFFFF',
        'bg-dark': '#0A0A0A',
        'accent-lime': '#D6FF3F',
        'accent-red': '#E23B2E',
        'gray-muted': '#8C8C8C',
        'card-border': '#1F1F1F',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'marquee': 'marquee 20s linear infinite',
        'marquee-reverse': 'marquee-reverse 20s linear infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'pulse-red': 'pulse-red 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'pulse-red': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
