// ─── Raw Mark Scheme Parser ──────────────────────────────────────────────────
// Parse raw mark scheme text (for example, copied from an AQA PDF or a teacher
// upload) into the structured `MarkScheme` shape used by the marking engine.
//
// The parser is intentionally forgiving — real mark schemes have messy layout,
// inconsistent labels, and extra whitespace. We normalise line endings, strip
// boilerplate and look for AO headings plus "Level N — min-max" band rows.
// ────────────────────────────────────────────────────────────────────────────

import type {
  AssessmentObjective,
  BandDescriptor,
  MarkScheme,
  QuestionScheme,
} from "./mark-schemes/types"

// ─── Input shapes ────────────────────────────────────────────────────────────

export interface RawMarkSchemeInput {
  id: string
  board: string
  subject: MarkScheme["subject"]
  paper: string
  title: string
  totalMarks: number
  durationMinutes: number
  version?: string
  sourceUrl?: string
  /** Raw plain-text dump of the mark scheme. */
  rawText: string
}

export interface ParseError {
  line: number
  message: string
}

export interface ParseResult {
  scheme: MarkScheme | null
  errors: ParseError[]
}

// ─── Regex helpers ───────────────────────────────────────────────────────────

// Examples matched:
//   "AO1 — Read, understand and respond (12 marks)"
//   "AO2: Language, form and structure [12]"
const AO_HEADING = /^AO([1-6])\s*[—\-:–]?\s*(.+?)(?:\s*[\(\[](\d+)\s*marks?[\)\]])?$/i

// Examples matched:
//   "Level 1 (1-4): Simple, explicit"
//   "Band 3 5 - 8 Some understanding"
const BAND_HEADING =
  /^(?:Level|Band)\s+(\d+|Threshold|Intermediate|High)\s*(?:\(|\[|)?\s*(\d+)\s*[-–—]\s*(\d+)\s*(?:\)|\])?\s*:?\s*(.*)$/i

// Recognise new question sections in raw dumps:
//   "Question 5 — Creative Writing (40 marks)"
const QUESTION_HEADING =
  /^(?:Question|Q)\s*(\d+[A-Za-z]?)\s*[—\-:–]?\s*(.+?)(?:\s*[\(\[](\d+)\s*marks?[\)\]])?$/i

// ─── Normalisation ───────────────────────────────────────────────────────────

function normalise(input: string): string[] {
  return input
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter((l) => l.length > 0)
}

// ─── Parser ──────────────────────────────────────────────────────────────────

/**
 * Parse a raw mark scheme text dump into a `MarkScheme`.
 *
 * The parser walks the lines and groups them into:
 *   1. Question sections (optional — a scheme may have just one question).
 *   2. Assessment Objective blocks within each question.
 *   3. Band rows within each AO.
 *
 * Any prose between the recognised headings becomes the descriptor text
 * for the current band or the question's taskDescription.
 */
