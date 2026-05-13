'use client'

/**
 * useLocale — reads the eh-lang cookie on the client and re-renders
 * whenever the LanguageToggle dispatches the `eh-lang-change` custom
 * event. Same pattern used by `useT()`, kept as a standalone hook
 * for components that don't need the full dictionary lookup.
 */
import { useEffect, useState } from 'react'

export type Locale = 'en' | 'bi' | 'ar'

function readCookie(): Locale {
  if (typeof document === 'undefined') return 'en'
  const m = document.cookie.match(/(?:^|;\s*)eh-lang=(en|bi|ar)\b/)
  return (m?.[1] as Locale) ?? 'en'
}

export function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>('en')
  useEffect(() => {
    setLocale(readCookie())
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail
      if (detail === 'en' || detail === 'bi' || detail === 'ar') {
        setLocale(detail)
      } else {
        setLocale(readCookie())
      }
    }
    window.addEventListener('eh-lang-change', onChange)
    return () => window.removeEventListener('eh-lang-change', onChange)
  }, [])
  return locale
}
