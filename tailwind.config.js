/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF9F6',
        charcoal: '#17191D',
        gold: {
          DEFAULT: '#D99A20',
          hover: '#C08518',
          light: '#FDF8F0',
          border: '#EAD7B0',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F0F0ED',
          border: '#E5E4DF',
          muted: '#686B73',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
