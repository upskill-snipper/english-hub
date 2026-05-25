// ─── IELTS exam facts - single source of truth ─────────────────────────────
// Canonical, factual reference data for the IELTS readiness program: exam
// structure, timings, the band scale, scoring rule, the most common mistakes
// per skill, typical country requirements, the test process, and headline
// statistics. Powers the /ielts Exam Guide, the dashboard framing (e.g. the
// Writing-first steer), and keeps lesson content accurate.
//
// Compiled from official IELTS structure/scoring + published test statistics
// (IDP/British Council/Cambridge). Band-conversion anchors here match the
// tables in ./bands.ts. Present predicted bands as estimates, never guarantees.
// ────────────────────────────────────────────────────────────────────────────

import type { IeltsSkill } from './types'

export const IELTS_OVERVIEW = {
  testsPerYear: '4 million+',
  ownedBy: 'British Council, IDP: IELTS Australia, and Cambridge',
  acceptedBy: '12,500+ institutions across 140+ countries',
  trfValidityYears: 2,
  academicShare: 0.79,
  generalTrainingShare: 0.21,
} as const

// ─── Section structure + timing (the real exam) ───────────────────────────

export interface SectionFact {
  skill: IeltsSkill
  label: string
  timeMinutes: number
  questionsOrTasks: string
  format: string
  meanBandAcademic: number // published mean (Academic), for realistic context
}

export const SECTION_FACTS: SectionFact[] = [
  {
    skill: 'listening',
    label: 'Listening',
    timeMinutes: 30,
    questionsOrTasks: '40 questions · 4 recordings',
    format:
      'A social conversation, a monologue, an academic discussion and a lecture. Played ONCE. Accents vary (British, Australian, North American).',
    meanBandAcademic: 6.45,
  },
  {
    skill: 'reading',
    label: 'Reading',
    timeMinutes: 60,
    questionsOrTasks: '40 questions',
    format:
      'Academic: 3 long academic texts. General Training: 4 shorter everyday passages. Types: True/False/Not Given, matching headings, completion, multiple choice.',
    meanBandAcademic: 6.32,
  },
  {
    skill: 'writing',
    label: 'Writing',
    timeMinutes: 60,
    questionsOrTasks: 'Task 1 (150+ words, 20 min) · Task 2 (250+ words, 40 min)',
    format:
      'Academic Task 1 = describe data; General Training Task 1 = a letter. Task 2 = argumentative essay (both). Marked on 4 equal criteria.',
    meanBandAcademic: 5.9, // the LOWEST-scoring module, globally + especially the Gulf
  },
  {
    skill: 'speaking',
    label: 'Speaking',
    timeMinutes: 14,
    questionsOrTasks:
      'Part 1 (4-5 min) · Part 2 cue card (1 min prep + 2 min talk) · Part 3 (4-5 min)',
    format:
      'A face-to-face interview with a certified examiner. Marked on Fluency & Coherence, Lexical Resource, Grammar, Pronunciation.',
    meanBandAcademic: 6.0,
  },
]

/** The Listening + Reading + Writing modules are sat in one 2h40 sitting with
 *  no breaks; Speaking is held separately (same day or up to 7 days apart). */
export const SITTING_MINUTES = 160

// ─── Band scale (0-9) ──────────────────────────────────────────────────────

export const BAND_SCALE: { band: number; level: string; description: string }[] = [
  {
    band: 9,
    level: 'Expert user',
    description: 'Full operational command: fluent, accurate and appropriate.',
  },
  {
    band: 8,
    level: 'Very good user',
    description: 'Full command with only occasional, unsystematic errors.',
  },
  {
    band: 7,
    level: 'Good user',
    description: 'Operational command; handles complex language well.',
  },
  { band: 6, level: 'Competent user', description: 'Effective command despite some inaccuracies.' },
  {
    band: 5,
    level: 'Modest user',
    description: 'Partial command; copes with overall meaning but makes many errors.',
  },
  {
    band: 4,
    level: 'Limited user',
    description: 'Basic competence limited to familiar situations.',
  },
  {
    band: 3,
    level: 'Extremely limited',
    description: 'Conveys and understands only general meaning in very familiar situations.',
  },
  {
    band: 2,
    level: 'Intermittent user',
    description: 'Great difficulty understanding spoken and written English.',
  },
  { band: 1, level: 'Non-user', description: 'No real ability beyond isolated words.' },
]

/** Overall band = mean of the four skills, rounded: .25 → up to the next half;
 *  .75 → up to the next whole band. (Implemented in ./bands.ts overallBand.) */
