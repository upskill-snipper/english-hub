// ─── IELTS General Training (GT) Writing prompts ────────────────────────────
// Wave 1 prompt bank for the AI-marked Writing module, General Training track.
//
// GT Writing differs from Academic:
//   • Task 1 is a LETTER (not a data description). The candidate responds to an
//     everyday situation by writing a letter that covers THREE bullet points.
//     The register varies by prompt - formal (to an official / a company),
//     semi-formal (to a landlord / a manager) or informal (to a friend). The
//     situation and the three bullets live inside `prompt`. minWords 150,
//     suggestedMinutes 20.
//   • Task 2 is an opinion / discussion essay, like Academic, but on more
//     everyday, general themes. minWords 250, suggestedMinutes 40.
//
// No image assets are needed for GT Task 1 (it is a letter, not a chart), so
// `imageSrc` / `imageAlt` are left undefined throughout.
//
// All content below is 100% original and written for IELTS GT preparation.
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const GT_WRITING_SET: WritingPrompt[] = [
  // ── Task 1 · A - FORMAL letter of complaint (to a company) ───────────────
  {
    id: 'gt-wt1-broken-appliance',
    task: 'writing-task-1',
    track: 'general',
    title: 'Complaint about a faulty washing machine',
    prompt: [
      'You recently bought a washing machine from a large electrical store, but it has stopped working properly only a few weeks after delivery.',
      '',
      'Write a letter to the store manager. In your letter:',
      '• explain when and where you bought the washing machine',
      '• describe the problems you have had with it',
      '• say what you would like the store to do about it',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Sir or Madam,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · B - FORMAL letter of request (to an official) ───────────────
  {
    id: 'gt-wt1-evening-classes',
    task: 'writing-task-1',
    track: 'general',
    title: 'Requesting information about evening courses',
    prompt: [
      'You have seen an advertisement for evening courses at a local college and you would like to enrol on one of them.',
      '',
      'Write a letter to the college. In your letter:',
      '• explain which course you are interested in and why',
      '• ask for details about the timetable and the cost',
      '• ask what qualifications or experience you need to join',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Sir or Madam,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · C - SEMI-FORMAL letter (to a landlord) ──────────────────────
  {
    id: 'gt-wt1-flat-repairs',
    task: 'writing-task-1',
    track: 'general',
    title: 'Reporting a problem to your landlord',
    prompt: [
      'You are renting a flat, and the heating system has broken down during a period of cold weather. Your landlord lives nearby and has dealt with repairs for you before.',
      '',
      'Write a letter to your landlord. In your letter:',
      '• describe the problem with the heating',
      '• explain how it is affecting you and the other people in the flat',
      '• suggest what should be done and when',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Mr Hawkins,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · D - INFORMAL letter (to a friend) ───────────────────────────
  {
    id: 'gt-wt1-visit-friend',
    task: 'writing-task-1',
    track: 'general',
    title: 'Inviting a friend to stay with you',
    prompt: [
      'A close friend of yours has just moved to a city far away, and you have not seen each other for several months. You would like to invite them to come and stay with you for a weekend.',
      '',
      'Write a letter to your friend. In your letter:',
      '• explain why you would like them to visit',
      '• suggest some things you could do together while they are there',
      '• tell them how to travel to your home',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Sam,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 2 · A - opinion (agree / disagree) ──────────────────────────────
  {
    id: 'gt-wt2-mobile-phones',
    task: 'writing-task-2',
    track: 'general',
    title: 'Children and mobile phones',
    prompt: [
      'These days, many young children own a mobile phone. Some people believe this is a positive development, while others think children are too young to have one.',
      '',
      'Discuss both these views and give your own opinion.',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── Task 2 · B - problem / solution + opinion ────────────────────────────
  {
    id: 'gt-wt2-fast-food',
    task: 'writing-task-2',
    track: 'general',
    title: 'The popularity of fast food',
    prompt: [
      'In many countries, more and more people are eating fast food instead of preparing meals at home.',
      '',
      'Why do you think this is happening, and what effects does it have on people and their families?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── Task 2 · C - advantages / disadvantages ──────────────────────────────
  {
    id: 'gt-wt2-online-shopping',
    task: 'writing-task-2',
    track: 'general',
    title: 'Shopping online instead of in stores',
    prompt: [
      'A growing number of people now do most of their shopping on the internet rather than visiting shops in person.',
      '',
      'Do the advantages of shopping online outweigh the disadvantages?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },
]
