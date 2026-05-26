import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Quote,
  Layers,
  Pen,
  Target,
  GitCompare,
  GraduationCap,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Chinese Cinderella - Adeline Yen Mah - IGCSE Language A Anthology - The English Hub',
    description: 'Study guide for ',
  },
  title: 'Chinese Cinderella - Adeline Yen Mah - IGCSE Language A Anthology',
  description:
    'Study guide for "Chinese Cinderella" by Adeline Yen Mah. Language analysis, structural analysis, themes and exam practice for Edexcel IGCSE English Language A Paper 1 Section A.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology/chinese-cinderella',
  },
}

const themes = [
  {
    label: 'Family rejection',
    detail:
      'Yen Mah recounts a childhood in which she was treated as unwanted within her own family. The text registers the steady weight of being unloved.',
  },
  {
    label: 'Identity and worth',
    detail:
      'The young Adeline struggles to reconcile what she is told about herself with what she begins, slowly, to suspect she might be capable of.',
  },
  {
    label: 'Resilience',
    detail:
      'Despite emotional neglect, Yen Mah does not break. The text traces a quiet, stubborn endurance that will eventually become success.',
  },
  {
    label: 'Recognition and validation',
    detail:
      'A key turning point comes when an external achievement (school success) is finally acknowledged - even briefly - by family. The text shows what such recognition costs and means.',
  },
  {
    label: 'Childhood memory',
    detail:
      'Written from adult perspective, the memoir reconstructs a child’s experience with adult understanding - without losing the child’s original feelings.',
  },
]

const structuralAnalysis = {
  opening:
    'Yen Mah opens with a small, specific moment that immediately situates the reader inside the young Adeline’s emotional world - concrete detail rather than abstract framing.',
  development:
    'The text builds through accumulated incidents - small slights, exclusions, unequal treatment - that establish a pattern rather than a single dramatic event.',
  climax:
    'A moment of unexpected recognition or success becomes the structural climax, all the more powerful for being set against the long preceding pattern of neglect.',
  resolution:
    'The resolution is bittersweet - recognition is granted but feels precarious. The text resists tidy redemption.',
  perspective:
    'First-person memoir written by adult Yen Mah recounting her childhood. The two voices - child experiencing, adult understanding - work together throughout.',
}

const writersPurpose = {
  achieve:
    'Yen Mah wants to give voice to a childhood experience of being unwanted within one’s own family - an experience that is often invisible from the outside.',
  readerFeel:
    'She wants the reader to feel both the loneliness of the unloved child and the quiet hope of the child who is starting to find proof of her own worth elsewhere.',
  message:
    'Worth is not granted by family alone. A child’s achievements, recognised even briefly, can be the seed of a self that the family failed to nurture.',
}

const examPractice = {
  q1: {
    question: 'List four things you learn about Yen Mah’s family situation.',
    type: 'Retrieval - 4 marks',
  },
  q2: {
    question:
      'How does Yen Mah use language to convey her emotions during the events she describes?',
    type: 'Language analysis - 12 marks',
  },
  q3: {
    question:
      'How does Yen Mah structure the text to lead the reader towards the moment of recognition?',
    type: 'Structural analysis - 12 marks',
  },
}

const comparisonLinks = [
  {
    title: 'A Passage to Africa',
    author: 'George Alagiah (1955-2023)',
    href: '/igcse/edexcel-lang/anthology/a-passage-to-africa',
    reason:
      'Both writers reflect on early life events that shaped their adult selves. Compare the personal-childhood focus of Yen Mah with the witnessed-stranger focus of Alagiah.',
    themes: ['Memoir', 'Identity', 'Reflection'],
  },
  {
    title: 'Young and Dyslexic? You’ve Got It Going On',
    author: 'Benjamin Zephaniah (1958-2023)',
    href: '/igcse/edexcel-lang/anthology/young-and-dyslexic',
    reason:
      'Both texts describe being misjudged by authority figures (family / school) and finding self-worth elsewhere. Compare the two narratives of overlooked young people who refused to accept others’ verdicts on them.',
    themes: ['Self-worth', 'Resilience', 'Misjudgement'],
  },
  {
    title: 'The Danger of a Single Story',
    author: 'Chimamanda Ngozi Adichie',
    href: '/igcse/edexcel-lang/anthology/the-danger-of-a-single-story',
    reason:
      'Both writers explore the harm of being defined by a single, reductive narrative. Compare Yen Mah’s family-imposed story with Adichie’s critique of cultural single stories.',
    themes: ['Identity', 'Narrative', 'Self-definition'],
  },
]

