/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.jsx","./src/pages/*jsx"],
  theme: {
    colors:{
      'main':'#fb4a36',
      'light':'#d0cec8',
      'dark':'#131313',
      'lightwhite':'#fffcf5',
      'white':'#ffffff'
    },
    extend: {},
    screens:{

      'xs':'240px',
      'sm':'548px',
      'md': '970px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

