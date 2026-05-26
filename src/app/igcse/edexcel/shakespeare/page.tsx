import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button-variants'
import { Drama, ArrowRight, BookOpen, Sparkles } from 'lucide-react'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  openGraph: {
    title: 'IGCSE Edexcel Shakespeare - Macbeth, Romeo and Juliet, Much Ado - The English Hub',
    description:
      'Pearson Edexcel IGCSE Literature 4ET1 Shakespeare section. Three plays: Macbeth, Romeo and Juliet, Much Ado About Nothing. Themes, characters, essay plans.',
  },
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/shakespeare',
  },
  title: 'IGCSE Edexcel Shakespeare - Macbeth, Romeo and Juliet, Much Ado',
  description:
    'Pearson Edexcel IGCSE Literature 4ET1 Shakespeare section. Three plays: Macbeth, Romeo and Juliet, Much Ado About Nothing. Themes, characters, essay plans.',
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
  {
    slug: 'much-ado',
    title: 'Much Ado About Nothing',
    tagline: 'Love, deception and the games people play',
    period: 'First performed c. 1598',
    summary:
      "Two couples - the witty Beatrice and Benedick, and the earnest Claudio and Hero - are pushed together and torn apart by a tangle of eavesdropping, pranks and slander. Shakespeare's sharpest romantic comedy also asks hard questions about honour, reputation and how women are judged.",
    highlights: [
      'Hub page summarising plot, characters and themes',
      '15 key quotes with analysis',
      'Themes: love, deception, honour, marriage, gender',
    ],
    cta: 'Start the Much Ado guide',
  },
]

export default async function ShakespeareHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Shakespeare', url: 'https://theenglishhub.app/igcse/edexcel/shakespeare' },
        ]}
      />
      <LearningResourceJsonLd
        name="Edexcel IGCSE Literature Shakespeare section"
        description="Three Shakespeare set texts - Macbeth, Romeo and Juliet, Much Ado About Nothing - for Pearson Edexcel IGCSE Literature 4ET1."
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
            &larr; IGCSE English
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <Drama className="h-4 w-4" />
            Edexcel IGCSE Literature
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Shakespeare Study Guides
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Edexcel IGCSE English Literature offers three Shakespeare set texts. You only study{' '}
            <strong>one</strong> - use the guides below to revise the play your school is teaching.
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
            In the Edexcel IGCSE Literature exam, you will answer{' '}
            <strong>two linked questions</strong> on your chosen play: a part (a) question focused
            on a printed extract, and a part (b) question that asks you to explore the same idea,
            theme or character across the play as a whole. The exam is <strong>closed book</strong>{' '}
            - you must memorise your own quotes for part (b).
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Part (a): close analysis of a printed extract (~20 marks)
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Part (b): whole-play essay with your own quotations (~20 marks)
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Assessed on: understanding the text, analysing language and structure, and relating to
              context
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              Closed book - embed short, memorised quotations
            </li>
          </ul>
        </section>

        {/* ── Plays ───────────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">Choose your set text</h2>
          <p className="mt-2 text-muted-foreground">
            Students study one of the three plays below. Pick the one your teacher has selected.
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
                    className={buttonVariants({ size: 'lg' })}
                  >
                    {play.cta}
                    <ArrowRight className="ml-1 h-4 w-4" />
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
            Edexcel IGCSE Literature questions look a little different from GCSE ones. Instead of a
            single essay with an extract, you answer <strong>two linked questions</strong> on the
            same play: a close extract analysis <em>and</em> a whole-play response. That means you
            need both forensic close reading <em>and</em> a strong mental map of the whole play
            &mdash; not just your favourite scenes.
          </p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Every play hub below includes a dedicated <strong>Study tip</strong> section explaining
            how to prepare for the two-part question and how it differs from GCSE.
          </p>
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />
    </main>
  )
}
