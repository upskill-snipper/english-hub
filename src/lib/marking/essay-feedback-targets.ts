// ─── Which scheme question an answer from elsewhere on the site belongs to ──
//
// Essay feedback is asked for from three places: its own page, where the
// student picks the paper and question; and inline, under an answer on the
// mock-exam and practice pages, which know only their own paper's board,
// number and labels. Until 9 October 2026 those callers sent "Paper 1" or
// "Paper 2" for every answer, and the old corpus read that as the board's
// Language paper, so every Literature mock answer was marked against Language
// objectives (see ./essay-feedback.ts).
//
// Each function here names a scheme question only when it can be sure, and
// returns null otherwise, which gets general feedback with no marks rather
// than marks against a guess:
//
//   • A mock paper is identified by its paper CODE (8702/1, 1ET0/02 ...), not
//     by board and paper number: AQA Paper 1 is 8700/1 or 8702/1. A question is
//     then matched by its section (Literature) or its number (Language), and is
//     accepted only if its tariff equals the scheme question's.
//   • A practice question is matched only when its type names one question
//     number, "Language Analysis (Q2)", and its tariff agrees.
//   • A question-bank entry is matched by the set text it names, whose category
//     (src/lib/board/set-texts.ts) fixes the paper and section on each board,
//     or, for Language, by a table of the bank's own labels, checked against
//     the entry's own words because some labels are wrong.
// ────────────────────────────────────────────────────────────────────────────

import { SET_TEXTS, type TextCategory } from '@/lib/board/set-texts'
import { MARK_SCHEMES, type MarkScheme, type QuestionScheme } from './mark-schemes'
import { isEssayQuestion, type FeedbackSubject } from './essay-feedback'

/** A scheme and question, by id, as a request carries them. */
export interface FeedbackRef {
  schemeId: string
  questionId: string
}

// ─── Paper codes ────────────────────────────────────────────────────────────

/**
 * Paper codes to scheme ids. Null where the paper is known but has no scheme
 * on the site yet; AQA Literature Paper 2 was the last, until 9 October 2026.
 */
const PAPER_CODES: readonly (readonly [RegExp, string | null])[] = [
  [/\b8700\/1\b/, 'aqa-lang-paper1'],
  [/\b8700\/2\b/, 'aqa-lang-paper2'],
  [/\b8702\/1\b/, 'aqa-lit-paper1'],
  [/\b8702\/2\b/, 'aqa-lit-paper2'],
  [/\b1EN0\/01\b/i, 'edexcel-lang-paper1'],
  [/\b1EN0\/02\b/i, 'edexcel-lang-paper2'],
  [/\b1ET0\/01\b/i, 'edexcel-lit-paper1'],
  [/\b1ET0\/02\b/i, 'edexcel-lit-paper2'],
  [/\bJ351\/01\b/i, 'ocr-lang-component01'],
  [/\bJ351\/02\b/i, 'ocr-lang-component02'],
  [/\bJ352\/01\b/i, 'ocr-lit-component01'],
  [/\bJ352\/02\b/i, 'ocr-lit-component02'],
  [/\bC700(?:U10|QS\/1)/i, 'eduqas-lang-comp1'],
  [/\bC700(?:U20|QS\/2)/i, 'eduqas-lang-comp2'],
  [/\bC720\/01\b/i, 'eduqas-lit-comp1'],
  [/\bC720\/02\b/i, 'eduqas-lit-comp2'],
]

/** The scheme a paper code names, null if it has none, undefined if no code is found. */
export function schemeIdForPaperCode(text: string): string | null | undefined {
  for (const [code, schemeId] of PAPER_CODES) if (code.test(text)) return schemeId
  return undefined
}

/**
 * The subject a paper's code or title names, or null. Codes first, then the
 * qualification's full name: a bare "Literature" is not enough, because Eduqas
 * Language Component 1 is "20th Century Literature Reading and Creative Prose
 * Writing".
 */
export function subjectForPaper(text: string): FeedbackSubject | null {
  if (/\b(8702|1ET0|J352|C720)/i.test(text)) return 'English Literature'
  if (/\b(8700|1EN0|J351|C700)/i.test(text)) return 'English Language'
  if (/English Literature/i.test(text)) return 'English Literature'
  if (/English Language/i.test(text)) return 'English Language'
  return null
}

