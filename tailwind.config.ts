import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primaryBg: '#f5f7fa',
        secondaryBg: '#eef2f4', // #eef2f4 #dee1e3 #f5f7fa
        tertiaryBg: '#be4555',
        quaternary: '#6e6e6e',
        quinary: '#a00d0d',
      },
    },
  },
  plugins: [],
};
export default config;
