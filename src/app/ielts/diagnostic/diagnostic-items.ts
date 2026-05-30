// ─── IELTS placement diagnostic - content ──────────────────────────────────
// A short, ORIGINAL Academic-track placement set: a mini Reading passage with
// 4 auto-markable questions and a mini Listening section (transcript-driven,
// Wave 1 TTS) with 4 auto-markable questions. Plus the self-assessment scale
// used for Writing & Speaking, where no quick auto-marked task is meaningful.
//
// Total target time ≈ 10 minutes (≈5 Reading, ≈3 Listening, ≈2 self-assess).
//
// All content here is original and written for this placement test only - it is
// deliberately shorter and easier to navigate than a full /ielts/reading test.
// This file lives under the diagnostic route and is owned by the diagnostic
// module; the shared question/passage shapes come from @/lib/ielts/types.
// ────────────────────────────────────────────────────────────────────────────

import type {
  Band,
  IeltsSkill,
  ListeningSection,
  ObjectiveQuestion,
  ReadingPassage,
} from '@/lib/ielts/types'
// Graded extra placement content (the 10x baseline), authored in sibling files.
import { DIAGNOSTIC_READING_EXTRA } from './diagnostic-reading-extra'
import { DIAGNOSTIC_LISTENING_EXTRA } from './diagnostic-listening-extra'

// ─── Mini Reading passage (Academic) ───────────────────────────────────────

export const DIAGNOSTIC_READING: ReadingPassage = {
  id: 'diag-reading-tides',
  title: 'The Hidden Power of Tides',
  body: `Twice a day, along most of the world's coastlines, the sea rises and falls in a slow, predictable rhythm. These movements are tides, and they are caused chiefly by the gravitational pull of the Moon, with a smaller contribution from the Sun. Because the Moon is so much closer to the Earth than the Sun, its pull on the oceans is more than twice as strong, even though the Sun is vastly larger.

When the Sun, Moon and Earth fall roughly into a straight line - at the new and full Moon - their gravitational forces combine to produce especially large tides known as spring tides. The name has nothing to do with the season; it comes from an older sense of the word meaning "to spring up". About a week later, when the Sun and Moon pull at right angles to one another, the tidal range is at its smallest. These weaker tides are called neap tides.

Engineers have long been attracted to the idea of capturing this regular movement of water to generate electricity. A tidal barrage works rather like a dam built across the mouth of a river or bay: as the tide rises, water is allowed to flow through gates and spin turbines, and the process is repeated as the tide falls. Unlike wind or sunshine, tides can be predicted years in advance, which makes the supply of energy unusually reliable. The drawback is cost. Building a barrage is enormously expensive, and the structure can disturb the delicate habitats of estuaries, where many birds and fish feed and breed. For this reason, only a handful of large tidal power stations operate today, although interest in smaller, less damaging designs continues to grow.`,
  questions: [
    {
      id: 'diag-r-1',
      type: 'tfng',
      prompt: 'The Moon has a stronger effect on the Earth’s tides than the Sun does.',
      answer: 'true',
      explanation:
        'The passage states the Moon’s pull on the oceans is "more than twice as strong" as the Sun’s because it is much closer.',
    },
    {
      id: 'diag-r-2',
      type: 'mcq',
      prompt: 'According to the passage, spring tides occur when',
      options: [
        'the season changes to spring.',
        'the Sun and Moon pull at right angles to each other.',
        'the Sun, Moon and Earth are roughly in a straight line.',
        'a tidal barrage is opened at the mouth of a bay.',
      ],
      correctIndex: 2,
      explanation:
        'Spring tides happen at the new and full Moon, when the Sun, Moon and Earth fall roughly into a straight line. The name is unrelated to the season.',
    },
    {
      id: 'diag-r-3',
      type: 'gap',
      prompt:
        'Complete the sentence with ONE word from the passage: Tides are valuable for energy because, unlike wind or sunshine, they can be ______ years in advance.',
      acceptableAnswers: ['predicted'],
      explanation:
        'The passage says "tides can be predicted years in advance, which makes the supply of energy unusually reliable".',
    },
    {
      id: 'diag-r-4',
      type: 'tfng',
      prompt: 'Tidal barrages are now the most common way of generating electricity from the sea.',
      answer: 'not-given',
      explanation:
        'The passage says only a handful of large tidal stations operate and does not compare tidal barrages with other marine energy sources, so this cannot be confirmed.',
    },
  ],
}

