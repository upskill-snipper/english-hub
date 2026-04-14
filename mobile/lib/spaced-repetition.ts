// ---------------------------------------------------------------------------
// SM-2 lite — spaced-repetition algorithm for The English Hub
// ---------------------------------------------------------------------------

import {
  ReviewRating,
  type SRCardState,
  type SRDeck,
  type SRStore,
} from '@/data/sr-card-state';
import { getItem, setItem } from '@/lib/storage';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const MIN_EASE_FACTOR = 1.3;
const DEFAULT_EASE_FACTOR = 2.5;
const STORAGE_KEY = 'srState' as const;

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/** Return today as an ISO-8601 date string (YYYY-MM-DD). */
function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Add `days` to a Date and return an ISO-8601 date string. */
function addDays(from: Date, days: number): string {
  const d = new Date(from);
  d.setDate(d.getDate() + Math.round(days));
  return d.toISOString().slice(0, 10);
}

/** Load the full SR store from AsyncStorage. */
async function loadStore(): Promise<SRStore> {
  const stored = await getItem<SRStore>(STORAGE_KEY);
  return stored ?? { decks: {} };
}

/** Persist the full SR store to AsyncStorage. */
async function saveStore(store: SRStore): Promise<void> {
  await setItem(STORAGE_KEY, store);
}

/** Ensure a deck exists in the store and return it. */
function ensureDeck(store: SRStore, deckName: string): SRDeck {
  if (!store.decks[deckName]) {
    store.decks[deckName] = { name: deckName, cards: {} };
  }
  return store.decks[deckName];
}

/** Ensure a card exists in a deck and return its state. */
function ensureCard(deck: SRDeck, cardId: string): SRCardState {
  if (!deck.cards[cardId]) {
    deck.cards[cardId] = {
      cardId,
      easeFactor: DEFAULT_EASE_FACTOR,
      interval: 0,
      repetitions: 0,
      nextReviewDate: todayISO(),
    };
  }
  return deck.cards[cardId];
}

// ---------------------------------------------------------------------------
// Ease-factor adjustment
// ---------------------------------------------------------------------------

/**
 * Adjust the ease factor based on the review rating.
 *
 * - Again (0): −0.20
 * - Hard  (1): −0.15
 * - Good  (2): +0.00 (no change)
 * - Easy  (3): +0.15
 *
 * The result is clamped to a minimum of 1.3.
 */
function adjustEaseFactor(ef: number, rating: ReviewRating): number {
  let delta: number;
  switch (rating) {
    case ReviewRating.Again:
      delta = -0.2;
      break;
    case ReviewRating.Hard:
      delta = -0.15;
      break;
    case ReviewRating.Good:
      delta = 0;
      break;
    case ReviewRating.Easy:
      delta = 0.15;
      break;
  }
  return Math.max(MIN_EASE_FACTOR, ef + delta);
}

// ---------------------------------------------------------------------------
// Interval calculation
// ---------------------------------------------------------------------------

/**
 * Compute the new interval in days given the current card state and rating.
 *
 * - Again (0): reset to 1 day (and reset repetitions).
 * - Hard  (1): interval * 1.2  (minimum 1).
 * - Good  (2): interval * easeFactor (minimum 1).
 * - Easy  (3): interval * easeFactor * 1.3 (minimum 1).
 *
 * For the first review (repetitions === 0) the base interval is 1 day;
 * for the second review it is 6 days; thereafter it follows the formula.
 */
