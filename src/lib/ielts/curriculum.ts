// ─── IELTS readiness curriculum spine ──────────────────────────────────────
// The leveled program backbone — from "new to IELTS / basic English" through to
// an exam-ready top band. Mirrors the GCSE/IGCSE learner model (levels + units +
// lessons) but adds an explicit beginner→ready ladder the GCSE side doesn't have.
//
// This file is the CONTRACT: it defines levels, the per-skill unit map, and the
// Lesson/Unit types. Lesson CONTENT is authored in per-skill data files
// (src/lib/ielts/lessons/*) that export `Lesson[]` referencing these unit ids +
// levels; the /ielts/learn UI aggregates and renders them. Keep unit ids stable.
// ────────────────────────────────────────────────────────────────────────────

import type { IeltsSkill } from './types'

// ─── Levels (the beginner → exam-ready ladder) ─────────────────────────────

export type IeltsLevel = 'foundation' | 'intermediate' | 'advanced' | 'mastery'

export const LEVELS: {
  id: IeltsLevel
  label: string
  cefr: string
  bandRange: string
  blurb: string
  order: number
}[] = [
  {
    id: 'foundation',
    label: 'Foundation',
    cefr: 'A2–B1',
    bandRange: 'Pre-IELTS → 5.0',
    blurb:
      'Start here if IELTS (or exam English) is new to you. Learn the format, the band scale, and the core language the test assumes.',
    order: 1,
  },
  {
    id: 'intermediate',
    label: 'Intermediate',
    cefr: 'B1–B2',
    bandRange: '5.0 – 6.0',
    blurb:
      'Meet every question type and build a reliable method for each. Reach a competent, consistent band.',
    order: 2,
  },
  {
    id: 'advanced',
    label: 'Advanced',
    cefr: 'B2–C1',
    bandRange: '6.5 – 7.5',
    blurb: 'Sharpen technique, accuracy and range under time pressure for a strong band.',
    order: 3,
  },
  {
    id: 'mastery',
    label: 'Mastery',
    cefr: 'C1–C2',
    bandRange: '8.0 – 9.0',
    blurb: 'Polish for a top band — precision, natural range, and complete exam control.',
    order: 4,
  },
]

export function levelMeta(id: IeltsLevel) {
  return LEVELS.find((l) => l.id === id) ?? LEVELS[0]
}

// ─── Units (the curriculum map per skill) ──────────────────────────────────
// 'foundation' is a cross-skill orientation track for true beginners.

export interface Unit {
  id: string
  skill: IeltsSkill | 'foundation'
  title: string
  blurb: string
  order: number
}

