'use client'

/**
 * LanguageToggle — two-mode language switcher.
 *
 *   en  → English mode  (default; content rendered in English only)
 *   ar  → Arabic mode   (AR content only, RTL layout, Khaleeji)
 *
 * Bilingual mode was removed (May 2026) — the stacked EN+AR layout
 * didn't render reliably on dense pages and the user community asked
 * for a simpler toggle. Legacy `eh-lang=bi` cookie values are coerced
 * to `'en'` by readCookie() and by the middleware so old sessions
 * upgrade cleanly.
 *
 * Persistence is via the `eh-lang` cookie which the middleware reads
 * on every request and stamps onto an `x-lang` request header. The
 * root layout reads that header and sets `<html lang dir="...">`
 * before first paint, so there's no flash of wrong-direction content.
 */

import { useCallback, useEffect, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'

const COOKIE = 'eh-lang'
const ONE_YEAR = 60 * 60 * 24 * 365

type Mode = 'en' | 'ar'

const MODE_DEFS: { value: Mode; label: string; tooltipKey: string }[] = [
  { value: 'en', label: 'EN', tooltipKey: 'lang.en.tooltip' },
  { value: 'ar', label: 'العربية', tooltipKey: 'lang.ar.tooltip' },
]

function readCookie(): Mode {
  if (typeof document === 'undefined') return 'en'
  // Accept legacy `bi` values and coerce to `en` so old sessions upgrade cleanly.
  const match = document.cookie.match(/(?:^|;\s*)eh-lang=(en|bi|ar)\b/)
  const raw = match?.[1]
  if (raw === 'ar') return 'ar'
  return 'en'
}

export function LanguageToggle({ className }: { className?: string }) {
  // Initialise from cookie on the client only. SSR renders 'en' so the
  // first paint matches what the middleware decided; on hydration we
  // sync to the real cookie value. The middleware-stamped `x-lang`
  // header is the source of truth for the rendered direction; this
  // state only drives which button shows as pressed.
  const [mode, setMode] = useState<Mode>('en')
  const [, startTransition] = useTransition()
  const router = useRouter()
  const t = useT()

  useEffect(() => {
    setMode(readCookie())
  }, [])

  const setLang = useCallback(
    (next: Mode) => {
      if (next === mode) return
      // Cookie write must be lax + path=/ so it applies site-wide and
      // survives Cloudflare's edge cache (cached responses ignore
      // Set-Cookie, but the cookie reaches the origin on the next nav).
      document.cookie = `${COOKIE}=${next}; path=/; max-age=${ONE_YEAR}; samesite=lax`
      setMode(next)
      // Notify other client components in the same tab to re-render
      // with the new locale. The custom event is the signal `useT()`
      // listens for via window.addEventListener('eh-lang-change').
      window.dispatchEvent(new CustomEvent('eh-lang-change', { detail: next }))
      // Refresh the current route so the server re-renders with the new
      // x-lang header. router.refresh() in App Router refetches the RSC
      // payload without a full page reload.
      startTransition(() => {
        router.refresh()
      })
    },
    [mode, router],
  )

  return (
    <div
      role="group"
      aria-label={t('lang.switch')}
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full border border-border/60 bg-background/80 p-0.5 text-xs font-medium shadow-sm backdrop-blur',
        className,
      )}
    >
      {MODE_DEFS.map((m) => {
        const active = m.value === mode
        return (
          <button
            key={m.value}
            type="button"
            onClick={() => setLang(m.value)}
            aria-pressed={active}
            title={t(m.tooltipKey)}
            className={cn(
              'rounded-full px-2.5 py-1 transition-colors',
              active
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground',
            )}
          >
            {m.label}
          </button>
        )
      })}
    </div>
  )
}
