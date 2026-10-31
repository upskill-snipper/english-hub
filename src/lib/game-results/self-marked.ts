/**
 * Games whose answers the student marks themselves (24 October 2026).
 *
 * Everyday Vocabulary Flashcards asks the student to tap "I knew it" or not,
 * and nothing checks the tap. Such an answer is a self-check, not a right
 * answer, so it earns no XP and no achievement (src/lib/games/progression.ts).
 * Whether it also stays out of the skills summary and class results is
 * document 31's third question, put to the founder on 24 October 2026.
 *
 * One list, so everything that must treat a self-check differently reads the
 * same one.
 */
export const SELF_MARKED_GAMES: ReadonlySet<string> = new Set(['everyday-vocab-flashcards'])

/** Is a round of this activity marked by the student themselves? */
export function isSelfMarked(source: string, activity: string): boolean {
  return source === 'skills' && SELF_MARKED_GAMES.has(activity)
}
