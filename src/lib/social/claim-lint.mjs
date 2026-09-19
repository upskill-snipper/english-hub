/**
 * Refuse social copy that makes a claim we cannot stand behind (AUTO-3).
 *
 * WHY A MACHINE AND NOT A LINE OF PROSE. The claim check today is the sentence
 * "Claims check: verified 18 Aug 2026" written at the top of a draft. Nothing
 * reads it. What happens without a machine check is already on record: thirteen
 * marketing documents still promise a 20 per cent affiliate commission that the
 * programme does not pay, and three queued drafts carry mojibake from a
 * re-encoded file. Both classes survived every human read they were given,
 * because a human reading for sense does not notice a number that is merely
 * wrong.
 *
 * THE RULES ARE NOT EDITORIAL PREFERENCES. They come from the voice document's
 * section 2, which takes them from TEHC-020 and TEH-SOP-001, and from the
 * verified claim sheet. Two of them exist because this is a children's product:
 * no grade promises, and no fabricated social proof. The rest exist because a
 * public claim that turns out to be false is a regulatory problem, not a
 * marketing one.
 *
 * WHAT IT DELIBERATELY DOES NOT DO. It does not judge whether the writing is
 * any good, and it does not rewrite. It refuses, names the rule and quotes the
 * text, so the person fixing it learns the rule. A linter that silently
 * corrected copy would teach nobody and would hide the fact that a draft needed
 * correcting at all.
 */

/**
 * Per-platform hashtag ceilings (SOC-4).
 *
 * These are NOT platform limits. They are the house position, taken verbatim
 * from section 6 of
 * `12 Launch Campaign 2026/04 Social Content/00 Plan/01-Content-Pillars-and-Voice.md`,
 * which says so itself:
 *
 *   "We have no performance data of our own, because we launch on 1 September.
 *    Everything below is a starting hypothesis and it gets replaced by our own
 *    numbers from day 30... Do not treat this section as settled."
 *
 * That caveat is the reason this is a lint rather than a truncation: it refuses
 * a draft and says which document the number came from, so the person reading
 * the refusal can change the document rather than argue with the code.
 *
 *   TikTok and Instagram   three to six
 *   X                      zero to one
 *   LinkedIn               three at most
 *   YouTube                keywords belong in the title, not a wall of tags
 *   Facebook               none; they read as spam in a parents' group
 */
const HASHTAG_CEILING = {
  tiktok: 6,
  instagram: 6,
  x: 1,
  twitter: 1,
  linkedin: 3,
  youtube: 0,
  facebook: 0,
}