export const UNITS: Unit[] = [
  // Foundation (cross-skill orientation)
  {
    id: 'found-overview',
    skill: 'foundation',
    title: 'What IELTS is & how it works',
    blurb: 'The four sections, timing, and what each one asks of you.',
    order: 1,
  },
  {
    id: 'found-bands',
    skill: 'foundation',
    title: 'How IELTS is scored — the band scale',
    blurb: 'What bands 4–9 mean and how the overall band is worked out.',
    order: 2,
  },
  {
    id: 'found-academic-gt',
    skill: 'foundation',
    title: 'Academic vs General Training',
    blurb: 'Which test to take and how Reading & Writing differ.',
    order: 3,
  },
  {
    id: 'found-routine',
    skill: 'foundation',
    title: 'Building a preparation routine',
    blurb: 'How to study, how often, and how to use this program.',
    order: 4,
  },
  {
    id: 'found-grammar',
    skill: 'foundation',
    title: 'Core grammar the test assumes',
    blurb: 'Tenses, articles, clauses and the structures examiners reward.',
    order: 5,
  },
  {
    id: 'found-vocab',
    skill: 'foundation',
    title: 'Building everyday & academic vocabulary',
    blurb: 'How to grow range, collocation and paraphrasing.',
    order: 6,
  },

  // Reading
  {
    id: 'read-skim-scan',
    skill: 'reading',
    title: 'Skimming & scanning',
    blurb: 'Find answers fast without reading every word.',
    order: 1,
  },
  {
    id: 'read-tfng',
    skill: 'reading',
    title: 'True / False / Not Given',
    blurb: 'The most-feared question type, made systematic.',
    order: 2,
  },
  {
    id: 'read-headings',
    skill: 'reading',
    title: 'Matching headings',
    blurb: 'Identify the main idea of each paragraph.',
    order: 3,
  },
  {
    id: 'read-matching',
    skill: 'reading',
    title: 'Matching information & features',
    blurb: 'Locate where specific ideas appear.',
    order: 4,
  },
  {
    id: 'read-completion',
    skill: 'reading',
    title: 'Sentence, summary & note completion',
    blurb: 'Gap-fill from the text with the right form.',
    order: 5,
  },
  {
    id: 'read-mcq',
    skill: 'reading',
    title: 'Multiple choice',
    blurb: 'Eliminate distractors and choose precisely.',
    order: 6,
  },
  {
    id: 'read-timing',
    skill: 'reading',
    title: 'Timing & strategy for 40 questions',
    blurb: 'Pace the three passages without running out of time.',
    order: 7,
  },

  // Listening
  {
    id: 'listen-form-note',
    skill: 'listening',
    title: 'Form, note & table completion',
    blurb: 'Predict, listen for detail, and spell correctly.',
    order: 1,
  },
  {
    id: 'listen-mcq',
    skill: 'listening',
    title: 'Multiple choice',
    blurb: 'Track the conversation and avoid the trap options.',
    order: 2,
  },
  {
    id: 'listen-matching',
    skill: 'listening',
    title: 'Matching',
    blurb: 'Connect items as the speakers develop ideas.',
    order: 3,
  },
  {
    id: 'listen-map-plan',
    skill: 'listening',
    title: 'Maps, plans & diagram labelling',
    blurb: 'Follow directions and spatial language.',
    order: 4,
  },
  {
    id: 'listen-sentence',
    skill: 'listening',
    title: 'Sentence completion',
    blurb: 'Capture the exact words within the word limit.',
    order: 5,
  },
  {
    id: 'listen-distractors',
    skill: 'listening',
    title: 'Accents, distractors & corrections',
    blurb: 'Handle speakers who change their mind mid-sentence.',
    order: 6,
  },

  // Writing
  {
    id: 'write-t1-academic',
    skill: 'writing',
    title: 'Task 1 (Academic): describing data',
    blurb: 'Overview, key features and the right comparison language.',
    order: 1,
  },
  {
    id: 'write-t1-letter',
    skill: 'writing',
    title: 'Task 1 (General Training): letters',
    blurb: 'Purpose, tone and covering all three bullet points.',
    order: 2,
  },
  {
    id: 'write-t2-structure',
    skill: 'writing',
    title: 'Task 2: essay structure',
    blurb: 'A reliable four-paragraph plan for any essay.',
    order: 3,
  },
  {
    id: 'write-t2-types',
    skill: 'writing',
    title: 'Task 2: question types',
    blurb: 'Opinion, discussion, problem/solution and two-part questions.',
    order: 4,
  },
  {
    id: 'write-coherence',
    skill: 'writing',
    title: 'Coherence & cohesion',
    blurb: 'Paragraphing and linking that reads naturally.',
    order: 5,
  },
  {
    id: 'write-lexical',
    skill: 'writing',
    title: 'Lexical resource',
    blurb: 'Range and precision without forcing "big words".',
    order: 6,
  },
  {
    id: 'write-grammar',
    skill: 'writing',
    title: 'Grammatical range & accuracy',
    blurb: 'Complex sentences that stay correct.',
    order: 7,
  },

  // Speaking
  {
    id: 'speak-part1',
    skill: 'speaking',
    title: 'Part 1: the interview',
    blurb: 'Natural, extended answers to everyday questions.',
    order: 1,
  },
  {
    id: 'speak-part2',
    skill: 'speaking',
    title: 'Part 2: the cue card',
    blurb: 'Plan in 60 seconds and talk for two minutes.',
    order: 2,
  },
  {
    id: 'speak-part3',
    skill: 'speaking',
    title: 'Part 3: the discussion',
    blurb: 'Develop, justify and speculate on abstract ideas.',
    order: 3,
  },
  {
    id: 'speak-fluency',
    skill: 'speaking',
    title: 'Fluency & coherence',
    blurb: 'Keep going smoothly and link your ideas.',
    order: 4,
  },
  {
    id: 'speak-pronunciation',
    skill: 'speaking',
    title: 'Pronunciation',
    blurb: 'Stress, rhythm and intonation that aid clarity.',
    order: 5,
  },
]

export function unitsForSkill(skill: Unit['skill']): Unit[] {
  return UNITS.filter((u) => u.skill === skill).sort((a, b) => a.order - b.order)
}

// ─── Lessons ───────────────────────────────────────────────────────────────
// Authored in src/lib/ielts/lessons/<skill>-lessons.ts as `Lesson[]` and
// aggregated for the /ielts/learn UI.

export interface Lesson {
  id: string
  skill: Unit['skill']
  level: IeltsLevel
  unit: string // Unit.id
  title: string
  slug: string // /ielts/learn/<skill>/<slug>
  summary: string
  estMinutes: number
  /** Markdown lesson content (teaching + worked examples + a "try it" prompt). */
  body: string
}