// ─── Kinds of question ──────────────────────────────────────────────────────

type QuestionKind =
  | 'shakespeare'
  | 'unseen'
  | 'poetry'
  | 'prose'
  | 'imaginative'
  | 'transactional'
  | 'evaluation'
  | 'comparison'
  | 'summary'

const KINDS: readonly (readonly [RegExp, QuestionKind])[] = [
  [/shakespeare/i, 'shakespeare'],
  [/unseen/i, 'unseen'],
  [/poetry|poem/i, 'poetry'],
  [/19th|nineteenth|heritage|post-1914|modern|novel|prose|drama/i, 'prose'],
  [/imaginative|creative|narrative|descriptive|composition/i, 'imaginative'],
  [
    /transactional|persuasive|argu|letter|article|speech|review|directed writing|non-fiction writing/i,
    'transactional',
  ],
  [/evaluat/i, 'evaluation'],
  [/compar/i, 'comparison'],
  [/summary|synthesis/i, 'summary'],
]

function kindsOf(text: string): Set<QuestionKind> {
  return new Set(KINDS.filter(([re]) => re.test(text)).map(([, kind]) => kind))
}

/**
 * Whether two descriptions can be the same question. A tariff and a number can
 * agree by accident: until 9 October 2026 the OCR Literature mocks were
 * labelled J352/01 and had a 40-mark "Poetry Across Time" Section B, while
 * J352/01's own Section B is a 40-mark prose essay. When both sides say what
 * kind of question they are, they must share a kind; when either says nothing
 * ("Section A: Reading", "analysis"), the number and tariff decide.
 */
function sameKind(a: string, b: string): boolean {
  const ka = kindsOf(a)
  const kb = kindsOf(b)
  if (ka.size === 0 || kb.size === 0) return true
  return [...ka].some((k) => kb.has(k))
}

// ─── Mock papers ────────────────────────────────────────────────────────────

/** What a mock-exam page knows about one question. */
export interface MockQuestionRef {
  /** The paper's subtitle, code and title together: they carry the code. */
  paperText: string
  sectionTitle: string
  /** The question's position in its section, from 0. */
  indexInSection: number
  questionNumber: number
  marks: number
  /** The mock's own label for the question: "analysis", "creative-writing" ... */
  questionType: string
}

/** Every integer in a question id: "Q5/Q6" -> [5, 6], "Q7a" -> [7], "A3" -> [3]. */
function idNumbers(id: string): number[] {
  return [...id.matchAll(/\d+/g)].map((m) => Number(m[0]))
}

function bySection(scheme: MarkScheme, ref: MockQuestionRef): QuestionScheme[] {
  const letter = /^Section ([A-D])\b/i.exec(ref.sectionTitle.trim())?.[1]?.toUpperCase()
  if (!letter) return []
  const part = /\bPart (\d)\b/i.exec(ref.sectionTitle)?.[1]
  const inSection = scheme.questions.filter((q) => q.id.startsWith(`Section ${letter}`))
  if (part) return inSection.filter((q) => q.id === `Section ${letter} Part ${part}`)
  const parts = inSection.filter((q) => /\([a-z]\)$/.test(q.id))
  if (parts.length > 0) {
    const wanted = `Section ${letter} (${'abcdefgh'[ref.indexInSection] ?? '?'})`
    return parts.filter((q) => q.id === wanted)
  }
  return inSection.filter((q) => q.id === `Section ${letter}`)
}

function byNumber(scheme: MarkScheme, ref: MockQuestionRef): QuestionScheme[] {
  const letter = /^Section ([A-D])\b/i.exec(ref.sectionTitle.trim())?.[1]?.toUpperCase()
  return scheme.questions.filter((q) => {
    if (/^Section\b/.test(q.id)) return false
    // Eduqas numbers its questions within a section (A1 ... A5, B1), so the
    // section letter has to agree as well as the number.
    if (/^[A-D]\d/.test(q.id) && letter && q.id[0] !== letter) return false
    return idNumbers(q.id).includes(ref.questionNumber)
  })
}

