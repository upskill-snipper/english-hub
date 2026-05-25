// ─── IELTS Academic Writing Task 1 · Chart set 6 ────────────────────────────
// A sixth bank of six Academic Task 1 prompts, each paired with a REAL chart
// spec (a `WritingChartSpec`, see src/lib/ielts/types.ts) rendered by
// src/app/ielts/writing/_components/WritingChart.tsx — so the candidate sees an
// actual bar / line / pie / table / process visual, the way the exam presents
// it, rather than a textual data dump.
//
// Authoring rules followed throughout (mirroring chart sets 1–5 and the
// committed worked examples in writing-prompts.ts):
//   • `prompt` is INSTRUCTION ONLY — it never quotes the numbers, because the
//     data lives entirely in `chart` (one source of truth).
//   • bar / line — every series.values length === categories.length, and each
//     carries `unit` + `yAxisLabel`;
//   • pie '%' slices sum to ~100 (parts of one whole);
//   • table — every row.cells length === columns.length − 1 (the row header
//     occupies columns[0]);
//   • every spec sets a `caption`;
//   • numbers are realistic, internally consistent and tell a clear story
//     (a trend, a comparison, a dominant category) so a 150-word report is
//     achievable.
//
// Six fresh, original topics, deliberately distinct from every existing prompt
// across the whole chart bank (online grocery, paper recycling, museum
// visitors, household energy, renewable mix, tourist arrivals, freshwater,
// internet-by-age, water cycle, university enrolment, household spending,
// electricity sources, recycled materials, butterfly/coffee/chocolate/
// water-treatment/bread cycles, car ownership, CO2 by sector, world
// population, climate table, cinema/streaming, phone features, screen time,
// waste disposal, life expectancy, leisure spending, commute time, gym
// membership, news sources, device shipments, renewable share two countries):
//   1 rail vs air passenger journeys over time (multi-series line)
//   2 households with home internet access by country (grouped bar)
//   3 sources of funding for a national museum (single pie)
//   4 population of four cities across four census years (table)
//   5 how electricity is generated from solar panels (linear process)
//   6 average meat consumption per person by type over time (multi-series line)
// All content is original and written for IELTS preparation (Academic track).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_CHARTS_6: WritingPrompt[] = [
  // ── 1 · multi-series line (two transport modes over time) ─────────────────
  {
    id: 'wt1c6-rail-vs-air',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Rail and air passenger journeys over time',
    prompt: [
      'The line graph below shows the number of passenger journeys made by rail and by air within one country each year between 2000 and 2024, measured in millions of journeys.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: 'millions',
      yAxisLabel: 'Journeys (millions)',
      caption: 'Domestic passenger journeys by rail and by air (millions), 2000–2024.',
      categories: ['2000', '2006', '2012', '2018', '2024'],
      series: [
        { name: 'Rail', values: [38, 47, 62, 84, 109] },
        { name: 'Air', values: [55, 71, 78, 69, 52] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 2 · grouped bar (two years across five countries) ─────────────────────
  {
    id: 'wt1c6-home-internet-access',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Households with home internet access by country',
    prompt: [
      'The bar chart below shows the percentage of households with access to the internet at home in five countries in 2005 and 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      unit: '%',
      yAxisLabel: 'Households with access (%)',
      caption: 'Share of households with home internet access (%), 2005 vs 2023.',
      categories: ['South Korea', 'Germany', 'Brazil', 'Egypt', 'Kenya'],
      series: [
        { name: '2005', values: [92, 62, 17, 8, 3] },
        { name: '2023', values: [99, 96, 84, 72, 41] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 3 · single pie (parts of one whole; slices total 100%) ────────────────
  {
    id: 'wt1c6-museum-funding',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Sources of funding for a national museum',
    prompt: [
      'The pie chart below shows the proportion of a national museum’s total income that came from five different sources in 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'pie',
      unit: '%',
      caption: 'Share of a national museum’s total income by source (%), 2023.',
      datasets: [
        {
          name: '2023',
          slices: [
            { label: 'Government grant', value: 44 },
            { label: 'Ticket sales', value: 23 },
            { label: 'Shop & café', value: 15 },
            { label: 'Private donations', value: 11 },
            { label: 'Venue hire', value: 7 },
          ],
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 4 · table (city × four census years) ──────────────────────────────────
  {
    id: 'wt1c6-city-populations',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Population of four cities across census years',
    prompt: [
      'The table below shows the population, in millions, of four cities recorded in the census years 1990, 2000, 2010 and 2020.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'table',
      unit: 'millions',
      caption: 'Population of four cities (millions), by census year, 1990–2020.',
      columns: ['City', '1990', '2000', '2010', '2020'],
      rows: [
        { label: 'Lagos', cells: [4.8, 7.2, 10.4, 14.9] },
        { label: 'Jakarta', cells: [8.2, 9.0, 9.6, 10.6] },
        { label: 'Tokyo', cells: [32.5, 34.5, 36.9, 37.4] },
        { label: 'Detroit', cells: [3.7, 3.9, 3.8, 3.5] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 5 · process · LINEAR (how a technology generates electricity) ─────────
  {
    id: 'wt1c6-solar-electricity',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How solar panels generate electricity',
    prompt: [
      'The diagram below illustrates how rooftop solar panels generate electricity and supply it to a home.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'process',
      caption: 'How rooftop solar panels turn sunlight into electricity for a home.',
      steps: [
        {
          label: 'Sunlight captured',
          detail:
            'Sunlight falls on the solar panels fixed to the roof, where photovoltaic cells absorb its energy.',
        },
        {
          label: 'Direct current produced',
          detail:
            'The cells convert the absorbed sunlight into a flow of direct current (DC) electricity.',
        },
        {
          label: 'Conversion by inverter',
          detail:
            'The DC electricity passes to an inverter, which changes it into alternating current (AC) that the home can use.',
        },
        {
          label: 'Powering the home',
          detail:
            'The AC electricity travels to the fuse box and is used to power lights and appliances inside the house.',
        },
        {
          label: 'Surplus exported to grid',
          detail:
            'Any electricity not used is fed back through a meter into the national grid, earning the household a credit.',
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 6 · multi-series line (three meat types over time) ────────────────────
  {
    id: 'wt1c6-meat-consumption',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Average meat consumption per person by type',
    prompt: [
      'The line graph below shows the average amount of three types of meat — poultry, beef and pork — eaten per person each year in one country between 1980 and 2020, measured in kilograms.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: 'kg',
      yAxisLabel: 'Consumption per person (kg)',
      caption: 'Average annual meat consumption per person by type (kg), 1980–2020.',
      categories: ['1980', '1990', '2000', '2010', '2020'],
      series: [
        { name: 'Poultry', values: [14, 21, 31, 42, 51] },
        { name: 'Beef', values: [38, 35, 31, 27, 22] },
        { name: 'Pork', values: [26, 28, 29, 28, 27] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },
]