function computeInterval(
  card: SRCardState,
  rating: ReviewRating,
  newEF: number,
): number {
  if (rating === ReviewRating.Again) {
    return 1;
  }

  let base: number;
  if (card.repetitions === 0) {
    base = 1;
  } else if (card.repetitions === 1) {
    base = 6;
  } else {
    base = card.interval;
  }

  let interval: number;
  switch (rating) {
    case ReviewRating.Hard:
      interval = base * 1.2;
      break;
    case ReviewRating.Good:
      interval = base * newEF;
      break;
    case ReviewRating.Easy:
      interval = base * newEF * 1.3;
      break;
    default:
      interval = base;
  }

  return Math.max(1, Math.round(interval));
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Return all card IDs in `deckName` that are due for review today (i.e. their
 * `nextReviewDate` is today or in the past). Cards that have never been
 * reviewed are **not** included — call `initializeCard` first.
 */
export async function getCardsDueToday(deckName: string): Promise<string[]> {
  const store = await loadStore();
  const deck = store.decks[deckName];
  if (!deck) return [];

  const today = todayISO();
  return Object.values(deck.cards)
    .filter((c) => c.nextReviewDate <= today)
    .map((c) => c.cardId);
}

/**
 * Record a review for `cardId` in `deckName` with the given `rating`.
 *
 * Creates the deck / card state on the fly if they don't exist yet.
 * Returns the updated `SRCardState` after persisting.
 */
export async function reviewCard(
  deckName: string,
  cardId: string,
  rating: ReviewRating,
): Promise<SRCardState> {
  const store = await loadStore();
  const deck = ensureDeck(store, deckName);
  const card = ensureCard(deck, cardId);

  // 1. Adjust ease factor
  const newEF = adjustEaseFactor(card.easeFactor, rating);

  // 2. Compute new interval
  const newInterval = computeInterval(card, rating, newEF);

  // 3. Update repetitions
  const newReps =
    rating === ReviewRating.Again ? 0 : card.repetitions + 1;

  // 4. Schedule next review
  const nextReview = addDays(new Date(), newInterval);

  // 5. Commit
  card.easeFactor = newEF;
  card.interval = newInterval;
  card.repetitions = newReps;
  card.nextReviewDate = nextReview;

  await saveStore(store);
  return { ...card };
}

/**
 * Initialise a card in a deck so it becomes due immediately (today).
 * No-op if the card already exists. Returns the card state.
 */
export async function initializeCard(
  deckName: string,
  cardId: string,
): Promise<SRCardState> {
  const store = await loadStore();
  const deck = ensureDeck(store, deckName);
  const card = ensureCard(deck, cardId);
  await saveStore(store);
  return { ...card };
}

/**
 * Initialise multiple cards at once (batch version of `initializeCard`).
 */
export async function initializeCards(
  deckName: string,
  cardIds: readonly string[],
): Promise<void> {
  const store = await loadStore();
  const deck = ensureDeck(store, deckName);
  for (const id of cardIds) {
    ensureCard(deck, id);
  }
  await saveStore(store);
}

/** Stats snapshot for a single deck. */
export type DeckStats = {
  /** Total cards tracked in this deck. */
  total: number;
  /** Cards due today or overdue. */
  due: number;
  /** Cards whose next review is in the future (learned). */
  learned: number;
  /** Cards that have never been reviewed (repetitions === 0). */
  newCards: number;
  /** Average ease factor across all cards. */
  averageEaseFactor: number;
};

/**
 * Return aggregate statistics for a deck.
 * Returns zeroed stats if the deck doesn't exist.
 */
export async function getDeckStats(deckName: string): Promise<DeckStats> {
  const store = await loadStore();
  const deck = store.decks[deckName];

  if (!deck) {
    return {
      total: 0,
      due: 0,
      learned: 0,
      newCards: 0,
      averageEaseFactor: 0,
    };
  }

  const cards = Object.values(deck.cards);
  const today = todayISO();

  let due = 0;
  let learned = 0;
  let newCards = 0;
  let efSum = 0;

  for (const c of cards) {
    efSum += c.easeFactor;
    if (c.repetitions === 0) {
      newCards++;
    }
    if (c.nextReviewDate <= today) {
      due++;
    } else {
      learned++;
    }
  }

  return {
    total: cards.length,
    due,
    learned,
    newCards,
    averageEaseFactor: cards.length > 0 ? efSum / cards.length : 0,
  };
}

/**
 * Retrieve the raw `SRCardState` for a single card, or `null` if it has
 * not been initialised in the given deck.
 */
export async function getCardState(
  deckName: string,
  cardId: string,
): Promise<SRCardState | null> {
  const store = await loadStore();
  return store.decks[deckName]?.cards[cardId] ?? null;
}

/**
 * Reset a single card back to its initial state (due today, default EF).
 * Returns the reset card state, or `null` if the deck doesn't exist.
 */
export async function resetCard(
  deckName: string,
  cardId: string,
): Promise<SRCardState | null> {
  const store = await loadStore();
  const deck = store.decks[deckName];
  if (!deck) return null;

  const fresh: SRCardState = {
    cardId,
    easeFactor: DEFAULT_EASE_FACTOR,
    interval: 0,
    repetitions: 0,
    nextReviewDate: todayISO(),
  };
  deck.cards[cardId] = fresh;
  await saveStore(store);
  return { ...fresh };
}
