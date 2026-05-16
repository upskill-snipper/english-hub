'use client'

/**
 * LEARNING-PROFILE ENGINE
 *
 * Turns the learner's raw game history (score + time-on-task per attempt,
 * stored in localStorage by `game-scores.ts`) into a structured profile:
 *
 *   • mastery per skill   — recency-weighted accuracy
 *   • effort per skill    — total time spent
 *   • trend               — improving / steady / declining
 *   • classification      — strength / developing / focus area
 *   • strand roll-ups     — Vocabulary, Grammar, … overall picture
 *   • next-step actions   — the weakest skills + which game to play next
 *                           and the lesson that teaches it
 *
 * This is what directs future learning: it names where a student is
 * strong, where they should focus next, and gives a one-tap action.
 *
 * Pure + client-only (reads localStorage). Server sync is handled
 * separately via /api/progress/games; this engine works offline and for
 * guests too.
 */

import { listPlayedGameIds, getAllAttempts, type GameAttempt } from '@/lib/game-scores'
import {
  getGameTaxon,
  gamesForSkill,
  SKILL_LABEL,
  STRAND_LABEL,
  type Skill,
  type Strand,
  type GameTaxon,
} from './taxonomy'

// ─── Types ─────────────────────────────────────────────────────────────

export type Classification =
  | 'strength' // consistently high accuracy
  | 'developing' // mid accuracy or improving
  | 'focus' // weak — this is where to focus next
  | 'new' // too few attempts to judge

export type Trend = 'improving' | 'steady' | 'declining'

export interface SkillProfile {
  skill: Skill
  label: string
  strand: Strand
  attempts: number
  /** Recency-weighted accuracy 0–100. */
  mastery: number
  /** Plain mean accuracy 0–100 (for display alongside weighted). */
  averageAccuracy: number
  trend: Trend
  classification: Classification
  totalTimeSeconds: number
  lastPlayed: number | null
  /** Representative games the learner played for this skill. */
  games: string[]
}

export interface StrandProfile {
  strand: Strand
  label: string
  mastery: number
  attempts: number
  totalTimeSeconds: number
  classification: Classification
}

export interface NextStep {
  skill: Skill
  label: string
  reason: string
  /** A game to play to improve this skill. */
  game: GameTaxon | null
  /** A lesson/page that teaches the skill, if one is mapped. */
  learnHref?: string
}

export interface LearningProfile {
  hasData: boolean
  totals: {
    gamesPlayed: number
    totalAttempts: number
    totalTimeSeconds: number
    distinctSkills: number
  }
  skills: SkillProfile[]
  strands: StrandProfile[]
  strengths: SkillProfile[]
  focusAreas: SkillProfile[]
  nextSteps: NextStep[]
}

// ─── Tunables ──────────────────────────────────────────────────────────

const STRENGTH_THRESHOLD = 80 // mastery ≥ → strength
const FOCUS_THRESHOLD = 60 // mastery < → focus area
const MIN_ATTEMPTS_TO_JUDGE = 2
/** Half-life (in attempts) for recency weighting of accuracy. */
const RECENCY_DECAY = 0.65

// ─── Helpers ───────────────────────────────────────────────────────────

function recencyWeightedAccuracy(attempts: GameAttempt[]): number {
  if (attempts.length === 0) return 0
  // attempts are oldest → newest; weight newest highest
  const ordered = attempts.slice().sort((a, b) => a.timestamp - b.timestamp)
  let weightSum = 0
  let acc = 0
  for (let i = 0; i < ordered.length; i++) {
    // distance from the most recent attempt
    const fromEnd = ordered.length - 1 - i
    const w = Math.pow(RECENCY_DECAY, fromEnd)
    acc += ordered[i].percentage * w
    weightSum += w
  }
  return weightSum > 0 ? Math.round(acc / weightSum) : 0
}

function computeTrend(attempts: GameAttempt[]): Trend {
  if (attempts.length < 4) return 'steady'
  const ordered = attempts.slice().sort((a, b) => a.timestamp - b.timestamp)
  const half = Math.floor(ordered.length / 2)
  const older = ordered.slice(0, half)
  const recent = ordered.slice(half)
  const mean = (xs: GameAttempt[]) => xs.reduce((s, a) => s + a.percentage, 0) / xs.length
  const delta = mean(recent) - mean(older)
  if (delta >= 8) return 'improving'
  if (delta <= -8) return 'declining'
  return 'steady'
}

function classify(mastery: number, attempts: number, trend: Trend): Classification {
  if (attempts < MIN_ATTEMPTS_TO_JUDGE) return 'new'
  if (mastery >= STRENGTH_THRESHOLD && trend !== 'declining') return 'strength'
  if (mastery < FOCUS_THRESHOLD || trend === 'declining') return 'focus'
  return 'developing'
}

// ─── Build ─────────────────────────────────────────────────────────────

