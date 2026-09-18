import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { lookup } from '@/lib/i18n/dictionary'

/**
 * Landmark names were announced in English to every Arabic reader.
 *
 * THE DEFECT (19 September 2026). `<nav aria-label="Main navigation">` in
 * header.tsx, `<nav aria-label="Mobile navigation">` twenty lines away from a
 * `t(link.labelKey)` call in the same file, and four hard-coded labels on the
 * settings page. The footer had no accessible name at all.
 *
 * An `aria-label` is the element's accessible NAME. On /ar the page is marked
 * `lang="ar"`, so a screen reader reads those English strings with Arabic
 * pronunciation rules - the worst of both. The reader is told the region is
 * called "Main navigation" while every visible word around it is Arabic.
 *
 * Three of the four keys already existed - nav.main, nav.mobile,
 * layout.region.header, layout.region.footer - and had simply never been
 * wired to the elements they were written for.
 *
 * WHAT THIS DELIBERATELY DOES NOT DO. The wider A11Y-5 plan also wanted
 * `lang="en" dir="ltr"` wrappers around the /revision and /resources subtrees,
 * on the premise that they are English by design. They are not: 234 files
 * under /revision and 140 under /resources resolve strings through the
 * dictionary, and some of those strings are Arabic prose. Forcing them LTR and
 * announcing them as English would create a NEW WCAG 3.1.2 failure across the
 * two largest trees, against exactly the Arabic-speaking children the item
 * exists to serve. Not done, and recorded here so nobody re-derives it.
 */

const header = readFileSync(join(process.cwd(), 'src/components/layout/header.tsx'), 'utf8')
const footer = readFileSync(join(process.cwd(), 'src/components/layout/footer.tsx'), 'utf8')
const settings = readFileSync(join(process.cwd(), 'src/app/dashboard/settings/page.tsx'), 'utf8')

const KEYS = [
  'nav.main',
  'nav.mobile',
  'layout.region.header',
  'layout.region.footer',
  'settings.aria.password_requirements',
  'settings.aria.comms_nav',
  'settings.aria.subscription_nav',
  'settings.aria.privacy_nav',
]

describe('the keys behind the labels', () => {
  it.each(KEYS)('%s is translated, not just present', (key) => {
    const en = lookup(key, 'en')
    const ar = lookup(key, 'ar')
    expect(en.length, `${key} has no English`).toBeGreaterThan(2)
    // An untranslated key falls back to English, which is the defect wearing
    // a dictionary entry. Require the Arabic to differ and to be Arabic script.
    expect(ar, `${key} falls back to English in Arabic`).not.toBe(en)
    expect(ar, `${key} Arabic is not Arabic script`).toMatch(/[؀-ۿ]/)
  })
})

describe('the site landmarks', () => {
  it('names the main navigation from the dictionary', () => {
    expect(header).toContain("aria-label={t('nav.main')}")
    expect(header).not.toContain('aria-label="Main navigation"')
  })

  it('names the mobile navigation from the dictionary', () => {
    expect(header).toContain("aria-label={t('nav.mobile')}")
    expect(header).not.toContain('aria-label="Mobile navigation"')
  })

  it('gives the header an accessible name', () => {
    expect(header).toContain("aria-label={t('layout.region.header')}")
  })

  it('gives the footer one at all, which it never had', () => {
    expect(footer).toContain("aria-label={t('layout.region.footer')}")
  })
})

describe('the settings page', () => {
  it.each([
    'settings.aria.password_requirements',
    'settings.aria.comms_nav',
    'settings.aria.subscription_nav',
    'settings.aria.privacy_nav',
  ])('resolves %s through the dictionary', (key) => {
    expect(settings).toContain(`aria-label={t('${key}')}`)
  })

  it('leaves no hard-coded English label behind', () => {
    for (const literal of [
      'Password requirements',
      'Communication preferences navigation',
      'Subscription navigation',
      'Privacy settings navigation',
    ]) {
      expect(settings, `${literal} is still hard-coded`).not.toContain(`aria-label="${literal}"`)
    }
  })
})

// ─── The strand that was NOT done, and must not be re-derived ───────────

describe('the /revision and /resources subtrees', () => {
  function walk(dir: string, out: string[] = []): string[] {
    let names: string[]
    try {
      names = readdirSync(dir)
    } catch {
      return out
    }
    for (const n of names) {
      const full = join(dir, n)
      if (statSync(full).isDirectory()) walk(full, out)
      else if (/\.tsx?$/.test(n)) out.push(full)
    }
    return out
  }

  it('are not English-only, so must never be forced to lang="en"', () => {
    // The evidence, asserted rather than asserted-in-a-comment: if these trees
    // were English by design this count would be zero, and the wrapper the
    // original plan wanted would be harmless. It is not.
    const files = [
      ...walk(join(process.cwd(), 'src/app/revision')),
      ...walk(join(process.cwd(), 'src/app/resources')),
    ]
    const i18nAware = files.filter((f) => /@\/lib\/i18n/.test(readFileSync(f, 'utf8')))
    expect(i18nAware.length).toBeGreaterThan(100)
  })

  it('carry no lang override today', () => {
    for (const layout of ['src/app/revision/layout.tsx', 'src/app/resources/layout.tsx']) {
      const src = readFileSync(join(process.cwd(), layout), 'utf8')
      expect(src, `${layout} now forces a language`).not.toMatch(/lang="en"/)
    }
  })
})
