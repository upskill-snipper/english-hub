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
  NON_FICTION_TEXT_TYPES,
  NON_FICTION_PURPOSES,
  FICTION_GENRES,
  NARRATIVE_PERSPECTIVES,
  WRITING_FORMS,
  WRITING_PURPOSES,
  WRITING_AUDIENCES,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'
import type { AOKey } from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/specification'

export const metadata: Metadata = {
  openGraph: {
    title: 'iLowerSecondary English specification (LEH11)',
    description:
      'The complete Pearson Edexcel International Award in Lower Secondary English (LEH11) specification: qualification facts, sections, assessment objectives and content skills.',
  },
  title: 'iLowerSecondary English specification (LEH11)',
  description:
    'The complete Pearson Edexcel International Award in Lower Secondary English (LEH11) specification: qualification facts, sections, assessment objectives and content skills.',
  alternates: { canonical: PAGE_URL },
}

const READING_AOS: AOKey[] = ['RAO1', 'RAO2', 'RAO3', 'RAO4', 'RAO5']
const WRITING_AOS: AOKey[] = ['WAO1', 'WAO2']
const ALL_AOS: AOKey[] = [...READING_AOS, ...WRITING_AOS]

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-4">
      <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
        {label}
      </p>
      <p className="text-sm text-foreground">{value}</p>
    </div>
  )
}

