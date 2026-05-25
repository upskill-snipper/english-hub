// ─── IELTS Speaking cues · Set 2 (Academic, Parts 1-3) ─────────────────────
// A second batch of original IELTS-preparation practice prompts for the async
// Speaking module. Same shape and conventions as SPEAKING_CUES, with fresh
// everyday topics so learners can rotate through more material without repeats:
//   • Part 1 - short interview questions on familiar, everyday topics.
//   • Part 2 - a cue card ("long turn"): one topic + bullet prompts, with the
//     standard 60s preparation / up-to-120s speaking timings.
//   • Part 3 - a two-way discussion: more abstract, opinion-led questions that
//     thematically extend a Part 2 topic.
//
// All prompts are original and written for this app - they do not reproduce any
// official or third-party IELTS question bank. ids use the `sp-s2-` prefix so
// the coordinator can merge this set without colliding with the base cues.
// ────────────────────────────────────────────────────────────────────────────

import type { SpeakingCue } from '@/lib/ielts/types'

export const SPEAKING_SET_2: SpeakingCue[] = [
  // ─── Part 1 - Interview (everyday topics) ────────────────────────────────
  {
    id: 'sp-s2-weather-seasons',
    part: 'speaking-part-1',
    title: 'Part 1 · Weather and seasons',
    prompts: [
      'What kind of weather do you enjoy the most, and why?',
      'Which season of the year is your favourite where you live?',
      'Does the weather ever change your plans for the day? Can you give an example?',
      'Do you usually check the weather forecast before you go out?',
      'Has the weather where you grew up changed much since you were a child?',
    ],
  },
  {
    id: 'sp-s2-transport',
    part: 'speaking-part-1',
    title: 'Part 1 · Getting around and transport',
    prompts: [
      'How do you usually travel to work or to your place of study?',
      'Do you prefer public transport or travelling by car? Why?',
      'Is it easy to get from one place to another in the town or city where you live?',
      'Has the way you travel around changed over the last few years?',
      'Would you like to learn to drive, or to drive more often? Explain why.',
    ],
  },

  // ─── Part 2 - Long turn / cue card ───────────────────────────────────────
  {
    id: 'sp-s2-favourite-photo',
    part: 'speaking-part-2',
    title: 'Part 2 · A photograph you like',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a photograph that you like and that means something to you.',
      'You should say:',
      'what the photograph shows and where it was taken',
      'who took it, or whether you took it yourself',
      'when you usually look at it or where you keep it',
      'and explain why this photograph is special to you.',
    ],
  },
  {
    id: 'sp-s2-outdoor-place',
    part: 'speaking-part-2',
    title: 'Part 2 · An outdoor place you enjoy spending time in',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe an outdoor place where you enjoy spending time.',
      'You should say:',
      'where this place is and how you first discovered it',
      'how often you go there and who you go with',
      'what you usually do while you are there',
      'and explain why you enjoy spending time in this place.',
    ],
  },

  // ─── Part 3 - Two-way discussion (abstract, opinion-led) ─────────────────
  {
    id: 'sp-s2-cities-environment',
    part: 'speaking-part-3',
    title: 'Part 3 · Cities, transport and the environment',
    prompts: [
      'Why do you think more and more people are choosing to live in large cities?',
      'What are the main problems caused by heavy traffic in busy cities?',
      'Do you think governments should encourage people to use public transport instead of cars? How?',
      'How might the way people travel around cities change in the future?',
      'Some people say spending time outdoors in nature is becoming less common. Why might that be?',
    ],
  },
]

/** Find a Set 2 cue by id (used when restoring a chosen prompt from this set). */
export function findSet2Cue(id: string): SpeakingCue | undefined {
  return SPEAKING_SET_2.find((cue) => cue.id === id)
}
