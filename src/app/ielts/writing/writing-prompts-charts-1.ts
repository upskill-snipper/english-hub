// ─── IELTS Academic Writing Task 1 prompts · Charts set 1 ───────────────────
// A bank of six Academic Task 1 questions, each paired with a REAL chart spec
// (a `WritingChartSpec`) rendered by
// src/app/ielts/writing/_components/WritingChart.tsx — so the candidate sees an
// actual bar / line / pie / table / process visual, the way the exam presents
// it, rather than a textual data dump.
//
// Authoring rules followed here (mirroring the committed worked examples in
// writing-prompts.ts — wt1-online-grocery / wt1-museum-visitors /
// wt1-household-energy / wt1-paper-recycling):
//   • `prompt` is INSTRUCTION ONLY. The numbers live in `chart`, never in the
//     prompt text, so there is a single source of truth for the data.
//   • Every spec carries a `caption`; bar/line specs also set `unit` +
//     `yAxisLabel`. For bar/line, each series.values length === categories.length.
//   • Pie slice values total ~100 (unit '%'). Data is realistic, internally
//     consistent and tells a clear story (a trend, a comparison, a dominant
//     category) so a 150-word report is achievable.
// Chart kinds are varied across the six: bar (grouped), line (trend),
// pie (two datasets), table, process, and a sixth stacked bar.
//
// All content is original and written for IELTS preparation (Academic track).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_CHARTS_1: WritingPrompt[] = [
  // ── 1 · grouped bar — renewable electricity by source, three countries ────
  {
    id: 'wt1c1-renewable-mix',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Renewable electricity generation by source in three countries',
    prompt: [
      'The bar chart below shows the amount of electricity (in terawatt-hours) generated from three renewable sources — hydro, wind and solar — in three countries in 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      unit: 'TWh',
      yAxisLabel: 'Electricity (TWh)',
      caption: 'Electricity generated from renewable sources (TWh), 2023.',
      categories: ['Hydro', 'Wind', 'Solar'],
      series: [
        { name: 'Norvana', values: [142, 38, 9] },
        { name: 'Calderia', values: [54, 71, 88] },
        { name: 'Tasenia', values: [21, 96, 47] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 2 · line — international tourist arrivals, three regions over time ─────
  {
    id: 'wt1c1-tourist-arrivals',
    task: 'writing-task-1',
    track: 'academic',
    title: 'International tourist arrivals by region',
    prompt: [
      'The line graph below shows the number of international tourist arrivals (in millions) to three world regions between 2000 and 2024.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: 'millions',
      yAxisLabel: 'Arrivals (millions)',
      caption: 'International tourist arrivals (millions) by region, 2000–2024.',
      categories: ['2000', '2006', '2012', '2018', '2024'],
      series: [
        { name: 'Europe', values: [58, 71, 84, 102, 110] },
        { name: 'Asia-Pacific', values: [22, 34, 56, 89, 134] },
        { name: 'Africa', values: [9, 14, 21, 33, 41] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 3 · two pie charts — global freshwater use by sector, 1980 vs 2020 ────
  {
    id: 'wt1c1-freshwater-use',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How fresh water is used worldwide',
    prompt: [
      'The two pie charts below show the proportion of the world’s fresh water used by three sectors — agriculture, industry and domestic use — in 1980 and in 2020.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'pie',
      unit: '%',
      caption: 'Share of global freshwater use by sector (%), 1980 vs 2020.',
      datasets: [
        {
          name: '1980',
          slices: [
            { label: 'Agriculture', value: 72 },
            { label: 'Industry', value: 19 },
            { label: 'Domestic use', value: 9 },
          ],
        },
        {
          name: '2020',
          slices: [
            { label: 'Agriculture', value: 61 },
            { label: 'Industry', value: 25 },
            { label: 'Domestic use', value: 14 },
          ],
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 4 · table — average daily internet use (hours) by age group ───────────
  {
    id: 'wt1c1-internet-by-age',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Average daily internet use by age group',
    prompt: [
      'The table below shows the average number of hours per day that people in four age groups spent using the internet in one country in 2010, 2017 and 2024.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'table',
      unit: 'hours/day',
      caption: 'Average daily internet use by age group (hours per day).',
      columns: ['Age group', '2010', '2017', '2024'],
      rows: [
        { label: '16–24', cells: [3.1, 5.4, 7.2] },
        { label: '25–44', cells: [2.4, 4.1, 6.0] },
        { label: '45–64', cells: [1.2, 2.6, 4.3] },
        { label: '65+', cells: [0.4, 1.1, 2.5] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 5 · process (cyclical) — the natural water cycle ──────────────────────
  {
    id: 'wt1c1-water-cycle',
    task: 'writing-task-1',
    track: 'academic',
    title: 'The natural water cycle',
    prompt: [
      'The diagram below illustrates the natural water cycle, showing how water moves between the sea, the air and the land.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'process',
      cyclical: true,
      caption: 'The natural water cycle: a continuous, repeating process.',
      steps: [
        {
          label: 'Evaporation',
          detail:
            'Heat from the sun warms the surface of the sea, turning liquid water into water vapour that rises into the air.',
        },
        {
          label: 'Condensation',
          detail:
            'As the vapour rises it cools, condensing into tiny droplets that gather to form clouds.',
        },
        {
          label: 'Precipitation',
          detail:
            'When the droplets grow heavy enough, water falls back to the land as rain or snow.',
        },
        {
          label: 'Collection & run-off',
          detail:
            'Water collects in rivers and lakes and, as surface run-off, flows downhill back towards the sea.',
        },
        {
          label: 'Groundwater',
          detail:
            'Some water soaks into the soil as groundwater, slowly moving underground and returning to the sea.',
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 6 · stacked bar — university enrolment by field of study ──────────────
  {
    id: 'wt1c1-enrolment-fields',
    task: 'writing-task-1',
    track: 'academic',
    title: 'University enrolment by field of study',
    prompt: [
      'The chart below shows the number of students (in thousands) enrolled in four fields of study at three universities in 2024, with the bars showing how each university’s total enrolment is made up.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      stacked: true,
      unit: 'thousands',
      yAxisLabel: 'Students (000s)',
      caption: 'Student enrolment by field of study (thousands), 2024.',
      categories: ['Northbridge', 'Westmere', 'Aldercliff'],
      series: [
        { name: 'Sciences', values: [12, 8, 5] },
        { name: 'Engineering', values: [9, 5, 11] },
        { name: 'Business', values: [7, 14, 6] },
        { name: 'Arts & humanities', values: [10, 6, 4] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },
]
