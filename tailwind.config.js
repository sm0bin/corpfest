/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      listStyleImage: {
        checkmark: 'url("/check-circle.svg")',
        xmark: 'url("/x-circle.svg")',
      },
    },
  },
  plugins: [require("daisyui")],
}