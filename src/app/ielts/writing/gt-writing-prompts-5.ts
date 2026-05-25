// ─── IELTS General Training (GT) Writing prompts · Set 5 ────────────────────
// Wave 5 prompt bank for the AI-marked Writing module, General Training track.
//
// GT Writing differs from Academic:
//   • Task 1 is a LETTER (not a data description). The candidate responds to an
//     everyday situation by writing a letter that covers THREE bullet points.
//     The register varies by prompt - formal (to a company / a council),
//     semi-formal (to a club secretary / a colleague) or informal (to a
//     friend). The situation and the three bullets live inside `prompt`.
//     minWords 150, suggestedMinutes 20.
//   • Task 2 is an opinion / discussion essay, like Academic, but on more
//     everyday, general themes. minWords 250, suggestedMinutes 40.
//
// No image assets are needed for GT Task 1 (it is a letter, not a chart), so
// `chart` / `imageSrc` / `imageAlt` are left undefined throughout.
//
// All content below is 100% original and distinct from GT_WRITING_SET (set 1),
// GT_WRITING_SET_2 (set 2), GT_WRITING_SET_3 (set 3) and GT_WRITING_SET_4
// (set 4).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const GT_WRITING_SET_5: WritingPrompt[] = [
  // ── Task 1 · A - FORMAL letter of complaint (about a local service) ───────
  {
    id: 'gt5-wt1-bus-service',
    task: 'writing-task-1',
    track: 'general',
    title: 'Complaint about a local bus service',
    prompt: [
      'The bus service that you rely on to get to work has become very unreliable in recent weeks, with buses arriving late or not turning up at all.',
      '',
      'Write a letter to the bus company. In your letter:',
      '• explain which route you use and how often you travel on it',
      '• describe the problems you have experienced with the service',
      '• say what you would like the company to do to improve it',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Sir or Madam,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · B - FORMAL letter of request (to the local council) ──────────
  {
    id: 'gt5-wt1-pedestrian-crossing',
    task: 'writing-task-1',
    track: 'general',
    title: 'Requesting a new pedestrian crossing',
    prompt: [
      'There is a busy road near your home that many children cross on their way to school, but there is no safe place to cross it. You would like the local council to install a pedestrian crossing.',
      '',
      'Write a letter to the local council. In your letter:',
      '• explain where the road is and who uses it',
      '• describe why crossing the road is dangerous at the moment',
      '• say what you would like the council to do and why it is urgent',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Sir or Madam,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · C - SEMI-FORMAL letter (request to a club secretary) ─────────
  {
    id: 'gt5-wt1-lost-property',
    task: 'writing-task-1',
    track: 'general',
    title: 'Asking a club secretary about a lost item',
    prompt: [
      'You are a member of a local photography club. After the last meeting at the club’s hall, you realised that you had left behind a bag containing some equipment.',
      '',
      'Write a letter to the club secretary. In your letter:',
      '• describe the bag and the items that were inside it',
      '• explain where and when you think you left it',
      '• ask the secretary to check and say how they can return it to you',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Mrs Bennett,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · D - INFORMAL letter (arranging a visit with a friend) ────────
  {
    id: 'gt5-wt1-visit-your-town',
    task: 'writing-task-1',
    track: 'general',
    title: 'Arranging to visit a friend’s town',
    prompt: [
      'You are going to be in the town where an old friend lives for a few days next month, and you would like to meet up with them while you are there.',
      '',
      'Write a letter to your friend. In your letter:',
      '• tell them why you will be visiting their town and for how long',
      '• suggest a day and a place where you could meet',
      '• ask them to recommend things you could see and do in the town',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Theo,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 2 · A - opinion (agree / disagree) ───────────────────────────────
  {
    id: 'gt5-wt2-advertising-children',
    task: 'writing-task-2',
    track: 'general',
    title: 'Advertising aimed at children',
    prompt: [
      'Some people believe that advertising aimed directly at children should be banned, because young children cannot judge what is good for them.',
      '',
      'To what extent do you agree or disagree with this view?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── Task 2 · B - problem / solution ───────────────────────────────────────
  {
    id: 'gt5-wt2-local-shops-closing',
    task: 'writing-task-2',
    track: 'general',
    title: 'Small local shops closing down',
    prompt: [
      'In many towns, small local shops are closing down as more people choose to buy from large supermarkets and shopping centres.',
      '',
      'Why do you think this is happening, and what could be done to help small local shops survive?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── Task 2 · C - discussion (both views + opinion) ────────────────────────
  {
    id: 'gt5-wt2-screens-vs-outdoors',
    task: 'writing-task-2',
    track: 'general',
    title: 'Free time: screens or the outdoors',
    prompt: [
      'These days, many people spend most of their free time looking at screens, such as phones and televisions. Some people think this is harmless, while others believe people should spend more of their free time outdoors.',
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

  // ── Task 2 · D - advantages / disadvantages ───────────────────────────────
  {
    id: 'gt5-wt2-recycling-rules',
    task: 'writing-task-2',
    track: 'general',
    title: 'Rules that require households to recycle',
    prompt: [
      'In some places, households are now required by law to sort their rubbish and recycle as much of it as possible.',
      '',
      'Do the advantages of making recycling compulsory for households outweigh the disadvantages?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },
]
