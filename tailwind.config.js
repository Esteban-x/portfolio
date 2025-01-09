const svgToDataUri = require('mini-svg-data-uri')
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-1px)' },
          '50%': { transform: 'translateX(1px)' },
          '75%': { transform: 'translateX(-1px)' },
        },
      },
      shimmer: {
        from: {
          backgroundPosition: '0 0',
        },
        to: {
          backgroundPosition: '-200% 0',
        },
      },
      animation: {
        shake: 'shake 1s ease-in-out infinite',
      },
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      screens: {
        nest: { min: '1285px' },
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
      },
      backgroundImage: {
        terminal: "url('/assets/terminal.png')",
      },
    },
  },
  plugins: [
    require('daisyui'),
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-dot-thick': value => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    },
  ],
}

function addVariablesForColors({ addBase, theme }) {
  const colors = theme('colors')
  const cssVars = Object.entries(colors).flatMap(([colorName, colorValue]) =>
    typeof colorValue === 'object'
      ? Object.entries(colorValue).map(([shade, value]) => [
          `--${colorName}-${shade}`,
          value,
        ])
      : [[`--${colorName}`, colorValue]]
  )
  const rootVars = Object.fromEntries(cssVars)

  addBase({
    ':root': rootVars,
  })
}
