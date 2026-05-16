// ─── CEFR Diagnostic Scoring Engine ───────────────────────────────────────────
// Maps a learner's answers on the EAL placement test to a CEFR level
// (Common European Framework of Reference for Languages, Council of Europe).
//
// Methodology mirrors src/lib/reading-assessment.ts: a deterministic
// norm table converts a difficulty-weighted composite score to a band,
// combined with an adaptive "ceiling" rule (the highest level the
// learner demonstrably masters). Per-skill sub-scores drive the
// recommended next topics. No AI, no network — fully reproducible.
//
// Product bands (those with dedicated content + routes): A2, B1, B2, C1.
// The full ladder (A1..C2) is modelled so the engine can place a learner
// just below A2 (A1) or above C1 (C2) honestly rather than clamping
// silently.
//
// CEFR descriptors: Council of Europe global scale.
// https://www.coe.int/en/web/common-european-framework-reference-languages/level-descriptions
// ──────────────────────────────────────────────────────────────────────────────

import type { LocalizedString } from '../ks3/types'
import type { EALCategory } from './types'

// ─── Types ───────────────────────────────────────────────────────────────────

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'

/** Bands that have dedicated banded content + /eal/<topic>/level/<band> routes. */
export const CEFR_PRODUCT_BANDS = ['A2', 'B1', 'B2', 'C1'] as const
export type CEFRBand = (typeof CEFR_PRODUCT_BANDS)[number]

/** Ordered ladder, ascending. Index = rank. */
export const CEFR_LADDER: readonly CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

export function cefrRank(level: CEFRLevel): number {
  return CEFR_LADDER.indexOf(level)
}

/** Clamp an arbitrary CEFR level to the nearest product band (A2..C1). */
export function toProductBand(level: CEFRLevel): CEFRBand {
  if (level === 'A1') return 'A2'
  if (level === 'C2') return 'C1'
  return level as CEFRBand
}

/** A single calibrated diagnostic question. Superset of EALExercise. */
export interface DiagnosticQuestion {
  /** Stable id, e.g. "g-a2-01" (skill-level-index). */
  id: string
  /** The CEFR level this item discriminates at. */
  level: CEFRLevel
  /** Which EAL skill strand this item probes. */
  skill: EALCategory
  question: LocalizedString
  prompt: LocalizedString
  options: LocalizedString[]
  /** 0-based index into `options`. */
  correctIndex: number
  explanation: LocalizedString
}

export interface CEFRAnswer {
  questionId: string
  /** 0-based index the learner selected; -1 if skipped. */
  selectedIndex: number
}

export interface SkillBreakdown {
  skill: EALCategory
  score: number
  max: number
  percentage: number
}

export interface CEFRDiagnosticResult {
  /** Honest placement on the full ladder (A1..C2). */
  level: CEFRLevel
  /** Same placement clamped to a band that has content (A2..C1). */
  band: CEFRBand
  /** 0–100 confidence in the placement (consistency × coverage). */
  confidence: number
  /** Difficulty-weighted composite, 0–100. */
  compositePercentage: number
  /** Highest level the learner demonstrably masters (>= mastery at it and below). */
  ceilingLevel: CEFRLevel
  /** Number of questions actually answered (non-skipped). */
  answered: number
  /** Per-skill sub-scores, descending by weakness for the UI. */
  skills: SkillBreakdown[]
  /** Bilingual can-do summary for the achieved level. */
  descriptor: LocalizedString
  strengths: LocalizedString[]
  focusAreas: LocalizedString[]
  /** Topic ids to study next (weakest skills first), routed by the page. */
  recommendedTopicIds: string[]
}

// ─── CEFR descriptors (Council of Europe global scale, bilingual) ─────────────

export const CEFR_DESCRIPTORS: Record<CEFRLevel, LocalizedString> = {
  A1: {
    en: 'Beginner — can understand and use familiar everyday expressions and very basic phrases.',
    ar: 'مبتدئ — يفهم ويستخدم تعبيرات يومية مألوفة وعبارات أساسية جداً.',
  },
  A2: {
    en: 'Elementary — can understand sentences and frequent expressions about immediate needs, and communicate in simple routine tasks.',
    ar: 'مبتدئ متقدّم — يفهم الجمل والتعبيرات الشائعة المتعلقة بالاحتياجات المباشرة، ويتواصل في المهام الروتينية البسيطة.',
  },
  B1: {
    en: 'Intermediate — can deal with most situations while travelling, and produce connected text on familiar topics.',
    ar: 'متوسط — يتعامل مع معظم المواقف أثناء السفر، وينتج نصاً مترابطاً في مواضيع مألوفة.',
  },
  B2: {
    en: 'Upper-intermediate — can interact with fluency and spontaneity and produce clear, detailed text on a wide range of subjects.',
    ar: 'فوق المتوسط — يتفاعل بطلاقة وعفوية وينتج نصاً واضحاً مفصّلاً في مواضيع متنوعة.',
  },
  C1: {
    en: 'Advanced — can express ideas fluently and spontaneously and use language flexibly for academic and professional purposes.',
    ar: 'متقدّم — يعبّر عن أفكاره بطلاقة وعفوية ويستخدم اللغة بمرونة للأغراض الأكاديمية والمهنية.',
  },
  C2: {
    en: 'Proficient — can understand virtually everything heard or read and express themselves with precision in complex situations.',
    ar: 'متمكّن — يفهم تقريباً كل ما يسمعه أو يقرأه ويعبّر عن نفسه بدقة في المواقف المعقّدة.',
  },
}