export const SCORING_RULE =
  'Your overall band is the average of the four skills, rounded to the nearest half band (a .25 average rounds up to the next half band; .75 rounds up to the next whole band).'

// ─── Where test takers struggle most (drives prioritisation) ───────────────

/** Writing is the lowest-scoring module for virtually every nationality, and
 *  lowest of all for Gulf test takers - so a learner with no data is steered
 *  to Writing first, and the planner weights it. */
export const HARDEST_SKILL: IeltsSkill = 'writing'

export const COMMON_MISTAKES: Record<IeltsSkill, string[]> = {
  writing: [
    'Not fully answering the question (e.g. forgetting to give your opinion) - this caps Task Response at Band 5.',
    'Memorised template phrases ("It is irrefutable that…") - examiners are trained to spot and penalise them.',
    'Writing under the word count (150 for Task 1, 250 for Task 2) triggers an automatic penalty.',
    'No paragraphing - one block of text drops Coherence & Cohesion to Band 5.',
    'Vocabulary that is either too simple, or "big words" used incorrectly.',
    'Personal anecdotes in Task 2 - use general or hypothetical examples instead.',
    'Informal language (contractions, slang) lowers the academic register.',
    'Changing your position mid-essay - keep one consistent argument.',
    'Task 1: omitting the overview paragraph - the single most penalised omission.',
  ],
  reading: [
    'Reading every word instead of skimming for gist and scanning for answers.',
    'Getting stuck on difficult vocabulary instead of moving on.',
    'True/False/Not Given: treating "Not Given" as "False" - Not Given means the text simply does not say.',
    'Losing track of time across 3 passages / 40 questions in 60 minutes.',
  ],
  listening: [
    'Not reading the question prompts before the audio starts - they give vital context.',
    'Being thrown by distractors: options that are mentioned but are not the answer (speakers correct themselves).',
    'Spelling and word-limit errors on completion answers.',
    'Unfamiliarity with native-speed, varied accents (it plays only once).',
  ],
  speaking: [
    'Translating from your first language in your head, which causes hesitation.',
    'Giving very short answers instead of extending with reasons and examples.',
    'Reciting scripted/rehearsed answers - examiners detect and penalise these.',
    'Treating Part 3 like small talk - it needs structured, developed, abstract discussion.',
  ],
}

// ─── Typical institutional requirements (set per institution; not a pass/fail) ─

export const COUNTRY_REQUIREMENTS: { where: string; purpose: string; min: string }[] = [
  { where: 'UK', purpose: 'University (undergraduate)', min: '6.0-6.5 overall' },
  { where: 'UK', purpose: 'University (postgraduate)', min: '6.5-7.5 overall' },
  { where: 'UK', purpose: 'UKVI visa', min: '4.0-7.0 (visa-dependent)' },
  { where: 'Australia', purpose: 'Student visa (from 2024)', min: '6.0 overall' },
  { where: 'Canada', purpose: 'Skilled-worker immigration', min: '6.0-6.5 overall' },
  { where: 'USA', purpose: 'Universities', min: '6.5-7.0 overall' },
  { where: 'AU/UK', purpose: 'Nursing / medical registration', min: '7.0-7.5 per skill' },
]

// ─── The process ────────────────────────────────────────────────────────────

export const PROCESS_STEPS: { title: string; detail: string }[] = [
  {
    title: 'Choose your test',
    detail:
      'Academic (study / professional registration) or General Training (immigration / work).',
  },
  {
    title: 'Choose a format',
    detail:
      'Computer-delivered (results in ~1-5 days), paper-based (~13 days), or IELTS Online (~6-8 days).',
  },
  {
    title: 'Register & pay',
    detail: 'Book via the British Council or IDP with your passport - ideally ~2 months ahead.',
  },
  {
    title: 'Test day',
    detail:
      'Bring the same passport/ID. Listening, Reading and Writing run back-to-back (2h40, no breaks); Speaking is separate.',
  },
  {
    title: 'Results',
    detail:
      'A Test Report Form (TRF), valid for 2 years. You can request a remark (EOR) within 6 weeks, or retake one skill (One Skill Retake) within 60 days of a computer-delivered test.',
  },
]

/** ~91% of One Skill Retake candidates retake their LOWEST skill - most people
 *  know where they underperform. The program leans into that self-awareness. */
export const ONE_SKILL_RETAKE_NOTE =
  'You can retake a single skill within 60 days of a computer-delivered test. About 91% of candidates retake their weakest skill - most often Writing.'
