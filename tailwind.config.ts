import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#fcf9f8',
        surface: '#ffffff',
        primary: '#334537',
        'primary-fixed': '#d3e8d5',
        accent: '#7ca88a',
        secondary: '#8c4e37',
        'secondary-fixed': '#ffdbcf',
        'surface-variant': '#e4e2e1',
        'on-surface': '#1b1c1c',
        'on-surface-muted': '#6b6f73',
        'on-primary': '#ffffff',
        'on-secondary': '#ffffff',
        outline: '#737872',
        success: '#21704e',
        error: '#c53030',
      },
      fontFamily: {
        body: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        display: ['Libre Caslon Text', 'serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(51, 69, 55, 0.12)',
        soft: '0 20px 40px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        xl: '1.75rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