/** The scheme question a mock question belongs to, or null. */
export function resolveMockFeedback(ref: MockQuestionRef): FeedbackRef | null {
  const schemeId = schemeIdForPaperCode(ref.paperText)
  if (!schemeId) return null
  const scheme = MARK_SCHEMES[schemeId]
  const own = `${ref.sectionTitle} ${ref.questionType}`
  const candidates = [...bySection(scheme, ref), ...byNumber(scheme, ref)].filter(
    (q, i, all) =>
      all.indexOf(q) === i &&
      q.totalMarks === ref.marks &&
      isEssayQuestion(q) &&
      sameKind(own, q.questionType),
  )
  return candidates.length === 1 ? { schemeId, questionId: candidates[0].id } : null
}

// ─── Practice questions ─────────────────────────────────────────────────────

/** The Language scheme for a practice board and paper number. */
const PRACTICE_LANGUAGE: Readonly<Record<string, readonly [string, string]>> = {
  AQA: ['aqa-lang-paper1', 'aqa-lang-paper2'],
  Edexcel: ['edexcel-lang-paper1', 'edexcel-lang-paper2'],
  OCR: ['ocr-lang-component01', 'ocr-lang-component02'],
  WJEC: ['eduqas-lang-comp1', 'eduqas-lang-comp2'],
}

/** What the practice page knows about a question. */
export interface PracticeQuestionRef {
  board: string
  paper?: number
  questionType?: string
  type?: string
  marks?: number
}

/**
 * The scheme question a practice question belongs to, or null. Only a Language
 * question whose type names one question number, and whose tariff agrees with
 * that question's, is matched.
 */
export function resolvePracticeFeedback(q: PracticeQuestionRef): FeedbackRef | null {
  const pair = PRACTICE_LANGUAGE[q.board]
  if (!pair || (q.paper !== 1 && q.paper !== 2) || typeof q.marks !== 'number') return null
  const numbers = [...`${q.questionType ?? ''}`.matchAll(/\(Q(\d+)\)/g)].map((m) => Number(m[1]))
  if (numbers.length !== 1) return null
  const schemeId = pair[q.paper - 1]
  const own = `${q.questionType ?? ''} ${q.type ?? ''}`
  const matches = MARK_SCHEMES[schemeId].questions.filter(
    (s) =>
      !/^Section\b/.test(s.id) &&
      idNumbers(s.id).includes(numbers[0]) &&
      s.totalMarks === q.marks &&
      isEssayQuestion(s) &&
      // "Transactional Writing (Q5)" filed under Edexcel Paper 1 is forty marks
      // and question 5, like Paper 1's imaginative writing, and is not it.
      sameKind(own, s.questionType),
  )
  return matches.length === 1 ? { schemeId, questionId: matches[0].id } : null
}

/** The subject a practice question's labels name, or null when they do not say. */
export function subjectForPractice(q: PracticeQuestionRef): FeedbackSubject | null {
  const labels = `${q.questionType ?? ''} ${q.type ?? ''}`
  if (/poetry|poem|shakespeare|character|theme|extract-based|literature/i.test(labels)) {
    return 'English Literature'
  }
  if (
    /\(Q\d+\)|writing|retrieval|summary|synthesis|language analysis|structure|reading/i.test(labels)
  ) {
    return 'English Language'
  }
  return null
}

// ─── The question bank (src/data/exam-questions.ts) ─────────────────────────

/** A question-bank entry, as src/data/exam-questions.ts holds it. */
export interface BankQuestion {
  id: string
  text: string
  board: string
  paper: string
  questionType: string
}

type LiteratureKind = TextCategory | 'unseen'

/** Set texts a question can be about, by the names it may use. */
const TEXT_NAMES: readonly { re: RegExp; category: TextCategory }[] = SET_TEXTS.filter((t) =>
  ['shakespeare', '19th-century', 'modern'].includes(t.category),
).flatMap((t) => {
  const names = new Set([t.title, t.title.replace(/^The /, '')])
  if (t.slug === 'jekyll-and-hyde') names.add('Jekyll and Hyde').add('Jekyll & Hyde')
  return [...names].map((name) => ({
    re: new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i'),
    category: t.category,
  }))
})

