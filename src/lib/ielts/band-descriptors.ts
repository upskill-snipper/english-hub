// ─── IELTS marking criteria (structure) ────────────────────────────────────
// Lightweight, shared definitions of the four assessment criteria for each
// AI-marked task type. This gives the UI consistent labels and gives the
// Writing/Speaking feedback routes a stable list of criteria to score against.
//
// The detailed per-band descriptor prose lives inside each feedback route's
// system prompt (so it can evolve independently); this file is the shared
// scaffold both the prompt and the results UI agree on.
// ────────────────────────────────────────────────────────────────────────────

import type { SpeakingCriterion, WritingCriterion } from './types'

export interface CriterionDef<K extends string> {
  key: K
  label: string
  summary: string
}

export const WRITING_TASK2_CRITERIA: CriterionDef<WritingCriterion>[] = [
  {
    key: 'taskAchievement',
    label: 'Task Response',
    summary: 'How fully, relevantly and clearly you answer the question and develop a position.',
  },
  {
    key: 'coherenceCohesion',
    label: 'Coherence & Cohesion',
    summary: 'Logical organisation, paragraphing, and the linking of ideas and sentences.',
  },
  {
    key: 'lexicalResource',
    label: 'Lexical Resource',
    summary: 'Range, precision and naturalness of vocabulary, including collocation.',
  },
  {
    key: 'grammaticalRange',
    label: 'Grammatical Range & Accuracy',
    summary: 'Range of sentence structures and the accuracy of grammar and punctuation.',
  },
]

export const WRITING_TASK1_CRITERIA: CriterionDef<WritingCriterion>[] = [
  {
    key: 'taskAchievement',
    label: 'Task Achievement',
    summary: 'How accurately and completely you report the key features / overview of the visual.',
  },
  {
    key: 'coherenceCohesion',
    label: 'Coherence & Cohesion',
    summary: 'Logical sequencing of information and clear linking.',
  },
  {
    key: 'lexicalResource',
    label: 'Lexical Resource',
    summary: 'Range and accuracy of vocabulary for describing data, trends and processes.',
  },
  {
    key: 'grammaticalRange',
    label: 'Grammatical Range & Accuracy',
    summary: 'Range and accuracy of structures, including comparatives and tense for data.',
  },
]

export const SPEAKING_CRITERIA: CriterionDef<SpeakingCriterion>[] = [
  {
    key: 'fluencyCoherence',
    label: 'Fluency & Coherence',
    summary:
      'Speaking at length without effort, logically, with natural linking and little hesitation.',
  },
  {
    key: 'lexicalResource',
    label: 'Lexical Resource',
    summary: 'Range and precision of vocabulary, including idiomatic and topic-specific language.',
  },
  {
    key: 'grammaticalRange',
    label: 'Grammatical Range & Accuracy',
    summary: 'Range and accuracy of spoken structures.',
  },
  {
    key: 'pronunciation',
    label: 'Pronunciation',
    summary:
      'Clarity, stress, rhythm and intonation (assessed from the transcript as a proxy in Wave 1).',
  },
]

/** Short, learner-facing summary of what each whole band means in practice. */
export const BAND_SUMMARY: Record<number, string> = {
  9: 'Expert — fully operational command of English.',
  8: 'Very good — fully operational with only occasional unsystematic inaccuracies.',
  7: 'Good — operational command, occasional inaccuracies in unfamiliar situations.',
  6: 'Competent — generally effective command despite some inaccuracies.',
  5: 'Modest — partial command, copes with overall meaning in most situations.',
  4: 'Limited — basic competence limited to familiar situations.',
  3: 'Extremely limited — conveys and understands only general meaning.',
}
