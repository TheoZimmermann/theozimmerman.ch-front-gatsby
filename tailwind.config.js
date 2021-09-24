const remark = require('remark');

const bgColorPrimary = '#ffc701';
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
      backgroundColor: {
        primary: bgColorPrimary,
      },
      borderColor: {
        primary: bgColorPrimary,
      },
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
      fill: ['hover', 'focus'],
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
