// ─── IELTS Academic Writing prompts · Set 2 ─────────────────────────────────
// Wave 2 prompt bank for the AI-marked Writing module: three Task 1 questions
// (Academic - describe/summarise a visual) and three Task 2 questions
// (opinion / discuss-both-views / problem-solution essays).
//
// As in Set 1, no chart/graph image assets exist yet, so each Task 1 prompt
// embeds the underlying data as a clearly-laid-out textual description INSIDE
// `prompt`, giving the candidate everything needed to write 150 words without
// an image. `imageSrc` is therefore left undefined; when real chart assets land
// they can be added here (`imageSrc` / `imageAlt`) without touching any other
// file. Themes are deliberately varied (environment, education, technology,
// society, health, work) so this set complements rather than duplicates Set 1.
//
// All content is original and written for IELTS preparation (Academic track).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_SET_2: WritingPrompt[] = [
  // ── Task 1 · A - bar chart (comparison across groups) ────────────────────
  {
    id: 'wt-s2-transport-modes',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How commuters travel to work in three towns',
    prompt: [
      'The bar chart below shows the percentage of working adults who used four different methods to travel to work in three towns in 2022.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Data (percentage of working adults using each method of travel, 2022):',
      '• Car - Eastgate: 58%; Riverton: 41%; Hillcrest: 27%',
      '• Bus or train - Eastgate: 19%; Riverton: 34%; Hillcrest: 30%',
      '• Bicycle - Eastgate: 8%; Riverton: 14%; Hillcrest: 31%',
      '• Walking - Eastgate: 15%; Riverton: 11%; Hillcrest: 12%',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · B - line graph (trend over time, described in words) ────────
  {
    id: 'wt-s2-mobile-internet',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Mobile and fixed internet subscriptions over time',
    prompt: [
      'The line graph below shows the number of mobile internet subscriptions and fixed broadband subscriptions (in millions) in one country between 2005 and 2025.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Data (number of subscriptions in millions):',
      '• Mobile internet - 2005: 2; 2010: 11; 2015: 38; 2020: 64; 2025: 81',
      '• Fixed broadband - 2005: 9; 2010: 17; 2015: 22; 2020: 24; 2025: 23',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · C - process diagram (described in words) ────────────────────
  {
    id: 'wt-s2-water-treatment',
    task: 'writing-task-1',
    track: 'academic',
    title: 'The process of treating drinking water',
    prompt: [
      'The diagram below illustrates how water from a river is treated before it is supplied to homes as drinking water.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Process stages (described in sequence, as shown on the diagram):',
      '1. Water is drawn from a river through a screen that holds back leaves, branches and other large objects.',
      '2. The screened water flows into a settling tank, where heavy particles such as sand and grit sink to the bottom.',
      '3. A small amount of chemical is added to make fine dirt clump together so that it can be removed more easily.',
      '4. The water passes slowly through layers of sand and gravel in a filter bed, which trap the remaining tiny particles.',
      '5. Chlorine is added to the filtered water to kill any harmful bacteria that are still present.',
      '6. The treated water is stored in a covered reservoir and then pumped through pipes to homes when it is needed.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 2 · A - opinion (agree/disagree) · technology / society ─────────
  {
    id: 'wt-s2-screen-time-children',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Children and screen time',
    prompt: [
      'Some people believe that the amount of time children spend using phones, tablets and computers should be strictly limited by their parents.',
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

  // ── Task 2 · B - discuss both views + opinion · health / society ─────────
  {
    id: 'wt-s2-public-health-funding',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Spending on prevention versus treatment',
    prompt: [
      'Some people think that governments should spend more money on preventing illness, for example by promoting healthy lifestyles, while others believe the money is better spent on treating people who are already sick.',
      '',
      'Discuss both views and give your own opinion.',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── Task 2 · C - problem / solution + opinion · environment / work ───────
  {
    id: 'wt-s2-city-congestion',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Traffic congestion in growing cities',
    prompt: [
      'As cities continue to grow, many of them suffer from increasingly heavy traffic, which wastes time and adds to air pollution.',
      '',
      'What are the main causes of traffic congestion in large cities, and what measures could be taken to reduce it?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },
]
