// ─── IELTS General Training (GT) Writing prompts · Set 6 ────────────────────
// Wave 6 prompt bank for the AI-marked Writing module, General Training track.
//
// GT Writing differs from Academic:
//   • Task 1 is a LETTER (not a data description). The candidate responds to an
//     everyday situation by writing a letter that covers THREE bullet points.
//     The register varies by prompt - formal (to a manager / a company),
//     semi-formal, or informal (to a neighbour / friend). The situation and the
//     three bullets live inside `prompt`.
//     minWords 150, suggestedMinutes 20.
//   • Task 2 is an opinion / discussion essay, like Academic, but on more
//     everyday, general themes. minWords 250, suggestedMinutes 40.
//
// No image assets are needed for GT Task 1 (it is a letter, not a chart), so
// `chart` / `imageSrc` / `imageAlt` are left undefined throughout.
//
// All content below is 100% original and distinct from the earlier GT sets.
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const GT_WRITING_SET_6: WritingPrompt[] = [
  // ── Task 1 · A - INFORMAL letter to a neighbour about noise ────────────────
  {
    id: 'wt1-gt6-neighbour-noise',
    task: 'writing-task-1',
    track: 'general',
    title: 'Letter to a neighbour about noise',
    prompt: [
      'A family who live next door to you have recently begun playing loud music late into the night, and it is making it hard for you to sleep.',
      '',
      'Write a letter to your neighbour. In your letter:',
      '• explain how the noise is affecting you and your household',
      '• describe when the problem usually happens',
      '• suggest a friendly way the two of you could sort it out',
      '',
      'Write the letter in an informal, friendly tone.',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Sam,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · B - FORMAL letter to a manager requesting time off ────────────
  {
    id: 'wt1-gt6-time-off',
    task: 'writing-task-1',
    track: 'general',
    title: 'Requesting time off or flexible hours',
    prompt: [
      'Because of a change in your personal circumstances, you need to take some time away from work or to change the hours that you work for a while.',
      '',
      'Write a letter to your manager. In your letter:',
      '• explain why you need time off or more flexible working hours',
      '• say exactly what change to your schedule you are asking for',
      '• describe how your work could still be covered while you are away',
      '',
      'Write the letter in a formal tone.',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Ms Delgado,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · C - FORMAL complaint to a company about a faulty product ──────
  {
    id: 'wt1-gt6-faulty-product',
    task: 'writing-task-1',
    track: 'general',
    title: 'Complaint about a faulty product bought online',
    prompt: [
      'You recently bought an item from an online shop, but when it arrived it did not work properly.',
      '',
      'Write a letter to the company. In your letter:',
      '• give details of the item you ordered and when it arrived',
      '• explain what is wrong with it',
      '• say what you would like the company to do about the problem',
      '',
      'Write the letter in a formal tone.',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Sir or Madam,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 2 · A - opinion (agree / disagree) ───────────────────────────────
  {
    id: 'wt2-gt6-community-work',
    task: 'writing-task-2',
    track: 'general',
    title: 'Unpaid community work before paid jobs',
    prompt: [
      'Some people believe that young people should spend a period of time doing unpaid work for their community before they begin their first paid job.',
      '',
      'To what extent do you agree or disagree?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── Task 2 · B - two-part direct question ─────────────────────────────────
  {
    id: 'wt2-gt6-family-meals',
    task: 'writing-task-2',
    track: 'general',
    title: 'Families eating meals together',
    prompt: [
      'In some families, everyone sits down to eat a meal together, while in others people rarely do so because of their busy modern lives.',
      '',
      'How important is it for families to eat together, and do you think modern lifestyles make this too difficult?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── Task 2 · C - problem and solution ─────────────────────────────────────
  {
    id: 'wt2-gt6-car-use',
    task: 'writing-task-2',
    track: 'general',
    title: 'Relying on cars for short journeys',
    prompt: [
      'These days, many people choose to drive even when they are only travelling a short distance that they could easily walk or cycle.',
      '',
      'Why do so many people rely on their cars for short journeys, and what could be done to change this habit?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },
]
