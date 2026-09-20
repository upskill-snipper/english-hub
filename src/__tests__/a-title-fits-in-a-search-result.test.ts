import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

/**
 * Fifty-six of sixty-five pages had a title too long to display, and the first
 * fix did not fix them.
 *
 * THE DEFECT. Measured 20 September 2026 by crawling all 1,329 live sitemap
 * URLs: 401 (30.2%) carried a title over 60 characters, 223 (16.8%) over 70.
 * Google shows roughly 60. The worst eight on the site were all in this one
 * section, topping out at 125 characters, and the cause was a template rather
 * than sixty-five separate mistakes:
 * ` · iLowerSecondary English · The English Hub` is 43 characters, so any page
 * title longer than seventeen exceeded the limit. Almost every page title then
 * named the qualification a SECOND time, because whoever wrote it could not see
 * the template from the page.
 *
 * WHY THIS FILE IS WORTH READING TWICE. The first version of this guard, and
 * the commit it shipped with, were wrong in the way this repository keeps being
 * wrong. Its `titleOf()` took the FIRST `title:` string literal in the file. In
 * this section `openGraph` is declared ABOVE `title` in the metadata object, so
 * it read the social card's title, not the page's. The retitle script had the
 * same bug, so it shortened 51 openGraph titles and left every real `title:`
 * untouched - and the guard went green because both halves were reading the
 * same wrong field.
 *
 * The commit message said "none of the 64 exceeds 60". Forty of them did.
 * /ks3/ilowersecondary/practice/paper-3 was live at 87 characters reading
 * "Practice Paper 3: The Natural World - iLowerSecondary English ·
 * iLowerSecondary English", saying the qualification twice, for the hour
 * between that commit and this one. It was caught by an agent re-measuring the
 * section, not by anything here.
 *
 * So `titleOf()` now slices the metadata export by balanced braces and reads
 * only keys at DEPTH 1 of it, and joins string literals concatenated with `+`.
 * A guard that measures a different field from the one that renders is worse
 * than no guard: it certifies the mistake.
 *
 * AND THE TEMPLATE HAS TO EXIST. Shortening the page titles is only half of it.
 * For one commit the layout carried a plain-string title and therefore passed
 * NO template to its children, so all 64 rendered bare - a search result
 * reading "Fiction" and nothing else. Both counterweights below exist for that.
 *
 * WHY THIS GUARD IS SCOPED TO ONE SECTION. The other over-long titles across
 * the site are real, measured and being worked through; a site-wide rule would
 * fail on its first run and be turned off. Widen this as sections are done,
 * ending at `src/app`.
 *
 * MUTATIONS RUN, each verified to have altered the file first: restoring the
 * old 43-character template fails; restoring one long page title fails;
 * replacing the layout's title object with a plain string fails; and reverting
 * titleOf to a first-match regex fails, which is the one that matters.
 */

const DIR = 'src/app/ks3/ilowersecondary'

/** Google truncates at roughly this width. The number is the whole point. */
const LIMIT = 60

const FILES = execSync(`git ls-files ${DIR}`, { encoding: 'utf8' })
  .split('\n')
  .filter((f) => f.endsWith('page.tsx') || f.endsWith('layout.tsx'))

