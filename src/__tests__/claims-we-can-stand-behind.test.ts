import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { lintClaims, splitPosts, PLATFORM_LIMITS } from '@/lib/social/claim-lint'
import { PRICING } from '@/constants/pricing'
import { permittedPrices } from '@/lib/social/permitted-prices'

/**
 * The claim check, as a machine rather than a sentence (AUTO-3).
 *
 * THE DEFECT. The claim check today is the line "Claims check: verified 18 Aug
 * 2026" written at the top of a draft. Nothing reads it. What happens without a
 * machine is on record twice over: thirteen marketing documents still promise a
 * commission rate the programme does not pay, and three queued drafts carry
 * mojibake from a re-encoded file - `Â£` in the middle of a price. Both classes
 * survived every human read they were given, because a person reading for sense
 * does not notice a number that is merely wrong.
 *
 * WHAT THE FIRST VERSION GOT WRONG, and why it is worth recording. Run against
 * the real queue it reported 36 of 36 drafts as failing:
 *
 *   - `\bTEH\b` matched `TEH-03` and `TEH-08`, internal agent identifiers in
 *     the draft metadata. 29 false positives.
 *   - every `£` amount was checked against our price list, so "a tutor
 *     typically costs £25-£50 an hour" - a claim about the market, needing a
 *     source rather than a correction - was reported as a pricing error.
 *   - the approval header was matched as an exact line, while the queue writes
 *     it as `# DRAFT FOR APPROVAL, not posted` after a byte-order mark. Seven
 *     drafts that carried the header were reported as unapproved.
 *   - length was measured per FILE, so an X thread of four posts was reported
 *     as one 1,034-character post.
 *
 * A linter whose findings are mostly wrong is a linter somebody switches off,
 * and then the real findings go with it. It now reports 30 of 36 clean and 7
 * findings, every one of which is genuine.
 */

const QUEUE =
  'C:/Users/calum/OneDrive/Desktop/The English Hub - Business/03 Social Media/Queue/01 Drafts'

const clean = (body: string) => ['DRAFT FOR APPROVAL, not posted', '', body].join('\n')

