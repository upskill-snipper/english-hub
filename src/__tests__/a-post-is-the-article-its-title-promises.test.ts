import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { findMismatchedPosts, specificWords } from '../../scripts/check-post-body-matches-title.mjs'

/**
 * Six published posts were not the articles their own metadata described.
 *
 * FOUND 20 September 2026, by sweeping a dimension nothing had swept: the
 * relationship between a post's metadata and its body. Every existing check
 * reads one or the other. The defect lives only in the gap.
 *
 *   "Symbolism in Poetry: GCSE English Guide"    -> a Macbeth/Hamlet comparison
 *   "Gothic literature techniques for GCSE"      -> AQA Language Paper 1 Q4
 *   "Shakespeare Sonnet Analysis for GCSE"       -> AQA Language Paper 1 reading
 *   "GCSE English Literature Revision Tips"      -> AQA Language Paper 1 Q5
 *   "GCSE English Prose Analysis Techniques"     -> AQA Language Q5, both papers
 *   "...Paper 1: Transactional Writing"          -> an Edexcel Literature guide
 *
 * Not drift. A reader searching for Gothic techniques, clicking a result
 * titled "Gothic literature techniques for GCSE", landed on a guide to
 * answering an evaluation question. The title, description, excerpt, Open
 * Graph image and Article JSON-LD headline all described the article that was
 * not there. All six were dated 2026-05-12, from one content batch, and all
 * six had Arabic siblings, so somebody paid to translate the wrong bodies.
 *
 * WHAT THIS MEANS COMMERCIALLY, because it is not only a correctness bug: the
 * site does not cover five topics it appears to cover. Each gap is hidden by a
 * page that looks like it fills it.
 *
 * HELD BACK, NOT REWRITTEN. Five of the six bodies are sound articles under
 * the wrong label, so the minimal honest fix looks like retitling them. It is
 * not, and the reason is worth recording: retitled to match their bodies, four
 * of the five become near-duplicate AQA Paper 1 guides competing with two that
 * already exist. Choosing between retitle, consolidate, rewrite and delete is
 * an editorial decision, and writing five new public titles would be making
 * five new public claims. Holding them back makes none and is one flag to
 * reverse.
 *
 * MUTATIONS RUN, each verified to have altered the file before the run:
 *
 *   `draft: true` cleared from symbolism-in-poetry-gcse.mdx   3 of 11 failed
 *   the generic-word list emptied, so "GCSE English" counts   3 of 11 failed
 *
 * The second matters more than it looks. A check whose stop list drifts back
 * towards nothing passes every post on a site where every title contains
 * "GCSE English", and goes on printing that everything is fine.
 */

const ROOT = process.cwd()

describe('the check is looking at the real corpus', () => {
  it('read a realistic number of posts', () => {
    // Vacuity guard. An empty `mismatched` from a walker that read no files is
    // indistinguishable from a clean corpus, and this repository keeps finding
    // exactly that shape.
    const { published, withH1 } = findMismatchedPosts()
    expect(published).toBeGreaterThan(30)
    expect(withH1).toBeGreaterThan(8)
  })

  it('no published post is a different article from its title', () => {
    const { mismatched } = findMismatchedPosts()
    const named = mismatched.map(
      (m: { file: string; title: string; h1: string }) =>
        `${m.file}\n  title: ${m.title}\n  h1: ${m.h1}`,
    )
    expect(named, 'the body is not the article the metadata promises').toEqual([])
  })

  it('and reports how many posts it cannot cover, rather than implying none', () => {
    // Two dozen posts have no H1 and this rule cannot see them. A check that
    // said "every post is fine" while silently skipping 24 of 36 would be the
    // defect this file exists because of, one level up.
    const { published, withH1 } = findMismatchedPosts()
    expect(published - withH1).toBeGreaterThan(0)
  })
})

