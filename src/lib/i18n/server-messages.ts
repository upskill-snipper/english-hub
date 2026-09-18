// ─── Server-side message lookup, without the whole dictionary ───────────────
//
// THE DEFECT THIS FIXES (19 September 2026)
//
// `src/lib/i18n/t.ts` imported `lookup` from `./dictionary`, which is
// 1,507,637 bytes across 76 statically-imported shards. `t()` is used by the
// root layout, so EVERY server render pulled the entire trilingual dictionary
// into the server graph - all three languages, every key, on a page that needs
// one string.
//
// The generated maps in ./generated/ already hold the answer. They are emitted
// by scripts/generate-i18n-locales.mjs with the shard precedence chain and the
// English fallback resolved, and scripts/verify-i18n-locales.mjs asserts they
// are "100% identical to lookup()" across all 16,833 keys x 3 locales. So they
// are not an approximation of the dictionary; they are its output.
//
// WHY ENGLISH IS STATIC AND THE OTHERS ARE NOT
//
// Importing all three maps statically would be WORSE than the dictionary:
// 1.37 MB + 1.73 MB + 1.52 MB. English is imported directly because every
// render needs it (it is also the fallback for a missing key). Arabic and
// Spanish load on demand, once per process, and only for a request that
// actually asks for them.
//
// THE TRAP THIS MODULE IS SHAPED TO AVOID
//
// A design where the caller must remember to preload before looking up is a
// design where forgetting means an Arabic reader is silently served English,
// with no error and no failing test. So `t()` and `tMany()` - which are async
// anyway - await the load themselves, and no call site has to know.
//
// `tSync()` cannot: it is called from synchronous components. Its three call
// sites preload in their enclosing async component, and
// src/__tests__/no-dictionary-in-server-graph.test.ts fails the build if a
// file imports `tSync` without also calling `preloadLocale`.
// ────────────────────────────────────────────────────────────────────────────

import { EN_MESSAGES } from './generated/en'

/** Declared locally, so nobody can promote this to a value import later. */
export type Locale = 'en' | 'ar' | 'es'

type MessageMap = Readonly<Record<string, string>>

const MAPS: Partial<Record<Locale, MessageMap>> = { en: EN_MESSAGES }

/** In-flight loads, so twenty concurrent renders trigger one import. */
const inFlight = new Map<Locale, Promise<void>>()

/**
 * Ensure a locale's messages are in memory. Idempotent and safe to call on
 * every request: after the first, it returns an already-resolved promise.
 */
export async function preloadLocale(locale: Locale): Promise<void> {
  if (MAPS[locale]) return
  const existing = inFlight.get(locale)
  if (existing) return existing

  const loading = (async () => {
    try {
      if (locale === 'ar') {
        MAPS.ar = (await import('./generated/ar')).AR_MESSAGES
      } else if (locale === 'es') {
        MAPS.es = (await import('./generated/es')).ES_MESSAGES
      }
    } catch (err) {
      // A failed chunk load must not take the page down. English is already
      // present and is the documented fallback, so the reader gets a rendered
      // page in the wrong language rather than an error - which is the right
      // trade, but it should be visible in the logs.
      console.error(`[i18n] could not load ${locale} messages:`, err)
    } finally {
      inFlight.delete(locale)
    }
  })()

  inFlight.set(locale, loading)
  return loading
}

/**
 * Look a key up in an already-loaded locale.
 *
 * Falls back to English for a missing translation, then to the key itself -
 * the same order `lookup()` used, so a missing key still renders something
 * identifiable rather than "undefined".
 */
export function serverLookup(key: string, locale: Locale): string {
  const map = MAPS[locale]
  return map?.[key] ?? EN_MESSAGES[key] ?? key
}

/** Whether a locale's messages are loaded. Exposed for tests only. */
export function __isLoadedForTests(locale: Locale): boolean {
  return Boolean(MAPS[locale])
}
