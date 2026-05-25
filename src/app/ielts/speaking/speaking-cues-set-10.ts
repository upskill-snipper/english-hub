// ─── IELTS Speaking cues · Set 10 (Academic, Parts 1–3) ────────────────────
// A tenth batch of original IELTS-preparation practice prompts for the async
// Speaking module. Same shape and conventions as SPEAKING_CUES, with fresh
// everyday topics so learners can keep rotating through material without
// repeats:
//   • Part 1 — short interview questions on familiar, everyday topics.
//   • Part 2 — a cue card ("long turn"): one topic + bullet prompts, with the
//     standard 60s preparation / up-to-120s speaking timings.
//   • Part 3 — a two-way discussion: more abstract, opinion-led questions that
//     thematically extend a Part 2 topic (the natural world & getting outdoors,
//     passing skills between generations, travel & short breaks, and community &
//     helping others locally).
//
// Topics here are deliberately distinct from the base cues and Sets 2–9, which
// already cover home/area, daily routine, food/cooking, weather, transport,
// hometown, music, weekends, technology/gadgets, shopping, books/reading, sport,
// sleep, clothes, the internet, festivals, animals/pets, neighbours, languages,
// phones/messaging, workspaces, holidays, news, parks/gardens, films, money,
// favourite time of day, childhood, the sea & water, indoor hobbies and special
// days — plus a long list of cue cards (skills, journeys, websites, people
// admired, photographs, outdoor places, talents, events, decisions, hobbies,
// helping someone, books, gifts, relaxing places, advice, older people, goals,
// traditions, useful objects, news, buildings, meals, teachers, cities, problems,
// possessions, wild animals and achievements). Set 10 instead covers colours,
// keeping in touch with friends, public libraries and plants & flowers, plus cue
// cards on a place in nature, a skill learned from a family member, a short trip
// and a person who helps others in the community.
//
// All prompts are original and written for this app — they do not reproduce any
// official or third-party IELTS question bank. ids use the `sp-010-` prefix so
// the coordinator can merge this set without colliding with the other cues.
// ────────────────────────────────────────────────────────────────────────────

import type { SpeakingCue } from '@/lib/ielts/types'

