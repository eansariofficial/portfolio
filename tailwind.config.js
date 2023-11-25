/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'p-sky':"#3AB6FE",
        'p-gray':"#68696E",

      }
    },
  },
  plugins: [],
}