describe('what it refuses', () => {
  it.each([
    ['join thousands of students already improving', 'fabricated-proof'],
    ['Trusted by teachers across the UK', 'fabricated-proof'],
    ['Over 2,000 students use The English Hub', 'fabricated-proof'],
    ['Rated 4.8 out of 5 by parents', 'fabricated-proof'],
    ['Officially endorsed by AQA', 'fabricated-proof'],
    ['Boost your grade in six weeks', 'grade-promise'],
    ['We guarantee results or your money back', 'grade-promise'],
    ['Take a student from a 4 to a 7', 'grade-promise'],
    ['A revolutionary way to revise', 'hype'],
    ['Supercharge your revision', 'hype'],
    ['You get 3 free uses before paying', 'trial-mechanic'],
    ['Earn 20% commission on every referral', 'commission-rate'],
    ['Try TEH today', 'abbreviation'],
  ])('refuses "%s"', (line, rule) => {
    const report = lintClaims({
      body: clean(line),
      permittedPrices: permittedPrices(),
      platform: 'linkedin',
    })
    expect(report.ok).toBe(false)
    expect(report.findings.map((f) => f.rule)).toContain(rule)
  })

  it('refuses an em dash and a double hyphen', () => {
    expect(
      lintClaims({
        body: clean('one \u2014 two'),
        permittedPrices: permittedPrices(),
        platform: 'x',
      }).findings[0].rule,
    ).toBe('em-dash')
    expect(
      lintClaims({ body: clean('one -- two'), permittedPrices: permittedPrices(), platform: 'x' })
        .findings[0].rule,
    ).toBe('em-dash')
  })

  it('refuses mojibake, which is already in three live drafts', () => {
    const report = lintClaims({
      body: clean('Students \u00c2\u00a33.99 a month'),
      permittedPrices: permittedPrices(),
      platform: 'x',
    })
    expect(report.findings.map((f) => f.rule)).toContain('mojibake')
  })

  it('refuses a statistic with no source, and accepts one with', () => {
    const without = lintClaims({
      body: clean('42 per cent of pupils struggle'),
      permittedPrices: permittedPrices(),
      platform: 'linkedin',
    })
    expect(without.findings.map((f) => f.rule)).toContain('unsourced-statistic')

    const with_ = lintClaims({
      body: clean('42 per cent of pupils struggle\n\n* Source: Ofsted, English Review (2022).'),
      permittedPrices: permittedPrices(),
      platform: 'linkedin',
    })
    expect(with_.findings.map((f) => f.rule)).not.toContain('unsourced-statistic')
  })

  it('requires a spec-check line beside an asserted tariff', () => {
    const without = lintClaims({
      body: clean('Question 3 is worth 24 marks'),
      permittedPrices: permittedPrices(),
      platform: 'linkedin',
    })
    expect(without.findings.map((f) => f.rule)).toContain('missing-spec-check')

    const with_ = lintClaims({
      body: clean('Question 3 is worth 24 marks\n\nSpec check: AQA 8700 Paper 1, June 2024.'),
      permittedPrices: permittedPrices(),
      platform: 'linkedin',
    })
    expect(with_.findings.map((f) => f.rule)).not.toContain('missing-spec-check')
  })

  it('requires the demo label beside student writing', () => {
    const without = lintClaims({
      body: clean('Here is a model answer for Macbeth'),
      permittedPrices: permittedPrices(),
      platform: 'instagram',
    })
    expect(without.findings.map((f) => f.rule)).toContain('missing-demo-label')

    const with_ = lintClaims({
      body: clean('Here is a model answer for Macbeth\n\nExample written for this demo.'),
      permittedPrices: permittedPrices(),
      platform: 'instagram',
    })
    expect(with_.findings.map((f) => f.rule)).not.toContain('missing-demo-label')
  })
})

// ─── The four false positives that made the first version useless ───────────

describe('what it must NOT refuse', () => {
  it('leaves the internal agent identifiers alone', () => {
    // `TEH-03` in the metadata is not the product abbreviated. This matched 29
    // of 36 drafts before it was bounded.
    const report = lintClaims({
      body: clean('agent: Instagram Studio (TEH-03), asked through POST'),
      permittedPrices: permittedPrices(),
      platform: 'instagram',
    })
    expect(report.findings.map((f) => f.rule)).not.toContain('abbreviation')
  })

  it('does not call a market comparison a pricing error', () => {
    // "a tutor typically costs £25-£50 an hour" needs a SOURCE, which is a
    // different rule with a different remedy. Reporting it as a price mismatch
    // would send somebody to change a number that was never ours.
    const report = lintClaims({
      body: clean('A tutor typically costs \u00a325-\u00a350 an hour.'),
      permittedPrices: permittedPrices(),
      platform: 'facebook',
    })
    expect(report.findings.map((f) => f.rule)).not.toContain('price-mismatch')
    expect(report.findings.map((f) => f.rule)).toContain('unsourced-statistic')
  })

  it('still catches a wrong price presented as ours', () => {
    // The rule must not have been weakened into uselessness by the fix above.
    const report = lintClaims({
      body: clean('Students pay \u00a32.50 a month'),
      permittedPrices: permittedPrices(),
      platform: 'x',
    })
    expect(report.findings.map((f) => f.rule)).toContain('price-mismatch')
  })

  it('accepts a price that is actually in the pricing constants', () => {
    const report = lintClaims({
      body: clean(`Students pay \u00a3${PRICING.STUDENT_MONTHLY} a month`),
      permittedPrices: permittedPrices(),
      platform: 'x',
    })
    expect(report.findings.map((f) => f.rule)).not.toContain('price-mismatch')
  })

  it('recognises the approval header as the queue actually writes it', () => {
    // With a markdown prefix and a byte-order mark. An exact-line match
    // reported seven drafts that carried the header as unapproved.
    const report = lintClaims({
      body: '\uFEFF# DRAFT FOR APPROVAL, not posted\n\nA short post.',
      permittedPrices: permittedPrices(),
      platform: 'x',
    })
    expect(report.findings.map((f) => f.rule)).not.toContain('missing-approval-header')
  })

  it('measures an X thread per post, not per file', () => {
    const thread = clean(
      [
        '---',
        'POST 1:',
        'a'.repeat(200),
        'POST 2:',
        'b'.repeat(200),
        'POST 3:',
        'c'.repeat(200),
      ].join('\n'),
    )
    expect(thread.length).toBeGreaterThan(PLATFORM_LIMITS.x)
    const report = lintClaims({ body: thread, permittedPrices: permittedPrices(), platform: 'x' })
    expect(report.findings.map((f) => f.rule)).not.toContain('length')
  })

  it('still catches a single post over the limit', () => {
    const report = lintClaims({
      body: clean('---\n' + 'a'.repeat(400)),
      permittedPrices: permittedPrices(),
      platform: 'x',
    })
    expect(report.findings.map((f) => f.rule)).toContain('length')
  })
})

