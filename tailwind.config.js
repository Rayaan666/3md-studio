/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#101010",
        surfaceHover: "#181818",
        borderDark: "#222222",
        borderLight: "#333333",
        editorialOffwhite: "#f5f4f0",
        editorialMuted: "#9ca3af",
        architecturalGrey: "#7a7a7a",
        accentLine: "#404040",
      },
      fontFamily: {
        display: ['"Advent Pro"', '"advent_pro"', 'sans-serif'],
        mono: ['"Advent Pro"', '"advent_pro"', 'monospace'],
        sans: ['"Advent Pro"', '"advent_pro"', 'sans-serif'],
        advent: ['"Advent Pro"', '"advent_pro"', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tightest: '-0.07em',
        widestEditorial: '0.25em',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
