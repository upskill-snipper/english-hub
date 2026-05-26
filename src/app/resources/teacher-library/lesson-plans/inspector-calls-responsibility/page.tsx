import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'An Inspector Calls: Social Responsibility - Lesson Plan',
    description:
      'Full 60-minute lesson plan on responsibility in An Inspector Calls Act 1. Objectives, activities, differentiation, homework.',
  },
  title: 'An Inspector Calls: Social Responsibility - Lesson Plan',
  description:
    'Full 60-minute lesson plan on responsibility in An Inspector Calls Act 1. Objectives, activities, differentiation, homework.',
  alternates: {
    canonical:
      'https://theenglishhub.app/resources/teacher-library/lesson-plans/inspector-calls-responsibility',
  },
}

export default async function InspectorCallsLessonPlan() {
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
  ] = await tMany([
    'resources.tl.lp.bc.teacher_library',
    'resources.tl.lp.bc.lesson_plans',
    'resources.tl.lp.ic.bc.last',
    'resources.tl.lp.idx.for_teachers',
    'resources.tl.lp.detail.kind',
    'resources.tl.lp.ic.title',
    'resources.tl.lp.ic.intro',
    'resources.tl.lp.detail.meta.year',
    'resources.tl.lp.detail.meta.duration',
    'resources.tl.lp.detail.meta.board',
    'resources.tl.lp.detail.meta.subject',
    'resources.tl.lp.detail.subject.literature',
    'resources.tl.lp.detail.pdf.cta',
    'resources.tl.lp.detail.pdf.note',
  ])
  return (
    <main className="min-h-screen bg-background">
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

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-border bg-background p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {metaYear}
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">Year 11</div>
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
              <div className="mt-1 text-sm font-semibold text-foreground">AQA</div>
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

      <article className="mx-auto max-w-4xl px-6 py-12">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Learning Objectives</h2>
          <ul className="mt-4 space-y-2 text-foreground">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Explain how Priestley uses Mr Birling&apos;s speech to introduce the theme of social
              responsibility through dramatic irony.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Analyse how the Inspector&apos;s arrival shifts the tone and message of the play
              (AO2).
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Link the theme to the historical context of 1912 vs 1945 (AO3).
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Write a developed analytical paragraph using the What-How-Why structure.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Resources Needed</h2>
          <ul className="mt-4 space-y-2 text-foreground">
            <li>
              • Copies of Mr Birling&apos;s Act 1 speech (&quot;a man has to make his own way&quot;)
            </li>
            <li>• Sticky notes or mini-whiteboards</li>
            <li>• Projector with a slide of the 1912 context timeline</li>
            <li>• Printed What-How-Why grid worksheet</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Lesson Structure</h2>
          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">Starter (5 minutes)</h3>
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent ring-1 ring-inset ring-accent/20">
                  Discussion
                </span>
              </div>
              <p className="mt-3 text-foreground">
                Display the question: &quot;Are we responsible for the wellbeing of strangers?&quot;
                Students vote yes / no / it depends with sticky notes on the board. Use three quick
                responses as a springboard to introduce the theme.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">Main Activity (40 minutes)</h3>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20">
                  Close reading
                </span>
              </div>
              <div className="mt-3 space-y-4 text-foreground">
                <div>
                  <h4 className="font-semibold">Part 1: Context bridge (5 min)</h4>
                  <p className="mt-1 text-sm leading-relaxed">
                    Show the 1912 vs 1945 timeline. Briefly explain that Priestley is writing in
                    1945 but setting the play in 1912 - a deliberate choice.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Part 2: Modelled reading (10 min)</h4>
                  <p className="mt-1 text-sm leading-relaxed">
                    Read Mr Birling&apos;s speech aloud. Model how to spot the dramatic irony
                    (Titanic, war, Russian revolution). Discuss what Priestley wants a 1945 audience
                    to think of Birling.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Part 3: Guided analysis (10 min)</h4>
                  <p className="mt-1 text-sm leading-relaxed">
                    In pairs, students complete a What-How-Why grid on one quotation from the
                    speech. Collect answers on the board to build a shared model.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Part 4: Independent writing (15 min)</h4>
                  <p className="mt-1 text-sm leading-relaxed">
                    Students write a paragraph answering:{' '}
                    <em>How does Priestley present Mr Birling as irresponsible in Act 1?</em>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">Plenary (10 minutes)</h3>
                <span className="rounded-full bg-success-50 px-2.5 py-0.5 text-xs font-semibold text-success-700 ring-1 ring-inset ring-success-200">
                  Peer review
                </span>
              </div>
              <p className="mt-3 text-foreground">
                Students swap books with a partner. Using a checklist (quotation, method, effect,
                context), they identify one strength and one target. Volunteers share their target
                for next lesson&apos;s improvement task.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">Homework</h3>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-foreground ring-1 ring-inset ring-border">
                  Extension
                </span>
              </div>
              <p className="mt-3 text-foreground">
                Re-read Mr Birling&apos;s speech and learn three quotations. Write a 150-word
                paragraph explaining how a 1945 audience would react differently to a 1912 audience.
                Bring for quiz.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Differentiation Ideas</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Support</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>• Pre-annotated extract with key terms identified</li>
                <li>• Visual timeline of 1912 vs 1945 with images</li>
                <li>• Sentence starters for the paragraph task</li>
                <li>• Word bank of Tier 2 vocabulary for context</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Stretch</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>• Compare Birling to the Inspector directly</li>
                <li>• Explore Priestley&apos;s socialist politics (AO3)</li>
                <li>• Introduce the term &quot;dramatic monologue&quot;</li>
                <li>• Add a conceptualised thesis to the opening line</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Use in Classroom - Tips</h2>
          <ul className="mt-4 space-y-2 text-foreground">
            <li>
              <strong>Dramatic irony:</strong> Don&apos;t assume students know the term. Define it
              on the board and return to it twice in the lesson.
            </li>
            <li>
              <strong>Context first:</strong> Students need the 1912 vs 1945 difference clear before
              they can interpret the speech. Don&apos;t skip the timeline.
            </li>
            <li>
              <strong>Read it well:</strong> Mr Birling&apos;s pomposity is half the effect.
              Don&apos;t read the speech flatly - ham it up.
            </li>
          </ul>
        </section>

        <p className="text-xs text-muted-foreground mt-8 border-t border-border/60 pt-4">
          An Inspector Calls &copy; The Estate of J.B. Priestley. Short quotations reproduced under
          the fair dealing provision of the Copyright, Designs and Patents Act 1988 for the purpose
          of criticism and review.
        </p>
      </article>
    </main>
  )
}
