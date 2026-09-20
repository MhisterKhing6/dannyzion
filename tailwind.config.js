export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#f3f2f2',
        surface: '#eae9e9',
        ink: '#201e1d',
        divider: 'rgba(32,30,29,0.4)',
        accent: {
          DEFAULT: '#ec3013',
          100: '#fff2ef',
          200: '#ffe0d9',
          300: '#ffc4b8',
          400: '#ff9783',
          500: '#ff563c',
          600: '#dd2b0f',
          700: '#ae1800',
          800: '#7c1405',
          900: '#4d170e',
        },
      },
      fontFamily: {
        heading: ['Archivo', 'sans-serif'],
        body: ['Archivo', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(45,43,43,0.14)',
        md: '0 3px 10px rgba(45,43,43,0.16)',
        lg: '0 12px 32px rgba(45,43,43,0.22)',
      },
      borderRadius: {
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
      },
    },
  },
  plugins: [],
};