export function buildLearningProfile(): LearningProfile {
  const gameIds = listPlayedGameIds()

  // Group every attempt by skill (a skill can span multiple games).
  const bySkill = new Map<Skill, { strand: Strand; attempts: GameAttempt[]; games: Set<string> }>()

  let totalAttempts = 0
  let totalTimeSeconds = 0
  let gamesPlayed = 0

  for (const gameId of gameIds) {
    const attempts = getAllAttempts(gameId)
    if (attempts.length === 0) continue
    gamesPlayed += 1
    const taxon = getGameTaxon(gameId)
    const bucket =
      bySkill.get(taxon.skill) ??
      (() => {
        const b = { strand: taxon.strand, attempts: [], games: new Set<string>() }
        bySkill.set(taxon.skill, b)
        return b
      })()
    for (const a of attempts) {
      bucket.attempts.push(a)
      totalAttempts += 1
      totalTimeSeconds += a.durationSeconds ?? 0
    }
    bucket.games.add(taxon.title)
  }

  const skills: SkillProfile[] = []
  for (const [skill, b] of bySkill) {
    const mastery = recencyWeightedAccuracy(b.attempts)
    const averageAccuracy =
      b.attempts.length > 0
        ? Math.round(b.attempts.reduce((s, a) => s + a.percentage, 0) / b.attempts.length)
        : 0
    const trend = computeTrend(b.attempts)
    const lastPlayed = b.attempts.reduce((mx, a) => (a.timestamp > mx ? a.timestamp : mx), 0)
    skills.push({
      skill,
      label: SKILL_LABEL[skill],
      strand: b.strand,
      attempts: b.attempts.length,
      mastery,
      averageAccuracy,
      trend,
      classification: classify(mastery, b.attempts.length, trend),
      totalTimeSeconds: b.attempts.reduce((s, a) => s + (a.durationSeconds ?? 0), 0),
      lastPlayed: lastPlayed || null,
      games: Array.from(b.games),
    })
  }

  // Strand roll-up.
  const strandMap = new Map<Strand, SkillProfile[]>()
  for (const s of skills) {
    const arr = strandMap.get(s.strand) ?? []
    arr.push(s)
    strandMap.set(s.strand, arr)
  }
  const strands: StrandProfile[] = []
  for (const [strand, sps] of strandMap) {
    const attempts = sps.reduce((n, s) => n + s.attempts, 0)
    // weight each skill's mastery by how many attempts it has
    const wMastery =
      attempts > 0
        ? Math.round(sps.reduce((acc, s) => acc + s.mastery * s.attempts, 0) / attempts)
        : 0
    const time = sps.reduce((n, s) => n + s.totalTimeSeconds, 0)
    strands.push({
      strand,
      label: STRAND_LABEL[strand],
      mastery: wMastery,
      attempts,
      totalTimeSeconds: time,
      classification: classify(wMastery, attempts, 'steady'),
    })
  }
  strands.sort((a, b) => b.mastery - a.mastery)

  const judged = skills.filter((s) => s.classification !== 'new')
  const strengths = judged
    .filter((s) => s.classification === 'strength')
    .sort((a, b) => b.mastery - a.mastery)
  const focusAreas = judged
    .filter((s) => s.classification === 'focus')
    .sort((a, b) => a.mastery - b.mastery)

  // Next steps: weakest skills first; then declining; then "new" skills
  // with only one attempt (encourage another go to establish a baseline).
  const ranked: SkillProfile[] = [
    ...focusAreas,
    ...judged
      .filter((s) => s.classification === 'developing' && s.trend === 'declining')
      .sort((a, b) => a.mastery - b.mastery),
    ...skills.filter((s) => s.classification === 'new').sort((a, b) => a.attempts - b.attempts),
  ]

  const nextSteps: NextStep[] = ranked.slice(0, 5).map((s) => {
    const playedTitles = new Set(s.games)
    // prefer a game for this skill the learner has NOT played much
    const candidates = gamesForSkill(s.skill)
    const game = candidates.find((g) => !playedTitles.has(g.title)) ?? candidates[0] ?? null
    let reason: string
    if (s.classification === 'focus') {
      reason =
        s.trend === 'declining'
          ? `Your accuracy here is slipping (${s.mastery}%). A focused round will rebuild it.`
          : `This is your weakest skill so far (${s.mastery}%). Targeted practice will move it fastest.`
    } else if (s.classification === 'new') {
      reason = `You've only tried this ${s.attempts} time${s.attempts === 1 ? '' : 's'} — play again so we can map your level.`
    } else {
      reason = `Accuracy is dipping (${s.mastery}%). Keep it sharp with another round.`
    }
    return {
      skill: s.skill,
      label: s.label,
      reason,
      game,
      learnHref: game?.learnHref ?? getGameTaxon(game?.slug ?? '').learnHref,
    }
  })

  return {
    hasData: totalAttempts > 0,
    totals: {
      gamesPlayed,
      totalAttempts,
      totalTimeSeconds,
      distinctSkills: skills.length,
    },
    skills: skills.sort((a, b) => b.mastery - a.mastery),
    strands,
    strengths,
    focusAreas,
    nextSteps,
  }
}

// ─── Display helpers ───────────────────────────────────────────────────

export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${Math.round(seconds)}s`
  const m = Math.floor(seconds / 60)
  if (m < 60) return `${m} min`
  const h = Math.floor(m / 60)
  return `${h}h ${m % 60}m`
}

export const CLASSIFICATION_LABEL: Record<Classification, string> = {
  strength: 'Strength',
  developing: 'Developing',
  focus: 'Focus next',
  new: 'Just started',
}
