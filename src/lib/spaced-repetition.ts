/**
 * SM-2 Spaced Repetition Algorithm
 *
 * Based on the SuperMemo SM-2 algorithm by Piotr Wozniak.
 * Quality ratings: 0=total blackout, 1=wrong, 2=hard, 3=correct with difficulty, 4=correct, 5=easy
 */

// ─── Types ──────────────────────────────────────────────────────────────────

export interface CardReviewState {
  cardId: string
  easinessFactor: number   // EF >= 1.3, default 2.5
  interval: number         // days until next review
  repetitions: number      // consecutive correct answers
  nextReviewDate: string   // ISO date string
  lastReviewDate: string   // ISO date string
}

export type Quality = 0 | 1 | 2 | 3 | 4 | 5

export const QUALITY_LABELS: Record<Quality, string> = {
  0: 'Blackout',
  1: 'Wrong',
  2: 'Hard',
  3: 'Difficult',
  4: 'Good',
  5: 'Easy',
}

/** The four buttons shown in the UI, mapped to quality values */
export const QUALITY_BUTTONS = [
  { quality: 1 as Quality, label: 'Again', shortLabel: 'Again', color: 'destructive' as const, description: 'Complete failure' },
  { quality: 2 as Quality, label: 'Hard', shortLabel: 'Hard', color: 'warning' as const, description: 'Significant difficulty' },
  { quality: 4 as Quality, label: 'Good', shortLabel: 'Good', color: 'success' as const, description: 'Correct with effort' },
  { quality: 5 as Quality, label: 'Easy', shortLabel: 'Easy', color: 'easy' as const, description: 'Perfect response' },
] as const

// ─── SM-2 Core Algorithm ────────────────────────────────────────────────────

export function createInitialReviewState(cardId: string): CardReviewState {
  return {
    cardId,
    easinessFactor: 2.5,
    interval: 0,
    repetitions: 0,
    nextReviewDate: new Date().toISOString(),
    lastReviewDate: new Date().toISOString(),
  }
}

/**
 * Calculate the next review state based on SM-2 algorithm.
 *
 * @param current - The current review state for the card
 * @param quality - Quality of response (0-5)
 * @returns Updated review state
 */
export function calculateNextReview(current: CardReviewState, quality: Quality): CardReviewState {
  const now = new Date()

  // Calculate new easiness factor
  // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  let newEF = current.easinessFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  // EF must not drop below 1.3
  newEF = Math.max(1.3, newEF)

  let newInterval: number
  let newRepetitions: number

  if (quality < 3) {
    // Failed — reset repetitions, review again soon
    newRepetitions = 0
    newInterval = 1 // review again tomorrow (or in 10 min for same-session, but we use days)
  } else {
    // Successful recall
    newRepetitions = current.repetitions + 1

    if (newRepetitions === 1) {
      newInterval = 1
    } else if (newRepetitions === 2) {
      newInterval = 6
    } else {
      newInterval = Math.round(current.interval * newEF)
    }
  }

  // Calculate next review date
  const nextDate = new Date(now)
  nextDate.setDate(nextDate.getDate() + newInterval)

  return {
    cardId: current.cardId,
    easinessFactor: Math.round(newEF * 100) / 100, // round to 2 decimal places
    interval: newInterval,
    repetitions: newRepetitions,
    nextReviewDate: nextDate.toISOString(),
    lastReviewDate: now.toISOString(),
  }
}

// ─── Card Selection & Sorting ───────────────────────────────────────────────

interface CardWithId {
  id: string
}

/**
 * Get all cards that are due for review (nextReviewDate <= now).
 * Sorted by priority: most overdue first.
 */
export function getDueCards<T extends CardWithId>(
  allCards: T[],
  reviewStates: Record<string, CardReviewState>
): T[] {
  const now = new Date()

  return allCards
    .filter((card) => {
      const state = reviewStates[card.id]
      if (!state) return false // unseen cards are not "due" — they are new
      return new Date(state.nextReviewDate) <= now
    })
    .sort((a, b) => {
      const stateA = reviewStates[a.id]
      const stateB = reviewStates[b.id]
      // Sort by most overdue first
      return new Date(stateA.nextReviewDate).getTime() - new Date(stateB.nextReviewDate).getTime()
    })
}

/**
 * Get cards that have never been reviewed.
 */
