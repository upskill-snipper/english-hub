import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import {
  type CardReviewState,
  type Quality,
  calculateNextReview,
  createInitialReviewState,
} from '@/lib/spaced-repetition'

// ─── Types ──────────────────────────────────────────────────────────────────

interface DailyStats {
  date: string // YYYY-MM-DD
  cardsReviewed: number
  correctCount: number
}

interface FlashcardState {
  // SM-2 review states keyed by cardId
  reviewStates: Record<string, CardReviewState>

  // Daily tracking
  dailyStats: DailyStats
  streak: number
  lastStudyDate: string // YYYY-MM-DD

  // Lifetime stats
  totalReviews: number
  totalCorrect: number

  // Hydration flag
  _hasHydrated: boolean
  setHasHydrated: (v: boolean) => void

  // Actions
  reviewCard: (cardId: string, quality: Quality) => void
  getReviewState: (cardId: string) => CardReviewState | undefined
  resetCard: (cardId: string) => void
  resetDeck: (cardIds: string[]) => void
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function getTodayString(): string {
  return new Date().toISOString().slice(0, 10)
}

/**
 * Migrate old know/review/unseen localStorage data to SM-2 review states.
 * The old format stored: { deckId, cardStatus: { [cardId]: 'know'|'review'|'unseen' }, ... }
 */
function migrateOldProgress(): Record<string, CardReviewState> {
  const migrated: Record<string, CardReviewState> = {}

  try {
    const raw = localStorage.getItem('english-hub-revision-progress')
    if (!raw) return migrated

    const data = JSON.parse(raw)
    if (!data?.cardStatus || typeof data.cardStatus !== 'object') return migrated

    const now = new Date()
    for (const [cardId, status] of Object.entries(data.cardStatus)) {
      if (status === 'know') {
        // Card was known — give it a good starting state
        migrated[cardId] = {
          cardId,
          easinessFactor: 2.5,
          interval: 3,
          repetitions: 2,
          nextReviewDate: new Date(now.getTime() + 3 * 86400000).toISOString(),
          lastReviewDate: now.toISOString(),
        }
      } else if (status === 'review') {
        // Card needed review — set as due now with low state
        migrated[cardId] = {
          cardId,
          easinessFactor: 2.0,
          interval: 1,
          repetitions: 0,
          nextReviewDate: now.toISOString(),
          lastReviewDate: now.toISOString(),
        }
      }
      // 'unseen' cards are simply not added — they remain new
    }
  } catch { /* ignore corrupt data */ }

  return migrated
}

// ─── Store ──────────────────────────────────────────────────────────────────

export const useFlashcardStore = create<FlashcardState>()(
  persist(
    (set, get) => ({
      reviewStates: {},
      dailyStats: { date: getTodayString(), cardsReviewed: 0, correctCount: 0 },
      streak: 0,
      lastStudyDate: '',
      totalReviews: 0,
      totalCorrect: 0,
      _hasHydrated: false,

      setHasHydrated: (v) => set({ _hasHydrated: v }),

      reviewCard: (cardId: string, quality: Quality) => {
        const state = get()
        const today = getTodayString()
        const isCorrect = quality >= 3

        // Get or create review state for this card
        const current = state.reviewStates[cardId] ?? createInitialReviewState(cardId)
        const updated = calculateNextReview(current, quality)

        // Update daily stats (reset if new day)
        let dailyStats = state.dailyStats
        if (dailyStats.date !== today) {
          dailyStats = { date: today, cardsReviewed: 0, correctCount: 0 }
        }

        // Update streak
        let streak = state.streak
        const lastDate = state.lastStudyDate
        if (lastDate !== today) {
          const yesterday = new Date()
          yesterday.setDate(yesterday.getDate() - 1)
          const yesterdayStr = yesterday.toISOString().slice(0, 10)

          if (lastDate === yesterdayStr) {
            streak += 1
          } else if (lastDate !== today) {
            streak = 1 // reset streak (gap of more than 1 day)
          }
        }

        set({
          reviewStates: {
            ...state.reviewStates,
            [cardId]: updated,
          },
          dailyStats: {
            date: today,
            cardsReviewed: dailyStats.cardsReviewed + 1,
            correctCount: dailyStats.correctCount + (isCorrect ? 1 : 0),
          },
          streak,
          lastStudyDate: today,
          totalReviews: state.totalReviews + 1,
          totalCorrect: state.totalCorrect + (isCorrect ? 1 : 0),
        })
      },

      getReviewState: (cardId: string) => {
        return get().reviewStates[cardId]
      },

      resetCard: (cardId: string) => {
        const { reviewStates, ...rest } = get()
        const { [cardId]: _, ...remaining } = reviewStates
        set({ reviewStates: remaining })
      },

      resetDeck: (cardIds: string[]) => {
        const idSet = new Set(cardIds)
        const current = get().reviewStates
        const filtered: Record<string, CardReviewState> = {}
        for (const [id, state] of Object.entries(current)) {
          if (!idSet.has(id)) filtered[id] = state
        }
        set({ reviewStates: filtered })
      },
    }),
    {
      name: 'english-hub-srs',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHasHydrated(true)

          // Run migration from old format if we have no review states yet
          if (Object.keys(state.reviewStates).length === 0) {
            const migrated = migrateOldProgress()
            if (Object.keys(migrated).length > 0) {
              // Use the store's set via the returned state
              useFlashcardStore.setState({ reviewStates: migrated })
            }
          }
        }
      },
    }
  )
)

// ─── Derived selectors ──────────────────────────────────────────────────────

export function selectAccuracyRate(state: FlashcardState): number {
  if (state.totalReviews === 0) return 0
  return Math.round((state.totalCorrect / state.totalReviews) * 100)
}

export function selectTodayAccuracy(state: FlashcardState): number {
  const { dailyStats } = state
  const today = getTodayString()
  if (dailyStats.date !== today || dailyStats.cardsReviewed === 0) return 0
  return Math.round((dailyStats.correctCount / dailyStats.cardsReviewed) * 100)
}

export function selectTodayReviewed(state: FlashcardState): number {
  const today = getTodayString()
  if (state.dailyStats.date !== today) return 0
  return state.dailyStats.cardsReviewed
}
