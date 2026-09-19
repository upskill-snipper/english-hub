import { describe, it, expect } from 'vitest'
import { findMissingKeys } from '../../scripts/check-dictionary-keys-exist.mjs'

/**
 * A key that does not exist is rendered to the visitor as `[[key]]`.
 *
 * `t()` does not throw on an unknown key. It returns the sentinel `[[the.key]]`
 * and React renders it, so somebody reads "[[auth.apple.continue]]" where a
 * button label should be.
 *
 * FOUND 19 September 2026, and the button above is not hypothetical: it was the
 * label on the Apple sign-in button, on /auth/login, /auth/register and
 * /auth/teacher-register - the first screen a returning user sees. Seventeen
 * keys were in that state across four files.
 *
 * ELEVEN OF THEM CARRIED A FALLBACK THAT COULD NOT WORK:
 *
 *     {t('ielts.transition.intro') || 'Many international students arrive...'}
 *
 * `t()` returns `[[ielts.transition.intro]]` for a missing key, and a non-empty
 * string is truthy, so the `||` never fired. The author had written the right
 * copy and put it somewhere it could never be reached. (`withFallback()` on the
 * marking results page is the version that works: it compares against the
 * sentinel explicitly.)
 *
 * One of the seventeen, `breadcrumb.home`, fed `BreadcrumbJsonLd`, so the
 * sentinel was going into structured data that Google reads rather than only
 * onto the page.
 *
 * WHAT THE CHECKER CAN AND CANNOT SEE, stated because the first three versions
 * of it were wrong in ways that all looked like defects:
 *
 *   - It reported 308 missing keys before it knew that four IELTS shards are
 *     read directly by their pages and never wired into the global lookup.
 *   - It then reported 83, because its shard parser assumed two-space
 *     indentation and read 0 of the 72 keys in the shard prettier had indented
 *     by four.
 *   - It excludes `withFallback(tx, 'key', 'default')`, which exists precisely
 *     to handle a missing key and reaches nobody.
 *
 * It cannot resolve a key built at runtime - `t(\`admin.aff.status.\${s}\`)` -
 * and reports how many of those it skipped rather than implying full coverage.
 */

describe('the checker is looking at the real corpus', () => {
  it('resolved a realistic number of keys', async () => {
    // Vacuity guard. "0 missing" from a walker that matched no files is the
    // shape of green result this repository keeps finding.
    const { literals, files, known } = await findMissingKeys()
    expect(literals).toBeGreaterThan(10_000)
    expect(files).toBeGreaterThan(500)
    expect(known).toBeGreaterThan(16_000)
  })
})

describe('no page asks for a key that does not exist', () => {
  it('every literal key resolves', async () => {
    const { missing } = await findMissingKeys()
    const named = [...missing.entries()].map(
      ([key, where]: [string, Set<string>]) => `${key}  (${[...where][0]})`,
    )
    expect(
      named,
      'these render to the visitor as the literal text [[key]]. Add them to src/lib/i18n/dictionary.ts.',
    ).toEqual([])
  })

  it('and the ones found on 19 September are among those that now resolve', async () => {
    // Named individually so a regression says which surface broke. The Apple
    // button is first because it is on the sign-in screen.
    const { missing } = await findMissingKeys()
    for (const key of [
      'auth.apple.continue',
      'auth.apple.error.generic',
      'ielts.transition.intro',
      'ielts.transition.locked.body',
      'ielts.admissions.ps.under_min',
      'breadcrumb.home',
    ]) {
      expect(missing.has(key), `${key} is missing again`).toBe(false)
    }
  })
})
