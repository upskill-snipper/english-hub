import type { FlashcardDeck } from './types'

/**
 * On-demand loaders for flashcard deck content.
 *
 * PERF: keeping the card text out of the flashcards route's First Load JS is the
 * whole point of this module. Each entry is a separate dynamic import, so a
 * student who opens one deck downloads that deck and nothing else. The five
 * shard files (poetry, set texts, vocabulary, exam technique, Khaleeji) still
 * hold several decks each, so opening one of those decks fetches its shard.
 *
 * GENERATED alongside ./deck-index.ts.
 */
const DECK_LOADERS: Record<string, () => Promise<FlashcardDeck | undefined>> = {
  'literary-techniques': () => import('./decks/literary-techniques').then((m) => m.default),
  'grammar-terms': () => import('./decks/grammar-terms').then((m) => m.default),
  'advanced-writing-techniques': () =>
    import('./decks/advanced-writing-techniques').then((m) => m.default),
  'christmas-carol-quotes': () => import('./decks/christmas-carol-quotes').then((m) => m.default),
  'jekyll-hyde-quotes': () => import('./decks/jekyll-hyde-quotes').then((m) => m.default),
  'inspector-calls-quotes': () => import('./decks/inspector-calls-quotes').then((m) => m.default),
  'edexcel-relationships-poetry': () =>
    import('./decks/edexcel-relationships-poetry').then((m) => m.default),
  'edexcel-conflict-poetry': () => import('./decks/edexcel-conflict-poetry').then((m) => m.default),
  'edexcel-igcse-poetry': () => import('./decks/edexcel-igcse-poetry').then((m) => m.default),
  'edexcel-paper1-key-terms': () =>
    import('./decks/edexcel-paper1-key-terms').then((m) => m.default),
  'edexcel-paper2-key-terms': () =>
    import('./decks/edexcel-paper2-key-terms').then((m) => m.default),
  'edexcel-1en2-paper-1-key-terms': () =>
    import('./decks/edexcel-1en2-paper-1-key-terms').then((m) => m.default),
  'edexcel-1en2-paper-2-key-terms': () =>
    import('./decks/edexcel-1en2-paper-2-key-terms').then((m) => m.default),
  'edexcel-1en2-assessment-objectives': () =>
    import('./decks/edexcel-1en2-assessment-objectives').then((m) => m.default),
  'edexcel-1en2-mark-scheme-vocabulary': () =>
    import('./decks/edexcel-1en2-mark-scheme-vocabulary').then((m) => m.default),
  'edexcel-1en2-exam-technique': () =>
    import('./decks/edexcel-1en2-exam-technique').then((m) => m.default),
  'macbeth-quotes': () => import('./decks/macbeth-quotes').then((m) => m.default),
  'romeo-juliet-quotes': () => import('./decks/romeo-juliet-quotes').then((m) => m.default),
  'acc-comprehensive': () => import('./decks/acc-comprehensive').then((m) => m.default),
  'narrative-techniques': () => import('./decks/narrative-techniques').then((m) => m.default),
  'language-devices': () => import('./decks/language-devices').then((m) => m.default),
  'critical-approaches': () => import('./decks/critical-approaches').then((m) => m.default),
  'essay-writing': () => import('./decks/essay-writing').then((m) => m.default),
  'bulk-deck': () => import('./decks/bulk-deck').then((m) => m.default),
  'final-deck': () => import('./decks/final-deck').then((m) => m.default),
  'aqa-power-conflict-quotes': () =>
    import('../flashcard-poetry').then((m) =>
      m.poetryFlashcardDecks.find((d) => d.id === 'aqa-power-conflict-quotes'),
    ),
  'aqa-love-relationships-quotes': () =>
    import('../flashcard-poetry').then((m) =>
      m.poetryFlashcardDecks.find((d) => d.id === 'aqa-love-relationships-quotes'),
    ),
  'poetry-analysis-techniques': () =>
    import('../flashcard-poetry').then((m) =>
      m.poetryFlashcardDecks.find((d) => d.id === 'poetry-analysis-techniques'),
    ),
  'aic-comprehensive': () =>
    import('../flashcard-set-texts').then((m) =>
      m.setTextFlashcardDecks.find((d) => d.id === 'aic-comprehensive'),
    ),
  'lotf-comprehensive': () =>
    import('../flashcard-set-texts').then((m) =>
      m.setTextFlashcardDecks.find((d) => d.id === 'lotf-comprehensive'),
    ),
  'af-comprehensive': () =>
    import('../flashcard-set-texts').then((m) =>
      m.setTextFlashcardDecks.find((d) => d.id === 'af-comprehensive'),
    ),
  'academic-vocabulary': () =>
    import('../flashcard-vocabulary').then((m) =>
      m.vocabularyDecks.find((d) => d.id === 'academic-vocabulary'),
    ),
  'grammar-terms-advanced': () =>
    import('../flashcard-vocabulary').then((m) =>
      m.vocabularyDecks.find((d) => d.id === 'grammar-terms-advanced'),
    ),
  'rhetorical-devices': () =>
    import('../flashcard-vocabulary').then((m) =>
      m.vocabularyDecks.find((d) => d.id === 'rhetorical-devices'),
    ),
  'tier2-vocabulary': () =>
    import('../flashcard-vocabulary').then((m) =>
      m.vocabularyDecks.find((d) => d.id === 'tier2-vocabulary'),
    ),
  'aqa-exam-technique': () =>
    import('../flashcard-exam-technique').then((m) =>
      m.examTechniqueDecks.find((d) => d.id === 'aqa-exam-technique'),
    ),
  'edexcel-exam-technique': () =>
    import('../flashcard-exam-technique').then((m) =>
      m.examTechniqueDecks.find((d) => d.id === 'edexcel-exam-technique'),
    ),
  'ocr-exam-technique': () =>
    import('../flashcard-exam-technique').then((m) =>
      m.examTechniqueDecks.find((d) => d.id === 'ocr-exam-technique'),
    ),
  'wjec-exam-technique': () =>
    import('../flashcard-exam-technique').then((m) =>
      m.examTechniqueDecks.find((d) => d.id === 'wjec-exam-technique'),
    ),
  'essay-skills': () =>
    import('../flashcard-exam-technique').then((m) =>
      m.examTechniqueDecks.find((d) => d.id === 'essay-skills'),
    ),
  'kh-macbeth-key-terms': () =>
    import('../flashcard-khaleeji-decks').then((m) =>
      m.khaleejiVocabDecks.find((d) => d.id === 'kh-macbeth-key-terms'),
    ),
  'kh-aic-key-terms': () =>
    import('../flashcard-khaleeji-decks').then((m) =>
      m.khaleejiVocabDecks.find((d) => d.id === 'kh-aic-key-terms'),
    ),
  'kh-christmas-carol-key-terms': () =>
    import('../flashcard-khaleeji-decks').then((m) =>
      m.khaleejiVocabDecks.find((d) => d.id === 'kh-christmas-carol-key-terms'),
    ),
  'kh-power-conflict-techniques': () =>
    import('../flashcard-khaleeji-decks').then((m) =>
      m.khaleejiVocabDecks.find((d) => d.id === 'kh-power-conflict-techniques'),
    ),
  'kh-gcse-lang-analytical': () =>
    import('../flashcard-khaleeji-decks').then((m) =>
      m.khaleejiVocabDecks.find((d) => d.id === 'kh-gcse-lang-analytical'),
    ),
}

// Decks are immutable static data, so once fetched we keep the promise: flipping
// between decks must not re-request a chunk the browser has already parsed.
const cache = new Map<string, Promise<FlashcardDeck | undefined>>()

/**
 * Fetch a deck's cards. Resolves to undefined when the id is unknown, so callers
 * can show a real error state rather than inventing placeholder cards.
 */
export function loadFlashcardDeck(deckId: string): Promise<FlashcardDeck | undefined> {
  const cached = cache.get(deckId)
  if (cached) return cached
  const loader = DECK_LOADERS[deckId]
  if (!loader) return Promise.resolve(undefined)
  const promise = loader().catch((error) => {
    // Drop the rejected promise so a retry (network blip, chunk load failure)
    // can actually re-request instead of replaying the failure forever.
    cache.delete(deckId)
    throw error
  })
  cache.set(deckId, promise)
  return promise
}

export default loadFlashcardDeck
