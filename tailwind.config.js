module.exports = {
  purge: {
    enabled: true,
    content: [
      './pages/**/*.vue',
      './components/**/*.vue',
      './layouts/**/*.vue',
      './plugins/**/*.vue',
      './plugins/**/*.ts',
    ],
    options: {
      rejected: true,
    },
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      red: '#f00',
      blue: '#00f',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
    minWidth: {
      20: '5rem',
      30: '7.5rem',
      50: '12.5rem',
      72: '18rem',
      75: '18.75rem',
    },
    extend: {
      spacing: {
        2: '0.5rem', // 8px
        2.5: '0.625rem', // 10px
        2.75: '0.6875rem', // 11px
        3: '0.75rem', // 12px
        3.5: '0.875rem', // 14px
      },
      borderWidth: {
        0: '0',
        1: '1px',
        2: '2px',
        5: '5px',
      },
      width: {
        '1/2-vw': '50vw',
        '3/4-vw': '75vw',
        '1/20': '5%',
        '4/5': '80%',
        '19/20': '95%',
      },
    },
  },
}
