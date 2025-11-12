module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#60A5FA',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}