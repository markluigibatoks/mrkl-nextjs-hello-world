/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        verydarkcyan: 'rgb(var(--verydarkcyan) / <alpha-value>)',
        darkgrayishcyan: 'rgb(var(--darkgrayishcyan) / <alpha-value>)',
        grayishcyan: 'rgb(var(--grayishcyan) / <alpha-value>)',
        lightgrayishcyan: 'rgb(var(--lightgrayishcyan) / <alpha-value>)',
        verylightgrayishcyan: 'rgb(var(--verylightgrayishcyan) / <alpha-value>)',
      },
      fontFamily: {
        'space-mono': ['var(--font-space-mono)']
      }
    },
  },
  plugins: [],
}

