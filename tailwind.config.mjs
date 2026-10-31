/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,json}'],
  theme: {
    extend: {
      colors: { bg: '#0f172a', fg: '#e2e8f0', mute: '#94a3b8', accent: '#5eead4' },
      fontFamily: {
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
      },
    },
  },
};
