import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0a0e1a',
          card: '#0f1828',
          border: '#1a2840',
          accent: '#10b981',
          'accent-hover': '#059669',
          blue: '#3b82f6',
          warning: '#f59e0b',
          error: '#ef4444',
          text: '#f1f5f9',
          muted: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