export const SPEAKING_SET_10: SpeakingCue[] = [
  // ─── Part 1 — Interview (everyday topics) ────────────────────────────────
  {
    id: 'sp-010-p1-colours',
    part: 'speaking-part-1',
    title: 'Part 1 · Colours',
    prompts: [
      'What is your favourite colour, and has it always been the same?',
      'Are there any colours that you tend to avoid wearing?',
      'Do you think the colours in a room can affect the way people feel?',
      'When you buy something like a phone or a bag, does its colour matter to you?',
      'Are certain colours seen as lucky or special where you come from?',
      'Has your taste in colours changed at all as you have got older?',
    ],
  },
  {
    id: 'sp-010-p1-keeping-in-touch',
    part: 'speaking-part-1',
    title: 'Part 1 · Keeping in touch with friends',
    prompts: [
      'How do you usually keep in touch with your closest friends?',
      'Do you prefer to chat by message or to actually meet up in person?',
      'How often do you manage to see your friends these days?',
      'Is it easy for you to stay close to friends who live far away?',
      'Have you ever lost touch with a friend and then reconnected later on?',
      'Do you think it is harder to keep in touch with people as you get busier?',
    ],
  },
  {
    id: 'sp-010-p1-libraries',
    part: 'speaking-part-1',
    title: 'Part 1 · Public libraries',
    prompts: [
      'Did you go to a library much when you were growing up?',
      'What do you think most people use their local library for nowadays?',
      'Do you prefer studying or reading in a library or somewhere at home?',
      'Is there a good public library near where you live?',
      'How do you think libraries could attract more visitors these days?',
      'Would you say libraries are still important now that so much is online?',
    ],
  },
  {
    id: 'sp-010-p1-plants-and-flowers',
    part: 'speaking-part-1',
    title: 'Part 1 · Plants and flowers',
    prompts: [
      'Do you keep any plants or flowers in your home?',
      'Did anyone in your family enjoy gardening when you were younger?',
      'How do you feel when you receive flowers as a gift?',
      'Are you any good at looking after plants, or do they tend to wither?',
      'Do you think having a few plants around makes a place feel nicer?',
      'Is giving flowers a common thing to do on special occasions where you live?',
    ],
  },

  // ─── Part 2 — Long turn / cue card ───────────────────────────────────────
  {
    id: 'sp-010-p2-place-in-nature',
    part: 'speaking-part-2',
    title: 'Part 2 · A place in nature you like to spend time',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a place in nature that you like to spend time in.',
      'You should say:',
      'where this place is and what it looks like',
      'how often you go there and who you go with',
      'what you usually do when you are there',
      'and explain why you enjoy spending time in this place.',
    ],
  },
  {
    id: 'sp-010-p2-skill-from-family',
    part: 'speaking-part-2',
    title: 'Part 2 · A skill you learned from a family member',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a skill that you learned from a member of your family.',
      'You should say:',
      'what the skill is and which family member taught you',
      'how old you were when you learned it',
      'how they went about teaching you',
      'and explain how you feel about having learned this skill from them.',
    ],
  },
  {
    id: 'sp-010-p2-short-trip',
    part: 'speaking-part-2',
    title: 'Part 2 · A short trip or day out you enjoyed',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a short trip or day out that you really enjoyed.',
      'You should say:',
      'where you went and how you got there',
      'who you went with and when it took place',
      'what you did over the course of the day',
      'and explain why you enjoyed this trip so much.',
    ],
  },
  {
    id: 'sp-010-p2-community-helper',
    part: 'speaking-part-2',
    title: 'Part 2 · A person who helps others in your community',
    prepSeconds: 60,
    speakSeconds: 120,
    prompts: [
      'Describe a person who does a lot to help others in your local community.',
      'You should say:',
      'who this person is and how you know about them',
      'what kind of help they give to people',
      'how others in the community respond to them',
      'and explain why you think this person is so valuable to the community.',
    ],
  },

  // ─── Part 3 — Two-way discussion (abstract, opinion-led) ─────────────────
  {
    id: 'sp-010-p3-natural-world-outdoors',
    part: 'speaking-part-3',
    title: 'Part 3 · The natural world and getting outdoors',
    prompts: [
      'Why do you think spending time outdoors is good for people?',
      'Do you think people today spend enough time out in nature? Why or why not?',
      'How can towns and cities make it easier for residents to enjoy green spaces?',
      'Do you think children benefit from being out in nature more than adults do?',
      'Whose responsibility should it be to look after natural areas — individuals or the government?',
      'Do you think attitudes towards protecting the countryside have changed over the years?',
    ],
  },
  {
    id: 'sp-010-p3-passing-on-skills',
    part: 'speaking-part-3',
    title: 'Part 3 · Passing skills between generations',
    prompts: [
      'Why do you think some skills are passed down through families?',
      'Is it better to learn a practical skill from a relative or from a professional? Why?',
      'Do you think young people today are still keen to learn skills from older relatives?',
      'What kinds of skills are most likely to be lost if they are not passed on?',
      'How can families encourage younger members to take an interest in older skills?',
      'Do you think schools or families are better placed to teach everyday life skills?',
    ],
  },
  {
    id: 'sp-010-p3-travel-short-breaks',
    part: 'speaking-part-3',
    title: 'Part 3 · Travel and short breaks',
    prompts: [
      'Why do you think short trips have become so popular with many people?',
      'Do you think a short break can be just as refreshing as a long holiday? Why?',
      'What are the advantages of exploring places close to home rather than travelling far away?',
      'Do you think people plan their days out more carefully than they used to?',
      'How might the way people take short breaks change in the future?',
      'Do you think there are any downsides to so many people taking frequent trips?',
    ],
  },
  {
    id: 'sp-010-p3-community-helping-locally',
    part: 'speaking-part-3',
    title: 'Part 3 · Community and helping others locally',
    prompts: [
      'Why do you think some people give up their time to help others in their area?',
      'Do you think people feel as connected to their local community as they did in the past?',
      'What sorts of local problems can ordinary people help to solve themselves?',
      'How can communities encourage more people to volunteer their time?',
      'Do you think helping others should be taught to children at school? Why or why not?',
      'What might a neighbourhood lose if nobody was willing to help one another?',
    ],
  },
]

/** Find a Set 10 cue by id (used when restoring a chosen prompt from this set). */
export function findSet10Cue(id: string): SpeakingCue | undefined {
  return SPEAKING_SET_10.find((cue) => cue.id === id)
}
