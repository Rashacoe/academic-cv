/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        academic: {
          navy: {
            50: '#f0f4f9',
            100: '#d9e2ee',
            200: '#b8c9e0',
            300: '#8baacd',
            400: '#5a87b6',
            500: '#38699f',
            600: '#285183',
            700: '#20416b',
            800: '#1c3759',
            900: '#0f172a', // Deep Academic Navy
            950: '#090d16',
          },
          gold: {
            50: '#fdfbeb',
            100: '#fbf5c8',
            200: '#f7eb8e',
            300: '#f2dc4e',
            400: '#ecc91d',
            500: '#d97706', // Academic Amber/Gold Accent
            600: '#b45309',
            700: '#92400e',
            800: '#78350f',
            900: '#451a03',
          },
          teal: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e', // Research Grant / Emerald Accent
            800: '#115e59',
            900: '#134e4a',
          },
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Lora', 'Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        academic: '68rem', // ~1088px - optimal reading & layout width for academic CVs
      },
      screens: {
        xs: '475px',
        print: { raw: 'print' },
      },
    },
  },
  plugins: [],
};
