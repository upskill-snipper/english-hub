/**
 * Flashcard types.
 *
 * These live in their own tiny module (rather than in flashcard-data.ts, where
 * they used to sit next to ~600 KB of inline deck data) so that a file which
 * only needs the shape of a card does not drag the whole card corpus into its
 * module graph.
 */

export interface FlashCard {
  id: string
  front: string
  back: string
  /**
   * Optional Khaleeji-Arabic (gulf-dialect) translation of the definition/back side.
   * When absent, UI should gracefully fall back to the English `back` field.
   * `term` (`front`) is kept in English by design - only the explanation is translated.
   */
  backAr?: string
  /**
   * Optional Khaleeji-Arabic transliteration / equivalent for the front.
   * For literary technique decks this is typically the Latin/transliterated form
   * (e.g. "metaphor" → "ميتافور").
   */
  frontAr?: string
}

export interface FlashcardDeck {
  id: string
  title: string
  description: string
  category: string
  board: string
  cards: FlashCard[]
}

/**
 * The lightweight record the browse UI needs before a student picks a deck.
 *
 * Everything here is cheap: the labels shown on a deck card plus the card *ids*,
 * which is all the spaced-repetition helpers need in order to work out mastery,
 * due counts and difficult counts against the local review store. The card text
 * itself is only fetched when a deck is opened (see deck-loaders.ts).
 */
export interface FlashcardDeckSummary {
  id: string
  title: string
  description: string
  category: string
  board: string
  cardCount: number
  cardIds: string[]
}

/** Minimal shape accepted by the spaced-repetition helpers. */
export interface FlashcardIdRef {
  id: string
}
