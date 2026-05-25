// ─── IELTS General Training (GT) Writing prompts · Set 9 ────────────────────
// Wave 9 prompt bank for the AI-marked Writing module, General Training track.
//
// GT Writing differs from Academic:
//   • Task 1 is a LETTER (not a data description). The candidate responds to an
//     everyday situation by writing a letter that covers THREE bullet points.
//     The register varies by prompt — this set is three FORMAL letters (to a
//     library, to an employer, and to a travel company). The situation and the
//     three bullets live inside `prompt`. minWords 150, suggestedMinutes 20.
//   • Task 2 is an opinion / discussion essay, like Academic, but on more
//     everyday, general themes. minWords 250, suggestedMinutes 40.
//
// No image assets are needed for GT Task 1 (it is a letter, not a chart), so
// `chart` / `imageSrc` / `imageAlt` are left undefined throughout.
//
// All content below is 100% original and distinct from the other GT writing
// sets.
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const GT_WRITING_SET_9: WritingPrompt[] = [
  // ── Task 1 · A — FORMAL letter to a library about a lost book ──────────────
  {
    id: 'wt1-gt9-lost-book',
    task: 'writing-task-1',
    track: 'general',
    title: 'Telling a library you have lost a book',
    prompt: [
      'You borrowed a book from your local library, but you have realised that you can no longer find it and believe you have lost it.',
      '',
      'Write a letter to the library. In your letter:',
      '• explain which book you borrowed and when it was due back',
      '• describe how you think you lost it',
      '• ask the library what you should do now',
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

  // ── Task 1 · B — FORMAL letter to an employer accepting a job ─────────────
  {
    id: 'wt1-gt9-accept-job',
    task: 'writing-task-1',
    track: 'general',
    title: 'Accepting a job offer',
    prompt: [
      'You recently attended an interview and have been offered a job, which you have decided to accept.',
      '',
      'Write a letter to the employer. In your letter:',
      '• thank the employer and confirm that you accept the position',
      '• explain why you are pleased to take the job',
      '• ask about when and how you should start',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Ms Lindgren,',
      '',
      'Use a formal tone.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · C — FORMAL letter to a travel company (request) ──────────────
  {
    id: 'wt1-gt9-tour-enquiry',
    task: 'writing-task-1',
    track: 'general',
    title: 'Asking a travel company about a booked tour',
    prompt: [
      'You have booked and paid for a guided tour with a travel company, but there are some details about the trip that you would like to check or change.',
      '',
      'Write a letter to the travel company. In your letter:',
      '• give the details of the tour you have booked',
      '• explain what information you still need about it',
      '• ask the company to make one change to your booking',
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

  // ── Task 2 · A — opinion (big city vs small town) ─────────────────────────
  {
    id: 'wt2-gt9-city-vs-town',
    task: 'writing-task-2',
    track: 'general',
    title: 'Living in a big city or a small town',
    prompt: [
      'Some people prefer to live in a large city, while others believe that life in a small town is better.',
      '',
      'Which do you think is the better place to live, and why?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── Task 2 · B — opinion (agree / disagree: recycling law) ────────────────
  {
    id: 'wt2-gt9-recycling-law',
    task: 'writing-task-2',
    track: 'general',
    title: 'Making recycling a legal requirement',
    prompt: [
      'Some people think that households should be required by law to sort and recycle their waste, rather than being free to choose whether they do so.',
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

  // ── Task 2 · C — opinion (mobile phones in schools) ───────────────────────
  {
    id: 'wt2-gt9-phones-in-schools',
    task: 'writing-task-2',
    track: 'general',
    title: 'Banning mobile phones in schools',
    prompt: [
      'In some schools, students are no longer allowed to bring or use mobile phones during the school day.',
      '',
      'Do you think mobile phones should be banned in schools?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },
]
