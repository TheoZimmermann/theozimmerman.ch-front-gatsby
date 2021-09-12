module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: 'var(--primary)',
        'text-main': 'var(--text-main)',
      },
      brightness: {
        25: '.25',
        175: '1.75',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [
    'gatsby-plugin-postcss',
    require('@tailwindcss/typography'),
  ],
};
