import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  QUALIFICATION,
  SECTIONS,
  ASSESSMENT_OBJECTIVES,
  READING_SKILLS,
  WRITING_SKILLS,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'
import type { AOKey } from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/study-plan'

export const metadata: Metadata = {
  openGraph: {
    title: 'iLowerSecondary English study plan (LEH11/01)',
    description:
      'A weighting-led revision study plan for the Pearson Edexcel International Award in Lower Secondary English (LEH11/01): a six-week countdown, a one-week intensive, a self-test routine, a weakness-to-page diagnostic, and exam-week and exam-day routines.',
  },
  title: 'iLowerSecondary English study plan (LEH11/01)',
  description:
    'A weighting-led revision study plan for the Pearson Edexcel International Award in Lower Secondary English (LEH11/01): a six-week countdown, a one-week intensive, a self-test routine, a weakness-to-page diagnostic, and exam-week and exam-day routines.',
  alternates: { canonical: PAGE_URL },
}

const READING_AOS: AOKey[] = ['RAO1', 'RAO2', 'RAO3', 'RAO4', 'RAO5']
const WRITING_AOS: AOKey[] = ['WAO1', 'WAO2']

// AOs ordered by weighting, heaviest first — drives prioritisation copy.
const AOS_BY_WEIGHT: AOKey[] = [...READING_AOS, ...WRITING_AOS].sort(
  (a, b) => ASSESSMENT_OBJECTIVES[b].weightPct - ASSESSMENT_OBJECTIVES[a].weightPct,
)

function aoLabel(key: AOKey) {
  return `${key} (${ASSESSMENT_OBJECTIVES[key].weightPct}%)`
}

type WeekPlan = {
  week: string
  headline: string
  focusAOs: AOKey[]
  why: string
  drills: { label: string; href: string }[]
}

const SIX_WEEK_PLAN: WeekPlan[] = [
  {
    week: 'Week 6',
    headline: 'Diagnose and map the paper',
    focusAOs: ['WAO1', 'RAO4'],
    why: 'Start with the two heaviest-weighted objectives so the bulk of your revision time lands where the most marks are. Sit one timed paper cold to expose your real weaknesses.',
    drills: [
      { label: 'Read the full specification', href: '/ks3/ilowersecondary/specification' },
      { label: 'Learn the exam format and timings', href: '/ks3/ilowersecondary/exam-format' },
      {
        label: 'Sit Practice Paper 1 (timed, cold)',
        href: '/ks3/ilowersecondary/practice/paper-1',
      },
      { label: 'Study the mark scheme', href: '/ks3/ilowersecondary/mark-scheme' },
    ],
  },
  {
    week: 'Week 5',
    headline: 'Language at word and sentence level',
    focusAOs: ['RAO4'],
    why: `${aoLabel('RAO4')} is the single biggest reading objective, so it gets a dedicated week. Drill synonym selection, word-class identification and language-effect explanation.`,
    drills: [
      { label: "Writer's use of language", href: '/ks3/ilowersecondary/reading/language' },
      { label: 'Grammar terminology', href: '/ks3/ilowersecondary/reading/grammar-terminology' },
      {
        label: 'Synonym & vocabulary questions',
        href: '/ks3/ilowersecondary/question-types/synonym-vocabulary',
      },
    ],
  },
  {
    week: 'Week 4',
    headline: 'Purpose, viewpoint and effect on the reader',
    focusAOs: ['RAO5'],
    why: `${aoLabel('RAO5')} is the second-heaviest reading objective. Practise explaining the deeper meaning and the effect on the reader without lifting words unexplained.`,
    drills: [
      {
        label: "Writer's purpose & viewpoint",
        href: '/ks3/ilowersecondary/reading/purpose-viewpoint',
      },
      {
        label: 'Meaning & impact questions',
        href: '/ks3/ilowersecondary/question-types/meaning-impact',
      },
      { label: 'Critical response', href: '/ks3/ilowersecondary/reading/critical-response' },
    ],
  },
  {
    week: 'Week 3',
    headline: 'Writing: form, audience, purpose and structure',
    focusAOs: ['WAO1'],
    why: `${aoLabel('WAO1')} carries more marks than any other objective. Build the Section B habit: brief plan, matched form and audience, controlled and linked paragraphs.`,
    drills: [
      { label: 'The Section B task', href: '/ks3/ilowersecondary/writing/section-b-task' },
      {
        label: 'Form, audience & purpose',
        href: '/ks3/ilowersecondary/writing/form-audience-purpose',
      },
      {
        label: 'Structure & organisation',
        href: '/ks3/ilowersecondary/writing/structure-organisation',
      },
      {
        label: 'Planning & proofreading',
        href: '/ks3/ilowersecondary/writing/planning-proofreading',
      },
    ],
  },
  {
    week: 'Week 2',
    headline: 'Writing accuracy, plus structure and inference',
    focusAOs: ['WAO2', 'RAO3', 'RAO2'],
    why: `${aoLabel('WAO2')} rewards accurate grammar, punctuation and spelling — fixable with focused proofreading. Pair it with ${aoLabel('RAO3')} and ${aoLabel('RAO2')} reading practice.`,
    drills: [
      {
        label: 'Grammar, punctuation & spelling',
        href: '/ks3/ilowersecondary/writing/grammar-punctuation-spelling',
      },
      { label: 'Sentence variety', href: '/ks3/ilowersecondary/writing/sentence-variety' },
      { label: 'Vocabulary & cohesion', href: '/ks3/ilowersecondary/writing/vocabulary-cohesion' },
      {
        label: 'Structure & organisation of texts',
        href: '/ks3/ilowersecondary/reading/structure',
      },
      { label: 'Inference', href: '/ks3/ilowersecondary/reading/inference' },
      {
        label: 'Punctuation-effect questions',
        href: '/ks3/ilowersecondary/question-types/punctuation-effect',
      },
    ],
  },
  {
    week: 'Week 1',
    headline: 'Comparison, retrieval and a final timed run',
    focusAOs: ['RAO1', 'RAO2', 'RAO4', 'RAO5'],
    why: `Lock in the lighter-weighted retrieval (${aoLabel('RAO1')}) and master the high-value 6-mark comparison question, which assesses RAO2, RAO4 and RAO5 together. Finish with a full timed paper.`,
    drills: [
      { label: 'Comparing non-fiction texts', href: '/ks3/ilowersecondary/reading/comparison' },
      {
        label: 'Extended comparison question',
        href: '/ks3/ilowersecondary/question-types/extended-comparison',
      },
      { label: 'Retrieval', href: '/ks3/ilowersecondary/reading/retrieval' },
      { label: 'Short-answer questions', href: '/ks3/ilowersecondary/question-types/short-answer' },
      {
        label: 'Feature-table questions',
        href: '/ks3/ilowersecondary/question-types/feature-tables',
      },
      { label: 'Re-sit Practice Paper 1 (timed)', href: '/ks3/ilowersecondary/practice/paper-1' },
    ],
  },
]

