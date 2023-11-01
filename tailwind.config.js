/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./utility/**/*.{js,vue,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      'quicksand': ['Quicksand', 'sans-serif'],
      'merriweather': ['Merriweather', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}

