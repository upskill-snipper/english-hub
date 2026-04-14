import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  Feather,
  ScrollText,
  Target,
  Quote,
  Sparkles,
  Info,
  Lightbulb,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ComprehensionQuestion {
  number: number
  marks: number
  question: string
  modelAnswer: string
  examinerNote: string
}

export interface LanguageTask {
  prompt: string
  marks: number
  focusWords: string[]
  modelAnswer: string
  examinerNote: string
}

export interface SummaryTask {
  prompt: string
  marks: number
  modelAnswer: string
  examinerNote: string
}

export interface VocabularyItem {
  term: string
  definition: string
}

export interface PassageStudyPageProps {
  /** e.g. "Jane Eyre — Opening Chapter" */
  title: string
  /** e.g. "Charlotte Brontë" */
  author: string
  /** e.g. "1847 (Smith, Elder & Co., London)" */
  publication: string
  /** Difficulty tag shown in hub card */
  difficulty: 'Foundation' | 'Intermediate' | 'Higher'
  /** Short introduction with author, text and context (1-3 paragraphs). */
  intro: string[]
  /** The passage text as an array of paragraphs. Public domain only. */
  passage: string[]
  /** 3-5 comprehension questions */
  comprehension: ComprehensionQuestion[]
  /** Language analysis question */
  languageTask: LanguageTask
  /** Summary task (Paper 1 Q3 style) */
  summaryTask: SummaryTask
  /** Key vocabulary notes */
  vocabulary: VocabularyItem[]
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const difficultyClass: Record<PassageStudyPageProps['difficulty'], string> = {
  Foundation: 'bg-primary/10 text-primary border-primary/20',
  Intermediate: 'bg-primary/10 text-primary border-primary/20',
  Higher: 'bg-primary/10 text-primary border-primary/20',
}

// ─── Component ───────────────────────────────────────────────────────────────

export function PassageStudyPage({
  title,
  author,
  publication,
  difficulty,
  intro,
  passage,
  comprehension,
  languageTask,
  summaryTask,
  vocabulary,
}: PassageStudyPageProps) {
  const totalComprehensionMarks = comprehension.reduce(
    (sum, q) => sum + q.marks,
    0,
  )

  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ──────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/reading" />}
        >
          <ArrowLeft className="size-3.5" />
          All reading passages
        </Button>
      </div>

      {/* ── Header ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              IGCSE Language &middot; Paper 1
            </Badge>
            <Badge variant="outline" className={difficultyClass[difficulty]}>
              {difficulty}
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {title}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            {author} &middot; {publication}
          </p>

          <div className="mt-5 max-w-3xl space-y-3 text-body-sm text-muted-foreground leading-relaxed">
            {intro.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Passage text ───────────────────────────────────────────── */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            The Passage
          </h2>
        </div>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-heading-sm font-heading leading-tight">
              {title}
            </CardTitle>
            <CardDescription className="text-body-xs">
              From {publication}. Public domain text.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-5 font-serif text-body-lg leading-relaxed text-foreground/90 sm:px-4 md:px-6">
              {passage.map((para, idx) => (
                <p key={idx}>
                  <span className="mr-1.5 text-body-xs text-muted-foreground tabular-nums">
                    {idx + 1}
                  </span>
                  {para}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── Comprehension questions ────────────────────────────────── */}
      <section>
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Target className="size-5 text-primary" />
            <h2 className="text-heading-lg font-heading text-foreground">
              Comprehension Questions
            </h2>
          </div>
          <Badge variant="secondary">
            Reading &middot; {totalComprehensionMarks} marks
          </Badge>
        </div>

        <div className="space-y-4">
          {comprehension.map((q) => (
            <Card key={q.number}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-heading-sm font-heading leading-tight">
                    Question {q.number}
                  </CardTitle>
                  <Badge variant="outline" className="shrink-0">
                    {q.marks} {q.marks === 1 ? 'mark' : 'marks'}
                  </Badge>
                </div>
                <CardDescription className="pt-1 text-body-sm text-foreground">
                  {q.question}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                  <div className="mb-2 flex items-center gap-2 text-body-xs font-semibold uppercase tracking-wider text-primary">
                    <Quote className="size-3.5" />
                    Model answer
                  </div>
                  <p className="text-body-sm text-foreground/90 leading-relaxed">
                    {q.modelAnswer}
                  </p>
                </div>
                <div className="rounded-xl border border-border/60 bg-primary/5 p-4">
                  <div className="mb-2 flex items-center gap-2 text-body-xs font-semibold uppercase tracking-wider text-primary">
                    <Info className="size-3.5" />
                    Examiner note
                  </div>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {q.examinerNote}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Language analysis ──────────────────────────────────────── */}
      <section>
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Feather className="size-5 text-primary" />
            <h2 className="text-heading-lg font-heading text-foreground">
              Language Analysis
            </h2>
          </div>
          <Badge variant="secondary">Language &middot; {languageTask.marks} marks</Badge>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="text-body-sm text-foreground">
              {languageTask.prompt}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {languageTask.focusWords.length > 0 && (
              <div>
                <p className="mb-2 text-body-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Words and phrases to consider
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {languageTask.focusWords.map((word) => (
                    <span
                      key={word}
                      className="inline-flex items-center rounded-md border border-border/60 bg-muted/40 px-2 py-0.5 font-serif text-body-xs italic text-foreground"
                    >
                      &ldquo;{word}&rdquo;
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-2 text-body-xs font-semibold uppercase tracking-wider text-primary">
                <Quote className="size-3.5" />
                Model answer
              </div>
              <p className="whitespace-pre-line text-body-sm text-foreground/90 leading-relaxed">
                {languageTask.modelAnswer}
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-primary/5 p-4">
              <div className="mb-2 flex items-center gap-2 text-body-xs font-semibold uppercase tracking-wider text-primary">
                <Info className="size-3.5" />
                Examiner note
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {languageTask.examinerNote}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── Summary task ───────────────────────────────────────────── */}
      <section>
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <ScrollText className="size-5 text-primary" />
            <h2 className="text-heading-lg font-heading text-foreground">
              Summary Task (Paper 1 Q3)
            </h2>
          </div>
          <Badge variant="secondary">
            Reading + Summary &middot; {summaryTask.marks} marks
          </Badge>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardDescription className="text-body-sm text-foreground">
              {summaryTask.prompt}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-2 text-body-xs font-semibold uppercase tracking-wider text-primary">
                <Quote className="size-3.5" />
                Model summary
              </div>
              <p className="whitespace-pre-line text-body-sm text-foreground/90 leading-relaxed">
                {summaryTask.modelAnswer}
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-primary/5 p-4">
              <div className="mb-2 flex items-center gap-2 text-body-xs font-semibold uppercase tracking-wider text-primary">
                <Info className="size-3.5" />
                Examiner note
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {summaryTask.examinerNote}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── Vocabulary ─────────────────────────────────────────────── */}
      <section>
        <div className="mb-4 flex items-center gap-3">
          <Lightbulb className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Key Vocabulary
          </h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <dl className="grid gap-4 sm:grid-cols-2">
              {vocabulary.map((item) => (
                <div
                  key={item.term}
                  className="rounded-xl border border-border/60 bg-muted/30 p-4"
                >
                  <dt className="font-serif text-body-sm font-semibold italic text-foreground">
                    {item.term}
                  </dt>
                  <dd className="mt-1 text-body-xs text-muted-foreground leading-relaxed">
                    {item.definition}
                  </dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      </section>

      {/* ── Footer CTA ─────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 text-center sm:p-8">
        <p className="text-body-sm text-muted-foreground">
          Ready for another passage?
        </p>
        <div className="mt-4">
          <Button
            variant="default"
            size="sm"
            render={<Link href="/igcse/cambridge/reading" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to all passages
          </Button>
        </div>
      </section>
    </div>
  )
}
