// ─── Examiner Marking Tool - pure engine ────────────────────────────────────
//
// Everything in this file is deterministic and runs identically in the browser
// and on the server. No model calls, no I/O. The gates encode how a senior
// examiner places a script: best-fit level first, then position within the
// level, then the exact mark, in that order. Points-counted questions have no
// levels: the mark is min(count, max) and nothing is ever deducted.
//
// Ported from the standalone 4XEA1 Examiner Marking Tool (Sept 2026) so the
// in-app tool and the offline tool cannot drift apart on arithmetic.
// ────────────────────────────────────────────────────────────────────────────

import type {
  ExaminerCountSpec,
  ExaminerGrid,
  ExaminerLevelSpec,
  ExaminerQuestionSpec,
  ExaminerWritingSpec,
  ExtractedMark,
  GateAnswer,
  Placement,
} from './types'

export interface GateOutcome {
  /** Best-fit level given the answers so far (1-based). */
  lvl: number
  /** True once a "No" has been reached or every gate answered "Yes". */
  complete: boolean
}

/**
 * Walk the gates in order. Each "Yes" moves up one level; the first "No" (or
 * an unanswered gate) stops the walk. A grid with N levels has N-1 gates, so
 * answering every gate "Yes" lands at level N.
 */
export function levelFromGates(
  grid: Pick<ExaminerGrid, 'gates'>,
  answers: Readonly<Record<number, GateAnswer | undefined>>,
): GateOutcome {
  let lvl = 1
  for (let i = 0; i < grid.gates.length; i++) {
    const a = answers[i]
    if (a === 'yes') {
      lvl++
      continue
    }
    return { lvl, complete: a === 'no' }
  }
  return { lvl, complete: true }
}

/** The mark for a placement within a level: bottom, middle (rounded) or top. */
export function markForPlacement(
  grid: Pick<ExaminerGrid, 'levels'>,
  lvl: number,
  place: Placement,
): number {
  const level = grid.levels[lvl - 1] ?? grid.levels[grid.levels.length - 1]!
  if (place === 'bottom') return level.lo
  if (place === 'top') return level.hi
  return Math.round((level.lo + level.hi) / 2)
}

/** Apply a hard cap (e.g. Q5 "one text only" = max 8) to a level and mark. */
export function applyCap(
  spec: ExaminerLevelSpec,
  capped: boolean,
  lvl: number,
  mark: number | null,
): { lvl: number; mark: number | null } {
  if (!capped || !spec.capNote) return { lvl, mark }
  const cLvl = Math.min(lvl, spec.capNote.capLevel)
  const cMark = mark === null ? null : Math.min(mark, spec.capNote.cap)
  return { lvl: cLvl, mark: cMark }
}

export function questionMax(spec: ExaminerQuestionSpec): number {
  return spec.max
}

function plural(n: number, word: string): string {
  return n === 1 ? word : `${word}s`
}

