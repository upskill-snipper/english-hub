'use client'

/**
 * LanguageToggle — three-mode language switcher for the site header.
 *
 *   en  → English mode  (default; content rendered in English only)
 *   bi  → Bilingual     (each section shows EN above AR)
 *   ar  → Arabic mode   (AR content only, RTL layout, MSA + Khaleeji)
 *
 * Persistence is via the `eh-lang` cookie which the middleware reads
 * on every request and stamps onto an `x-lang` request header. The
 * root layout reads that header and sets `<html lang dir="...">`
 * before first paint, so there's no flash of wrong-direction content.
 *
 * On change we write the cookie client-side AND do a `router.refresh()`
 * so the server-rendered shell + RSC payload come back in the new mode.
 * A full reload would also work but feels worse — refresh() keeps the
 * scroll position and any client state we care about.
 *
 * Tooltip strings are intentionally English in all three modes. The
 * toggle is a navigational aid; the user might be in AR mode and want
 * to switch back to EN, and they need to recognise the option. The
 * active mode is announced via `aria-pressed` for screen readers.
 *
 * Note: cookie-only Arabic mode is NOT crawled as Arabic content by
 * Google. The follow-up plan (documented in /governance) is to mirror
 * Arabic content under `/ar/...` paths with hreflang alternates. Until
 * then, this toggle is purely for logged-in / returning users.
 */

import { useCallback, useEffect, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const COOKIE = 'eh-lang'
const ONE_YEAR = 60 * 60 * 24 * 365

type Mode = 'en' | 'bi' | 'ar'

const MODES: { value: Mode; label: string; tooltip: string }[] = [
  { value: 'en', label: 'EN', tooltip: 'English mode — content in English' },
  { value: 'bi', label: 'EN + AR', tooltip: 'Bilingual mode — English + Arabic together' },
  { value: 'ar', label: 'AR', tooltip: 'Arabic mode — content in Arabic (Gulf MSA)' },
]

function readCookie(): Mode {
  if (typeof document === 'undefined') return 'en'
  const match = document.cookie.match(/(?:^|;\s*)eh-lang=(en|bi|ar)\b/)
  return (match?.[1] as Mode) ?? 'en'
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
      aria-label="Language mode"
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full border border-border/60 bg-background/80 p-0.5 text-xs font-medium shadow-sm backdrop-blur',
        className,
      )}
    >
      {MODES.map((m) => {
        const active = m.value === mode
        return (
          <button
            key={m.value}
            type="button"
            onClick={() => setLang(m.value)}
            aria-pressed={active}
            title={m.tooltip}
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
