import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  Mic2,
  Globe2,
  Mountain,
  Newspaper,
  Timer,
  Brain,
  Gamepad2,
  MapPin,
  Bird,
  Heart,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Edexcel IGCSE Language A 4EA1 non-fiction anthology — The English Hub',
  description:
    'Pearson Edexcel IGCSE Language A 4EA1 — the 10 prescribed non-fiction texts in the anthology. Full study guides and exam practice for Paper 1 Section A.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology',
  },
}

/* ─── Data ───────────────────────────────────────────────────────────── */

const texts = [
  {
    slug: 'the-danger-of-a-single-story',
    title: 'The Danger of a Single Story',
    author: 'Chimamanda Ngozi Adichie',
    type: 'Speech / TED Talk transcript',
    theme: 'Identity, stereotypes, cultural representation',
    icon: Mic2,
  },
  {
    slug: 'a-passage-to-africa',
    title: 'A Passage to Africa',
    author: 'George Alagiah (1955–2023)',
    type: 'Memoir / journalism',
    theme: 'Suffering, empathy, guilt, media ethics',
    icon: Globe2,
  },
  {
    slug: 'the-explorers-daughter',
    title: "The Explorer's Daughter",
    author: 'Kari Herbert',
    type: 'Travel memoir',
    theme: 'Nature, tradition, moral conflict, survival',
    icon: Mountain,
  },
  {
    slug: 'explorers-or-boys-messing-about',
    title: 'Explorers or Boys Messing About',
    author: 'Steven Morris',
    type: 'Newspaper article (Guardian, 2003 — adapted in anthology)',
    theme: 'Adventure, criticism, risk, responsibility',
    icon: Newspaper,
  },
  {
    slug: '127-hours',
    title: '127 Hours: Between a Rock and a Hard Place',
    author: 'Aron Ralston',
    type: 'Autobiography',
    theme: 'Survival, isolation, determination, nature',
    icon: Timer,
  },
  {
    slug: 'young-and-dyslexic',
    title: "Young and Dyslexic? You've Got It Going On",
    author: 'Benjamin Zephaniah (1958–2023)',
    type: 'Opinion article / autobiography (adapted in anthology)',
    theme: 'Education, identity, disability, self-belief',
    icon: Brain,
  },
  {
    slug: 'a-game-of-polo-with-a-headless-goat',
    title: 'A Game of Polo with a Headless Goat',
    author: 'Emma Levine',
    type: 'Travel writing',
    theme: 'Culture, excitement, spectacle, tradition',
    icon: Gamepad2,
  },
  {
    slug: 'beyond-the-sky-and-the-earth',
    title: 'Beyond the Sky and the Earth: A Journey into Bhutan',
    author: 'Jamie Zeppa',
    type: 'Travel memoir',
    theme: 'Culture shock, isolation, beauty, transformation',
    icon: MapPin,
  },
  {
    slug: 'h-is-for-hawk',
    title: 'H is for Hawk',
    author: 'Helen Macdonald',
    type: 'Memoir / nature writing',
    theme: 'Grief, nature, obsession, identity',
    icon: Bird,
  },
  {
    slug: 'chinese-cinderella',
    title: 'Chinese Cinderella',
    author: 'Adeline Yen Mah',
    type: 'Autobiography',
    theme: 'Family, rejection, resilience, identity',
    icon: Heart,
  },
]

/* ─── Page ───────────────────────────────────────────────────────────── */

