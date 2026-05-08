import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E0E0E',
        cream: {
          DEFAULT: '#F5EDDF',
          50: '#FBF7EF',
          100: '#F8F2E7',
          200: '#F5EDDF',
          300: '#EBDFC8',
          400: '#DCCBA9',
          500: '#C8B488',
          600: '#A39067',
          700: '#7C6D4E',
          800: '#564A35',
          900: '#332C1F',
        },
        tomato: {
          DEFAULT: '#D94F3D',
          50: '#FDEEEC',
          100: '#FAD6CF',
          200: '#F2A99D',
          300: '#E97D6B',
          400: '#E16551',
          500: '#D94F3D',
          600: '#B33C2D',
          700: '#8B2E22',
          800: '#612017',
          900: '#39120D',
        },
        midnight: {
          DEFAULT: '#1A2E4A',
          50: '#E7ECF3',
          100: '#C6D0E0',
          200: '#8FA1BD',
          300: '#5A7299',
          400: '#345580',
          500: '#1A2E4A',
          600: '#15263D',
          700: '#101E30',
          800: '#0B1623',
          900: '#070D14',
        },
        sand: {
          DEFAULT: '#B8B0A0',
          50: '#F4F2EE',
          100: '#E8E4DC',
          200: '#D4CDC0',
          300: '#C3BAA9',
          400: '#B8B0A0',
          500: '#9C937F',
          600: '#7C7461',
          700: '#5D5747',
          800: '#3F3A2F',
          900: '#221F19',
        },
      },
      fontFamily: {
        display: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        container: '1320px',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
