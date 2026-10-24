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
 * no verified placement returns nothing, and the card says only what is known
 * about the reader's board (see readerNotice), because "we have not checked
 * your board" and "your board does not set this" are different statements and
 * a guess would blur them.
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
import { boardSetsText } from './board-sets-text'
import { getSetText } from './set-texts'
import { canonicalTextSlug } from '@/lib/revision/text-slug-aliases'

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
  /**
   * "Not set for the 2026 or 2027 series.", where some held series does not
   * set the text anywhere. Its own field, not appended to `detail`: until 24
   * October 2026 it was, and the card printed "Drama Not set for the 2026 or
   * 2027 series." as one muted run-on, so the sentence a 2026 or 2027
   * candidate most needs was the faintest text on the card.
   */
  notSet?: string
  source: { title: string; version: string; readOn: string }
}

const NUMBER_WORDS = [
  'none',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
]

/**
 * A small count in words, as the rest of the card writes them. Until 24
 * October 2026 the 4ET1 line read "You study 1 of these 5 texts" beside a
 * Cambridge line reading "one of these five plays" on the same page.
 */
function inWords(n: number): string {
  return NUMBER_WORDS[n] ?? String(n)
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
      selection: `All ${inWords(part.entries.length)} texts in Part ${part.part} are compulsory.`,
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
      // Not "of these N texts": the card never shows the list, so "these"
      // pointed at nothing.
      selection: `You study ${inWords(choice.choose)} of ${inWords(choice.entries.length)} set texts.`,
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
 *
 * THE "NOT SET" NOTE IS A FACT ABOUT THE TEXT, NOT ABOUT THE CARD. For a few
 * hours on 23 October 2026 it was computed per card, as the held years minus
 * that card's years. A text that continues from 2027 into 2028 sits on two
 * cards because the 2028 syllabus renames the papers, so each card told the
 * reader the text was not set in the other card's years: Pride and Prejudice's
 * 2026-2027 card said "Not set for the 2028 series" and its 2028 card said
 * "Not set for the 2026 or 2027 series", when the syllabus sets it in all
 * three (2026 syllabus page 12, 2027 syllabus page 12, 2028-2030 syllabus
 * page 13). Six held texts were affected. The three asserted cases (The War
 * of the Worlds, Antony and Cleopatra, An Inspector Calls) each sit in one
 * place only, so the tests were green. The note is now the held years minus
 * the union of every card's years for the slug, carried in `notSet`.
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
            // A whole work gets no detail line. Its option label ("Drama",
            // "Prose") only repeated the section the paper name already
            // prints, and was all the detail line ever said for a text we
            // hold, since every row with a slug is a whole work.
            detail: entry.from
              ? `${option.label} - from ${entry.from}${entry.item ? `, no. ${entry.item}` : ''}.`
              : undefined,
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

  // Every held year in which the text is set anywhere, across all its cards.
  const setYears = new Set<number>()
  for (const { placement } of byPlace.values()) {
    for (const year of placement.examYears!) setYears.add(year)
  }
  const absent = heldYears.filter((y) => !setYears.has(y))
  const note = absent.length > 0 ? `Not set for the ${listYears(absent)} series.` : undefined

  const out: ExamPlacement[] = []
  for (const { placement, versions } of byPlace.values()) {
    placement.examYears!.sort((a, b) => a - b)
    placement.source.version = versions.join('; ')
    if (note) placement.notSet = note
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

/**
 * What the card says about the reader's own board when no card is theirs.
 *
 *   not-checked            nothing is verified and we cannot say more
 *   not-checked-for-board  the reader's board sets the text, and we have not
 *                          read which of its papers it is on
 *   off-board              the reader's board sets it in no series we hold
 *   no-board               no board we cover sets it, and nothing is verified
 *
 * WHAT WAS WRONG. Until 24 October 2026 the card had one sentence for every
 * case without a placement: "We have not yet checked which paper this text is
 * on for your board". It takes for granted that the board sets the text. For
 * an AQA reader of Hamlet (A-level and IAL only) or Henry V (no board at all)
 * the rail beside it said "Your board does not set this text", and on a phone,
 * where the rail is in a closed drawer, the card's sentence was all a reader
 * saw. Twenty of the 32 TextGuide pages that gained the card on 23 October
 * have no placement, and for an AQA reader eight of those are off-board
 * (Henry V for every reader).
 *
 * And where placements existed but none was the reader's, the card said
 * nothing about their exam at all: an AQA reader of An Inspector Calls saw
 * Pearson 4ET1 and Cambridge 0475 under "Where this text is on your exam",
 * which reads as "AQA does not set it" or as "this is your paper", and is
 * neither. AQA sets it; we have not read which AQA paper.
 *
 * The off-board test is boardSetsText, the same series-aware test the rail
 * uses, so the two cannot disagree. A slug the set-text register does not hold
 * is never called off-board: "we have no record of this" is not "your board
 * does not set this".
 */
export type ReaderNotice =
  | { kind: 'not-checked' }
  | { kind: 'not-checked-for-board'; board: ExamBoard }
  | { kind: 'off-board' }
  | { kind: 'no-board' }

export function readerNotice(
  slug: string,
  board: ExamBoard | null,
  placements: ExamPlacement[] = examPlacements(slug),
): ReaderNotice | null {
  const canonical = canonicalTextSlug(slug)
  const text = getSetText(canonical)

  // The reader's own board has a verified card, which says it all.
  if (board && placements.some((p) => p.board === board)) return null

  // Henry V and the rest whose row is deliberately empty. True whatever the
  // reader's board, and the stronger statement, so it comes first.
  if (text && text.boards.length === 0 && placements.length === 0) return { kind: 'no-board' }

  if (!board) return placements.length === 0 ? { kind: 'not-checked' } : null
  if (!text) return placements.length === 0 ? { kind: 'not-checked' } : null
  if (!boardSetsText(canonical, board)) return { kind: 'off-board' }
  return { kind: 'not-checked-for-board', board }
}
