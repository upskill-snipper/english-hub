import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  BookOpen,
  GraduationCap,
  Landmark,
  Layers,
  Lightbulb,
  ListChecks,
  Quote,
  Target,
  Users,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { t } from '@/lib/i18n/t'
import type { ChapterGuide } from '@/lib/study-guides/chapter-guide'
import type { StudyGuide } from '@/lib/study-guides/types'
import { StoryVisuals } from './visuals/story-visuals'

/**
 * One chapter of a set text, rendered from a ChapterGuide (see
 * src/lib/study-guides/chapter-guide.ts for why the shape exists and what the
 * test checks). The chapter's key moments come first, from the text's whole
 * guide filtered to this part, then the chapter read closely.
 *
 * A server component with no client state: the self-check answers use
 * <details>, so they work without JavaScript and cost nothing to hydrate.
 */
export async function ChapterGuidePage({
  chapter,
  guide,
  total,
  basePath,
}: {
  chapter: ChapterGuide
  /** The text's whole guide, for the scene player's moments. */
  guide: StudyGuide
  /** How many chapters the text has, for previous and next. */
  total: number
  /** The text's route, e.g. /revision/texts/animal-farm. */
  basePath: string
}) {
  const [
    eyebrow,
    readInFull,
    allChapters,
    previous,
    next,
    navLabel,
    hSummary,
    hEvents,
    hClose,
    techniqueLabel,
    hCharacters,
    hThemes,
    hContext,
    hStructure,
    hVocabulary,
    hExam,
    howToAnswer,
    tipsLabel,
    hQuiz,
    showAnswer,
  ] = await Promise.all([
    t('chapter_guide.eyebrow'),
    t('chapter_guide.read_in_full'),
    t('chapter_guide.all_chapters'),
    t('chapter_guide.previous'),
    t('chapter_guide.next'),
    t('chapter_guide.nav_label'),
    t('chapter_guide.summary'),
    t('chapter_guide.key_events'),
    t('chapter_guide.close_reading'),
    t('chapter_guide.technique'),
    t('chapter_guide.characters'),
    t('chapter_guide.themes'),
    t('chapter_guide.context'),
    t('chapter_guide.structure'),
    t('chapter_guide.vocabulary'),
    t('chapter_guide.exam'),
    t('study_guide.exam.how_to_answer'),
    t('study_guide.exam.tips'),
    t('chapter_guide.quiz'),
    t('chapter_guide.show_answer'),
  ])

  const n = chapter.chapter
  const id = (k: string) => `chapter-${n}-${k}`
  const sections: { k: string; label: string }[] = [
    { k: 'summary', label: hSummary },
    { k: 'events', label: hEvents },
    { k: 'close', label: hClose },
    { k: 'characters', label: hCharacters },
    { k: 'themes', label: hThemes },
    { k: 'context', label: hContext },
    { k: 'structure', label: hStructure },
    { k: 'vocabulary', label: hVocabulary },
    { k: 'exam', label: hExam },
    { k: 'quiz', label: hQuiz },
  ]

  function Head({ k, icon: Icon, label }: { k: string; icon: typeof BookOpen; label: string }) {
    return (
      <div className="mb-5 flex items-center gap-3">
        <Icon className="size-5 text-primary" aria-hidden="true" />
        <h2 id={id(k)} className="scroll-mt-28 font-heading text-heading-lg text-foreground">
          {label}
        </h2>
      </div>
    )
  }

  const prevHref = n > 1 ? `${basePath}/chapter-${n - 1}` : null
  const nextHref = n < total ? `${basePath}/chapter-${n + 1}` : null

  return (
    <div
      className="mx-auto max-w-5xl space-y-12 px-4 py-10 sm:px-0"
      data-chapter-guide={`${chapter.slug}-${n}`}
    >
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <Link
          href={`${basePath}/chapters`}
          className="inline-flex items-center gap-1.5 text-body-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          {allChapters}
        </Link>
        <p className="mt-4 text-body-xs font-semibold uppercase tracking-wide text-primary">
          {guide.title} · {eyebrow}
        </p>
        <h1 className="mt-2 font-heading text-display-sm text-foreground">
          {chapter.part}: {chapter.title}
        </h1>
        <p className="mt-3 max-w-3xl text-body-lg leading-relaxed text-muted-foreground">
          {chapter.atAGlance}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={`${basePath}/read?section=section-${n}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-body-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            <BookOpen className="size-4" aria-hidden="true" />
            {readInFull}
          </Link>
        </div>
      </section>

      <nav aria-label={navLabel} className="rounded-xl border border-border/60 bg-card p-4">
        <p className="mb-2 text-body-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {navLabel}
        </p>
        <ul className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <li key={s.k}>
              <a
                href={`#${id(s.k)}`}
                className="inline-block rounded-full bg-muted px-3 py-1 text-body-xs font-medium text-foreground hover:bg-primary/10 hover:text-primary"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <StoryVisuals guide={guide} part={chapter.part} />

      <section aria-labelledby={id('summary')}>
        <Head k="summary" icon={BookOpen} label={hSummary} />
        <Card>
          <CardContent className="space-y-4 p-6 text-body-sm leading-relaxed text-muted-foreground sm:p-8">
            {chapter.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby={id('events')}>
        <Head k="events" icon={ListChecks} label={hEvents} />
        <ol className="space-y-3">
          {chapter.keyEvents.map((e, i) => (
            <li key={i} className="flex gap-3 rounded-xl border border-border/60 bg-card p-4">
              <span className="font-heading text-heading-sm text-primary">{i + 1}</span>
              <span className="text-body-sm leading-relaxed text-muted-foreground">{e}</span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby={id('close')}>
        <Head k="close" icon={Quote} label={hClose} />
        <ol className="space-y-4">
          {chapter.closeReading.map((q) => (
            <li key={q.quote} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-heading text-body-lg italic leading-snug text-foreground">
                &ldquo;{q.quote}&rdquo;
              </p>
              <p className="mt-2 text-body-xs font-semibold uppercase tracking-wide text-primary">
                {techniqueLabel}: {q.technique}
              </p>
              <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">
                {q.analysis}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby={id('characters')}>
        <Head k="characters" icon={Users} label={hCharacters} />
        <div className="grid gap-4 sm:grid-cols-2">
          {chapter.characters.map((c) => (
            <Card key={c.name}>
              <CardHeader>
                <CardTitle className="font-heading text-heading-sm">{c.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-body-sm leading-relaxed text-muted-foreground">
                {c.development}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby={id('themes')}>
        <Head k="themes" icon={Lightbulb} label={hThemes} />
        <Card>
          <CardContent className="space-y-6 p-6 text-body-sm leading-relaxed text-muted-foreground sm:p-8">
            {chapter.themes.map((th) => (
              <div key={th.theme}>
                <p className="mb-1 font-semibold text-foreground">{th.theme}</p>
                <p>{th.development}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby={id('context')}>
        <Head k="context" icon={Landmark} label={hContext} />
        <div className="grid gap-4 sm:grid-cols-2">
          {chapter.context.map((c) => (
            <Card key={c.heading}>
              <CardHeader>
                <CardTitle className="font-heading text-heading-sm">{c.heading}</CardTitle>
              </CardHeader>
              <CardContent className="text-body-sm leading-relaxed text-muted-foreground">
                {c.body}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby={id('structure')}>
        <Head k="structure" icon={Layers} label={hStructure} />
        <Card>
          <CardContent className="p-6 text-body-sm leading-relaxed text-muted-foreground sm:p-8">
            {chapter.structure}
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby={id('vocabulary')}>
        <Head k="vocabulary" icon={BookMarked} label={hVocabulary} />
        <dl className="grid gap-3 sm:grid-cols-2">
          {chapter.vocabulary.map((v) => (
            <div key={v.term} className="rounded-xl border border-border/60 bg-card p-4">
              <dt className="font-semibold text-foreground">{v.term}</dt>
              <dd className="mt-1 text-body-sm leading-relaxed text-muted-foreground">
                {v.meaning}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby={id('exam')}>
        <Head k="exam" icon={Target} label={hExam} />
        <Card>
          <CardContent className="space-y-5 p-6 text-body-sm leading-relaxed text-muted-foreground sm:p-8">
            <p className="font-heading text-body-lg leading-snug text-foreground">
              {chapter.examQuestion.question}
            </p>
            <div>
              <p className="mb-2 font-semibold text-foreground">{howToAnswer}</p>
              <ol className="list-decimal space-y-1.5 ps-5">
                {chapter.examQuestion.guidance.map((g, i) => (
                  <li key={i}>{g}</li>
                ))}
              </ol>
            </div>
            <div>
              <p className="mb-2 font-semibold text-foreground">{tipsLabel}</p>
              <ul className="list-disc space-y-1.5 ps-5">
                {chapter.examQuestion.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby={id('quiz')}>
        <Head k="quiz" icon={GraduationCap} label={hQuiz} />
        <ol className="space-y-4">
          {chapter.quiz.map((q, i) => (
            <li key={i} className="rounded-xl border border-border/60 bg-card p-5">
              <p className="font-semibold text-foreground">
                {i + 1}. {q.question}
              </p>
              <ol className="mt-3 space-y-1.5 text-body-sm text-muted-foreground" type="A">
                {q.options.map((o, j) => (
                  <li key={j} className="ms-5 list-[upper-alpha]">
                    {o}
                  </li>
                ))}
              </ol>
              <details className="mt-3 rounded-lg bg-muted/50 p-3 text-body-sm">
                <summary className="cursor-pointer font-medium text-primary">{showAnswer}</summary>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {String.fromCharCode(65 + q.answer)}. {q.options[q.answer]}
                  </span>{' '}
                  {q.explanation}
                </p>
              </details>
            </li>
          ))}
        </ol>
      </section>

      <nav className="flex flex-wrap justify-between gap-3 border-t border-border/60 pt-6">
        {prevHref ? (
          <Link
            href={prevHref}
            className="inline-flex items-center gap-2 text-body-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {previous}
          </Link>
        ) : (
          <span />
        )}
        {nextHref && (
          <Link
            href={nextHref}
            className="inline-flex items-center gap-2 text-body-sm font-medium text-primary hover:underline"
          >
            {next}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        )}
      </nav>
    </div>
  )
}
