/**
 * Where a set text actually sits on the student's exam.
 *
 * WHY THIS EXISTS. Every set-text page carried four paragraphs of study tips
 * that were byte-identical on all 108 of them - "read the whole text", "learn
 * quotations", and two more of the same. For the 75 texts with no guide written
 * that boilerplate WAS the page. The founder's word for it was waste, and he
 * was right: it told a student nothing they could not have guessed, and nothing
 * about their own exam.
 *
 * What we can say, and almost nobody else does, is the thing a student actually
 * needs before they revise: which paper this text is on, which section, what it
 * is worth, and whether they have to study it or chose it. That is a fact
 * printed in a specification, not an opinion, and four specifications were read
 * in full on 19 September 2026 to get it.
 *
 * NOTHING HERE IS INFERRED. Every placement comes from a module that records
 * the document it was read from and that document's version string. A text with
 * no verified placement returns nothing and the page renders nothing, because
 * "we have not checked your board" and "your board does not set this" are
 * different statements and a guess would blur them.
 *
 * THE EXAM YEAR IS CARRIED WHERE IT MATTERS. Cambridge rotates 0475 every year
 * and serves several syllabuses side by side with no archived label, so a
 * Cambridge placement without its year is not a fact about anybody's exam.
 */

import type { ExamBoard } from './board-config'
import { getDisplayName } from './board-config'
import { ANTHOLOGY, ANTHOLOGY_SOURCE } from './edexcel-igcse-anthology'
import { LITERATURE_4ET1, LITERATURE_4ET1_SOURCE } from './edexcel-igcse-literature'
import { CAMBRIDGE_0475 } from './cambridge-0475'

export interface ExamPlacement {
  board: ExamBoard
  /** The board's display name, so a caller need not resolve it again. */
  boardName: string
  /** Where it is assessed, in the specification's own words. */
  assessedIn: string
  /** "All sixteen are compulsory", or "One of seven". */
  selection: string
  /** Extra detail the document gives: anthology part and page, story number. */
  detail?: string
  /** The exam series this applies to, where the board changes it between years. */
  examYear?: number
  source: { title: string; version: string; readOn: string }
}

/** The current series for boards whose texts rotate. Today is September 2026. */
const CURRENT_CAMBRIDGE_YEAR = 2027

function anthologyPlacements(slug: string): ExamPlacement[] {
  const out: ExamPlacement[] = []
  for (const part of ANTHOLOGY) {
    const entry = part.entries.find((e) => e.slug === slug)
    if (!entry) continue
    out.push({
      board: part.board,
      boardName: getDisplayName(part.board),
      assessedIn: part.assessedIn,
      selection: `All ${part.entries.length} texts in Part ${part.part} are compulsory.`,
      detail: `Part ${part.part} of the anthology, page ${entry.page}.`,
      source: {
        title: ANTHOLOGY_SOURCE.title,
        version: ANTHOLOGY_SOURCE.version,
        readOn: ANTHOLOGY_SOURCE.readOn,
      },
    })
  }
  return out
}

function literature4et1Placements(slug: string): ExamPlacement[] {
  const out: ExamPlacement[] = []
  for (const choice of LITERATURE_4ET1) {
    const entry = choice.entries.find((e) => e.slug === slug)
    if (!entry) continue
    out.push({
      board: 'edexcel-igcse',
      boardName: getDisplayName('edexcel-igcse'),
      assessedIn: choice.assessedIn,
      selection: `You study ${choice.choose} of these ${choice.entries.length} texts.`,
      detail: entry.firstAssessment
        ? `First assessed ${entry.firstAssessment}, so it is not an option for an earlier series.`
        : undefined,
      source: {
        title: LITERATURE_4ET1_SOURCE.title,
        version: LITERATURE_4ET1_SOURCE.version,
        readOn: LITERATURE_4ET1_SOURCE.readOn,
      },
    })
  }
  return out
}

function cambridge0475Placements(slug: string): ExamPlacement[] {
  const year = CAMBRIDGE_0475.find((y) => y.examYear === CURRENT_CAMBRIDGE_YEAR)
  if (!year) return []
  const out: ExamPlacement[] = []
  for (const paper of year.papers) {
    for (const option of paper.options) {
      const entry = option.texts.find((t) => t.slug === slug)
      if (!entry) continue
      out.push({
        board: 'cambridge-0475',
        boardName: getDisplayName('cambridge-0475'),
        assessedIn: `${paper.paper}. ${paper.rubric}`,
        selection:
          option.texts.length > 1
            ? `One of ${option.texts.length} set texts in this option.`
            : 'The set text for this option.',
        detail: entry.from
          ? `${option.label} - from ${entry.from}${entry.item ? `, no. ${entry.item}` : ''}.`
          : option.label,
        examYear: year.examYear,
        source: {
          title: 'Cambridge IGCSE Literature in English 0475 syllabus',
          version: year.source.version,
          readOn: year.source.readOn,
        },
      })
    }
  }
  return out
}

/**
 * Every verified placement for a text, or an empty array.
 *
 * Empty means "not verified", never "not examined". The four UK GCSE boards are
 * deliberately absent: prescribed-texts.ts records WHICH texts they set but not
 * where on the paper, and inventing a component for them would undo the point
 * of this file.
 */
export function examPlacements(slug: string): ExamPlacement[] {
  return [
    ...anthologyPlacements(slug),
    ...literature4et1Placements(slug),
    ...cambridge0475Placements(slug),
  ]
}

/** Whether anything verified is known about where this text is examined. */
export function hasExamPlacement(slug: string): boolean {
  return examPlacements(slug).length > 0
}
