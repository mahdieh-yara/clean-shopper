/**
 * Design tokens — single source of truth for the Tailwind theme.
 *
 * Imported by tailwind.config.js. Everything lives under `extend`, so these
 * tokens ADD to Tailwind's defaults rather than replacing whole scales:
 *   - new named keys (e.g. `leaf`, `text-h3`, `surface-page`) are additive
 *   - keys that collide with a Tailwind default (e.g. `rounded-md`) override
 *     just that one key; the rest of Tailwind's standard scale stays available
 *     (`p-5`, `rounded-2xl`, `shadow-xl`, `2xl:` breakpoint, etc.)
 *
 * Token values mirror docs/design-system.md.
 *
 * CommonJS so it can be required by tailwind.config.js in CRA's Node/PostCSS
 * context; React components can still import it via webpack interop.
 */
module.exports = {
  extend: {
    fontFamily: {
      sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'Roboto', 'sans-serif'],
      mono: ["'JetBrains Mono'", "'SF Mono'", 'Menlo', 'Consolas', 'monospace'],
    },

    fontSize: {
      display: ['3.5rem', { lineHeight: '1.05', fontWeight: '600', letterSpacing: '-0.02em' }],
      h1: ['2.5rem', { lineHeight: '1.1', fontWeight: '600', letterSpacing: '-0.02em' }],
      h2: ['1.875rem', { lineHeight: '1.15', fontWeight: '600', letterSpacing: '-0.015em' }],
      h3: ['1.5rem', { lineHeight: '1.2', fontWeight: '500', letterSpacing: '-0.015em' }],
      h4: ['1.25rem', { lineHeight: '1.3', fontWeight: '500', letterSpacing: '0' }],
      body: ['1rem', { lineHeight: '1.55', fontWeight: '400', letterSpacing: '0' }],
      small: ['0.875rem', { lineHeight: '1.5', fontWeight: '400', letterSpacing: '0' }],
      caption: ['0.75rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.04em' }],
    },

    spacing: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      6: '24px',
      8: '32px',
      10: '40px',
      12: '48px',
      16: '64px',
    },

    borderRadius: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      full: '9999px',
    },

    boxShadow: {
      sm: '0 1px 2px rgba(23, 26, 22, 0.04)',
      md: '0 4px 12px rgba(23, 26, 22, 0.06)',
      lg: '0 12px 32px rgba(23, 26, 22, 0.08)',
    },

    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    colors: {
      leaf: {
        100: '#E4EEE7',
        400: '#7AA589',
        500: '#4A7C59',
        600: '#3A6448',
      },

      neutral: {
        50: '#FAFBF8',
        100: '#F4F5F1',
        200: '#E7E9E3',
        300: '#D2D5CD',
        400: '#A7ACA3',
        500: '#7A7F76',
        600: '#565A53',
        700: '#3D413B',
        800: '#272B26',
        900: '#171A16',
      },

      sand: {
        50: '#FAF7F0',
        100: '#F2EDE0',
        200: '#E5DDC8',
        300: '#C7BCA0',
      },

      success: '#3F8754',
      warning: '#B8843D',
      error: '#A84A3F',
      info: '#4A7087',

      surface: {
        page: '#F8F9F6',
        card: '#FFFFFF',
        warm: '#F2EDE0',
        inset: '#F4F5F1',
        overlay: 'rgba(23, 26, 22, 0.4)',
      },
    },

    textColor: {
      primary: '#171A16',
      secondary: '#565A53',
      tertiary: '#7A7F76',
      inverse: '#FAFBF8',
      brand: '#3A6448',
    },

    borderColor: {
      DEFAULT: '#E7E9E3',
      subtle: '#F4F5F1',
    },

    maxWidth: {
      content: '1200px',
    },

    transitionDuration: {
      fast: '150ms',
      normal: '250ms',
      slow: '400ms',
    },

    transitionTimingFunction: {
      default: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
    },
  },
};
