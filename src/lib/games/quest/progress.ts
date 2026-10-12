/**
 * A student's quest progress, in this browser only: stars per level, the
 * panels they have inked, spaced review of what they missed, XP and the
 * achievements they have earned.
 *
 * WHY THE DEVICE AND NOT THE ACCOUNT. Saving game progress to the account
 * keeps a record about a student, most of whom are children; document 16
 * (Games: the plan, and the decisions that are yours, 10 October 2026) put
 * that to the founder as decision A, and it is not yet decided. Until it is,
 * nothing here leaves the browser. The shape is kept small and versioned so
 * that, once approved, it can be sent to the account as it is.
 *
 * WHAT IT DOES NOT HOLD, by design (src/lib/privacy/child-defaults.ts): no
 * streak, no "days since you played", nothing that rewards coming back on a
 * schedule. Review is offered, never nagged about.
 *
 * The pure functions take and return plain objects; read and write are the
 * only parts that touch storage, and both survive a browser that refuses it
 * (a private window), in which case progress lasts for the page.
 */

import type { Level, Quest } from './types'

export const STORE_VERSION = 1
const QUEST_KEY = (slug: string) => `teh-quest:v${STORE_VERSION}:${slug}`
const PLAYER_KEY = `teh-quest:v${STORE_VERSION}:player`

export interface LevelRecord {
  /** The best stars earned, 1 to 3. */
  stars: number
  /** The best share of answers right first time, 0 to 1. */
  best: number
  plays: number
}

/** One challenge's place in the spaced-review schedule (a Leitner box). */
export interface ItemRecord {
  /** 1 to 5: the box it sits in. A wrong answer sends it back to 1. */
  box: number
  /** When it is next due for review, as epoch milliseconds. */
  due: number
  /** The last answer was wrong. */
  missed: boolean
}

export interface QuestProgress {
  v: number
  levels: Record<string, LevelRecord>
  items: Record<string, ItemRecord>
  /** Moment titles whose panels are inked into the student's comic. */
  inked: string[]
  /** How many review sessions have been started, for a fresh deal each time. */
  reviews: number
}

export interface PlayerProgress {
  v: number
  xp: number
  /** Achievement id to when it was earned (epoch ms). */
  achievements: Record<string, number>
  /** Quotations rebuilt right, across every text. */
  rebuilt: number
  /** The texts a level has been finished in. */
  texts: string[]
}

export const emptyQuest = (): QuestProgress => ({
  v: STORE_VERSION,
  levels: {},
  items: {},
  inked: [],
  reviews: 0,
})
export const emptyPlayer = (): PlayerProgress => ({
  v: STORE_VERSION,
  xp: 0,
  achievements: {},
  rebuilt: 0,
  texts: [],
})

// ── Scoring ──────────────────────────────────────────────────────────────────

/** XP for a right answer, and the extra for each answer in a run of three or more. */
export const XP_RIGHT = 10
export const XP_COMBO = 5
/** Extra for a level with every answer right first time. */
export const XP_PERFECT = 25

export function starsFor(right: number, total: number): number {
  const share = total > 0 ? right / total : 0
  if (share >= 0.9) return 3
  if (share >= 0.7) return 2
  return 1
}

/** XP for one answer, given how many answers in a row were right before it. */
export function xpForAnswer(correct: boolean, runBefore: number): number {
  if (!correct) return 0
  return XP_RIGHT + (runBefore >= 2 ? XP_COMBO : 0)
}

/** The player's level from their XP: each level needs 100 XP more than the last. */
export function playerLevel(xp: number): { level: number; into: number; needed: number } {
  let level = 1
  let floor = 0
  let step = 100
  while (xp >= floor + step) {
    floor += step
    level += 1
    step += 100
  }
  return { level, into: xp - floor, needed: step }
}

// ── Spaced review ────────────────────────────────────────────────────────────

