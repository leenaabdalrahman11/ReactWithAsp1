/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
             colors: {
        mainColor: {
          100: "#be725b",
          500: "#bc4c2a",
          900: "#b43610",
        },
      },
  },
  plugins: [],
}
}