/** The kind of Literature question a bank entry is, or null when it cannot be told. */
function literatureKind(q: BankQuestion): LiteratureKind | null {
  if (q.questionType === 'Poetry Comparison') return 'poetry-anthology'
  if (q.questionType === 'Unseen Poetry') return 'unseen'
  const found = new Set(TEXT_NAMES.filter((n) => n.re.test(q.text)).map((n) => n.category))
  if (/\bShakespeare\b/.test(q.text)) found.add('shakespeare')
  return found.size === 1 ? [...found][0] : null
}

/**
 * Where each kind of Literature question sits on each board. "(a)" and "(b)"
 * are Edexcel's extract and whole-text parts, and AQA's two unseen-poetry
 * questions, 27.1 on one poem and 27.2 comparing two; null where the board's
 * paper has no scheme on the site, or where a printed extract would misdescribe
 * a paper that prints none (Edexcel Paper 1 Section B, AQA Paper 2 Section A).
 */
function literatureRef(
  board: string,
  kind: LiteratureKind,
  extract: boolean,
  compares: boolean,
): FeedbackRef | null {
  const ref = (schemeId: string, questionId: string) => ({ schemeId, questionId })
  switch (board) {
    case 'AQA':
      if (kind === 'shakespeare') return ref('aqa-lit-paper1', 'Section A')
      if (kind === '19th-century') return ref('aqa-lit-paper1', 'Section B')
      if (kind === 'modern') return extract ? null : ref('aqa-lit-paper2', 'Section A')
      if (kind === 'poetry-anthology') return ref('aqa-lit-paper2', 'Section B')
      if (kind === 'unseen')
        return ref('aqa-lit-paper2', compares ? 'Section C (b)' : 'Section C (a)')
      return null
    case 'Edexcel':
      if (kind === 'shakespeare')
        return ref('edexcel-lit-paper1', extract ? 'Section A (a)' : 'Section A (b)')
      if (kind === 'modern') return extract ? null : ref('edexcel-lit-paper1', 'Section B')
      if (kind === '19th-century')
        return ref('edexcel-lit-paper2', extract ? 'Section A (a)' : 'Section A (b)')
      if (kind === 'poetry-anthology') return ref('edexcel-lit-paper2', 'Section B Part 1')
      if (kind === 'unseen') return ref('edexcel-lit-paper2', 'Section B Part 2')
      return null
    case 'OCR':
      // Since 9 October 2026 each component's Section A is two parts, as OCR
      // sets it. Part (a) compares the studied text, or a named anthology poem,
      // with an UNSEEN extract or poem, which no bank entry does, so nothing maps
      // to it; a whole-text modern question is part (b), and a question comparing
      // two anthology poems matches neither part.
      if (kind === 'modern') return extract ? null : ref('ocr-lit-component01', 'Section A (b)')
      if (kind === '19th-century') return ref('ocr-lit-component01', 'Section B')
      if (kind === 'shakespeare') return ref('ocr-lit-component02', 'Section B')
      return null
    case 'WJEC':
      // Since 9 October 2026 the Eduqas schemes are set as Eduqas sets them:
      // Component 1's Shakespeare section is an extract question and then an
      // essay on the play, and its poetry section a named anthology poem and
      // then a comparison with a second; Component 2 ends with unseen poetry in
      // the same two steps. Each was one question until then, and unseen poetry
      // had no scheme at all.
      if (kind === 'shakespeare')
        return ref('eduqas-lit-comp1', extract ? 'Section A (a)' : 'Section A (b)')
      if (kind === 'poetry-anthology')
        return ref('eduqas-lit-comp1', compares ? 'Section B (b)' : 'Section B (a)')
      if (kind === 'modern') return ref('eduqas-lit-comp2', 'Section A')
      if (kind === '19th-century') return ref('eduqas-lit-comp2', 'Section B')
      if (kind === 'unseen')
        return ref('eduqas-lit-comp2', compares ? 'Section C (b)' : 'Section C (a)')
      return null
    default:
      return null
  }
}

