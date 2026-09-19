import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  buildTaggedUrl,
  toRegisterRow,
  toCsv,
  UtmError,
  UTM_MEDIUMS,
  UTM_CAMPAIGNS,
  UTM_SOURCES,
  LINK_REGISTER_COLUMNS,
} from '@/lib/social/utm'

/**
 * Tagged links, and the register that makes them attributable (ANA-4).
 *
 * THE DEFECT, measured against production on 19 September 2026. Eleven profiles
 * carry an attribution. Two of them arrived as `utm_source=ig` with
 * `utm_medium=social`. Neither value is in either closed list; neither will
 * ever join to `instagram` or `social-organic` in a report; and both look close
 * enough to the right answer that nobody noticed. The other nine came from
 * `chatgpt.com` with no medium and no campaign at all - an answer engine
 * already sending signups that no campaign can claim.
 *
 * `09 Measurement/Link-Register.csv`, which the KPI framework's rule 5 requires
 * before any link is used, did not exist.
 *
 * RULE 2 IS THE ONE THAT MATTERS MOST HERE. A UTM sits in the address bar, in
 * browser history, in referrer headers, in forwarded links and in every
 * analytics export. This product's users are children. The builder REFUSES a
 * value that looks like a person, a school or an email rather than stripping
 * it: a silently removed name is a name somebody believed had been sent.
 */

const ROOT = process.cwd()
const CHECKER = readFileSync(join(ROOT, 'scripts/check-utm-links.mjs'), 'utf8')
const BUILDER = readFileSync(join(ROOT, 'scripts/build-link-register.mjs'), 'utf8')

const valid = {
  destination: '/schools',
  source: 'linkedin' as const,
  medium: 'social-organic' as const,
  campaign: 'founding-schools' as const,
  content: 'post-founding-schools-open',
}

describe('buildTaggedUrl', () => {
  it('produces the URL the framework documents', () => {
    // §8.3's own worked example, so the builder is checked against the
    // specification rather than against itself.
    expect(
      buildTaggedUrl({
        destination: '/',
        source: 'linkedin',
        medium: 'social-organic',
        campaign: 'launch-2026-09',
        content: 'post-founding-schools-open',
      }),
    ).toBe(
      'https://theenglishhub.app/?utm_source=linkedin&utm_medium=social-organic' +
        '&utm_campaign=launch-2026-09&utm_content=post-founding-schools-open',
    )
  })

  it('refuses the exact value that is already in production', () => {
    // `ig` and `social`, the two that got through when nothing checked.
    expect(() => buildTaggedUrl({ ...valid, source: 'ig' })).toThrow(UtmError)
    expect(() =>
      buildTaggedUrl({ ...valid, medium: 'social' as unknown as (typeof UTM_MEDIUMS)[number] }),
    ).toThrow(UtmError)
  })

  it('refuses a capital, a space and an underscore (rule 1)', () => {
    expect(() => buildTaggedUrl({ ...valid, content: 'Founding-Schools' })).toThrow(UtmError)
    expect(() => buildTaggedUrl({ ...valid, content: 'founding schools' })).toThrow(UtmError)
    expect(() => buildTaggedUrl({ ...valid, content: 'founding_schools' })).toThrow(UtmError)
  })

  it('refuses an email address or an institution name (rule 2)', () => {
    // The safeguarding rule. It throws rather than sanitising.
    expect(() => buildTaggedUrl({ ...valid, content: 'head@example-school-org' })).toThrow(UtmError)
    expect(() => buildTaggedUrl({ ...valid, content: 'st-marys-academy' })).toThrow(/rule 2/)
    expect(() => buildTaggedUrl({ ...valid, source: 'partner-kings-college' })).toThrow(/rule 2/)
  })

  it('refuses a destination that is not a path on our own site (rule 3)', () => {
    expect(() => buildTaggedUrl({ ...valid, destination: 'https://example.com' })).toThrow(UtmError)
    expect(() => buildTaggedUrl({ ...valid, destination: 'schools' })).toThrow(UtmError)
  })

  it('allows the four generated source prefixes', () => {
    for (const source of ['partner-tutorhub', 'affiliate-abc123', 'pdf-onepager', 'qr-poster-a']) {
      expect(() => buildTaggedUrl({ ...valid, source })).not.toThrow()
    }
    // But not a bare prefix with nothing after it.
    expect(() => buildTaggedUrl({ ...valid, source: 'partner' })).toThrow(UtmError)
  })

  it('keeps utm_term to paid search', () => {
    expect(() => buildTaggedUrl({ ...valid, term: 'gcse-english' })).toThrow(/paid search/)
    expect(() => buildTaggedUrl({ ...valid, medium: 'cpc', term: 'gcse-english' })).not.toThrow()
  })
})

