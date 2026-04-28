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
  AlertTriangle,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title:
    'Explorers or Boys Messing About? — Steven Morris — IGCSE Language A Anthology — The English Hub',
  description:
    'Study guide for "Explorers or boys messing about?" by Steven Morris (Guardian, 2003 — adapted in the Edexcel IGCSE Anthology). Language analysis, structural analysis, themes and exam practice for Paper 1 Section A.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about',
  },
}

const themes = [
  {
    label: 'Risk and recklessness',
    detail:
      'Morris foregrounds the question of whether the explorers’ behaviour was bold adventure or irresponsible danger to themselves and rescuers.',
  },
  {
    label: 'Hubris and judgement',
    detail:
      'The article weighs the men’s confidence against the harsh reality of an Antarctic crash, inviting readers to evaluate their decision-making.',
  },
  {
    label: 'Media framing',
    detail:
      'A newspaper article that consciously shapes readers’ views through loaded vocabulary, expert quotation and rhetorical questioning.',
  },
  {
    label: 'Exploration vs. recreation',
    detail:
      'Morris draws a contested line between serious exploration and amateur thrill-seeking — the title itself poses the dilemma.',
  },
  {
    label: 'Cost and responsibility',
    detail:
      'The piece raises the financial and human cost of rescue when adventurers misjudge their preparedness.',
  },
]

const structuralAnalysis = {
  opening:
    'The headline poses a binary question — “Explorers or boys messing about?” — that immediately frames the article as a judgement rather than a neutral report. The reader is invited to take a side from the first line.',
  development:
    'Morris alternates the bare facts of the incident (the crash, the Iridium phone call, the rescue) with critical voices from polar experts, building an evidence-based case that leans toward the “messing about” verdict.',
  climax:
    'The strongest critical quotations from established explorers cluster in the middle of the article, where the rhetorical weight of expert disapproval is most concentrated.',
  resolution:
    'The piece closes without resolving the question outright, leaving readers to weigh the evidence — but the cumulative framing has already nudged them toward scepticism of the men’s judgement.',
  perspective:
    'Third-person reportage with an embedded editorial slant. Morris quotes critics far more than he quotes the men themselves, allowing voices of authority to dominate the moral verdict.',
}

const writersPurpose = {
  achieve:
    'Morris reports the rescue while simultaneously interrogating its meaning — was this a heroic mishap or a foreseeable consequence of inadequate preparation?',
  readerFeel:
    'He wants the reader to feel uneasy about the celebration of risk-taking, and to consider the cost (human and financial) of rescue operations triggered by amateur adventuring.',
  message:
    'The implicit argument is that being privileged enough to attempt a polar adventure does not absolve one of the responsibility to be properly prepared — and that media celebrations of such mishaps deserve scrutiny.',
}

const examPractice = {
  q1: {
    question: 'List four things you learn about the explorers’ expedition from the article.',
    type: 'Retrieval — 4 marks',
  },
  q2: {
    question: 'How does Morris use language to convey his attitude towards the explorers’ conduct?',
    type: 'Language analysis — 12 marks',
  },
  q3: {
    question:
      'How does Morris structure the article to lead the reader towards a particular judgement?',
    type: 'Structural analysis — 12 marks',
  },
}

const comparisonLinks = [
  {
    title: '127 Hours: Between a Rock and a Hard Place',
    author: 'Aron Ralston',
    href: '/igcse/edexcel-lang/anthology/127-hours',
    reason:
      'Both texts concern adventurers in serious danger. Compare Morris’s critical outsider report with Ralston’s first-person survival narrative — judgement from outside vs. determination from within.',
    themes: ['Adventure', 'Risk', 'Different perspectives'],
  },
  {
    title: 'Beyond the Sky and the Earth',
    author: 'Jamie Zeppa',
    href: '/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth',
    reason:
      'Both texts deal with travel into challenging environments. Compare Morris’s critical reporting with Zeppa’s reflective travel memoir — the same idea of “going somewhere remote” treated very differently.',
    themes: ['Travel', 'Risk', 'Genre contrast'],
  },
  {
    title: 'A Game of Polo with a Headless Goat',
    author: 'Emma Levine',
    href: '/igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat',
    reason:
      'Both texts are journalistic in register but adopt different stances toward danger and spectacle. Compare Morris’s sceptical framing with Levine’s curious observational mode.',
    themes: ['Journalism', 'Spectacle', 'Authorial stance'],
  },
]

export default async function ExplorersOrBoysMessingAboutPage() {
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
              Explorers or Boys Messing About?
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Steven Morris &middot; Newspaper article (<em>The Guardian</em>, 24 January 2003 —
              adapted for the anthology)
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

      <section
        aria-label="Anthology version warning"
        className="rounded-xl border border-amber-500/40 bg-amber-500/[0.08] p-5 text-body-sm text-card-foreground"
      >
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-600 dark:text-clay-600" />
          <div>
            <p className="mb-2">
              <strong className="text-foreground">Anthology version warning:</strong> This text is
              the <strong className="text-foreground">adapted</strong> version printed in the
              Edexcel IGCSE Anthology Issue 2 (ISBN 978-1-446-93108-0). The freely-available{' '}
              <em>Guardian</em> original differs in cuts, re-orderings, and minor word choice.
              Always use the anthology version when answering Edexcel questions — examiners mark
              against the anthology text, not online reproductions.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-amber-50/30 via-card to-card p-5 sm:p-6 dark:from-amber-950/10">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="size-4.5 text-amber-600 dark:text-clay-600" />
          <h2 className="text-heading-sm font-heading text-foreground font-serif">Context</h2>
        </div>
        <div className="space-y-3 text-body-sm text-muted-foreground leading-relaxed">
          <p>
            In January 2003, two British adventurers attempted a journey across Antarctica —
            &ldquo;the Frozen Continent&rdquo; — and were forced to make an emergency call from an
            Iridium satellite phone after their expedition ran into serious trouble. A rescue
            operation followed.
          </p>
          <p>
            Steven Morris&apos;s article, originally published in <em>The Guardian</em> on 24
            January 2003, reported the incident but framed it through a pointed question: were these
            men explorers, or were they amateurs whose recklessness placed others at risk? The
            headline itself poses the dilemma the reader is invited to weigh.
          </p>
          <p>
            The text is a useful study of{' '}
            <strong className="text-foreground">how a newspaper article shapes opinion</strong>{' '}
            while appearing to report neutral facts — through choice of quotations, ordering of
            evidence, and loaded vocabulary.
          </p>
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
          <strong className="text-foreground">Rights notice:</strong> &copy; Guardian News &amp;
          Media Ltd 2003 / Steven Morris. The version studied here is the adapted text printed in
          the Pearson Edexcel IGCSE Anthology Issue 2 (ISBN 978-1-446-93108-0). Brief paraphrases on
          this page are for criticism, review and quotation under CDPA 1988 &sect;30. Students
          should consult the licensed school edition for the full anthology text.
        </p>
        <p className="mt-2">Aligned with Pearson Edexcel specification 4EA1</p>
      </footer>
    </div>
  )
}
