import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-[#E0F2FE]',
    'text-[#0369A1]',
    'bg-[#FDE68A]',
    'text-[#92400E]',
    'bg-[#C7D2FE]',
    'text-[#3730A3]',
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '400px',
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1536px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'black-200': '#0F172A',
        'yellow-400': '#FACC15',
        'red-300': '#EA580B',
        'gray-600': '#475569',
        'blue-600': '#2563EB',
        'sea-200': '#DBEAFE',
        'gray-100': '#F1F5F9',
        'gray-300': '#CBD5E1'
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.padding-left-responsive': {
          // Group xxs and xs if the padding is the same
          paddingLeft: '1rem',
          paddingRight: '1rem',

          '@screen xxs': {
            paddingLeft: '1rem',
            paddingRight: '1rem'
          },
          '@screen xs': {
            paddingLeft: '1rem',
            paddingRight: '1rem'
          },
          // Group sm and md if the padding is the same
          '@screen sm': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@screen md': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@screen lg': {
            paddingLeft: '3rem',
            paddingRight: '3rem',
          },
          '@screen xl': {
            paddingLeft: '4rem',
            paddingRight: '4rem'
          },
          '@screen 2xl': {
            paddingLeft: '5rem',
            paddingRight: '5rem',
          },
          '@screen 3xl': {
            paddingLeft: '10rem',
            paddingRight: '10rem',
            // maxWidth: '1376px',
            marginLeft: 'auto', // Centering with margin
            marginRight: 'auto', // Centering with margin
          }
        },
        '.container-screen': {
          // Group xxs and xs if the padding is the same
          paddingLeft: '1rem',
          paddingRight: '1rem',

          '@screen xxs': {
            paddingLeft: '1rem',
            paddingRight: '1rem',
          },
          '@screen xs': {
            paddingLeft: '1rem',
            paddingRight: '1rem',
          },
          // Group sm and md if the padding is the same
          '@screen sm': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@screen md': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@screen lg': {
            paddingLeft: '3rem',
            paddingRight: '3rem',
          },
          '@screen xl': {
            paddingLeft: '4rem',
            paddingRight: '4rem'
          },
          '@screen 2xl': {
            paddingLeft: '5rem',
            paddingRight: '5rem',
          },
          '@screen 3xl': {
            paddingLeft: '5rem',
            paddingRight: '5rem',
            maxWidth: '1536px',
            marginLeft: 'auto', // Centering with margin
            marginRight: 'auto', // Centering with margin
          }
        }
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;
