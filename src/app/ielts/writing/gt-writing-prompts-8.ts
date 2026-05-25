// ─── IELTS General Training (GT) Writing prompts · Set 8 ────────────────────
// Wave 8 prompt bank for the AI-marked Writing module, General Training track.
//
// GT Writing differs from Academic:
//   • Task 1 is a LETTER (not a data description). The candidate responds to an
//     everyday situation by writing a letter that covers THREE bullet points.
//     The register varies by prompt - formal (a complaint to a hotel, a repair
//     request to a landlord) or semi-formal/informal (helping a colleague plan
//     a farewell). The situation and the three bullets live inside `prompt`.
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

export const GT_WRITING_SET_8: WritingPrompt[] = [
  // ── Task 1 · A - FORMAL letter of complaint to a hotel ────────────────────
  {
    id: 'wt1-gt8-hotel-complaint',
    task: 'writing-task-1',
    track: 'general',
    title: 'Complaint to a hotel about a stay',
    prompt: [
      'You recently stayed at a hotel for a short holiday. Several things went wrong during your stay, and the hotel did not deal with the problems while you were there.',
      '',
      'Write a letter to the manager of the hotel. In your letter:',
      '• give the details of your booking and when you stayed',
      '• describe the problems you experienced during your stay',
      '• say what you would like the manager to do about it',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Sir or Madam,',
      '',
      'Use a formal tone.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · B - SEMI-FORMAL letter to a colleague (farewell event) ───────
  {
    id: 'wt1-gt8-farewell-event',
    task: 'writing-task-1',
    track: 'general',
    title: 'Helping a colleague plan a farewell',
    prompt: [
      'A co-worker you both know well is leaving your workplace soon. A colleague has offered to help you arrange a farewell event for them, and you are writing back to organise it together.',
      '',
      'Write a letter to your colleague. In your letter:',
      '• suggest when and where the farewell event could be held',
      '• explain which tasks you would like your colleague to take care of',
      '• say what you plan to organise yourself',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Priya,',
      '',
      'Use a semi-formal or informal tone.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · C - FORMAL letter to a landlord requesting repairs ───────────
  {
    id: 'wt1-gt8-repairs-request',
    task: 'writing-task-1',
    track: 'general',
    title: 'Requesting repairs from a landlord',
    prompt: [
      'You rent a home from a landlord. Some things in the property have stopped working properly and now need to be repaired.',
      '',
      'Write a letter to your landlord. In your letter:',
      '• explain which things in the home need to be repaired',
      '• describe how these problems are affecting your daily life',
      '• ask the landlord to arrange the repairs and say when you are available',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Mr Whitfield,',
      '',
      'Use a formal tone.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 2 · A - opinion (agree / disagree) ───────────────────────────────
  {
    id: 'wt2-gt8-free-transport',
    task: 'writing-task-2',
    track: 'general',
    title: 'Free public transport in cities',
    prompt: [
      'Some people believe that public transport, such as buses and trains, should be made free for everyone who lives in a city.',
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
    id: 'wt2-gt8-buying-things',
    task: 'writing-task-2',
    track: 'general',
    title: 'Buying things we do not need',
    prompt: [
      'Many people today buy far more things than they actually need.',
      '',
      'Why do you think this happens, and what problems can it cause?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── Task 2 · C - two-part direct question ─────────────────────────────────
  {
    id: 'wt2-gt8-children-outdoors',
    task: 'writing-task-2',
    track: 'general',
    title: 'Children spending time outdoors',
    prompt: [
      'These days, many children spend very little time playing or being active outdoors.',
      '',
      'Why is this the case, and what could be done to encourage children to spend more time outside?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },
]
