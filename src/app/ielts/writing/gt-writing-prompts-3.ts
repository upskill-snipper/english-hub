// ─── IELTS General Training (GT) Writing prompts · Set 3 ────────────────────
// Wave 3 prompt bank for the AI-marked Writing module, General Training track.
//
// GT Writing differs from Academic:
//   • Task 1 is a LETTER (not a data description). The candidate responds to an
//     everyday situation by writing a letter that covers THREE bullet points.
//     The register varies by prompt — formal (to an official / a company),
//     semi-formal (to a manager / a committee) or informal (to a friend). The
//     situation and the three bullets live inside `prompt`. minWords 150,
//     suggestedMinutes 20.
//   • Task 2 is an opinion / discussion essay, like Academic, but on more
//     everyday, general themes. minWords 250, suggestedMinutes 40.
//
// No image assets are needed for GT Task 1 (it is a letter, not a chart), so
// `chart` / `imageSrc` / `imageAlt` are left undefined throughout.
//
// All content below is 100% original and distinct from GT_WRITING_SET (set 1)
// and GT_WRITING_SET_2 (set 2).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const GT_WRITING_SET_3: WritingPrompt[] = [
  // ── Task 1 · A — FORMAL letter of complaint (to a company) ────────────────
  {
    id: 'gt3-wt1-late-delivery',
    task: 'writing-task-1',
    track: 'general',
    title: 'Complaint about a faulty online order',
    prompt: [
      'You ordered some furniture from an online company. It arrived much later than promised, and one of the items was damaged when you unpacked it.',
      '',
      'Write a letter to the company. In your letter:',
      '• give the details of your order and when it should have arrived',
      '• describe the damage to the item you received',
      '• say what you expect the company to do to put things right',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Sir or Madam,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · B — SEMI-FORMAL letter (request to enrol, to a manager) ──────
  {
    id: 'gt3-wt1-cookery-course',
    task: 'writing-task-1',
    track: 'general',
    title: 'Asking to join a cookery course',
    prompt: [
      'A community centre near your home runs a weekend cookery course, and you would like to enrol on it. The course is normally full, so places must be requested from the course manager.',
      '',
      'Write a letter to the course manager. In your letter:',
      '• explain why you would like to take part in the course',
      '• describe any cooking experience you already have',
      '• ask about the dates, the fees and what you should bring',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Ms Lawson,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · C — INFORMAL letter (thank a friend who hosted you) ──────────
  {
    id: 'gt3-wt1-thank-host',
    task: 'writing-task-1',
    track: 'general',
    title: 'Thanking a friend for letting you stay',
    prompt: [
      'You recently spent a week staying at the home of a friend in another city. Now that you are back, you want to write and thank them.',
      '',
      'Write a letter to your friend. In your letter:',
      '• thank them for having you to stay and say what you enjoyed most',
      '• tell them how your journey home went',
      '• invite them to come and visit you in the future',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Leo,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · D — SEMI-FORMAL letter (application to a grant committee) ────
  {
    id: 'gt3-wt1-community-grant',
    task: 'writing-task-1',
    track: 'general',
    title: 'Applying for a community grant',
    prompt: [
      'A local organisation is offering small grants to help groups improve their neighbourhood. You belong to a group that would like to apply for one of these grants.',
      '',
      'Write a letter to the grants committee. In your letter:',
      '• describe the group you belong to and what it does',
      '• explain how you would use the money',
      '• say what difference the project would make to the local area',
      '',
      'Write at least 150 words.',
      '',
      'You do NOT need to write any addresses.',
      'Begin your letter as follows: Dear Members of the Committee,',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 2 · A — opinion (agree / disagree) ───────────────────────────────
  {
    id: 'gt3-wt2-volunteering',
    task: 'writing-task-2',
    track: 'general',
    title: 'Volunteering in the community',
    prompt: [
      'Some people believe that everyone should spend some of their free time doing unpaid work to help their local community.',
      '',
      'To what extent do you agree or disagree with this idea?',
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
    id: 'gt3-wt2-public-transport',
    task: 'writing-task-2',
    track: 'general',
    title: 'Free public transport',
    prompt: [
      'In some towns and cities, the local government has made buses and trains free for everyone to use. Some people think this is a good use of public money, while others believe the money should be spent in other ways.',
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

  // ── Task 2 · C — problem / solution ───────────────────────────────────────
  {
    id: 'gt3-wt2-food-waste',
    task: 'writing-task-2',
    track: 'general',
    title: 'Wasting food at home',
    prompt: [
      'In many households, a large amount of food is thrown away every week instead of being eaten.',
      '',
      'Why do you think so much food is wasted, and what could be done to reduce the amount of food that people throw away?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── Task 2 · D — advantages / disadvantages ───────────────────────────────
  {
    id: 'gt3-wt2-extended-family',
    task: 'writing-task-2',
    track: 'general',
    title: 'Living with extended family',
    prompt: [
      'In some families, grandparents, parents and children all live together in the same home rather than living separately.',
      '',
      'Do the advantages of several generations living together outweigh the disadvantages?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },
]
