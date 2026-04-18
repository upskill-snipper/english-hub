import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ── Anthology colour scales ───────────────────────────────── */
        cream: {
          50:  '#FBF7F0',
          100: '#F5EFE4',
          200: '#ECE2CF',
          300: '#DECEB0',
        },
        ink: {
          100: '#E8E8E4',
          200: '#D6D7D3',
          300: '#B5B8B3',
          400: '#8F948F',
          500: '#6C736D',
          600: '#4A524C',
          700: '#303832',
          800: '#1E2621',
          900: '#141A17',
          950: '#0F1411',
        },
        teal: {
          300: '#8BB9B4',
          400: '#5A9A94',
          500: '#357D77',
          600: '#266662',
          700: '#1D524E',
          800: '#163F3C',
          900: '#0F2D2B',
          950: '#0A1F1E',
        },
        clay: {
          200: '#F2C9B4',
          300: '#E8A382',
          400: '#D97A4E',
          500: '#C65A33',
          600: '#AD4A28',
          700: '#8C3B1F',
        },
        ochre: {
          200: '#F8E7B8',
          300: '#F0D488',
          400: '#E4BA4E',
          500: '#D4A021',
          600: '#B88418',
        },
        sage: {
          200: '#C7D4C2',
          400: '#92AB8F',
          500: '#6B8A6B',
          600: '#4E6B4E',
        },

        /* ── shadcn semantic tokens (CSS variable-driven) ──────────── */
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },

        /* ── English Hub brand tokens (backward compat) ────────────── */
        brand: {
          bg: '#0c0f18',
          card: '#101524',
          border: '#1a2040',
          accent: '#2dd4a8',
          'accent-hover': '#22b893',
          blue: '#3b82f6',
          warning: '#f59e0b',
          error: '#ef4444',
          text: '#f0f2f5',
          muted: '#8892a8',
        },
        surface: {
          DEFAULT: '#101524',
          raised: '#161c32',
          overlay: '#1e2645',
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
        serif: ['"Newsreader"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Geist"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        heading: ['"Newsreader"', 'ui-serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '20px',
        xl: '28px',
        '2xl': '28px',
        pill: '999px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(15,20,17,0.06), 0 1px 1px rgba(15,20,17,0.04)',
        md: '0 4px 14px -4px rgba(15,20,17,0.10), 0 2px 4px rgba(15,20,17,0.05)',
        lg: '0 20px 40px -20px rgba(15,20,17,0.25), 0 8px 20px -12px rgba(15,20,17,0.10)',
        glow: '0 0 24px rgba(45,212,168,0.12)',
        'glow-sm': '0 0 12px rgba(45,212,168,0.08)',
        soft: '0 1px 3px rgba(15,20,17,0.08), 0 1px 2px rgba(15,20,17,0.04)',
        medium: '0 4px 16px rgba(15,20,17,0.12)',
        elevated: '0 8px 32px rgba(15,20,17,0.18), 0 2px 8px rgba(15,20,17,0.06)',
        'card-hover': '0 8px 30px rgba(15,20,17,0.12), 0 0 1px rgba(22,63,60,0.15)',
      },
      fontSize: {
        /* Mona Sans display sizes — tight tracking, heavy weight */
        display: ['3.5rem', { lineHeight: '1.08', fontWeight: '800', letterSpacing: '-0.03em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.025em' }],
        'heading-lg': ['1.875rem', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.02em' }],
        'heading-md': ['1.25rem', { lineHeight: '1.25', fontWeight: '600', letterSpacing: '-0.015em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        caption: ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],
        overline: ['0.6875rem', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '0.08em' }],
        label: ['0.8125rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.16,1,0.3,1)',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16,1,0.3,1)',
        'slide-in-right': 'slideInRight 0.4s cubic-bezier(0.16,1,0.3,1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.16,1,0.3,1)',
        'accordion-down': 'accordion-down 0.25s cubic-bezier(0.16,1,0.3,1)',
        'accordion-up': 'accordion-up 0.2s cubic-bezier(0.16,1,0.3,1)',
        shake: 'shake 0.4s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-6px)' },
          '40%': { transform: 'translateX(6px)' },
          '60%': { transform: 'translateX(-4px)' },
          '80%': { transform: 'translateX(4px)' },
        },
      },
    },
  },
  plugins: [tailwindAnimate],
}
export default config
