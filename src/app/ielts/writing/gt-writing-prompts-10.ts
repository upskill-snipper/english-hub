// ─── IELTS General Training (GT) Writing prompts · Set 10 ───────────────────
// Wave 10 prompt bank for the AI-marked Writing module, General Training track.
//
// GT Writing differs from Academic:
//   • Task 1 is a LETTER (not a data description). The candidate responds to an
//     everyday situation by writing a letter that covers THREE bullet points.
//     The register varies by prompt - formal (to an official / a newspaper / a
//     leisure centre) or informal (to a friend). The situation and the three
//     bullets live inside `prompt`. minWords 150, suggestedMinutes 20.
//   • Task 2 is an opinion / discussion essay, like Academic, but on more
//     everyday, general themes. minWords 250, suggestedMinutes 40.
//
// No image assets are needed for GT Task 1 (it is a letter, not a chart), so
// `chart` / `imageSrc` / `imageAlt` are left undefined throughout.
//
// All content below is 100% original and distinct from the earlier GT sets.
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const GT_WRITING_SET_10: WritingPrompt[] = [
  // ── Task 1 · A - FORMAL letter to a leisure centre ────────────────────────
  {
    id: 'wt1-gt10-freeze-membership',
    task: 'writing-task-1',
    track: 'general',
    title: 'Asking to freeze or cancel a gym membership',
    prompt: [
      'You pay each month for a membership at a local gym and leisure centre. Because of a change in your circumstances, you are no longer able to use it as you did before.',
      '',
      'Write a letter to the manager of the leisure centre. In your letter:',
      '• explain why you can no longer use your membership at the moment',
      '• say whether you want to freeze the membership for a while or cancel it completely',
      '• ask what you need to do and whether any fees will apply',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Manager,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · B - INFORMAL letter recommending a place ─────────────────────
  {
    id: 'wt1-gt10-recommend-place',
    task: 'writing-task-1',
    track: 'general',
    title: 'Recommending a place to a friend',
    prompt: [
      'You recently visited a place that you enjoyed very much, and you think a good friend of yours would love it too.',
      '',
      'Write a letter to your friend. In your letter:',
      '• tell them about the place you visited and how you got there',
      '• describe what you enjoyed most about it',
      '• explain why you think your friend should go and offer to help them plan a trip',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Sam,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · C - FORMAL letter to a local newspaper ───────────────────────
  {
    id: 'wt1-gt10-parking-problem',
    task: 'writing-task-1',
    track: 'general',
    title: 'Letter to a newspaper about parking problems',
    prompt: [
      'There is a serious problem with parking in the area where you live, and it is causing difficulties for local residents.',
      '',
      'Write a letter to your local newspaper. In your letter:',
      '• describe the parking problem and where exactly it happens',
      '• explain how it affects you and other people who live nearby',
      '• suggest what the council could do to improve the situation',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Editor,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 2 · A - opinion (agree / disagree) ───────────────────────────────
  {
    id: 'wt2-gt10-saving-money',
    task: 'writing-task-2',
    track: 'general',
    title: 'Encouraging young people to save money',
    prompt: [
      'Some people believe that young people should be encouraged to start saving money from an early age, while others think childhood and youth should be enjoyed without worrying about money.',
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

  // ── Task 2 · B - discussion (both views + opinion) ────────────────────────
  {
    id: 'wt2-gt10-supermarkets-shops',
    task: 'writing-task-2',
    track: 'general',
    title: 'Large supermarkets versus small local shops',
    prompt: [
      'Some people think that large supermarkets are better for shoppers, while others believe that small local shops are a better choice.',
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

  // ── Task 2 · C - opinion (agree / disagree) ───────────────────────────────
  {
    id: 'wt2-gt10-exercise',
    task: 'writing-task-2',
    track: 'general',
    title: 'Requiring everyone to do physical exercise',
    prompt: [
      'Some people think that everyone should be required to do some form of physical exercise in order to stay healthy.',
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
]
