// ─── IELTS Speaking cues · Set 15 (Academic, Parts 1-3) ────────────────────
// A fifteenth batch of original IELTS-preparation practice prompts for the
// async Speaking module. Same shape and conventions as the other sets:
//   • Part 1 - short interview questions on familiar, everyday topics.
//   • Part 2 - a cue card ("long turn"): one topic + bullet prompts, with the
//     standard 60s preparation / up-to-120s speaking timings.
//   • Part 3 - a two-way discussion: more abstract, opinion-led questions that
//     thematically extend the Part 2 topics (health and lifestyle, community
//     and neighbourhoods).
//
// Set 15 covers sport and exercise plus your neighbourhood for Part 1, cue
// cards on a memorable meal you had and a useful object you own for Part 2, and
// discussions of health and lifestyle plus community and neighbourhoods for
// Part 3.
//
// All prompts are original and written for this app - they do not reproduce any
// official or third-party IELTS question bank. ids carry an `s15` marker so the
// coordinator can merge this set without colliding with the other cues.
// ────────────────────────────────────────────────────────────────────────────

import type { SpeakingCue } from '@/lib/ielts/types'

export const SPEAKING_SET_15: SpeakingCue[] = [
  // ─── Part 1 - Interview (everyday topics) ────────────────────────────────
  {
    id: 'sp1-s15-sport',
    part: 'speaking-part-1',
    title: 'Part 1 · Sport and exercise',
    prompts: [
      'Do you play any sports or take any regular exercise?',
      'How do you usually feel after a good workout?',
      'Did you do much sport when you were at school?',
      'Do you prefer exercising on your own or with other people?',
      'Is there a new sport that you would like to try one day? Why?',
    ],
  },
  {
    id: 'sp1-s15-neighbourhood',
    part: 'speaking-part-1',
    title: 'Part 1 · Your neighbourhood',
    prompts: [
      'How long have you lived in your current neighbourhood?',
      'What do you like most about the area where you live?',
      'Are there many shops or cafes close to your home?',
      'Do you know many of the people who live near you?',
      'Is your neighbourhood a quiet place or quite a busy one?',
    ],
  },

  // ─── Part 2 - Long turn / cue card ───────────────────────────────────────
  {
    id: 'sp2-s15-meal',
    part: 'speaking-part-2',
    title: 'Part 2 · A memorable meal you had',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a memorable meal that you once had.',
      'You should say:',
      'what the meal was and where you ate it',
      'who you shared the meal with',
      'what made the food or the occasion special',
      'and explain why this meal was so memorable for you.',
    ],
  },
  {
    id: 'sp2-s15-useful-object',
    part: 'speaking-part-2',
    title: 'Part 2 · A useful object you own',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a useful object that you own.',
      'You should say:',
      'what the object is and when you got it',
      'how often you use it',
      'what exactly you use it for',
      'and explain why you find this object so useful.',
    ],
  },

  // ─── Part 3 - Two-way discussion (abstract, opinion-led) ─────────────────
  {
    id: 'sp3-s15-health-lifestyle',
    part: 'speaking-part-3',
    title: 'Part 3 · Health and lifestyle',
    prompts: [
      'Why do you think some people find it hard to keep up healthy habits?',
      "How important is regular exercise for a person's general wellbeing?",
      'Do you think governments should do more to encourage healthy lifestyles?',
      'Are people today more aware of healthy eating than they were in the past?',
      'How might a busy working life affect the choices people make about their health?',
    ],
  },
  {
    id: 'sp3-s15-community',
    part: 'speaking-part-3',
    title: 'Part 3 · Community and neighbourhoods',
    prompts: [
      'Why do you think a strong sense of community matters to people?',
      'How can neighbours help to make an area a pleasant place to live?',
      'Do you think people know their neighbours less well than they used to? Why?',
      'What can local councils do to bring people in a neighbourhood together?',
      'Is it better to live in a close-knit community or somewhere more private?',
    ],
  },
]

/** Find a Set 15 cue by id (used when restoring a chosen prompt from this set). */
export function findSet15Cue(id: string): SpeakingCue | undefined {
  return SPEAKING_SET_15.find((cue) => cue.id === id)
}
