import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { tMany } from '@/lib/i18n/t'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Exam Technique',
    description:
      'Master the exam techniques that turn knowledge into top grades. Time management, question types, essay structure, and exam-day advice for GCSE and IGCSE English.',
  },
  alternates: { canonical: 'https://theenglishhub.app/resources/exam-technique' },
  title: 'Exam Technique',
  description:
    'Master the exam techniques that turn knowledge into top grades. Time management, question types, essay structure, and exam-day advice for GCSE and IGCSE English.',
}

/* ─── Section data ───────────────────────────────────────────── */

const SECTIONS = [
  {
    id: 'time',
    href: '/resources/exam-technique/time-management',
    colour: 'border-accent',
    iconColour: 'text-accent',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    id: 'qtypes',
    href: '/resources/exam-technique/question-types',
    colour: 'border-primary',
    iconColour: 'text-primary',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
        />
      </svg>
    ),
  },
  {
    id: 'essay',
    href: '/resources/exam-technique/essay-structure',
    colour: 'border-accent',
    iconColour: 'text-accent',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    ),
  },
  {
    id: 'day',
    href: '/resources/exam-technique/exam-day',
    colour: 'border-primary',
    iconColour: 'text-primary',
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
  },
] as const

/* ─── Icons ──────────────────────────────────────────────────── */

