// ─── Is a blog post the article its own metadata promises? ──────────────────
//
// FOUND 20 September 2026. Six of the forty-two published posts had a body
// that was a different article from their title, description, excerpt, social
// image and structured data. Not a drifting emphasis: a wholly different
// subject.
//
//   "Symbolism in Poetry: GCSE English Guide"      -> a Macbeth/Hamlet comparison
//   "Gothic literature techniques for GCSE"        -> AQA Language Paper 1 Q4
//   "Shakespeare Sonnet Analysis for GCSE"         -> AQA Language Paper 1 reading
//   "GCSE English Literature Revision Tips"        -> AQA Language Paper 1 Q5
//   "GCSE English Prose Analysis Techniques"       -> AQA Language Q5, both papers
//   "...Paper 1: Transactional Writing"            -> an Edexcel Literature guide
//
// All six were dated 2026-05-12 and all six had Arabic siblings, so the wrong
// bodies were translated too. They had been live for four months.
//
// NOTHING COULD HAVE CAUGHT THIS. The frontmatter is valid, the MDX compiles,
// the placeholder gate reads tokens, the tests read frontmatter. Every check
// in the repository looks at the post's metadata OR its body, and the defect
// only exists in the relationship between them.
//
// THE RULE, and why it is this one. A post's `# H1` must share at least one
// specific word with its own `title`. Generic exam vocabulary does not count:
// "GCSE", "English", "Paper", "Question", "revision" and their like appear
// across the whole corpus, so sharing one proves nothing. Words are stemmed
// crudely so "support" matches "supporting".
//
// Measured against the corpus before being adopted, which is the only way to
// know a rule like this is usable: of seventeen posts carrying an H1, the six
// broken ones shared ZERO specific words and every sound one shared at least
// TWO. There is no borderline case to argue about, and no false positive to
// teach people to ignore the check.
//
// DO NOT EXTEND THIS TO src/app, and here is the measurement rather than an
// opinion. The same rule was run read-only over every page.tsx with a static
// metadata title and a resolvable H1: 289 pages, 7 flagged, and all 7 were
// false positives on inspection. Two were marketing headlines that legitimately
// differ from a title ("Become an Examiner & Marker" over "Mark English scripts
// for the board you know best"), three were this file's own generic-word list
// eating the only shared words ("How to get a Grade 7" against "How to hit
// Grade 7"), and two were the H1 extractor capturing JSX from a dynamic
// heading. Zero real defects.
//
// So the blog fault does not generalise, and a 2.4% false-positive rate on
// pages against 0% on posts is the difference between a check people trust and
// one they learn to skip. A page's H1 is a headline; a post's H1 is its title
// written twice. That is why the rule works on one and not the other.
//
// WHAT IT DOES NOT COVER, said plainly. Twenty-four posts have no H1 at all -
// they open straight into prose - and this rule cannot see them. Their
// openings were read by hand on 20 September and all twenty-four match their
// titles, but that is a fact about one afternoon, not a guarantee. A post with
// no H1 is not checked by anything.
//
//   node scripts/check-post-body-matches-title.mjs

import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const BLOG_DIR = join(process.cwd(), 'content/blog')

/**
 * Words that say nothing about WHICH article a post is.
 *
 * Every one of these appears across the corpus. If the list were shorter the
 * check would pass posts that share only "GCSE English", which is every post
 * on the site; if it were longer it would start failing sound ones. It is
 * deliberately a list of exam-domain furniture, not a general stop-word list.
 */
const GENERIC = new Set([
  'the','a','an','for','to','of','and','in','on','how','what','your','you','this','that','it','is',
  'are','can','will','from','about','their','they','not','but','more','most','one','two','all','way',
  'get','make','use','using','when','why','who','which','than','with','at','do','does','be','as','by',
  'gcse','igcse','english','guide','revision','tips','exam','exams','student','students','level',
  'grade','grades','mark','marks','answer','answers','explained','paper','papers','question',
  'questions','section','part','top','best','key','need','know','into','like','without','help',
])

/**
 * Crude stemmer. "supporting" and "support" are the same word for this.
 *
 * The trailing `e` is stripped as a second pass and not as part of the first:
 * without it "techniques" stems to "techniqu" while "technique" stems to
 * "technique", so the singular and the plural of the SAME word would not have
 * matched each other. Caught by a test written to pin the stemmer's output,
 * which is the only reason it was noticed.
 */
const stem = (word) => word.replace(/(ing|ed|es|s)$/, '').replace(/e$/, '')

export function specificWords(text) {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((word) => word.length > 2 && !GENERIC.has(word))
      .map(stem),
  )
}

/**
 * Every published post whose H1 shares no specific word with its title.
 *
 * `withH1` is returned alongside so a caller can tell "nothing mismatched"
 * from "nothing was read", which produce the same empty array.
 */
export function findMismatchedPosts() {
  const mismatched = []
  let published = 0
  let withH1 = 0

  for (const name of readdirSync(BLOG_DIR)) {
    if (!name.endsWith('.mdx')) continue
    // Locale variants are the same post translated. Their titles are in
    // another language and their H1s often are not, so comparing the two
    // would fail every translated post on the site.
    if (/\.(ar|es)\.mdx$/.test(name)) continue

    const text = readFileSync(join(BLOG_DIR, name), 'utf8')
    const end = text.indexOf('\n---', 3)
    if (end === -1) continue
    const frontmatter = text.slice(0, end)
    if (/^draft:\s*true\s*$/m.test(frontmatter)) continue
    published += 1

    const title = (frontmatter.match(/^title:\s*'?"?(.+?)'?"?\s*$/m) || [])[1] || ''
    const h1 = (text.slice(end + 4).match(/^#\s+(.+)$/m) || [])[1] || ''
    if (!h1) continue
    withH1 += 1

    const fromTitle = specificWords(title)
    const shared = [...specificWords(h1)].filter((word) => fromTitle.has(word))
    if (shared.length === 0) mismatched.push({ file: `content/blog/${name}`, title, h1 })
  }

  return { mismatched, published, withH1 }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const { mismatched, published, withH1 } = findMismatchedPosts()

  console.log('')
  console.log(`${published} published post(s), ${withH1} of them carrying an H1.`)
  console.log(`${published - withH1} have no H1 and are NOT covered by this check.`)

  if (mismatched.length) {
    console.log('')
    console.log(`✗ ${mismatched.length} post(s) whose body is not the article the metadata promises:`)
    for (const m of mismatched) {
      console.log('')
      console.log(`  ${m.file}`)
      console.log(`      title: ${m.title}`)
      console.log(`      h1   : ${m.h1}`)
    }
    console.log('')
    console.log('  Fix the metadata, fix the body, or hold the post back with draft: true.')
    console.log('')
    process.exit(1)
  }

  console.log('Every post with an H1 is the article its title promises.')
}
