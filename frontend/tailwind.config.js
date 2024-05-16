/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color': '#2c3959',
        'second-color': 'rgb(245, 245, 247)',
        'button': 'rgba(245,245,247,0.16)',
        'button-gray': 'rgba(50,50,50)',
        'button-light': 'rgba(245,245,247,0.3)',
        'button-green': 'rgb(75, 255, 126)',
        'button-green-second': 'rgb(75, 200, 126)'
      },
    },
  },
  plugins: [],
}