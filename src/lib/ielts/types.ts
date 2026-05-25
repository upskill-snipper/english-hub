// ─── IELTS domain types ───────────────────────────────────────────────────
// Shared contracts for the IELTS Academic learning loop. Every IELTS module
// (reading / listening / writing / speaking / diagnostic / progress) imports
// from here so the pieces interlock. General Training shares ~70% of this and
// can extend the `track` unions later without breaking Academic.
// ────────────────────────────────────────────────────────────────────────────

export type IeltsSkill = 'listening' | 'reading' | 'writing' | 'speaking'

/** Academic vs General Training. Listening + Speaking are identical across both
 *  tracks; only Reading + Writing differ. */
export type IeltsTrack = 'academic' | 'general'

export const IELTS_SKILLS: IeltsSkill[] = ['listening', 'reading', 'writing', 'speaking']

export const SKILL_META: Record<
  IeltsSkill,
  {
    label: string
    short: string
    marking: 'auto' | 'ai'
    href: string
    colour: string
    bgColour: string
  }
> = {
  listening: {
    label: 'Listening',
    short: 'L',
    marking: 'auto',
    href: '/ielts/listening',
    colour: 'text-sky-400',
    bgColour: 'bg-sky-500/10',
  },
  reading: {
    label: 'Reading',
    short: 'R',
    marking: 'auto',
    href: '/ielts/reading',
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
  },
  writing: {
    label: 'Writing',
    short: 'W',
    marking: 'ai',
    href: '/ielts/writing',
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
  },
  speaking: {
    label: 'Speaking',
    short: 'S',
    marking: 'ai',
    href: '/ielts/speaking',
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
  },
}

// IELTS bands run 0–9 in 0.5 steps. Used for per-skill and overall scores.
export type Band =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 4.5
  | 5
  | 5.5
  | 6
  | 6.5
  | 7
  | 7.5
  | 8
  | 8.5
  | 9

// Marking criteria for the AI-assessed skills.
export type WritingCriterion =
  | 'taskAchievement'
  | 'coherenceCohesion'
  | 'lexicalResource'
  | 'grammaticalRange'

export type SpeakingCriterion =
  | 'fluencyCoherence'
  | 'lexicalResource'
  | 'grammaticalRange'
  | 'pronunciation'

export type IeltsTaskType =
  | 'writing-task-1' // Academic: describe a chart / graph / process
  | 'writing-task-2' // Essay
  | 'speaking-part-1' // Interview
  | 'speaking-part-2' // Cue card / long turn
  | 'speaking-part-3' // Two-way discussion

// ─── Objective (auto-marked) questions: Listening + Reading ────────────────

export interface McqQuestion {
  id: string
  type: 'mcq'
  prompt: string
  options: string[]
  correctIndex: number
  explanation?: string
}

export interface GapQuestion {
  id: string
  type: 'gap' // sentence/summary completion, short answer
  prompt: string
  acceptableAnswers: string[] // matched case-insensitively, trimmed
  explanation?: string
}

export interface TfngQuestion {
  id: string
  type: 'tfng' // True / False / Not Given (Reading), Yes/No/Not Given variant ok
  prompt: string
  answer: 'true' | 'false' | 'not-given'
  explanation?: string
}

export type ObjectiveQuestion = McqQuestion | GapQuestion | TfngQuestion

// ─── Reading (Academic) ────────────────────────────────────────────────────

export interface ReadingPassage {
  id: string
  title: string
  body: string // passage text (plain text / light markdown)
  questions: ObjectiveQuestion[]
}

export interface ReadingTest {
  id: string
  title: string
  track: IeltsTrack
  passages: ReadingPassage[] // full Academic = 3 passages ≈ 40 Qs
  estimatedMinutes: number
}

// ─── Listening ─────────────────────────────────────────────────────────────

export interface ListeningSection {
  id: string
  title: string
  transcript: string // drives TTS playback (Wave 1) + accessibility/review
  audioSrc?: string // optional real audio asset (deferred)
  questions: ObjectiveQuestion[]
}

export interface ListeningTest {
  id: string
  title: string
  sections: ListeningSection[] // full test = 4 sections ≈ 40 Qs
  estimatedMinutes: number
}

// ─── Writing (Academic) ────────────────────────────────────────────────────

export interface WritingPrompt {
  id: string
  task: 'writing-task-1' | 'writing-task-2'
  track: IeltsTrack
  title: string
  prompt: string // the question text
  imageSrc?: string // chart/graph for Task 1 (optional in Wave 1)
  imageAlt?: string
  minWords: number // 150 (Task 1) / 250 (Task 2)
  suggestedMinutes: number
}

// ─── Speaking ──────────────────────────────────────────────────────────────

export interface SpeakingCue {
  id: string
  part: 'speaking-part-1' | 'speaking-part-2' | 'speaking-part-3'
  title: string
  prompts: string[] // Part 1/3 questions, or the cue-card bullet points for Part 2
  prepSeconds?: number // Part 2 = 60
  speakSeconds?: number // Part 2 = up to 120
}

// ─── Feedback / scoring (AI skills) ────────────────────────────────────────

export interface CriterionFeedback {
  criterion: string // human label, e.g. 'Lexical Resource'
  band: Band
  comment: string
}

export interface TaskFeedback {
  overallBand: Band
  criteria: CriterionFeedback[]
  strengths: string[]
  improvements: string[]
  modelPointers?: string[]
}

// ─── Attempts (persisted via the store) ────────────────────────────────────

export interface ObjectiveAttempt {
  id: string
  skill: 'listening' | 'reading'
  testId: string
  rawScore: number // correct answers
  total: number
  band: Band
  date: string // ISO
}

export interface TaskAttempt {
  id: string
  skill: 'writing' | 'speaking'
  taskType: IeltsTaskType
  promptId: string
  responseText: string // essay text or speaking transcript
  band: Band
  criteria: CriterionFeedback[]
  date: string // ISO
}

export type IeltsAttempt = ObjectiveAttempt | TaskAttempt

// ─── Profile (drives diagnostic, plan, progress, prediction) ───────────────

export interface SkillBand {
  skill: IeltsSkill
  band: Band | null
  attempts: number
}

export interface IeltsProfile {
  overallBand: Band | null // null until all four skills have ≥1 attempt
  skills: Record<IeltsSkill, SkillBand>
  totalAttempts: number
  hasData: boolean
  weakestSkill: IeltsSkill | null
}