export function getNewCards<T extends CardWithId>(
  allCards: T[],
  reviewStates: Record<string, CardReviewState>,
  limit: number = 10
): T[] {
  return allCards
    .filter((card) => !reviewStates[card.id])
    .slice(0, limit)
}

/**
 * Get a study queue: due cards first, then new cards up to the limit.
 */
export function getStudyQueue<T extends CardWithId>(
  allCards: T[],
  reviewStates: Record<string, CardReviewState>,
  newCardsLimit: number = 10
): T[] {
  const due = getDueCards(allCards, reviewStates)
  const fresh = getNewCards(allCards, reviewStates, newCardsLimit)
  return [...due, ...fresh]
}

/**
 * Sort cards by priority for study: overdue first, then by lowest easiness factor.
 */
export function sortByPriority<T extends CardWithId>(
  cards: T[],
  reviewStates: Record<string, CardReviewState>
): T[] {
  const now = new Date().getTime()

  return [...cards].sort((a, b) => {
    const stateA = reviewStates[a.id]
    const stateB = reviewStates[b.id]

    // New cards go after due cards
    if (!stateA && !stateB) return 0
    if (!stateA) return 1
    if (!stateB) return -1

    const overdueA = now - new Date(stateA.nextReviewDate).getTime()
    const overdueB = now - new Date(stateB.nextReviewDate).getTime()

    // Both overdue: most overdue first
    if (overdueA > 0 && overdueB > 0) return overdueB - overdueA
    // Only one overdue: overdue first
    if (overdueA > 0) return -1
    if (overdueB > 0) return 1
    // Neither overdue: lowest EF first (hardest cards)
    return stateA.easinessFactor - stateB.easinessFactor
  })
}

// ─── Stats Helpers ──────────────────────────────────────────────────────────

export function countDueToday<T extends CardWithId>(
  allCards: T[],
  reviewStates: Record<string, CardReviewState>
): number {
  return getDueCards(allCards, reviewStates).length
}

export function countDueThisWeek<T extends CardWithId>(
  allCards: T[],
  reviewStates: Record<string, CardReviewState>
): number {
  const weekFromNow = new Date()
  weekFromNow.setDate(weekFromNow.getDate() + 7)

  return allCards.filter((card) => {
    const state = reviewStates[card.id]
    if (!state) return false
    return new Date(state.nextReviewDate) <= weekFromNow
  }).length
}

/**
 * Calculate mastery percentage for a set of cards.
 * A card is "mastered" if interval >= 21 days (3+ successful reviews with good EF).
 */
export function getMasteryPercentage<T extends CardWithId>(
  allCards: T[],
  reviewStates: Record<string, CardReviewState>
): number {
  if (allCards.length === 0) return 0
  const mastered = allCards.filter((card) => {
    const state = reviewStates[card.id]
    return state && state.interval >= 21
  }).length
  return Math.round((mastered / allCards.length) * 100)
}

/**
 * Get a human-readable string for the next review interval.
 */
export function formatNextReview(state: CardReviewState | undefined): string {
  if (!state) return 'New'

  const now = new Date()
  const next = new Date(state.nextReviewDate)
  const diffMs = next.getTime() - now.getTime()
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays <= 0) return 'Due now'
  if (diffDays === 1) return 'Tomorrow'
  if (diffDays < 7) return `${diffDays} days`
  if (diffDays < 30) return `${Math.round(diffDays / 7)} weeks`
  return `${Math.round(diffDays / 30)} months`
}

/**
 * Preview what the next interval would be for each quality rating.
 */
export function previewIntervals(current: CardReviewState | undefined): Record<Quality, number> {
  const state = current ?? createInitialReviewState('preview')
  return {
    0: calculateNextReview(state, 0).interval,
    1: calculateNextReview(state, 1).interval,
    2: calculateNextReview(state, 2).interval,
    3: calculateNextReview(state, 3).interval,
    4: calculateNextReview(state, 4).interval,
    5: calculateNextReview(state, 5).interval,
  }
}

/**
 * Format an interval in days as a human-readable string.
 */
export function formatInterval(days: number): string {
  if (days <= 0) return '<1d'
  if (days === 1) return '1d'
  if (days < 7) return `${days}d`
  if (days < 30) return `${Math.round(days / 7)}w`
  return `${Math.round(days / 30)}mo`
}
