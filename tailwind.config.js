module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'roboto': ['Roboto', "sans-sarif"],
        "benne": ["Benne", "serif"],
       },

       keyframes: {
        popup: {
          '75%': { transform: 'scale(0)', opacity:1},
          '100%': { transform: 'scale(2)', opacity:0},

        },
        animation: {
          'popup': 'popup 1s cubic-bezier(0, 0, 0.2, 1)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide')
  ],
}