// ─── Examiner Marking Tool - pack types ─────────────────────────────────────
//
// WHAT AN "EXAMINER PACK" IS
// The live GCSE marker (src/lib/marking/mark-schemes) holds each board's
// assessment objectives and band descriptors as data for a model prompt. An
// examiner pack is the layer a human examiner actually works from on top of
// that: per-question level grids with exact mark ranges, the yes/no gates a
// senior examiner answers to place a script at a level, the boundary triggers
// and caps taken from published exemplar commentaries, the anchor marks, the
// phrase bank, and the commentary register the board expects.
//
// Two kinds of pack exist and the UI says which it is showing:
//
//   'exemplar-derived'  - gates, triggers, anchors and phrases were reverse-
//                         engineered from the board's own exemplar scripts and
//                         examiner commentaries. The first of these is Pearson
//                         Edexcel International GCSE English Language A,
//                         Paper/Unit 1 (4EA1 / 4XEA1).
//   'published-grid'    - built mechanically from the published level grid in
//                         src/lib/marking/mark-schemes. Correct mark ranges and
//                         descriptors, generic gates, no exemplar evidence.
//
// Everything in a pack is plain data (no functions) so a pack can be served to
// the browser as JSON from /api/examiner/packs/[packId] and the client never
// needs the 6,700-line mark-scheme corpus in its bundle. Commentary templates
// therefore use placeholders rendered by src/lib/marking/examiner/engine.ts.
// ────────────────────────────────────────────────────────────────────────────

// 'unverified-grid' is the honest default. A pack earns 'published-grid' only
// when src/lib/marking/examiner/verification.ts holds a record that someone put
// it side by side with the board's own published material. Before 18 September
// 2026 every derived pack claimed 'published-grid' and the tool told teachers
// its grids were "verbatim from the published scheme"; nine papers had never
// been checked at all, and the first audit found a mislabelled assessment
// objective on AQA Paper 1 and a five-mark shortfall on both Eduqas Language
// components. Widening this union is what makes that state say its own name.
export type ExaminerCalibration = 'exemplar-derived' | 'published-grid' | 'unverified-grid'

/** One level (or band) of a levelled grid, with its inclusive mark range. */
export interface ExaminerLevel {
  /** 1-based level number, ascending. */
  n: number
  lo: number
  hi: number
  /** Short head, e.g. "Explanation" or "Clear". */
  head: string
  /** The descriptor an examiner reads to place the script. */
  desc: string
}

/**
 * A yes/no gate. Gates are answered in order and stop at the first "No"; the
 * number of consecutive "Yes" answers plus one is the best-fit level. A grid
 * with N levels has N-1 gates.
 */
export interface ExaminerGate {
  /** The question the examiner answers about the response. */
  q: string
  /** What a "No" means, and where the script lands. */
  ev: string
}

/** A boundary trigger, cap, or neutral rule shown beside the grid. */
export interface ExaminerTrigger {
  t: 'opener' | 'cap' | 'neutral'
  h: string
  d: string
}

/** A levelled grid for one assessment objective. */
export interface ExaminerGrid {
  /** Assessment objective code, e.g. "AO2". */
  id: string
  /** Panel heading, e.g. "AO4 - purpose, audience, form, tone, register (27)". */
  name: string
  max: number
  levels: readonly ExaminerLevel[]
  gates: readonly ExaminerGate[]
  /** Mark -> short note, where a real exemplar award sits. Keys are marks. */
  anchors?: Readonly<Record<number, string>>
}

interface ExaminerQuestionBase {
  /** Question id within the pack, e.g. "Q4" or "Q67". */
  id: string
  /** Chip label, e.g. "Q6 / Q7". */
  label: string
  title: string
  /** One-line meta shown under the title. */
  meta: string
  max: number
  /** Examiner phrase bank: verbatim commentary fragments with the mark they earned. */
  phrases: readonly string[]
}

/**
 * Points-counted question: the mark is the count of surviving valid items,
 * capped at max, never deducted.
 */
export interface ExaminerCountSpec extends ExaminerQuestionBase {
  kind: 'count'
  ao: string
  /** Per-item kill tests shown to the examiner. */
  killTests: readonly string[]
  openers: readonly string[]
  caps: readonly string[]
  neutrals: readonly string[]
  /**
   * Register A scaffold. Placeholders: {n}, {marks} (mark/marks), {capClause}
   * (rendered only when n < max, from `capClause`).
   */
  template: string
  capClause: string
}

/** Single-grid levelled question (Register B commentary). */
export interface ExaminerLevelSpec extends ExaminerQuestionBase {
  kind: 'level'
  ao: string
  grid: ExaminerGrid
  /** A hard cap the examiner can switch on, e.g. "only one text considered". */
  capNote?: {
    label: string
    effect: string
    /** Maximum mark when the cap applies. */
    cap: number
    /** Maximum level when the cap applies. */
    capLevel: number
  }
  triggers: readonly ExaminerTrigger[]
  /** One "The candidate ..." verdict sentence per level, lowest first. */
  levelSentences: readonly string[]
  /**
   * Register B scaffold. Placeholders: {verdict} (from levelSentences),
   * {placement} (placement clause), {lvl}, {mark}.
   */
  template: string
}

/** Multi-grid writing question, levelled separately per AO then summed (Register C). */
export interface ExaminerWritingSpec extends ExaminerQuestionBase {
  kind: 'writing'
  grids: readonly ExaminerGrid[]
  triggers: readonly ExaminerTrigger[]
  /** Total-mark anchor line shown under the summed mark. */
  totalAnchors?: string
}

export type ExaminerQuestionSpec = ExaminerCountSpec | ExaminerLevelSpec | ExaminerWritingSpec

export interface ExaminerPack {
  /**
   * Pack id. Where a live mark scheme exists for the same paper this is the
   * mark scheme id (e.g. "edexcel-igcse-lang-paper1") so the two surfaces
   * agree on what a paper is called.
   */
  id: string
  /** Board as shown to a teacher, e.g. "Pearson Edexcel International GCSE". */
  board: string
  /** Board id from src/lib/board/board-config.ts where one exists. */
  boardId?: string
  qualification: string
  subject: string
  paper: string
  /** Specification / component codes this pack applies to. */
  codes: readonly string[]
  title: string
  totalMarks: number
  calibration: ExaminerCalibration
  /** Where the grids and rules came from, in one paragraph. Shown in the UI. */
  provenance: string
  questions: readonly ExaminerQuestionSpec[]
  /**
   * The examiner briefing sent as the model's system prompt when marking
   * against this pack. Stable per pack, so it is the cached prefix.
   */
  systemPrompt: string
  version: string
}

/** Slim listing entry for the pack picker. */
export interface ExaminerPackSummary {
  id: string
  board: string
  boardId?: string
  qualification: string
  subject: string
  paper: string
  codes: readonly string[]
  title: string
  totalMarks: number
  calibration: ExaminerCalibration
  questions: readonly {
    id: string
    label: string
    title: string
    max: number
    kind: ExaminerQuestionSpec['kind']
  }[]
}

export type GateAnswer = 'yes' | 'no'
export type Placement = 'bottom' | 'mid' | 'top'

/** What the tool extracts from the model's commentary, when it can. */
export interface ExtractedMark {
  mark: number
  max: number | null
  note: string
}