// ─── Mini Listening section ─────────────────────────────────────────────────

export const DIAGNOSTIC_LISTENING: ListeningSection = {
  id: 'diag-listening-library',
  title: 'Joining the City Library',
  transcript: `LIBRARIAN: Good morning, welcome to Riverside City Library. How can I help you?

STUDENT: Hi. I’ve just moved to the area and I’d like to join, please.

LIBRARIAN: Of course. It’s completely free to register. I’ll just need one piece of photo identification and something that shows your current address - a recent utility bill or a bank statement is fine.

STUDENT: I’ve got my passport and a phone bill from last week. Will that do?

LIBRARIAN: That’s perfect. Now, as a standard member you can borrow up to twelve items at any one time, and the normal loan period is three weeks. You can renew online twice unless someone else has reserved the book.

STUDENT: Great. And is there a charge if I bring something back late?

LIBRARIAN: There is a small fee, yes - it’s twenty pence per item for each day it’s overdue. But we’ll always send you a reminder by email two days before anything is due, so it’s easy to avoid.

STUDENT: That’s helpful. One more thing - do you have study rooms?

LIBRARIAN: We do. There are bookable study rooms on the second floor. They’re popular, so I’d recommend reserving one through our website the day before you need it.

STUDENT: Brilliant. Thank you very much.`,
  questions: [
    {
      id: 'diag-l-1',
      type: 'mcq',
      prompt: 'How much does it cost to register as a member?',
      options: [
        'Twenty pence',
        'There is a small annual fee',
        'It is free',
        'It depends on your address',
      ],
      correctIndex: 2,
      explanation: 'The librarian says "It’s completely free to register."',
    },
    {
      id: 'diag-l-2',
      type: 'gap',
      prompt:
        'Complete the sentence with a NUMBER: A standard member can borrow up to ______ items at any one time.',
      acceptableAnswers: ['12', 'twelve'],
      explanation: 'The librarian states members "can borrow up to twelve items at any one time".',
    },
    {
      id: 'diag-l-3',
      type: 'gap',
      prompt: 'Complete the sentence: The normal loan period is ______ weeks.',
      acceptableAnswers: ['3', 'three'],
      explanation: 'The librarian says "the normal loan period is three weeks".',
    },
    {
      id: 'diag-l-4',
      type: 'mcq',
      prompt: 'What does the librarian recommend the student do to use a study room?',
      options: [
        'Arrive early in the morning',
        'Reserve one through the website the day before',
        'Pay a twenty-pence fee',
        'Ask at the desk on the second floor',
      ],
      correctIndex: 1,
      explanation:
        'The librarian recommends "reserving one through our website the day before you need it".',
    },
  ],
}

// ─── Aggregated placement banks (the real, 10x baseline) ───────────────────
// The placement test now uses SEVERAL graded passages/sections so the estimated
// band is a genuine measurement rather than a 4-question guess. The page maps
// over these arrays; scoring flattens every question. Additional graded content
// is authored in sibling files (diagnostic-*-extra.ts) and spread in here.
export const DIAGNOSTIC_READING_PASSAGES: ReadingPassage[] = [
  DIAGNOSTIC_READING,
  ...DIAGNOSTIC_READING_EXTRA,
]
export const DIAGNOSTIC_LISTENING_SECTIONS: ListeningSection[] = [
  DIAGNOSTIC_LISTENING,
  ...DIAGNOSTIC_LISTENING_EXTRA,
]

// Flattened question bundles for the page's scoring + progress gate.
export const DIAGNOSTIC_READING_QUESTIONS: ObjectiveQuestion[] =
  DIAGNOSTIC_READING_PASSAGES.flatMap((p) => p.questions)
