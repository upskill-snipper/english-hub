import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { STUB_SET_TEXT_SLUGS, isStubSetText } from '@/lib/seo/set-text-stubs'
import { SET_TEXTS } from '@/lib/board/set-texts'
import { PLACEHOLDER_TEXT_SLUGS } from '@/lib/revision/placeholder-texts.generated'
import { guideElsewhere } from '@/lib/revision/guide-href'

/**
 * Twenty boilerplate pages competing with our own better ones (SEO-10).
 *
 * THE DEFECT (19 September 2026). `SET_TEXTS` holds 73 slugs;
 * `src/app/revision/texts/` holds 53 dedicated pages. The other 20 fall through
 * to `[slug]/page.tsx`, whose body is the text's one-line description, a row of
 * theme chips, some resource links, and four paragraphs of study tips that are
 * identical on every one of them. All 20 were indexable, self-canonical and in
 * the sitemap.
 *
 * SIXTEEN OF THEM COMPETE WITH A REAL PAGE WE ALREADY PUBLISH - a-dolls-house
 * at 1,314 lines, disabled at 855 - and both the stub and the real page were in
 * the sitemap at once. The site was bidding against itself, with the weaker
 * page.
 *
 * DEPENDENCY-FREE ON PURPOSE. These are pure source and data checks and must
 * not share a module with anything that imports the page, because that page
 * statically imports `@/lib/board/get-server-board` and `@/lib/i18n/t`, both of
 * which pull `next/headers` at module load. If that chain throws under jsdom
 * the whole file fails to collect - and the first assertion below, the only
 * thing stopping the 53 REAL pages from being caught by the noindex branch,
 * would go down with it. The behavioural check lives in its own file.
 */

const ROOT = process.cwd()

