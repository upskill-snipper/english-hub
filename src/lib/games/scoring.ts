/**
 * Scoring rules the founder decided on 23 October 2026.
 *
 * Each of these changes what a skills game counts as right, or how it counts
 * it, so each was held back for his decision when the games were checked on
 * 16 October (the banks' docblocks record what was found) and applied together
 * when he gave it ("fix all of the above as per recommendations"). They live
 * here, out of the pages, so that a test can hold them without a DOM
 * (src/__tests__/game-scoring-follows-the-founders-decisions.test.ts).
 */

/**
 * Theme Matcher. A round is worth one point for each text in the grid that has
 * the theme. Each of those the student selected scores a point, and each text
 * selected that does not have the theme takes one away, never below nought.
 *
 * WHAT IT REPLACED. A point for every text correctly placed, selected or not,
 * out of every text in the grid. In a grid of twelve with three right texts,
 * one lone right guess scored 10 of 12, and a student who selected nothing
 * would have scored 9 of 12: leaving texts unselected was rewarded, and random
 * play averaged about 70 per cent.
 */
export function themeRoundScore(
  selected: ReadonlySet<string>,
  correctTexts: readonly string[],
): { points: number; outOf: number } {
  const correct = new Set(correctTexts)
  let hits = 0
  let misses = 0
  for (const text of selected) {
    if (correct.has(text)) hits++
    else misses++
  }
  return { points: Math.max(0, hits - misses), outOf: correct.size }
}

/**
 * Spelling Bee. A typed spelling is right if it is the word, or one of the
 * spellings listed as also accepted (enjambement for enjambment, dénouement
 * for denouement). Case does not matter; letters with accents are compared in
 * one Unicode form, so a keyboard that composes é from two keystrokes is not
 * marked wrong for it.
 */
export function isAcceptedSpelling(
  typed: string,
  word: { word: string; alsoAccepted?: readonly string[] },
): boolean {
  const normal = (s: string) => s.trim().toLowerCase().normalize('NFC')
  const attempt = normal(typed)
  if (attempt === '') return false
  return (
    attempt === normal(word.word) || (word.alsoAccepted ?? []).some((a) => normal(a) === attempt)
  )
}

/**
 * Sentence Builder. A build is right if it is the sentence shown, or one of
 * the other orders of the same tiles the bank lists as also correct English.
 */
export function isAcceptedOrder(
  attempt: string,
  item: { correct: string; alsoCorrect?: readonly string[] },
): boolean {
  return attempt === item.correct || (item.alsoCorrect ?? []).includes(attempt)
}
