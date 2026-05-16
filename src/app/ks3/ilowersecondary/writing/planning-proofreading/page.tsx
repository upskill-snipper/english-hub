import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { SECTIONS, YEAR9_CODES, SPEC_ATTRIBUTION } from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/writing/planning-proofreading'

export const metadata: Metadata = {
  openGraph: {
    title: 'Planning & proofreading the Section B writing task',
    description:
      'A masterclass on fast planning and reliable proofreading for the iLowerSecondary English (LEH11) Section B writing task: 3-minute plans, a time budget, a self-tuned proofreading checklist and a last-minute rescue routine.',
  },
  title: 'Planning & proofreading the Section B writing task',
  description:
    'A masterclass on fast planning and reliable proofreading for the iLowerSecondary English (LEH11) Section B writing task: 3-minute plans, a time budget, a self-tuned proofreading checklist and a last-minute rescue routine.',
  alternates: { canonical: PAGE_URL },
}

const W = (code: string) => {
  const entry = YEAR9_CODES.find((c) => c.code === code)
  if (!entry) throw new Error(`Unknown Year 9 code: ${code}`)
  return entry
}

const W9_1A = W('W9.1A')
const W9_1B = W('W9.1B')
const W9_1C = W('W9.1C')

// ── Original invented sample task (NOT from any past paper) ───────────
const SAMPLE_TASK = {
  form: 'Letter',
  purpose: 'to persuade',
  audience: 'the head teacher of your school',
  brief:
    'Your school is deciding whether to keep its old library or replace it with a computer suite. Write a letter to your head teacher persuading them to keep the library. You should explain why the library matters and answer the arguments on the other side.',
} as const

// ── Worked 3-minute plan (spider → FAP box → skeleton) ────────────────
const FAP_BOX = [
  { label: 'Form', value: 'Letter — address, greeting, sign-off, formal register' },
  { label: 'Audience', value: 'Head teacher — respectful, reasoned, not slang' },
  {
    label: 'Purpose',
    value: 'Persuade — rhetorical questions, evidence, a counter-argument answered',
  },
] as const

const SPIDER_LEGS = [
  'Quiet space — somewhere to think away from screens',
  'Books open doors — discovering writers you would never search for',
  'Fairness — not every pupil has devices or quiet space at home',
  'Counter-argument — "computers are the future" — answer: a library can hold both',
  'Memory hook — a personal moment that the library made possible',
] as const

const PARAGRAPH_SKELETON = [
  {
    para: 'Opening',
    job: 'State your position politely and clearly; name the decision.',
  },
  {
    para: 'Point 1',
    job: 'The library as a calm, screen-free place to think and read.',
  },
  {
    para: 'Point 2',
    job: 'Fairness — the library levels the field for pupils without devices at home.',
  },
  {
    para: 'Counter + rebuttal',
    job: '“Computers are the future” — concede, then show a library serves that future too.',
  },
  {
    para: 'Close',
    job: 'A short, memorable appeal; restate the request; sign off correctly.',
  },
] as const

// ── Time budget within the recommended Section B window ───────────────
const TIME_BUDGET = [
  {
    phase: 'Plan',
    minutes: 3,
    detail:
      'Spider the ideas, draw the FAP box, number a five-paragraph skeleton. Do not write full sentences yet.',
  },
  {
    phase: 'Write',
    minutes: SECTIONS.B.recommendedMinutes - 3 - 4,
    detail:
      'Follow the skeleton paragraph by paragraph. Keep moving; do not rewrite openings — you can polish those when checking.',
  },
  {
    phase: 'Check',
    minutes: 4,
    detail: 'Run the proofreading checklist below, then the last-three-minutes rescue routine.',
  },
] as const

// ── Proofreading checklist tuned to WAO2 ──────────────────────────────
const WAO2_CHECKLIST = [
  {
    target: 'Sentence demarcation',
    check:
      'Every sentence starts with a capital and ends with a full stop, question mark or exclamation mark. No comma joining two complete sentences (a comma splice).',
  },
  {
    target: 'Capital letters',
    check:
      'Sentence openings, the pronoun “I”, and proper nouns (names of people, places, the school) are capitalised. No random capitals mid-sentence.',
  },
  {
    target: 'Commas',
    check:
      'Commas separate items in a list and mark off a starting phrase. Check you have not used a comma where a full stop or connective is needed.',
  },
  {
    target: 'Speech marks',
    check:
      'If you quote or report speech, the spoken words sit inside the marks and the closing punctuation is placed correctly.',
  },
  {
    target: 'Apostrophes',
    check:
      'Possession (“the school’s plan”) and contraction (“it’s” = it is) only. Plain plurals never take an apostrophe.',
  },
  {
    target: 'Spelling traps',
    check:
      'Homophones you personally confuse: their/there/they’re, your/you’re, to/too, where/were, its/it’s. Read these words extra slowly.',
  },
  {
    target: 'Tense consistency',
    check:
      'You stay in one tense unless meaning requires a shift. Re-read for a verb that has slipped from present to past or back.',
  },
] as const

