import type { GameExplanations } from './types'

/**
 * Each game's explanations, loaded only when that game is played, so a page
 * carries its own explanations and nobody else's. One line per game; the
 * files are in src/data/games/explanations/.
 */
const LOADERS: Record<string, () => Promise<{ EXPLANATIONS: GameExplanations }>> = {
  'apostrophe-ace': () => import('@/data/games/explanations/apostrophe-ace'),
  'article-a-an-the': () => import('@/data/games/explanations/article-a-an-the'),
  'capital-letter-quest': () => import('@/data/games/explanations/capital-letter-quest'),
  'classroom-objects': () => import('@/data/games/explanations/classroom-objects'),
  'collocations-challenge': () => import('@/data/games/explanations/collocations-challenge'),
  'common-error-fixer': () => import('@/data/games/explanations/common-error-fixer'),
  'comparatives-superlatives': () => import('@/data/games/explanations/comparatives-superlatives'),
  'comprehension-challenge': () => import('@/data/games/explanations/comprehension-challenge'),
  'days-months-seasons': () => import('@/data/games/explanations/days-months-seasons'),
  'dictionary-skills': () => import('@/data/games/explanations/dictionary-skills'),
  'everyday-vocab-flashcards': () => import('@/data/games/explanations/everyday-vocab-flashcards'),
  'figurative-language-finder': () =>
    import('@/data/games/explanations/figurative-language-finder'),
  'grade-climber': () => import('@/data/games/explanations/grade-climber'),
  'greetings-dialogue': () => import('@/data/games/explanations/greetings-dialogue'),
  'homophone-hero': () => import('@/data/games/explanations/homophone-hero'),
  'numbers-and-time': () => import('@/data/games/explanations/numbers-and-time'),
  'paragraph-jumble': () => import('@/data/games/explanations/paragraph-jumble'),
  'phrasal-verbs-match': () => import('@/data/games/explanations/phrasal-verbs-match'),
  'picture-word-match': () => import('@/data/games/explanations/picture-word-match'),
  'plural-builder': () => import('@/data/games/explanations/plural-builder'),
  'prefix-suffix-lab': () => import('@/data/games/explanations/prefix-suffix-lab'),
  'prepositions-of-place': () => import('@/data/games/explanations/prepositions-of-place'),
  'punctuation-repair': () => import('@/data/games/explanations/punctuation-repair'),
  'question-formation': () => import('@/data/games/explanations/question-formation'),
  'quote-detective': () => import('@/data/games/explanations/quote-detective'),
  'reading-detective': () => import('@/data/games/explanations/reading-detective'),
  'sentence-builder': () => import('@/data/games/explanations/sentence-builder'),
  'speed-analysis': () => import('@/data/games/explanations/speed-analysis'),
  'spelling-bee': () => import('@/data/games/explanations/spelling-bee'),
  'spelling-patterns': () => import('@/data/games/explanations/spelling-patterns'),
  'synonym-shuffle': () => import('@/data/games/explanations/synonym-shuffle'),
  'tense-timeline': () => import('@/data/games/explanations/tense-timeline'),
  'theme-matcher': () => import('@/data/games/explanations/theme-matcher'),
  'to-be-conjugation': () => import('@/data/games/explanations/to-be-conjugation'),
  'tricky-word-spelling': () => import('@/data/games/explanations/tricky-word-spelling'),
  'vocabulary-builder': () => import('@/data/games/explanations/vocabulary-builder'),
  'word-class-sorter': () => import('@/data/games/explanations/word-class-sorter'),
}

/** Every game that has an explanations file, for the tests. */
export const EXPLAINED_GAMES: readonly string[] = Object.keys(LOADERS)

const cache = new Map<string, Promise<GameExplanations | null>>()

/** A game's explanations, or null when it has none or they fail to load. Never throws. */
export function loadExplanations(slug: string): Promise<GameExplanations | null> {
  let hit = cache.get(slug)
  if (!hit) {
    const load = LOADERS[slug]
    hit = load
      ? load()
          .then((m) => m.EXPLANATIONS)
          .catch(() => null)
      : Promise.resolve(null)
    cache.set(slug, hit)
  }
  return hit
}