export const CEFR_LABEL: Record<CEFRLevel, LocalizedString> = {
  A1: { en: 'A1 — Beginner', ar: 'A1 — مبتدئ' },
  A2: { en: 'A2 — Elementary', ar: 'A2 — مبتدئ متقدّم' },
  B1: { en: 'B1 — Intermediate', ar: 'B1 — متوسط' },
  B2: { en: 'B2 — Upper Intermediate', ar: 'B2 — فوق المتوسط' },
  C1: { en: 'C1 — Advanced', ar: 'C1 — متقدّم' },
  C2: { en: 'C2 — Proficient', ar: 'C2 — متمكّن' },
}

// ─── Norm table: composite % → CEFR level ─────────────────────────────────────
// Difficulty-weighted composite (harder items carry more marks) maps to a
// band. Boundaries are calibrated so a learner who answers items at and
// below their level correctly, and misses items above it, lands at that
// level. Entry: [minCompositePercentage, level].

const CEFR_NORMS: [number, CEFRLevel][] = [
  [88, 'C2'],
  [74, 'C1'],
  [58, 'B2'],
  [42, 'B1'],
  [25, 'A2'],
  [0, 'A1'],
]

/** Difficulty weight for an item at a given level (harder = worth more). */
const LEVEL_WEIGHT: Record<CEFRLevel, number> = {
  A1: 1,
  A2: 1,
  B1: 2,
  B2: 3,
  C1: 4,
  C2: 5,
}

/** Mastery threshold: fraction correct at a level to count it "mastered". */
const MASTERY = 0.5

// ─── Scoring helpers ──────────────────────────────────────────────────────────

function lookupLevel(percentage: number): CEFRLevel {
  for (const [min, level] of CEFR_NORMS) {
    if (percentage >= min) return level
  }
  return 'A1'
}

/** Score one answer against its question. Returns weighted points earned. */
export function scoreCEFRAnswer(answer: CEFRAnswer, question: DiagnosticQuestion): number {
  const weight = LEVEL_WEIGHT[question.level]
  return answer.selectedIndex === question.correctIndex ? weight : 0
}

/**
 * Per-level accuracy (unweighted) used for the adaptive ceiling rule.
 * Returns a map level → { correct, total }.
 */
function levelAccuracy(
  answers: CEFRAnswer[],
  bank: Map<string, DiagnosticQuestion>,
): Map<CEFRLevel, { correct: number; total: number }> {
  const acc = new Map<CEFRLevel, { correct: number; total: number }>()
  for (const a of answers) {
    if (a.selectedIndex < 0) continue
    const q = bank.get(a.questionId)
    if (!q) continue
    const cur = acc.get(q.level) ?? { correct: 0, total: 0 }
    cur.total += 1
    if (a.selectedIndex === q.correctIndex) cur.correct += 1
    acc.set(q.level, cur)
  }
  return acc
}

/**
 * Highest level the learner masters: the top level L for which accuracy
 * at L >= MASTERY *and* every assessed level below L is also >= MASTERY.
 * Mirrors the ceiling rule in reading-assessment.ts.
 */
function findCeiling(acc: Map<CEFRLevel, { correct: number; total: number }>): CEFRLevel {
  let ceiling: CEFRLevel = 'A1'
  for (const level of CEFR_LADDER) {
    const a = acc.get(level)
    if (!a || a.total === 0) continue // unassessed level: don't break the chain
    if (a.correct / a.total >= MASTERY) {
      ceiling = level
    } else {
      break
    }
  }
  return ceiling
}

function scoreSkills(
  answers: CEFRAnswer[],
  bank: Map<string, DiagnosticQuestion>,
): SkillBreakdown[] {
  const map = new Map<EALCategory, { score: number; max: number }>()
  for (const a of answers) {
    const q = bank.get(a.questionId)
    if (!q) continue
    const cur = map.get(q.skill) ?? { score: 0, max: 0 }
    cur.max += 1
    if (a.selectedIndex === q.correctIndex) cur.score += 1
    map.set(q.skill, cur)
  }
  const out: SkillBreakdown[] = []
  for (const [skill, { score, max }] of map) {
    out.push({
      skill,
      score,
      max,
      percentage: max > 0 ? Math.round((score / max) * 100) : 0,
    })
  }
  // Weakest first — the UI and recommendations key off this order.
  return out.sort((x, y) => x.percentage - y.percentage)
}

