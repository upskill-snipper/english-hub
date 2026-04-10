// ─── Feedback Generator ──────────────────────────────────────────────────────
// Take the raw JSON payload from the LLM and the predicted grade, and combine
// them into a `MarkingResult` ready to return from the `/api/mark` route.
//
// This layer is responsible for:
//   • Validating the JSON shape returned by the model.
//   • Clamping AO marks to the scheme's max.
//   • Computing the total, grade band and next-grade guidance.
//   • Applying post-AI safety (e.g. truncating long "improvement" suggestions
//     so the model can never smuggle in a rewritten paragraph).
// ────────────────────────────────────────────────────────────────────────────

import type {
  AOScore,
  FeedbackItem,
  MarkScheme,
  MarkingResult,
  QuestionScheme,
} from "./mark-schemes/types"
import { predictGrade } from "./grade-predictor"

// ─── Shape returned by the LLM ───────────────────────────────────────────────

interface RawLLMResponse {
  aoScores?: Array<{
    id?: string
    label?: string
    marks?: number
    maxMarks?: number
    band?: string
    justification?: string
    evidence?: string[]
  }>
  strengths?: Array<{ point?: string; quote?: string; suggestion?: string }>
  improvements?: Array<{ point?: string; suggestion?: string; quote?: string }>
  nextStepsToNextGrade?: string[]
  summary?: string
  error?: "INVALID_SUBMISSION" | "OFF_TOPIC"
}

// ─── Errors ──────────────────────────────────────────────────────────────────

export type FeedbackError =
  | { type: "INVALID_SUBMISSION" }
  | { type: "OFF_TOPIC" }
  | { type: "INVALID_RESPONSE"; reason: string }

// ─── Constants ───────────────────────────────────────────────────────────────

const MAX_SUGGESTION_CHARS = 250
const MAX_QUOTE_CHARS = 200
const MAX_STRENGTHS = 5
const MAX_IMPROVEMENTS = 5
const MAX_NEXT_STEPS = 4

// ─── Public API ──────────────────────────────────────────────────────────────

export interface FeedbackGeneratorInput {
  scheme: MarkScheme
  questionId: string
  rawResponseText: string
}

export type FeedbackGeneratorResult =
  | { ok: true; result: MarkingResult }
  | { ok: false; error: FeedbackError }

/**
 * Parse the model's raw response text into a structured `MarkingResult`.
 */
export function generateFeedback(
  input: FeedbackGeneratorInput,
): FeedbackGeneratorResult {
  const question = findQuestion(input.scheme, input.questionId)
  if (!question) {
    return {
      ok: false,
      error: {
        type: "INVALID_RESPONSE",
        reason: `Unknown question "${input.questionId}" for mark scheme "${input.scheme.id}"`,
      },
    }
  }

  const parsed = tryParseJSON(input.rawResponseText)
  if (!parsed) {
    return {
      ok: false,
      error: {
        type: "INVALID_RESPONSE",
        reason: "Model response was not valid JSON",
      },
    }
  }

  if (parsed.error === "INVALID_SUBMISSION")
    return { ok: false, error: { type: "INVALID_SUBMISSION" } }
  if (parsed.error === "OFF_TOPIC")
    return { ok: false, error: { type: "OFF_TOPIC" } }

  const aoScores = normaliseAOScores(parsed.aoScores, question)
  if (aoScores.length === 0) {
    return {
      ok: false,
      error: {
        type: "INVALID_RESPONSE",
        reason: "Model returned no AO scores",
      },
    }
  }

  const strengths = normaliseFeedback(parsed.strengths, MAX_STRENGTHS)
  const improvements = normaliseImprovements(parsed.improvements)
  const nextSteps = normaliseNextSteps(parsed.nextStepsToNextGrade)
  const summary =
    typeof parsed.summary === "string" && parsed.summary.trim().length > 0
      ? parsed.summary.trim().slice(0, 1_500)
      : ""

  const prediction = predictGrade(aoScores, question.totalMarks)

  const result: MarkingResult = {
    markSchemeId: input.scheme.id,
    questionId: question.id,
    totalMarks: prediction.totalMarks,
    maxMarks: prediction.maxMarks,
    predictedGrade: prediction.grade,
    gradeBand: prediction.band,
    aoScores,
    strengths,
    improvements,
    nextStepsToNextGrade: nextSteps.length
      ? nextSteps
      : buildFallbackNextSteps(prediction),
    summary:
      summary || buildFallbackSummary(prediction, question, aoScores),
  }

  return { ok: true, result }
}

// ─── Parsing helpers ─────────────────────────────────────────────────────────

function tryParseJSON(text: string): RawLLMResponse | null {
  if (!text) return null
  const cleaned = text
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim()

  try {
    return JSON.parse(cleaned) as RawLLMResponse
  } catch {
    // Attempt to recover a JSON object from within the text.
    const firstBrace = cleaned.indexOf("{")
    const lastBrace = cleaned.lastIndexOf("}")
    if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
      return null
    }
    try {
      return JSON.parse(cleaned.slice(firstBrace, lastBrace + 1)) as RawLLMResponse
    } catch {
      return null
    }
  }
}

