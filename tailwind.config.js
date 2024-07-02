/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container: '1440px',
    },
    fontFamily: {
      'play': ['Playwrite NG Modern', 'cursive'],
      'vollo': ['Vollkorn', 'serif']
    },
    },
  },
  plugins: [],
}