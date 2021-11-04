module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'mobile-m': '375px',
        'mobile-l': '425px',
        tablet: '768px',
        laptop: '1024px',
        'laptop-m': '1280px',
        'laptop-l': '1440px',
      },
      colors: {
        primary: {
          DEFAULT: '#00aeef',
          navy: '#003060',
        },
        success: {
          DEFAULT: '#03A561',
        },
        warning: {
          DEFAULT: '#faa61b',
        },
        danger: {
          DEFAULT: '#DC143C',
          maroon: '#800000',
        },
        grey: {
          DEFAULT: '#505050',
        },
      },
      width: {
        '300px': '300px',
        '720px': '720px',
      },
      height: {
        '520px': '520px',
        '660px': '660px',
        '720px': '720px',
      },
      maxWidth: {
        '1280px': '1280px',
      },
      fontSize: {
        xxs: ['10px', '16px'],
        xs: ['12px', '20px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '22px'],
        xl: ['20px', '28px'],
        xxl: ['24px', '32px'],
        xxxl: ['36px', '44px'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
