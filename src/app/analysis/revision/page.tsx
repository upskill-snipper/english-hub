import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'GCSE English Revision & Grade Guides',
  description:
    'Complete GCSE English revision hub: grade 9 guides, timetables, grade boundaries, exam-day tips and parent help. 25 guides written by GCSE markers.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/revision' },
  openGraph: {
    title: 'GCSE English Revision & Grade Guides — The English Hub',
    description:
      'Free, marker-written GCSE English revision guides covering grade targets, revision plans, exam day prep and parent support.',
  },
}

const gradePages = [
  {
    slug: 'how-to-get-grade-9-gcse-english-literature',
    title: 'How to get a Grade 9 in GCSE English Literature',
  },
  {
    slug: 'how-to-get-grade-9-gcse-english-language',
    title: 'How to get a Grade 9 in GCSE English Language',
  },
  { slug: 'how-to-get-grade-7-gcse-english', title: 'How to get a Grade 7 in GCSE English' },
  { slug: 'how-to-pass-gcse-english-grade-5', title: 'How to pass GCSE English (Grade 5)' },
  { slug: 'gcse-english-grade-boundaries-2024', title: 'GCSE English grade boundaries 2024' },
  {
    slug: 'gcse-english-grade-boundaries-historical',
    title: 'GCSE English grade boundaries (historical)',
  },
  { slug: 'can-you-resit-gcse-english', title: 'Can you resit GCSE English?' },
  { slug: 'gcse-english-pass-rate-statistics', title: 'GCSE English pass rate statistics' },
]

const revisionPages = [
  {
    slug: 'gcse-english-revision-timetable-template',
    title: 'GCSE English revision timetable template',
  },
  { slug: 'last-minute-gcse-english-revision', title: 'Last-minute GCSE English revision' },
  { slug: '3-month-gcse-english-revision-plan', title: '3-month GCSE English revision plan' },
  { slug: '6-month-gcse-english-revision-plan', title: '6-month GCSE English revision plan' },
  { slug: 'how-to-memorise-quotes-gcse-english', title: 'How to memorise quotes for GCSE English' },
  { slug: 'spaced-repetition-for-gcse-english', title: 'Spaced repetition for GCSE English' },
  {
    slug: 'active-recall-techniques-gcse-english',
    title: 'Active recall techniques for GCSE English',
  },
  { slug: 'mind-map-gcse-english-revision', title: 'Mind mapping GCSE English revision' },
]

const examDayPages = [
  { slug: 'night-before-gcse-english-exam', title: 'The night before the GCSE English exam' },
  { slug: 'what-to-bring-to-gcse-english-exam', title: 'What to bring to your GCSE English exam' },
  {
    slug: 'dealing-with-exam-anxiety-gcse-english',
    title: 'Dealing with exam anxiety in GCSE English',
  },
  {
    slug: 'what-happens-if-you-fail-gcse-english',
    title: 'What happens if you fail GCSE English?',
  },
]

const parentPages = [
  { slug: 'gcse-english-explained-for-parents', title: 'GCSE English explained for parents' },
  {
    slug: 'how-to-help-your-child-revise-gcse-english',
    title: 'How to help your child revise GCSE English',
  },
  {
    slug: 'gcse-english-vs-english-language-vs-literature',
    title: 'GCSE English vs Language vs Literature',
  },
]

export default async function RevisionHub() {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  const tBreadcrumbAnalysis = await t('analysis.breadcrumb.analysis')
  const tBreadcrumbRevision = await t('analysis.revision.breadcrumb_current')
  const tH1 = await t('analysis.revision.h1')
  const tByline = await t('analysis.byline.markers')
  const tIntro = await t('analysis.revision.intro')
  const tSectionGrade = await t('analysis.revision.section.grade')
  const tSectionGradeBody = await t('analysis.revision.section.grade_body')
  const tSectionPlanning = await t('analysis.revision.section.planning')
  const tSectionPlanningBody = await t('analysis.revision.section.planning_body')
  const tSectionExam = await t('analysis.revision.section.exam')
  const tSectionExamBody = await t('analysis.revision.section.exam_body')
  const tSectionParents = await t('analysis.revision.section.parents')
  const tSectionParentsBody = await t('analysis.revision.section.parents_body')
  const tFooterH2 = await t('analysis.revision.footer.h2')
  const tFooterBody = await t('analysis.revision.footer.body')
  const tFooterCtaPrimary = await t('analysis.revision.footer.cta_primary')
  const tFooterCtaSecondary = await t('analysis.revision.footer.cta_secondary')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'GCSE English Revision & Grade Guides',
    description:
      'A library of GCSE English revision and grade-targeting guides written by GCSE markers.',
    url: 'https://theenglishhub.app/analysis/revision',
    author: { '@type': 'Organization', name: 'The English Hub' },
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LearningResourceJsonLd
        name="GCSE English Revision & Grade Guides"
        description="Complete GCSE English revision hub: grade 9 guides, timetables, grade boundaries, exam-day tips and parent help. 25 guides written by GCSE markers."
        educationalLevel="GCSE"
        learningResourceType="Study guide"
        about="GCSE English revision"
        url="https://theenglishhub.app/analysis/revision"
        nonce={nonce}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Analysis', url: 'https://theenglishhub.app/analysis' },
          {
            name: 'GCSE English Revision & Grade Guides',
            url: 'https://theenglishhub.app/analysis/revision',
          },
        ]}
        nonce={nonce}
      />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis" className="hover:text-foreground">
          {tBreadcrumbAnalysis}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{tBreadcrumbRevision}</span>
      </nav>

      <header>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{tH1}</h1>
        <p className="mt-3 text-sm text-muted-foreground">{tByline}</p>
        <p className="mt-4 max-w-3xl text-base text-muted-foreground leading-relaxed">{tIntro}</p>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">{tSectionGrade}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{tSectionGradeBody}</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {gradePages.map((p) => (
            <li
              key={p.slug}
              className="rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-muted/40"
            >
              <Link
                href={`/analysis/revision/${p.slug}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">{tSectionPlanning}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{tSectionPlanningBody}</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {revisionPages.map((p) => (
            <li
              key={p.slug}
              className="rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-muted/40"
            >
              <Link
                href={`/analysis/revision/${p.slug}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">{tSectionExam}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{tSectionExamBody}</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {examDayPages.map((p) => (
            <li
              key={p.slug}
              className="rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-muted/40"
            >
              <Link
                href={`/analysis/revision/${p.slug}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">{tSectionParents}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{tSectionParentsBody}</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {parentPages.map((p) => (
            <li
              key={p.slug}
              className="rounded-lg border border-border bg-card p-4 shadow-sm transition-colors hover:bg-muted/40"
            >
              <Link
                href={`/analysis/revision/${p.slug}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">{tFooterH2}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{tFooterBody}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/auth/register"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
          >
            {tFooterCtaPrimary}
          </Link>
          <Link
            href="/revision"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background px-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-muted"
          >
            {tFooterCtaSecondary}
          </Link>
        </div>
      </section>
    </main>
  )
}
