// ─── IELTS Academic Writing Task 1 · Chart set 5 ────────────────────────────
// A fifth bank of six Academic Task 1 prompts, each paired with a REAL chart
// spec (a `WritingChartSpec`, see src/lib/ielts/types.ts) rendered by
// src/app/ielts/writing/_components/WritingChart.tsx - so the candidate sees an
// actual bar / line / pie / table / process visual, the way the exam presents
// it, rather than a textual data dump.
//
// Authoring rules followed throughout (mirroring chart sets 1-4 and the
// committed worked examples in writing-prompts.ts):
//   • `prompt` is INSTRUCTION ONLY - it never quotes the numbers, because the
//     data lives entirely in `chart` (one source of truth).
//   • bar / line - every series.values length === categories.length, and each
//     carries `unit` + `yAxisLabel`;
//   • pie '%' slices sum to ~100 (parts of one whole);
//   • every spec sets a `caption`;
//   • numbers are realistic, internally consistent and tell a clear story
//     (a trend, a comparison, a dominant category) so a 150-word report is
//     achievable.
//
// Six fresh, original topics, deliberately distinct from every existing prompt
// across the whole chart bank (renewable mix, tourist arrivals, freshwater,
// internet-by-age, water cycle, enrolment, household spending, electricity
// sources, recycled materials, butterfly/coffee/chocolate/water-treatment
// cycles, car ownership, CO2 by sector, world population, climate table,
// cinema/streaming, phone features, screen time, waste disposal, life
// expectancy, leisure spending, online grocery, paper recycling, museum
// visitors, household energy):
//   1 average commute time by mode of transport (bar)
//   2 gym membership numbers across the months of a year (line)
//   3 main source of news by age group (table)
//   4 global smartphone vs PC shipments over time (multi-series line)
//   5 how bread is made in a bakery (linear process)
//   6 proportion of energy from renewables in two countries (two pies)
// All content is original and written for IELTS preparation (Academic track).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_CHARTS_5: WritingPrompt[] = [
  // ── 1 · bar (single series across five modes of transport) ────────────────
  {
    id: 'wt1c5-commute-time',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Average commute time by mode of transport',
    prompt: [
      'The bar chart below shows the average time, in minutes, taken to travel to work by people using five different modes of transport in one city in 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      unit: 'minutes',
      yAxisLabel: 'Average journey (minutes)',
      caption: 'Average one-way commute time to work by mode of transport (minutes), 2023.',
      categories: ['Walking', 'Cycling', 'Bus', 'Train', 'Car'],
      series: [{ name: 'Average commute time', values: [14, 22, 47, 38, 31] }],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 2 · line (single series across the twelve months - seasonal trend) ────
  {
    id: 'wt1c5-gym-membership',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Gym membership numbers across the year',
    prompt: [
      'The line graph below shows the number of members, in thousands, at a national chain of fitness centres in each month of one year.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: 'thousands',
      yAxisLabel: 'Members (000s)',
      caption: 'Number of gym members (thousands), by month, over one year.',
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      series: [
        { name: 'Members', values: [310, 295, 268, 240, 226, 218, 205, 232, 261, 248, 234, 252] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 3 · table (age group × main news source; rows total ~100% each) ───────
  {
    id: 'wt1c5-news-sources',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Main source of news by age group',
    prompt: [
      'The table below shows the percentage of people in four age groups who named each of five media as their main source of news in one country in 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'table',
      unit: '%',
      caption: 'Share of each age group naming each medium as their main source of news (%), 2023.',
      columns: ['Main news source', '18-29', '30-49', '50-69', '70+'],
      rows: [
        { label: 'Social media', cells: [52, 33, 14, 4] },
        { label: 'News websites & apps', cells: [27, 31, 22, 9] },
        { label: 'Television', cells: [13, 24, 41, 58] },
        { label: 'Radio', cells: [6, 9, 14, 17] },
        { label: 'Printed newspapers', cells: [2, 3, 9, 12] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 4 · multi-series line (two product categories over time) ──────────────
  {
    id: 'wt1c5-device-shipments',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Global shipments of smartphones and personal computers',
    prompt: [
      'The line graph below shows the number of smartphones and personal computers shipped worldwide each year between 2005 and 2025, measured in millions of units.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: 'millions',
      yAxisLabel: 'Units shipped (millions)',
      caption:
        'Global shipments of smartphones and personal computers (millions of units), 2005-2025.',
      categories: ['2005', '2010', '2015', '2020', '2025'],
      series: [
        { name: 'Smartphones', values: [64, 305, 1424, 1290, 1210] },
        { name: 'Personal computers', values: [219, 351, 289, 275, 241] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 5 · process · LINEAR (an everyday production process) ──────────────────
  {
    id: 'wt1c5-bread-making',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How bread is made in a bakery',
    prompt: [
      'The diagram below shows the stages in making bread in a bakery, from mixing the ingredients to packing the finished loaves.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'process',
      caption: 'The main stages in making bread in a bakery, from mixing to packing.',
      steps: [
        {
          label: 'Mixing',
          detail:
            'Flour, water, yeast and salt are weighed out and combined in a large mixer until they form a rough dough.',
        },
        {
          label: 'Kneading',
          detail:
            'The dough is kneaded by machine for several minutes so that it becomes smooth, elastic and stretchy.',
        },
        {
          label: 'First proving',
          detail:
            'The dough is left to rest in a warm room, where the yeast makes it rise and roughly double in size.',
        },
        {
          label: 'Shaping & second proving',
          detail:
            'The risen dough is divided, shaped into loaves and placed in tins, then left to prove a second time.',
        },
        {
          label: 'Baking',
          detail:
            'The loaves are baked in a hot oven for around half an hour until they are firm and golden brown.',
        },
        {
          label: 'Cooling & packing',
          detail:
            'The baked loaves are turned out to cool, then sliced, bagged and sent to shops for sale.',
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 6 · two pie charts (parts of one whole; each totals 100%) ─────────────
  {
    id: 'wt1c5-renewable-share-two-countries',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Sources of renewable energy in two countries',
    prompt: [
      'The two pie charts below show the proportion of renewable energy produced from five sources in two countries, Country A and Country B, in 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'pie',
      unit: '%',
      caption: 'Share of renewable energy by source in two countries (%), 2023.',
      datasets: [
        {
          name: 'Country A',
          slices: [
            { label: 'Hydropower', value: 34 },
            { label: 'Wind', value: 28 },
            { label: 'Solar', value: 19 },
            { label: 'Bioenergy', value: 12 },
            { label: 'Geothermal', value: 7 },
          ],
        },
        {
          name: 'Country B',
          slices: [
            { label: 'Hydropower', value: 9 },
            { label: 'Wind', value: 41 },
            { label: 'Solar', value: 33 },
            { label: 'Bioenergy', value: 14 },
            { label: 'Geothermal', value: 3 },
          ],
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },
]