export function parseMarkScheme(input: RawMarkSchemeInput): ParseResult {
  const lines = normalise(input.rawText)
  const errors: ParseError[] = []

  const questions: QuestionScheme[] = []
  let currentQuestion: MutableQuestion | null = null
  let currentAO: MutableAO | null = null
  let currentBand: MutableBand | null = null

  // Accept schemes that have no explicit question heading by starting a
  // default question. If a real question heading appears we replace it.
  currentQuestion = createDefaultQuestion(input)

  lines.forEach((line, idx) => {
    // Question heading?
    const qMatch = QUESTION_HEADING.exec(line)
    if (qMatch) {
      finaliseQuestion(currentQuestion, questions)
      currentQuestion = {
        id: `Q${qMatch[1]}`,
        questionType: qMatch[2]?.trim() ?? "Question",
        taskDescription: "",
        totalMarks: qMatch[3] ? Number(qMatch[3]) : 0,
        aos: [],
      }
      currentAO = null
      currentBand = null
      return
    }

    // AO heading?
    const aMatch = AO_HEADING.exec(line)
    if (aMatch) {
      if (!currentQuestion) currentQuestion = createDefaultQuestion(input)
      if (currentAO) currentQuestion.aos.push(currentAO)
      currentAO = {
        id: `AO${aMatch[1]}`,
        label: `AO${aMatch[1]} — ${aMatch[2]?.trim() ?? ""}`,
        description: "",
        maxMarks: aMatch[3] ? Number(aMatch[3]) : 0,
        weighting: 0,
        bands: [],
      }
      currentBand = null
      return
    }

    // Band heading?
    const bMatch = BAND_HEADING.exec(line)
    if (bMatch) {
      if (!currentAO) {
        errors.push({
          line: idx + 1,
          message: `Band "${line}" found before any AO heading`,
        })
        return
      }
      if (currentBand) currentAO.bands.push(currentBand)
      currentBand = {
        band: `Level ${bMatch[1]}`,
        minMarks: Number(bMatch[2]),
        maxMarks: Number(bMatch[3]),
        label: bMatch[4]?.trim() ?? "",
        descriptor: "",
        indicators: [],
      }
      return
    }

    // Prose — attach to the most specific open node.
    if (currentBand) {
      if (line.startsWith("- ") || line.startsWith("• ")) {
        currentBand.indicators.push(line.replace(/^[-•]\s*/, ""))
      } else {
        currentBand.descriptor = joinProse(currentBand.descriptor, line)
      }
      return
    }
    if (currentAO) {
      currentAO.description = joinProse(currentAO.description, line)
      return
    }
    if (currentQuestion) {
      currentQuestion.taskDescription = joinProse(
        currentQuestion.taskDescription,
        line,
      )
    }
  })

  // Flush any open state.
  if (currentAO && currentBand) currentAO.bands.push(currentBand)
  if (currentQuestion && currentAO) currentQuestion.aos.push(currentAO)
  finaliseQuestion(currentQuestion, questions)

  if (questions.length === 0) {
    errors.push({
      line: 0,
      message: "No assessment objectives could be parsed from the input.",
    })
    return { scheme: null, errors }
  }

  const scheme: MarkScheme = {
    id: input.id,
    board: input.board,
    subject: input.subject,
    paper: input.paper,
    title: input.title,
    totalMarks: input.totalMarks,
    durationMinutes: input.durationMinutes,
    version: input.version,
    sourceUrl: input.sourceUrl,
    questions,
  }

  return { scheme, errors }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

interface MutableBand {
  band: string
  minMarks: number
  maxMarks: number
  label: string
  descriptor: string
  indicators: string[]
}

interface MutableAO {
  id: string
  label: string
  description: string
  maxMarks: number
  weighting: number
  bands: MutableBand[]
}

interface MutableQuestion {
  id: string
  questionType: string
  taskDescription: string
  totalMarks: number
  aos: MutableAO[]
}

function createDefaultQuestion(input: RawMarkSchemeInput): MutableQuestion {
  return {
    id: "Q1",
    questionType: input.title,
    taskDescription: "",
    totalMarks: input.totalMarks,
    aos: [],
  }
}

function joinProse(existing: string, next: string): string {
  if (!existing) return next
  if (/[.!?"']$/.test(existing)) return `${existing} ${next}`
  return `${existing} ${next}`
}

function finaliseQuestion(
  q: MutableQuestion | null,
  out: QuestionScheme[],
): void {
  if (!q || q.aos.length === 0) return
  const totalFromAOs = q.aos.reduce((sum, ao) => sum + ao.maxMarks, 0)
  const totalMarks = q.totalMarks || totalFromAOs

  const aos: AssessmentObjective[] = q.aos.map((ao) => ({
    id: ao.id,
    label: ao.label,
    description: ao.description,
    maxMarks: ao.maxMarks,
    weighting: totalMarks > 0 ? ao.maxMarks / totalMarks : 0,
    bands: ao.bands.map(
      (b): BandDescriptor => ({
        band: b.band,
        minMarks: b.minMarks,
        maxMarks: b.maxMarks,
        label: b.label,
        descriptor: b.descriptor,
        indicators: [...b.indicators],
      }),
    ),
  }))

  out.push({
    id: q.id,
    questionType: q.questionType,
    taskDescription: q.taskDescription,
    totalMarks,
    assessmentObjectives: aos,
  })
}

