// ─── IELTS General Training (GT) Writing prompts · Set 4 ────────────────────
// Wave 4 prompt bank for the AI-marked Writing module, General Training track.
//
// GT Writing differs from Academic:
//   • Task 1 is a LETTER (not a data description). The candidate responds to an
//     everyday situation by writing a letter that covers THREE bullet points.
//     The register varies by prompt - formal (to an official / a newspaper / a
//     landlord), semi-formal (to a course tutor / a committee) or informal (to
//     a friend). The situation and the three bullets live inside `prompt`.
//     minWords 150, suggestedMinutes 20.
//   • Task 2 is an opinion / discussion essay, like Academic, but on more
//     everyday, general themes. minWords 250, suggestedMinutes 40.
//
// No image assets are needed for GT Task 1 (it is a letter, not a chart), so
// `chart` / `imageSrc` / `imageAlt` are left undefined throughout.
//
// All content below is 100% original and distinct from GT_WRITING_SET (set 1),
// GT_WRITING_SET_2 (set 2) and GT_WRITING_SET_3 (set 3).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const GT_WRITING_SET_4: WritingPrompt[] = [
  // ── Task 1 · A - FORMAL letter to a newspaper editor ──────────────────────
  {
    id: 'gt4-wt1-park-closure',
    task: 'writing-task-1',
    track: 'general',
    title: 'Letter to a newspaper about a park closure',
    prompt: [
      'You have read in your local newspaper that the council plans to close a popular public park and sell the land to a building company.',
      '',
      'Write a letter to the editor of the newspaper. In your letter:',
      '• explain how you and other people use the park at the moment',
      '• describe what the local area would lose if the park were closed',
      '• suggest what readers and the council could do to save it',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Editor,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · B - FORMAL letter to a landlord about repairs ────────────────
  {
    id: 'gt4-wt1-roof-leak',
    task: 'writing-task-1',
    track: 'general',
    title: 'Reporting a leaking roof to a letting agency',
    prompt: [
      'You rent a flat through a letting agency. After several days of heavy rain, water has begun to leak through the ceiling and has started to damage your belongings.',
      '',
      'Write a letter to the letting agency. In your letter:',
      '• describe the leak and the damage it has already caused',
      '• explain why the repair cannot wait any longer',
      '• say what you expect the agency to do and how quickly',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Sir or Madam,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · C - SEMI-FORMAL letter to a course tutor ─────────────────────
  {
    id: 'gt4-wt1-deadline-extension',
    task: 'writing-task-1',
    track: 'general',
    title: 'Asking a course tutor for a deadline extension',
    prompt: [
      'You are taking a part-time evening course. Because of problems at work, you will not be able to finish an important assignment by the date it is due.',
      '',
      'Write a letter to your course tutor. In your letter:',
      '• explain which assignment you are writing about',
      '• describe why you need more time to complete it',
      '• ask for a new deadline and say when you could hand the work in',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Mr Osei,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · D - INFORMAL letter inviting a friend to an event ────────────
  {
    id: 'gt4-wt1-surprise-party',
    task: 'writing-task-1',
    track: 'general',
    title: 'Inviting a friend to a surprise party',
    prompt: [
      'You are organising a surprise party for a mutual friend’s birthday, and you would like another good friend to come and help you with it.',
      '',
      'Write a letter to your friend. In your letter:',
      '• tell them about the party and when and where it will be held',
      '• explain what you would like them to help you with',
      '• remind them to keep the party a secret and say why',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Mia,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 2 · A - two-part direct question ─────────────────────────────────
  {
    id: 'gt4-wt2-reading-less',
    task: 'writing-task-2',
    track: 'general',
    title: 'People reading fewer books',
    prompt: [
      'In many countries, people are reading fewer books for pleasure than they used to.',
      '',
      'Why do you think this is happening, and what could be done to encourage more people to read?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── Task 2 · B - opinion (agree / disagree) ───────────────────────────────
  {
    id: 'gt4-wt2-lifelong-learning',
    task: 'writing-task-2',
    track: 'general',
    title: 'Learning new skills later in life',
    prompt: [
      'Some people think that adults should keep learning new skills throughout their working lives, even when they are older, rather than relying only on what they learned when they were young.',
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

  // ── Task 2 · C - discussion (both views + opinion) ────────────────────────
  {
    id: 'gt4-wt2-pets-in-cities',
    task: 'writing-task-2',
    track: 'general',
    title: 'Keeping pets in cities',
    prompt: [
      'Many people in large cities keep pets such as dogs and cats in their homes. Some people think this is good for city residents, while others believe cities are not suitable places for animals.',
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
    id: 'gt4-wt2-tourism-towns',
    task: 'writing-task-2',
    track: 'general',
    title: 'Tourism in small towns',
    prompt: [
      'Every year, large numbers of tourists travel to small towns and villages that are known for their beauty or history.',
      '',
      'Do the advantages of this kind of tourism for local communities outweigh the disadvantages?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },
]
