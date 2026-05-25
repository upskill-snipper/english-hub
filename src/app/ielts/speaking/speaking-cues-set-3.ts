// ─── IELTS Speaking cues · Set 3 (Academic, Parts 1-3) ─────────────────────
// A third batch of original IELTS-preparation practice prompts for the async
// Speaking module. Same shape and conventions as SPEAKING_CUES, with fresh
// everyday topics so learners can rotate through more material without repeats:
//   • Part 1 - short interview questions on familiar, everyday topics.
//   • Part 2 - a cue card ("long turn"): one topic + bullet prompts, with the
//     standard 60s preparation / up-to-120s speaking timings.
//   • Part 3 - a two-way discussion: more abstract, opinion-led questions that
//     thematically extend a Part 2 topic (inspiration & role models, travel &
//     tourism, learning & skills, technology & society).
//
// All prompts are original and written for this app - they do not reproduce any
// official or third-party IELTS question bank. ids use the `sp-003-` prefix so
// the coordinator can merge this set without colliding with the other cues.
// ────────────────────────────────────────────────────────────────────────────

import type { SpeakingCue } from '@/lib/ielts/types'

export const SPEAKING_SET_3: SpeakingCue[] = [
  // ─── Part 1 - Interview (everyday topics) ────────────────────────────────
  {
    id: 'sp-003-p1-hometown',
    part: 'speaking-part-1',
    title: 'Part 1 · Your hometown',
    prompts: [
      'Where is your hometown, and how would you describe it to someone who has never been there?',
      'What is your hometown best known for?',
      'Is your hometown a good place for young people to grow up? Why or why not?',
      'Have you noticed many changes in your hometown over the years?',
      'Would you recommend your hometown to a visitor? What should they see?',
      'Do you think you will always feel attached to your hometown?',
    ],
  },
  {
    id: 'sp-003-p1-music',
    part: 'speaking-part-1',
    title: 'Part 1 · Music',
    prompts: [
      'What kind of music do you enjoy listening to the most?',
      'When during the day do you usually listen to music?',
      'Has your taste in music changed since you were younger?',
      'Did you ever learn to play a musical instrument at school?',
      'Do you prefer listening to music alone or going to live concerts?',
      'Is there a type of music you find it hard to enjoy?',
    ],
  },
  {
    id: 'sp-003-p1-weekends',
    part: 'speaking-part-1',
    title: 'Part 1 · Weekends',
    prompts: [
      'How do you usually spend your weekends?',
      'Do you prefer to stay at home or go out at the weekend?',
      'Are your weekends busy or fairly relaxing?',
      'Has the way you spend your weekends changed recently?',
      'Is there anything you wish you had more time to do at the weekend?',
    ],
  },
  {
    id: 'sp-003-p1-technology',
    part: 'speaking-part-1',
    title: 'Part 1 · Technology and gadgets',
    prompts: [
      'Which electronic device do you use most often in your daily life?',
      'How would your day be different without your phone?',
      'Are you usually quick to try out new technology, or do you wait a while?',
      'Do you think you spend too much time looking at screens?',
      'Is there a gadget you would really like to own in the future?',
    ],
  },

  // ─── Part 2 - Long turn / cue card ───────────────────────────────────────
  {
    id: 'sp-003-p2-inspiring-person',
    part: 'speaking-part-2',
    title: 'Part 2 · A person who inspired you',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a person who has inspired you to do something or to change in some way.',
      'You should say:',
      'who this person is and how you came to know about them',
      'what they did or said that inspired you',
      'how your life or your thinking changed as a result',
      'and explain why you found this person so inspiring.',
    ],
  },
  {
    id: 'sp-003-p2-place-to-visit',
    part: 'speaking-part-2',
    title: 'Part 2 · A place you would like to visit',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a place in another part of the world that you would like to visit one day.',
      'You should say:',
      'where this place is and what it is like',
      'how you first heard about it',
      'what you would do or see while you were there',
      'and explain why you would especially like to visit this place.',
    ],
  },
  {
    id: 'sp-003-p2-talent-to-develop',
    part: 'speaking-part-2',
    title: 'Part 2 · A talent or ability you would like to develop',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a talent or ability that you would like to develop in the future.',
      'You should say:',
      'what the talent or ability is',
      'how you would go about developing it',
      'how much time you think it would take to get good at it',
      'and explain why you would like to develop this particular ability.',
    ],
  },
  {
    id: 'sp-003-p2-exciting-event',
    part: 'speaking-part-2',
    title: 'Part 2 · An exciting event you attended',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe an exciting event that you attended, such as a festival, concert or celebration.',
      'You should say:',
      'what the event was and where it took place',
      'who you went with and how you got there',
      'what happened during the event',
      'and explain why you found this event so exciting.',
    ],
  },

  // ─── Part 3 - Two-way discussion (abstract, opinion-led) ─────────────────
  {
    id: 'sp-003-p3-inspiration-role-models',
    part: 'speaking-part-3',
    title: 'Part 3 · Inspiration and role models',
    prompts: [
      'Why do you think people are drawn to having role models in their lives?',
      'Do you think celebrities make good role models for young people? Why or why not?',
      'How important is it for children to have someone to look up to as they grow up?',
      'Is it better to be inspired by people you actually know or by famous figures? Why?',
      'Do you think the kinds of people society admires have changed over time?',
      'Can ordinary people inspire others just as much as well-known people can?',
    ],
  },
  {
    id: 'sp-003-p3-travel-tourism',
    part: 'speaking-part-3',
    title: 'Part 3 · Travel and tourism',
    prompts: [
      'Why do you think travelling to other countries has become so popular?',
      'What can people learn from visiting places that are very different from their own?',
      'Do you think tourism always benefits the places that tourists visit? Why or why not?',
      'How has the way people plan and book their travel changed in recent years?',
      'Should there be limits on the number of tourists allowed to visit popular sites?',
      'Do you think people will travel more or less in the future? Why?',
    ],
  },
  {
    id: 'sp-003-p3-learning-skills',
    part: 'speaking-part-3',
    title: 'Part 3 · Learning and developing skills',
    prompts: [
      'Why do you think some people find it easier to learn new skills than others?',
      'Is natural talent more important than hard work when developing an ability? Why?',
      'Do you think people should keep learning new things throughout their lives?',
      'How can parents encourage their children to develop their talents?',
      'Are some skills becoming less useful because of modern technology?',
      'What might motivate an adult to take up a completely new skill?',
    ],
  },
  {
    id: 'sp-003-p3-technology-society',
    part: 'speaking-part-3',
    title: 'Part 3 · Technology and society',
    prompts: [
      'In what ways has technology changed the way people spend their free time?',
      'Do you think new technology brings people closer together or pushes them apart?',
      'How has technology affected the kinds of jobs that are available to people?',
      'Should there be more rules about how much technology children are allowed to use? Why?',
      'What are the risks of a society depending too heavily on technology?',
      'How do you think everyday technology will be different for the next generation?',
    ],
  },
]

/** Find a Set 3 cue by id (used when restoring a chosen prompt from this set). */
export function findSet3Cue(id: string): SpeakingCue | undefined {
  return SPEAKING_SET_3.find((cue) => cue.id === id)
}
