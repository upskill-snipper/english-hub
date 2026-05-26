import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'Ozymandias vs My Last Duchess - Comparison Lesson Plan',
    description:
      'Full 60-minute comparison lesson for the Power & Conflict anthology. Compare Ozymandias and My Last Duchess as presentations of power.',
  },
  title: 'Ozymandias vs My Last Duchess - Comparison Lesson Plan',
  description:
    'Full 60-minute comparison lesson for the Power & Conflict anthology. Compare Ozymandias and My Last Duchess as presentations of power.',
  alternates: {
    canonical:
      'https://theenglishhub.app/resources/teacher-library/lesson-plans/power-conflict-comparison',
  },
}

export default async function PowerConflictLessonPlan() {
  const [
    bcTeacherLibrary,
    bcLessonPlans,
    bcLast,
    forTeachers,
    kindComparison,
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
    'resources.tl.lp.pcc.bc.last',
    'resources.tl.lp.idx.for_teachers',
    'resources.tl.lp.detail.kind.comparison',
    'resources.tl.lp.pcc.title',
    'resources.tl.lp.pcc.intro',
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
              {kindComparison}
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
              Identify how Shelley and Browning present the corrupting effects of power.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Analyse at least one key method from each poem (form, structure, language).
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Draft a comparative opening paragraph using a comparative connective and a thesis
              statement.
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              Link each poem to its historical and social context.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Resources Needed</h2>
          <ul className="mt-4 space-y-2 text-foreground">
            <li>• Printed copies of both poems, side-by-side</li>
            <li>• Comparison matrix worksheet (blank)</li>
            <li>• Knowledge organiser excerpt (Shelley &amp; Browning)</li>
            <li>• Comparative connective bank (on board or printed)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Lesson Structure</h2>
          <div className="mt-6 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">Starter (5 minutes)</h3>
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent ring-1 ring-inset ring-accent/20">
                  Recall
                </span>
              </div>
              <p className="mt-3 text-foreground">
                Quickfire: students write down three things they remember about each poem on a
                mini-whiteboard. Share with a partner and merge lists. Teacher scans the room for
                confident and less-confident pairs.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">Main Activity (40 minutes)</h3>
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20">
                  Compare
                </span>
              </div>
              <div className="mt-3 space-y-4 text-foreground">
                <div>
                  <h4 className="font-semibold">Part 1: Build the matrix (15 min)</h4>
                  <p className="mt-1 text-sm leading-relaxed">
                    Students fill in a comparison matrix in pairs. Columns: theme of power, speaker,
                    tone, form, key quotation, context. Collate answers as a class on the board.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Part 2: Finding the link (10 min)</h4>
                  <p className="mt-1 text-sm leading-relaxed">
                    Discussion: What do the two speakers have in common? How do they differ? Draw
                    out the key comparative point - both men use language to dominate and possess,
                    but both are ultimately exposed.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Part 3: Drafting the opening paragraph (15 min)</h4>
                  <p className="mt-1 text-sm leading-relaxed">
                    Students draft a comparative opening paragraph using a scaffold: thesis →
                    Shelley&apos;s approach → comparative connective → Browning&apos;s approach →
                    conceptual conclusion.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">Plenary (10 minutes)</h3>
                <span className="rounded-full bg-success-50 px-2.5 py-0.5 text-xs font-semibold text-success-700 ring-1 ring-inset ring-success-200">
                  Showcase
                </span>
              </div>
              <p className="mt-3 text-foreground">
                Three volunteers read their opening paragraphs aloud. The class uses a thumbs scale
                to rate thesis, comparison, and terminology. Teacher gives live feedback on each.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">Homework</h3>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-foreground ring-1 ring-inset ring-border">
                  Essay build
                </span>
              </div>
              <p className="mt-3 text-foreground">
                Write the second comparative paragraph of the essay, on form and structure. Use the
                matrix from today&apos;s lesson as your plan. Bring the draft for peer marking next
                lesson.
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
                <li>• Pre-populated half of the comparison matrix</li>
                <li>• Sentence frames for each stage of the paragraph</li>
                <li>• Paired with a stronger writer for Part 3</li>
                <li>• Quote bank for each poem on the desk</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">Stretch</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li>• Introduce form terminology: sonnet vs dramatic monologue</li>
                <li>• Add a conceptual third point of comparison</li>
                <li>• Use at least three comparative connectives</li>
                <li>• Compare Romanticism with the Victorian Era</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground">Use in Classroom - Tips</h2>
          <ul className="mt-4 space-y-2 text-foreground">
            <li>
              <strong>Don&apos;t skip the matrix:</strong> It&apos;s tempting to jump straight to
              writing, but the matrix is what makes the comparison explicit.
            </li>
            <li>
              <strong>Thesis first:</strong> A conceptual thesis unlocks higher marks. Show three
              examples on the board before they draft.
            </li>
            <li>
              <strong>Comparative connectives:</strong> Insist on them. &quot;Similarly&quot;,
              &quot;in contrast&quot;, &quot;whereas&quot; - print a bank and leave it visible
              throughout.
            </li>
          </ul>
        </section>
      </article>
    </main>
  )
}
