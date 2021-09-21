const remark = require('remark');

module.exports = {
  purge: {
    content: ['./src/**/*.{html,md}', './src/**/*.{js,jsx,ts,tsx}'],
    transform: {
      md: (content) => remark().process(content),
    },
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      title: ['"Migra"', 'serif'],
      body: ['"Karla"', 'sans-serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: 'var(--primary)',
        'text-main': 'var(--text-main)',
        darkBg: '#1e1e17',
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
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
