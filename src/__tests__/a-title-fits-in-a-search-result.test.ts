import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { dirname } from 'node:path'

/**
 * Titles and descriptions that fit in a search result, across the whole site.
 *
 * THE DEFECT. Measured 20 September 2026 by crawling all 1,329 live sitemap
 * URLs: 401 (30.2%) carried a title over 60 characters and 380 (28.6%) a
 * description over 160. Google shows roughly 60 and 160. On the worst pages a
 * template was doing it: ` · iLowerSecondary English · The English Hub` is 43
 * characters, so any page title over seventeen exceeded the limit, and 56 of
 * that section's 65 pages did, topping out at 125.
 *
 * WHY THIS FILE IS WORTH READING TWICE. The first version of this guard, and
 * the commit it shipped with, were wrong in the way this repository keeps being
 * wrong. Its reader took the FIRST `title:` string literal in the file, and on
 * 252 pages `openGraph` is declared ABOVE `title` in the metadata object - so
 * it measured the social card, not the page. The rewrite script had the same
 * bug, so it shortened 51 card titles and left every real title untouched, and
 * the guard went green because both halves read the same wrong field.
 *
 * The commit message said "none of the 64 exceeds 60". Forty of them did.
 * /ks3/ilowersecondary/practice/paper-3 was live at 87 characters reading
 * "Practice Paper 3: The Natural World - iLowerSecondary English ·
 * iLowerSecondary English". It was caught by an agent re-measuring the section,
 * not by anything here. A guard that measures a different field from the one
 * that renders is worse than no guard: it certifies the mistake.
 *
 * So the reader below slices the metadata export by balanced braces, takes only
 * keys at DEPTH 1, and joins literals concatenated with `+` - 16 descriptions
 * were being measured by their first fragment alone.
 *
 * TEMPLATES ARE HALF OF IT. Shortening page titles is not enough on its own,
 * and neither is deleting the template. For one commit the iLowerSecondary
 * layout carried a plain-string title and therefore passed NO template to its
 * children, so all 64 rendered bare: /ks3/ilowersecondary/fiction was a search
 * result reading "Fiction" and nothing else. Both failure modes are asserted.
 *
 * SCOPE. This began as one section because 345 other pages were still over the
 * limit and a site-wide rule would have failed on its first run and been turned
 * off. They have since been rewritten - 456 edits across 13 sections, produced
 * and adversarially checked page by page - so the rule now covers `src/app`,
 * which is where it should have been all along.
 *
 * NOT COVERED: files whose metadata comes from `generateMetadata`. Their titles
 * are computed per request and cannot be measured from source; they are counted
 * below so that moving a page into one to dodge this guard shows up as a number
 * going the wrong way.
 *
 * MUTATIONS RUN, each verified to have altered the file first: restoring the
 * old 43-character iLowerSecondary template fails; restoring one long page
 * title fails; replacing that layout's title object with a plain string fails;
 * and reverting the reader to a first-match regex fails.
 */

const LIMIT = 60
const DESC_LIMIT = 160

const FILES = execSync('git ls-files src/app', { encoding: 'utf8' })
  .split('\n')
  .filter((f) => /\/(page|layout)\.tsx$/.test(f))

const SOURCE = new Map<string, string>()
const read = (f: string) => {
  if (!SOURCE.has(f)) {
    try {
      SOURCE.set(f, readFileSync(f, 'utf8'))
    } catch {
      SOURCE.set(f, '')
    }
  }
  return SOURCE.get(f) as string
}

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
        while (j < body.length && /\s/.test(body[j] as string)) j++
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
        while (j < body.length && /\s/.test(body[j] as string)) j++
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