function ApplicationList({ heading, items }: { heading: string; items: readonly string[] }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-4">
      <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
        {heading}
      </p>
      <ul className="space-y-1.5 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-primary" aria-hidden>
              ·
            </span>
            <span className="capitalize">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default async function SpecificationPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Specification', url: PAGE_URL },
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
        <span>Specification</span>
      </p>

      <h1>{QUALIFICATION.title}</h1>
      <p className="lead">
        The complete, authoritative reference for the {QUALIFICATION.subjectCode} qualification —
        every fact, section, assessment objective and content skill, transcribed faithfully from the
        official Pearson specification.
      </p>

      {/* ── Qualification at a glance ───────────────────────────────── */}
      <section className="my-10">
        <h2>The qualification</h2>
        <div className="not-prose grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Fact label="Title" value={QUALIFICATION.title} />
          <Fact label="Subject code" value={QUALIFICATION.subjectCode} />
          <Fact label="Paper code" value={QUALIFICATION.paperCode} />
          <Fact label="Assessment" value={QUALIFICATION.assessment} />
          <Fact label="Duration" value={QUALIFICATION.durationLabel} />
          <Fact label="Total marks" value={`${QUALIFICATION.totalMarks} marks`} />
          <Fact label="Availability" value={QUALIFICATION.availability.join(' and ')} />
          <Fact label="First teaching" value={QUALIFICATION.firstTeaching} />
          <Fact label="First assessment" value={QUALIFICATION.firstAssessment} />
          <Fact label="Specification" value={QUALIFICATION.specIssue} />
          <Fact
            label="Dictionaries"
            value={
              QUALIFICATION.dictionariesAllowed
                ? 'Allowed in the assessment'
                : 'Not allowed in the assessment'
            }
          />
          <Fact
            label="Grading"
            value={`${QUALIFICATION.grades.join(' · ')} (plus U, unclassified)`}
          />
        </div>

        <div className="not-prose mt-3 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-card p-4 sm:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Grading scale
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {QUALIFICATION.gradeNote}
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Content source
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {QUALIFICATION.contentSource}
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Prior learning
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {QUALIFICATION.priorLearning}
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
              Progression
            </p>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {QUALIFICATION.progression.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-primary" aria-hidden>
                    →
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Paper structure / sections ──────────────────────────────── */}
      <section className="my-10">
        <h2>Paper structure</h2>
        <p className="text-sm text-muted-foreground">
          The single externally-set achievement test ({QUALIFICATION.paperCode}) is divided into two
          sections. Recommended timings are guidance for candidates and total the full{' '}
          {QUALIFICATION.durationLabel}.
        </p>
        <div className="not-prose mt-4 grid gap-3 lg:grid-cols-2">
          {[SECTIONS.A, SECTIONS.B].map((section) => (
            <div key={section.id} className="rounded-xl border border-border/60 bg-card p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold text-foreground">{section.name}</h3>
                <span className="font-mono text-xs text-primary">{section.marks} marks</span>
              </div>
              <p className="mt-1 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                Recommended time: {section.recommendedLabel}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {section.description}
              </p>
              <p className="mt-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                Assessment objectives
              </p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {section.assessmentObjectives.map((ao) => (
                  <span
                    key={ao}
                    className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-[11px] text-primary"
                  >
                    {ao}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Assessment objectives table ─────────────────────────────── */}
      <section className="my-10">
        <h2>Assessment objectives</h2>
        <p className="text-sm text-muted-foreground">
          Reading is assessed across RAO1–RAO5 in{' '}
          {SECTIONS.A.name.replace('Section A: ', 'Section A (')} — {SECTIONS.A.marks} marks).
          Writing is assessed across WAO1–WAO2 in Section B ({SECTIONS.B.marks} marks). Percentage
          weightings are of the overall qualification.
        </p>
        <div className="not-prose mt-4 overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-card">
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Code
                </th>
                <th className="px-4 py-3 text-left font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                  Strand
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
              {ALL_AOS.map((key) => {
                const ao = ASSESSMENT_OBJECTIVES[key]
                return (
                  <tr key={ao.code} className="border-t border-border/60 align-top">
                    <td className="px-4 py-3 font-mono text-xs text-primary">{ao.code}</td>
                    <td className="px-4 py-3 capitalize text-muted-foreground">{ao.strand}</td>
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

      {/* ── Section A content skills ────────────────────────────────── */}
      <section className="my-10">
        <h2>Section A: Reading — content skills (1.1–1.5)</h2>
        <p className="text-sm text-muted-foreground">
          The reading skills assessed in {SECTIONS.A.name.toLowerCase()}, worth {SECTIONS.A.marks}{' '}
          marks.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2">
          {READING_SKILLS.map((skill) => (
            <div key={skill.code} className="rounded-xl border border-border/60 bg-card p-4">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs text-primary">{skill.code}</span>
                <h3 className="text-sm font-semibold text-foreground">{skill.title}</h3>
              </div>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                {skill.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-primary" aria-hidden>
                      ·
                    </span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Reading application ─────────────────────────────────────── */}
      <section className="my-10">
        <h2>Reading application</h2>
        <p className="text-sm text-muted-foreground">
          The unseen texts in Section A are drawn from the following non-fiction text types and
          purposes, and fiction genres and narrative perspectives.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <ApplicationList heading="Non-fiction text types" items={NON_FICTION_TEXT_TYPES} />
          <ApplicationList heading="Non-fiction purposes" items={NON_FICTION_PURPOSES} />
          <ApplicationList heading="Fiction genres" items={FICTION_GENRES} />
          <ApplicationList heading="Narrative perspectives" items={NARRATIVE_PERSPECTIVES} />
        </div>
      </section>

      {/* ── Section B content skills ────────────────────────────────── */}
      <section className="my-10">
        <h2>Section B: Writing — content skills (2.1–2.3)</h2>
        <p className="text-sm text-muted-foreground">
          The writing skills assessed in {SECTIONS.B.name.toLowerCase()}, worth {SECTIONS.B.marks}{' '}
          marks.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-3">
          {WRITING_SKILLS.map((skill) => (
            <div key={skill.code} className="rounded-xl border border-border/60 bg-card p-4">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs text-primary">{skill.code}</span>
                <h3 className="text-sm font-semibold text-foreground">{skill.title}</h3>
              </div>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                {skill.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-primary" aria-hidden>
                      ·
                    </span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Writing application ─────────────────────────────────────── */}
      <section className="my-10">
        <h2>Writing application</h2>
        <p className="text-sm text-muted-foreground">
          The Section B writing task is set in one of the following forms, for one of these
          purposes, addressed to one of these audiences.
        </p>
        <div className="not-prose mt-4 grid gap-3 sm:grid-cols-3">
          <ApplicationList heading="Writing forms" items={WRITING_FORMS} />
          <ApplicationList heading="Writing purposes" items={WRITING_PURPOSES} />
          <div className="rounded-xl border border-border/60 bg-card p-4">
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
              Writing audiences
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">{WRITING_AUDIENCES}</p>
          </div>
        </div>
      </section>

      {/* ── Fair-dealing footer ─────────────────────────────────────── */}
      <footer className="my-12 border-t border-border/60 pt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">{SPEC_ATTRIBUTION}</p>
      </footer>
    </>
  )
}