const DAY = 24 * 60 * 60 * 1000
/** How long after a right answer an item in each box is due again. */
const INTERVALS = [0, 1 * DAY, 3 * DAY, 7 * DAY, 14 * DAY, 30 * DAY]

export function recordAnswer(
  p: QuestProgress,
  id: string,
  correct: boolean,
  now: number,
): QuestProgress {
  const was = p.items[id]
  const box = correct ? Math.min(5, (was?.box ?? 0) + 1) : 1
  const next: ItemRecord = {
    box,
    // A miss is due at once; a right answer waits for its box.
    due: correct ? now + INTERVALS[box] : now,
    missed: !correct,
  }
  return { ...p, items: { ...p.items, [id]: next } }
}

/** What Review should ask, most urgent first: the latest misses, then the longest overdue. */
export function dueForReview(p: QuestProgress, now: number, known: Set<string>): string[] {
  return Object.entries(p.items)
    .filter(([id, r]) => known.has(id) && r.due <= now)
    .sort(([, a], [, b]) => Number(b.missed) - Number(a.missed) || a.due - b.due)
    .map(([id]) => id)
}

// ── Levels ───────────────────────────────────────────────────────────────────

export interface LevelOutcome {
  level: Level
  right: number
  total: number
  xp: number
}

export interface Finish {
  quest: QuestProgress
  player: PlayerProgress
  stars: number
  /** Panels inked by this finish, for the reveal. */
  newlyInked: string[]
  /** Achievements earned by this finish. */
  earned: AchievementId[]
}

export function finishLevel(
  quest: Quest,
  qp: QuestProgress,
  player: PlayerProgress,
  outcome: LevelOutcome,
  now: number,
  extra: { rebuilt: number } = { rebuilt: 0 },
): Finish {
  const stars = starsFor(outcome.right, outcome.total)
  const share = outcome.total > 0 ? outcome.right / outcome.total : 0
  const was = qp.levels[outcome.level.id]
  const record: LevelRecord = {
    stars: Math.max(was?.stars ?? 0, stars),
    best: Math.max(was?.best ?? 0, share),
    plays: (was?.plays ?? 0) + 1,
  }
  const inked = new Set(qp.inked)
  const newlyInked = outcome.level.panels.filter((t) => !inked.has(t))
  newlyInked.forEach((t) => inked.add(t))
  const perfect = outcome.total > 0 && outcome.right === outcome.total
  const xp = outcome.xp + (perfect ? XP_PERFECT : 0)
  const nextQuest: QuestProgress = {
    ...qp,
    levels: { ...qp.levels, [outcome.level.id]: record },
    inked: quest.moments.filter((m) => inked.has(m.title)).map((m) => m.title),
  }
  const texts = player.texts.includes(quest.slug) ? player.texts : [...player.texts, quest.slug]
  const nextPlayer: PlayerProgress = {
    ...player,
    xp: player.xp + xp,
    rebuilt: player.rebuilt + extra.rebuilt,
    texts,
  }
  const earned = newAchievements(quest, nextQuest, nextPlayer, {
    stars,
    perfect,
    level: outcome.level,
  })
  for (const a of earned) nextPlayer.achievements = { ...nextPlayer.achievements, [a]: now }
  return { quest: nextQuest, player: nextPlayer, stars, newlyInked, earned }
}

/** The finale opens once every chapter has a star. */
export function finaleOpen(quest: Quest, qp: QuestProgress): boolean {
  return quest.levels
    .filter((l) => l.kind === 'chapter')
    .every((l) => (qp.levels[l.id]?.stars ?? 0) >= 1)
}

/** Stars earned of the stars available, across the quest. */
export function questStars(quest: Quest, qp: QuestProgress): { earned: number; max: number } {
  return {
    earned: quest.levels.reduce((n, l) => n + (qp.levels[l.id]?.stars ?? 0), 0),
    max: quest.levels.length * 3,
  }
}

