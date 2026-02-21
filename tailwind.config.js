/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'hotspot-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)',
            opacity: '0.6',
          },
          '50%': {
            boxShadow: '0 0 20px 6px rgba(255, 210, 80, 0.5)',
            opacity: '0.9',
          },
        },
        'modal-in': {
          '0%': { opacity: '0', transform: 'scale(0.92) translateY(14px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'overlay-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'hotspot-pulse': 'hotspot-pulse 2.4s ease-in-out infinite',
        'modal-in': 'modal-in 0.3s cubic-bezier(0.34, 1.15, 0.64, 1) forwards',
        'overlay-in': 'overlay-in 0.2s ease-out forwards',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