/**
 * Language bank labels, "board|paper|type", to the scheme questions they are.
 * Listed rather than pattern-matched; a label not here is not offered.
 */
const LANGUAGE_TYPES: Readonly<Record<string, readonly (readonly [string, string])[]>> = {
  'AQA|Paper 1|Language Analysis': [['aqa-lang-paper1', 'Q2']],
  'AQA|Paper 1|Structure Analysis': [['aqa-lang-paper1', 'Q3']],
  'AQA|Paper 1|Evaluation': [['aqa-lang-paper1', 'Q4']],
  'AQA|Paper 1|Creative Writing (Descriptive)': [['aqa-lang-paper1', 'Q5']],
  'AQA|Paper 1|Creative Writing (Narrative)': [['aqa-lang-paper1', 'Q5']],
  // Filed under Paper 1, but each asks how two writers' perspectives compare,
  // which is AQA's Paper 2 Question 4.
  'AQA|Paper 1|Comparison': [['aqa-lang-paper2', 'Q4']],
  "AQA|Paper 2|Comparison of Writers' Viewpoints": [['aqa-lang-paper2', 'Q4']],
  'AQA|Paper 2|Summary & Synthesis': [['aqa-lang-paper2', 'Q2']],
  'AQA|Paper 2|Language Analysis': [['aqa-lang-paper2', 'Q3']],
  'AQA|Paper 2|Argumentative Writing': [['aqa-lang-paper2', 'Q5']],
  'AQA|Paper 2|Article Writing': [['aqa-lang-paper2', 'Q5']],
  'AQA|Paper 2|Letter Writing': [['aqa-lang-paper2', 'Q5']],
  'AQA|Paper 2|Persuasive Writing': [['aqa-lang-paper2', 'Q5']],
  'AQA|Paper 2|Speech Writing': [['aqa-lang-paper2', 'Q5']],
  'Edexcel|Paper 1|Language Analysis': [['edexcel-lang-paper1', 'Q3']],
  'Edexcel|Paper 1|Whole Text Analysis': [['edexcel-lang-paper1', 'Q4']],
  'Edexcel|Paper 1|Creative Writing': [['edexcel-lang-paper1', 'Q5/Q6']],
  'Edexcel|Paper 1|Imaginative Writing': [['edexcel-lang-paper1', 'Q5/Q6']],
  'Edexcel|Paper 2|Language Analysis': [['edexcel-lang-paper2', 'Q3']],
  'Edexcel|Paper 2|Evaluation': [['edexcel-lang-paper2', 'Q6']],
  'Edexcel|Paper 2|Summary': [['edexcel-lang-paper2', 'Q7a']],
  'Edexcel|Paper 2|Comparison': [['edexcel-lang-paper2', 'Q7b']],
  'Edexcel|Paper 2|Argumentative Writing': [['edexcel-lang-paper2', 'Q8/Q9']],
  'Edexcel|Paper 2|Letter Writing': [['edexcel-lang-paper2', 'Q8/Q9']],
  'Edexcel|Paper 2|Non-Fiction Writing': [['edexcel-lang-paper2', 'Q8/Q9']],
  'Edexcel|Paper 2|Persuasive Writing': [['edexcel-lang-paper2', 'Q8/Q9']],
  'Edexcel|Paper 2|Review Writing': [['edexcel-lang-paper2', 'Q8/Q9']],
  'OCR|Paper 1|Language Analysis': [['ocr-lang-component01', 'Q3']],
  'OCR|Paper 1|Comparison': [['ocr-lang-component01', 'Q4']],
  'OCR|Paper 1|Writing to Advise': [['ocr-lang-component01', 'Q5']],
  'OCR|Paper 1|Writing to Argue': [['ocr-lang-component01', 'Q5']],
  'OCR|Paper 1|Writing to Persuade': [['ocr-lang-component01', 'Q5']],
  'OCR|Paper 2|Language Analysis': [['ocr-lang-component02', 'Q1']],
  'OCR|Paper 2|Structure Analysis': [['ocr-lang-component02', 'Q1']],
  'OCR|Paper 2|Evaluation': [['ocr-lang-component02', 'Q2']],
  'OCR|Paper 2|Creative Writing': [['ocr-lang-component02', 'Q4']],
  'OCR|Paper 2|Descriptive Writing': [['ocr-lang-component02', 'Q4']],
  'OCR|Paper 2|Narrative Writing': [['ocr-lang-component02', 'Q4']],
  'WJEC|Paper 1|Language Analysis': [['eduqas-lang-comp1', 'A3']],
  // Each asks "to what extent" or "how far" a statement holds: evaluation.
  'WJEC|Paper 1|Evaluation / Comparison': [['eduqas-lang-comp1', 'A4']],
  'WJEC|Paper 1|Descriptive Writing': [['eduqas-lang-comp1', 'B1']],
  'WJEC|Paper 1|Narrative Writing': [['eduqas-lang-comp1', 'B1']],
  'WJEC|Paper 2|Language Analysis': [['eduqas-lang-comp2', 'A3']],
  'WJEC|Paper 2|Comparison of Perspectives': [['eduqas-lang-comp2', 'A4']],
  'WJEC|Paper 2|Argumentative Writing': [
    ['eduqas-lang-comp2', 'B1'],
    ['eduqas-lang-comp2', 'B2'],
  ],
  'WJEC|Paper 2|Article Writing': [
    ['eduqas-lang-comp2', 'B1'],
    ['eduqas-lang-comp2', 'B2'],
  ],
  'WJEC|Paper 2|Letter Writing': [
    ['eduqas-lang-comp2', 'B1'],
    ['eduqas-lang-comp2', 'B2'],
  ],
  'WJEC|Paper 2|Persuasive Writing': [
    ['eduqas-lang-comp2', 'B1'],
    ['eduqas-lang-comp2', 'B2'],
  ],
  'WJEC|Paper 2|Review Writing': [
    ['eduqas-lang-comp2', 'B1'],
    ['eduqas-lang-comp2', 'B2'],
  ],
  'WJEC|Paper 2|Speech Writing': [
    ['eduqas-lang-comp2', 'B1'],
    ['eduqas-lang-comp2', 'B2'],
  ],
}

