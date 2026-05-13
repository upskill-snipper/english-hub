import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'Macbeth: Ambition & the Supernatural — Lesson Plan',
  description:
    'Full 60-minute GCSE English Literature lesson plan exploring ambition in Macbeth. Includes objectives, starter, main task, plenary, and differentiation.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/teacher-library/lesson-plans/macbeth-ambition',
  },
}

export default async function MacbethAmbitionLessonPlan() {
  const [
    bcTeacherLibrary,
    bcLessonPlans,
    bcLast,
    forTeachers,
    kindLabel,
    title,
    intro,
    metaYear,
    metaDuration,
    metaBoard,
    metaSubject,
    subjectLiterature,
    pdfCta,
    pdfNote,
    objectivesH2,
    objectivesIntro,
  ] = await tMany([
    'resources.tl.lp.bc.teacher_library',
    'resources.tl.lp.bc.lesson_plans',
    'resources.tl.lp.macbeth.bc.last',
    'resources.tl.lp.idx.for_teachers',
    'resources.tl.lp.detail.kind',
    'resources.tl.lp.macbeth.title',
    'resources.tl.lp.macbeth.intro',
    'resources.tl.lp.detail.meta.year',
    'resources.tl.lp.detail.meta.duration',
    'resources.tl.lp.detail.meta.board',
    'resources.tl.lp.detail.meta.subject',
    'resources.tl.lp.detail.subject.literature',
    'resources.tl.lp.detail.pdf.cta',
    'resources.tl.lp.detail.pdf.note',
    'resources.tl.lp.detail.h2.objectives',
    'resources.tl.lp.detail.objectives.intro',
  ])

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/resources/teacher-library" className="hover:text-primary">
              {bcTeacherLibrary}
            </Link>
            <span>/</span>
            <Link href="/resources/teacher-library/lesson-plans" className="hover:text-primary">
              {bcLessonPlans}
            </Link>
            <span>/</span>
            <span className="text-foreground">{bcLast}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary ring-1 ring-inset ring-primary/20">
              {forTeachers}
            </span>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20">
              {kindLabel}
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">{title}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{intro}</p>

          {/* Metadata grid */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {metaYear}
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">Year 10</div>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {metaDuration}
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">60 minutes</div>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {metaBoard}
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">AQA / Edexcel</div>
            </div>
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {metaSubject}
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">{subjectLiterature}</div>
            </div>
          </div>

          {/* PDF export pending: needs server-side PDF generation route */}
          <div className="mt-6">
            <Button variant="default" size="lg">
              {pdfCta}
            </Button>
            <p className="mt-2 text-xs text-muted-foreground">{pdfNote}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 py-12">
        {/* Objectives */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">{objectivesH2}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{objectivesIntro}</p>
          <ul className="mt-4 space-y-2 text-foreground">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                Identify how ambition is presented through Macbeth&apos;s language in Act 1 Scene 7.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                Explain how the witches&apos; prophecies act as a catalyst for Macbeth&apos;s
                ambition.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>Analyse at least one extended quotation using subject terminology (AO2).</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                Link the theme of ambition to the Jacobean context of kingship and the Divine Right
                (AO3).
              </span>
            </li>
          </ul>
        </section>

        {/* Resources needed */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Resources Needed</h2>
          <ul className="mt-4 space-y-2 text-foreground">
            <li>• Copies of Act 1 Scene 3 (witches) and Act 1 Scene 7 soliloquy</li>
            <li>• Highlighters (three colours)</li>
            <li>• Mini-whiteboards for plenary quiz</li>
            <li>• Printed PEE scaffold worksheet (optional)</li>
            <li>• Image of a crown and a dagger for the starter slide</li>
          </ul>
        </section>

        {/* Lesson structure */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Lesson Structure</h2>

          <div className="mt-6 space-y-6">
            {/* Starter */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">Starter (5 minutes)</h3>
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent ring-1 ring-inset ring-accent/20">
                  Hook
                </span>
              </div>
              <p className="mt-3 text-foreground">
                Project two images on the board: a crown and a dagger. Ask students: &quot;How far
                would you go to get what you want?&quot; Students discuss in pairs (2 minutes) then
                share with the class. Introduce the word ambition on the board and build a quick
                shared definition.
              </p>
            </div>

            {/* Main */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">Main Activity (40 minutes)</h3>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20">
                  I–We–You
                </span>
              </div>
              <div className="mt-3 space-y-4 text-foreground">
                <div>
                  <h4 className="font-semibold">Part 1: Teacher modelling (10 min)</h4>
                  <p className="mt-1 text-sm leading-relaxed">
                    Read the Act 1 Scene 3 witches&apos; prophecy aloud. Model annotating the
                    repetition of &quot;hail&quot; and the paradoxical language (&quot;fair is
                    foul&quot;). Show how this plants the seed of ambition in Macbeth.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Part 2: Guided practice (15 min)</h4>
                  <p className="mt-1 text-sm leading-relaxed">
                    Students read Macbeth&apos;s Act 1 Scene 7 soliloquy in pairs. Using three
                    highlighter colours, they mark: (1) words about ambition, (2) words about fear
                    or doubt, (3) religious or moral language. Discuss what the colours reveal about
                    Macbeth&apos;s internal conflict.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Part 3: Independent writing (15 min)</h4>
                  <p className="mt-1 text-sm leading-relaxed">
                    Students write a PEE paragraph answering:{' '}
                    <em>How does Shakespeare present Macbeth&apos;s ambition in Act 1 Scene 7?</em>{' '}
                    Use a scaffold on the board for support.
                  </p>
                </div>
              </div>
            </div>

            {/* Plenary */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">Plenary (10 minutes)</h3>
                <span className="rounded-full bg-success-50 px-2.5 py-0.5 text-xs font-semibold text-success-700 ring-1 ring-inset ring-success-200">
                  Retrieval
                </span>
              </div>
              <p className="mt-3 text-foreground">
                Mini-whiteboard quiz. Five quick-fire questions: (1) What is a soliloquy? (2) Quote
                a line showing Macbeth&apos;s ambition. (3) What is the Jacobean context for
                kingship? (4) What method does Shakespeare use in &quot;vaulting ambition&quot;? (5)
                Why is ambition dangerous in this play? Use peer assessment to check understanding.
              </p>
            </div>

            {/* Homework */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">Homework</h3>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-foreground ring-1 ring-inset ring-border">
                  Extension
                </span>
              </div>
              <p className="mt-3 text-foreground">
                Learn three quotations from the Act 1 Scene 7 soliloquy by heart. Write a short
                paragraph (100–150 words) explaining which quotation most powerfully shows
                Macbeth&apos;s ambition and why. Bring for retrieval quiz next lesson.
              </p>
            </div>
          </div>
        </section>

        {/* Differentiation */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Differentiation Ideas</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Support</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>• Provide a glossary of key Shakespearean terms</li>
                <li>• Pre-highlighted soliloquy for weaker readers</li>
                <li>• Sentence starters for the PEE paragraph</li>
                <li>• Partner stronger and weaker readers for Part 2</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Stretch</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>• Add a third paragraph comparing Lady Macbeth&apos;s ambition</li>
                <li>• Link to another Shakespeare protagonist (e.g. Iago)</li>
                <li>
                  • Challenge: use &quot;hamartia&quot; and &quot;tragic flaw&quot; in writing
                </li>
                <li>• Explore AO3 in more depth: Divine Right &amp; Gunpowder Plot</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Classroom tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Use in Classroom — Tips</h2>
          <ul className="mt-4 space-y-2 text-foreground">
            <li>
              <strong>Pace check:</strong> The modelling stage is the easiest to overrun. Keep it
              tight and leave enough time for independent writing.
            </li>
            <li>
              <strong>Talk partners:</strong> Prepare visible talk-partner pairings before the
              lesson so Part 1 runs smoothly.
            </li>
            <li>
              <strong>Live feedback:</strong> Circulate during Part 3 with pre-printed feedback
              stamps rather than marking later.
            </li>
            <li>
              <strong>Assessment for learning:</strong> The plenary mini-whiteboard quiz is your
              window into misconceptions. Capture responses to plan the next lesson.
            </li>
          </ul>
        </section>

        <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
          Macbeth by William Shakespeare is in the public domain. Quotations are reproduced freely.
        </p>
      </article>
    </main>
  )
}
