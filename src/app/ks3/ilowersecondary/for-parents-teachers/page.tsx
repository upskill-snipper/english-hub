import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  QUALIFICATION,
  SECTIONS,
  ASSESSMENT_OBJECTIVES,
  YEAR9_CODES,
  GUIDED_READING_PROMPTS,
  NON_FICTION_TEXT_TYPES,
  FICTION_GENRES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'
import type { AOKey } from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/for-parents-teachers'

export const metadata: Metadata = {
  openGraph: {
    title: 'iLowerSecondary English: a guide for parents and teachers',
    description:
      'A clear, reassuring guide to the Pearson Edexcel International Award in Lower Secondary English (LEH11) - what it is, how the exam works, what the grades mean, and how to support a child at home or in class.',
  },
  title: 'iLowerSecondary English: for parents & teachers',
  description:
    'A clear, reassuring guide to the Pearson Edexcel International Award in Lower Secondary English (LEH11) - what it is, how the exam works, what the grades mean, and how to support a child at home or in class.',
  alternates: { canonical: PAGE_URL },
}

// Plain-English translations of the official assessment objectives.
// The formal descriptor stays sourced from the spec; this only adds a
// non-specialist gloss - no qualification facts are restated here.
const AO_PLAIN: Record<AOKey, string> = {
  RAO1: 'Find and pick out clear facts and details that are actually stated in a text.',
  RAO2: 'Read between the lines - work out what is suggested or implied, not just what is spelled out.',
  RAO3: 'Notice how a text is built and put in order, and why the writer arranged it that way.',
  RAO4: 'Look closely at the words and sentences the writer chose and the effect they create.',
  RAO5: 'Work out why the writer wrote the text, their point of view, and how it makes the reader feel.',
  WAO1: 'Write in the right style for the form, reader and purpose, with ideas organised in a clear, well-ordered way.',
  WAO2: 'Write with accurate grammar, punctuation and spelling so the meaning is clear.',
}

const READING_AOS: AOKey[] = ['RAO1', 'RAO2', 'RAO3', 'RAO4', 'RAO5']
const WRITING_AOS: AOKey[] = ['WAO1', 'WAO2']
const ALL_AOS: AOKey[] = [...READING_AOS, ...WRITING_AOS]

