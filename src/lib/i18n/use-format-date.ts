'use client'

// ─── Dates in the reader's own language ──────────────────────────────────────
//
// WHY THIS EXISTS (19 September 2026, A11Y-10)
// `formatDate()` hard-coded 'en-GB' across 130 call sites, so an Arabic reader
// saw English month names inside Arabic sentences: "18 Sep 2026" in the middle
// of a right-to-left paragraph. That is wrong on its own terms, and because a
// Latin-script run inside an RTL paragraph is reordered by the bidirectional
// algorithm, it is frequently unreadable as well.
//
// ── WHY IT STARTS IN ENGLISH AND THEN CHANGES ───────────────────────────────
// The locale lives in a cookie, which is not readable during server rendering,
// so the first render MUST produce the same output on the server and on the
// client or React reports a hydration mismatch and discards the tree. Every
// other locale-aware hook here does the same thing - `useT` and `useLocale`
// both seed 'en' and correct themselves in an effect - and this follows that
// pattern rather than inventing a second one.
//
// The visible consequence is that a date can render in English for one frame
// before switching. That is the same behaviour as every translated string on
// the page, so it is consistent rather than surprising.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback } from 'react'
import { useLocale } from './use-locale'
import { formatDate, type FormatLocale } from '@/lib/utils'

/**
 * Returns a date formatter bound to the reader's current locale.
 *
 * Use this in client components instead of importing `formatDate` directly.
 * The returned function has the same shape as `formatDate`, so a call site
 * changes from `formatDate(x)` to `fmt(x)` and nothing else.
 */
export function useFormatDate(): (date: string | Date) => string {
  const locale = useLocale()
  return useCallback((date: string | Date) => formatDate(date, locale as FormatLocale), [locale])
}