const SKILL_LABEL: Record<EALCategory, LocalizedString> = {
  grammar: { en: 'grammar', ar: 'القواعد' },
  sentence: { en: 'sentence structure', ar: 'بناء الجملة' },
  vocabulary: { en: 'vocabulary', ar: 'المفردات' },
  pronunciation: { en: 'pronunciation', ar: 'النطق' },
  common_errors: { en: 'common Arabic-L1 errors', ar: 'الأخطاء الشائعة' },
}

function analyse(
  skills: SkillBreakdown[],
  level: CEFRLevel,
): { strengths: LocalizedString[]; focusAreas: LocalizedString[] } {
  const strengths: LocalizedString[] = []
  const focusAreas: LocalizedString[] = []

  for (const s of skills) {
    const name = SKILL_LABEL[s.skill]
    if (s.max === 0) continue
    if (s.percentage >= 75) {
      strengths.push({
        en: `Strong ${name.en} (${s.percentage}%)`,
        ar: `${name.ar} قوية (${s.percentage}%)`,
      })
    } else if (s.percentage < 50) {
      focusAreas.push({
        en: `Prioritise ${name.en} — ${s.percentage}% at this stage`,
        ar: `ركّز على ${name.ar} — ${s.percentage}% في هذي المرحلة`,
      })
    } else {
      focusAreas.push({
        en: `Keep developing ${name.en} (${s.percentage}%)`,
        ar: `استمر بتطوير ${name.ar} (${s.percentage}%)`,
      })
    }
  }

  if (strengths.length === 0) {
    strengths.push({
      en: `Completing the placement test at ${level} is a solid baseline to build from.`,
      ar: `إكمال اختبار تحديد المستوى عند ${level} نقطة انطلاق جيدة للبناء عليها.`,
    })
  }
  if (focusAreas.length === 0) {
    focusAreas.push({
      en: 'Well-balanced across all skills — push into the next band with harder practice.',
      ar: 'متوازن في كل المهارات — انتقل للمستوى الأعلى بتمارين أصعب.',
    })
  }
  return { strengths, focusAreas }
}

// ─── Main scoring function ────────────────────────────────────────────────────

/**
 * Calculate a CEFR placement from diagnostic answers.
 *
 * - Composite is difficulty-weighted (C1 items worth 4× an A2 item).
 * - Norm table converts the composite to a provisional level.
 * - Adaptive ceiling caps the result at the highest mastered level so a
 *   lucky guess on a hard item can't over-place a learner.
 * - Final level = min(norm level, ceiling + 1) — at most one band above
 *   demonstrated mastery, which is the standard placement convention.
 */
export function calculateCEFRLevel(
  answers: CEFRAnswer[],
  questions: DiagnosticQuestion[],
  recommend?: (skill: EALCategory, band: CEFRBand) => string[],
): CEFRDiagnosticResult {
  const bank = new Map(questions.map((q) => [q.id, q]))

  let earned = 0
  let max = 0
  let answered = 0
  for (const q of questions) {
    max += LEVEL_WEIGHT[q.level]
  }
  for (const a of answers) {
    const q = bank.get(a.questionId)
    if (!q) continue
    if (a.selectedIndex >= 0) answered += 1
    earned += scoreCEFRAnswer(a, q)
  }

  const compositePercentage = max > 0 ? Math.round((earned / max) * 100) : 0
  const normLevel = lookupLevel(compositePercentage)

  const acc = levelAccuracy(answers, bank)
  const ceilingLevel = findCeiling(acc)

  // Final placement: never more than one band above demonstrated mastery.
  const cappedRank = Math.min(cefrRank(normLevel), cefrRank(ceilingLevel) + 1)
  const level = CEFR_LADDER[Math.max(0, cappedRank)]
  const band = toProductBand(level)

  // Confidence: coverage (how many answered) × consistency (how cleanly
  // the norm level and the ceiling agree).
  const totalQuestions = questions.length || 1
  const coverage = Math.min(1, answered / totalQuestions)
  const agreement = 1 - Math.min(1, Math.abs(cefrRank(normLevel) - cefrRank(ceilingLevel)) / 3)
  const confidence = Math.round(
    Math.max(15, Math.min(99, (0.55 * coverage + 0.45 * agreement) * 100)),
  )

  const skills = scoreSkills(answers, bank)
  const { strengths, focusAreas } = analyse(skills, level)

  // Recommend topics for the two weakest skills at the placed band.
  const recommendedTopicIds: string[] = []
  if (recommend) {
    const weak = skills.filter((s) => s.max > 0).slice(0, 2)
    for (const s of weak) {
      for (const id of recommend(s.skill, band)) {
        if (!recommendedTopicIds.includes(id)) recommendedTopicIds.push(id)
      }
    }
  }

  return {
    level,
    band,
    confidence,
    compositePercentage,
    ceilingLevel,
    answered,
    skills,
    descriptor: CEFR_DESCRIPTORS[level],
    strengths,
    focusAreas,
    recommendedTopicIds,
  }
}
