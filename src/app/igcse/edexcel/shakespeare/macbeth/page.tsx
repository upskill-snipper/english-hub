import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import {
  ArrowRight,
  BookOpenText,
  Users,
  Lightbulb,
  Quote,
  ScrollText,
  GraduationCap,
} from 'lucide-react'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import StudyTools from '@/components/study/StudyTools'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/shakespeare/macbeth',
  },
  title: 'Macbeth — Edexcel IGCSE Literature Study Guide',
  description:
    'Full Macbeth study guide for Edexcel IGCSE English Literature. Plot, characters, themes, quotes, Jacobean context and exam technique for the two-part Shakespeare question.',
}

const SUB_PAGES = [
  {
    href: '/igcse/edexcel/shakespeare/macbeth/plot',
    title: 'Plot',
    summary:
      "A detailed act-by-act and scene-by-scene walkthrough of the play, from the witches' opening prophecy to Macduff's final blow.",
    icon: BookOpenText,
  },
  {
    href: '/igcse/edexcel/shakespeare/macbeth/characters',
    title: 'Characters',
    summary:
      'Analysis of Macbeth, Lady Macbeth, Banquo, Duncan, Macduff, Malcolm and the Witches — including their arcs, relationships and key quotes.',
    icon: Users,
  },
  {
    href: '/igcse/edexcel/shakespeare/macbeth/themes',
    title: 'Themes',
    summary:
      'Ambition, guilt, the supernatural, kingship, appearance vs reality, gender and the tension between fate and free will.',
    icon: Lightbulb,
  },
  {
    href: '/igcse/edexcel/shakespeare/macbeth/quotes',
    title: 'Key quotes',
    summary:
      '20 memorable quotations with speaker, scene reference and detailed analysis — ready for a closed-book exam.',
    icon: Quote,
  },
  {
    href: '/igcse/edexcel/shakespeare/macbeth/context',
    title: 'Context',
    summary:
      'Jacobean England, James I, witchcraft and Daemonologie, the Divine Right of Kings, the Gunpowder Plot and the Great Chain of Being.',
    icon: ScrollText,
  },
]

const BRIEF_OVERVIEW = [
  {
    label: 'Plot',
    text: "Macbeth, a Scottish general, hears a witches' prophecy that he will be king. Urged on by his wife, he murders King Duncan, seizes the throne, and spirals into tyranny, paranoia and death.",
  },
  {
    label: 'Characters',
    text: "A tight cast centred on Macbeth's fall — his ambitious wife Lady Macbeth, the noble Banquo, the pious King Duncan, the vengeful Macduff, the rightful heir Malcolm, and the three equivocating Witches.",
  },
  {
    label: 'Themes',
    text: 'Ambition and its costs, the destructive power of guilt, the supernatural, what makes a legitimate king, masculinity and gender, and whether we are ruled by fate or free will.',
  },
  {
    label: 'Context',
    text: "Written c. 1606 for James I, soon after the Gunpowder Plot. The play flatters James (Banquo's descendant), reflects Jacobean fears of witchcraft, and dramatises the horror of regicide.",
  },
]

const KEY_QUOTES_PREVIEW = [
  { quote: '"Fair is foul, and foul is fair"', who: 'Witches, 1.1' },
  {
    quote: '"Stars, hide your fires; let not light see my black and deep desires"',
    who: 'Macbeth, 1.4',
  },
  {
    quote: '"Look like the innocent flower, but be the serpent under\u2019t"',
    who: 'Lady Macbeth, 1.5',
  },
  {
    quote: '"Is this a dagger which I see before me?"',
    who: 'Macbeth, 2.1',
  },
  { quote: '"Out, damned spot! Out, I say!"', who: 'Lady Macbeth, 5.1' },
]

