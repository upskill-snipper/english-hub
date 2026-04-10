'use client'

// ─── Game Score Utilities ────────────────────────────────────────────────────
// Shared helpers for saving, retrieving, and analysing game scores.
// All data is persisted in localStorage.
// ──────────────────────────────────────────────────────────────────────────────

import { percentageToGCSEGrade, type GCSEGrade } from '@/lib/grades'

/* ─── Types ──────────────────────────────────────────────────── */

export interface GameAttempt {
  score: number
  maxScore: number
  percentage: number
  grade: GCSEGrade
  timestamp: number // epoch ms
}

interface StoredGameData {
  highScore: number
  highScoreMax: number
  attempts: GameAttempt[]
}

/* ─── Storage Keys ───────────────────────────────────────────── */

const STORAGE_PREFIX = 'eh_game_'

function storageKey(gameId: string): string {
  return `${STORAGE_PREFIX}${gameId}`
}

function readGameData(gameId: string): StoredGameData {
  if (typeof window === 'undefined') {
    return { highScore: 0, highScoreMax: 0, attempts: [] }
  }
  try {
    const raw = localStorage.getItem(storageKey(gameId))
    if (!raw) return { highScore: 0, highScoreMax: 0, attempts: [] }
    return JSON.parse(raw) as StoredGameData
  } catch {
    return { highScore: 0, highScoreMax: 0, attempts: [] }
  }
}

function writeGameData(gameId: string, data: StoredGameData): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(storageKey(gameId), JSON.stringify(data))
  } catch {
    // localStorage might be full — fail silently
  }
}

/* ─── Public API ─────────────────────────────────────────────── */

/**
 * Convert a raw score to a GCSE 1-9 grade.
 */
export function scoreToGrade(score: number, maxScore: number): GCSEGrade {
  if (maxScore <= 0) return 1
  const pct = Math.round((score / maxScore) * 100)
  return percentageToGCSEGrade(pct)
}

/**
 * Save a game score to localStorage.
 * Updates high score if the new percentage beats the previous best.
 * Keeps only the last 50 attempts to avoid bloating storage.
 */
export function saveGameScore(
  gameId: string,
  score: number,
  maxScore: number
): GameAttempt {
  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0
  const grade = percentageToGCSEGrade(percentage)
  const attempt: GameAttempt = {
    score,
    maxScore,
    percentage,
    grade,
    timestamp: Date.now(),
  }

  const data = readGameData(gameId)

  // Update high score based on percentage (handles different maxScores)
  const currentHighPct =
    data.highScoreMax > 0
      ? (data.highScore / data.highScoreMax) * 100
      : 0
  if (percentage >= currentHighPct) {
    data.highScore = score
    data.highScoreMax = maxScore
  }

  // Append attempt, cap at 50
  data.attempts.push(attempt)
  if (data.attempts.length > 50) {
    data.attempts = data.attempts.slice(-50)
  }

  writeGameData(gameId, data)
  return attempt
}

/**
 * Retrieve the high score for a game.
 * Returns { score, maxScore, percentage, grade } or null if never played.
 */
export function getHighScore(
  gameId: string
): { score: number; maxScore: number; percentage: number; grade: GCSEGrade } | null {
  const data = readGameData(gameId)
  if (data.attempts.length === 0) return null
  const percentage =
    data.highScoreMax > 0
      ? Math.round((data.highScore / data.highScoreMax) * 100)
      : 0
  return {
    score: data.highScore,
    maxScore: data.highScoreMax,
    percentage,
    grade: percentageToGCSEGrade(percentage),
  }
}

/**
 * Return the last 10 attempts for a game, most recent first.
 */
export function getGameHistory(gameId: string): GameAttempt[] {
  const data = readGameData(gameId)
  return data.attempts.slice(-10).reverse()
}

/**
 * Return scores from the current week (Monday–Sunday), sorted by
 * percentage descending. Acts as a simple weekly leaderboard.
 */
export function getWeeklyLeaderboard(gameId: string): GameAttempt[] {
  const data = readGameData(gameId)

  // Calculate start of the current week (Monday 00:00)
  const now = new Date()
  const day = now.getDay() // 0=Sun … 6=Sat
  const mondayOffset = day === 0 ? -6 : 1 - day
  const monday = new Date(now)
  monday.setDate(now.getDate() + mondayOffset)
  monday.setHours(0, 0, 0, 0)
  const weekStart = monday.getTime()

  return data.attempts
    .filter((a) => a.timestamp >= weekStart)
    .sort((a, b) => b.percentage - a.percentage)
}

/**
 * Get the last-played timestamp for a game, or null if never played.
 */
export function getLastPlayed(gameId: string): number | null {
  const data = readGameData(gameId)
  if (data.attempts.length === 0) return null
  return data.attempts[data.attempts.length - 1].timestamp
}
