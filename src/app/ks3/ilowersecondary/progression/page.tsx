import type { Metadata } from 'next'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  QUALIFICATION,
  YEAR9_CODES,
  READING_SKILLS,
  WRITING_SKILLS,
  SPEC_ATTRIBUTION,
} from '@/lib/ilowersecondary/spec'

const PAGE_URL = 'https://theenglishhub.app/ks3/ilowersecondary/progression'

export const metadata: Metadata = {
  title: 'Progression',
  description:
    'How KS3 English (Years 7-9) builds towards the iLowerSecondary ' +
    'English exam, and where the qualification leads next - Pearson ' +
    'Edexcel International GCSE English Language.',
  alternates: { canonical: PAGE_URL },
}

export default async function ProgressionPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const breadcrumb = [
    { name: 'Home', url: 'https://theenglishhub.app' },
    { name: 'KS3', url: 'https://theenglishhub.app/ks3' },
    {
      name: 'iLowerSecondary English',
      url: 'https://theenglishhub.app/ks3/ilowersecondary',
    },
    { name: 'Progression', url: PAGE_URL },
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
        <span>{await t('ks3.page.progression.bc')}</span>
      </p>

      <h1>Progression: where this fits and where it leads</h1>
      <p className="lead">
        The {QUALIFICATION.title} ({QUALIFICATION.subjectCode}) sits at the end of Key Stage 3. Its
        content is drawn from Year 9 of the iLowerSecondary English curriculum, building on Years 7
        and 8, and it is designed to lead straight into International GCSE English Language.
      </p>

      <h2>The KS3 build-up: Years 7 → 8 → 9</h2>
      <p>
        {QUALIFICATION.contentSource} In other words, the exam does not test a separate syllabus -
        it tests how securely the core KS3 reading and writing skills have matured by the end of
        Year 9.
      </p>
      <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
        {[
          {
            y: 'Year 7',
            d: 'Foundations: retrieving information, basic inference, clear paragraphs, accurate sentence demarcation.',
          },
          {
            y: 'Year 8',
            d: 'Development: interpreting texts, commenting on language and structure, adapting writing to purpose.',
          },
          {
            y: 'Year 9',
            d: 'Mastery: evaluating writers’ methods and viewpoint, comparing non-fiction, controlled extended writing - the level the exam assesses.',
          },
        ].map((b) => (
          <div key={b.y} className="rounded-2xl border border-border/60 bg-card p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {b.y}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </div>
      <p>
        Explore the full KS3 scheme of work - yearly expectations, termly plans and weekly lessons -
        on the <Link href="/ks3">KS3 English hub</Link>, and the{' '}
        <Link href="/ks3/skills">skill-code progression</Link> Y7→Y8→Y9.
      </p>

      <h2>What Year 9 looks like (the exam’s level)</h2>
      <p>
        These are the Year 9 iLowerSecondary objective codes the exam draws on. Each links to the
        skill it assesses on this hub.
      </p>
      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="py-2 pr-4 text-left font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Code
              </th>
              <th className="py-2 text-left font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                What it expects by the end of Year 9
              </th>
            </tr>
          </thead>
          <tbody>
            {YEAR9_CODES.map((c) => (
              <tr key={c.code} className="border-b border-border/50 align-top">
                <td className="py-2 pr-4 font-mono text-xs font-semibold text-primary">{c.code}</td>
                <td className="py-2 text-muted-foreground">{c.descriptor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>How the reading and writing strands mature</h2>
      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border/60 bg-card p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Reading (skills 1.1-1.5)
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {READING_SKILLS.map((s) => (
              <li key={s.code}>{s.title}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border/60 bg-card p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Writing (skills 2.1-2.3)
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {WRITING_SKILLS.map((s) => (
              <li key={s.code}>{s.title}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2>Where it leads next</h2>
      <p>
        A pass on this qualification is reported as {QUALIFICATION.grades[0]}-
        {QUALIFICATION.grades[QUALIFICATION.grades.length - 1]}. It is built as the ideal
        preparation for:
      </p>
      <ul>
        {QUALIFICATION.progression.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <p>
        The reading and writing skills practised here map directly onto International GCSE English
        Language. When you reach that stage, the <Link href="/igcse">IGCSE English hub</Link>{' '}
        continues the same method at the next level.
      </p>

      <h2>Your route on this hub</h2>
      <ol>
        <li>
          Start with the <Link href="/ks3/ilowersecondary/specification">specification</Link> and{' '}
          <Link href="/ks3/ilowersecondary/exam-format">exam format</Link>.
        </li>
        <li>
          Build each reading and writing skill via the{' '}
          <Link href="/ks3/ilowersecondary">skill masterclasses</Link>.
        </li>
        <li>
          Drill question types and sit{' '}
          <Link href="/ks3/ilowersecondary/practice">practice papers</Link>.
        </li>
        <li>
          Track yourself against{' '}
          <Link href="/ks3/ilowersecondary/grade-targets">grade targets S1-S4</Link> and follow the{' '}
          <Link href="/ks3/ilowersecondary/study-plan">study plan</Link>.
        </li>
      </ol>

      <p className="mt-10 border-t border-border/60 pt-4 text-xs text-muted-foreground">
        {SPEC_ATTRIBUTION}
      </p>
    </>
  )
}
