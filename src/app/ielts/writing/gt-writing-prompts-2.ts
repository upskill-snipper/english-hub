// ─── IELTS General Training (GT) Writing prompts · Set 2 ────────────────────
// Wave 2 prompt bank for the AI-marked Writing module, General Training track.
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
// `chart` / `imageSrc` / `imageAlt` are left undefined throughout.
//
// All content below is 100% original and distinct from GT_WRITING_SET (set 1).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const GT_WRITING_SET_2: WritingPrompt[] = [
  // ── Task 1 · A - FORMAL letter to a council (local official) ──────────────
  {
    id: 'gt2-wt1-street-lighting',
    task: 'writing-task-1',
    track: 'general',
    title: 'Complaint about poor street lighting',
    prompt: [
      'The street where you live has very poor lighting at night, and you are concerned about the safety of local residents.',
      '',
      'Write a letter to the local council. In your letter:',
      '• explain where you live and what the problem is',
      '• describe how the poor lighting is affecting people in the area',
      '• say what you would like the council to do about it',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Sir or Madam,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · B - SEMI-FORMAL letter (request to a manager) ────────────────
  {
    id: 'gt2-wt1-time-off-work',
    task: 'writing-task-1',
    track: 'general',
    title: 'Requesting time off work',
    prompt: [
      'A relative who lives in another country is getting married, and you would like to take a week off work to attend the wedding. You have worked for your manager for two years.',
      '',
      'Write a letter to your manager. In your letter:',
      '• explain why you need to take time off work',
      '• say exactly which dates you would like to be away',
      '• suggest how your work could be covered while you are gone',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Ms Reid,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · C - INFORMAL letter (to a friend) ────────────────────────────
  {
    id: 'gt2-wt1-borrowed-item',
    task: 'writing-task-1',
    track: 'general',
    title: 'Apologising to a friend for a damaged item',
    prompt: [
      'You borrowed a camera from a good friend to take on holiday, but you accidentally damaged it while you were away.',
      '',
      'Write a letter to your friend. In your letter:',
      '• thank them for lending you the camera',
      '• explain how the damage happened',
      '• tell them what you intend to do to put things right',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Priya,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · D - SEMI-FORMAL letter (suggestion to a club/gym) ────────────
  {
    id: 'gt2-wt1-gym-facilities',
    task: 'writing-task-1',
    track: 'general',
    title: 'Suggesting improvements at your local gym',
    prompt: [
      'You are a member of a local sports centre, and you have some ideas about how it could be improved for its members.',
      '',
      'Write a letter to the manager of the sports centre. In your letter:',
      '• say how long you have been a member and what you like about it',
      '• describe one or two problems you have noticed',
      '• suggest some improvements that would benefit the members',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Mr Doyle,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 2 · A - opinion (agree / disagree) ───────────────────────────────
  {
    id: 'gt2-wt2-living-alone',
    task: 'writing-task-2',
    track: 'general',
    title: 'Young people living alone',
    prompt: [
      'In some countries, more and more young people choose to move out of the family home and live on their own as soon as they can.',
      '',
      'Do you think this is a positive or a negative development?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── Task 2 · B - discussion (both views + opinion) ────────────────────────
  {
    id: 'gt2-wt2-working-from-home',
    task: 'writing-task-2',
    track: 'general',
    title: 'Working from home',
    prompt: [
      'Many people are now able to do their jobs from home rather than travelling to a workplace every day. Some people think this is good for workers, while others believe it causes problems.',
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

  // ── Task 2 · C - problem / solution ───────────────────────────────────────
  {
    id: 'gt2-wt2-traffic-congestion',
    task: 'writing-task-2',
    track: 'general',
    title: 'Traffic congestion in cities',
    prompt: [
      'In many cities, traffic congestion has become a serious problem that affects people’s daily lives.',
      '',
      'What do you think are the main causes of this problem, and what measures could be taken to solve it?',
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
    id: 'gt2-wt2-living-abroad',
    task: 'writing-task-2',
    track: 'general',
    title: 'Living in a foreign country',
    prompt: [
      'These days, a growing number of people decide to leave their home country and live abroad for work or study.',
      '',
      'Do the advantages of living in a foreign country outweigh the disadvantages?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },
]
