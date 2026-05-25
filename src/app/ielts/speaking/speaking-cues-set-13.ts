// ─── IELTS Speaking cues · Set 13 (Academic, Parts 1-3) ────────────────────
// A thirteenth batch of original IELTS-preparation practice prompts for the
// async Speaking module. Same shape and conventions as SPEAKING_CUES, with
// fresh everyday topics so learners can keep rotating through material without
// repeats:
//   • Part 1 - short interview questions on familiar, everyday topics.
//   • Part 2 - a cue card ("long turn"): one topic + bullet prompts, with the
//     standard 60s preparation / up-to-120s speaking timings.
//   • Part 3 - a two-way discussion: more abstract, opinion-led questions that
//     thematically extend a Part 2 topic (consumer culture & fashion,
//     traditions & celebrations in society).
//
// Topics here are deliberately distinct from the base cues and the earlier
// sets. Set 13 covers clothes & fashion and festivals & celebrations in Part 1,
// plus cue cards on a gift you gave or received and a piece of useful advice
// someone gave you, then widens out in Part 3 to consumer culture & fashion and
// the role of traditions & celebrations in society.
//
// All prompts are original and written for this app - they do not reproduce any
// official or third-party IELTS question bank. ids use an `s13` marker so the
// coordinator can merge this set without colliding with the other cues.
// ────────────────────────────────────────────────────────────────────────────

import type { SpeakingCue } from '@/lib/ielts/types'

export const SPEAKING_SET_13: SpeakingCue[] = [
  // ─── Part 1 - Interview (everyday topics) ────────────────────────────────
  {
    id: 'sp1-s13-clothes',
    part: 'speaking-part-1',
    title: 'Part 1 · Clothes and fashion',
    prompts: [
      'What kind of clothes do you feel most comfortable wearing day to day?',
      'Do you tend to dress differently for work or study than you do at home?',
      'How much does the weather affect what you choose to wear?',
      'Do you enjoy shopping for new clothes, or do you find it a bit of a chore?',
      'Have the sorts of clothes you like changed much since you were younger?',
    ],
  },
  {
    id: 'sp1-s13-festivals',
    part: 'speaking-part-1',
    title: 'Part 1 · Festivals and celebrations',
    prompts: [
      'Which festival or celebration is the most important where you come from?',
      'How do you and your family usually take part in it?',
      'Do you prefer festivals that are lively and noisy or ones that are calmer?',
      'Is there any special food that people tend to eat at these times?',
      'Has the way people celebrate festivals changed at all in recent years?',
    ],
  },

  // ─── Part 2 - Long turn / cue card ───────────────────────────────────────
  {
    id: 'sp2-s13-gift',
    part: 'speaking-part-2',
    title: 'Part 2 · A gift you gave or received',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a gift you once gave to someone or received from someone.',
      'You should say:',
      'what the gift was and when this happened',
      'who gave it or who you gave it to',
      'why that particular gift was chosen',
      'and explain why this gift was meaningful to you.',
    ],
  },
  {
    id: 'sp2-s13-advice',
    part: 'speaking-part-2',
    title: 'Part 2 · A piece of useful advice someone gave you',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a piece of useful advice that someone once gave you.',
      'You should say:',
      'what the advice was and when you were given it',
      'who gave you this advice',
      'how you acted on it afterwards',
      'and explain why you found this advice so useful.',
    ],
  },

  // ─── Part 3 - Two-way discussion (abstract, opinion-led) ─────────────────
  {
    id: 'sp3-s13-consumer-culture',
    part: 'speaking-part-3',
    title: 'Part 3 · Consumer culture and fashion',
    prompts: [
      'Why do you think fashions and trends change so quickly nowadays?',
      'Do you think people buy more clothes than they actually need? Why?',
      'How much are people’s buying choices influenced by advertising and celebrities?',
      'Is it possible for someone to express who they are through what they wear?',
      'Do you think the pressure to keep up with the latest styles is good or bad for society?',
      'How might the way people shop for clothes change in the years to come?',
    ],
  },
  {
    id: 'sp3-s13-traditions',
    part: 'speaking-part-3',
    title: 'Part 3 · Traditions and celebrations in society',
    prompts: [
      'Why do you think shared celebrations are so important to most societies?',
      'Do you think traditional festivals are losing their meaning in modern life? Why?',
      'How do large public celebrations help to bring people together?',
      'Should governments spend public money on supporting cultural festivals?',
      'Do you think it matters if younger people no longer take part in old traditions?',
      'In what ways might celebrations in your country be different for the next generation?',
    ],
  },
]

/** Find a Set 13 cue by id (used when restoring a chosen prompt from this set). */
export function findSet13Cue(id: string): SpeakingCue | undefined {
  return SPEAKING_SET_13.find((cue) => cue.id === id)
}