export default async function MacbethHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <main className="min-h-screen bg-background">
      <CourseJsonLd
        name="Macbeth — Edexcel IGCSE Literature Study Guide"
        description="In-depth study guide for Macbeth for Edexcel IGCSE English Literature, covering plot, characters, themes, key quotations, context and exam essay plans."
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Literature', url: 'https://theenglishhub.app/igcse/edexcel' },
          { name: 'Shakespeare', url: 'https://theenglishhub.app/igcse/edexcel/shakespeare' },
          { name: 'Macbeth', url: 'https://theenglishhub.app/igcse/edexcel/shakespeare/macbeth' },
        ]}
      />
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/igcse/edexcel/shakespeare"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Shakespeare hub
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <GraduationCap className="h-4 w-4" />
            Edexcel IGCSE Literature
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Macbeth
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Shakespeare&rsquo;s shortest and bleakest tragedy &mdash; the story of how ambition,
            once unchained, consumes everything it touches.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 pt-8">
        <StudyTools textName="Macbeth" textType="play" examBoard="Edexcel" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* ── At a glance ──────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-foreground">At a glance</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {BRIEF_OVERVIEW.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-card p-5 shadow-md"
              >
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Sub-pages ────────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">Full study guide</h2>
          <p className="mt-2 text-muted-foreground">
            Drill down into each part of the play. Every section is written for the Edexcel IGCSE
            Literature two-part Shakespeare question.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {SUB_PAGES.map((page) => {
              const Icon = page.icon
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group rounded-xl border border-border bg-card p-6 shadow-md transition-colors hover:border-primary/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{page.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {page.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:underline">
                    Read the {page.title.toLowerCase()} guide
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ── Key quotes preview ───────────────────────────────── */}
        <section className="mt-14">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-foreground">Key quotes preview</h2>
            <Link
              href="/igcse/edexcel/shakespeare/macbeth/quotes"
              className={buttonVariants({ variant: 'outline', size: 'sm' })}
            >
              See all 20
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 space-y-3">
            {KEY_QUOTES_PREVIEW.map((q) => (
              <div key={q.quote} className="rounded-lg border border-border bg-card p-4 shadow-sm">
                <p className="text-sm italic font-semibold text-foreground">{q.quote}</p>
                <p className="mt-1 text-xs font-medium text-primary">&mdash; {q.who}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Study tip: IGCSE vs GCSE ─────────────────────────── */}
        <section className="mt-14 rounded-2xl border-2 border-primary/40 bg-primary/5 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-primary">
            <Lightbulb className="h-5 w-5" />
            <span className="text-xs font-semibold uppercase tracking-wide">Study tip</span>
          </div>
          <h2 className="mt-2 text-xl font-bold text-foreground">
            How the IGCSE Macbeth question differs from GCSE
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            On the Edexcel IGCSE Literature paper, Shakespeare comes as a{' '}
            <strong>two-part question</strong>:
          </p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                a
              </span>
              <span>
                <strong>Extract analysis</strong> &mdash; you&rsquo;re given a printed passage and
                asked to explore how Shakespeare presents a character, mood or idea. Focus on
                language, structure and dramatic method within the extract itself.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                b
              </span>
              <span>
                <strong>Whole-play essay</strong> &mdash; you then explore the same idea across the
                rest of the play, bringing in <em>your own</em> memorised quotations. The extract is{' '}
                <em>not</em> reprinted, so you must carry a mental map of the whole play into the
                exam.
              </span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            By contrast, most GCSE boards give you a single essay tied to one extract. IGCSE demands
            both close reading <em>and</em> a longer, comparison-style whole-play response &mdash;
            so revision must cover <strong>every act</strong>, not just set scenes.
          </p>
          <div className="mt-4 rounded-lg border border-primary/30 bg-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Revision priorities
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Memorise 15&ndash;20 short, embeddable quotes spread across all five acts.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Practise writing about the same moment at two depths: line by line <em>and</em>{' '}
                across the whole play.
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                Know Jacobean context well enough to weave it in briefly, without derailing
                analysis.
              </li>
            </ul>
          </div>
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />

      <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4 mx-auto max-w-5xl px-4 pb-8">
        Macbeth by William Shakespeare is in the public domain. Quotations are reproduced freely.
      </p>
    </main>
  )
}
