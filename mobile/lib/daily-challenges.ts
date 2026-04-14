// ---------------------------------------------------------------------------
// Daily challenge engine
// Selects 3 challenges per day (seeded by date), tracks progress & streaks.
// ---------------------------------------------------------------------------

import { CHALLENGE_TEMPLATES, type ChallengeTemplate } from '../data/challenge-templates'
import { getItem, setItem } from './storage'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface DailyChallenge {
  /** Template id */
  id: string
  /** Copied from template for convenience */
  title: string
  description: string
  icon: string
  type: ChallengeTemplate['type']
  condition: ChallengeTemplate['condition']
  /** XP reward *after* streak multiplier */
  xpReward: number
  /** Base XP before multiplier */
  baseXpReward: number
  /** Current progress toward the condition target */
  progress: number
  /** Whether the challenge has been completed today */
  completed: boolean
  /** Timestamp when completed (ISO string), or null */
  completedAt: string | null
}

export interface DailyChallengeState {
  /** ISO date string (YYYY-MM-DD) these challenges belong to */
  date: string
  challenges: DailyChallenge[]
}

export interface ChallengeStreakState {
  /** Current consecutive-day streak */
  current: number
  /** Longest streak ever */
  best: number
  /** ISO date string of the last day all challenges were completed */
  lastCompletedDate: string | null
}

// ---------------------------------------------------------------------------
// Deterministic seeded random (simple mulberry32)
// ---------------------------------------------------------------------------

function seedFromDate(date: string): number {
  let h = 0
  for (let i = 0; i < date.length; i++) {
    h = Math.imul(31, h) + date.charCodeAt(i)
  }
  return h >>> 0
}