describe('the register row', () => {
  it('carries the ten columns rule 5 names, in order', () => {
    expect([...LINK_REGISTER_COLUMNS]).toEqual([
      'date_created',
      'channel',
      'asset_file',
      'destination_path',
      'full_url',
      'campaign',
      'source',
      'medium',
      'content',
      'notes',
    ])
  })

  it('takes its date as an argument rather than from the clock', () => {
    // A register that rewrites itself on every run has a diff that tells you
    // nothing about what actually changed.
    const row = toRegisterRow({ ...valid, channel: 'linkedin', assetFile: 'x.md' }, '2026-09-19')
    expect(row.date_created).toBe('2026-09-19')
  })

  it('escapes a value containing a comma', () => {
    const row = toRegisterRow(
      { ...valid, channel: 'linkedin', assetFile: 'x.md', notes: 'one, two' },
      '2026-09-19',
    )
    const csv = toCsv([row])
    expect(csv).toContain('"one, two"')
    expect(csv.split('\n')[0]).toBe(LINK_REGISTER_COLUMNS.join(','))
  })
})

// ─── The two scripts ────────────────────────────────────────────────────────

describe('the checker', () => {
  it('matches a bare domain link, not only one with a protocol', () => {
    // THE ASSERTION THAT MATTERS. Every link in the queue is written as
    // `theenglishhub.app/free-trial`. The first version required `https://`,
    // matched nothing across 36 files, and printed that the queue was clean.
    // A checker that matches none of the thing it checks produces a green line
    // somebody trusts.
    expect(CHECKER).toContain('(?:https?:\\/\\/)?')
    expect(CHECKER).toMatch(/theenglishhub\\\.app/)
  })

  it('leaves an email address alone', () => {
    // `press@theenglishhub.app` is not an outbound link and tagging it would
    // be nonsense.
    expect(CHECKER).toContain('(?<![\\w@.])')
  })

  it('checks the destination exists before checking its tags', () => {
    // The untagged branch returns early, so a link that is both untagged AND a
    // 404 reported only the smaller of its two problems.
    const destinationAt = CHECKER.indexOf('is not a route and not a redirect')
    const untaggedAt = CHECKER.indexOf('is an outbound link with no UTM parameters')
    expect(destinationAt).toBeGreaterThan(-1)
    expect(destinationAt).toBeLessThan(untaggedAt)
  })

  it('does not demand tags on internal links (rule 3)', () => {
    // Tagging an internal link restarts the session in GA4 and destroys the
    // original attribution, so a checker that demanded tags everywhere would
    // enforce the opposite of the rule.
    expect(CHECKER).toMatch(/never tag an internal link/)
  })
})

describe('the two copies of the vocabulary', () => {
  /**
   * The register builder is a Node script and the builder is TypeScript, so
   * each holds the lists. A second copy of a vocabulary is exactly how `ig`
   * happened, so the copies are compared rather than trusted.
   */
  const listFrom = (name: string) => {
    const at = BUILDER.indexOf(`const ${name} = new Set([`)
    expect(at, `${name} is missing from the script`).toBeGreaterThan(-1)
    const block = BUILDER.slice(at, BUILDER.indexOf('])', at))
    return [...block.matchAll(/'([^']+)'/g)].map((m) => m[1])
  }

  it.each([
    ['MEDIUMS', UTM_MEDIUMS],
    ['CAMPAIGNS', UTM_CAMPAIGNS],
    ['SOURCES', UTM_SOURCES],
  ])('%s agrees with the TypeScript list', (name, expected) => {
    expect(listFrom(name).sort()).toEqual([...expected].sort())
  })
})
