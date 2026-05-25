// ─── IELTS Speaking cues · Set 11 (Academic, Parts 1-3) ────────────────────
// An eleventh batch of original IELTS-preparation practice prompts for the
// async Speaking module. Same shape and conventions as the other sets, with a
// fresh, balanced rotation of six cues so learners never hit repeats:
//   • Part 1 - short interview questions on familiar, everyday topics
//     (weather & seasons, shopping habits).
//   • Part 2 - a cue card ("long turn"): one topic + bullet prompts, with the
//     standard 60s preparation / up-to-120s speaking timings (a piece of
//     equipment or technology you use often, a decision that turned out well).
//   • Part 3 - a two-way discussion: more abstract, opinion-led questions that
//     thematically extend the Part 2 topics (technology & work, decisions in
//     society - how people and communities make choices).
//
// All prompts are original and written for this app - they do not reproduce any
// official or third-party IELTS question bank. ids carry an `s11` marker (e.g.
// `sp1-s11-weather`) so the aggregator can merge this set without colliding
// with any other cue file.
// ────────────────────────────────────────────────────────────────────────────

import type { SpeakingCue } from '@/lib/ielts/types'

export const SPEAKING_SET_11: SpeakingCue[] = [
  // ─── Part 1 - Interview (everyday topics) ────────────────────────────────
  {
    id: 'sp1-s11-weather',
    part: 'speaking-part-1',
    title: 'Part 1 · Weather and seasons',
    prompts: [
      'What kind of weather do you enjoy the most?',
      'Which season of the year is your favourite, and why?',
      'Does the weather where you live change a lot through the year?',
      'How does a rainy day usually affect what you decide to do?',
      'Do you check the weather forecast before you go out?',
    ],
  },
  {
    id: 'sp1-s11-shopping',
    part: 'speaking-part-1',
    title: 'Part 1 · Shopping habits',
    prompts: [
      'Do you enjoy shopping, or do you find it a bit of a chore?',
      'Do you prefer shopping in actual shops or buying things online?',
      'How often do you go shopping for things other than food?',
      'Do you usually plan your purchases or buy things on the spur of the moment?',
      'Who do you most like to go shopping with?',
    ],
  },

  // ─── Part 2 - Long turn / cue card ───────────────────────────────────────
  {
    id: 'sp2-s11-equipment',
    part: 'speaking-part-2',
    title: 'Part 2 · A piece of equipment or technology you use often',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a piece of equipment or technology that you use often.',
      'You should say:',
      'what the piece of equipment is and when you got it',
      'how often you use it and where',
      'what you mainly use it for',
      'and explain why this piece of equipment is so useful to you.',
    ],
  },
  {
    id: 'sp2-s11-good-decision',
    part: 'speaking-part-2',
    title: 'Part 2 · A decision you made that turned out well',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a decision you made that turned out well.',
      'You should say:',
      'what the decision was and when you made it',
      'why you needed to make this decision',
      'how you went about deciding what to do',
      'and explain why you think the decision turned out so well.',
    ],
  },

  // ─── Part 3 - Two-way discussion (abstract, opinion-led) ─────────────────
  {
    id: 'sp3-s11-tech-work',
    part: 'speaking-part-3',
    title: 'Part 3 · Technology and work',
    prompts: [
      'In what ways has technology changed the way people do their jobs?',
      'Do you think new technology at work creates more jobs or removes them?',
      'Should employers be responsible for training staff to use new tools?',
      'Are there any kinds of work that you think machines should never take over?',
      'How do you think the workplace will be different twenty years from now?',
    ],
  },
  {
    id: 'sp3-s11-decisions',
    part: 'speaking-part-3',
    title: 'Part 3 · Decisions in society',
    prompts: [
      'How do you think large communities usually reach important decisions?',
      'Is it better for big decisions to be made by experts or by ordinary people?',
      'Why do you think some people find it so hard to make up their minds?',
      'Do you think people make worse decisions when they are given too many choices?',
      'How much should the opinions of others influence the choices we make?',
    ],
  },
]

/** Find a Set 11 cue by id (used when restoring a chosen prompt from this set). */
export function findSet11Cue(id: string): SpeakingCue | undefined {
  return SPEAKING_SET_11.find((cue) => cue.id === id)
}
