// ─── IELTS General Training (GT) Writing prompts · Set 7 ────────────────────
// Wave 7 prompt bank for the AI-marked Writing module, General Training track.
//
// GT Writing differs from Academic:
//   • Task 1 is a LETTER (not a data description). The candidate responds to an
//     everyday situation by writing a letter that covers THREE bullet points.
//     The register varies by prompt — formal (to a local council / a training
//     provider) or informal (to a friend). The situation and the three bullets
//     live inside `prompt`. minWords 150, suggestedMinutes 20.
//   • Task 2 is an opinion / discussion essay, like Academic, but on more
//     everyday, general themes. minWords 250, suggestedMinutes 40.
//
// No image assets are needed for GT Task 1 (it is a letter, not a chart), so
// `chart` / `imageSrc` / `imageAlt` are left undefined throughout.
//
// All content below is 100% original and distinct from the earlier GT sets.
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const GT_WRITING_SET_7: WritingPrompt[] = [
  // ── Task 1 · A — FORMAL letter to a local council ─────────────────────────
  {
    id: 'wt1-gt7-park-improvement',
    task: 'writing-task-1',
    track: 'general',
    title: 'Suggesting an improvement to a local park',
    prompt: [
      'There is a park or public space near your home that you visit regularly. You have an idea for a change that you believe would make it better for the whole community.',
      '',
      'Write a letter to your local council. In your letter:',
      '• describe the park or public space and how people currently use it',
      '• explain the improvement you would like the council to make',
      '• say how this change would benefit local residents',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Sir or Madam,',
      '',
      'Use a formal tone throughout.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · B — INFORMAL letter inviting a friend to visit ───────────────
  {
    id: 'wt1-gt7-invite-friend',
    task: 'writing-task-1',
    track: 'general',
    title: 'Inviting a friend to come and visit',
    prompt: [
      'A good friend of yours lives in another town, and you have not seen each other for a long time. You would like them to come and stay with you for a few days.',
      '',
      'Write a letter to your friend. In your letter:',
      '• invite them to visit you and suggest when they could come',
      '• describe some of the things you have planned for the two of you to do',
      '• explain how they can travel to your home and what they should bring',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Sam,',
      '',
      'Use a friendly, informal tone throughout.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · C — FORMAL letter requesting course information ──────────────
  {
    id: 'wt1-gt7-course-enquiry',
    task: 'writing-task-1',
    track: 'general',
    title: 'Asking about a course you wish to take',
    prompt: [
      'You have seen an advertisement for a course at a local training provider that you are interested in taking, but you need more details before you can enrol.',
      '',
      'Write a letter to the training provider. In your letter:',
      '• explain which course you are interested in and why',
      '• ask about the timetable, length and cost of the course',
      '• request information about how to apply and any entry requirements',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Sir or Madam,',
      '',
      'Use a formal tone throughout.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 2 · A — opinion (agree / disagree) ───────────────────────────────
  {
    id: 'wt2-gt7-organised-activities',
    task: 'writing-task-2',
    track: 'general',
    title: 'Organised activities versus free time for children',
    prompt: [
      'These days, many children take part in a large number of organised activities, such as sports clubs and music lessons, and have very little free time of their own.',
      '',
      'Do you think children today have too many organised activities and not enough free time?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── Task 2 · B — discussion (both views + opinion) ────────────────────────
  {
    id: 'wt2-gt7-buy-local',
    task: 'writing-task-2',
    track: 'general',
    title: 'Buying locally-made products',
    prompt: [
      'Some people believe that we should be encouraged to buy products that are made locally, even when they are more expensive than goods produced elsewhere. Others think people should simply buy whatever is cheapest.',
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

  // ── Task 2 · C — opinion (working from home vs office) ────────────────────
  {
    id: 'wt2-gt7-home-vs-office',
    task: 'writing-task-2',
    track: 'general',
    title: 'Working from home versus working in an office',
    prompt: [
      'In recent years, many people have started to work from home instead of travelling to an office every day.',
      '',
      'Do you think working from home is better than working in an office, both for employees and for employers?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },
]
