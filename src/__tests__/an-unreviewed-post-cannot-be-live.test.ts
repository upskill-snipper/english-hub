import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import {
  scanPlaceholders,
  isDraftContent,
  TOKENS,
  EDITORIAL_LABEL,
} from '../../scripts/check-placeholders.mjs'

/**
 * A blog post that said, to its readers, that it should not have been
 * published (19 September 2026).
 *
 * `content/blog/gcse-english-language-paper-1-transactional-writing.mdx` was
 * live on theenglishhub.app. Confirmed in a browser before the change: HTTP
 * 200, two "HUMAN REVIEW REQUIRED" blockquotes rendered into the article
 * body, and the phrase "before publication" visible on the page.
 *
 * Three things were wrong with it at once:
 *
 *   Its title, slug, description and excerpt describe transactional writing
 *   for English Language Paper 1. Its body is headed "Edexcel GCSE English
 *   Literature Revision Guide" and is about Literature AOs. A reader arriving
 *   from search got a different article from the one they clicked.
 *
 *   Its own first note says the AO labels are the WRONG MAPPING - the draft
 *   labels context as AO2 and evaluation as AO3 - and that "the body below
 *   retains the draft's labelling pending that check". Seventeen AO
 *   references in the English body, all under that admission. This is a
 *   revision site for children taking these exams.
 *
 *   The Arabic sibling carries the same body with the same two notes
 *   translated, so both locales were serving it.
 *
 * WHY IT SURVIVED. `scripts/check-placeholders.mjs` scans `content/`, scans
 * `.mdx`, and ran on every commit. It passed every time, because its six
 * tokens did not include the one this post used. The gate proved its own
 * configuration, not the absence of editorial notes from live pages - the
 * shape CLAUDE.md names, found again.
 *
 * MUTATIONS RUN, since a test written after a fix proves nothing until it has
 * been shown to fail. Four, each one reverting a separate half of the change,
 * each verified to have actually altered the file before the run:
 *
 *   `[HUMAN REVIEW` out of TOKENS                     2 of 15 failed
 *   the structural `> **[` rule disabled              1 of 15 failed
 *   the catalogue's draft filter removed              2 of 15 failed
 *   the per-post draft check removed                  1 of 15 failed
 *
 * The last one fails only one test because `getBlogSlugs()` already 404s the
 * route: it is the belt to the slug list's braces, and it is what stops
 * `getBlogPost(slug, 'ar')` serving the translated copy.
 *
 * NOT FIXED, and deliberately so: the post is held back, not corrected.
 * Rewriting the body to match its title means writing a transactional-writing
 * article from scratch, and correcting the AO labels needs the current
 * Edexcel specification. That is Calum's, not a code change, and guessing at
 * a tariff on a page children revise from is how the wrong version got here.
 */

const ROOT = process.cwd()
const SLUG = 'gcse-english-language-paper-1-transactional-writing'
const EN = readFileSync(join(ROOT, `content/blog/${SLUG}.mdx`), 'utf8')
const AR = readFileSync(join(ROOT, `content/blog/${SLUG}.ar.mdx`), 'utf8')

describe('the gate can see the marker it missed', () => {
  it('scanned a realistic number of files', () => {
    // Vacuity guard. "No tokens found" from a walker that read nothing is the
    // exact shape of green result this file exists because of. The gate reads
    // ~3,400 published files; anything near zero means the walk broke.
    const { scanned } = scanPlaceholders()
    expect(scanned).toBeGreaterThan(2_000)
  })

  it('[HUMAN REVIEW is now one of the tokens', () => {
    expect(TOKENS).toContain('[HUMAN REVIEW')
  })

  it('and the six it already had are still there', () => {
    // Adding one must not be how another gets dropped.
    for (const token of [
      '[DSL_',
      '[FACT-CHECK',
      '[Address —',
      '[Address -',
      '[PLACEHOLDER',
      '[VERIFY',
    ]) {
      expect(TOKENS, `${token} has been dropped from the gate`).toContain(token)
    }
  })

  it('no published file carries any of them', () => {
    const { hits } = scanPlaceholders()
    const named = hits.map(
      (h: { file: string; line: number; token: string }) => `${h.file}:${h.line}  ${h.token}`,
    )
    expect(named, 'these are visible to readers on a live page').toEqual([])
  })
})

