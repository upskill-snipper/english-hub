// ─── IELTS Academic Writing Task 1 · Chart set 9 ────────────────────────────
// A ninth bank of six Academic Task 1 prompts, each paired with a REAL chart
// spec (a `WritingChartSpec`, see src/lib/ielts/types.ts) rendered by
// src/app/ielts/writing/_components/WritingChart.tsx — so the candidate sees an
// actual bar / line / pie / table / process visual, the way the exam presents
// it, rather than a textual data dump.
//
// Authoring rules followed throughout (mirroring chart sets 1–7 and the
// committed worked examples in writing-prompts.ts):
//   • `prompt` is INSTRUCTION ONLY — it never quotes the numbers, because the
//     data lives entirely in `chart` (one source of truth).
//   • bar / line — every series.values length === categories.length, and each
//     carries `unit` + `yAxisLabel`;
//   • pie '%' slices sum to ~100 (parts of one whole);
//   • every spec sets a `caption`;
//   • numbers are realistic, internally consistent and tell a clear story
//     (a trend, a comparison, a dominant category) so a 150-word report is
//     achievable.
//
// Six fresh, original topics, deliberately distinct from every existing prompt
// across the whole chart bank (sets 1–7 + the worked examples — renewable mix,
// tourist arrivals by region, freshwater by sector, internet-by-age, water
// cycle, enrolment, household spending, electricity sources, recycled
// materials, butterfly/coffee/chocolate/water-treatment/bread/solar/dam
// cycles, car ownership, CO2 by sector, world/city population, climate table,
// cinema/streaming, phone features, screen time, waste disposal/dealt-with,
// life expectancy, leisure spending, commute time, gym membership, news
// sources, device shipments, renewable share, rail vs air, home internet,
// museum funding/visitors, meat consumption, online grocery, paper recycling,
// household energy, bottled water, unemployment, healthcare spend, household
// income, app categories):
//   1 international tourist arrivals by purpose of visit (single-series bar)
//   2 average house prices in two cities over time (multi-series line)
//   3 how tea is processed from leaf to packet (linear process)
//   4 composition of household waste in one country, two years (two pies)
//   5 share of trips by mode of transport in four cities (table)
//   6 average household water use per person by activity, four countries
//     (STACKED bar)
// All content is original and written for IELTS preparation (Academic track).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_CHARTS_9: WritingPrompt[] = [
  // ── 1 · bar (single series across five purposes — comparison) ─────────────
  {
    id: 'wt1c9-arrivals-by-purpose',
    task: 'writing-task-1',
    track: 'academic',
    title: 'International tourist arrivals by purpose of visit',
    prompt: [
      'The bar chart below shows the number of international visitors arriving in one country in 2023, in millions, grouped by their main purpose of visit.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      unit: 'millions',
      yAxisLabel: 'Visitors (millions)',
      caption: 'International visitor arrivals by main purpose of visit (millions), 2023.',
      categories: ['Holiday', 'Visiting family', 'Business', 'Study', 'Other'],
      series: [{ name: 'Visitors', values: [18.4, 7.9, 5.2, 2.1, 1.3] }],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 2 · multi-series line (two cities' house prices over two decades) ──────
  {
    id: 'wt1c9-house-prices',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Average house prices in two cities over time',
    prompt: [
      'The line graph below shows the average price of a house, in thousands of US dollars, in two cities between 2000 and 2025.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: 'US$ thousands',
      yAxisLabel: 'Average price (US$ 000s)',
      caption: 'Average house price by city (US$ thousands), 2000–2025.',
      categories: ['2000', '2005', '2010', '2015', '2020', '2025'],
      series: [
        { name: 'Riverton', values: [180, 240, 215, 290, 360, 430] },
        { name: 'Lakeside', values: [120, 165, 175, 205, 245, 310] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 3 · process · LINEAR (how tea is processed from leaf to packet) ───────
  {
    id: 'wt1c9-tea-processing',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How tea is processed from leaf to packet',
    prompt: [
      'The diagram below shows the stages involved in processing tea leaves into the dried tea sold in shops.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'process',
      caption: 'The stages by which freshly picked tea leaves are turned into packaged black tea.',
      steps: [
        {
          label: 'Plucking',
          detail:
            'Workers hand-pick the youngest leaves and buds from the tops of the tea bushes on the plantation.',
        },
        {
          label: 'Withering',
          detail:
            'The fresh leaves are spread on racks and left in warm air for several hours so that much of their moisture is lost and they soften.',
        },
        {
          label: 'Rolling',
          detail:
            'The withered leaves are rolled by machine, which twists and breaks them and releases the natural juices inside.',
        },
        {
          label: 'Oxidation',
          detail:
            'The rolled leaves are left to react with the air, gradually turning from green to a deep coppery brown and developing their flavour.',
        },
        {
          label: 'Drying',
          detail:
            'The oxidised leaves are passed through hot ovens, which stop the reaction and dry them into firm, dark pieces.',
        },
        {
          label: 'Sorting & packing',
          detail:
            'The dried tea is graded by leaf size, then weighed and sealed into bags and boxes ready to be sold.',
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 4 · two pie charts (household waste composition; each totals 100%) ─────
  {
    id: 'wt1c9-waste-composition',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Composition of household waste in one country',
    prompt: [
      'The two pie charts below show what the household waste produced in one country was made up of in 2005 and in 2025.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'pie',
      unit: '%',
      caption: 'Composition of household waste by material (%), 2005 vs 2025.',
      datasets: [
        {
          name: '2005',
          slices: [
            { label: 'Food & garden', value: 38 },
            { label: 'Paper & card', value: 26 },
            { label: 'Plastic', value: 14 },
            { label: 'Glass & metal', value: 13 },
            { label: 'Other', value: 9 },
          ],
        },
        {
          name: '2025',
          slices: [
            { label: 'Food & garden', value: 31 },
            { label: 'Paper & card', value: 18 },
            { label: 'Plastic', value: 23 },
            { label: 'Glass & metal', value: 11 },
            { label: 'Other', value: 17 },
          ],
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 5 · table (city × share of trips by transport mode) ───────────────────
  {
    id: 'wt1c9-transport-by-city',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Share of trips by mode of transport in four cities',
    prompt: [
      'The table below shows the percentage of daily journeys made by four modes of transport in four cities in 2024.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'table',
      unit: '%',
      caption: 'Share of daily journeys by mode of transport (%), by city, 2024.',
      columns: ['City', 'Car', 'Public transport', 'Cycling', 'Walking'],
      rows: [
        { label: 'Amsterdam', cells: [22, 28, 34, 16] },
        { label: 'Tokyo', cells: [18, 51, 9, 22] },
        { label: 'Los Angeles', cells: [74, 11, 3, 12] },
        { label: 'Bogotá', cells: [31, 44, 7, 18] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 6 · STACKED bar (activities make up each country's per-person total) ──
  {
    id: 'wt1c9-water-use-by-activity',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Average household water use per person by activity',
    prompt: [
      'The chart below shows the average amount of water used per person each day, in litres, for four household activities in four countries in 2024, with the bars showing how each country’s daily total per person is made up.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      stacked: true,
      unit: 'litres/person/day',
      yAxisLabel: 'Litres per person per day',
      caption: 'Average daily household water use per person by activity (litres), 2024.',
      categories: ['USA', 'Australia', 'Spain', 'Kenya'],
      series: [
        { name: 'Bathing & showering', values: [95, 70, 48, 14] },
        { name: 'Toilet flushing', values: [80, 55, 40, 9] },
        { name: 'Laundry & dishes', values: [70, 52, 35, 11] },
        { name: 'Cooking & drinking', values: [25, 23, 22, 16] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },
]
