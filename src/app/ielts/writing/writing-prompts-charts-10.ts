// ─── IELTS Academic Writing Task 1 · Chart set 10 ───────────────────────────
// A tenth bank of six Academic Task 1 prompts, each paired with a REAL chart
// spec (a `WritingChartSpec`, see src/lib/ielts/types.ts) rendered by
// src/app/ielts/writing/_components/WritingChart.tsx — so the candidate sees an
// actual bar / line / pie / table / process visual, the way the exam presents
// it, rather than a textual data dump.
//
// Authoring rules followed throughout (mirroring chart sets 1–9 and the
// committed worked examples in writing-prompts.ts):
//   • `prompt` is INSTRUCTION ONLY — it never quotes the numbers, because the
//     data lives entirely in `chart` (one source of truth).
//   • bar / line — every series.values length === categories.length, and each
//     carries `unit` + `yAxisLabel`;
//   • pie '%' slices sum to ~100 (parts of one whole);
//   • table — every row.cells length === columns.length − 1 (first column is
//     the row header);
//   • every spec sets a `caption`;
//   • numbers are realistic, internally consistent and tell a clear story
//     (a trend, a comparison, a dominant category) so a 150-word report is
//     achievable.
//
// Six fresh, original topics, deliberately distinct from every existing prompt
// across the whole chart bank (sets 1–9 + the worked examples — renewable mix,
// tourist arrivals/by-purpose, freshwater, internet-by-age, water cycle,
// enrolment, household spending, electricity sources, recycled materials,
// butterfly / coffee / chocolate / tea / water-treatment / bread / hydro /
// solar cycles, plastic-bottle & paper recycling, car ownership, CO2 by sector,
// world/city population, climate & temperature tables, cinema/streaming, phone
// features, screen time, waste disposal/composition, life expectancy, leisure
// spending, commute time, gym membership, news sources, device shipments,
// renewable share, rail vs air, home internet, museum funding/visitors, meat
// consumption, online grocery, household energy, bottled water, unemployment,
// healthcare spend, household income, app categories, working hours, airport
// passengers, travel-to-work, literacy, house prices, transport-by-city,
// water-use-by-activity):
//   1 average broadband download speed in six countries (single-series bar)
//   2 rail freight vs road freight moved over time (multi-series line)
//   3 how glass bottles are recycled into new glass (linear process)
//   4 proportion of urban trips by purpose, two years (two pies; each ~100%)
//   5 average weekly study hours by subject and year group (table)
//   6 electricity from renewables vs fossil fuels over decades (multi-series line)
// All content is original and written for IELTS preparation (Academic track).
// ────────────────────────────────────────────────────────────────────────────

import type { WritingPrompt } from '@/lib/ielts/types'