const ONE_WEEK_PLAN: { day: string; task: string; href: string }[] = [
  {
    day: 'Day 1',
    task: `RAO4 — language at word and sentence level (the biggest reading objective, ${ASSESSMENT_OBJECTIVES.RAO4.weightPct}%).`,
    href: '/ks3/ilowersecondary/reading/language',
  },
  {
    day: 'Day 2',
    task: `WAO1 — form, audience, purpose and paragraph structure (the biggest objective overall, ${ASSESSMENT_OBJECTIVES.WAO1.weightPct}%).`,
    href: '/ks3/ilowersecondary/writing/section-b-task',
  },
  {
    day: 'Day 3',
    task: `RAO5 — purpose, viewpoint and effect on the reader (${ASSESSMENT_OBJECTIVES.RAO5.weightPct}%).`,
    href: '/ks3/ilowersecondary/reading/purpose-viewpoint',
  },
  {
    day: 'Day 4',
    task: `WAO2 — accurate grammar, punctuation and spelling (${ASSESSMENT_OBJECTIVES.WAO2.weightPct}%); build a proofreading checklist.`,
    href: '/ks3/ilowersecondary/writing/grammar-punctuation-spelling',
  },
  {
    day: 'Day 5',
    task: 'The 6-mark extended comparison question — high value, assesses RAO2, RAO4 and RAO5 together.',
    href: '/ks3/ilowersecondary/question-types/extended-comparison',
  },
  {
    day: 'Day 6',
    task: 'Full timed Practice Paper 1 under exam conditions; mark it against the mark scheme.',
    href: '/ks3/ilowersecondary/practice/paper-1',
  },
  {
    day: 'Day 7',
    task: 'Targeted fixes only — re-study the one or two pages where you lost the most marks. Light review; rest before the exam.',
    href: '/ks3/ilowersecondary/mark-scheme',
  },
]

