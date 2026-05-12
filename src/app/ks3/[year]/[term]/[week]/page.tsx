import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { KS3, getYear, getTerm, findSkill, LESSON_FOCUS_LABEL } from '@/lib/ks3/curriculum'
import type { YearNumber } from '@/lib/ks3/curriculum'
import { t } from '@/lib/i18n/t'

type Params = { year: string; term: string; week: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return KS3.years.flatMap((y) =>
    y.terms.flatMap((t) =>
      t.halfTerms.flatMap((h) =>
        h.weeks.map((w) => ({
          year: `year-${y.number}`,
          term: `term-${t.number}`,
          week: `week-${w.number}`,
        })),
      ),
    ),
  )
}

function parseParams(p: Params): { year: YearNumber; term: 1 | 2 | 3; week: number } | null {
  const yMatch = p.year.match(/^year-(7|8|9)$/)
  const tMatch = p.term.match(/^term-(1|2|3)$/)
  const wMatch = p.week.match(/^week-(\d{1,2})$/)
  if (!yMatch || !tMatch || !wMatch) return null
  return {
    year: Number(yMatch[1]) as YearNumber,
    term: Number(tMatch[1]) as 1 | 2 | 3,
    week: Number(wMatch[1]),
  }
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const parsed = parseParams(await params)
  if (!parsed) return { title: 'KS3 — Week not found' }
  return {
    title: `Year ${parsed.year} · Term ${parsed.term} · Week ${parsed.week}`,
    description: `Five-lesson weekly plan for Year ${parsed.year}, Term ${parsed.term}, Week ${parsed.week}.`,
    alternates: {
      canonical: `https://theenglishhub.app/ks3/year-${parsed.year}/term-${parsed.term}/week-${parsed.week}`,
    },
  }
}

export default async function WeekPage({ params }: { params: Promise<Params> }) {
  const parsed = parseParams(await params)
  if (!parsed) notFound()
  const { year: yearNum, term: termNum, week: weekNum } = parsed
  const y = getYear(KS3, yearNum)
  const term = getTerm(KS3, yearNum, termNum)
  if (!y || !term) notFound()
  // Find the week across the term's half-terms.
  const w = term.halfTerms.flatMap((h) => h.weeks).find((wk) => wk.number === weekNum)
  if (!w) notFound()

  // Pre-resolve every translation in a single batch so we don't have to
  // await inside the render tree (await isn't allowed inside the
  // .map() callbacks that render each lesson). Also dodges the variable
  // shadowing with `t` (the Term value above used to be called `t`).
  const tr = await Promise.all([
    t('ks3.pages'), // 0
    t('ks3.key_vocabulary'), // 1
    t('ks3.homework'), // 2
    t('ks3.five_lessons'), // 3
    t('ks3.what_students_do'), // 4
    t('ks3.task'), // 5
    t('ks3.success_criteria'), // 6
    t('ks3.ai_marking_panel.title'), // 7
    t('ks3.ai_marking_panel.body'), // 8
    t('ks3.ai_marking_panel.cta'), // 9
  ])
  const isAr = tr[0] === 'الصفحات'
  const weekLabel = isAr ? `الأسبوع ${weekNum}` : `Week ${weekNum}`

  return (
    <>
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/ks3" className="hover:text-foreground">
          KS3
        </Link>
        <span> · </span>
        <Link href={`/ks3/year-${yearNum}`} className="hover:text-foreground">
          {y.name.en}
        </Link>
        <span> · </span>
        <Link href={`/ks3/year-${yearNum}/term-${termNum}`} className="hover:text-foreground">
          {term.label.en}
        </Link>
        <span> · </span>
        <span>Week {weekNum}</span>
      </p>
      <h1>{weekLabel}</h1>
      {w.pages ? (
        <p className="text-muted-foreground">
          <strong>{tr[0]}:</strong> {w.pages}
        </p>
      ) : null}
      {w.contextNote ? <p className="lead">{w.contextNote.en}</p> : null}

      <h2>{tr[1]}</h2>
      <div className="not-prose flex flex-wrap gap-2 my-4">
        {w.keyVocabulary.map((v, i) => (
          <span
            key={i}
            className="rounded-full border border-border/60 bg-muted px-3 py-1 text-xs text-muted-foreground"
          >
            {v.en}
          </span>
        ))}
      </div>

      {w.homework ? (
        <div className="not-prose rounded-xl border border-amber-300/40 bg-amber-50/40 dark:bg-amber-500/[0.04] p-4 my-6 text-sm">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-amber-700 dark:text-amber-300 mb-1">
            {tr[2]}
          </p>
          <p className="text-muted-foreground">{w.homework.en}</p>
        </div>
      ) : null}

      <h2>{tr[3]}</h2>

      {w.lessons.map((lesson, idx) => (
        <section
          key={idx}
          className="not-prose my-6 rounded-2xl border border-border/60 bg-card p-5 sm:p-6"
        >
          <header className="flex items-start justify-between gap-4 mb-4 border-b border-border/40 pb-3">
            <div>
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                Lesson {idx + 1}
              </p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                {LESSON_FOCUS_LABEL[lesson.focus].en}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5 max-w-[60%] justify-end">
              {lesson.skillCodes.map((code) => {
                const skill = findSkill(KS3, code)
                return (
                  <span
                    key={code}
                    title={skill?.descriptor.en ?? code}
                    className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-mono text-primary"
                  >
                    {code}
                  </span>
                )
              })}
            </div>
          </header>

          <div className="space-y-4 text-sm">
            <div>
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                {tr[4]}
              </p>
              <p className="text-foreground/90 leading-relaxed">{lesson.whatStudentsDo.en}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                {tr[5]}
              </p>
              <p className="text-foreground/90 leading-relaxed">{lesson.task.en}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-1">
                {tr[6]}
              </p>
              <p className="text-foreground/90 leading-relaxed">{lesson.successCriteria.en}</p>
            </div>
          </div>

          {lesson.focus === 'independent-outcome' || lesson.focus === 'assessment' ? (
            <div className="mt-5 rounded-lg border border-primary/30 bg-primary/[0.04] p-4">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-2">
                {tr[7]}
              </p>
              <p className="text-sm text-muted-foreground mb-3">{tr[8]}</p>
              {/* Deep-integration: pre-load the task as the prompt + the
                  set text + the year-band as context so the AI marker
                  scores against the right rubric. Query params are
                  consumed by the practice page's existing state. */}
              <Link
                href={{
                  pathname: '/practice',
                  query: {
                    ks3: '1',
                    year: String(yearNum),
                    term: String(termNum),
                    week: String(weekNum),
                    focus: lesson.focus,
                    task: lesson.task.en,
                    successCriteria: lesson.successCriteria.en,
                    skillCodes: lesson.skillCodes.join(','),
                  },
                }}
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                {tr[9]}
              </Link>
            </div>
          ) : null}
        </section>
      ))}

      <h2>{isAr ? 'تنقّل بين الأسابيع' : 'Week navigation'}</h2>
      <div className="not-prose flex flex-wrap gap-2 my-4">
        {term.halfTerms
          .flatMap((h) => h.weeks)
          .map((wk) => (
            <Link
              key={wk.number}
              href={`/ks3/year-${yearNum}/term-${termNum}/week-${wk.number}`}
              className={
                wk.number === weekNum
                  ? 'rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground'
                  : 'rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground hover:bg-muted'
              }
            >
              W{wk.number}
            </Link>
          ))}
      </div>
    </>
  )
}