describe('the rule separates the six from the rest with room to spare', () => {
  it('generic exam vocabulary counts for nothing', () => {
    // If "GCSE" or "English" counted, every post on the site would match every
    // other post's title and the check would pass everything.
    expect([...specificWords('GCSE English Revision Guide Paper 1 Question 5')]).toEqual([])
  })

  it('but a real subject word does', () => {
    expect([...specificWords('Macbeth')]).toEqual(['macbeth'])
    expect([...specificWords('Gothic literature techniques')]).toEqual([
      'gothic',
      'literatur',
      'techniqu',
    ])
  })

  it('and a singular matches its own plural', () => {
    // The stemmer's first version stripped "es" but not a bare trailing "e",
    // so "techniques" became "techniqu" and "technique" stayed "technique".
    // A post titled "technique" whose H1 said "techniques" would have been
    // reported as a different article.
    for (const [a, b] of [
      ['technique', 'techniques'],
      ['essay', 'essays'],
      ['support', 'supporting'],
      ['structure', 'structures'],
    ]) {
      expect([...specificWords(a)], `${a} and ${b} do not match`).toEqual([...specificWords(b)])
    }
  })

  it('and a word in a different grammatical form still matches', () => {
    // "Support GCSE English Revision: A Parent Guide" against
    // "Parent Guide to Supporting GCSE English Revision" - a real pair from the
    // corpus, and the reason the stemmer exists. Without it that post fails.
    const title = specificWords('Support GCSE English Revision: A Parent Guide')
    const h1 = specificWords('Parent Guide to Supporting GCSE English Revision')
    expect([...h1].filter((w) => title.has(w)).sort()).toEqual(['parent', 'support'])
  })

  it('the six real titles share nothing with the six real bodies', () => {
    // The measurement the rule was chosen on, pinned so it cannot quietly stop
    // being true. These are the exact strings from the files.
    const pairs: [string, string][] = [
      ['Symbolism in Poetry: GCSE English Guide', 'Macbeth vs Hamlet: GCSE Comparison Guide'],
      [
        'Gothic literature techniques for GCSE',
        'How to Answer AQA GCSE English Language Paper 1, Question 4',
      ],
      [
        'Shakespeare Sonnet Analysis for GCSE',
        'AQA GCSE English Language Paper 1: Reading Questions Explained',
      ],
      [
        'GCSE English Literature Revision Tips',
        'AQA GCSE English Language Paper 1, Question 5: Creative Writing',
      ],
      [
        'GCSE English Prose Analysis Techniques',
        'How to Answer AQA GCSE English Language Question 5 (Paper 1 & Paper 2)',
      ],
      [
        'GCSE English Language Paper 1: Transactional Writing',
        'Edexcel GCSE English Literature Revision Guide',
      ],
    ]
    for (const [title, h1] of pairs) {
      const t = specificWords(title)
      const shared = [...specificWords(h1)].filter((w) => t.has(w))
      expect(shared, `"${title}" would not have been caught`).toEqual([])
    }
  })
})

describe('all six are off the site, in both languages', () => {
  const SLUGS = [
    'gcse-english-language-paper-1-transactional-writing',
    'gcse-english-literature-revision-tips',
    'gcse-english-prose-analysis-techniques',
    'gothic-literature-techniques-gcse',
    'shakespeare-sonnet-analysis-gcse',
    'symbolism-in-poetry-gcse',
  ]

  it('every one is marked draft, English and Arabic alike', () => {
    // The Arabic siblings carry the same wrong bodies. Holding back only the
    // English half would leave /ar/blog/<slug> serving the same mismatch to
    // the audience the Gulf route was built for.
    for (const slug of SLUGS) {
      for (const suffix of ['.mdx', '.ar.mdx']) {
        const text = readFileSync(join(ROOT, `content/blog/${slug}${suffix}`), 'utf8')
        expect(/^draft:\s*true\s*$/m.test(text), `${slug}${suffix} is still published`).toBe(true)
      }
    }
  })

  it('and none of them is in the catalogue or the slug list', async () => {
    const { getAllBlogPosts, getBlogSlugs } = await import('@/lib/blog/posts')
    const live = getAllBlogPosts().map((p) => p.slug)
    expect(live.length, 'the catalogue is empty, so this proves nothing').toBeGreaterThan(20)
    for (const slug of SLUGS) {
      expect(live, `${slug} is still in the catalogue`).not.toContain(slug)
      expect(getBlogSlugs(), `${slug} is still a live URL`).not.toContain(slug)
    }
  })

  it('and the bodies are still there, unedited', async () => {
    // Held back, not deleted. Whichever way Calum decides, the writing has to
    // survive the decision.
    for (const slug of SLUGS) {
      const text = readFileSync(join(ROOT, `content/blog/${slug}.mdx`), 'utf8')
      expect(text.split(/\s+/).length, `${slug} has lost its body`).toBeGreaterThan(500)
    }
  })
})
