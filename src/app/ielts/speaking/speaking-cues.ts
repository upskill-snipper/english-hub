// ─── IELTS Speaking cues (Academic, Parts 1–3) ─────────────────────────────
// Original IELTS-preparation practice prompts for the async Speaking module.
// These mirror the *shape* of a real IELTS Speaking interview without copying
// any official or third-party question bank:
//   • Part 1 — short interview questions on familiar, everyday topics.
//   • Part 2 — a cue card ("long turn"): one topic + bullet prompts, with the
//     standard 60s preparation / up-to-120s speaking timings.
//   • Part 3 — a two-way discussion: more abstract, opinion-led questions that
//     thematically extend the Part 2 topic.
//
// The page imports SPEAKING_CUES and lets the learner pick a set; the feedback
// route receives the chosen prompt text + the learner's typed transcript.
// ────────────────────────────────────────────────────────────────────────────

import type { SpeakingCue } from '@/lib/ielts/types'

export const SPEAKING_CUES: SpeakingCue[] = [
  // ─── Part 1 — Interview (everyday topics) ────────────────────────────────
  {
    id: 'sp1-home-area',
    part: 'speaking-part-1',
    title: 'Part 1 · Your home and area',
    prompts: [
      'Where do you live at the moment — is it a house or an apartment?',
      'What do you like most about the area you live in?',
      'Is there anything you would like to change about your neighbourhood?',
      'Do you think you will stay living in the same place in the future? Why or why not?',
      'How easy is it to get around your area without a car?',
    ],
  },
  {
    id: 'sp1-daily-routine',
    part: 'speaking-part-1',
    title: 'Part 1 · Daily routine and free time',
    prompts: [
      'What is the first thing you usually do after you wake up?',
      'Are you a morning person or an evening person? Why?',
      'How do you normally spend your free time during the week?',
      'Has the way you spend your free time changed in the last few years?',
      'Is there a new hobby you would like to take up? Explain why.',
    ],
  },

  // ─── Part 2 — Long turn / cue card ───────────────────────────────────────
  {
    id: 'sp2-skill-learned',
    part: 'speaking-part-2',
    title: 'Part 2 · A skill you learned that was useful',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a practical skill you have learned that turned out to be useful.',
      'You should say:',
      'what the skill is and when you learned it',
      'how you learned it (for example, from a person, a course, or by yourself)',
      'how difficult or easy it was to learn',
      'and explain why this skill has been useful to you.',
    ],
  },
  {
    id: 'sp2-memorable-journey',
    part: 'speaking-part-2',
    title: 'Part 2 · A journey you remember well',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a journey or trip that you remember well.',
      'You should say:',
      'where you went and who you travelled with',
      'how you travelled and how long it took',
      'what you did during the journey',
      'and explain why this journey was memorable for you.',
    ],
  },

  // ─── Part 3 — Two-way discussion (abstract, opinion-led) ─────────────────
  {
    id: 'sp3-learning-society',
    part: 'speaking-part-3',
    title: 'Part 3 · Learning and society',
    prompts: [
      'Why do you think some skills are valued more highly than others in society?',
      'Do you think schools should focus more on practical skills than on academic knowledge? Why?',
      'How has technology changed the way people learn new skills today?',
      'Some people say it is harder for adults to learn new things than children. Do you agree?',
      'What role should governments play in helping people learn skills for work?',
    ],
  },
]

/** Find a cue by id (used by the page when restoring the chosen prompt). */
export function findCue(id: string): SpeakingCue | undefined {
  return SPEAKING_CUES.find((cue) => cue.id === id)
}
