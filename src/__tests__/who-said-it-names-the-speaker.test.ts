import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

/**
 * The "who says this?" quiz on a set-text page offers speakers, not labels.
 *
 * THE DEFECT, found 26 September 2026. Each page builds the quiz from its
 * quotation cards, taking the speaker from the card's `who` label by splitting
 * on an em dash. Fifteen pages write their labels with a spaced hyphen
 * ("Scrooge - Stave One"), so nothing was split: every option carried its
 * place in the text, and one question could offer "Scrooge - Stave One" and
 * "Scrooge - Stave Five", marking one right and one wrong, when the question
 * asks only who is speaking.
 *
 * This applies each page's own split to each of its labels, so it fails on a
 * page whose split and labels disagree, whichever way round.
 */

const ROOT = join(process.cwd(), 'src/app')

function pages(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? pages(join(dir, e.name)) : e.name === 'page.tsx' ? [join(dir, e.name)] : [],
  )
}

const unescape = (s: string) =>
  s.replace(/\\u([0-9a-fA-F]{4})/g, (_, h: string) => String.fromCharCode(parseInt(h, 16)))

/** The separator a page passes to q.who.split(...), as a string or a RegExp. */
function separatorOf(src: string): string | RegExp | undefined {
  const m = /q\.who\.split\((\/(?:\\\/|[^/\n])+\/[a-z]*|'(?:\\.|[^'])*')\)/.exec(src)
  if (!m) return undefined
  const arg = m[1]
  if (arg.startsWith("'")) return unescape(arg.slice(1, -1))
  const end = arg.lastIndexOf('/')
  return new RegExp(unescape(arg.slice(1, end)), arg.slice(end + 1))
}

const QUIZ_PAGES = pages(ROOT)
  .map((file) => ({ file, src: readFileSync(file, 'utf8') }))
  .filter((p) => /quizQuotes=/.test(p.src) && /q\.who\.split\(/.test(p.src))

describe('the who-says-this quiz', () => {
  it('finds the pages that build it from who labels', () => {
    expect(QUIZ_PAGES.length).toBeGreaterThanOrEqual(20)
  })

  it('reduces every label to the speaker alone', () => {
    const wrong: string[] = []
    for (const { file, src } of QUIZ_PAGES) {
      const sep = separatorOf(src)
      expect(sep, `${file}: cannot read its split`).toBeDefined()
      const labels = [...src.matchAll(/\bwho:\s*(['"])((?:\\.|(?!\1).)*)\1/g)].map((m) =>
        unescape(m[2]),
      )
      for (const label of labels) {
        const speaker = label.split(sep!)[0].trim()
        if (/ [-—] /.test(speaker))
          wrong.push(`${file.slice(ROOT.length + 1)}: "${label}" gives "${speaker}"`)
      }
    }
    expect(wrong).toEqual([])
  })
})
