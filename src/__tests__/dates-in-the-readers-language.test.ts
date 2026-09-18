import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { formatDate } from '@/lib/utils'

/**
 * English month names inside Arabic sentences (A11Y-10).
 *
 * THE DEFECT (19 September 2026). `formatDate()` hard-coded 'en-GB' and took no
 * locale, across 130 call sites. An Arabic reader saw "18 Sep 2026" embedded in
 * a right-to-left paragraph - wrong on its own terms, and frequently unreadable
 * as well, because a Latin-script run inside an RTL paragraph is reordered by
 * the bidirectional algorithm.
 *
 * WHY THESE TESTS ASSERT SHAPE AND SCRIPT, NOT AN EXACT ENGLISH STRING. The
 * obvious assertion - that the English output "is exactly 18 Sep 2026" - fails
 * on this repo's own Node before a line of source is written: ICU changed the
 * en-GB abbreviation for September to "Sept". A test that pins a month
 * abbreviation is pinning an ICU data release, not this codebase's behaviour,
 * and it would break on a Node upgrade having caught nothing.
 */

const SEPT = '2026-09-18T00:00:00.000Z'

describe('the English default', () => {
  it('is unchanged by the locale parameter existing', () => {
    // 130 call sites pass no locale. If this drifts, the English product
    // changed, which was never the intention.
    expect(formatDate(SEPT)).toBe(formatDate(SEPT, 'en'))
  })

  it('renders day, month and year in British order', () => {
    // Shape, not a literal: "18 Sept 2026" today, "18 Sep 2026" on an older
    // ICU. Both are correct; pinning either is pinning the wrong thing.
    expect(formatDate(SEPT)).toMatch(/^18 \S+ 2026$/)
  })
})

describe('Arabic', () => {
  it('names the month in Arabic script', () => {
    const out = formatDate(SEPT, 'ar')
    expect(out).toMatch(/[؀-ۿ]/)
  })

  it('does not leak the English month name', () => {
    const out = formatDate(SEPT, 'ar')
    expect(out).not.toMatch(/Sep/i)
  })

  it('keeps Latin digits', () => {
    // Deliberate: this product shows marks, grades and dates side by side, and
    // mixing Arabic-Indic digits into an interface full of Latin-digit marks is
    // worse than either alone. The locale tag carries -nu-latn for this reason,
    // so if someone removes it this fails.
    const out = formatDate(SEPT, 'ar')
    expect(out).toMatch(/18/)
    expect(out).toMatch(/2026/)
    expect(out).not.toMatch(/[٠-٩]/)
  })

  it('uses the Gregorian calendar, not Hijri', () => {
    // These are exam dates and renewal dates. A Hijri year would be a
    // different date, not a translation of the same one.
    expect(formatDate(SEPT, 'ar')).toMatch(/2026/)
  })
})

describe('Spanish', () => {
  it('renders a Spanish month, not an English one', () => {
    const out = formatDate(SEPT, 'es')
    expect(out).toMatch(/^18 /)
    expect(out).not.toMatch(/Sep\b/)
  })
})

describe('an unknown locale', () => {
  it('falls back to English rather than throwing', () => {
    // A bad value must never take down a page that is only showing a date.
    expect(() => formatDate(SEPT, 'de' as never)).not.toThrow()
    expect(formatDate(SEPT, 'de' as never)).toBe(formatDate(SEPT, 'en'))
  })
})

// ─── The direction-sensitive things the layout hard-coded ───────────────────

describe('the root layout', () => {
  const layout = readFileSync(join(process.cwd(), 'src/app/layout.tsx'), 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')

  it('puts toasts on the reading side', () => {
    // Was hard-coded bottom-right, so in Arabic every toast appeared on the
    // far side of the screen from the content that caused it - and on a phone,
    // over the primary action.
    expect(layout).toMatch(/position=\{dir === 'rtl' \? 'bottom-left' : 'bottom-right'\}/)
    expect(layout).not.toMatch(/position="bottom-right"/)
  })

  it('uses a logical inset for the skip link', () => {
    // The skip link is the first thing a keyboard user reaches. Pinned to the
    // physical left, in Arabic it appeared opposite the direction of travel.
    expect(layout).toMatch(/focus:start-4/)
    expect(layout).not.toMatch(/focus:left-4/)
  })
})

// ─── The hook client components should use ──────────────────────────────────

describe('useFormatDate', () => {
  const src = readFileSync(join(process.cwd(), 'src/lib/i18n/use-format-date.ts'), 'utf8')

  it('is a client module', () => {
    expect(src.split(/\r?\n/)[0]).toContain('use client')
  })

  it('takes the locale from the same source as every other translated string', () => {
    // Not from `document.documentElement.lang` or a cookie read at render
    // time: the locale is not knowable during SSR, so seeding from it would
    // hydration-mismatch. useLocale seeds 'en' and corrects in an effect, and
    // this follows that rather than inventing a second pattern.
    expect(src).toContain("from './use-locale'")
    expect(src).toContain('useLocale()')
  })

  it('does not re-implement the formatting', () => {
    expect(src).toContain("from '@/lib/utils'")
    expect(src).not.toContain('toLocaleDateString')
  })
})
