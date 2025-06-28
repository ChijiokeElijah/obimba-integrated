module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        slideUp: 'slideUp 2.5s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-in forwards',
      },
    },
  },
  plugins: [],
};