/** Register A: one to three sentences, no level language, ends on the bare figure. */
export function renderCountCommentary(spec: ExaminerCountSpec, count: number): string {
  const n = Math.min(Math.max(0, count), spec.max)
  return spec.template
    .replace(/\{n\}/g, String(n))
    .replace(/\{marks\}/g, plural(n, 'mark'))
    .replace(/\{s\}/g, n === 1 ? '' : 's')
    .replace(/\{capClause\}/g, n < spec.max ? ` ${spec.capClause}` : '')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

/** Register B: 40 to 110 words ending on the terminal formula. */
export function renderLevelCommentary(
  spec: ExaminerLevelSpec,
  lvl: number,
  mark: number,
  place: Placement,
  feature: string,
): string {
  const verdict =
    spec.levelSentences[lvl - 1] ?? spec.levelSentences[spec.levelSentences.length - 1] ?? ''
  const placeWord = place === 'mid' ? 'middle' : place
  const placement = feature.trim()
    ? `Best fit places this at the ${placeWord} of Level ${lvl}: ${feature.trim().replace(/\.$/, '')}.`
    : '[Placement clause naming the lifting or capping feature.]'
  return spec.template
    .replace(/\{verdict\}/g, verdict)
    .replace(/\{placement\}/g, placement)
    .replace(/\{lvl\}/g, String(lvl))
    .replace(/\{mark\}/g, String(mark))
    .trim()
}

export interface WritingPart {
  gridId: string
  lvl: number
  mark: number
}

/** Register C: walkthrough, one summative paragraph per AO, then the tally. */
export function renderWritingCommentary(
  spec: ExaminerWritingSpec,
  parts: readonly WritingPart[],
  feature: string,
): string {
  const total = parts.reduce((s, p) => s + p.mark, 0)
  const [first, ...rest] = parts
  const lines: string[] = [
    '[Optional: "This response is to Question N, which asks candidates to..."]',
    '',
    '[Chronological walkthrough in the candidate\'s order - quote the candidate at least once per paragraph; name devices technically; every flaw gets "capping" / "noted but waived (...but this does not detract...)" / "possibly deliberate" treatment.]',
    '',
  ]
  if (first) {
    lines.push(
      `[${first.gridId} summative in descriptor lexis${feature.trim() ? ` - ${feature.trim()}` : ''}:] A mark of ${first.mark} in Level ${first.lvl} is appropriate for ${first.gridId}.`,
      '',
    )
  }
  for (const p of rest) {
    lines.push(
      `For ${p.gridId} the candidate [ideas/organisation]. Vocabulary is [calibrated adjective], for example '[w1]', '[w2]', '[w3]', '[w4]', and spelling is [verdict]. [Punctuation/syntax verdict]. A mark of ${p.mark} is appropriate.`,
      '',
    )
  }
  const tally = parts.map((p) => `${p.gridId} Level ${p.lvl} - ${p.mark}`)
  if (tally.length) {
    tally[tally.length - 1] = `${tally[tally.length - 1]} = ${total}`
  }
  lines.push(...tally)
  return lines.join('\n')
}

export interface TranscriptStats {
  /** Doubtful readings, [?word]. */
  doubtful: number
  /** Unreadable stretches, [illegible...]. */
  illegible: number
  words: number
}

export function transcriptStats(text: string): TranscriptStats {
  const doubtful = (text.match(/\[\?[^\]]*\]/g) || []).length
  const illegible = (text.match(/\[illegible[^\]]*\]/gi) || []).length
  const words = (text.replace(/\[[^\]]*\]/g, ' ').match(/[A-Za-z'’-]+/g) || []).length
  return { doubtful, illegible, words }
}

const TRANSCRIPT_TAG = '<<<TRANSCRIPT>>>'
const NOTES_TAG = '<<<NOTES>>>'

/** Split a two-section transcription reply into its transcript and notes. */
export function splitTranscript(raw: string): { text: string; notes: string } {
  const t = raw.indexOf(TRANSCRIPT_TAG)
  const n = raw.indexOf(NOTES_TAG)
  if (t < 0) return { text: raw.trim(), notes: '' }
  const text = raw.slice(t + TRANSCRIPT_TAG.length, n < 0 ? undefined : n).trim()
  const notes = n < 0 ? '' : raw.slice(n + NOTES_TAG.length).trim()
  return { text, notes }
}

/**
 * Pull the awarded mark out of examiner commentary. Tries, in order: a tally
 * line ending "= Z" (writing questions), the last "Level N - X marks" formula,
 * an "X / max" fraction, then the last bare "X marks" that fits the maximum.
 * Returns null rather than guessing when nothing plausible is found.
 */
export function extractMark(text: string, spec: ExaminerQuestionSpec | null): ExtractedMark | null {
  if (!text) return null
  const max = spec ? spec.max : null
  const fits = (m: number) => max === null || (m >= 0 && m <= max)

  if (spec?.kind === 'writing') {
    const tally = text.match(/=\s*(\d+)\s*$/m)
    if (tally) {
      const m = Number(tally[1])
      if (fits(m)) return { mark: m, max, note: spec.grids.map((g) => g.id).join(' + ') }
    }
  }

  let last: ExtractedMark | null = null
  const lvl = /Level\s*(\d)\s*[-–—]\s*(\d+)\s*marks?/gi
  let m: RegExpExecArray | null
  while ((m = lvl.exec(text))) {
    const mark = Number(m[2])
    if (fits(mark)) last = { mark, max, note: `Level ${m[1]}` }
  }
  if (last) return last

  if (max !== null) {
    const frac = new RegExp(`\\b(\\d+)\\s*/\\s*${max}\\b`, 'g')
    while ((m = frac.exec(text))) {
      const mark = Number(m[1])
      if (fits(mark)) last = { mark, max, note: '' }
    }
    if (last) return last
  }

  const bare = /(\d+)\s*marks?\b/gi
  while ((m = bare.exec(text))) {
    const mark = Number(m[1])
    if (fits(mark)) last = { mark, max, note: '' }
  }
  return last
}

/** House style: no em or en dashes in anything a teacher reads. */
export function normaliseDashes(s: string): string {
  return s.replace(/\s*[—–]\s*/g, ' - ')
}

/** Escape a string for safe interpolation into a regular expression. */
export function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