/** A hashtag, not a C# heading or a colour. Requires a letter to follow the #. */
const HASHTAG = /(?:^|\s)(#[A-Za-z][A-Za-z0-9_]*)/g

/** Per-platform hard limits. Exceeding one is not a style problem; the post is truncated. */
export const PLATFORM_LIMITS = {
  x: 280,
  instagram: 2200,
  tiktok: 2200,
  facebook: 63206,
  linkedin: 3000,
  youtube: 5000,
  newsletter: 100_000,
  blog: 100_000,
}

const HYPE = [
  'revolutionary',
  'game-changing',
  'game changing',
  'cutting-edge',
  'cutting edge',
  'world-class',
  'world class',
  'supercharge',
  'unlock your potential',
  'next-level',
  'next level',
  'best-in-class',
  'best in class',
]

/**
 * Social-proof shapes. Each one is a sentence we have no evidence for.
 *
 * `\d` patterns are deliberate: "join 2,000 students" is the exact shape that
 * was deleted out of the product in August, and it comes back most easily as a
 * number somebody believed was real.
 */
const FABRICATED = [
  /\bjoin thousands\b/i,
  /\btrusted by\b/i,
  /\bloved by\b/i,
  /\bover \d[\d,]*\s+(students|pupils|schools|teachers|parents|users|downloads)\b/i,
  /\b\d[\d,]*\+?\s+(students|pupils|schools|teachers|parents|users)\s+(use|trust|love|have)\b/i,
  /\b\d(\.\d)?\s*(out of|\/)\s*5\b/i,
  /\b\d[\d,]*\s+(reviews|ratings|testimonials)\b/i,
  /\b(official|endorsed|approved)\s+(by\s+)?(aqa|edexcel|pearson|ocr|eduqas|cambridge|wjec)\b/i,
]

const GRADE_PROMISE = [
  /\bboost your grade/i,
  /\bguarantee(d|s)?\s+(results|a grade|grades)/i,
  /\bfrom a\s*\d\s*to a\s*\d/i,
  /\bget (a |an )?(grade )?[789]\b/i,
  /\bguaranteed\s+improvement/i,
  /\braise your grade/i,
]

const TRIAL_FICTION = [/\b3 free uses\b/i, /\bthree free uses\b/i, /\bthree free\b/i]

/** Mojibake: UTF-8 bytes read as Latin-1. Already present in three queued drafts. */
const MOJIBAKE = /Â£|â€™|â€œ|â€|Ã©|ï¿½|â€"/

/** A statistic needs a named, checkable source in the same asset. */
const STATISTIC = /\b\d{1,3}(?:\.\d+)?\s*(?:per cent|percent|%)\b/i
const SOURCE_LINE = /^\s*\*?\s*Source:\s*\S+/im

/** A tariff or question number asserted means a spec-check line is required. */
const TARIFF = /\b(\d{1,3})\s*marks?\b|\bquestion\s*\d\b|\bq\d\b|\bpaper\s*[12]\b/i
const SPEC_CHECK = /^\s*\*?\s*Spec check:/im

/** Student writing shown must be labelled as written for the demo. */
const STUDENT_WRITING =
  /\b(example answer|model answer|student (answer|response|essay)|sample essay)\b/i
const DEMO_LABEL = /Example written for this demo\./

const EM_DASH = /[—–]/
const DOUBLE_HYPHEN = /(?<!-)--(?!-)/
// `TEH-03` and `TEH-08` are internal agent identifiers in the draft metadata,
// not the product abbreviated. The first version of this matched them and
// flagged 29 of 36 drafts - a false-positive rate that would have made the
// whole linter something people switch off.
const ABBREVIATION = /\bTEH\b(?!-)/

// Matches a run of emoji. Kept as an explicit range rather than a property
// escape so the behaviour does not shift with the Unicode version.
const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{1F900}-\u{1F9FF}]/gu

// Allows a markdown heading prefix and a byte-order mark. The queue writes it
// as "# DRAFT FOR APPROVAL, not posted" and several files begin with a BOM, so
// an exact-line match reported 7 of 36 drafts as unapproved when every one of
// them carried the header. A linter whose findings are mostly wrong is a
// linter that gets switched off.
const APPROVAL_HEADER = /^﻿?#{0,6}\s*DRAFT FOR APPROVAL, not posted\s*$/m

/**
 * Split a draft into the individual posts it contains.
 *
 * A thread file marks them `POST 1:`, `POST 2:` and so on. A single-post file
 * has no markers and is one segment. The metadata block above the first marker
 * (platform, slot, claims check) is not published and is not measured.
 */
export function splitPosts(body) {
  const markers = [...body.matchAll(/^\s*POST\s+(\d+)\s*:/gim)]
  if (markers.length === 0) {
    // Strip the metadata header so its lines are not counted against the limit.
    // `^---$` on its own line ends the metadata block. Matched with a regex so
    // this needs no literal newline in a source string.
    const rule = body.match(/^-{3,}$/m)
    const text = rule?.index === undefined ? body : body.slice(rule.index + rule[0].length)
    return [{ label: 'post', text: text.trim() }]
  }
  return markers.map((m, i) => {
    const start = (m.index ?? 0) + m[0].length
    const end = i + 1 < markers.length ? (markers[i + 1].index ?? body.length) : body.length
    return { label: `POST ${m[1]}`, text: body.slice(start, end).trim() }
  })
}

/**
 * Every rule, always run. The report lists which rules were applied so that an
 * approval records what was actually checked rather than that something was.
 */
/**
 * @param {import('./claim-lint').LintInput} input
 * @returns {import('./claim-lint').ClaimReport}
 */
