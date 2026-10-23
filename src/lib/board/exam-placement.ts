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
 * EVERY CAMBRIDGE SERIES WE HOLD IS CARRIED, NOT ONE "CURRENT" ONE. Cambridge
 * rotates 0475 every year and serves several syllabuses side by side with no
 * archived label, so a Cambridge placement without its year is not a fact about
 * anybody's exam. Until 23 October 2026 this file read a single
 * CURRENT_CAMBRIDGE_YEAR of 2027 and nothing else. Two things followed. The War
 * of the Worlds, a 2026 prose text that 2027 withdrew, got no placement at all
 * and its page said "We have not yet checked this text", which was false: both
 * syllabuses had been read and the answer was known. And a text arriving in 2028
 * (An Inspector Calls, The Tempest) would have stayed silent on its Cambridge
 * placement until somebody edited a constant. Now a placement lists every held
 * series that sets the text and names the held series that do not, so a 2027
 * candidate reading The War of the Worlds is told it is not on their paper, and
 * a 2028 candidate reading An Inspector Calls is told it is.
 *
 * THE SELECTION WORDING COMES FROM THE SYLLABUS, NOT FROM A COUNT. Until the
 * same date this file printed "One of 5 set texts in this option" for every
 * Cambridge drama text, computed from the list length. The 2027 syllabus
 * (page 13) requires TWO different set texts on Paper 2 and one on Paper 3, so
 * the count was wrong for the paper most candidates sit. Each paper in
 * cambridge-0475.ts now carries its own `selection` sentence and it is printed
 * verbatim here.
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
  /**
   * The exam series this applies to, where the board changes its lists between
   * years. Every held series that sets the text here, ascending. Absent for a
   * board whose lists do not rotate.
   */
  examYears?: number[]
  source: { title: string; version: string; readOn: string }
}

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

/** "2026 or 2027", "2028". */
function listYears(years: number[]): string {
  if (years.length <= 1) return years.join('')
  return `${years.slice(0, -1).join(', ')} or ${years[years.length - 1]}`
}

/**
 * One placement per paper and option the text appears in, across every held
 * series. A text set in the same place in two series gets one card listing
 * both years; a text that moves (the 2028 syllabus renames the papers) gets
 * one card per place. Each card also names the held series that do NOT set
 * the text, because a withdrawn text on a page is the hazard this guards.
 */
function cambridge0475Placements(slug: string): ExamPlacement[] {
  const heldYears = CAMBRIDGE_0475.map((y) => y.examYear).sort((a, b) => a - b)
  const byPlace = new Map<string, { placement: ExamPlacement; versions: string[] }>()

  for (const year of CAMBRIDGE_0475) {
    for (const paper of year.papers) {
      for (const option of paper.options) {
        const entry = option.texts.find((t) => t.slug === slug)
        if (!entry) continue
        const key = `${paper.paper}|${option.label}`
        const version = `${year.examYear}: ${year.source.version}`
        const found = byPlace.get(key)
        if (found) {
          found.placement.examYears!.push(year.examYear)
          found.versions.push(version)
          // The most recent reading of any document that sets it here.
          if (year.source.readOn > found.placement.source.readOn) {
            found.placement.source.readOn = year.source.readOn
          }
          continue
        }
        byPlace.set(key, {
          versions: [version],
          placement: {
            board: 'cambridge-0475',
            boardName: getDisplayName('cambridge-0475'),
            assessedIn: `${paper.paper}. ${paper.rubric}`,
            selection: paper.selection,
            detail: entry.from
              ? `${option.label} - from ${entry.from}${entry.item ? `, no. ${entry.item}` : ''}.`
              : option.label,
            examYears: [year.examYear],
            source: {
              title: 'Cambridge IGCSE Literature in English 0475 syllabus',
              version,
              readOn: year.source.readOn,
            },
          },
        })
      }
    }
  }

  const out: ExamPlacement[] = []
  for (const { placement, versions } of byPlace.values()) {
    placement.examYears!.sort((a, b) => a - b)
    placement.source.version = versions.join('; ')
    const absent = heldYears.filter((y) => !placement.examYears!.includes(y))
    if (absent.length > 0) {
      const note = `Not set for the ${listYears(absent)} series.`
      placement.detail = placement.detail ? `${placement.detail} ${note}` : note
    }
    out.push(placement)
  }
  // Earliest series first, so a page reads chronologically.
  return out.sort((a, b) => a.examYears![0]! - b.examYears![0]!)
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
