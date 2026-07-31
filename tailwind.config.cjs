/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    /* ── Colour Palette ─────────────────────────────────────────────
       Derived from the Room ODD Master Specification.
       Physical, grounded colours — never saturated or purely digital.
       ───────────────────────────────────────────────────────────── */
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',

      /* Primary Canvas */
      canvas: {
        DEFAULT: '#FAFAFA',
        dark: '#121316',
      },

      /* Structural Neutrals */
      stone: '#E5E5E1',
      beige: '#F0ECE1',

      /* Accent – Physical Materials */
      bronze: {
        DEFAULT: '#B38051',
        light: '#C4956A',
        dark: '#96693F',
      },
      olive: {
        DEFAULT: '#2A382E',
        dark: '#1B2820',
        deep: '#111A14',
      },
      walnut: '#2C221E',
      charcoal: '#0F0F0F',
      amber: '#B86B28',

      /* Utility */
      error: '#9B2C2C',
      success: '#276749',
    },

    /* ── Spacing (8pt Grid) ─────────────────────────────────────── */
    spacing: {
      0: '0px',
      px: '1px',
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px',
      14: '56px',
      16: '64px',
      20: '80px',
      24: '96px',
      28: '112px',
      32: '128px',
      36: '144px',
      40: '160px',
      44: '176px',
      48: '192px',
      52: '208px',
      56: '224px',
      60: '240px',
      64: '256px',
      72: '288px',
      80: '320px',
      96: '384px',
    },

    /* ── Border Radius ──────────────────────────────────────────── */
    borderRadius: {
      none: '0',
      sm: '2px',
      DEFAULT: '4px',
      md: '6px',
      lg: '8px',
      full: '9999px',
    },

    /* ── Box Shadows ────────────────────────────────────────────── */
    boxShadow: {
      none: 'none',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    },

    /* ── Typography ─────────────────────────────────────────────── */
    fontFamily: {
      display: ['var(--font-display)', 'Cormorant Garamond', 'serif'],
      body: ['var(--font-body)', 'Inter', 'sans-serif'],
    },

    fontSize: {
      /* Tiny technical labels */
      '2xs': ['0.625rem', { lineHeight: '0.875rem', letterSpacing: '0.05em' }],
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.625rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.375rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
      '5xl': ['3rem', { lineHeight: '1.15' }],
      '6xl': ['3.75rem', { lineHeight: '1.1' }],
      '7xl': ['4.5rem', { lineHeight: '1.05' }],
      '8xl': ['6rem', { lineHeight: '1' }],
    },

    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },

    /* ── Extend ─────────────────────────────────────────────────── */
    extend: {
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.15em',
      },
      transitionTimingFunction: {
        architectural: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '16/9': '16 / 9',
        '3/2': '3 / 2',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'loading-bar': 'loading-bar 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