function ArrowRight() {
  return (
    <svg
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */

export default async function ExamTechniquePage() {
  const labels = await tMany([
    'resources.exam_tech.hero.eyebrow',
    'resources.exam_tech.hero.title',
    'resources.exam_tech.hero.subtitle',
    'resources.exam_tech.bc.home',
    'resources.exam_tech.bc.resources',
    'resources.exam_tech.bc.this',
    'resources.exam_tech.why.title',
    'resources.exam_tech.why.body1',
    'resources.exam_tech.why.body2',
    'resources.exam_tech.explore.title',
    'resources.exam_tech.explore.subtitle',
    'resources.exam_tech.cta.read_guide',
    // Section titles + badges + descriptions + topics keys
    'resources.exam_tech.sec.time.title',
    'resources.exam_tech.sec.time.badge',
    'resources.exam_tech.sec.time.desc',
    'resources.exam_tech.sec.qtypes.title',
    'resources.exam_tech.sec.qtypes.badge',
    'resources.exam_tech.sec.qtypes.desc',
    'resources.exam_tech.sec.essay.title',
    'resources.exam_tech.sec.essay.badge',
    'resources.exam_tech.sec.essay.desc',
    'resources.exam_tech.sec.day.title',
    'resources.exam_tech.sec.day.badge',
    'resources.exam_tech.sec.day.desc',
    // Quick wins
    'resources.exam_tech.qw.title',
    'resources.exam_tech.qw.subtitle',
    'resources.exam_tech.qw.read.h',
    'resources.exam_tech.qw.read.b',
    'resources.exam_tech.qw.plan.h',
    'resources.exam_tech.qw.plan.b',
    'resources.exam_tech.qw.clock.h',
    'resources.exam_tech.qw.clock.b',
    'resources.exam_tech.qw.quotes.h',
    'resources.exam_tech.qw.quotes.b',
    'resources.exam_tech.qw.check.h',
    'resources.exam_tech.qw.check.b',
    // Revision CTA
    'resources.exam_tech.revcta.title',
    'resources.exam_tech.revcta.body',
    'resources.exam_tech.revcta.cta',
    // Continue exploring
    'resources.exam_tech.cont.title',
    'resources.exam_tech.cont.model.label',
    'resources.exam_tech.cont.model.desc',
    'resources.exam_tech.cont.tech.label',
    'resources.exam_tech.cont.tech.desc',
    'resources.exam_tech.cont.all.label',
    'resources.exam_tech.cont.all.desc',
  ])

  const [
    eyebrow,
    title,
    subtitle,
    bcHome,
    bcResources,
    bcThis,
    whyTitle,
    whyBody1,
    whyBody2,
    exploreTitle,
    exploreSubtitle,
    ctaReadGuide,
    sTimeTitle,
    sTimeBadge,
    sTimeDesc,
    sQTitle,
    sQBadge,
    sQDesc,
    sETitle,
    sEBadge,
    sEDesc,
    sDTitle,
    sDBadge,
    sDDesc,
    qwTitle,
    qwSubtitle,
    qwReadH,
    qwReadB,
    qwPlanH,
    qwPlanB,
    qwClockH,
    qwClockB,
    qwQuotesH,
    qwQuotesB,
    qwCheckH,
    qwCheckB,
    revctaTitle,
    revctaBody,
    revctaCta,
    contTitle,
    contModelLabel,
    contModelDesc,
    contTechLabel,
    contTechDesc,
    contAllLabel,
    contAllDesc,
  ] = labels

  const SECTION_META: Record<string, { title: string; badge: string; desc: string }> = {
    time: { title: sTimeTitle, badge: sTimeBadge, desc: sTimeDesc },
    qtypes: { title: sQTitle, badge: sQBadge, desc: sQDesc },
    essay: { title: sETitle, badge: sEBadge, desc: sEDesc },
    day: { title: sDTitle, badge: sDBadge, desc: sDDesc },
  }

  return (
    <>
      <ArticleJsonLd
        headline="Exam Technique Guide"
        description="Master the exam techniques that turn knowledge into top grades - time management, question types, essay structure, and exam-day advice for GCSE and IGCSE English."
        datePublished="2026-04-01"
        url="https://theenglishhub.app/resources/exam-technique"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Resources', url: 'https://theenglishhub.app/resources' },
          { name: 'Exam technique', url: 'https://theenglishhub.app/resources/exam-technique' },
        ]}
      />

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              {bcHome}
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/resources" className="hover:text-primary transition-colors">
              {bcResources}
            </Link>
          </li>
          <li>/</li>
          <li className="font-medium text-primary">{bcThis}</li>
        </ol>
      </nav>

      {/* Why exam technique matters */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-xl border border-primary/20 bg-primary/10 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">{whyTitle}</h2>
          <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
            <p>{whyBody1}</p>
            <p>{whyBody2}</p>
          </div>
        </div>
      </section>

      {/* Section cards */}
      <section
        className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8"
        aria-labelledby="sections-heading"
      >
        <h2 id="sections-heading" className="text-2xl font-bold text-foreground sm:text-3xl">
          {exploreTitle}
        </h2>
        <p className="mt-2 text-muted-foreground">{exploreSubtitle}</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {SECTIONS.map((s) => {
            const meta = SECTION_META[s.id]
            return (
              <Link
                key={s.href}
                href={s.href}
                className={`group flex flex-col rounded-2xl border-2 ${s.colour} bg-card p-8 shadow-md transition hover:shadow-lg`}
              >
                <div className="flex items-start justify-between">
                  <span className={s.iconColour}>{s.icon}</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    {meta.badge}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {meta.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {meta.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                  {ctaReadGuide} <ArrowRight />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Quick wins */}
      <section className="bg-muted px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-foreground">{qwTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">{qwSubtitle}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { heading: qwReadH, body: qwReadB },
              { heading: qwPlanH, body: qwPlanB },
              { heading: qwClockH, body: qwClockB },
              { heading: qwQuotesH, body: qwQuotesB },
              { heading: qwCheckH, body: qwCheckB },
            ].map((tip, i) => (
              <div
                key={tip.heading}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{tip.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revision CTA */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8 text-center">
          <h2 className="text-xl font-bold text-foreground">{revctaTitle}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">{revctaBody}</p>
          <Link
            href="/revision/exam-technique"
            className="mt-5 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-primary/90"
          >
            {revctaCta}
          </Link>
        </div>
      </section>

      {/* Continue exploring */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">{contTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { label: contModelLabel, href: '/resources/model-answers', desc: contModelDesc },
            { label: contTechLabel, href: '/resources/techniques', desc: contTechDesc },
            { label: contAllLabel, href: '/resources', desc: contAllDesc },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-border bg-card p-5 shadow-md transition hover:shadow-md hover:border-accent/40"
            >
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                {link.label}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  )
}
