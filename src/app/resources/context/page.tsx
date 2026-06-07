import type { Metadata } from 'next'
import type { JSX } from 'react'
import Link from 'next/link'
import { t } from '@/lib/i18n/t'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Historical Context - GCSE English Literature',
    description:
      'Essential historical and social context for GCSE English Literature. Understand the Victorian era, Elizabethan and Jacobean periods, the Romantic movement, and twentieth-century Britain to unlock top marks in your exam essays.',
  },
  alternates: { canonical: 'https://theenglishhub.app/resources/context' },
  title: 'Historical Context - GCSE English Literature',
  description:
    'Essential historical and social context for GCSE English Literature. Understand the Victorian era, Elizabethan and Jacobean periods, the Romantic movement, and twentieth-century Britain to unlock top marks in your exam essays.',
}

/* ─── Data ───────────────────────────────────────────────────── */

type EraCard = {
  titleKey: string
  slug: string
  period: string
  descKey: string
  texts: string[]
  colour: string
  gradient: string
  icon: JSX.Element
}

const ERAS: EraCard[] = [
  {
    titleKey: 'study.context.hub.era.victorian',
    slug: 'victorian',
    period: '1837 -- 1901',
    descKey: 'study.context.hub.era.victorian.desc',
    texts: ['A Christmas Carol', 'Jekyll and Hyde', 'Frankenstein', 'Great Expectations'],
    colour: 'border-primary/40',
    gradient: 'from-primary/[0.08] to-primary/[0.02]',
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
          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6M3 9v12h18V9"
        />
      </svg>
    ),
  },
  {
    titleKey: 'study.context.hub.era.elizabethan',
    slug: 'elizabethan-jacobean',
    period: '1558 -- 1625',
    descKey: 'study.context.hub.era.elizabethan.desc',
    texts: ['Macbeth', 'Romeo and Juliet', 'The Tempest', 'Much Ado About Nothing'],
    colour: 'border-primary/40',
    gradient: 'from-primary/[0.08] to-primary/[0.02]',
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
          d="M2.25 18.75l3-3 4.5 4.5 4.5-7.5 4.5 4.5 3-3V5.25L18 8.25l-4.5-4.5-4.5 7.5-4.5-4.5L2.25 9v9.75z"
        />
      </svg>
    ),
  },
  {
    titleKey: 'study.context.hub.era.twentieth',
    slug: 'twentieth-century',
    period: '1900 -- 1999',
    descKey: 'study.context.hub.era.twentieth.desc',
    texts: ['An Inspector Calls', 'Lord of the Flies', 'Animal Farm', 'Blood Brothers'],
    colour: 'border-primary/40',
    gradient: 'from-primary/[0.08] to-primary/[0.02]',
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
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    titleKey: 'study.context.hub.era.romantic',
    slug: 'romantic',
    period: '1780 -- 1850',
    descKey: 'study.context.hub.era.romantic.desc',
    texts: ['Power and Conflict Poetry', 'Love and Relationships Poetry'],
    colour: 'border-primary/40',
    gradient: 'from-primary/[0.08] to-primary/[0.02]',
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
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
  },
]

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

export default async function ContextHubPage() {
  const eras = await Promise.all(
    ERAS.map(async (era) => ({
      ...era,
      title: await t(era.titleKey),
      description: await t(era.descKey),
    })),
  )
  const exploreCta = await t('study.context.hub.era.cta')

  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {await t('study.context.hub.hero.eyebrow')}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {await t('study.context.hub.hero.title')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {await t('study.context.hub.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Era cards */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {eras.map((era) => (
            <Link
              key={era.slug}
              href={`/resources/context/${era.slug}`}
              className={`group flex flex-col overflow-hidden rounded-2xl border-2 ${era.colour} bg-card shadow-md transition hover:shadow-lg`}
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${era.gradient} px-6 py-6`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{era.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{era.period}</p>
                  </div>
                  <div className="text-primary opacity-70">{era.icon}</div>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{era.description}</p>

                {/* Relevant texts */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {era.texts.map((text) => (
                    <span
                      key={text}
                      className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {text}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto pt-5">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                    {exploreCta} <ArrowRight />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why context matters */}
      <section className="bg-muted px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-foreground">
            {await t('study.context.hub.why.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Every exam board requires you to &ldquo;show understanding of the relationships between
            texts and the contexts in which they were written.&rdquo; Here is how to do it well.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: 'Do not bolt it on',
                body: "Context should be woven into your analysis, not added as a separate paragraph. Link it to the writer's choices.",
              },
              {
                heading: "Explain the 'so what'",
                body: "It is not enough to state a fact. Explain how the context shapes the text's meaning or the reader's response.",
              },
              {
                heading: 'Use specific detail',
                body: "Say 'the 1834 Poor Law' not 'the poor were treated badly'. Precision shows confident knowledge.",
              },
              {
                heading: "Connect to the writer's purpose",
                body: 'Always ask: why did the writer include this? What were they trying to make their audience think or feel?',
              },
            ].map((tip, i) => (
              <div
                key={tip.heading}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{tip.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          {await t('study.context.hub.continue.title')}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: await t('study.context.hub.link.revision_notes'),
              href: '/resources/revision-notes',
              desc: await t('study.context.hub.link.revision_notes.desc'),
            },
            {
              label: await t('study.context.hub.link.techniques'),
              href: '/resources/techniques',
              desc: await t('study.context.hub.link.techniques.desc'),
            },
            {
              label: await t('study.context.hub.link.all_resources'),
              href: '/resources',
              desc: await t('study.context.hub.link.all_resources.desc'),
            },
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
    </>
  )
}
