'use client'

// ─── Local i18n helper for the IELTS Mock Test ──────────────────────────────
// ielts.mock.* keys live in the dictionary-ielts-mock shard, which isn't wired
// into the global lookup() chain - resolve them here against the live locale,
// falling back to the shared useT() for any cross-module ielts.* keys. `vars`
// interpolates {token} placeholders so a phrase (section names, counts, bands,
// word counts, part numbers) stays translatable as a whole.
//
// Modelled exactly on usePlanT() in src/app/ielts/plan/page.tsx. Lives in its
// own client module so every mock subcomponent ('use client') can import the
// same hook rather than threading `t` through props.
// ────────────────────────────────────────────────────────────────────────────

import { useT } from '@/lib/i18n/use-t'
import { useLocale } from '@/lib/i18n/use-locale'
import { IELTS_MOCK_DICTIONARY } from '@/lib/i18n/dictionary-ielts-mock'

export type Vars = Record<string, string | number>
export type TFn = (key: string, vars?: Vars) => string

function interpolate(template: string, vars?: Vars): string {
  if (!vars) return template
  return template.replace(/\{(\w+)\}/g, (m, k) =>
    Object.prototype.hasOwnProperty.call(vars, k) ? String(vars[k]) : m,
  )
}

export function useMockT(): TFn {
  const tBase = useT()
  const locale = useLocale()
  return (key: string, vars?: Vars) => {
    const entry = IELTS_MOCK_DICTIONARY[key]
    if (entry) {
      const value = locale === 'ar' && entry.ar ? entry.ar : entry.en
      return interpolate(value, vars)
    }
    return interpolate(tBase(key), vars)
  }
}
