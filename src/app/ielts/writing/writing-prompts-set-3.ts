// ─── IELTS Academic Writing prompts · Set 3 ─────────────────────────────────
// Additional prompt bank for the AI-marked Writing module, authored in parallel
// with the Wave 1 set (`writing-prompts.ts`). Three Task 1 questions (Academic —
// describe a visual) and three Task 2 questions (advantages/disadvantages, a
// two-part question, and an agree/disagree opinion essay).
//
// As in the Wave 1 bank, no chart/map/diagram image assets exist yet, so each
// Task 1 prompt embeds the underlying data as a clearly-laid-out textual block
// INSIDE `prompt`, giving the candidate everything needed to write 150 words
// without an image. `imageSrc` is therefore left undefined; the writing page
// renders the textual data block from `prompt`. When real assets land, add
// `imageSrc` / `imageAlt` here without touching any other file.
//
// Themes are deliberately distinct from the Wave 1 set: urban transport, an
// ageing population, and city land use (Task 1); tourism, the media, and
// science funding (Task 2). All content is original, English only, and written
// for IELTS preparation (Academic track).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_SET_3: WritingPrompt[] = [
  // ── Task 1 · A — bar chart (comparison across categories + years) ─────────
  {
    id: 'wt-s3-commuter-transport',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How commuters travel to work in a city',
    prompt: [
      'The bar chart below shows the percentage of commuters in one city who used four different means of transport to travel to work in 2005, 2014 and 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Data (percentage of commuters using each means of transport):',
      '• Private car — 2005: 58%; 2014: 49%; 2023: 34%',
      '• Bus or tram — 2005: 21%; 2014: 24%; 2023: 27%',
      '• Underground rail — 2005: 15%; 2014: 19%; 2023: 23%',
      '• Bicycle or on foot — 2005: 6%; 2014: 8%; 2023: 16%',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · B — table (population ageing across regions) ────────────────
  {
    id: 'wt-s3-ageing-population',
    task: 'writing-task-1',
    track: 'academic',
    title: 'The proportion of older people in three regions',
    prompt: [
      'The table below shows the percentage of the population aged 65 and over in three regions of one country in 1990 and 2020, together with the projected figure for 2050.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Data (percentage of the population aged 65 and over):',
      '• Northern region — 1990: 11%; 2020: 19%; 2050 (projected): 28%',
      '• Coastal region — 1990: 14%; 2020: 24%; 2050 (projected): 33%',
      '• Central region — 1990: 9%; 2020: 16%; 2050 (projected): 22%',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 1 · C — map (how a town centre changed over time) ───────────────
  {
    id: 'wt-s3-town-centre-map',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Changes to a town centre',
    prompt: [
      'The two maps below show the centre of a small town called Riverton in 1995 and in the present day.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Layout in 1995 (described as shown on the map):',
      '• A river ran east to west across the north of the town, crossed by a single road bridge.',
      '• South of the river stood a large factory with its own car park.',
      '• To the east of the factory were several rows of terraced houses.',
      '• A primary school sat in the south-west corner, surrounded by open fields.',
      '',
      'Layout in the present day (described as shown on the map):',
      '• The factory has been demolished and replaced by a shopping centre and an underground car park.',
      '• A second pedestrian bridge now crosses the river beside the original road bridge.',
      '• The terraced houses remain, but the open fields by the school are now a public park.',
      '• A new bus station has been built where part of the factory car park used to be.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── Task 2 · A — advantages / disadvantages (tourism) ────────────────────
  {
    id: 'wt-s3-mass-tourism',
    task: 'writing-task-2',
    track: 'academic',
    title: 'The growth of international tourism',
    prompt: [
      'Every year, more and more people travel abroad as tourists, and many popular destinations now receive far more visitors than they did in the past.',
      '',
      'Do the advantages of this growth in international tourism outweigh the disadvantages?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── Task 2 · B — two-part question (the media / news) ────────────────────
  {
    id: 'wt-s3-online-news',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Getting the news from social media',
    prompt: [
      'These days, many people, especially younger ones, get most of their news from social media rather than from newspapers or television.',
      '',
      'Why do you think this change has happened? Is it a positive or a negative development?',
      '',
      'Give reasons for your answer and include any relevant examples from your own knowledge or experience.',
      '',
      'Write at least 250 words.',
    ].join('\n'),
    minWords: 250,
    suggestedMinutes: 40,
  },

  // ── Task 2 · C — opinion (agree / disagree) on science funding ───────────
  {
    id: 'wt-s3-science-funding',
    task: 'writing-task-2',
    track: 'academic',
    title: 'Funding scientific research',
    prompt: [
      'Some people believe that governments should spend public money only on scientific research that has clear practical benefits, rather than on research whose uses are not yet known.',
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