const SELF_TEST_ROUTINE: { step: string; detail: string }[] = [
  {
    step: 'Timed mini-test (45 min)',
    detail:
      'Each week, answer one reading set plus one short writing task strictly to the clock. Mirror the recommended split: most time on reading, the rest on writing.',
  },
  {
    step: 'Mark it yourself',
    detail:
      'Mark your work against the mark scheme grids before you look at any answers. Be strict: an unexplained lift from the text earns nothing.',
  },
  {
    step: 'Log the loss',
    detail:
      'Write down every question type you dropped marks on and the objective it tests. Patterns over two or three weeks reveal your true weakness.',
  },
  {
    step: 'Re-drill the weakest objective',
    detail:
      'Spend the rest of the week on the single objective costing you the most marks — use the diagnostic table below to find the right page.',
  },
  {
    step: 'Re-test the same skill',
    detail:
      'End the week by re-attempting only that question type. Confirm the gap has closed before moving on.',
  },
]

const DIAGNOSTIC: {
  weakness: string
  ao: AOKey
  pages: { label: string; href: string }[]
}[] = [
  {
    weakness: 'I miss simple facts or "Why…?" retrieval marks',
    ao: 'RAO1',
    pages: [
      { label: 'Retrieval', href: '/ks3/ilowersecondary/reading/retrieval' },
      { label: 'Short-answer questions', href: '/ks3/ilowersecondary/question-types/short-answer' },
    ],
  },
  {
    weakness: 'I cannot read beyond the literal / weak inference',
    ao: 'RAO2',
    pages: [
      { label: 'Inference', href: '/ks3/ilowersecondary/reading/inference' },
      { label: 'Critical response', href: '/ks3/ilowersecondary/reading/critical-response' },
    ],
  },
  {
    weakness: 'I cannot comment on structure or organisation',
    ao: 'RAO3',
    pages: [
      {
        label: 'Structure & organisation of texts',
        href: '/ks3/ilowersecondary/reading/structure',
      },
      {
        label: 'Punctuation-effect questions',
        href: '/ks3/ilowersecondary/question-types/punctuation-effect',
      },
      {
        label: 'Feature-table questions',
        href: '/ks3/ilowersecondary/question-types/feature-tables',
      },
    ],
  },
  {
    weakness: 'I struggle with synonyms, word class or language effect',
    ao: 'RAO4',
    pages: [
      { label: "Writer's use of language", href: '/ks3/ilowersecondary/reading/language' },
      { label: 'Grammar terminology', href: '/ks3/ilowersecondary/reading/grammar-terminology' },
      {
        label: 'Synonym & vocabulary questions',
        href: '/ks3/ilowersecondary/question-types/synonym-vocabulary',
      },
    ],
  },
  {
    weakness: "I miss the writer's purpose, viewpoint or effect on the reader",
    ao: 'RAO5',
    pages: [
      {
        label: "Writer's purpose & viewpoint",
        href: '/ks3/ilowersecondary/reading/purpose-viewpoint',
      },
      {
        label: 'Meaning & impact questions',
        href: '/ks3/ilowersecondary/question-types/meaning-impact',
      },
    ],
  },
  {
    weakness: 'I lose marks on the 6-mark comparison question',
    ao: 'RAO4',
    pages: [
      { label: 'Comparing non-fiction texts', href: '/ks3/ilowersecondary/reading/comparison' },
      {
        label: 'Extended comparison question',
        href: '/ks3/ilowersecondary/question-types/extended-comparison',
      },
    ],
  },
  {
    weakness: 'My writing drifts off form, audience or purpose',
    ao: 'WAO1',
    pages: [
      { label: 'The Section B task', href: '/ks3/ilowersecondary/writing/section-b-task' },
      {
        label: 'Form, audience & purpose',
        href: '/ks3/ilowersecondary/writing/form-audience-purpose',
      },
      {
        label: 'Structure & organisation',
        href: '/ks3/ilowersecondary/writing/structure-organisation',
      },
      {
        label: 'Planning & proofreading',
        href: '/ks3/ilowersecondary/writing/planning-proofreading',
      },
    ],
  },
  {
    weakness: 'My grammar, punctuation or spelling lets me down',
    ao: 'WAO2',
    pages: [
      {
        label: 'Grammar, punctuation & spelling',
        href: '/ks3/ilowersecondary/writing/grammar-punctuation-spelling',
      },
      { label: 'Sentence variety', href: '/ks3/ilowersecondary/writing/sentence-variety' },
      { label: 'Vocabulary & cohesion', href: '/ks3/ilowersecondary/writing/vocabulary-cohesion' },
    ],
  },
]