function mulberry32(seed: number): () => number {
  let s = seed | 0
  return () => {
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// ---------------------------------------------------------------------------
// Streak multiplier
// ---------------------------------------------------------------------------

export function getStreakMultiplier(streakDays: number): number {
  if (streakDays >= 7) return 2.0
  if (streakDays >= 3) return 1.5
  return 1.0
}

// ---------------------------------------------------------------------------
// Select 3 challenges for a given date
// ---------------------------------------------------------------------------

function pickChallenges(dateStr: string): ChallengeTemplate[] {
  const rand = mulberry32(seedFromDate(dateStr))
  const pool = [...CHALLENGE_TEMPLATES]

  // Fisher-Yates shuffle with our seeded RNG
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }

  // Pick 3, trying for variety in type
  const picked: ChallengeTemplate[] = []
  const usedTypes = new Set<string>()

  for (const tpl of pool) {
    if (picked.length >= 3) break
    if (!usedTypes.has(tpl.type)) {
      picked.push(tpl)
      usedTypes.add(tpl.type)
    }
  }

  // If we couldn't get 3 distinct types, fill remaining slots
  if (picked.length < 3) {
    const pickedIds = new Set(picked.map((p) => p.id))
    for (const tpl of pool) {
      if (picked.length >= 3) break
      if (!pickedIds.has(tpl.id)) {
        picked.push(tpl)
      }
    }
  }

  return picked
}

// ---------------------------------------------------------------------------
// Format today's date
// ---------------------------------------------------------------------------

function toDateStr(date: Date = new Date()): string {
  return date.toISOString().slice(0, 10)
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Get (or initialise) the 3 daily challenges for the given date.
 * Reads from storage; if the stored date differs, generates fresh challenges.
 */
export async function getDailyChallenges(
  date: Date = new Date(),
): Promise<DailyChallenge[]> {
  const dateStr = toDateStr(date)
  const stored = await getItem<DailyChallengeState>('dailyChallenges')

  if (stored && stored.date === dateStr) {
    return stored.challenges
  }

  // New day -- check if yesterday's challenges were all completed for streak
  if (stored && stored.date !== dateStr) {
    await updateStreakOnDayChange(stored)
  }

  const streak = await getChallengeStreak()
  const multiplier = getStreakMultiplier(streak.current)

  const templates = pickChallenges(dateStr)
  const challenges: DailyChallenge[] = templates.map((tpl) => ({
    id: tpl.id,
    title: tpl.title,
    description: tpl.description,
    icon: tpl.icon,
    type: tpl.type,
    condition: tpl.condition,
    baseXpReward: tpl.xpReward,
    xpReward: Math.round(tpl.xpReward * multiplier),
    progress: 0,
    completed: false,
    completedAt: null,
  }))

  const state: DailyChallengeState = { date: dateStr, challenges }
  await setItem('dailyChallenges', state)
  return challenges
}

/**
 * Mark a challenge as complete by id. Returns the updated challenge (with XP)
 * or null if not found / already completed.
 */
export async function markChallengeComplete(
  challengeId: string,
): Promise<DailyChallenge | null> {
  const stored = await getItem<DailyChallengeState>('dailyChallenges')
  if (!stored) return null

  const challenge = stored.challenges.find((c) => c.id === challengeId)
  if (!challenge || challenge.completed) return null

  challenge.completed = true
  challenge.progress = challenge.condition.target
  challenge.completedAt = new Date().toISOString()

  await setItem('dailyChallenges', stored)

  // If all 3 are now complete, update the streak
  const allDone = stored.challenges.every((c) => c.completed)
  if (allDone) {
    await completeStreakDay(stored.date)
  }

  return challenge
}

/**
 * Update progress on a challenge. Automatically marks complete if target is
 * reached. Returns the updated challenge or null if not found.
 */
export async function updateChallengeProgress(
  challengeId: string,
  progress: number,
): Promise<DailyChallenge | null> {
  const stored = await getItem<DailyChallengeState>('dailyChallenges')
  if (!stored) return null

  const challenge = stored.challenges.find((c) => c.id === challengeId)
  if (!challenge || challenge.completed) return null

  challenge.progress = Math.min(progress, challenge.condition.target)

  if (challenge.progress >= challenge.condition.target) {
    challenge.completed = true
    challenge.completedAt = new Date().toISOString()
  }

  await setItem('dailyChallenges', stored)

  // Check if all done
  const allDone = stored.challenges.every((c) => c.completed)
  if (allDone) {
    await completeStreakDay(stored.date)
  }

  return challenge
}

/**
 * Get the current progress snapshot for today's challenges.
 */
export async function getChallengeProgress(): Promise<{
  challenges: DailyChallenge[]
  completedCount: number
  totalXpEarned: number
  allComplete: boolean
}> {
  const challenges = await getDailyChallenges()
  const completed = challenges.filter((c) => c.completed)
  return {
    challenges,
    completedCount: completed.length,
    totalXpEarned: completed.reduce((sum, c) => sum + c.xpReward, 0),
    allComplete: completed.length === challenges.length,
  }
}

/**
 * Get the current streak state.
 */
export async function getChallengeStreak(): Promise<ChallengeStreakState> {
  const stored = await getItem<ChallengeStreakState>('challengeStreak')
  return stored ?? { current: 0, best: 0, lastCompletedDate: null }
}

// ---------------------------------------------------------------------------
// Internal streak helpers
// ---------------------------------------------------------------------------

async function completeStreakDay(dateStr: string): Promise<void> {
  const streak = await getChallengeStreak()

  // Already recorded this date
  if (streak.lastCompletedDate === dateStr) return

  const yesterday = new Date(dateStr)
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterdayStr = toDateStr(yesterday)

  if (streak.lastCompletedDate === yesterdayStr) {
    // Consecutive day
    streak.current += 1
  } else {
    // Streak broken or first day
    streak.current = 1
  }

  streak.lastCompletedDate = dateStr
  streak.best = Math.max(streak.best, streak.current)
  await setItem('challengeStreak', streak)
}

async function updateStreakOnDayChange(
  previousState: DailyChallengeState,
): Promise<void> {
  const allDone = previousState.challenges.every((c) => c.completed)
  if (allDone) {
    // Already handled by completeStreakDay when last challenge was marked
    return
  }

  // Previous day was NOT completed -- check if streak should reset
  const streak = await getChallengeStreak()
  const today = toDateStr()

  if (streak.lastCompletedDate) {
    const lastDate = new Date(streak.lastCompletedDate)
    const todayDate = new Date(today)
    const diffMs = todayDate.getTime() - lastDate.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays > 1) {
      // Missed more than one day -- reset streak
      streak.current = 0
      await setItem('challengeStreak', streak)
    }
  }
}
