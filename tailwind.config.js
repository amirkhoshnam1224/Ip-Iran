/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#8b8b87', // رنگ خاکستری سفارشی
      },
    },
  },
  plugins: [],
}