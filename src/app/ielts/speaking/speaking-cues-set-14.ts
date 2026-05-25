// ─── IELTS Speaking cues · Set 14 (Academic, Parts 1–3) ────────────────────
// A fourteenth batch of original IELTS-preparation practice prompts for the
// async Speaking module. Same shape and conventions as SPEAKING_CUES, with
// fresh everyday topics so learners can keep rotating through material without
// repeats:
//   • Part 1 — short interview questions on familiar, everyday topics.
//   • Part 2 — a cue card ("long turn"): one topic + bullet prompts, with the
//     standard 60s preparation / up-to-120s speaking timings.
//   • Part 3 — a two-way discussion: more abstract, opinion-led questions that
//     thematically extend a Part 2 topic (memory, photos and the past; older and
//     younger generations).
//
// Set 14 centres on two paired themes — language(s) and photographs / taking
// photos in Part 1, the cue cards "a photograph or picture you like" and "an
// interesting older person you know", and Part 3 discussions on memory, photos
// and the past, plus older and younger generations.
//
// All prompts are original and written for this app — they do not reproduce any
// official or third-party IELTS question bank. ids carry an `s14` marker so the
// coordinator can merge this set without colliding with the other cues.
// ────────────────────────────────────────────────────────────────────────────

import type { SpeakingCue } from '@/lib/ielts/types'

export const SPEAKING_SET_14: SpeakingCue[] = [
  // ─── Part 1 — Interview (everyday topics) ────────────────────────────────
  {
    id: 'sp1-s14-languages',
    part: 'speaking-part-1',
    title: 'Part 1 · Languages',
    prompts: [
      'How many languages can you speak, even just a little?',
      'Which language do you use most often in your daily life?',
      'Did you find it easy or hard to learn languages at school?',
      'Is there a language you would love to be able to speak fluently one day?',
      'Do you think your own language is difficult for foreigners to learn?',
    ],
  },
  {
    id: 'sp1-s14-photos',
    part: 'speaking-part-1',
    title: 'Part 1 · Photographs and taking photos',
    prompts: [
      'Do you enjoy taking photographs when you go somewhere new?',
      'What sort of things do you most like to photograph?',
      'Do you prefer taking photos with a phone or with a proper camera?',
      'Do you ever print your photos, or do you just keep them on a device?',
      'How often do you look back at old photographs of yourself?',
    ],
  },

  // ─── Part 2 — Long turn / cue card ───────────────────────────────────────
  {
    id: 'sp2-s14-photograph',
    part: 'speaking-part-2',
    title: 'Part 2 · A photograph or picture you like',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a photograph or picture that you really like.',
      'You should say:',
      'what the photograph or picture shows',
      'when and where you first saw it',
      'where you usually keep it or see it now',
      'and explain why you like this particular photograph or picture.',
    ],
  },
  {
    id: 'sp2-s14-older-person',
    part: 'speaking-part-2',
    title: 'Part 2 · An interesting older person you know',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe an interesting older person whom you know.',
      'You should say:',
      'who this person is and how you know them',
      'how old you think they are',
      'what sort of life they have led',
      'and explain why you find this older person so interesting.',
    ],
  },

  // ─── Part 3 — Two-way discussion (abstract, opinion-led) ─────────────────
  {
    id: 'sp3-s14-memory-past',
    part: 'speaking-part-3',
    title: 'Part 3 · Memory, photos and the past',
    prompts: [
      'Why do you think people are so keen to take photographs of important moments?',
      'Do you think photographs help us to remember the past more accurately, or can they distort it?',
      'Are some people simply better at remembering things than others, in your view?',
      'Has the habit of photographing everything changed the way people experience events?',
      'Do you think future generations will keep their memories in the same way we do now?',
    ],
  },
  {
    id: 'sp3-s14-generations',
    part: 'speaking-part-3',
    title: 'Part 3 · Older and younger generations',
    prompts: [
      'What can younger people learn from those who are much older than them?',
      'Do you think older and younger generations understand one another well these days?',
      'In what ways have the lives of young people changed compared with their grandparents?',
      'Should older people and younger people spend more time together? Why or why not?',
      'Do you think society listens enough to the views of its older members?',
    ],
  },
]

/** Find a Set 14 cue by id (used when restoring a chosen prompt from this set). */
export function findSet14Cue(id: string): SpeakingCue | undefined {
  return SPEAKING_SET_14.find((cue) => cue.id === id)
}
