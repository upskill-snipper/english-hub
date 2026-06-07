/**
 * t() - server-side translation helper.
 *
 * Reads the `x-lang` header that middleware stamps on every request,
 * then looks up the key in the master dictionary. Falls back to EN
 * if the AR entry is missing.
 *
 * Usage in a server component:
 *
 *     import { t } from '@/lib/i18n/t'
 *     export default async function Page() {
 *       return <h1>{await t('header.nav.pricing')}</h1>
 *     }
 *
 * The implementation reads `headers()` once per call. Next.js caches
 * `headers()` per request so multiple `t()` calls in the same render
 * pass cost effectively nothing.
 *
 * For client components, use `useT()` from `./use-t` which reads the
 * `eh-lang` cookie directly via document.cookie (the client doesn't
 * see request headers).
 */

import { headers } from 'next/headers'
import { lookup, type Locale } from './dictionary'

async function resolveLocale(): Promise<Locale> {
  try {
    const h = await headers()
    const v = h.get('x-lang')
    if (v === 'ar') return 'ar'
    if (v === 'es') return 'es'
    return 'en'
  } catch {
    // headers() throws when called outside a request scope (e.g.
    // at build time on fully static pages). Default to en - those
    // pages render statically in English; per-request rendering
    // sees the real locale.
    return 'en'
  }
}

/**
 * Public server-side locale getter. Use when a page needs to choose
 * between pre-translated content fields (e.g. `detail` / `detailAr`)
 * rather than going through the dictionary.
 */
export async function getLocale(): Promise<Locale> {
  return resolveLocale()
}

/** Helper: pick the AR variant when locale === 'ar' and it exists, else EN. */
export function pickLocaleField<T>(locale: Locale, en: T, ar: T | undefined): T {
  return locale === 'ar' && ar !== undefined ? ar : en
}

export async function t(key: string): Promise<string> {
  const locale = await resolveLocale()
  return lookup(key, locale)
}

/**
 * Batched lookup - pass an array of keys, get back the resolved
 * strings in the same order. Cheaper than awaiting `t()` N times
 * because we read the locale once.
 */
export async function tMany(keys: string[]): Promise<string[]> {
  const locale = await resolveLocale()
  return keys.map((k) => lookup(k, locale))
}

/**
 * Synchronous server-side variant for callers that already have
 * the locale resolved (e.g. middleware that has stamped it). Avoids
 * the headers() round-trip.
 */
export function tSync(key: string, locale: Locale): string {
  return lookup(key, locale)
}
