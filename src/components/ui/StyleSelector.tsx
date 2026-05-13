'use client'

import { useState, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'

/* ── Types ─────────────────────────────────────────────────────────── */

export type ResourceStyle = 'cream' | 'dark' | 'whiteboard'

interface StyleSelectorProps {
  /** Currently selected style */
  value: ResourceStyle
  /** Callback when style changes */
  onChange: (style: ResourceStyle) => void
  /** Optional className */
  className?: string
}

interface StyleSelectorInlineProps {
  /** Currently selected style */
  value: ResourceStyle
  /** Callback when style changes */
  onChange: (style: ResourceStyle) => void
  /** Optional className */
  className?: string
}

/* ── Style definitions ─────────────────────────────────────────────── */

// Visual + i18n metadata per style. The `labelKey` and `ariaKey` route
// through the dictionary so AR mode renders Khaleeji copy. English-side
// labels remain the source of truth and the fallback.
const STYLES: {
  id: ResourceStyle
  labelKey: string
  ariaKey: string
  bg: string
  textLine: string
  accentDot: string
}[] = [
  {
    id: 'cream',
    labelKey: 'ui.style.cream',
    ariaKey: 'ui.style.option_aria_label.cream',
    bg: 'bg-cream-50', // #FBF7F0
    textLine: 'bg-ink-800', // dark text line
    accentDot: 'bg-clay-400', // terracotta accent
  },
  {
    id: 'dark',
    labelKey: 'ui.style.dark',
    ariaKey: 'ui.style.option_aria_label.dark',
    bg: 'bg-ink-950', // #0F1411 (near-black)
    textLine: 'bg-cream-50', // cream text line
    accentDot: 'bg-clay-300', // warm terracotta (#E8A382 ≈ #E89764)
  },
  {
    id: 'whiteboard',
    labelKey: 'ui.style.whiteboard',
    ariaKey: 'ui.style.option_aria_label.whiteboard',
    bg: 'bg-card', // card surface
    textLine: 'bg-ink-800', // dark text line
    accentDot: 'bg-clay-400', // terracotta accent
  },
]

/* ── Swatch preview ────────────────────────────────────────────────── */

function Swatch({ style }: { style: (typeof STYLES)[number] }) {
  return (
    <div
      className={cn(
        'flex h-[40px] w-[60px] flex-col items-start justify-center gap-[5px] rounded-sm px-2',
        style.bg,
        // Add a subtle border so the whiteboard swatch is distinguishable
        style.id === 'whiteboard' && 'border border-ink-100',
      )}
    >
      {/* Simulated text line */}
      <div className={cn('h-[3px] w-[32px] rounded-full opacity-80', style.textLine)} />
      {/* Shorter line + accent dot row */}
      <div className="flex items-center gap-1.5">
        <div className={cn('h-[3px] w-[20px] rounded-full opacity-60', style.textLine)} />
        <div className={cn('h-[5px] w-[5px] rounded-full', style.accentDot)} />
      </div>
    </div>
  )
}

/* ── StyleSelector (full, with swatches) ───────────────────────────── */

export function StyleSelector({ value, onChange, className }: StyleSelectorProps) {
  const t = useT()
  return (
    <div
      role="radiogroup"
      aria-label={t('ui.style.aria_label')}
      className={cn('inline-flex items-end gap-2', className)}
    >
      {STYLES.map((style) => {
        const selected = value === style.id
        return (
          <button
            key={style.id}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={t(style.ariaKey)}
            onClick={() => onChange(style.id)}
            className={cn(
              'flex flex-col items-center gap-1.5 rounded-md p-1.5 transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2',
              selected
                ? 'ring-2 ring-clay-500 shadow-sm'
                : 'border border-ink-200 opacity-80 hover:opacity-100',
            )}
          >
            <Swatch style={style} />
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-600">
              {t(style.labelKey)}
            </span>
          </button>
        )
      })}
    </div>
  )
}

/* ── StyleSelectorInline (compact pill buttons) ────────────────────── */

export function StyleSelectorInline({ value, onChange, className }: StyleSelectorInlineProps) {
  const t = useT()
  return (
    <div
      role="radiogroup"
      aria-label={t('ui.style.aria_label')}
      className={cn('inline-flex items-center gap-1', className)}
    >
      {STYLES.map((style) => {
        const selected = value === style.id
        return (
          <button
            key={style.id}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={t(style.ariaKey)}
            onClick={() => onChange(style.id)}
            className={cn(
              'rounded-pill px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-1',
              selected
                ? 'bg-clay-500 text-white shadow-sm'
                : 'bg-ink-100 text-ink-500 hover:bg-ink-200 hover:text-ink-700',
            )}
          >
            {t(style.labelKey)}
          </button>
        )
      })}
    </div>
  )
}

/* ── useResourceStyle hook (localStorage-persisted) ────────────────── */

const STORAGE_KEY = 'english-hub-resource-style'

function isValidStyle(val: unknown): val is ResourceStyle {
  return val === 'cream' || val === 'dark' || val === 'whiteboard'
}

export function useResourceStyle() {
  const [style, setStyleState] = useState<ResourceStyle>('cream')

  // Hydrate from localStorage on mount (client-only)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored && isValidStyle(stored)) {
        setStyleState(stored)
      }
    } catch {
      // localStorage unavailable (SSR, privacy mode, etc.)
    }
  }, [])

  const setStyle = useCallback((next: ResourceStyle) => {
    setStyleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // localStorage unavailable
    }
  }, [])

  return { style, setStyle } as const
}
