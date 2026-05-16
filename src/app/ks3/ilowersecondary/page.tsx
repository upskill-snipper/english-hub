import type { Metadata } from 'next'
import Link from 'next/link'
import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  QUALIFICATION,
  SECTIONS,
  ASSESSMENT_OBJECTIVES,
  SPEC_ATTRIBUTION,
  type AOKey,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary'

export const metadata: Metadata = {
  title: 'Overview',
  description:
    `Everything you need for the ${QUALIFICATION.title} (${QUALIFICATION.subjectCode}): ` +
    'what the exam is, who it is for, how it is marked on the S1–S4 scale, and where to start revising.',
  alternates: { canonical: PAGE_URL },
}

const AO_ORDER: AOKey[] = ['RAO1', 'RAO2', 'RAO3', 'RAO4', 'RAO5', 'WAO1', 'WAO2']

const START_HERE: { href: string; title: string; blurb: string }[] = [
  {
    href: '/ks3/ilowersecondary/specification',
    title: 'Specification',
    blurb: 'The full content breakdown — what is assessed and why.',
  },
  {
    href: '/ks3/ilowersecondary/exam-format',
    title: 'Exam format',
    blurb: 'Section A reading, Section B writing, timings and the source booklet.',
  },
  {
    href: '/ks3/ilowersecondary/mark-scheme',
    title: 'Mark scheme',
    blurb: 'How examiners award marks, including the levelled writing grids.',
  },
  {
    href: '/ks3/ilowersecondary/grade-targets',
    title: 'Grade targets S1–S4',
    blurb: 'What each grade looks like and how to move up a level.',
  },
  {
    href: '/ks3/ilowersecondary/reading-skills',
    title: 'Reading skills',
    blurb: 'Retrieval, inference, structure, language and comparison.',
  },
  {
    href: '/ks3/ilowersecondary/writing-skills',
    title: 'Writing skills',
    blurb: 'Form, audience and purpose, structure, grammar and accuracy.',
  },
  {
    href: '/ks3/ilowersecondary/question-types',
    title: 'Question types',
    blurb: 'Every question style with how-to-answer guidance.',
  },
  {
    href: '/ks3/ilowersecondary/text-types',
    title: 'Text types',
    blurb: 'The non-fiction and fiction texts you may meet.',
  },
  {
    href: '/ks3/ilowersecondary/fiction',
    title: 'Fiction',
    blurb: 'Working with the unseen fiction text and its genres.',
  },
  {
    href: '/ks3/ilowersecondary/practice',
    title: 'Practice papers',
    blurb: 'Original, exam-style papers written by The English Hub.',
  },
  {
    href: '/ks3/ilowersecondary/quiz',
    title: 'Quiz',
    blurb: 'Quick-fire questions to test your understanding.',
  },
  {
    href: '/ks3/ilowersecondary/grammar-lab',
    title: 'Grammar lab',
    blurb: 'Sentences, punctuation and grammatical terminology drills.',
  },
  {
    href: '/ks3/ilowersecondary/vocabulary',
    title: 'Vocabulary',
    blurb: 'Build precise, ambitious word choices for top marks.',
  },
]

export default function ILowerSecondaryOverviewPage() {
  const glanceCards: { label: string; value: string; detail: string }[] = [
    {
      label: 'Assessment',
      value: QUALIFICATION.paperCode,
      detail: QUALIFICATION.assessment,
    },
    {
      label: 'Duration',
      value: QUALIFICATION.durationLabel,
      detail: 'One sitting, no breaks. Dictionaries are not allowed.',
    },
    {
      label: 'Total marks',
      value: String(QUALIFICATION.totalMarks),
      detail: `${SECTIONS.A.name} (${SECTIONS.A.marks}) + ${SECTIONS.B.name} (${SECTIONS.B.marks}).`,
    },
    {
      label: 'Sections',
      value: '2',
      detail: `${SECTIONS.A.name} (suggested ${SECTIONS.A.recommendedLabel}); ${SECTIONS.B.name} (suggested ${SECTIONS.B.recommendedLabel}).`,
    },
    {
      label: 'Grading',
      value: QUALIFICATION.grades.join(' – '),
      detail: QUALIFICATION.gradeNote,
    },
    {
      label: 'Availability',
      value: QUALIFICATION.availability.join(' & '),
      detail: `Specification: ${QUALIFICATION.specIssue}. First assessment ${QUALIFICATION.firstAssessment}.`,
    },
  ]

  return (
    <>
      <CourseJsonLd
        name={`${QUALIFICATION.title} (${QUALIFICATION.subjectCode})`}
        description={`Student learning hub for the ${QUALIFICATION.title} (${QUALIFICATION.subjectCode}) achievement test, assessing Key Stage 3 English reading and writing skills.`}
        educationalLevel="KS3"
        url={PAGE_URL}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
          { name: 'iLowerSecondary English', url: PAGE_URL },
        ]}
      />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/ks3" className="hover:text-foreground">
          Key Stage 3
        </Link>
        <span> · </span>
        <span>iLowerSecondary English</span>
      </p>

      <h1>{QUALIFICATION.title}</h1>
      <p className="lead">
        The {QUALIFICATION.subjectCode} achievement test assesses Key Stage 3 English skills through
        one externally-set paper. This is your go-to learning area: read what the exam is, see how
        it is marked, and start revising the reading and writing skills it tests.
      </p>

      <h2>Who it is for</h2>
      <p>
        This qualification is sat by Year 9 students following the Pearson Edexcel iLowerSecondary
        English Curriculum. {QUALIFICATION.priorLearning} {QUALIFICATION.contentSource} Strong
        performance progresses naturally to:
      </p>
      <ul>
        {QUALIFICATION.progression.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>

      <h2>Exam at a glance</h2>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {glanceCards.map((card) => (
          <div key={card.label} className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              {card.label}
            </p>
            <p className="text-lg font-semibold text-foreground">{card.value}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{card.detail}</p>
          </div>
        ))}
      </div>

      <h2>The seven assessment objectives</h2>
      <p>
        Every question targets one of these objectives. The percentages are the weighting each
        carries across the qualification.
      </p>
      <div className="not-prose my-6 space-y-3">
        {AO_ORDER.map((key) => {
          const ao = ASSESSMENT_OBJECTIVES[key]
          return (
            <div key={ao.code} className="rounded-xl border border-border/60 bg-card p-4">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-xs text-primary">{ao.code}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {ao.strand} · {ao.weightPct}%
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ao.descriptor}</p>
            </div>
          )
        })}
      </div>

      <h2>Start here</h2>
      <div className="not-prose my-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {START_HERE.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-primary/60"
          >
            <p className="text-sm font-semibold text-foreground">{item.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.blurb}</p>
          </Link>
        ))}
      </div>

      <hr />
      <p className="text-xs leading-relaxed text-muted-foreground">{SPEC_ATTRIBUTION}</p>
    </>
  )
}