describe('splitPosts', () => {
  it('finds each post in a thread', () => {
    const segments = splitPosts('POST 1:\nfirst\nPOST 2:\nsecond')
    expect(segments.map((s) => s.label)).toEqual(['POST 1', 'POST 2'])
    expect(segments[1].text).toBe('second')
  })

  it('treats a single post as one segment and drops its metadata block', () => {
    const segments = splitPosts('Platform: X\nClaims check: yes\n---\nthe body')
    expect(segments).toHaveLength(1)
    expect(segments[0].text).toBe('the body')
  })
})

// ─── Against the real queue ─────────────────────────────────────────────────

describe('the live queue', () => {
  const files = existsSync(QUEUE) ? readdirSync(QUEUE).filter((f) => f.endsWith('.md')) : []

  /**
   * Drafts whose ONLY fault is the hashtag ceiling added for SOC-4.
   *
   * Adding that rule found four real violations of the house position in
   * section 6 of 01-Content-Pillars-and-Voice.md - an Instagram post with eight
   * tags against a ceiling of six, and three YouTube posts carrying tags at all
   * where the house style says keywords belong in the title.
   *
   * They are pinned rather than fixed, and the bar below is NOT lowered to
   * accommodate them. They are Calum's copy, the whole point of the lint is to
   * refuse a draft so a person edits it, and quietly rewriting his voice to make
   * a test go green would be the wrong fix twice over. A NEW violation still
   * breaks the threshold.
   *
   * Delete an entry when its draft is edited.
   */
  const KNOWN_HASHTAG_ONLY = [
    'instagram-2026-07-03-quick-fixes-for-results-day-2026.md',
    'youtube-2026-07-05-h06-mastering-complex-sentences-for-aqa-e',
    'youtube-2026-07-07-h00-improve-your-essay-structure-in-30-se',
    'youtube-2026-07-07-h07-improve-your-essay-introduction.md',
  ]

  it.skipIf(files.length === 0)('is mostly clean, which is how a linter stays used', () => {
    // Pinned. If a change makes this fall off a cliff, the rules have become
    // noise and the real findings will go out with them.
    let clean = 0
    for (const f of files) {
      const report = lintClaims({
        body: readFileSync(join(QUEUE, f), 'utf8'),
        permittedPrices: permittedPrices(),
        platform: f.split('-')[0],
      })
      if (report.ok) {
        clean += 1
        continue
      }
      // A pinned draft counts as clean only while the hashtag ceiling is its
      // ONLY fault. Pick up a second problem and it stops being excused.
      const onlyHashtags = report.findings.every((x) => x.rule === 'hashtags')
      if (onlyHashtags && KNOWN_HASHTAG_ONLY.some((k) => f.startsWith(k.replace(/\.md$/, '')))) {
        clean += 1
      }
    }
    expect(clean / files.length).toBeGreaterThan(0.7)
  })

  it.skipIf(files.length === 0)('and the pinned hashtag drafts are all still real', () => {
    // An allowlist that outlives its entries is how a checker starts lying.
    // When one of these is edited, this fails and the entry should go with it.
    for (const pinned of KNOWN_HASHTAG_ONLY) {
      const match = files.find((f) => f.startsWith(pinned.replace(/\.md$/, '')))
      expect(match, `${pinned} is no longer in the queue - remove the pin`).toBeTruthy()
      const report = lintClaims({
        body: readFileSync(join(QUEUE, match!), 'utf8'),
        permittedPrices: permittedPrices(),
        platform: match!.split('-')[0],
      })
      expect(
        report.findings.some((x) => x.rule === 'hashtags'),
        `${pinned} no longer breaches the hashtag ceiling - remove the pin`,
      ).toBe(true)
    }
  })

  it.skipIf(files.length === 0)('still finds the mojibake the audit named', () => {
    // Three drafts carry `Â£`. If this stops finding them the rule has broken.
    const withMojibake = files.filter((f) =>
      lintClaims({
        body: readFileSync(join(QUEUE, f), 'utf8'),
        permittedPrices: permittedPrices(),
        platform: f.split('-')[0],
      }).findings.some((x) => x.rule === 'mojibake'),
    )
    expect(withMojibake.length).toBeGreaterThanOrEqual(3)
  })
})

