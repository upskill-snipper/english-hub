import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/utils'
import { Drama, ArrowRight, BookOpen, Sparkles } from 'lucide-react'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { t } from '@/lib/i18n/t'
import { LearningResourceJsonLd } from '@/components/seo/json-ld'

// 10 October 2026: this page described the UK GCSE (1ET0) question, two linked
// parts on a printed extract and the whole play, in a closed-book exam, and
// offered Much Ado About Nothing as a set play. 4ET1 sets Shakespeare in Paper 2
// Section B, as three of six literary heritage texts (Romeo and Juliet, Macbeth
// and The Merchant of Venice, beside novels by Austen, Dickens and Hawthorne),
// and does not set Much Ado. Section B is one 30-mark essay from a choice of
// two on your text, with no extract, marked AO1 10, AO2 10 and AO4 10, and the
// paper is open book (specification Issue 3, PDF pp11, 14, 19 and 30; Paper 2
// question papers, May 2023 and May 2024).
export const metadata: Metadata = {
  openGraph: {
    title: 'Edexcel IGCSE Shakespeare - Macbeth, Romeo and Juliet - The English Hub',
    description:
      'Pearson Edexcel IGCSE Literature 4ET1: guides to Macbeth and Romeo and Juliet, two of the Shakespeare plays set for Paper 2. Themes, characters, essay plans.',
    images: [
      {
        url: '/api/og?title=Edexcel+IGCSE+Shakespeare+-+Macbeth%2C+Romeo+and+Juliet+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Edexcel IGCSE Shakespeare - Macbeth, Romeo and Juliet - The English Hub',
      },
    ],
  },
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/shakespeare',
  },
  title: 'Edexcel IGCSE Shakespeare - Macbeth, Romeo and Juliet',
  description:
    'Pearson Edexcel IGCSE Literature 4ET1: guides to Macbeth and Romeo and Juliet, two of the Shakespeare plays set for Paper 2. Themes, characters, essay plans.',
}

const PLAYS = [
  {
    slug: 'macbeth',
    title: 'Macbeth',
    tagline: 'Ambition, guilt and the supernatural',
    period: 'First performed c. 1606',
    summary:
      "A brave Scottish general hears a prophecy that he will become king. Goaded by his wife, he murders King Duncan and seizes the throne - but is destroyed by guilt, paranoia and the relentless logic of fate. Shakespeare's shortest tragedy is a study of how ambition corrupts.",
    highlights: [
      'Full plot, character, theme and context guides',
      '20 key quotes with detailed analysis',
      'Jacobean context - witchcraft, kingship, the Gunpowder Plot',
    ],
    cta: 'Start the Macbeth guide',
  },
  {
    slug: 'romeo-and-juliet',
    title: 'Romeo and Juliet',
    tagline: 'Love, fate and the violence of feuding families',
    period: 'First performed c. 1595',
    summary:
      "The son and daughter of two warring Verona households fall in love at first sight. Their whirlwind romance is built on stolen moments, secret vows and desperate plans - and it ends in a tomb. Shakespeare's most famous tragedy asks whether love can ever survive the world it is born into.",
    highlights: [
      'Plot, characters and theme overview on a single hub',
      '20 key quotes with context and analysis',
      'Themes: love, fate, conflict, youth vs age, honour',
    ],
    cta: 'Start the Romeo and Juliet guide',
  },
]

export default async function ShakespeareHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="min-h-screen bg-background">
      <LearningResourceJsonLd
        name="Edexcel IGCSE Literature Shakespeare section"
        description="Guides to Macbeth and Romeo and Juliet, two of the three Shakespeare plays Pearson sets for Edexcel IGCSE Literature 4ET1 Paper 2."
        educationalLevel="IGCSE"
        learningResourceType="Study guide"
        inLanguage="en-GB"
        url="https://theenglishhub.app/igcse/edexcel/shakespeare"
        audienceRole="student"
        isAccessibleForFree={true}
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Link href="/igcse" className="text-sm text-muted-foreground hover:text-foreground">
            &larr; {await t('igcse.page.igcse_english')}
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <Drama className="h-4 w-4" />
            {await t('igcse.page.badge_edexcel_lit')}
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Shakespeare Study Guides
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Edexcel IGCSE English Literature sets three Shakespeare plays among its six literary
            heritage texts: Romeo and Juliet, Macbeth and The Merchant of Venice. You study{' '}
            <strong>one</strong> heritage text, which may be a novel instead - use the guides below
            if your school is teaching Macbeth or Romeo and Juliet.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* ── How the Shakespeare question works ──────────────── */}
        <section className="rounded-2xl border border-border bg-card p-6 shadow-md sm:p-8">
          <div className="flex items-center gap-2 text-primary">
            <BookOpen className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-wide">
              About the Shakespeare question
            </span>
          </div>
          <h2 className="mt-2 text-2xl font-bold text-foreground">The Shakespeare question</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            In Paper 2 Section B of the Edexcel IGCSE Literature exam, you answer{' '}
            <strong>one essay question</strong>, from a choice of two on your play. No extract is
            printed: some questions open with a short quotation or a statement, and each asks about
            the play as a whole. The exam is <strong>open book</strong> - you may take in a clean,
            unmarked copy of the prescribed edition.
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              One essay from a choice of two on your play (30 marks)
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              About 45 minutes, half of Paper 2&rsquo;s 1 hour 30 minutes
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Assessed on: understanding the text, analysing language and structure, and relating to
              context, 10 marks each
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Open book - your copy must be clean, so know where the key scenes are
            </li>
          </ul>
        </section>

        {/* ── Plays ───────────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            {await t('igcse.page.choose_set_text')}
          </h2>
          <p className="mt-2 text-muted-foreground">
            Guides to two of the three plays are below. Pick the one your teacher has selected.
          </p>

          <div className="mt-8 space-y-6">
            {PLAYS.map((play) => (
              <article
                key={play.slug}
                className="rounded-2xl border border-border bg-card p-6 shadow-md sm:p-8"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                      <Sparkles className="h-4 w-4" />
                      {play.period}
                    </div>
                    <h3 className="mt-2 text-2xl font-bold text-foreground">{play.title}</h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{play.tagline}</p>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {play.summary}
                    </p>
                    <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                      {play.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/igcse/edexcel/shakespeare/${play.slug}`}
                    // Wraps on a phone: 'Start the Romeo and Juliet guide' is 306px on one
                    // line and the card is 246px wide at 360, so the page scrolled sideways.
                    className={cn(
                      buttonVariants({ size: 'lg' }),
                      'h-auto min-h-11 max-w-full py-2.5 whitespace-normal',
                    )}
                  >
                    {play.cta}
                    <ArrowRight className="ms-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── IGCSE vs GCSE note ───────────────────────────────── */}
        <section className="mt-14 rounded-2xl border-2 border-primary/40 bg-primary/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">
            Studying IGCSE, not GCSE? Here&rsquo;s what changes
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            If you have seen GCSE Shakespeare questions built on a printed extract, note that this
            paper prints none. You write <strong>one essay on the play as a whole</strong>, and you
            may have a clean copy of the play with you. That means you need a strong map of the
            whole play, and quick bearings in your own copy, not just a few favourite scenes.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Each play hub below includes a <strong>Study tip</strong> section on how to prepare for
            this question.
          </p>
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />
    </div>
  )
}
