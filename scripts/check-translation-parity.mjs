// ─── Is an Arabic post the whole of its English original? ───────────────────
//
// FOUND 20 September 2026. Four Arabic blog translations were missing between
// 43% and 59% of their English original's body. Not a paraphrase and not a
// looser register: whole sections absent, the article stopping partway.
//
//   gcse-english-prose-analysis-techniques   7 of 13 headings,  541 of 1,324 words
//   gothic-literature-techniques-gcse        8 of 14 headings,  567 of 1,332 words
//   shakespeare-sonnet-analysis-gcse        10 of 16 headings,  648 of 1,358 words
//   gcse-english-literature-revision-tips   12 of 16 headings,  746 of 1,307 words
//
// All four happened to be caught the same night for an unrelated reason - their
// English bodies were the wrong articles - so all four are already held back.
// That is luck, not a system, which is why this check exists. The Arabic
// pipeline has a known truncation problem: 150 of 4,063 UI strings stop
// mid-sentence. Nothing was looking for the same fault in the blog.
//
// THE THRESHOLDS, and how they were chosen. Measured across all 40 pairs
// before being fixed, because a ratio picked by intuition is a ratio that
// either cries wolf or sleeps:
//
//   sound translations   0.89 to 1.00 of the headings,  0.77 to 0.89 of the words
//   the four bad ones    0.54 to 0.75 of the headings,  0.41 to 0.57 of the words
//
// So 0.80 and 0.65 both sit inside a clear gap, and the two measures agree on
// every one of the 40. Neither is a judgement call about translation quality,
// which this cannot and should not assess.
//
// WHAT IT DOES NOT COVER. Whether the Arabic is any GOOD. It counts structure,
// nothing else. A fluent mistranslation and a stilted accurate one look
// identical to it, and the register problem across the Arabic surface is a
// separate, human question.
//
// A SEPARATE, DELIBERATE NON-FINDING recorded here so nobody re-raises it:
// every English post carrying a closing "Keep revising on The English Hub"
// section - 19 of 42 - has an Arabic sibling without one, and 0 of 40 Arabic
// posts have it in any form. That is NOT a conversion dead end. The article
// template adds a localised onward destination to every post in every locale
// (`ONWARD` in src/app/blog/[slug]/page.tsx carries `titleAr` and `blurbAr`),
// which the August 2026 internal-linking audit put there for exactly this
// reason. The gap is two contextual links and a sign-off, not a missing path
// to the product, and it is not worth writing Arabic copy for.
//
//   node scripts/check-translation-parity.mjs

import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const BLOG_DIR = join(process.cwd(), 'content/blog')

/** Minimum share of the English original's headings the translation must keep. */
export const MIN_HEADING_RATIO = 0.8
/** Minimum share of its words. */
export const MIN_WORD_RATIO = 0.65

const body = (text) => {
  const end = text.indexOf('\n---', 3)
  return end === -1 ? text : text.slice(end + 4)
}
const isDraft = (text) => /^draft:\s*true\s*$/m.test(text.slice(0, text.indexOf('\n---', 3)))
const headings = (text) => [...text.matchAll(/^#{1,3}\s+.+$/gm)].length
const wordCount = (text) => text.split(/\s+/).filter(Boolean).length

/**
 * Every published Arabic variant that is materially shorter than its original.
 *
 * `checked` is returned so a caller can tell "every translation is complete"
 * apart from "no pair was read", which are the same empty array.
 */
export function findTruncatedTranslations() {
  const truncated = []
  let checked = 0

  for (const name of readdirSync(BLOG_DIR)) {
    if (!name.endsWith('.ar.mdx')) continue
    const slug = name.slice(0, -'.ar.mdx'.length)
    const originalPath = join(BLOG_DIR, `${slug}.mdx`)
    if (!existsSync(originalPath)) {
      truncated.push({ slug, reason: 'no English original' })
      continue
    }

    const originalRaw = readFileSync(originalPath, 'utf8')
    // A held-back post is out of scope: its translation is not serving anyone.
    if (isDraft(originalRaw)) continue
    checked += 1

    const en = body(originalRaw)
    const ar = body(readFileSync(join(BLOG_DIR, name), 'utf8'))
    const headingRatio = headings(en) ? headings(ar) / headings(en) : 1
    const wordRatio = wordCount(en) ? wordCount(ar) / wordCount(en) : 1

    if (headingRatio < MIN_HEADING_RATIO || wordRatio < MIN_WORD_RATIO) {
      truncated.push({
        slug,
        headings: `${headings(ar)}/${headings(en)}`,
        words: `${wordCount(ar)}/${wordCount(en)}`,
        headingRatio: headingRatio.toFixed(2),
        wordRatio: wordRatio.toFixed(2),
      })
    }
  }

  return { truncated, checked }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { truncated, checked } = findTruncatedTranslations()

  console.log('')
  console.log(`${checked} published Arabic translation(s) compared with their originals.`)

  if (truncated.length) {
    console.log('')
    console.log(`✗ ${truncated.length} translation(s) are materially shorter than the original:`)
    for (const t of truncated) {
      console.log('')
      console.log(`  ${t.slug}`)
      if (t.reason) console.log(`      ${t.reason}`)
      else console.log(`      headings ${t.headings} (${t.headingRatio})   words ${t.words} (${t.wordRatio})`)
    }
    console.log('')
    process.exit(1)
  }

  console.log('Every published translation carries its original in full.')
}