export default async function AnthologyHubPage() {
  await requireIgcseBoard(['edexcel-igcse-lang'])

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Edexcel IGCSE Language A', url: 'https://theenglishhub.app/igcse/edexcel-lang' },
          { name: 'Anthology', url: 'https://theenglishhub.app/igcse/edexcel-lang/anthology' },
        ]}
      />
      {/* ── Back link ───────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel-lang" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Language A
        </Button>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/40 via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10 dark:from-amber-950/20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-clay-600">
              <Sparkles className="mr-1 size-3" />
              Paper 1 Section A
            </Badge>
            <Badge variant="secondary">10 texts</Badge>
            <Badge variant="secondary">4EA1</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display font-serif">
            Paper 1 Section A &mdash; Anthology Non-Fiction
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Ten prescribed non-fiction texts for Edexcel IGCSE English Language A Paper 1. Each text
            has been analysed with <strong className="text-foreground">language features</strong>,{' '}
            <strong className="text-foreground">structural analysis</strong>,{' '}
            <strong className="text-foreground">key vocabulary</strong> and{' '}
            <strong className="text-foreground">exam-style practice questions</strong>.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              size="lg"
              render={<Link href="/igcse/edexcel-lang/anthology/the-danger-of-a-single-story" />}
            >
              <BookOpen className="size-4" />
              Start studying
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Anthology version disclaimer ────────────────────────────── */}
      <section
        aria-label="Anthology version notice"
        className="rounded-xl border border-amber-500/40 bg-amber-500/[0.08] p-5 text-body-sm text-card-foreground"
      >
        <p className="mb-2">
          <strong className="text-foreground">Anthology version warning:</strong> This site teaches
          the <strong className="text-foreground">Edexcel IGCSE Anthology Issue 2</strong> (ISBN
          978-1-446-93108-0, Pearson Education). Two of the non-fiction texts in this Paper 1
          Section A anthology are <strong className="text-foreground">adapted</strong> versions that
          differ from their freely-available online originals:
        </p>
        <ol className="mb-2 list-decimal space-y-1 pl-5 text-muted-foreground">
          <li>
            &lsquo;<em>Explorers or boys messing about?</em>&rsquo; by{' '}
            <strong className="text-foreground">Steven Morris</strong> &mdash; originally published
            in <em>The Guardian</em>, 24 January 2003; adapted for the Edexcel anthology by Pearson.
            Online reproductions of the <em>Guardian</em> original are{' '}
            <strong className="text-foreground">not the anthology text</strong>.
          </li>
          <li>
            &lsquo;<em>Young and dyslexic? You&rsquo;ve got it going on.</em>&rsquo; by{' '}
            <strong className="text-foreground">Benjamin Zephaniah (1958&ndash;2023)</strong>{' '}
            &mdash; originally a 2017 <em>Guardian</em> opinion piece; adapted for the anthology
            with cuts and re-orderings. Zephaniah died in January 2023; rights are now held by his
            estate.
          </li>
        </ol>
        <p className="mb-2 text-foreground">
          <strong>Always use the anthology version</strong> when answering Edexcel exam questions
          &mdash; examiners will mark against the anthology text, not the <em>Guardian</em>{' '}
          originals you may find on revision websites.
        </p>
        <p className="mb-2 text-body-xs text-muted-foreground">
          Other in-anthology textual differences from online sources include: <em>Half-Caste</em>{' '}
          uses Agard&rsquo;s spelling &lsquo;yu&rsquo; (not &lsquo;you&rsquo;);{' '}
          <em>The Bright Lights of Sarajevo</em> has additional stanza breaks not in
          Harrison&rsquo;s original <em>Guardian</em> publication.
        </p>
        <p className="text-body-xs text-muted-foreground">
          © Pearson Education / Guardian News &amp; Media Ltd / Zephaniah estate. Quotations on
          individual set-text pages are short fair-dealing extracts under CDPA s.30. The full
          anthology is available only through Pearson&rsquo;s school-licensed editions.
        </p>
      </section>

      {/* ── Texts grid ──────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">All 10 Anthology Texts</h2>
          <Badge variant="secondary" className="ml-auto">
            10 texts
          </Badge>
        </div>
        <p className="mb-6 max-w-3xl text-body-sm text-muted-foreground">
          Each text page includes key extracts, language and structural analysis, writer&apos;s
          purpose, vocabulary, exam practice and comparison links. Select a text to begin your
          study.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {texts.map((t, i) => {
            const Icon = t.icon
            return (
              <Card
                key={t.slug}
                className="group flex flex-col transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-amber-500/10">
                      <Icon className="size-5 text-amber-600 dark:text-clay-600" />
                    </div>
                    <span className="font-mono text-body-xs text-muted-foreground">
                      Text {i + 1}
                    </span>
                  </div>
                  <CardTitle className="text-heading-sm font-heading leading-tight font-serif">
                    {t.title}
                  </CardTitle>
                  <CardDescription className="pt-1">{t.author}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-3">
                  <p className="text-body-xs text-muted-foreground uppercase tracking-wide">
                    {t.type}
                  </p>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">{t.theme}</p>
                  <div className="mt-auto pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      render={<Link href={`/igcse/edexcel-lang/anthology/${t.slug}`} />}
                    >
                      Study this text
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* ── Exam guidance ──────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Paper 1 Section A — What to Expect
          </h2>
        </div>
        <div className="space-y-4 text-body-sm text-foreground">
          <p>
            In Paper 1 Section A you will be given an extract from one of the ten anthology texts.
            You will answer three types of question:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong>Retrieval (Q1):</strong> &ldquo;List four things about...&rdquo; —
              straightforward identification of information from the text. Worth 4 marks.
            </li>
            <li>
              <strong>Language analysis (Q2):</strong> &ldquo;How does the writer use language
              to...&rdquo; — close analysis of specific techniques and their effects on the reader.
              Worth 12 marks.
            </li>
            <li>
              <strong>Structural analysis (Q3):</strong> &ldquo;How does the writer structure the
              text to...&rdquo; — analysis of how the text is organised to engage and influence the
              reader. Worth 12 marks.
            </li>
          </ol>
          <p className="rounded-lg bg-muted p-4 text-body-sm text-muted-foreground">
            You should study all ten texts. You will not know which text will appear in the exam
            until you open the paper.
          </p>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="pt-4 text-center text-body-xs text-muted-foreground">
        Aligned with Pearson Edexcel specification 4EA1 &middot; Paper 1 Section A
      </footer>
    </div>
  )
}