/**
 * Whether a Language entry's own words agree with the scheme question its
 * label names. The labels are not always right: of four Edexcel entries filed
 * as "Non-Fiction Writing", three are reading questions (a summary, a
 * comparison and an analysis), and a "Language Analysis" entry asks for two
 * adverts to be compared. So a writing question is offered only for a task
 * that asks the student to write, and a comparison question for, and only
 * for, a task that asks them to compare.
 */
function textAgrees(text: string, question: QuestionScheme): boolean {
  const kinds = kindsOf(question.questionType)
  if (kinds.has('imaginative') || kinds.has('transactional'))
    return /\b(write|describe)\b/i.test(text)
  return kinds.has('comparison') === /\bcompar/i.test(text)
}

/** The scheme questions a bank entry belongs to: none, one, or (Eduqas B1/B2) two. */
export function bankTargets(q: BankQuestion): FeedbackRef[] {
  if (q.id.endsWith('-custom')) return []
  const language = LANGUAGE_TYPES[`${q.board}|${q.paper}|${q.questionType}`]
  if (language) {
    return language
      .filter(([schemeId, questionId]) => {
        const question = MARK_SCHEMES[schemeId]?.questions.find((s) => s.id === questionId)
        return !!question && textAgrees(q.text, question)
      })
      .map(([schemeId, questionId]) => ({ schemeId, questionId }))
  }
  const kind = literatureKind(q)
  if (!kind) return []
  const extract = q.questionType === 'Extract-Based Analysis' || /\bextract\b/i.test(q.text)
  const compares = /\bcompar|\bboth poems\b|\bsimilarit|\bdifferences?\b/i.test(q.text)
  const ref = literatureRef(q.board, kind, extract, compares)
  return ref ? [ref] : []
}

/** The bank entries that belong to one scheme question, in bank order. */
export function bankQuestionsFor<T extends BankQuestion>(
  bank: readonly T[],
  schemeId: string,
  questionId: string,
): T[] {
  return bank.filter((q) =>
    bankTargets(q).some((t) => t.schemeId === schemeId && t.questionId === questionId),
  )
}