export const WRITING_CHARTS_10: WritingPrompt[] = [
  // ── 1 · bar (single series across six countries — comparison) ─────────────
  {
    id: 'wt1c10-broadband-speed',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Average broadband download speed by country',
    prompt: [
      'The bar chart below shows the average fixed broadband download speed, measured in megabits per second, in six countries in 2024.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'bar',
      unit: 'Mbps',
      yAxisLabel: 'Download speed (Mbps)',
      caption: 'Average fixed broadband download speed by country (Mbps), 2024.',
      categories: ['Singapore', 'South Korea', 'France', 'Australia', 'Brazil', 'India'],
      series: [{ name: 'Download speed', values: [298, 212, 161, 87, 64, 49] }],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 2 · multi-series line (rail vs road freight — diverging trends) ───────
  {
    id: 'wt1c10-freight-transport',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Goods moved by rail and by road over time',
    prompt: [
      'The line graph below shows the quantity of goods, in billions of tonne-kilometres, transported by rail and by road in one country between 1990 and 2020.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: 'billion tonne-km',
      yAxisLabel: 'Freight (billion tonne-km)',
      caption: 'Goods moved by rail and by road (billion tonne-kilometres), 1990–2020.',
      categories: ['1990', '1995', '2000', '2005', '2010', '2015', '2020'],
      series: [
        { name: 'Road freight', values: [120, 145, 178, 205, 224, 251, 278] },
        { name: 'Rail freight', values: [98, 86, 74, 69, 58, 52, 47] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 3 · process · LINEAR (how used glass becomes new glass) ───────────────
  {
    id: 'wt1c10-glass-recycling',
    task: 'writing-task-1',
    track: 'academic',
    title: 'How glass bottles are recycled into new glass',
    prompt: [
      'The diagram below illustrates the stages by which used glass bottles and jars are recycled into new glass containers.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'process',
      caption: 'The stages by which used glass is recycled into new glass containers.',
      steps: [
        {
          label: 'Collection',
          detail:
            'Used bottles and jars are placed in recycling bins by households and taken by lorry to a processing plant.',
        },
        {
          label: 'Sorting by colour',
          detail:
            'At the plant the glass is separated into clear, green and brown, and any metal lids, plastic or paper are removed.',
        },
        {
          label: 'Crushing',
          detail:
            'The cleaned glass is crushed by machine into small fragments known as cullet, ready to be melted.',
        },
        {
          label: 'Melting',
          detail:
            'The cullet is mixed with sand, soda ash and limestone and melted in a furnace at very high temperatures into molten glass.',
        },
        {
          label: 'Moulding',
          detail:
            'The molten glass is poured into moulds and blown with air to form new bottles and jars of the required shape.',
        },
        {
          label: 'Distribution',
          detail:
            'The new containers are cooled, inspected and delivered to factories to be filled and sold once again.',
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 4 · two pie charts (urban trips by purpose; each totals 100%) ─────────
  {
    id: 'wt1c10-trips-by-purpose',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Proportion of urban journeys by purpose',
    prompt: [
      'The two pie charts below show the reasons why residents of one city made journeys in 2004 and in 2024.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'pie',
      unit: '%',
      caption: 'Share of urban journeys by main purpose (%), 2004 vs 2024.',
      datasets: [
        {
          name: '2004',
          slices: [
            { label: 'Commuting to work', value: 41 },
            { label: 'Shopping', value: 24 },
            { label: 'Education', value: 15 },
            { label: 'Leisure & visiting', value: 14 },
            { label: 'Other', value: 6 },
          ],
        },
        {
          name: '2024',
          slices: [
            { label: 'Commuting to work', value: 29 },
            { label: 'Shopping', value: 19 },
            { label: 'Education', value: 16 },
            { label: 'Leisure & visiting', value: 27 },
            { label: 'Other', value: 9 },
          ],
        },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 5 · table (subject × year group — average weekly study hours) ─────────
  {
    id: 'wt1c10-study-hours',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Average weekly study hours by subject and year group',
    prompt: [
      'The table below shows the average number of hours per week that students in three year groups spent studying four school subjects at home in 2023.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'table',
      unit: 'hours',
      caption: 'Average weekly home-study hours by subject and year group, 2023.',
      columns: ['Subject', 'Year 9', 'Year 11', 'Year 13'],
      rows: [
        { label: 'Mathematics', cells: [2.4, 4.1, 5.6] },
        { label: 'Science', cells: [1.9, 3.6, 5.2] },
        { label: 'English', cells: [1.6, 2.8, 3.4] },
        { label: 'Languages', cells: [1.1, 1.7, 2.0] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },

  // ── 6 · multi-series line (renewable vs fossil electricity — crossover) ───
  {
    id: 'wt1c10-electricity-sources-decades',
    task: 'writing-task-1',
    track: 'academic',
    title: 'Electricity generated from renewables and fossil fuels',
    prompt: [
      'The line graph below shows the amount of electricity, in terawatt-hours, generated from renewable sources and from fossil fuels in one country between 1980 and 2020.',
      '',
      'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      '',
      'Write at least 150 words.',
    ].join('\n'),
    chart: {
      kind: 'line',
      unit: 'TWh',
      yAxisLabel: 'Electricity generated (TWh)',
      caption: 'Electricity generated from renewables and fossil fuels (TWh), 1980–2020.',
      categories: ['1980', '1990', '2000', '2010', '2020'],
      series: [
        { name: 'Fossil fuels', values: [210, 248, 265, 230, 162] },
        { name: 'Renewables', values: [22, 38, 61, 118, 214] },
      ],
    },
    minWords: 150,
    suggestedMinutes: 20,
  },
]