// ── Last-3-minutes rescue routine ─────────────────────────────────────
const RESCUE_ROUTINE = [
  {
    step: 'Minute 1 — full stops',
    action:
      'Run a pen-tip under each line and pause at every full stop. Where a sentence runs on too long, split it. A short correct sentence beats a long broken one.',
  },
  {
    step: 'Minute 2 — your three errors',
    action:
      'Hunt only for the three mistakes you make most (e.g. comma splices, its/it’s, missing capitals). You know your own pattern — target it, do not re-read everything.',
  },
  {
    step: 'Minute 3 — strongest finish',
    action:
      'Make sure the final sentence lands clearly and the form is closed correctly (sign-off, name). A weak or unfinished ending costs more than an early typo.',
  },
] as const

export default async function PlanningProofreadingPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    {
      name: 'Writing skills',
      url: 'https://theenglishhub.app/ks3/ilowersecondary/writing',
    },
    { name: 'Planning & proofreading', url: PAGE_URL },
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
        <Link href="/ks3/ilowersecondary/writing" className="hover:text-foreground">
          Writing skills
        </Link>
        <span> · </span>
        <span>Planning &amp; proofreading</span>
      </p>

      <h1>Planning &amp; proofreading the Section B writing task</h1>
      <p className="lead">
        {SECTIONS.B.name} is a single extended task with a tight, recommended time window of{' '}
        {SECTIONS.B.recommendedLabel}. The pupils who do best are not the fastest writers — they are
        the ones who spend a little time planning, write to a clear skeleton, and leave time to
        check. This masterclass shows you exactly how.
      </p>

      {/* ── Objectives ───────────────────────────────────────────────── */}
      <section className="my-10">
        <h2>What this builds</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-3">
          {[W9_1A, W9_1B, W9_1C].map((c) => (
            <div key={c.code} className="rounded-xl border border-border/60 bg-card p-4">
              <span className="font-mono text-xs text-primary">{c.code}</span>
              <p className="mt-2 text-sm text-foreground leading-relaxed">{c.descriptor}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── The sample task ──────────────────────────────────────────── */}
      <section className="my-10">
        <h2>An invented sample task</h2>
        <p className="text-sm text-muted-foreground">
          This task is original and written for practice on this page — it is not taken from any
          past paper. We use it throughout so the plan, the writing and the checking all join up.
        </p>
        <div className="not-prose mt-4 rounded-xl border border-border/60 bg-card p-5">
          <div className="flex flex-wrap gap-1.5">
            <span className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-[11px] capitalize text-primary">
              Form: {SAMPLE_TASK.form}
            </span>
            <span className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-[11px] text-primary">
              Purpose: {SAMPLE_TASK.purpose}
            </span>
            <span className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-[11px] text-primary">
              Audience: {SAMPLE_TASK.audience}
            </span>
          </div>
          <p className="mt-3 text-sm text-foreground leading-relaxed">{SAMPLE_TASK.brief}</p>
        </div>
      </section>

      {/* ── W9.1A: the 3-minute plan ─────────────────────────────────── */}
      <section className="my-10">
        <h2>
          Gathering and shaping ideas — a 3-minute plan{' '}
          <span className="font-mono text-sm text-primary">({W9_1A.code})</span>
        </h2>
        <p className="text-sm text-muted-foreground">
          {W9_1A.descriptor} You do this in three quick moves: a <strong>spider</strong> to dump
          ideas, a <strong>FAP box</strong> to lock form, audience and purpose, then a numbered{' '}
          <strong>paragraph skeleton</strong> so you never lose your way.
        </p>

        <div className="not-prose mt-4 grid gap-3 lg:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              1 · Spider — dump every idea
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {SPIDER_LEGS.map((leg) => (
                <li key={leg} className="flex gap-2">
                  <span className="text-primary" aria-hidden>
                    ·
                  </span>
                  <span className="leading-relaxed">{leg}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              2 · FAP box — lock the brief
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {FAP_BOX.map((row) => (
                <li key={row.label}>
                  <span className="font-semibold text-foreground">{row.label}: </span>
                  <span className="leading-relaxed">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              3 · Paragraph skeleton
            </p>
            <ol className="space-y-2 text-sm text-muted-foreground">
              {PARAGRAPH_SKELETON.map((p, i) => (
                <li key={p.para} className="flex gap-2">
                  <span className="font-mono text-xs text-primary">{i + 1}</span>
                  <span className="leading-relaxed">
                    <span className="font-semibold text-foreground">{p.para}: </span>
                    {p.job}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          The whole plan should fit in the margin and take three minutes. It is scaffolding, not
          prose: short notes only. A plan you can read at a glance keeps your paragraphs ordered
          when you are under pressure.
        </p>
      </section>

      {/* ── Time budget ──────────────────────────────────────────────── */}
      <section className="my-10">
        <h2>Budgeting the {SECTIONS.B.recommendedLabel}</h2>
        <p className="text-sm text-muted-foreground">
          Split the recommended window into three jobs and protect the checking time — it is the
          easiest set of marks to lose by simply running out of time.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-3">
          {TIME_BUDGET.map((t) => (
            <div key={t.phase} className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-foreground">{t.phase}</h3>
                <span className="font-mono text-xs text-primary">~{t.minutes} min</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          The figures add up to the full {SECTIONS.B.recommendedLabel} recommended for{' '}
          {SECTIONS.B.name}. If you wrote slowly, take the extra time from the writing phase — never
          from checking.
        </p>
      </section>

      {/* ── W9.1B: proofreading strategy ─────────────────────────────── */}
      <section className="my-10">
        <h2>
          A reliable proofreading strategy{' '}
          <span className="font-mono text-sm text-primary">({W9_1B.code})</span>
        </h2>
        <p className="text-sm text-muted-foreground">
          {W9_1B.descriptor} The key word is <em>your</em>: a good proofreader does not re-read
          everything hoping to spot mistakes — they hunt for the specific errors they personally
          make. Before the exam, look back at marked work and write down your top three recurring
          slips. In the exam, search for those first.
        </p>
        <div className="not-prose mt-4 overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card">
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Target
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  What to check
                </th>
              </tr>
            </thead>
            <tbody>
              {WAO2_CHECKLIST.map((row) => (
                <tr key={row.target} className="border-t border-border/60 align-top">
                  <td className="px-4 py-3 font-semibold text-foreground">{row.target}</td>
                  <td className="px-4 py-3 text-muted-foreground leading-relaxed">{row.check}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          The five named punctuation marks above — capital letters, end punctuation, commas, speech
          marks and apostrophes — are exactly the marks the writing skills ask you to use with
          accuracy and confidence. Accurate sentence demarcation and spelling are what move work up
          the grammar, punctuation and spelling grid, so make them your first checking priority.
        </p>
      </section>

      {/* ── W9.1C: review & revise ───────────────────────────────────── */}
      <section className="my-10">
        <h2>
          Reviewing structure and vocabulary{' '}
          <span className="font-mono text-sm text-primary">({W9_1C.code})</span>
        </h2>
        <p className="text-sm text-muted-foreground">
          {W9_1C.descriptor} Proofreading fixes accuracy; reviewing improves quality. If you have a
          spare moment after the accuracy check, make small, high-value edits rather than rewriting.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Sentence structure
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Find two sentences that start the same way and change one opening. Break one over-long
              sentence into two. Variety of openings and sentence length lifts the writing.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Text structure
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Check each paragraph does one job and links to the next. Confirm the counter-argument
              is answered, not just raised, so the piece stays persuasive throughout.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Vocabulary
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Swap two weak, vague words for precise ones you can spell. An ambitious word spelled
              correctly helps; one spelled wrong does not. Precision beats showing off.
            </p>
          </div>
        </div>
      </section>

      {/* ── Rescue routine ───────────────────────────────────────────── */}
      <section className="my-10">
        <h2>The last 3 minutes — a rescue routine</h2>
        <p className="text-sm text-muted-foreground">
          When time is nearly gone, do not start a new paragraph and do not panic-read the whole
          answer. Run this fixed routine instead — it recovers the most marks for the least time.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-3">
          {RESCUE_ROUTINE.map((r) => (
            <div key={r.step} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
                {r.step}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.action}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Practise this routine on every timed piece you write, not just in the exam. A rescue
          routine only works if your hand already knows it.
        </p>
      </section>

      {/* ── Fair-dealing footer ──────────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