const EXAM_WEEK: string[] = [
  'Stop learning new material. Revision now is consolidation, not expansion.',
  'Sit one final full timed Practice Paper 1, then mark it strictly against the mark scheme.',
  'Re-read only the pages for the one or two objectives where you still drop the most marks.',
  'Rehearse your timing plan out loud: which section gets how long, and when you switch.',
  'Memorise your Section B routine — plan, match form and audience, link paragraphs, proofread.',
  'Prepare equipment the night before. No dictionary is allowed in the assessment.',
  'Sleep normally; a rested mind retrieves more than a crammed one.',
]

const EXAM_DAY: string[] = [
  'Eat properly and arrive early so you start calm, not rushed.',
  'Read the instructions and check how many texts and questions there are before you write.',
  `Follow your timing plan: most of the paper is reading, the rest is the writing task. The test lasts ${QUALIFICATION.durationLabel}.`,
  'Reading: locate the exact place in the text; answer precisely; never leave a closed question blank.',
  'For levelled questions, explain the effect — do not lift words from the text without explaining them.',
  'Writing: spend the first few minutes on a brief plan, then keep paragraphs controlled and linked.',
  'Save the last few minutes to proofread for grammar, punctuation and spelling slips.',
  'If you change a multiple-choice answer, clearly cancel the old box and mark the new one.',
]