function templateOf(src: string): string | null {
  const body = metadataBody(src)
  if (!body) return null
  const m = /template:\s*(['"])((?:\\.|(?!\1).)*)\1/.exec(body)
  return m ? (m[2] as string) : null
}

/** The title this file renders: its own, or a `title.default`. */
function titleOf(file: string): string | null {
  const body = metadataBody(read(file))
  if (!body) return null
  const direct = topLevelString(body, 'title')
  if (direct !== null) return direct
  const obj = /title:\s*\{([\s\S]*?)\}/.exec(body)
  if (!obj) return null
  const d = /default:\s*(['"])((?:\\.|(?!\1).)*)\1/.exec(obj[1] as string)
  return d ? (d[2] as string) : null
}

function descriptionOf(file: string): string | null {
  const body = metadataBody(read(file))
  return body ? topLevelString(body, 'description') : null
}

/**
 * The template a file's title composes with: the nearest ancestor layout that
 * declares one. A layout that sets a plain-string title consumes the parent's
 * template and passes none on, so the walk stops there.
 */
function templateFor(file: string): string | null {
  let dir = dirname(file)
  const isLayout = file.endsWith('layout.tsx')
  // A layout's own title is not composed with the template it declares.
  if (isLayout && templateOf(read(file)) !== null) return null
  while (dir.startsWith('src/app')) {
    const layout = `${dir}/layout.tsx`
    if (layout !== file) {
      const src = read(layout)
      if (src) {
        const t = templateOf(src)
        if (t) return t
        const body = metadataBody(src)
        if (body && topLevelString(body, 'title') !== null) return null
      }
    }
    if (dir === 'src/app') break
    dir = dirname(dir)
  }
  return '%s - The English Hub'
}

const STATIC = FILES.filter((f) => metadataBody(read(f)) !== null)
const DYNAMIC = FILES.filter((f) => /generateMetadata/.test(read(f)))

describe('a title fits in a search result', () => {
  it('reads a real tree', () => {
    // Vacuity guard: an empty walk passes every sweep below.
    expect(FILES.length).toBeGreaterThan(800)
    expect(STATIC.length).toBeGreaterThan(800)
    expect(STATIC).toContain('src/app/ks3/ilowersecondary/practice/paper-3/page.tsx')
  })

  it('the reader takes the page title, not the social card above it', () => {
    // The bug that let the first fix ship. openGraph is declared first on 252
    // pages, so a first-match regex reads the wrong field and then certifies it.
    const ogFirst = `export const metadata: Metadata = {
      openGraph: { title: 'CARD', description: 'x' },
      title: 'PAGE',
    }`
    expect(topLevelString(metadataBody(ogFirst) as string, 'title')).toBe('PAGE')

    // A description built by concatenation is one value, not its first
    // fragment: 16 pages are written that way and were measured at 60-80
    // characters when they were 170-393.
    const joined = `export const metadata = {
      description: 'one ' +
        'two ' +
        'three',
    }`
    expect(topLevelString(metadataBody(joined) as string, 'description')).toBe('one two three')

    // And through titleOf on a REAL file, because the length sweep cannot catch
    // this once both fields are short. Here the card's title is 72 characters
    // and the page's is 23.
    expect(titleOf('src/app/ks3/ilowersecondary/fiction/genres/page.tsx')).toBe(
      'The five fiction genres',
    )
  })

  it('no rendered title is longer than Google will show', () => {
    const offenders: string[] = []
    for (const file of STATIC) {
      const title = titleOf(file)
      if (title === null || title.includes('%s')) continue
      const template = templateFor(file)
      const composed = template ? template.replace('%s', title) : title
      if (composed.length > LIMIT) offenders.push(`${composed.length}  ${file}\n     ${composed}`)
    }
    expect(
      offenders,
      `Google shows about ${LIMIT} characters. Anything past that is writing ` +
        'nobody reads, and the half that survives is the half nearest the brand ' +
        'rather than the half nearest the query.',
    ).toEqual([])
  })

  it('and no description is longer than Google will show', () => {
    const offenders: string[] = []
    for (const file of STATIC) {
      const d = descriptionOf(file)
      if (d === null || d.includes('%s')) continue
      if (d.length > DESC_LIMIT) offenders.push(`${d.length}  ${file}`)
    }
    expect(offenders).toEqual([])
  })

  it('and none of them is so short it says nothing', () => {
    // The lazy way to pass the two sweeps above is to cut every title to one
    // word and every description to a fragment. The floor is five rather than
    // something rounder because 'Log in' is a good title for a login page.
    const shortTitles = STATIC.map(titleOf).filter(
      (t): t is string => t !== null && !t.includes('%s') && t.length < 5,
    )
    expect(shortTitles).toEqual([])
    const shortDescs = STATIC.map(descriptionOf).filter(
      (d): d is string => d !== null && !d.includes('%s') && d.length > 0 && d.length < 50,
    )
    expect(shortDescs).toEqual([])
  })

  it('a layout that shortens its template still passes one down', () => {
    // The other way to pass the length sweep: delete the template. Children
    // then render bare, so /ks3/ilowersecondary/fiction becomes a result
    // reading "Fiction". That shipped for one commit.
    const layout = 'src/app/ks3/ilowersecondary/layout.tsx'
    const src = read(layout)
    expect(src, 'the layout must declare a title OBJECT, not a string').toMatch(
      /title:\s*\{[\s\S]*?default:[\s\S]*?template:/,
    )
    const template = templateOf(src)
    expect(template).toContain('iLowerSecondary')
    expect((template as string).replace('%s', '').length).toBeLessThanOrEqual(30)
  })

  it('and generateMetadata is not a hiding place', () => {
    // Computed titles cannot be measured here. Pinning the count means moving a
    // page into one to dodge this guard shows up as a number going the wrong
    // way rather than as silence.
    expect(DYNAMIC.length).toBeLessThanOrEqual(50)
  })
})
