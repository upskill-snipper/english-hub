'use client'

/**
 * useLocale — reads the eh-lang cookie on the client and re-renders
 * whenever the LanguageToggle dispatches the `eh-lang-change` custom
 * event. Same pattern used by `useT()`, kept as a standalone hook
 * for components that don't need the full dictionary lookup.
 *
 * Two-mode after May 2026 — 'en' or 'ar'. Bilingual mode was removed
 * because the stacked EN+AR layout didn't render reliably on dense
 * pages. Legacy `bi` cookie values are coerced to 'en' here and by
 * middleware on the next request.
 */
import { useEffect, useState } from 'react'

export type Locale = 'en' | 'ar'

function readCookie(): Locale {
  if (typeof document === 'undefined') return 'en'
  // Match legacy 'bi' too, then coerce — old sessions upgrade cleanly.
  const m = document.cookie.match(/(?:^|;\s*)eh-lang=(en|bi|ar)\b/)
  const raw = m?.[1]
  if (raw === 'ar') return 'ar'
  return 'en'
}

export function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>('en')
  useEffect(() => {
    setLocale(readCookie())
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail
      if (detail === 'ar') {
        setLocale('ar')
      } else if (detail === 'en' || detail === 'bi') {
        // 'bi' is legacy — fold to 'en' (no bilingual mode anymore).
        setLocale('en')
      } else {
        setLocale(readCookie())
      }
    }
    window.addEventListener('eh-lang-change', onChange)
    return () => window.removeEventListener('eh-lang-change', onChange)
  }, [])
  return locale
}