const HUB_LINKS = [
  {
    href: '/ks3/ilowersecondary/specification',
    title: 'Full specification',
    blurb:
      'The complete qualification reference - sections, content skills and assessment objectives.',
  },
  {
    href: '/ks3/ilowersecondary/practice/paper-1',
    title: 'Practice paper',
    blurb:
      'An original, full-length practice achievement test written in the exact LEH11/01 style.',
  },
  {
    href: '/ks3/ilowersecondary/mark-scheme',
    title: 'Mark scheme',
    blurb: 'How each question is marked, with the levelled writing grids explained.',
  },
  {
    href: '/ks3/ilowersecondary/question-types',
    title: 'Question types',
    blurb: 'Every question format, what it tests, and how to answer it for full marks.',
  },
  {
    href: '/ks3/ilowersecondary/reading',
    title: 'Reading masterclass',
    blurb: 'Skill-by-skill teaching for Section A reading.',
  },
  {
    href: '/ks3/ilowersecondary/writing',
    title: 'Writing masterclass',
    blurb: 'Skill-by-skill teaching for the Section B writing task.',
  },
]

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-border/60 bg-card p-5 ${className}`}>{children}</div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
      {children}
    </p>
  )
}

export default async function ForParentsTeachersPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'For parents & teachers', url: PAGE_URL },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumb} nonce={nonce} />

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          {await t('ks3.page.bc.home')}
        </Link>
        <span> · </span>
        <Link href="/ks3" className="hover:text-foreground">
          {await t('ks3.page.bc.ks3')}
        </Link>
        <span> · </span>
        <Link href="/ks3/ilowersecondary" className="hover:text-foreground">
          {await t('ks3.page.bc.ils')}
        </Link>
        <span> · </span>
        <span>{await t('ks3.page.for_parents_teachers.bc')}</span>
      </p>

      <h1>A guide for parents and teachers</h1>
      <p className="lead">
        If your child or class is preparing for the {QUALIFICATION.title} (
        {QUALIFICATION.subjectCode}), this page explains - in plain English - what the qualification
        is, how the single exam works, what the grades mean, and the simple things you can do at
        home or in the classroom to help.
      </p>

      {/* ── What it is ──────────────────────────────────────────────── */}
      <section className="my-10">
        <h2>What is this qualification?</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The {QUALIFICATION.title} is a Pearson Edexcel award that checks how well a student has
          mastered the English reading and writing skills expected at this stage of lower secondary
          school - equivalent to Year 9 / KS3 in England. {QUALIFICATION.contentSource} There is
          nothing to worry about in terms of entry requirements:{' '}
          {QUALIFICATION.priorLearning.toLowerCase()}
        </p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          It is not a high-stakes school-leaving exam. Think of it as a well-designed checkpoint
          that confirms a child is on track and ready for the next step in their English studies.
        </p>
      </section>

      {/* ── How the exam works ──────────────────────────────────────── */}
      <section className="my-10">
        <h2>How the exam works</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          There is just one exam: {QUALIFICATION.assessment.toLowerCase()}, lasting{' '}
          {QUALIFICATION.durationLabel} and worth {QUALIFICATION.totalMarks} marks in total. It can
          be sat in {QUALIFICATION.availability.join(' or ')}, and dictionaries are{' '}
          {QUALIFICATION.dictionariesAllowed ? 'allowed' : 'not allowed'}. The paper is split into
          two sections.
        </p>
        <div className="not-prose mt-4 grid gap-3 lg:grid-cols-2">
          {[SECTIONS.A, SECTIONS.B].map((section) => (
            <Card key={section.id}>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-foreground">{section.name}</h3>
                <span className="font-mono text-xs text-primary">{section.marks} marks</span>
              </div>
              <p className="mt-1 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                Suggested time: {section.recommendedLabel}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {section.description}
              </p>
            </Card>
          ))}
        </div>
        <Card className="mt-3">
          <Label>What the grades mean</Label>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {QUALIFICATION.gradeNote} In everyday terms: every level shows real, evidenced
            achievement, and the scale is there to recognise progress rather than to label a child.
          </p>
        </Card>
      </section>

      {/* ── Assessment objectives in plain English ──────────────────── */}
      <section className="my-10">
        <h2>What the exam is really testing</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Examiners use a set of &ldquo;assessment objectives&rdquo;. The official wording can sound
          technical, so here is each one in plain English alongside the formal descriptor.
        </p>
        <div className="not-prose mt-4 space-y-3">
          {ALL_AOS.map((key) => {
            const ao = ASSESSMENT_OBJECTIVES[key]
            return (
              <Card key={ao.code}>
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-mono text-xs text-primary">{ao.code}</span>
                  <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground capitalize">
                    {ao.strand}
                  </span>
                </div>
                <p className="mt-2 text-sm text-foreground leading-relaxed">{AO_PLAIN[key]}</p>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Official descriptor: {ao.descriptor}
                </p>
              </Card>
            )
          })}
        </div>
      </section>

      {/* ── Progression ─────────────────────────────────────────────── */}
      <section className="my-10">
        <h2>Where it leads next</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The skills built here lead directly into Pearson&rsquo;s International GCSE English
          Language courses, so this award is a natural stepping stone rather than a dead end.
        </p>
        <div className="not-prose mt-4">
          <Card>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {QUALIFICATION.progression.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-primary" aria-hidden>
                    →
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* ── Support at home ─────────────────────────────────────────── */}
      <section className="my-10">
        <h2>How parents can help at home</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          You do not need to be an English specialist. Three habits make a real difference.
        </p>

        <div className="not-prose mt-4 grid gap-3 lg:grid-cols-3">
          <Card>
            <Label>1 · Read widely together</Label>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The reading exam draws on many text types. Mix non-fiction -{' '}
              {NON_FICTION_TEXT_TYPES.join(', ')} - with fiction across genres such as{' '}
              {FICTION_GENRES.join(', ')}. Variety matters more than volume.
            </p>
          </Card>
          <Card>
            <Label>2 · Talk about what you read</Label>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A short conversation about a chapter or article builds the exact thinking the exam
              rewards. Use the ready-made discussion prompts below.
            </p>
          </Card>
          <Card>
            <Label>3 · Low-stakes writing</Label>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A diary entry, a letter, a short review - anything written for a real purpose. Keep it
              relaxed; the aim is fluency and confidence, not perfection.
            </p>
          </Card>
        </div>

        <h3 className="mt-8 text-base font-semibold text-foreground">
          Ready-made discussion questions
        </h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
          These come from the Pearson Teacher&rsquo;s Guide guided-reading approach and work just as
          well at the kitchen table as in class.
        </p>

        <div className="not-prose mt-4 grid gap-3 lg:grid-cols-2">
          <Card>
            <Label>Fiction</Label>
            <div className="space-y-4">
              {Object.entries(GUIDED_READING_PROMPTS.fiction).map(([topic, prompts]) => (
                <div key={topic}>
                  <p className="text-sm font-semibold text-foreground">{topic}</p>
                  <ul className="mt-1.5 space-y-1.5 text-sm text-muted-foreground">
                    {prompts.map((q) => (
                      <li key={q} className="flex gap-2">
                        <span className="text-primary" aria-hidden>
                          ·
                        </span>
                        <span className="leading-relaxed">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Label>Non-fiction</Label>
            <div className="space-y-4">
              {Object.entries(GUIDED_READING_PROMPTS.nonFiction).map(([topic, prompts]) => (
                <div key={topic}>
                  <p className="text-sm font-semibold text-foreground">{topic}</p>
                  <ul className="mt-1.5 space-y-1.5 text-sm text-muted-foreground">
                    {prompts.map((q) => (
                      <li key={q} className="flex gap-2">
                        <span className="text-primary" aria-hidden>
                          ·
                        </span>
                        <span className="leading-relaxed">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* ── For teachers: using the hub ─────────────────────────────── */}
      <section className="my-10">
        <h2>How teachers can use this hub</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Every page is built around the official specification. These are the most useful starting
          points for planning and practice.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {HUB_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/60"
            >
              <p className="text-sm font-semibold text-foreground">{link.title}</p>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{link.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Curriculum alignment ────────────────────────────────────── */}
      <section className="my-10">
        <h2>Curriculum alignment (Year 9 objectives)</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          For teachers mapping schemes of work, these are the Year 9 iLowerSecondary English
          objective codes the assessment draws on. Use them to cross-reference your existing
          planning.
        </p>
        <div className="not-prose mt-4 overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card">
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Code
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Objective
                </th>
              </tr>
            </thead>
            <tbody>
              {YEAR9_CODES.map((c) => (
                <tr key={c.code} className="border-t border-border/60 align-top">
                  <td className="px-4 py-3 font-mono text-xs text-primary">{c.code}</td>
                  <td className="px-4 py-3 text-foreground leading-relaxed">{c.descriptor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Attribution footer ──────────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