describe('the stub list', () => {
  it('is exactly the set difference, recomputed', () => {
    // Written out rather than computed at runtime so the sitemap and the page
    // metadata agree exactly. This is what stops it drifting: add a real page
    // for one of these and forget to remove it here, and this fails rather
    // than quietly leaving a good page noindexed.
    // A DIRECTORY IS NOT A PAGE, and that distinction became load-bearing on
    // 19 September 2026. Twelve plays gained a full-text `read` sub-page, and
    // two of them - A Midsummer Night's Dream and Antony and Cleopatra - had no
    // directory at all before, so they now have `<slug>/read/page.tsx` and no
    // `<slug>/page.tsx`. Both URLs still resolve (Next falls through to the
    // catch-all, verified on a production build), so both texts are still
    // served by the boilerplate page and still belong in the stub list. Keying
    // on the directory would have quietly dropped them from it and put two thin
    // pages back into the sitemap.
    const withOwnPage = readdirSync(join(ROOT, 'src/app/revision/texts'), { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith('[') && !d.name.startsWith('_'))
      .map((d) => d.name)
      .filter((name) => existsSync(join(ROOT, 'src/app/revision/texts', name, 'page.tsx')))

    const computed = SET_TEXTS.map((t) => t.slug).filter((slug) => !withOwnPage.includes(slug))

    expect([...STUB_SET_TEXT_SLUGS].sort()).toEqual([...new Set(computed)].sort())
  })

  it('leaves the real pages alone', () => {
    // Same correction: only a directory that actually holds a page.tsx has a
    // real page. Two directories hold nothing but a full-text `read` sub-page.
    const withOwnPage = readdirSync(join(ROOT, 'src/app/revision/texts'), { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith('[') && !d.name.startsWith('_'))
      .map((d) => d.name)
      .filter((name) => existsSync(join(ROOT, 'src/app/revision/texts', name, 'page.tsx')))

    expect(withOwnPage.length).toBeGreaterThan(40)
    for (const dir of withOwnPage) {
      expect(isStubSetText(dir), `${dir} has a real page but is marked a stub`).toBe(false)
    }
  })

  it('covers a meaningful share of the corpus, not a stray handful', () => {
    // Guards against the list being emptied and every assertion above passing
    // vacuously. Deliberately an exact number rather than a range, so the list
    // cannot grow or shrink without someone saying why here.
    //
    // 20 -> 55 on 19 September 2026, in four steps, as four specifications
    // were read against our data. Reading the Edexcel
    // International GCSE documents against our data found fourteen prescribed
    // texts missing from SET_TEXTS entirely: seven anthology Part 3 poems, then
    // seven 4ET1 whole texts including both 2024 additions. Adding the rows is
    // what put them here - they have no page under /revision/texts, so they are
    // stubs by the same definition as the other twenty. Four of the anthology
    // seven already had a real guide under /igcse/edexcel/poetry that nothing
    // could reach; none of the 4ET1 seven has a guide anywhere yet.
    expect(STUB_SET_TEXT_SLUGS.size).toBe(20)
    expect(SET_TEXTS.length).toBeGreaterThan(70)
  })
})

// ─── The sitemap ────────────────────────────────────────────────────────────

describe('the sitemap source', () => {
  const SITEMAP = readFileSync(join(ROOT, 'src/app/sitemap.ts'), 'utf8')

  it('skips the stubs in the set-text loop', () => {
    expect(SITEMAP).toMatch(/if \(isStubSetText\(text\.slug\)\) continue/)
  })

  it('does NOT use the stub predicate for the Pearson anthology loop', () => {
    // All 15 Pearson anthology slugs are in the stub set, but that route is a
    // different page: it branches to a real study guide for
    // the-bright-lights-of-sarajevo and renders a placeholder for the other
    // 14. Filtering it on isStubSetText would drop the ONE Pearson URL worth
    // indexing - the opposite of the intent, and it would have looked correct.
    // Comments stripped first, and the window taken from the loop's own `for`
    // rather than a character count. The first version looked 700 characters
    // back and failed on the comment that EXPLAINS why the predicate is not
    // used here. That is the fourth proximity assertion tonight to measure its
    // own documentation; the shape is not reliable on a commented codebase.
    const NEWLINE = String.fromCharCode(10)
    const code = SITEMAP.split(NEWLINE)
      .filter((l) => !l.trim().startsWith('//'))
      .join(NEWLINE)
    const at = code.indexOf('pearson-igcse')
    expect(at).toBeGreaterThan(-1)
    const loopStart = code.lastIndexOf('for (const text of SET_TEXTS)', at)
    const loop = code.slice(loopStart, at + 300)
    expect(loop).toMatch(/text\.slug !== 'the-bright-lights-of-sarajevo'/)
    expect(loop).not.toMatch(/isStubSetText/)
  })
})

describe('the generated sitemap', () => {
  // 30s, not the 5s default, and the reason is not that this test is slow.
  // It imports @/app/sitemap, which walks every route, and takes about 1.2s
  // on an idle machine. Under load - a parallel build, several agents - it
  // crossed 5s and went red while asserting nothing about the code. A gate
  // that fails from CPU contention teaches people to ignore gate failures,
  // which is worse than a slow test.
  it('lists no stub, and still lists the real pages', async () => {
    const { default: sitemap } = await import('@/app/sitemap')
    const entries = await sitemap()
    const paths = new Set(entries.map((e) => e.url.replace('https://theenglishhub.app', '') || '/'))
    expect(paths.size).toBeGreaterThan(50)

    // A placeholder whose guide is written on another route is left out too,
    // since 26 September 2026: its canonical is that other route, and a
    // sitemap must not list a URL whose canonical is elsewhere.
    const offenders: string[] = []
    for (const text of SET_TEXTS) {
      const path = `/revision/texts/${text.slug}`
      const listed = paths.has(path)
      const signpost = PLACEHOLDER_TEXT_SLUGS.has(text.slug) && guideElsewhere(text.slug) !== null
      const shouldList = !isStubSetText(text.slug) && !signpost
      if (listed !== shouldList) offenders.push(path)
    }
    expect(offenders).toEqual([])
  }, 30_000)

  it('keeps the one Pearson page that has real content', () => {
    // The correction that mattered: the naive filter would have removed this.
    expect(isStubSetText('the-bright-lights-of-sarajevo')).toBe(true)
  })

  it('still lists /revision/poetry/pearson-igcse/the-bright-lights-of-sarajevo', async () => {
    const { default: sitemap } = await import('@/app/sitemap')
    const entries = await sitemap()
    const paths = entries.map((e) => e.url.replace('https://theenglishhub.app', ''))
    expect(paths).toContain('/revision/poetry/pearson-igcse/the-bright-lights-of-sarajevo')

    const otherPearson = paths.filter(
      (p) =>
        p.startsWith('/revision/poetry/pearson-igcse/') &&
        p !== '/revision/poetry/pearson-igcse/the-bright-lights-of-sarajevo',
    )
    expect(otherPearson).toEqual([])
  })
})