function normaliseAOScores(
  raw: RawLLMResponse["aoScores"],
  question: QuestionScheme,
): AOScore[] {
  if (!Array.isArray(raw)) return []
  const expectedById = new Map(
    question.assessmentObjectives.map((ao) => [ao.id, ao]),
  )

  const results: AOScore[] = []
  for (const entry of raw) {
    if (!entry || typeof entry !== "object") continue
    const id = typeof entry.id === "string" ? entry.id.toUpperCase() : ""
    const expected = expectedById.get(id)
    const maxMarks =
      typeof entry.maxMarks === "number" && Number.isFinite(entry.maxMarks)
        ? entry.maxMarks
        : expected?.maxMarks ?? 0
    const marks = clamp(
      typeof entry.marks === "number" ? entry.marks : 0,
      0,
      maxMarks,
    )

    results.push({
      id: id || expected?.id || "AO?",
      label: entry.label || expected?.label || id,
      marks: Math.round(marks),
      maxMarks,
      band: typeof entry.band === "string" ? entry.band : "",
      justification:
        typeof entry.justification === "string"
          ? entry.justification.slice(0, 800)
          : "",
      evidence: Array.isArray(entry.evidence)
        ? entry.evidence
            .filter((q): q is string => typeof q === "string")
            .map((q) => q.slice(0, MAX_QUOTE_CHARS))
            .slice(0, 3)
        : undefined,
    })
  }
  return results
}

function normaliseFeedback(
  raw: Array<{ point?: string; quote?: string; suggestion?: string }> | undefined,
  max: number,
): FeedbackItem[] {
  if (!Array.isArray(raw)) return []
  return raw
    .filter((entry): entry is { point: string } =>
      Boolean(entry && typeof entry === "object" && typeof entry.point === "string"),
    )
    .slice(0, max)
    .map((entry) => ({
      point: entry.point.slice(0, 400),
      quote:
        typeof (entry as { quote?: string }).quote === "string"
          ? (entry as { quote?: string }).quote!.slice(0, MAX_QUOTE_CHARS)
          : undefined,
      suggestion:
        typeof (entry as { suggestion?: string }).suggestion === "string"
          ? (entry as { suggestion?: string }).suggestion!.slice(
              0,
              MAX_SUGGESTION_CHARS,
            )
          : undefined,
    }))
}

function normaliseImprovements(
  raw: Array<{ point?: string; suggestion?: string; quote?: string }> | undefined,
): FeedbackItem[] {
  return normaliseFeedback(raw, MAX_IMPROVEMENTS).map((imp) => ({
    ...imp,
    // Hard-cap suggestions to protect against smuggled rewritten paragraphs.
    suggestion: imp.suggestion ? imp.suggestion.slice(0, MAX_SUGGESTION_CHARS) : undefined,
  }))
}

function normaliseNextSteps(raw: string[] | undefined): string[] {
  if (!Array.isArray(raw)) return []
  return raw
    .filter((s): s is string => typeof s === "string" && s.trim().length > 0)
    .map((s) => s.trim().slice(0, 260))
    .slice(0, MAX_NEXT_STEPS)
}

// ─── Fallbacks ───────────────────────────────────────────────────────────────

function buildFallbackNextSteps(
  prediction: ReturnType<typeof predictGrade>,
): string[] {
  if (!prediction.nextGrade) {
    return ["Keep reviewing and applying the mark scheme descriptors."]
  }
  return [
    `You need approximately ${prediction.marksToNextGrade} more marks to reach Grade ${prediction.nextGrade}.`,
    "Focus on the improvements above, and try another practice response using the same mark scheme.",
  ]
}

function buildFallbackSummary(
  prediction: ReturnType<typeof predictGrade>,
  question: QuestionScheme,
  aoScores: readonly AOScore[],
): string {
  const topAO = [...aoScores].sort(
    (a, b) => b.marks / b.maxMarks - a.marks / a.maxMarks,
  )[0]
  const weakestAO = [...aoScores].sort(
    (a, b) => a.marks / a.maxMarks - b.marks / b.maxMarks,
  )[0]

  return (
    `This response sits at a predicted Grade ${prediction.grade} (${prediction.totalMarks}/${prediction.maxMarks}) on ${question.questionType}. ` +
    (topAO ? `Strongest area: ${topAO.label}. ` : "") +
    (weakestAO ? `Focus next on ${weakestAO.label}.` : "")
  )
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function clamp(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return min
  return Math.min(Math.max(value, min), max)
}

function findQuestion(
  scheme: MarkScheme,
  questionId: string,
): QuestionScheme | undefined {
  const normalised = questionId.trim().toLowerCase()
  return scheme.questions.find(
    (q) =>
      q.id.toLowerCase() === normalised ||
      q.questionType.toLowerCase() === normalised,
  )
}