export const DIAGNOSTIC_LISTENING_QUESTIONS: ObjectiveQuestion[] =
  DIAGNOSTIC_LISTENING_SECTIONS.flatMap((s) => s.questions)

// ─── Self-assessment (Writing & Speaking) ──────────────────────────────────
// No short auto-marked task gives a trustworthy Writing/Speaking band, so the
// placement test asks the learner to rate their own confidence on a 4-point
// scale. Each level maps to a rough, deliberately conservative band. This is
// clearly labelled in the UI as a self-estimate to be refined in the full
// Writing/Speaking modules.

export interface SelfAssessLevel {
  value: 1 | 2 | 3 | 4
  label: string
  description: string
  band: Band
}

export interface SelfAssessSkill {
  skill: Extract<IeltsSkill, 'writing' | 'speaking'>
  question: string
  levels: SelfAssessLevel[]
}

// Shared 4-point ladder, reused for both productive skills. Bands sit at the
// low end of each competence range so the self-estimate never over-promises.
function ladder(l1: string, l2: string, l3: string, l4: string): SelfAssessLevel[] {
  return [
    { value: 1, label: 'Just starting', description: l1, band: 4 },
    { value: 2, label: 'Getting there', description: l2, band: 5 },
    { value: 3, label: 'Fairly confident', description: l3, band: 6 },
    { value: 4, label: 'Very confident', description: l4, band: 7 },
  ]
}

export const SELF_ASSESS: SelfAssessSkill[] = [
  {
    skill: 'writing',
    question: 'How confident are you writing a formal essay or describing data in clear English?',
    levels: ladder(
      'I find it hard to write more than a few simple sentences, and I make frequent mistakes.',
      'I can write short paragraphs but struggle to organise ideas and often repeat basic vocabulary.',
      'I can structure an essay with paragraphs and link ideas, with some varied vocabulary and occasional errors.',
      'I write well-organised, developed essays with a wide range of accurate grammar and vocabulary.',
    ),
  },
  {
    skill: 'speaking',
    question: 'How confident are you speaking English about familiar and unfamiliar topics?',
    levels: ladder(
      'I can only say a few words or short phrases and pause a lot to find words.',
      'I can have a simple conversation but hesitate often and keep my answers short.',
      'I can speak fairly fluently on familiar topics and give reasons, with some hesitation on harder ones.',
      'I speak fluently and naturally on a wide range of topics with clear pronunciation and few errors.',
    ),
  },
]

// Map a chosen self-assessment level (1-4) for a skill to its rough band.
export function selfAssessBand(
  skill: Extract<IeltsSkill, 'writing' | 'speaking'>,
  value: 1 | 2 | 3 | 4,
): Band {
  const entry = SELF_ASSESS.find((s) => s.skill === skill)
  const level = entry?.levels.find((l) => l.value === value)
  return level ? level.band : 4
}

// ─── AI-assessed productive tasks (Writing + Speaking) ──────────────────────
// One short prompt each, sent to /api/ielts/diagnostic-assess for a real AI band
// estimate. These replace the self-estimate as the PRIMARY signal; the 4-point
// self-estimate above is kept only as a graceful fallback when a learner skips
// the task. Content is original, written for this placement test.

export interface DiagnosticWritingTask {
  id: string
  /** Task-2-style opinion prompt. */
  prompt: string
  targetWords: number
}

export interface DiagnosticSpeakingTask {
  id: string
  /** Part-1-style question. */
  prompt: string
}

export const DIAGNOSTIC_WRITING_TASK: DiagnosticWritingTask = {
  id: 'diag-writing-technology',
  prompt:
    'Some people believe that technology has made our lives more complicated rather than simpler. To what extent do you agree or disagree? Give reasons for your answer and include relevant examples from your own knowledge or experience.',
  targetWords: 250,
}

export const DIAGNOSTIC_SPEAKING_TASK: DiagnosticSpeakingTask = {
  id: 'diag-speaking-hometown',
  prompt:
    'Tell me about your hometown. What is it like, what do you like or dislike about it, and would you recommend it to a visitor? Speak for about a minute.',
}

export const DIAGNOSTIC_ESTIMATED_MINUTES = 12
