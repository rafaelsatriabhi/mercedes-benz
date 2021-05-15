module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00aeef',
        },
        warning: {
          DEFAULT: '#faa61b',
        },
        grey: {
          DEFAULT: '#505050',
        },
      },
      width: {
        '300px': '300px',
      },
      height: {
        '660px': '660px',
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
