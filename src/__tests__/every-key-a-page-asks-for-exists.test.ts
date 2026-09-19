import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  findMissingKeys,
  findDeadPatterns,
  findMissingKeyProps,
} from '../../scripts/check-dictionary-keys-exist.mjs'

/**
 * A key that does not exist is rendered to the visitor as `[[key]]`.
 *
 * `t()` does not throw on an unknown key. It returns the sentinel `[[the.key]]`
 * and React renders it, so somebody reads "[[auth.apple.continue]]" where a
 * button label should be.
 *
 * FOUND 19 September 2026. Seventeen keys were in that state across four files,
 * and they were not equally live. Checked page by page against a running
 * server AFTER the fix, which corrects an overstatement in the commit that
 * introduced it:
 *
 *   LIVE. `breadcrumb.home` on /set-texts/<board> fed BreadcrumbJsonLd, so
 *   Google was being served `"name":"[[breadcrumb.home]]"` in structured data.
 *   The IELTS academic-transition page and the personal-statement tool both
 *   render, and both showed their sentinels on the page.
 *
 *   LATENT. The five Apple sign-in keys. The button is gated on
 *   NEXT_PUBLIC_APPLE_OAUTH_ENABLED, which is not set in production, so it does
 *   not render today. The commit message called it "the first screen a
 *   returning user sees", which was wrong: it would have been, the moment
 *   Calum switched OAuth on, and that is the reason to have fixed it - not a
 *   reason to have claimed it was already showing.
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

// ─── Keys assembled at render time ──────────────────────────────────────

/**
 * The residual the check above names and cannot cover.
 *
 * `t(\`aff_comp.resources.tpl.${tpl.id}.title\`)` builds its key at render, so
 * no literal check can resolve it. But the SHAPE is knowable, and a shape that
 * NO dictionary key matches is a guaranteed sentinel on every render, whatever
 * the variable holds.
 *
 * That found the seven affiliate template cards. The component asked for a
 * title and a description per template id; `preview_prefix` was the only key
 * that existed under the whole prefix, so every card rendered
 * `[[aff_comp.resources.tpl.tw-thread.title]]` as its heading.
 *
 * NOT OBSERVED ON A RENDERED PAGE, and said so rather than implied:
 * /affiliates/resources gates client-side and redirects to login, so
 * confirming it on screen needs a signed-in affiliate account. The defect is
 * verified in the code and against the dictionary, which is as far as I can
 * honestly take it.
 */
describe('a runtime-built key can at least match something', () => {
  it('checked a realistic number of template call sites', async () => {
    // Vacuity guard: "0 dead patterns" from a walker that matched nothing is
    // the failure mode this whole file exists to avoid.
    const { checked } = await findDeadPatterns()
    expect(checked).toBeGreaterThan(20)
  })

  it('no pattern is one that no key can match', async () => {
    const { dead } = await findDeadPatterns()
    const named = dead.map((d: { template: string; file: string }) => `${d.template}  (${d.file})`)
    expect(
      named,
      'no dictionary key has this shape, so every render of it is a [[key]] sentinel',
    ).toEqual([])
  })

  it('and the affiliate template cards, which is what it found, now resolve', async () => {
    const { findMissingKeys: fm } = await import('../../scripts/check-dictionary-keys-exist.mjs')
    const { known } = await fm()
    expect(known).toBeGreaterThan(17_000)
    // Named individually so a regression says which card lost its heading.
    const en = readFileSync(join(process.cwd(), 'src/lib/i18n/generated/en.ts'), 'utf8')
    for (const id of ['tw-thread', 'tw-short', 'tw-reply', 'ig-caption', 'em-newsletter']) {
      expect(en, `${id} has no title`).toContain(`'aff_comp.resources.tpl.${id}.title'`)
      expect(en, `${id} has no description`).toContain(`'aff_comp.resources.tpl.${id}.desc'`)
    }
  })
})

// ─── Keys held in a property ────────────────────────────────────────────

/**
 * The third way a key hides from a checker.
 *
 * `{ titleKey: 'resources.poetry.anth.pac.title' }` is passed later as
 * `t(section.titleKey)`. The literal check cannot see it - the call site has no
 * string - and the pattern check cannot either, because there is no template.
 * But the value is a literal in the same file, so it can simply be looked up.
 *
 * Thirty were missing across three surfaces, all rendering sentinels:
 *
 *   The privacy dashboard's five tabs and five consent toggles - the screen
 *   where a user manages consent and exercises data rights.
 *
 *   The poetry hub's five anthology cards. CONFIRMED IN A BROWSER: with an AQA
 *   board cookie, /resources/poetry rendered
 *   `[[resources.poetry.anth.pac.title]]` as the Power and Conflict card
 *   heading. The section is board-filtered, which is why a first look with a
 *   different board showed nothing and nearly filed this as latent.
 *
 *   The five affiliate platform names.
 */
describe('a key held in a property exists too', () => {
  it('checked a realistic number of them', async () => {
    const { checked } = await findMissingKeyProps()
    expect(checked).toBeGreaterThan(500)
  })

  it('every one resolves', async () => {
    const { missing } = await findMissingKeyProps()
    const named = [...missing.entries()].map(
      ([key, where]: [string, Set<string>]) => `${key}  (${[...where][0]})`,
    )
    expect(named, 'these render to the visitor as the literal text [[key]]').toEqual([])
  })

  it('and the three surfaces it found are named, so a regression says which broke', async () => {
    const { missing } = await findMissingKeyProps()
    for (const key of [
      'dashboard.privacy.tab_settings',
      'dashboard.privacy.toggle_ai_label',
      'resources.poetry.anth.pac.title',
      'aff_comp.resources.platform.twitter',
    ]) {
      expect(missing.has(key), `${key} is missing again`).toBe(false)
    }
  })

  it('the AI consent toggle is described as TRAINING, not as marking', async () => {
    // The distinction that matters on a consent screen. `aiTrainingOptIn` is
    // its own field and `aiOptOut` is another; describing the training toggle
    // with the sibling page's "AI-powered analysis of your essays to provide
    // feedback" would tell a child that turning it off stops their work being
    // marked. It does not.
    // Read the VALUE, not the line: prettier wraps a long entry onto its own
    // lines, so matching the key line alone tested nothing but the key name.
    const en = readFileSync(join(process.cwd(), 'src/lib/i18n/generated/en.ts'), 'utf8')
    const at = en.indexOf("'dashboard.privacy.toggle_ai_desc'")
    expect(at, 'the AI training description is missing').toBeGreaterThan(-1)
    const value = en.slice(at, en.indexOf(',\n', at))
    // It must say what the toggle DOES control...
    expect(value).toContain('improve the marking model')
    // ...and, more importantly, what it does not. A child turning this off must
    // not think their essays stop being marked.
    expect(value).toContain('does not depend on this')
    expect(value).not.toContain('provide feedback')
  })
})
