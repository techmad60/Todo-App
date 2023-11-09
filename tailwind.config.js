/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin-sans': ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        'light-mode-mobile': "url('/images/bg-mobile-light.jpg')",
        'dark-mode-mobile': "url('/images/bg-mobile-dark.jpg')",
        'light-mode-desktop': "url('/images/bg-desktop-light.jpg')",
        'dark-mode-desktop': "url('/images/bg-desktop-dark.jpg')",
      },
    },
  },
  plugins: [],
}