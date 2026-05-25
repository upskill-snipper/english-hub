// ─── IELTS Academic Writing Task 1 · Chart set 4 ────────────────────────────
// A fourth bank of Academic Task 1 prompts that each render a REAL visual via
// the structured `chart` spec (see src/lib/ielts/types.ts → WritingChartSpec,
// drawn by src/app/ielts/writing/_components/WritingChart.tsx). As in sets 1-2
// the prompt text is INSTRUCTION ONLY - it never quotes the numbers, because
// the data lives entirely in `chart` and is shown to the candidate as a chart,
// graph, table or diagram (a single source of truth).
//
// Authoring rules followed throughout (mirroring the committed worked examples
// in writing-prompts.ts and chart sets 1-2):
//   • bar / line - every series.values length === categories.length, and each
//     carries `unit` + `yAxisLabel`;
//   • pie '%' slices sum to ~100 (parts of one whole);
//   • every spec sets a `caption`;
//   • numbers are realistic, internally consistent and tell a clear story
//     (a trend, a comparison, a dominant category) so a 150-word report works.
//
// Chart kinds are varied across the six: a table, a STACKED bar, a TWO-dataset
// comparison pie, a multi-series line, a linear process and a grouped bar.
// Topics are deliberately fresh - distinct from every other entry in the chart
// bank (renewable mix, tourist arrivals, freshwater use, internet-by-age, water
// cycle, enrolment, household spending, electricity sources, recycled materials,
// butterfly life cycle, coffee production, online grocery, paper recycling,
// museum visitors, household energy):
//   1 mobile phone features owned over time (table)
//   2 average weekly screen time by activity (stacked bar)
//   3 household waste by type, two years (two pies)
//   4 life expectancy by country over decades (line)
//   5 how drinking water is treated and purified (process)
//   6 spending on leisure activities by age group (grouped bar)
// All content is original and written for IELTS preparation (Academic track).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_CHARTS_4: WritingPrompt[] = [
  // ── 1 · table - share of households owning mobile-phone features over time ─
  {
    id: 'wt1c4-phone-features',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Mobile phone features owned over time',
    prompt: [
      'The table below shows the percentage of mobile phone owners in one country whose phones had each of five features in 2005, 2014 and 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'table',
      unit: '%',
      caption: 'Share of mobile phone owners whose phone had each feature (%), 2005-2023.',
      columns: ['Phone feature', '2005', '2014', '2023'],
      rows: [
        { label: 'Camera', cells: [22, 81, 99] },
        { label: 'Internet access', cells: [9, 74, 98] },
        { label: 'Touchscreen', cells: [2, 68, 97] },
        { label: 'GPS / maps', cells: [1, 55, 95] },
        { label: 'Physical keypad', cells: [96, 41, 7] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 2 · STACKED bar - average weekly screen time by activity, four years ───
  {
    id: 'wt1c4-screen-time',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Average weekly screen time by activity',
    prompt: [
      'The chart below shows the average number of hours per week that adults in one country spent looking at a screen for four different activities in 2011, 2015, 2019 and 2023, with the bars showing how the weekly total is made up.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      stacked: true,
      unit: 'hours/week',
      yAxisLabel: 'Hours per week',
      caption: 'Average weekly screen time per adult by activity (hours), 2011-2023.',
      categories: ['2011', '2015', '2019', '2023'],
      series: [
        { name: 'Streaming video', values: [4, 9, 15, 21] },
        { name: 'Social media', values: [3, 8, 12, 16] },
        { name: 'Gaming', values: [5, 7, 9, 11] },
        { name: 'Broadcast TV', values: [22, 18, 13, 9] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 3 · TWO pies - how household waste is disposed of, two years compared ──
  {
    id: 'wt1c4-waste-disposal',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How household waste is dealt with',
    prompt: [
      'The two pie charts below show the proportion of household waste in one city that was dealt with in five different ways in 2010 and in 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'pie',
      unit: '%',
      caption: 'Share of household waste by method of disposal (%), 2010 vs 2023.',
      datasets: [
        {
          name: '2010',
          slices: [
            { label: 'Landfill', value: 45 },
            { label: 'Recycled', value: 22 },
            { label: 'Composted', value: 13 },
            { label: 'Incinerated', value: 12 },
            { label: 'Exported', value: 8 },
          ],
        },
        {
          name: '2023',
          slices: [
            { label: 'Landfill', value: 18 },
            { label: 'Recycled', value: 37 },
            { label: 'Composted', value: 23 },
            { label: 'Incinerated', value: 16 },
            { label: 'Exported', value: 6 },
          ],
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 4 · line - life expectancy at birth in four countries over decades ─────
  {
    id: 'wt1c4-life-expectancy',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Life expectancy in four countries',
    prompt: [
      'The line graph below shows the average life expectancy at birth, in years, in four countries between 1960 and 2020.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: 'years',
      yAxisLabel: 'Life expectancy (years)',
      caption: 'Average life expectancy at birth (years), 1960-2020.',
      categories: ['1960', '1975', '1990', '2005', '2020'],
      series: [
        { name: 'Japan', values: [68, 75, 79, 82, 84] },
        { name: 'Brazil', values: [54, 61, 66, 72, 76] },
        { name: 'India', values: [42, 51, 58, 65, 70] },
        { name: 'Nigeria', values: [37, 44, 46, 49, 55] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 5 · process · LINEAR - treating and purifying drinking water ───────────
  {
    id: 'wt1c4-water-treatment',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How drinking water is treated and purified',
    prompt: [
      'The diagram below illustrates how water from a reservoir is treated and purified before it is supplied to homes as drinking water.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'process',
      caption: 'The stages in treating reservoir water to make it safe to drink.',
      steps: [
        {
          label: 'Intake & screening',
          detail:
            'Raw water is drawn from the reservoir and passed through metal screens that trap leaves, fish and other large debris.',
        },
        {
          label: 'Coagulation',
          detail:
            'Chemicals are added and stirred in so that tiny suspended particles clump together into larger, heavier flocs.',
        },
        {
          label: 'Sedimentation',
          detail:
            'The water flows slowly through a settling tank, where the heavy flocs sink to the bottom and are removed as sludge.',
        },
        {
          label: 'Filtration',
          detail:
            'The clearer water trickles down through layers of sand and gravel, which strain out the remaining fine particles.',
        },
        {
          label: 'Disinfection',
          detail:
            'Chlorine is added to kill any bacteria, and the treated water is held in a closed tank for a short time.',
        },
        {
          label: 'Storage & distribution',
          detail:
            'The clean water is pumped to a covered storage tower and then piped through the network to homes.',
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 6 · grouped bar - weekly spending on leisure by age group ──────────────
  {
    id: 'wt1c4-leisure-spending',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Spending on leisure activities by age group',
    prompt: [
      'The bar chart below shows the average amount, in British pounds, that people in three age groups spent each week on four leisure activities in one country in 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      unit: '£',
      yAxisLabel: '£ per week',
      caption: 'Average weekly spending on leisure activities by age group (£), 2023.',
      categories: ['Eating out', 'Cinema & concerts', 'Sport & fitness', 'Streaming subscriptions'],
      series: [
        { name: 'Aged 18-29', values: [24, 19, 16, 14] },
        { name: 'Aged 30-49', values: [38, 14, 22, 11] },
        { name: 'Aged 50+', values: [29, 9, 12, 5] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },
]
