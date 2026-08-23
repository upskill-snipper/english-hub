// @ts-nocheck
/**
 * Backwards-compatible aggregate of every flashcard deck.
 *
 * PERF WARNING - do not import this from a client component.
 *
 * This file used to declare 25 decks inline (~600 KB of card text) and spread in
 * five more deck files on top, giving a single ~1.2 MB module. The flashcards
 * page is a `'use client'` component, so importing `flashcardDecks` here put the
 * entire corpus into that route's First Load JS before a student had opened a
 * single deck.
 *
 * The decks now live one-per-module under ./flashcards/decks (plus the five
 * pre-existing shard files). UI should import the small index from
 * `@/data/flashcards/deck-index` and pull a deck's cards on demand via
 * `loadFlashcardDeck` in `@/data/flashcards/deck-loaders`.
 *
 * This module is kept only for server-side / test consumers that genuinely need
 * the whole corpus in one array. Importing it eagerly re-ships all 1.2 MB.
 */
import { poetryFlashcardDecks } from './flashcard-poetry'
import { setTextFlashcardDecks } from './flashcard-set-texts'
import { vocabularyDecks } from './flashcard-vocabulary'
import { examTechniqueDecks } from './flashcard-exam-technique'
import { khaleejiVocabDecks } from './flashcard-khaleeji-decks'

import literaryTechniques from './flashcards/decks/literary-techniques'
import grammarTerms from './flashcards/decks/grammar-terms'
import advancedWritingTechniques from './flashcards/decks/advanced-writing-techniques'
import christmasCarolQuotes from './flashcards/decks/christmas-carol-quotes'
import jekyllHydeQuotes from './flashcards/decks/jekyll-hyde-quotes'
import inspectorCallsQuotes from './flashcards/decks/inspector-calls-quotes'
import edexcelRelationshipsPoetry from './flashcards/decks/edexcel-relationships-poetry'
import edexcelConflictPoetry from './flashcards/decks/edexcel-conflict-poetry'
import edexcelIgcsePoetry from './flashcards/decks/edexcel-igcse-poetry'
import edexcelPaper1KeyTerms from './flashcards/decks/edexcel-paper1-key-terms'
import edexcelPaper2KeyTerms from './flashcards/decks/edexcel-paper2-key-terms'
import edexcel1en2Paper1KeyTerms from './flashcards/decks/edexcel-1en2-paper-1-key-terms'
import edexcel1en2Paper2KeyTerms from './flashcards/decks/edexcel-1en2-paper-2-key-terms'
import edexcel1en2AssessmentObjectives from './flashcards/decks/edexcel-1en2-assessment-objectives'
import edexcel1en2MarkSchemeVocabulary from './flashcards/decks/edexcel-1en2-mark-scheme-vocabulary'
import edexcel1en2ExamTechnique from './flashcards/decks/edexcel-1en2-exam-technique'
import macbethQuotes from './flashcards/decks/macbeth-quotes'
import romeoJulietQuotes from './flashcards/decks/romeo-juliet-quotes'
import accComprehensive from './flashcards/decks/acc-comprehensive'
import narrativeTechniques from './flashcards/decks/narrative-techniques'
import languageDevices from './flashcards/decks/language-devices'
import criticalApproaches from './flashcards/decks/critical-approaches'
import essayWriting from './flashcards/decks/essay-writing'
import bulkDeck from './flashcards/decks/bulk-deck'
import finalDeck from './flashcards/decks/final-deck'

// Types moved to ./flashcards/types so that type-only consumers do not pull the
// card corpus into their module graph. Re-exported here to keep existing
// `from '@/data/flashcard-data'` type imports working.
export type { FlashCard, FlashcardDeck } from './flashcards/types'

// Order is preserved exactly as it was when these decks were declared inline:
// nineteen decks, then the five shard arrays, then the final six.
export const flashcardDecks = [
  literaryTechniques,
  grammarTerms,
  advancedWritingTechniques,
  christmasCarolQuotes,
  jekyllHydeQuotes,
  inspectorCallsQuotes,
  edexcelRelationshipsPoetry,
  edexcelConflictPoetry,
  edexcelIgcsePoetry,
  edexcelPaper1KeyTerms,
  edexcelPaper2KeyTerms,
  edexcel1en2Paper1KeyTerms,
  edexcel1en2Paper2KeyTerms,
  edexcel1en2AssessmentObjectives,
  edexcel1en2MarkSchemeVocabulary,
  edexcel1en2ExamTechnique,
  macbethQuotes,
  romeoJulietQuotes,
  accComprehensive,
  ...poetryFlashcardDecks,
  ...setTextFlashcardDecks,
  ...vocabularyDecks,
  ...examTechniqueDecks,
  ...khaleejiVocabDecks,
  narrativeTechniques,
  languageDevices,
  criticalApproaches,
  essayWriting,
  bulkDeck,
  finalDeck,
]

export default flashcardDecks
