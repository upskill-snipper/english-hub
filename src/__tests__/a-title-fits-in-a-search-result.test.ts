import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'

/**
 * Fifty-six of sixty-five pages had a title too long to display.
 *
 * MEASURED 20 September 2026 by crawling all 1,329 live sitemap URLs. 401 of
 * them (30.2%) carried a title over 60 characters and 223 (16.8%) over 70.
 * Google shows roughly 60. The worst eight on the whole site were all in one
 * section:
 *
 *     125  /ks3/ilowersecondary/writing-forms/narrative-descriptive
 *     124  /ks3/ilowersecondary/text-types/leaflets-brochures-guides
 *     122  /ks3/ilowersecondary/writing/section-b-task
 *     119  /ks3/ilowersecondary/question-types/punctuation-effect
 *
 * The cause was a template, not sixty-five separate mistakes.
 * `src/app/ks3/ilowersecondary/layout.tsx` appended
 * ` · iLowerSecondary English · The English Hub` - 43 characters - so any page
 * title longer than seventeen exceeded the limit. Almost every page title then
 * named the qualification a SECOND time, because whoever wrote it could not see
 * the template from the page.
 *
 * A 125-character title shows about half of itself. The other half is writing
 * nobody reads, and the half that does show is the half nearest the brand
 * rather than the half nearest the query.
 *
 * WHY THIS GUARD IS SCOPED TO ONE SECTION, which is not how the other guards in
 * this repository are written. The other 345 over-long titles are real and
 * measured and not yet fixed; a site-wide rule would fail on the first run and
 * be disabled, which is worse than a narrow rule that holds. The sections are
 * listed in 17-SEO-GEO-AEO-Score-2026-09-20 and this file should widen as they
 * are done, ending at `src/app`.
 *
 * MUTATIONS RUN, each verified to have altered the file first: restoring the
 * old template fails 45 of these 74; restoring one long page title fails two.
 */

const DIR = 'src/app/ks3/ilowersecondary'

/** Google truncates at roughly this width. The number is the whole point. */
const LIMIT = 60

const FILES = execSync(`git ls-files ${DIR}`, { encoding: 'utf8' })
  .split('\n')
  .filter((f) => f.endsWith('page.tsx') || f.endsWith('layout.tsx'))

/** The first `title:` in a metadata export. */
function titleOf(file: string): string | null {
  const src = readFileSync(file, 'utf8')
  const m = /^(\s*)title:\s*(['"])((?:\\.|(?!\2).)*)\2/m.exec(src)
  if (!m) return null
  return m[3].replace(/\\'/g, "'")
}

const TEMPLATE = (() => {
  const src = readFileSync(`${DIR}/layout.tsx`, 'utf8')
  const m = /template:\s*'([^']+)'/.exec(src)
  if (!m) throw new Error('no title template in the iLowerSecondary layout')
  return m[1]
})()

const compose = (title: string) => TEMPLATE.replace('%s', title)

describe('an iLowerSecondary title fits in a search result', () => {
  it('reads the real section', () => {
    // Vacuity guard: an empty walk passes every assertion below.
    expect(FILES.length).toBeGreaterThan(50)
    expect(FILES).toContain(`${DIR}/layout.tsx`)
  })

  it('the template leaves room for a real title', () => {
    // 43 characters of suffix is what made sixty-five pages impossible to fix
    // one page at a time.
    const suffixLength = TEMPLATE.replace('%s', '').length
    expect(suffixLength, `the suffix is ${suffixLength} characters`).toBeLessThanOrEqual(30)
    // The counterweight: a template of just "%s" would pass the line above and
    // strip the qualification from every result, which is the phrase a student
    // searches for.
    expect(TEMPLATE).toContain('iLowerSecondary')
  })

  it.each(FILES.map((f) => [f.replace(`${DIR}/`, ''), f]))('%s', (_label, file) => {
    const title = titleOf(file)
    if (title === null || title.includes('%s')) return
    const composed = compose(title)
    expect(
      composed.length,
      `"${composed}" is ${composed.length} characters; Google shows about ${LIMIT}`,
    ).toBeLessThanOrEqual(LIMIT)
  })

  it('and no page repeats what the template already says', () => {
    // The second half of the defect: the template appended the qualification
    // and the page named it again, so a result read "... iLowerSecondary
    // English · iLowerSecondary English".
    const offenders = FILES.filter((f) => {
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