export function lintClaims({ body, platform, requireApprovalHeader = true, permittedPrices = [] }) {
  /** @type {import("./claim-lint").ClaimFinding[]} */
  const findings = []
  const add = (rule, quote, why) => findings.push({ rule, quote, why })

  const quoteAround = (index, length = 60) =>
    body
      .slice(Math.max(0, index - 20), Math.min(body.length, index + length))
      .replace(/\s+/g, ' ')
      .trim()

  for (const pattern of FABRICATED) {
    const m = body.match(pattern)
    if (m) {
      add(
        'fabricated-proof',
        m[0],
        'No user, pupil, school or download counts, no testimonials, no ratings, no ' +
          '"join thousands". This class of claim was deleted out of the product in August; ' +
          'it does not come back in through the marketing.',
      )
    }
  }

  for (const pattern of GRADE_PROMISE) {
    const m = body.match(pattern)
    if (m) {
      add(
        'grade-promise',
        m[0],
        'No grade promises, ever. This is a children’s product: we teach skills, we do ' +
          'not sell outcomes.',
      )
    }
  }

  const stat = body.match(STATISTIC)
  if (stat && !SOURCE_LINE.test(body)) {
    add(
      'unsourced-statistic',
      stat[0],
      'An external statistic needs a real, checkable source named in the same asset, as ' +
        '"* Source: [publishing body], [report title] ([year])." No source, no statistic - ' +
        'make the argument qualitatively instead.',
    )
  }

  const emDash = body.match(EM_DASH)
  if (emDash) {
    add(
      'em-dash',
      emDash[0],
      'British English house style: a spaced hyphen ( - ), never an em or en dash.',
    )
  }
  const doubleHyphen = body.match(DOUBLE_HYPHEN)
  if (doubleHyphen) {
    add('em-dash', '--', 'Never a literal double hyphen; use a spaced hyphen.')
  }

  for (const word of HYPE) {
    const at = body.toLowerCase().indexOf(word)
    if (at !== -1) add('hype', quoteAround(at), `"${word}" is on the banned hype list.`)
  }

  const abbrev = body.match(ABBREVIATION)
  if (abbrev) {
    add(
      'abbreviation',
      'TEH',
      'Never abbreviate the product to three letters; it is "The English Hub".',
    )
  }

  for (const pattern of TRIAL_FICTION) {
    const m = body.match(pattern)
    if (m) {
      add(
        'trial-mechanic',
        m[0],
        'There is no "three free uses" mechanic and there never was. Signup is a 7-day free ' +
          'trial with no card; courses, revision notes and flashcards are free forever with an account.',
      )
    }
  }

  const commission = body.match(
    /\b\d{1,2}(?:\.\d)?\s*(?:per cent|percent|%)\s*(?:commission|recurring)/i,
  )
  if (commission) {
    add(
      'commission-rate',
      commission[0],
      'No percentage commission in copy. Thirteen marketing documents still promise a rate ' +
        'the programme does not pay; the rate belongs in the affiliate terms, not in a post.',
    )
  }

  // Prices are checked against the only permitted source.
  // Injected rather than imported: this file runs under plain Node in the
  // drafter script as well as inside the app, and `src/constants/pricing.ts`
  // is TypeScript. `every-claim-source-agrees` asserts the two callers pass
  // the same set, because a second copy of a price list is how a post ends up
  // advertising a price checkout does not charge.
  const permitted = new Set(permittedPrices)
  //
  // Only where the amount is presented as OUR price. The first version flagged
  // every pound sign, including "a tutor typically costs £25-£50 an hour" - a
  // claim about the market, which is a different rule with a different remedy
  // (it needs a source, not a correction). Flagging it as a price mismatch
  // would send somebody to change a number that was never ours.
  // Is the amount presented as OUR price? Looked for in a window AFTER the
  // amount, as separate simple tests rather than one alternation - the single
  // combined regex silently failed on "a month" and "per month" while working
  // on "/month", and a rule that fires on one spelling of the same sentence is
  // worse than no rule.
  const PERIOD_MARKERS = [
    /^\s*\/\s*(mo|month|yr|year)/i,
    /^\s*(per|a|an|each)\s+(month|year|term)/i,
    /^\s*(monthly|annually|a year|a month)/i,
    /^\s*(per|a)\s+(pupil|student|teacher)/i,
  ]
  for (const m of body.matchAll(/£\s?(\d+(?:,\d{3})*(?:\.\d{2})?)/g)) {
    const at = m.index ?? 0
    const after = body.slice(at + m[0].length, at + m[0].length + 24)
    if (!PERIOD_MARKERS.some((p) => p.test(after))) continue
    const raw = m[1].replace(/,/g, '')
    const amount = Number(raw).toFixed(2)
    if (!permitted.has(amount) && !permitted.has(raw)) {
      add(
        'price-mismatch',
        m[0],
        `${m[0]} is presented as our price and is not in src/constants/pricing.ts, which is ` +
          'the only permitted source. A price in a post that does not match checkout is a ' +
          'claim we cannot stand behind.',
      )
    }
  }

  // A money amount that is NOT ours, used to make a comparison, is a claim
  // about the market and needs a source like any other statistic.
  for (const m of body.matchAll(/£\s?\d[\d,]*(?:\.\d{2})?/g)) {
    const window = body.slice(Math.max(0, (m.index ?? 0) - 60), (m.index ?? 0) + 60)
    const comparative = /\b(typically|average|on average|costs?|charges?|usually|around)\b/i.test(
      window,
    )
    if (comparative && !SOURCE_LINE.test(body)) {
      add(
        'unsourced-statistic',
        window.replace(/\s+/g, ' ').trim(),
        'A claim about what something else costs is an external statistic and needs a real, ' +
          'checkable source named in the same asset.',
      )
      break
    }
  }

  const mojibake = body.match(MOJIBAKE)
  if (mojibake) {
    add(
      'mojibake',
      mojibake[0],
      'UTF-8 read as Latin-1. Three queued drafts already carry this from a re-encoded file; ' +
        'it reaches the reader as broken characters in the middle of a price.',
    )
  }

  if (STUDENT_WRITING.test(body) && !DEMO_LABEL.test(body)) {
    add(
      'missing-demo-label',
      body.match(STUDENT_WRITING)[0],
      'Student writing shown in an asset must carry "Example written for this demo." so it is ' +
        'never mistaken for a real pupil’s work.',
    )
  }

  if (TARIFF.test(body) && !SPEC_CHECK.test(body)) {
    add(
      'missing-spec-check',
      body.match(TARIFF)[0],
      'A tariff or question number asserted in public needs a "Spec check:" line naming the ' +
        'specification it came from, or the sentence rewritten at technique level.',
    )
  }

  // Length is measured PER POST, not per file. An X thread is four posts in one
  // file and legitimately runs to a thousand characters; measuring the file
  // reported every thread as over the limit, which is the opposite of useful.
  const limit = PLATFORM_LIMITS[platform.toLowerCase()]
  if (limit !== undefined) {
    for (const segment of splitPosts(body)) {
      if (segment.text.length > limit) {
        add(
          'length',
          `${segment.label}: ${segment.text.length} characters`,
          `${platform} truncates at ${limit}. A post over the limit is not a style problem; ` +
            'the end of it does not exist.',
        )
      }
    }
  }

  const ceiling = HASHTAG_CEILING[platform.toLowerCase()]
  if (ceiling !== undefined) {
    const tags = [...body.matchAll(HASHTAG)].map((m) => m[1])
    if (tags.length > ceiling) {
      add(
        'hashtags',
        tags.join(' '),
        ceiling === 0
          ? `House style puts no hashtags on ${platform}. See section 6 of ` +
              '01-Content-Pillars-and-Voice.md, which is a starting hypothesis, not a platform rule.'
          : `${tags.length} hashtags; house style for ${platform} is at most ${ceiling}. ` +
              'See section 6 of 01-Content-Pillars-and-Voice.md, which is a starting ' +
              'hypothesis and is meant to be replaced by our own numbers.',
      )
    }
  }

  const emoji = body.match(EMOJI) ?? []
  if (emoji.length > 1) {
    add('emoji', emoji.join(' '), 'At most one emoji, and at the end. House style.')
  }

  if (requireApprovalHeader && !APPROVAL_HEADER.test(body)) {
    add(
      'missing-approval-header',
      '(absent)',
      'Every draft carries "DRAFT FOR APPROVAL, not posted" on its own line. Nothing posts ' +
        'itself; the header is what makes an unapproved file obvious at a glance.',
    )
  }

  return {
    ok: findings.length === 0,
    findings,
    checkedRules: [
      'fabricated-proof',
      'grade-promise',
      'unsourced-statistic',
      'em-dash',
      'hype',
      'abbreviation',
      'trial-mechanic',
      'commission-rate',
      'price-mismatch',
      'mojibake',
      'missing-demo-label',
      'missing-spec-check',
      'length',
      'emoji',
      ...(requireApprovalHeader ? ['missing-approval-header'] : []),
    ],
  }
}
