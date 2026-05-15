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
    title: 'H is for Hawk — Helen Macdonald — IGCSE Language A Anthology — The English Hub',
    description: 'Study guide for ',
  },
  title: 'H is for Hawk — Helen Macdonald — IGCSE Language A Anthology — The English Hub',
  description:
    'Study guide for "H is for Hawk" by Helen Macdonald. Language analysis, structural analysis, themes and exam practice for Edexcel IGCSE English Language A Paper 1 Section A.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel-lang/anthology/h-is-for-hawk' },
}

const themes = [
  {
    label: 'Grief',
    detail:
      'Macdonald begins training a goshawk in the aftermath of her father’s death; the bird and the grief are bound together throughout the text.',
  },
  {
    label: 'Nature and the wild',
    detail:
      'The goshawk represents something fierce, alien and untameable. Macdonald is drawn to its difference from human emotional life.',
  },
  {
    label: 'Obsession',
    detail:
      'Training the hawk consumes her — physically, mentally, emotionally. The text registers obsession as both a refuge and a danger.',
  },
  {
    label: 'Identity and self',
    detail:
      'In her closeness to the bird, Macdonald loses and finds parts of herself. The text questions where the human ends and the wild begins.',
  },
  {
    label: 'Memory and loss',
    detail:
      'The hawk is also a way of remembering — a relationship to loss that does not require words.',
  },
]

const structuralAnalysis = {
  opening:
    'Macdonald opens in a moment of intense observation — a precise, sensory image that pulls the reader into her hyper-attentive state of mind.',
  development:
    'The text moves between external action (training, flying the hawk) and internal reflection (grief, memory, self-examination), the two threads tightening as the narrative progresses.',
  climax:
    'The emotional climax is internal rather than external — a moment of recognition where Macdonald sees herself clearly through the hawk.',
  resolution:
    'The resolution is not closure but a quieter understanding. Grief is not resolved; it has been moved through.',
  perspective:
    'First-person literary memoir. Macdonald’s voice is precise, lyrical and unsparing about her own emotional state.',
}

const writersPurpose = {
  achieve:
    'Macdonald wants to render grief in a register that does not depend on conventional emotional vocabulary — instead, through nature, attention and a non-human presence.',
  readerFeel:
    'She wants the reader to feel the strange consolation of being absorbed by something other than oneself, and the way attention to a creature can become attention to one’s own pain.',
  message:
    'Grief is survivable but not solvable. Sometimes the path through it runs not through human comfort but through a deep encounter with something wholly other.',
}

const examPractice = {
  q1: {
    question: 'List four things you learn about Macdonald’s relationship with the hawk.',
    type: 'Retrieval — 4 marks',
  },
  q2: {
    question: 'How does Macdonald use language to convey her emotional state?',
    type: 'Language analysis — 12 marks',
  },
  q3: {
    question:
      'How does Macdonald structure the text to interweave grief and the training of the hawk?',
    type: 'Structural analysis — 12 marks',
  },
}

const comparisonLinks = [
  {
    title: "The Explorer's Daughter",
    author: 'Kari Herbert',
    href: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
    reason:
      'Both texts confront humans’ relationship with wild creatures. Compare Macdonald’s intimate single-bird focus with Herbert’s wider community-and-prey perspective.',
    themes: ['Nature', 'Animals', 'Ethics'],
  },
  {
    title: '127 Hours',
    author: 'Aron Ralston',
    href: '/igcse/edexcel-lang/anthology/127-hours',
    reason:
      'Both texts describe extreme psychological states under prolonged stress. Compare Macdonald’s grief with Ralston’s survival — both narrators changed by what they endure.',
    themes: ['Endurance', 'Psychology', 'Transformation'],
  },
  {
    title: 'A Passage to Africa',
    author: 'George Alagiah (1955–2023)',
    href: '/igcse/edexcel-lang/anthology/a-passage-to-africa',
    reason:
      'Both writers process emotionally heavy material with literary precision. Compare Macdonald’s grief-memoir with Alagiah’s witness-reportage — two careful prose styles handling pain.',
    themes: ['Grief', 'Witness', 'Prose style'],
  },
]

export default async function HIsForHawkPage() {
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
              H is for Hawk
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Helen Macdonald &middot; Memoir / nature writing
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
            Helen Macdonald&apos;s <em>H is for Hawk</em> (2014) is a literary memoir interweaving
            three strands: her grief after the sudden death of her father, her training of a goshawk
            named Mabel, and her reading of T. H. White&apos;s earlier book <em>The Goshawk</em>.
          </p>
          <p>
            The book won the Samuel Johnson Prize and the Costa Book of the Year, and is widely
            regarded as a landmark of contemporary British nature writing. The anthology extract
            concentrates on Macdonald&apos;s close-quarters relationship with the hawk and what that
            relationship reveals about her grief.
          </p>
          <p>Published by Jonathan Cape (Penguin Random House).</p>
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
          <strong className="text-foreground">Rights notice:</strong> &copy; Jonathan Cape (Penguin
          Random House) / Helen Macdonald 2014. Brief paraphrases on this page are for criticism,
          review and quotation under CDPA 1988 &sect;30. For full text, students should consult the
          licensed school edition (Pearson Edexcel IGCSE anthology, ISBN 978-1-446-93108-0).
        </p>
        <p className="mt-2">Aligned with Pearson Edexcel specification 4EA1</p>
      </footer>
    </div>
  )
}
