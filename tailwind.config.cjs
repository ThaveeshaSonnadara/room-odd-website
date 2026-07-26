/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: '#111A14',
      secondary: '#2A382E',
      accent: '#B86B28',
      bg: '#FAFAFA',
      muted: '#E5E5E1',
      success: '#16A34A',
    },
    spacing: {
      0: '0px',
      1: '2px',
      2: '4px',
      3: '6px',
      4: '7px',
      5: '8px',
      6: '10px',
      7: '11px',
      8: '12px',
      9: '16px',
      10: '17px',
      11: '20px',
      12: '24px',
      13: '32px',
      14: '48px',
      15: '64px',
      16: '128px',
      17: '152px',
      18: '160px',
      19: '344px',
      20: '471px',
    },
    borderRadius: {
      none: '0',
      sm: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      full: '9999px',
    },
    boxShadow: {
      sm: 'rgba(0,0,0,0) 0 0 0 0, rgba(0,0,0,0.05) 0 1px 2px 0',
      md: 'rgb(255,255,255) 0 0 0 0, rgba(0,0,0,0.05) 0 0 0 1px, rgba(0,0,0,0.1) 0 20px 25px -5px, rgba(0,0,0,0.1) 0 8px 10px -6px',
      lg: 'rgb(255,255,255) 0 0 0 0, rgba(0,0,0,0.05) 0 0 0 1px, rgba(0,0,0,0.05) 0 1px 2px 0',
      xl: 'rgba(0,0,0,0) 0 0 0 0, rgba(0,0,0,0) 0 0 0 0, rgba(0,0,0,0.25) 0 25px 50px -12px',
    },
    fontFamily: {
      display: ['"Cormorant Garamond"', 'serif'],
      body: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.6875rem', { lineHeight: '1.3' }], // 11px
      sm: ['0.8125rem', { lineHeight: '1.35' }], // 13px
      base: ['1rem', { lineHeight: '1.5' }], // 16px
      lg: ['1.125rem', { lineHeight: '1.55' }], // 18px
      xl: ['1.25rem', { lineHeight: '1.6' }], // 20px
      '2xl': ['3.75rem', { lineHeight: '1.1' }], // 60px hero
    },
    fontWeight: { regular: '400', medium: '500', semibold: '600', bold: '700' },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