export default async function StudyPlanPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Study plan', url: PAGE_URL },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumb} nonce={nonce} />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span> · </span>
        <Link href="/ks3" className="hover:text-foreground">
          KS3
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          iLowerSecondary English
        </Link>
        <span> · </span>
        <span>Study plan</span>
      </p>

      <h1>{QUALIFICATION.subjectCode} study plan</h1>
      <p className="lead">
        A structured, weighting-led revision plan to prepare for the {QUALIFICATION.paperCode}{' '}
        achievement test. It puts the most time where the most marks are: the heaviest-weighted
        objectives come first, the lighter ones later.
      </p>

      {/* ── Why weighting drives the plan ──────────────────────────────── */}
      <section className="my-10">
        <h2>Prioritise by weighting</h2>
        <p className="text-sm text-muted-foreground">
          The test is worth {QUALIFICATION.totalMarks} marks across {SECTIONS.A.name} (
          {SECTIONS.A.marks} marks) and {SECTIONS.B.name} ({SECTIONS.B.marks} marks). Not every
          objective is worth the same. Revise them in order of weight so your effort tracks the
          marks — the two biggest are {AOS_BY_WEIGHT[0]} and {AOS_BY_WEIGHT[1]}.
        </p>
        <div className="not-prose mt-4 overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card">
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Priority
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Code
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Descriptor
                </th>
                <th className="px-4 py-3 text-right font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Weighting
                </th>
              </tr>
            </thead>
            <tbody>
              {AOS_BY_WEIGHT.map((key, i) => {
                const ao = ASSESSMENT_OBJECTIVES[key]
                return (
                  <tr key={ao.code} className="border-t border-border/60 align-top">
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{i + 1}</td>
                    <td className="px-4 py-3 font-mono text-xs text-primary">{ao.code}</td>
                    <td className="px-4 py-3 text-foreground leading-relaxed">{ao.descriptor}</td>
                    <td className="px-4 py-3 text-right font-mono text-xs text-muted-foreground">
                      {ao.weightPct}%
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Six-week countdown ─────────────────────────────────────────── */}
      <section className="my-10">
        <h2>The six-week countdown</h2>
        <p className="text-sm text-muted-foreground">
          One focused week per stage, working down from the test date. Heaviest-weighted objectives
          are drilled first so they get the most total revision time across the six weeks.
        </p>
        <div className="not-prose mt-4 space-y-3">
          {SIX_WEEK_PLAN.map((wk) => (
            <div key={wk.week} className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-foreground">
                  <span className="font-mono text-xs text-primary">{wk.week}</span> — {wk.headline}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {wk.focusAOs.map((ao) => (
                    <span
                      key={ao}
                      className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-[11px] text-primary"
                    >
                      {aoLabel(ao)}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{wk.why}</p>
              <p className="mt-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                Drill these pages
              </p>
              <ul className="mt-1 space-y-1.5 text-sm">
                {wk.drills.map((d) => (
                  <li key={d.href + d.label} className="flex gap-2">
                    <span className="text-primary" aria-hidden>
                      →
                    </span>
                    <Link
                      href={d.href}
                      className="text-primary hover:text-foreground underline underline-offset-2"
                    >
                      {d.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── One-week intensive ─────────────────────────────────────────── */}
      <section className="my-10">
        <h2>If you only have one week</h2>
        <p className="text-sm text-muted-foreground">
          No time for the full countdown? Spend each day on the next highest-value target. Skip
          nothing on Days 1–4 — those are the four heaviest-weighted objectives.
        </p>
        <div className="not-prose mt-4 overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card">
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Day
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Focus
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Study
                </th>
              </tr>
            </thead>
            <tbody>
              {ONE_WEEK_PLAN.map((d) => (
                <tr key={d.day} className="border-t border-border/60 align-top">
                  <td className="px-4 py-3 font-mono text-xs text-primary whitespace-nowrap">
                    {d.day}
                  </td>
                  <td className="px-4 py-3 text-foreground leading-relaxed">{d.task}</td>
                  <td className="px-4 py-3">
                    <Link
                      href={d.href}
                      className="text-primary hover:text-foreground underline underline-offset-2"
                    >
                      Open page
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Weekly self-test routine ───────────────────────────────────── */}
      <section className="my-10">
        <h2>Weekly self-test routine</h2>
        <p className="text-sm text-muted-foreground">
          Repeat this loop every week of your plan. It turns revision into measurable improvement
          instead of passive re-reading.
        </p>
        <ol className="not-prose mt-4 space-y-3">
          {SELF_TEST_ROUTINE.map((s, i) => (
            <li key={s.step} className="rounded-xl border border-border/60 bg-card p-4">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs text-primary">{i + 1}</span>
                <h3 className="text-sm font-semibold text-foreground">{s.step}</h3>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Diagnose your weakness ─────────────────────────────────────── */}
      <section className="my-10">
        <h2>Diagnose your weakness, then study the right page</h2>
        <p className="text-sm text-muted-foreground">
          Find the row that matches where you lose marks, note the objective it tests, and go
          straight to the linked pages.
        </p>
        <div className="not-prose mt-4 overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card">
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  If you struggle with…
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Objective
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Study these pages
                </th>
              </tr>
            </thead>
            <tbody>
              {DIAGNOSTIC.map((row) => (
                <tr key={row.weakness} className="border-t border-border/60 align-top">
                  <td className="px-4 py-3 text-foreground leading-relaxed">{row.weakness}</td>
                  <td className="px-4 py-3 font-mono text-xs text-primary whitespace-nowrap">
                    {aoLabel(row.ao)}
                  </td>
                  <td className="px-4 py-3">
                    <ul className="space-y-1.5">
                      {row.pages.map((p) => (
                        <li key={p.href + p.label} className="flex gap-2">
                          <span className="text-primary" aria-hidden>
                            →
                          </span>
                          <Link
                            href={p.href}
                            className="text-primary hover:text-foreground underline underline-offset-2"
                          >
                            {p.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Exam-week and exam-day routines ────────────────────────────── */}
      <section className="my-10">
        <h2>Exam-week and exam-day routines</h2>
        <div className="not-prose mt-4 grid gap-3 lg:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              The week before
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {EXAM_WEEK.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary" aria-hidden>
                    ·
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              Exam day
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {EXAM_DAY.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary" aria-hidden>
                    ·
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Cross-links ────────────────────────────────────────────────── */}
      <section className="my-10">
        <h2>Keep going</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-3">
          <Link
            href="/ks3/ilowersecondary/practice/paper-1"
            className="rounded-xl border border-border/60 bg-card p-4 hover:border-primary/60"
          >
            <p className="text-sm font-semibold text-foreground">Practice Paper 1</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Sit a full timed paper under exam conditions.
            </p>
          </Link>
          <Link
            href="/ks3/ilowersecondary/mark-scheme"
            className="rounded-xl border border-border/60 bg-card p-4 hover:border-primary/60"
          >
            <p className="text-sm font-semibold text-foreground">Mark scheme</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Mark your own work against the official grids.
            </p>
          </Link>
          <Link
            href="/ks3/ilowersecondary/grade-targets"
            className="rounded-xl border border-border/60 bg-card p-4 hover:border-primary/60"
          >
            <p className="text-sm font-semibold text-foreground">Grade targets</p>
            <p className="mt-1 text-sm text-muted-foreground">
              See what each grade needs and set your goal.
            </p>
          </Link>
        </div>
      </section>

      {/* ── Fair-dealing footer ────────────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