/** The level to play next: the first not yet started, else the first short of three stars. */
export function nextLevel(quest: Quest, qp: QuestProgress): Level | null {
  const open = quest.levels.filter((l) => l.kind !== 'finale' || finaleOpen(quest, qp))
  return (
    open.find((l) => !qp.levels[l.id]) ??
    open.find((l) => (qp.levels[l.id]?.stars ?? 0) < 3) ??
    null
  )
}

// ── Achievements ─────────────────────────────────────────────────────────────

/** Every achievement, in the order the cabinet shows them. Their words are in the dictionary. */
export const ACHIEVEMENTS = [
  'first-level',
  'three-stars',
  'perfect',
  'chapter-inked',
  'comic-complete',
  'full-cast',
  'whole-story',
  'quote-smith',
  'three-texts',
  'review',
] as const
export type AchievementId = (typeof ACHIEVEMENTS)[number]

/** Rebuilt quotations for 'quote-smith'. */
export const QUOTE_SMITH = 10

function newAchievements(
  quest: Quest,
  qp: QuestProgress,
  player: PlayerProgress,
  last: { stars: number; perfect: boolean; level: Level },
): AchievementId[] {
  const has = (a: AchievementId) => player.achievements[a] !== undefined
  const out: AchievementId[] = []
  const add = (a: AchievementId, when: boolean) => {
    if (when && !has(a)) out.push(a)
  }
  const panels = quest.moments.filter((m) => m.panel).map((m) => m.title)
  add('first-level', true)
  add('three-stars', last.stars === 3)
  add('perfect', last.perfect)
  add('chapter-inked', last.level.kind === 'chapter' && last.level.panels.length > 0)
  add('comic-complete', panels.length > 0 && panels.every((t) => qp.inked.includes(t)))
  add('full-cast', last.level.kind === 'cast' && last.stars === 3)
  add('whole-story', last.level.kind === 'finale')
  add('quote-smith', player.rebuilt >= QUOTE_SMITH)
  add('three-texts', player.texts.length >= 3)
  return out
}

/** Earn the review achievement after a review session. */
export function finishReview(
  player: PlayerProgress,
  xp: number,
  now: number,
): { player: PlayerProgress; earned: AchievementId[] } {
  const earned: AchievementId[] = player.achievements.review === undefined ? ['review'] : []
  return {
    player: {
      ...player,
      xp: player.xp + xp,
      achievements: earned.length ? { ...player.achievements, review: now } : player.achievements,
    },
    earned,
  }
}

// ── Storage ──────────────────────────────────────────────────────────────────

/**
 * Progress the browser refused to store (a private window, full storage),
 * kept for the page instead. A key is here only while its last write was
 * refused, so a browser that stores normally is always read from storage:
 * an earlier version also read this copy whenever storage held nothing,
 * which brought back progress the student had since cleared.
 */
const memory = new Map<string, string>()

function readRaw(key: string): string | null {
  const kept = memory.get(key)
  if (kept !== undefined) return kept
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeRaw(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value)
    memory.delete(key)
  } catch {
    memory.set(key, value)
  }
}

function parse<T extends { v: number }>(raw: string | null, empty: () => T): T {
  if (!raw) return empty()
  try {
    const v = JSON.parse(raw) as T
    return v && v.v === STORE_VERSION ? { ...empty(), ...v } : empty()
  } catch {
    return empty()
  }
}

export function readQuestProgress(slug: string): QuestProgress {
  return parse(readRaw(QUEST_KEY(slug)), emptyQuest)
}
export function writeQuestProgress(slug: string, p: QuestProgress) {
  writeRaw(QUEST_KEY(slug), JSON.stringify(p))
}
export function readPlayer(): PlayerProgress {
  return parse(readRaw(PLAYER_KEY), emptyPlayer)
}
export function writePlayer(p: PlayerProgress) {
  writeRaw(PLAYER_KEY, JSON.stringify(p))
}
