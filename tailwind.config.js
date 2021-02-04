module.exports = {
  prefix: 'tw-',
  important: true,
  purge: {
      enabled: false
  },
  theme: {
      extend: {
          colors: {
              drumeo: '#0000',
              'alert-red': '#FF0744'
          },
          spacing: {
              md: '28rem',
              '14': '3.5rem',
              '44': '11rem',
              '68': '17rem',
              '72': '18rem',
              '80': '20rem',
              '92': '23rem'
          },
      },
      zIndex: {
          '0': 0,
          '10': 10,
          '20': 20,
          '30': 30,
          '40': 40,
          '50': 50,
          '75': 75,
          '100': 100,
          '150': 150,
          '200': 200,
          '250': 250,
          'auto': 'auto'
      },
      inset: {
          '0': 0,
          '1': '1rem',
          '2': '2rem',
          '3': '3rem',
          '4': '4rem',
          '5': '5rem',
          auto: 'auto'
      }
  },
  variants: {},
  plugins: [],
};

