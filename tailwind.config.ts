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
        surface: {
          DEFAULT: '#0f1828',
          raised: '#162236',
          overlay: '#1e2d45',
        },
        board: {
          ks3: '#10b981',
          aqa: '#3b82f6',
          edexcel: '#8b5cf6',
          ocr: '#f97316',
          wjec: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(16,185,129,0.15)',
        'glow-sm': '0 0 10px rgba(16,185,129,0.1)',
        soft: '0 1px 2px rgba(0,0,0,0.3)',
        medium: '0 4px 12px rgba(0,0,0,0.4)',
      },
      fontSize: {
        display: ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        caption: ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
        overline: ['0.6875rem', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '0.05em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