// ─── Hashtag ceilings ───────────────────────────────────────────────────

/**
 * SOC-4's last piece: the platform hashtag ceiling.
 *
 * These are NOT platform limits, and the distinction is the point. They are the
 * house position from section 6 of 01-Content-Pillars-and-Voice.md, which says
 * of itself: "Everything below is a starting hypothesis and it gets replaced by
 * our own numbers from day 30... Do not treat this section as settled."
 *
 * So the lint refuses a draft and names the document, rather than silently
 * trimming tags. A person who disagrees should change the document.
 */
describe('hashtag ceilings follow the house document', () => {
  const lint = (platform: string, body: string) =>
    lintClaims({
      body: `DRAFT FOR APPROVAL, not posted\n\n${body}`,
      platform,
      requireApprovalHeader: false,
    }).findings.filter((f) => f.rule === 'hashtags')

  it.each([
    ['instagram', '#gcse #gcseenglish #revision #studytok', 0],
    ['tiktok', '#a #b #c #d #e #f', 0],
    ['instagram', '#a #b #c #d #e #f #g', 1],
    ['linkedin', '#a #b #c', 0],
    ['linkedin', '#a #b #c #d', 1],
    ['x', '#TeamEnglish', 0],
    ['x', '#TeamEnglish #edutwitter', 1],
  ])('%s with "%s"', (platform, body, expected) => {
    expect(lint(platform, body)).toHaveLength(expected)
  })

  it.each(['facebook', 'youtube'])('%s takes no hashtags at all', (platform) => {
    expect(lint(platform, 'A post with #gcse in it')).toHaveLength(1)
    expect(lint(platform, 'A post with no tags')).toHaveLength(0)
  })

  it('names the document the number came from', () => {
    // A refusal that just says "too many" invites an argument with the code.
    // This one sends the reader to the file they can change.
    const [finding] = lint('facebook', '#gcse')
    expect(finding.why).toContain('01-Content-Pillars-and-Voice.md')
    expect(finding.why).toContain('hypothesis')
  })

  it('does not count a C-sharp or a colour as a hashtag', () => {
    // The counterweight: a pattern of /#\S+/ would refuse a post mentioning
    // "#1 mistake" or a hex colour, which is a refusal nobody can act on.
    expect(lint('facebook', 'The #1 mistake students make')).toHaveLength(0)
    expect(lint('facebook', 'Our brand colour is #0F1411')).toHaveLength(0)
  })

  it('and says nothing about a platform with no stated ceiling', () => {
    expect(lint('newsletter', '#a #b #c #d #e #f #g #h')).toHaveLength(0)
  })
})
