/**
 * Every rule a study guide must satisfy, as a pure function.
 *
 * Shared by src/__tests__/study-guides.test.ts and by whoever is writing a
 * guide, so the author and the gate check exactly the same thing. Returns a list
 * of problems; empty means the guide passes.
 *
 * WHAT IT CANNOT CHECK. Whether a quotation is accurate. For public-domain texts
 * the test does that separately, against the byte-copy editions in
 * src/data/full-texts. For texts in copyright there is no licensed copy in the
 * repository to check against, so accuracy rests on the sources recorded in the
 * guide and on the review that produced it. The rules below make the unsafe
 * shapes impossible; they do not make a wrong quotation right.
 */

import { limitsFor } from './fair-dealing'
import { sectionsPresent } from './sections'
import type { StudyGuide } from './types'

/** Words in a string, the way a reader would count them. */
export function wordCount(s: string): number {
  return s
    .replace(/[—–-]/g, ' ')
    .split(/\s+/)
    .filter((w) => /[\p{L}\p{N}]/u.test(w)).length
}

/** Lines in a quotation or extract from a poem, where lines are separated by " / ". */
export function lineCount(s: string): number {
  return s.split(/\s\/\s/).filter((l) => l.trim()).length
}

function normalise(s: string): string {
  return s
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[^\p{L}\p{N}' ]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * How much of the work a guide reproduces, counted once.
 *
 * A phrase quoted in a key quotation, again on a scene card and again inside an
 * analysis sentence is one taking, not three, so repeats are collapsed and a
 * quotation that sits inside a longer one adds nothing. What is left is the
 * distinct text of the work on the page, which is the thing fairness measures.
 */
export function quotedTotals(guide: StudyGuide): {
  words: number
  lines: number
  passages: string[]
} {
  const all = [
    ...quotationsOf(guide),
    ...(guide.extracts ?? []).flatMap((e) => [e.text ?? '', ...e.annotations.map((a) => a.phrase)]),
    ...proseOf(guide).flatMap((x) => quotedSpans(x)),
  ]
    .map((q) => q.trim())
    .filter((q) => wordCount(q) > 0)
  const byLength = [...new Set(all)].sort((a, b) => wordCount(b) - wordCount(a))
  const kept: string[] = []
  for (const q of byLength) {
    const n = normalise(q)
    if (!kept.some((k) => normalise(k).includes(n))) kept.push(q)
  }
  return {
    words: kept.reduce((t, q) => t + wordCount(q), 0),
    lines: kept.reduce((t, q) => t + lineCount(q), 0),
    passages: kept,
  }
}

/** Text inside double quotation marks, straight or curly, anywhere in prose. */
export function quotedSpans(s: string): string[] {
  const out: string[] = []
  for (const m of s.matchAll(/“([^”]+)”|"([^"]+)"/g)) out.push(m[1] ?? m[2])
  return out
}

/** Every prose string in a guide except the verbatim quotations themselves. */
export function proseOf(guide: StudyGuide): string[] {
  const out: string[] = []
  const push = (...xs: (string | undefined)[]) => {
    for (const x of xs) if (x) out.push(x)
  }
  push(guide.scope, guide.rights.acknowledgement, guide.quoteNote)
  guide.overview?.summary.forEach((p) => push(p))
  guide.context?.forEach((c) => push(c.heading, c.body))
  guide.themes?.forEach((th) => push(th.title, th.body))
  guide.characters?.forEach((c) => push(c.name, c.role, c.body))
  guide.keyQuotes?.forEach((q) => push(q.where, q.analysis))
  guide.extracts?.forEach((e) =>
    push(e.title, e.where, e.pointer, e.summary, e.question, ...e.annotations.map((x) => x.note)),
  )
  guide.languageAnalysis?.forEach((l) => push(l.technique, l.example, l.effect))
  guide.structureForm?.forEach((s) => push(s.heading, s.body))
  guide.vocabulary?.forEach((v) => push(v.term, v.definition))
  guide.examPractice?.questions.forEach((q) => push(q.question, q.skill, ...q.guidance))
  guide.examPractice?.tips.forEach((tip) => push(tip))
  if (guide.modelAnswer)
    push(guide.modelAnswer.question, guide.modelAnswer.paragraph, ...guide.modelAnswer.commentary)
  guide.compareWith?.forEach((c) => push(c.title, c.reason))
  guide.timeline.forEach((m) => push(m.where, m.title, m.summary, m.setting, m.significance))
  guide.relationships.forEach((r) => push(r.kind, r.note))
  return out
}

/** Every verbatim quotation in a guide: the key quotes and the scene cards. */
export function quotationsOf(guide: StudyGuide): string[] {
  return [
    ...(guide.keyQuotes ?? []).map((q) => q.text),
    ...guide.timeline.flatMap((m) => (m.quote ? [m.quote] : [])),
  ]
}

/** Forms with a cast, for which an empty character map is a gap rather than a fact. */
const HAS_CAST = new Set(['novel', 'novella', 'play', 'short-story', 'short-story-collection'])

/** Strip anything inside quotation marks, so house-style checks skip quoted text. */
function unquoted(s: string): string {
  return s.replace(/“[^”]*”|"[^"]*"|‘[^’]*’/g, ' ')
}

/**
 * American spellings, checked outside quotation marks only. A guide to The
 * Great Gatsby quotes Fitzgerald's "color" and must; it may not write "color"
 * in its own voice. A denylist rather than a dictionary: short, and every entry
 * is a word these guides are likely to reach for.
 */
const AMERICANISMS =
  /\b(color(s|ed|ful|ing)?|analyz\w*|behavior\w*|center(s|ed)?|favorite\w*|honor(s|ed|able)?|humor\w*|labor\w*|neighbor\w*|theater|traveled|traveling|defense|offense|gray|mom)\b/i
const IZE =
  /\b(?!(?:size|sized|prize|prized|seize|seized|capsize|baize|assize)\b)\w{3,}(ize|izes|ized|izing|ization|izations)\b/i

export type GuideContext = {
  /** From the set-text registry. */
  registered: boolean
  /**
   * The author printed in a VERIFIED specification module, where there is one.
   * The registry has been wrong about authors: it held Bernard MacLaverty for a
   * story the anthology prints as Alice Munro's.
   */
  verifiedAuthor?: string
}

export function validateGuide(guide: StudyGuide, ctx: GuideContext): string[] {
  const problems: string[] = []
  const p = (msg: string) => problems.push(`${guide.slug}: ${msg}`)

  if (!ctx.registered) p('slug is not a registered set text')
  if (ctx.verifiedAuthor) {
    const surname = (s: string) =>
      s
        .replace(/\(.*?\)/g, '')
        .trim()
        .split(/\s+/)
        .pop()
        ?.toLowerCase()
    if (surname(guide.author) !== surname(ctx.verifiedAuthor)) {
      p(`author "${guide.author}" disagrees with the specification's "${ctx.verifiedAuthor}"`)
    }
  }

  if (!guide.scope.trim())
    p('scope is empty: say whether the student studies the whole text or an extract')
  if (!guide.rights.acknowledgement.trim()) p('rights.acknowledgement is empty')
  if (guide.rights.status === 'copyright' && !guide.rights.acknowledgement.includes('©')) {
    p('a text in copyright needs a © acknowledgement')
  }
  if (guide.sources.length === 0)
    p('sources is empty: record where the quotations and facts were checked')

  // ── The bar each section has to meet, which is the audit rubric ──────────
  const has = new Set(sectionsPresent(guide))
  const min = (ok: boolean, msg: string) => {
    if (!ok) p(msg)
  }
  if (has.has('context'))
    min((guide.context?.length ?? 0) >= 3, 'context needs at least three entries')
  if (has.has('themes')) min((guide.themes?.length ?? 0) >= 3, 'themes needs at least three')
  if (has.has('keyQuotes')) {
    // Six, or three with a note saying why the wording could not be checked
    // further. See quoteNote in types.ts: the lower bar exists so that a text
    // with an unverifiable prescribed wording is never padded with guesses.
    const floor = guide.quoteNote?.trim() ? 3 : 6
    min(
      (guide.keyQuotes?.length ?? 0) >= floor,
      `keyQuotes needs at least ${floor === 6 ? 'six' : 'three'}`,
    )
  }
  if (has.has('languageAnalysis'))
    min(
      (guide.languageAnalysis?.length ?? 0) >= 4,
      'languageAnalysis needs at least four techniques',
    )
  if (has.has('vocabulary'))
    min((guide.vocabulary?.length ?? 0) >= 8, 'vocabulary needs at least eight entries')
  if (has.has('examPractice')) {
    min(
      (guide.examPractice?.questions.length ?? 0) >= 2,
      'examPractice needs at least two questions',
    )
    for (const q of guide.examPractice?.questions ?? []) {
      if (q.guidance.length < 3)
        p(`exam question "${q.question.slice(0, 40)}..." needs at least three guidance points`)
    }
  }
  if (has.has('modelAnswer')) {
    min(
      wordCount(guide.modelAnswer?.paragraph ?? '') >= 90,
      'modelAnswer paragraph needs at least 90 words',
    )
    min(
      (guide.modelAnswer?.commentary.length ?? 0) >= 3,
      'modelAnswer needs at least three commentary points',
    )
  }
  for (const th of guide.themes ?? []) {
    if (wordCount(th.body) < 40)
      p(`theme "${th.title}" is under 40 words: a theme needs developing, not naming`)
  }

  // ── The timeline and the character map, which the animations draw ───────
  const minMoments = guide.form === 'poem' ? 3 : guide.form === 'non-fiction' ? 4 : 6
  if (guide.timeline.length < minMoments)
    p(`timeline needs at least ${minMoments} moments for a ${guide.form}`)
  const themeTitles = new Set((guide.themes ?? []).map((th) => th.title))
  const castNames = new Set((guide.characters ?? []).map((c) => c.name))
  for (const m of guide.timeline) {
    if (![1, 2, 3, 4, 5].includes(m.tension))
      p(`moment "${m.title}" has tension ${m.tension}; use 1 to 5`)
    if (wordCount(m.summary) < 15) p(`moment "${m.title}" summary is under 15 words`)
    if (!m.setting.trim()) p(`moment "${m.title}" has no setting`)
    if (!m.significance.trim()) p(`moment "${m.title}" has no significance line`)
    // A card's theme chip must name a theme the guide explains, or it links to nothing.
    if (themeTitles.size > 0) {
      for (const th of m.themes)
        if (!themeTitles.has(th))
          p(`moment "${m.title}" names theme "${th}", which is not in themes`)
    }
    if (castNames.size > 0) {
      for (const w of m.who)
        if (!castNames.has(w)) p(`moment "${m.title}" names "${w}", who is not in characters`)
    }
  }
  if (HAS_CAST.has(guide.form) && guide.relationships.length < 3) {
    p(`a ${guide.form} needs at least three relationships in its character map`)
  }
  if (castNames.size > 0) {
    for (const r of guide.relationships) {
      for (const n of [r.from, r.to])
        if (!castNames.has(n)) p(`relationship names "${n}", who is not in characters`)
    }
  }

  // ── Extracts: every one annotated, located, and in the right shape ──────
  for (const e of guide.extracts ?? []) {
    if (e.annotations.length < 3) p(`extract "${e.title}" needs at least three annotations`)
    if (!e.question.trim()) p(`extract "${e.title}" needs a question`)
    if (!e.pointer.trim()) p(`extract "${e.title}" needs a pointer saying where to find it`)
    if (guide.rights.status === 'copyright' && e.text) {
      // Not printed for a copyrighted text: see fair-dealing.ts.
      p(
        `extract "${e.title}" prints the passage of a copyrighted text; give a pointer and a summary instead`,
      )
    }
    if (!e.text && wordCount(e.summary ?? '') < 30) {
      p(`extract "${e.title}" has no text, so it needs a summary of at least 30 words`)
    }
    for (const a of e.annotations) {
      if (e.text && !normalise(e.text).includes(normalise(a.phrase))) {
        p(`extract "${e.title}" annotates "${a.phrase.slice(0, 40)}", which is not in the extract`)
      }
      if (wordCount(a.note) < 12)
        p(`extract "${e.title}" note on "${a.phrase.slice(0, 30)}" is under 12 words`)
    }
  }

  // ── Copyright: the limits in fair-dealing.ts ───────────────────────────
  if (guide.rights.status === 'copyright') {
    if (!guide.workLength || !guide.workLength.words) {
      p(
        'a text in copyright needs workLength.words, because the total it may quote is a share of its length',
      )
    }
    const lim = limitsFor(guide.form, guide.workLength)
    const quotes = [
      ...quotationsOf(guide),
      ...(guide.extracts ?? []).flatMap((e) => e.annotations.map((a) => a.phrase)),
      ...proseOf(guide).flatMap((x) => quotedSpans(x)),
    ]
    for (const q of quotes) {
      const n = wordCount(q)
      if (n > lim.quoteWords)
        p(`quotation is ${n} words, over the ${lim.quoteWords}-word limit: "${q.slice(0, 60)}"`)
      if (lim.quoteLines && lineCount(q) > lim.quoteLines)
        p(
          `quotation runs to ${lineCount(q)} lines of the poem, over the ${lim.quoteLines}-line limit: "${q.slice(0, 60)}"`,
        )
    }
    const total = quotedTotals(guide)
    if (total.words > lim.totalWords) {
      p(
        `the page quotes ${total.words} words of the work in total, over the ${lim.totalWords}-word limit for a ${lim.kind === 'poem' ? 'poem of this length' : lim.kind === 'short' ? 'short work of this length' : 'long work'}`,
      )
    }
  }
  for (const q of guide.keyQuotes ?? []) {
    if (!q.text.trim()) p('a key quotation is empty')
    if (/^["“‘']|["”’']$/.test(q.text.trim())) {
      p(
        `key quotation carries its own quotation marks, which the page adds: ${q.text.slice(0, 40)}`,
      )
    }
    if (wordCount(q.analysis) < 25) p(`analysis of "${q.text.slice(0, 30)}..." is under 25 words`)
  }

  // ── House style, outside quotation marks ────────────────────────────────
  for (const s of proseOf(guide)) {
    const own = unquoted(s)
    if (own.includes('—')) p(`em dash in: ${s.slice(0, 60)}`)
    if (own.includes('!')) p(`exclamation mark in: ${s.slice(0, 60)}`)
    const us = own.match(AMERICANISMS)
    if (us) p(`American spelling "${us[0]}" in: ${s.slice(0, 60)}`)
    const ize = own.match(IZE)
    if (ize) p(`-ize spelling "${ize[0]}" in: ${s.slice(0, 60)}`)
  }

  // ── Nothing unverified about the exam itself ─────────────────────────────
  // Mark tariffs and assessment-objective numbers differ between boards, and
  // several texts sit on boards whose specifications have not been read. A
  // guide that says "12 marks" or "AO3" for a text on four boards is right for
  // at most one of them. Placement facts come from ExamPlacementCard, which
  // only renders what a specification was read for.
  const examText = [
    ...(guide.examPractice?.questions.flatMap((q) => [q.question, q.skill, ...q.guidance]) ?? []),
    ...(guide.examPractice?.tips ?? []),
    guide.modelAnswer?.question ?? '',
    ...(guide.modelAnswer?.commentary ?? []),
  ].join('\n')
  if (/\b\d+\s*marks?\b/i.test(examText))
    p('exam practice states a mark tariff; placement facts belong to ExamPlacementCard')
  if (/\bAO\s?\d\b/.test(proseOf(guide).join('\n')))
    p('names an assessment objective by number, which differs between boards')

  return problems
}