export default async function ChineseCinderellaPage() {
  await requireIgcseBoard(['edexcel-igcse-lang'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel-lang/anthology" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Anthology
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <BookOpen className="size-5 text-amber-600 dark:text-clay-600" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground font-serif">
              Chinese Cinderella
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Adeline Yen Mah &middot; Autobiography
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">
                Edexcel IGCSE Language A
              </Badge>
              <Badge className="bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-clay-600 text-[0.65rem]">
                Paper 1 Section A
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/30 via-card to-card p-5 sm:p-6 dark:from-amber-950/10">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4.5 text-amber-600 dark:text-clay-600" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Context</h2>
        </div>
        <div className="space-y-3 text-body-sm text-muted-foreground leading-relaxed">
          <p>
            Adeline Yen Mah&apos;s <em>Chinese Cinderella</em> is the autobiographical account of
            her childhood in 1940s and 1950s China and Hong Kong. Treated as unwanted by her
            stepmother and largely overlooked by her father, the young Adeline found refuge in
            academic achievement and, eventually, in writing.
          </p>
          <p>
            The anthology extract focuses on a moment in her school life that becomes a turning
            point - a small but consequential instance of recognition that contrasts sharply with
            the emotional neglect of her home.
          </p>
          <p>Published by Penguin.</p>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Pen className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Themes</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {themes.map((t) => (
            <div key={t.label} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
                {t.label}
              </span>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            Structural Analysis
          </h2>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Opening', content: structuralAnalysis.opening },
            { label: 'Development', content: structuralAnalysis.development },
            { label: 'Climax', content: structuralAnalysis.climax },
            { label: 'Resolution', content: structuralAnalysis.resolution },
            { label: 'Narrative perspective', content: structuralAnalysis.perspective },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border/40 bg-muted/20 p-4">
              <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
                {item.label}
              </span>
              <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">
            Writer&apos;s Purpose
          </h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              What is the writer trying to achieve?
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {writersPurpose.achieve}
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              How does the writer want the reader to feel?
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {writersPurpose.readerFeel}
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              Central message or argument
            </span>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              {writersPurpose.message}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Exam Practice</h2>
        </div>
        <div className="space-y-5">
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {examPractice.q1.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q1.question}</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {examPractice.q2.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q2.question}</p>
          </div>
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <span className="font-mono text-body-xs text-primary uppercase tracking-wider font-semibold">
              {examPractice.q3.type}
            </span>
            <p className="mt-2 text-body text-foreground font-medium">{examPractice.q3.question}</p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4.5 text-primary" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Compare With</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Strong pairings for comparison questions in the exam.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comparisonLinks.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-border/40 bg-card p-4 transition-colors hover:border-foreground/20 hover:bg-muted/40"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground/90 font-serif">
                {c.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{c.author}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{c.reason}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.themes.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="rounded-lg bg-muted/50 p-4 text-center text-body-xs text-muted-foreground">
        <p>
          <strong className="text-foreground">Rights notice:</strong> &copy; Penguin / Adeline Yen
          Mah. Brief paraphrases on this page are for criticism, review and quotation under CDPA
          1988 &sect;30. For full text, students should consult the licensed school edition (Pearson
          Edexcel IGCSE anthology, ISBN 978-1-446-93108-0).
        </p>
        <p className="mt-2">Aligned with Pearson Edexcel specification 4EA1</p>
      </footer>
    </div>
  )
}
