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
  title:
    'Beyond the Sky and the Earth — Jamie Zeppa — IGCSE Language A Anthology — The English Hub',
  description:
    'Study guide for "Beyond the Sky and the Earth: A Journey into Bhutan" by Jamie Zeppa. Language analysis, structural analysis, themes and exam practice for Edexcel IGCSE English Language A Paper 1 Section A.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
  },
}

const themes = [
  {
    label: 'Culture shock',
    detail:
      'Zeppa arrives in Bhutan as a stranger and the text registers the small disorientations of language, food, climate and custom that mark her early days.',
  },
  {
    label: 'Isolation and adjustment',
    detail:
      'Far from home, Zeppa must build a sense of place and routine from scratch. The text traces the slow shift from outsider to inhabitant.',
  },
  {
    label: 'Beauty and landscape',
    detail:
      'Bhutan’s mountains are not ornament — they shape Zeppa’s mood, her teaching, her sense of time. Landscape is presented as a force, not a backdrop.',
  },
  {
    label: 'Transformation',
    detail:
      'The journey is internal as much as geographic. Zeppa is changed by the place, and the text shows the change happening rather than reporting it.',
  },
  {
    label: 'Reflection and memoir',
    detail:
      'Zeppa writes from the perspective of someone looking back — the older voice processing the younger self’s experience.',
  },
]

const structuralAnalysis = {
  opening:
    'Zeppa opens with arrival — the disorientation, the unfamiliar sights, the gap between expectation and reality. The reader arrives with her.',
  development:
    'The text develops through accumulating detail: small encounters, lessons in language, growing relationships with students and colleagues. The shift from outside to inside happens gradually.',
  climax:
    'There is no single dramatic climax; instead, the text reaches a quiet emotional peak when Zeppa realises she has begun to feel at home.',
  resolution:
    'The resolution is reflective rather than tidy — Zeppa acknowledges that she has been changed but does not pretend to have understood Bhutan completely.',
  perspective:
    'First-person memoir, written with retrospective awareness. The older Zeppa understands what the younger Zeppa was experiencing.',
}

const writersPurpose = {
  achieve:
    'Zeppa wants to convey the slow, internal experience of culture shock and adjustment without exoticising the place or romanticising her own role.',
  readerFeel:
    'She wants the reader to feel the texture of unfamiliarity becoming familiarity — the gradual softening of disorientation into belonging.',
  message:
    'A place changes the person who lives in it. Genuine encounter requires patience, humility and willingness to be changed.',
}

const examPractice = {
  q1: {
    question: 'List four things you learn about Zeppa’s early experience in Bhutan.',
    type: 'Retrieval — 4 marks',
  },
  q2: {
    question:
      'How does Zeppa use language to convey her feelings of disorientation and adjustment?',
    type: 'Language analysis — 12 marks',
  },
  q3: {
    question: 'How does Zeppa structure the text to chart her changing relationship with Bhutan?',
    type: 'Structural analysis — 12 marks',
  },
}

const comparisonLinks = [
  {
    title: "The Explorer's Daughter",
    author: 'Kari Herbert',
    href: '/igcse/edexcel-lang/anthology/the-explorers-daughter',
    reason:
      'Both writers describe long-term relationships with remote places. Compare Herbert’s childhood-rooted connection with Zeppa’s adult-arrival adjustment.',
    themes: ['Place', 'Belonging', 'Memoir'],
  },
  {
    title: 'A Game of Polo with a Headless Goat',
    author: 'Emma Levine',
    href: '/igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat',
    reason:
      'Both texts feature outsiders observing unfamiliar cultures. Compare the day-trip spectator (Levine) with the long-stay resident (Zeppa).',
    themes: ['Travel', 'Culture', 'Outsider perspective'],
  },
  {
    title: 'Explorers or Boys Messing About?',
    author: 'Steven Morris',
    href: '/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about',
    reason:
      'Both pieces concern travel into challenging environments. Compare Zeppa’s patient memoir with Morris’s sceptical journalism.',
    themes: ['Travel', 'Genre contrast', 'Tone'],
  },
]

export default async function BeyondTheSkyAndTheEarthPage() {
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
              Beyond the Sky and the Earth: A Journey into Bhutan
            </h1>
            <p className="text-body-sm text-muted-foreground">Jamie Zeppa &middot; Travel memoir</p>
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
            Jamie Zeppa, a Canadian writer, travelled to Bhutan in the late 1980s to teach English
            at a remote school as part of a Canadian aid programme.{' '}
            <em>Beyond the Sky and the Earth</em> is her memoir of the experience — arrival,
            adjustment, and eventual deep connection to the country and its people.
          </p>
          <p>
            The text studied here is an extract from the early sections, when Zeppa is still
            navigating culture shock and the difficulty of being far from home in a place whose
            customs she does not yet understand.
          </p>
          <p>Published by Penguin Canada.</p>
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
          <strong className="text-foreground">Rights notice:</strong> &copy; Penguin Canada / Jamie
          Zeppa. Brief paraphrases on this page are for criticism, review and quotation under CDPA
          1988 &sect;30. For full text, students should consult the licensed school edition (Pearson
          Edexcel IGCSE anthology, ISBN 978-1-446-93108-0).
        </p>
        <p className="mt-2">Aligned with Pearson Edexcel specification 4EA1</p>
      </footer>
    </div>
  )
}
