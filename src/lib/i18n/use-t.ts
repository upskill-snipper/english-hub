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
 *
 * ─── 2026-08-23: why this file no longer touches ./dictionary ───────────
 *
 * This module previously did `import { lookup } from './dictionary'`.
 * `./dictionary` eagerly imports ~80 shard files (~4.6 MB of source) that
 * hold en/ar/es interleaved per key. Because this is a 'use client' module
 * and `header.tsx` calls useT(), and the root layout shell renders the
 * header, the entire trilingual dictionary was pulled into EVERY route's
 * client graph: one shared chunk of 3,801,191 bytes raw / 1,080,352
 * gzipped, referenced by 1,237 of 1,238 page manifests. An English reader
 * downloaded and parsed every Arabic and Spanish string on the site.
 *
 * The fix: consume flat, per-locale maps with the shard precedence chain
 * and the en fallback already resolved at build time
 * (src/lib/i18n/generated/*.ts, produced by
 * scripts/generate-i18n-locales.mjs by calling the real `lookup()`, and
 * asserted key-for-key identical by scripts/verify-i18n-locales.mjs).
 * English is imported statically because useT() resolves header and nav
 * labels during render - a purely dynamic import would flash raw [[keys]]
 * on first paint. Arabic and Spanish load on demand.
 *
 * IMPORTANT: do not re-introduce ANY import from './dictionary' here, not
 * even `import type { Locale }`. A type-only import is erased, but the
 * moment someone converts it to a value import the 3.8 MB chunk is back in
 * every route. The Locale union is therefore re-declared locally, matching
 * the existing convention in ./use-locale.ts.
 */

import { useCallback, useEffect, useReducer, useState } from 'react'
import { EN_MESSAGES } from './generated/en'

export type Locale = 'en' | 'ar' | 'es'

type Messages = Record<string, string>

/** Locale maps resolved so far. English is always present (static import). */
const MESSAGES: Partial<Record<Locale, Messages>> = { en: EN_MESSAGES }

/** Locales whose chunk is in flight, so concurrent hooks request once. */
const inFlight = new Set<Locale>()

/**
 * Mounted useT() consumers. A lazily loaded locale map arrives outside
 * React's knowledge, so we notify subscribers explicitly - setLocale()
 * alone would not re-render, because the locale value has not changed.
 */
const subscribers = new Set<() => void>()

function notify() {
  for (const fn of subscribers) fn()
}

function readLocale(): Locale {
  if (typeof document === 'undefined') return 'en'
  // Match legacy 'bi' too so we can coerce it to 'en'.
  const match = document.cookie.match(/(?:^|;\s*)eh-lang=(en|bi|ar|es)\b/)
  const v = match?.[1]
  if (v === 'ar') return 'ar'
  if (v === 'es') return 'es'
  return 'en'
}

function ensureLocale(locale: Locale): void {
  if (locale === 'en' || MESSAGES[locale] || inFlight.has(locale)) return
  inFlight.add(locale)
  const loading =
    locale === 'ar'
      ? import('./generated/ar').then((m) => m.AR_MESSAGES)
      : import('./generated/es').then((m) => m.ES_MESSAGES)
  loading
    .then((map) => {
      MESSAGES[locale] = map
      notify()
    })
    .catch(() => {
      // Chunk fetch failed (offline, cache miss on a stale deploy). Leave
      // the locale unresolved: t() then serves the English string rather
      // than raw [[keys]], which degrades to readable copy instead of
      // broken-looking UI. Retry is allowed on the next language change.
    })
    .finally(() => {
      inFlight.delete(locale)
    })
}

// Start the fetch at module-evaluation time rather than waiting for the
// first effect. For an Arabic or Spanish reader this overlaps the request
// with hydration, so the window in which the English fallback shows is as
// short as we can make it without shipping all three locales again.
if (typeof document !== 'undefined') {
  ensureLocale(readLocale())
}

export function useT(): (key: string) => string {
  // First render must be 'en' on both server and client - the cookie is
  // not readable during SSR, so seeding from it here would hydration-mismatch.
  const [locale, setLocale] = useState<Locale>('en')
  const [revision, bump] = useReducer((n: number) => n + 1, 0)

  useEffect(() => {
    subscribers.add(bump)
    const initial = readLocale()
    setLocale(initial)
    ensureLocale(initial)

    // Re-read the cookie when the storage event fires. Cookie writes
    // don't fire storage events automatically, but our language
    // toggle dispatches one explicitly (see language-toggle.tsx).
    function onLangChange() {
      const next = readLocale()
      setLocale(next)
      ensureLocale(next)
    }
    window.addEventListener('eh-lang-change', onLangChange)
    return () => {
      subscribers.delete(bump)
      window.removeEventListener('eh-lang-change', onLangChange)
    }
  }, [])

  // `revision` is a dependency on purpose: it changes when a lazily loaded
  // locale map lands, which must produce a fresh callback identity so
  // memoised consumers recompute their labels.
  return useCallback(
    (key: string) => {
      // `typeof === 'string'`, not `!== undefined`: the generated maps are
      // plain object literals, so a key that collides with an Object.prototype
      // member ('constructor', 'toString', 'valueOf'...) reads back as an
      // inherited FUNCTION rather than undefined. ~18 call sites build keys at
      // runtime (t(`admin.aff.status.${status}`), t(h.label)), and some then
      // call .charAt() on the result, so returning a non-string here would
      // throw instead of degrading to the [[key]] sentinel. The old
      // dictionary lookup() could not hit this because it read `.en` off the
      // matched entry, which is undefined for a prototype member.
      const map = MESSAGES[locale]
      const value = map?.[key]
      if (typeof value === 'string') return value
      // Locale chunk not resolved yet: show English rather than [[key]].
      const english = EN_MESSAGES[key]
      if (typeof english === 'string') return english
      // Genuinely undefined key. Same sentinel the server lookup() emits,
      // so scripts/check-copy-quality.mjs still catches missing copy.
      return `[[${key}]]`
    },
    [locale, revision],
  )
}