describe('the structural rule, which is what covers Arabic', () => {
  let fixture: string

  beforeAll(() => {
    fixture = mkdtempSync(join(tmpdir(), 'placeholder-gate-'))
    // The REAL Arabic note, copied from the file it was found in. A test that
    // invented its own Arabic would prove the rule matches that invention.
    const arabicNote = AR.split('\n').find((l) => l.startsWith('> **['))!
    writeFileSync(join(fixture, 'arabic.mdx'), `---\nslug: x\n---\n\n${arabicNote}\n`, 'utf8')
    writeFileSync(
      join(fixture, 'english.mdx'),
      '---\nslug: y\n---\n\n> **[HUMAN REVIEW REQUIRED]:** check this.\n',
      'utf8',
    )
    // A published post that merely quotes a bracket, which must NOT fail.
    writeFileSync(
      join(fixture, 'innocent.mdx'),
      '---\nslug: z\n---\n\n> A quotation, **[sic]**, inside a blockquote.\n\nAnd **[bold]** text.\n',
      'utf8',
    )
  })

  afterAll(() => rmSync(fixture, { recursive: true, force: true }))

  it('catches an editorial note whatever language it is in', () => {
    // The English token list would never have seen the Arabic notes - roughly
    // a third of this site's content is Arabic. This is the assertion that
    // says the fix is not English-only: the same shape, two scripts, caught
    // by the structure rather than by the words.
    const { hits, scanned } = scanPlaceholders([fixture])
    expect(scanned, 'the fixture directory was not read at all').toBe(3)
    const arabic = hits.filter((h: { file: string }) => h.file.endsWith('arabic.mdx'))
    expect(arabic).toHaveLength(1)
    expect(arabic[0].token).toBe(EDITORIAL_LABEL)
  })

  it('and reports an English one under its token, the more specific diagnosis', () => {
    const { hits } = scanPlaceholders([fixture])
    const english = hits.filter((h: { file: string }) => h.file.endsWith('english.mdx'))
    expect(english).toHaveLength(1)
    expect(english[0].token).toBe('[HUMAN REVIEW')
  })

  it('and does not fire on ordinary bold or an ordinary blockquote', () => {
    // The false-positive counterweight. A rule that failed every blockquote
    // would satisfy both tests above and make the gate unusable, so somebody
    // would switch it off - which is how a gate really dies.
    const { hits } = scanPlaceholders([fixture])
    expect(hits.filter((h: { file: string }) => h.file.endsWith('innocent.mdx'))).toEqual([])
  })
})

describe('the post is not on the site', () => {
  it('both locale files are marked draft', () => {
    expect(isDraftContent(EN, 'x.mdx'), 'the English post is still published').toBe(true)
    expect(isDraftContent(AR, 'x.mdx'), 'the Arabic post is still published').toBe(true)
  })

  it('and the draft flag is read strictly, not matched loosely anywhere in the prose', () => {
    // A loose match would let the WORD "draft" in an article about drafting an
    // essay take that article out of the gate's sight - which is the failure
    // this file is about, rebuilt one level down.
    expect(isDraftContent('---\nslug: x\n---\n\nWrite a first draft: true skill.\n', 'a.mdx')).toBe(
      false,
    )
    expect(isDraftContent('---\ndraft: false\n---\nbody\n', 'a.mdx')).toBe(false)
    expect(isDraftContent('---\ndraft: true\n---\nbody\n', 'a.mdx')).toBe(true)
  })

  it('and a .ts file is never treated as draftable', () => {
    expect(isDraftContent('---\ndraft: true\n---\n', 'a.ts')).toBe(false)
  })

  it('the two notes are still in the file, unedited', () => {
    // Held back, NOT quietly tidied. Deleting the notes would leave a live
    // page whose AO labels are still wrong and no longer say so, which is
    // strictly worse than the defect.
    expect(EN.split('\n').filter((l) => l.includes('[HUMAN REVIEW')).length).toBe(2)
    expect(AR.split('\n').filter((l) => l.startsWith('> **['))).toHaveLength(2)
  })
})

describe('the loader honours the flag', () => {
  // These run against the real corpus rather than a fixture: the question is
  // whether THIS post is off the site, and a fixture cannot answer that.
  it('it is not in the catalogue', async () => {
    const { getAllBlogPosts } = await import('@/lib/blog/posts')
    const slugs = getAllBlogPosts().map((p) => p.slug)
    expect(slugs.length, 'the catalogue is empty, so this proves nothing').toBeGreaterThan(20)
    expect(slugs).not.toContain(SLUG)
  })

  it('it is not in the slug list, so /blog/<slug> 404s and the sitemap drops it', async () => {
    const { getBlogSlugs } = await import('@/lib/blog/posts')
    const slugs = getBlogSlugs()
    expect(slugs.length).toBeGreaterThan(20)
    expect(slugs).not.toContain(SLUG)
  })

  it('and asking for it directly returns null in every locale', async () => {
    const { getBlogPost } = await import('@/lib/blog/posts')
    // Arabic specifically: the sibling file exists and parses. Without the
    // base-file check, `getBlogPost(slug, 'ar')` would have gone on serving
    // the translated copy of the same unreviewed body.
    expect(getBlogPost(SLUG, 'en')).toBeNull()
    expect(getBlogPost(SLUG, 'ar')).toBeNull()
    expect(getBlogPost(SLUG, 'es')).toBeNull()
  })

  it('while a published post with an Arabic sibling still resolves in both', async () => {
    // The counterweight. A draft filter that took every post with a
    // translation off the site would pass every assertion above.
    const { getAllBlogPosts, getBlogPost, hasArabicVariant } = await import('@/lib/blog/posts')
    const withArabic = getAllBlogPosts().find((p) => hasArabicVariant(p.slug))
    expect(withArabic, 'no published post has an Arabic variant to check against').toBeDefined()
    expect(getBlogPost(withArabic!.slug, 'en')).not.toBeNull()
    expect(getBlogPost(withArabic!.slug, 'ar')).not.toBeNull()
  })
})
