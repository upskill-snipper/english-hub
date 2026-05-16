import type { Metadata } from 'next'
import Link from 'next/link'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  QUALIFICATION,
  SECTIONS,
  QUESTION_TYPES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/exam-format'

export const metadata: Metadata = {
  openGraph: {
    title: 'iLowerSecondary English: what the exam looks like',
    description:
      'A practical walkthrough of the single iLowerSecondary English achievement test — the Source Booklet, timing strategy, answering conventions, the question journey, and an exam-day checklist.',
  },
  title: 'iLowerSecondary English: exam format & strategy',
  description:
    'A practical walkthrough of the single iLowerSecondary English achievement test — the Source Booklet, timing strategy, answering conventions, the question journey, and an exam-day checklist.',
  alternates: { canonical: PAGE_URL },
}

const SECTION_A_TIMING = [
  {
    label: 'Read the Source Booklet',
    detail:
      'Read one text at a time, in the order it is set. Read each text right through before you look at the questions on it. This is the approach Pearson itself recommends — it stops you skim-reading and missing the writer’s purpose.',
  },
  {
    label: 'Answer Section A in order',
    detail:
      'Work through the questions on each text before moving to the next. The marks in brackets are a time guide: a 1-mark item should take far less time than a 6-mark item.',
  },
  {
    label: 'Leave the comparison time',
    detail:
      'The extended comparison question carries the most marks in Section A. Keep enough time for a developed, explicit comparison rather than a rushed implicit comment.',
  },
]

const ANSWERING_CONVENTIONS = [
  'For closed questions, put a clear cross in the box. Make it unambiguous — one box only.',
  'If you change your mind, put a line through the box you no longer want and mark your new answer with a cross.',
  'When you are asked to underline or circle, do it clearly. A single, obvious mark is what the examiner credits.',
  'Treat the marks in brackets as a time guide: a 1-mark answer is short; a 6-mark answer needs development.',
  'No dictionaries are allowed in the exam — spelling and vocabulary are assessed in Section B.',
]

const EXAM_DAY_CHECKLIST = [
  'Bring black or blue pen — and a spare pen.',
  'Know that there is one paper, one Source Booklet, and that you answer every question in Section A.',
  'Check you have the Source Booklet as well as the question paper before you start.',
  'No dictionaries — do not plan to look words up.',
  'Write your answers in the spaces provided; if you need more room, use the continuation pages and label clearly.',
  'Keep an eye on the clock against the recommended split between the two sections.',
]

const COMMON_MISTAKES = [
  'Skim-reading the Source Booklet and missing the writer’s purpose, then having to re-read mid-question.',
  'Lifting words straight from the text without explaining them — unexplained lifts are not credited on impact questions.',
  'Ticking or crossing more than one box on a closed question, so no mark can be given.',
  'Spending too long on 1-mark items and running out of time for the high-tariff comparison and the writing task.',
  'Writing a vague, implicit comparison instead of an explicit, developed one.',
  'Leaving no time to plan and check Section B, where grammar, punctuation and spelling are assessed.',
]

export default async function ExamFormatPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  return (
    <>
      <BreadcrumbJsonLd
        nonce={nonce}
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
          {
            name: 'iLowerSecondary English',
            url: 'https://theenglishhub.app/ks3/ilowersecondary',
          },
          { name: 'Exam format', url: PAGE_URL },
        ]}
      />

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
        <span>Exam format</span>
      </p>

      <h1>What the exam looks like &amp; how to manage it</h1>
      <p className="lead">
        The {QUALIFICATION.title} is assessed by a single externally-set achievement test,{' '}
        {QUALIFICATION.paperCode}. This page walks you through exactly what you will see on the day
        and how to spend your {QUALIFICATION.durationLabel} wisely.
      </p>

      <section className="my-10">
        <h2>The single paper</h2>
        <p>
          There is just one paper to sit: {QUALIFICATION.paperCode}. It is{' '}
          {QUALIFICATION.assessment.toLowerCase()}, lasts {QUALIFICATION.durationLabel}, and is
          marked out of {QUALIFICATION.totalMarks}. It is split into two sections that you answer in
          the same booklet.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {[SECTIONS.A, SECTIONS.B].map((s) => (
            <div key={s.id} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
                {s.name} · {s.marks} marks
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.description}</p>
              <p className="text-xs text-primary font-mono">Recommended: {s.recommendedLabel}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          The two recommended times add up to less than the full paper length, which leaves you
          reading and checking time built in — use it.
        </p>
      </section>

      <section className="my-10">
        <h2>The Source Booklet</h2>
        <p>
          Section A is answered against a separate Source Booklet. It contains{' '}
          <strong>three unseen texts you will not have seen before</strong>: two non-fiction texts
          and one fiction text. All three are linked by a <strong>common theme</strong>. That shared
          theme matters — it is what lets the paper ask you to compare across texts, and the Section
          B writing task is related to the same theme. So the reading you do in Section A also feeds
          the ideas you will need for your writing.
        </p>
        <div className="not-prose my-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
            Pearson&apos;s own advice
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Read <strong>one text at a time</strong>. Read each text right through before turning to
            the questions on it. Trying to read and answer at the same time leads to skim-reading
            and missed meaning — reading whole texts in order is the genuine approach Pearson
            recommends.
          </p>
        </div>
      </section>

      <section className="my-10">
        <h2>Timing strategy</h2>
        <p>
          {SECTIONS.A.name} is worth {SECTIONS.A.marks} marks; aim to spend about{' '}
          {SECTIONS.A.recommendedLabel} on it. {SECTIONS.B.name} is worth {SECTIONS.B.marks} marks;
          aim for about {SECTIONS.B.recommendedLabel}. Within Section A:
        </p>
        <ol className="not-prose my-6 space-y-3">
          {SECTION_A_TIMING.map((step, i) => (
            <li key={step.label} className="rounded-xl border border-border/60 bg-card p-4">
              <p className="text-sm font-medium">
                <span className="font-mono text-primary mr-2">{i + 1}.</span>
                {step.label}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="my-10">
        <h2>Answering conventions</h2>
        <ul className="not-prose my-4 space-y-2">
          {ANSWERING_CONVENTIONS.map((c) => (
            <li key={c} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary font-mono">·</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-10">
        <h2>The question journey</h2>
        <p>
          Section A moves from quick, closed retrieval and vocabulary items towards longer,
          higher-tariff analysis and comparison; Section B is one extended writing task. Here is the
          typical run of question types you will meet, with what each one is testing and how to
          answer it.
        </p>
        <div className="not-prose my-6 space-y-3">
          {QUESTION_TYPES.map((q) => (
            <div key={q.id} className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="text-sm font-medium">{q.name}</span>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-primary">
                  {q.ao}
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground">
                  {q.typicalMarks} mark{q.typicalMarks === 1 ? '' : 's'} (typical)
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Format: </span>
                {q.format}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                <span className="font-medium text-foreground">How to answer: </span>
                {q.howToAnswer}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Marks and formats above are typical of the question types — the exact wording, order and
          number of items can vary between papers.
        </p>
      </section>

      <section className="my-10">
        <h2>Exam-day checklist</h2>
        <ul className="not-prose my-4 space-y-2">
          {EXAM_DAY_CHECKLIST.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary font-mono">☐</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="my-10">
        <h2>Common mistakes to avoid</h2>
        <ul className="not-prose my-4 space-y-2">
          {COMMON_MISTAKES.map((m) => (
            <li key={m} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <span className="text-destructive font-mono">×</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 border-t border-border/60 pt-6">
        <p className="text-[11px] leading-relaxed text-muted-foreground">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
