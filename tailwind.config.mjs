/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,nav,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae2fd',
          300: '#7cc8fc',
          400: '#38aaf7',
          500: '#0e8fe5',
          600: '#0270be',
          700: '#035a9a',
          800: '#074c80',
          999: '#0a3f6a',
        }
      }
    },
  },
  plugins: [],
}
