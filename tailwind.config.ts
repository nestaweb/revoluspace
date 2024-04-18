
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          'green-50': "#71CC98",
          'green-600': "#71CC98",
          "violet-100": "#C8CBFB",
          'violet-700': '#7C5EB0',
          'white': '#FFFFFF',
          'gray-200': '#eaeaea',
          'gray-500': '#3C3C3B',
          'yellow': '#ffcd62'
        },
      },
    },
  },
  plugins: [
    require('tailwindcss'),
  ],
};
