module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-dark': "url('svgs/Polygon-0.2s-1600px-2.svg')",
        'hero-light': "url('svgs/Polygon-0.2s-1600px-2-light.svg')",
        'btn-dark': "url('svgs/icon-sun.svg')",
        'btn-light': "url('svgs/icon-moon.svg')",
        'work-dark': "url('svgs/curve-line.svg')",
        'work-light': "url('svgs/curve-line-light.svg')",
      },
      colors: {
        blue: '#0070f3',
        'blue-light': '#99C8D5',
        cyan: '#50e3c2',
        dark: '#1A1A1A',
        'dark-gray': '#575C69',
        darker: '#1e293',
        
      },
      animation: {
        wave: 'wave 2.5s infinite',
      },
      keyframes: {
        wave: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '10%': {
            transform: 'rotate(14deg)',
          },
          '20%': {
            transform: ' rotate(-8deg)',
          },
          '30%': {
            transform: 'rotate(14deg)',
          },
          '40%': {
            transform: 'rotate(-4deg)',
          },
          '50%': {
            transform: 'rotate(10deg)',
          },
          '60%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
