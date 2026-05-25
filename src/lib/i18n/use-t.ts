'use client'

/**
 * useT() - client-side translation hook.
 *
 * Reads the `eh-lang` cookie via document.cookie (mirrors the
 * server-side x-lang resolution) and returns a memoised lookup
 * function. The hook re-runs when the cookie changes (storage
 * event), so a language toggle in the same tab updates the
 * translated strings on the next render without a page reload.
 *
 * Usage:
 *
 *     'use client'
 *     import { useT } from '@/lib/i18n/use-t'
 *     export function MyButton() {
 *       const t = useT()
 *       return <button>{t('action.continue')}</button>
 *     }
 *
 * Legacy bilingual mode ('bi') was removed in May 2026 - the stacked
 * EN+AR layout didn't render reliably on dense pages. Old cookies
 * with `eh-lang=bi` are coerced to 'en' here and by the middleware
 * so sessions upgrade transparently.
 */

import { useCallback, useEffect, useState } from 'react'
import { lookup, type Locale } from './dictionary'

function readLocale(): Locale {
  if (typeof document === 'undefined') return 'en'
  // Match legacy 'bi' too so we can coerce it to 'en'.
  const match = document.cookie.match(/(?:^|;\s*)eh-lang=(en|bi|ar)\b/)
  const v = match?.[1]
  return v === 'ar' ? 'ar' : 'en'
}

export function useT(): (key: string) => string {
  const [locale, setLocale] = useState<Locale>('en')

  useEffect(() => {
    setLocale(readLocale())

    // Re-read the cookie when the storage event fires. Cookie writes
    // don't fire storage events automatically, but our language
    // toggle dispatches one explicitly (see language-toggle.tsx).
    function onLangChange() {
      setLocale(readLocale())
    }
    window.addEventListener('eh-lang-change', onLangChange)
    return () => window.removeEventListener('eh-lang-change', onLangChange)
  }, [])

  return useCallback((key: string) => lookup(key, locale), [locale])
}
