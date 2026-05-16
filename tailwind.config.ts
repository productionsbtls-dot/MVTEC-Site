import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mvtec: {
          blue: '#009BDF',
          green: '#19C432',
          night: '#06111F',
          panel: '#0B1A2B',
        },
      },
      boxShadow: {
        premium: '0 24px 80px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