/** The body of `export const metadata ... = { ... }`, or null. */
function metadataBody(src: string): string | null {
  const m = /export\s+const\s+metadata(?:\s*:\s*Metadata)?\s*=\s*\{/.exec(src)
  if (!m) return null
  const open = src.indexOf('{', m.index + m[0].length - 1)
  let depth = 0
  for (let i = open; i < src.length; i++) {
    if (src[i] === '{') depth++
    else if (src[i] === '}') {
      depth--
      if (depth === 0) return src.slice(open + 1, i)
    }
  }
  return null
}

/**
 * The value of `key` at DEPTH 1 of an object body, joining `'a' + 'b'`.
 * Depth matters: `openGraph.title` sits at depth 2 and is not what renders.
 */
export function topLevelString(body: string, key: string): string | null {
  let depth = 0
  let i = 0
  while (i < body.length) {
    const c = body[i]
    if (c === '{' || c === '[' || c === '(') depth++
    else if (c === '}' || c === ']' || c === ')') depth--
    else if (
      depth === 0 &&
      body.startsWith(key + ':', i) &&
      !/[A-Za-z0-9_$.]/.test(body[i - 1] ?? '')
    ) {
      let j = i + key.length + 1
      const parts: string[] = []
      for (;;) {
        while (j < body.length && /\s/.test(body[j]!)) j++
        const q = body[j]
        if (q !== "'" && q !== '"' && q !== '`') return parts.length ? parts.join('') : null
        let k = j + 1
        let out = ''
        while (k < body.length) {
          if (body[k] === '\\') {
            out += body[k + 1]
            k += 2
            continue
          }
          if (body[k] === q) break
          out += body[k]
          k++
        }
        parts.push(out)
        j = k + 1
        while (j < body.length && /\s/.test(body[j]!)) j++
        if (body[j] === '+') {
          j++
          continue
        }
        return parts.join('')
      }
    }
    i++
  }
  return null
}

/** The title this file actually renders: its own, or a `title.default`. */
function titleOf(file: string): string | null {
  const body = metadataBody(readFileSync(file, 'utf8'))
  if (!body) return null
  const direct = topLevelString(body, 'title')
  if (direct !== null) return direct
  const obj = /title:\s*\{([\s\S]*?)\}/.exec(body)
  if (!obj) return null
  const d = /default:\s*(['"])((?:\\.|(?!\1).)*)\1/.exec(obj[1]!)
  return d ? d[2]! : null
}

const LAYOUT_SRC = readFileSync(`${DIR}/layout.tsx`, 'utf8')

const TEMPLATE = (() => {
  const m = /template:\s*'([^']+)'/.exec(LAYOUT_SRC)
  if (!m) throw new Error('no title template in the iLowerSecondary layout')
  return m[1]!
})()

const compose = (title: string) => TEMPLATE.replace('%s', title)

describe('an iLowerSecondary title fits in a search result', () => {
  it('reads the real section', () => {
    // Vacuity guard: an empty walk passes every assertion below.
    expect(FILES.length).toBeGreaterThan(50)
    expect(FILES).toContain(`${DIR}/layout.tsx`)
  })

  it('titleOf reads the page title, not the social card above it', () => {
    // The bug that let the first fix ship. openGraph is declared first in these
    // files, so a first-match regex reads the wrong field and then certifies
    // it. Both shapes below appear in this section.
    const ogFirst = `export const metadata: Metadata = {
      openGraph: { title: 'CARD', description: 'x' },
      title: 'PAGE',
    }`
    const body = metadataBody(ogFirst)
    expect(body).not.toBeNull()
    expect(topLevelString(body as string, 'title')).toBe('PAGE')
    // And a description built by concatenation is one value, not its first
    // fragment: 16 pages in this section are written that way.
    const joined = `export const metadata = {
      description: 'one ' +
        'two ' +
        'three',
    }`
    expect(topLevelString(metadataBody(joined) as string, 'description')).toBe('one two three')

    // And the same thing asserted through titleOf on a REAL file, because the
    // length sweep below cannot catch this any more: once both fields are
    // short, reading the wrong one still passes. On this page the card's title
    // is 72 characters and the page's is 23, so only a correct reader returns
    // the second.
    expect(titleOf(`${DIR}/fiction/genres/page.tsx`)).toBe('The five fiction genres')
  })

  it('the template exists and leaves room for a real title', () => {
    const suffixLength = TEMPLATE.replace('%s', '').length
    expect(suffixLength, `the suffix is ${suffixLength} characters`).toBeLessThanOrEqual(30)
    // Counterweight one: a template of bare "%s" would pass the length check
    // and strip the phrase students actually search for.
    expect(TEMPLATE).toContain('iLowerSecondary')
    // Counterweight two: a plain-string title on the layout passes NO template
    // to the 64 pages beneath it, and they render bare. That shipped for one
    // commit and made /ks3/ilowersecondary/fiction a result reading "Fiction".
    expect(LAYOUT_SRC, 'the layout must declare a title OBJECT, not a string').toMatch(
      /title:\s*\{[\s\S]*?default:[\s\S]*?template:/,
    )
  })

  it.each(FILES.map((f) => [f.replace(`${DIR}/`, ''), f]))('%s', (_label, file) => {
    const title = titleOf(file)
    if (title === null || title.includes('%s')) return
    // The layout's own default is not composed with its own template.
    const composed = file === `${DIR}/layout.tsx` ? title : compose(title)
    expect(
      composed.length,
      `"${composed}" is ${composed.length} characters; Google shows about ${LIMIT}`,
    ).toBeLessThanOrEqual(LIMIT)
  })

  it('and no page repeats what the template already says', () => {
    const offenders = FILES.filter((f) => {
      if (f === `${DIR}/layout.tsx`) return false
      const t = titleOf(f)
      return t !== null && !t.includes('%s') && /iLowerSecondary|The English Hub/i.test(t)
    }).map((f) => f.replace(`${DIR}/`, ''))
    expect(offenders).toEqual([])
  })

  it('and none of them is so short it says nothing', () => {
    // The lazy way to pass this file is to cut every title to one word.
    const tooShort = FILES.map(titleOf)
      .filter((t): t is string => t !== null && !t.includes('%s'))
      .filter((t) => t.length < 7)
    expect(tooShort).toEqual([])
  })
})
