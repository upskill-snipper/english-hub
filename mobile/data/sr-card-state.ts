// ---------------------------------------------------------------------------
// Spaced-repetition types (SM-2 lite)
// ---------------------------------------------------------------------------

/** User rating after reviewing a card. */
export enum ReviewRating {
  Again = 0,
  Hard = 1,
  Good = 2,
  Easy = 3,
}

/** Per-card spaced-repetition state persisted to AsyncStorage. */
export type SRCardState = {
  /** Unique card identifier (matches Flashcard.id). */
  cardId: string;
  /** Multiplier controlling interval growth (minimum 1.3). */
  easeFactor: number;
  /** Current interval in days until next review. */
  interval: number;
  /** Number of consecutive successful reviews (rating >= Hard). */
  repetitions: number;
  /** ISO-8601 date string for the next scheduled review. */
  nextReviewDate: string;
};

/** A deck is a keyed collection of card states. */
export type SRDeck = {
  /** Human-readable deck name. */
  name: string;
  /** Map of cardId -> SRCardState. */
  cards: Record<string, SRCardState>;
};

/** Top-level shape stored under the 'srState' AsyncStorage key. */
export type SRStore = {
  /** Map of deck name -> SRDeck. */
  decks: Record<string, SRDeck>;
};
