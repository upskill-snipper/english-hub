import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { KS3, getYear, getTerm } from '@/lib/ks3/curriculum'
import type { YearNumber } from '@/lib/ks3/curriculum'

type Params = { year: string; term: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return KS3.years.flatMap((y) =>
    y.terms.map((t) => ({ year: `year-${y.number}`, term: `term-${t.number}` })),
  )
}

function parseParams(p: Params): { year: YearNumber; term: 1 | 2 | 3 } | null {
  const yMatch = p.year.match(/^year-(7|8|9)$/)
  const tMatch = p.term.match(/^term-(1|2|3)$/)
  if (!yMatch || !tMatch) return null
  return { year: Number(yMatch[1]) as YearNumber, term: Number(tMatch[1]) as 1 | 2 | 3 }
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const parsed = parseParams(await params)
  if (!parsed) return { title: 'KS3 — Term not found' }
  const y = getYear(KS3, parsed.year)
  const t = getTerm(KS3, parsed.year, parsed.term)
  if (!y || !t) return { title: 'KS3 — Term not found' }
  return {
    title: `${y.name.en} · ${t.label.en}`,
    description: t.overview.en.slice(0, 160),
    alternates: {
      canonical: `https://theenglishhub.app/ks3/year-${parsed.year}/term-${parsed.term}`,
    },
  }
}

export default async function TermPage({ params }: { params: Promise<Params> }) {
  const parsed = parseParams(await params)
  if (!parsed) notFound()
  const { year: yearNum, term: termNum } = parsed
  const y = getYear(KS3, yearNum)
  const t = getTerm(KS3, yearNum, termNum)
  if (!y || !t) notFound()

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
        <span>{t.label.en}</span>
      </p>
      <h1>{t.label.en}</h1>
      <p className="lead">{t.overview.en}</p>

      <div className="not-prose grid gap-4 sm:grid-cols-2 my-6">
        <div className="rounded-xl border border-border/60 bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            Set text
          </p>
          <p className="text-base font-medium text-foreground">{t.setText.en}</p>
        </div>
        <div className="rounded-xl border border-border/60 bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            Big skill jump
          </p>
          <p className="text-sm text-muted-foreground">{t.bigSkillJump.en}</p>
        </div>
      </div>

      <h2>Vocabulary themes</h2>
      <ul>
        {t.vocabularyThemes.map((v, i) => (
          <li key={i}>{v.en}</li>
        ))}
      </ul>

      {t.halfTerms.map((h) => (
        <section key={h.id} className="my-8">
          <h2>{h.label.en}</h2>
          {h.assessment ? (
            <div className="not-prose rounded-xl border border-primary/30 bg-primary/[0.04] p-4 mb-6 text-sm">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-1">
                End-of-half-term assessment
              </p>
              <p className="text-muted-foreground">{h.assessment.en}</p>
            </div>
          ) : null}

          {h.weeks.length === 0 ? (
            <p className="text-sm text-muted-foreground italic">
              Weekly lesson plans for this half-term are in production — the KS3 lesson-planner
              agent is drafting them now. Yearly expectations and rubrics still apply.
            </p>
          ) : (
            <div className="not-prose grid gap-3 sm:grid-cols-2 lg:grid-cols-3 my-4">
              {h.weeks.map((w) => (
                <Link
                  key={w.number}
                  href={`/ks3/year-${yearNum}/term-${termNum}/week-${w.number}`}
                  className="group rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-primary/40 hover:bg-primary/[0.03]"
                >
                  <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                    Week {w.number}
                  </p>
                  {w.pages ? <p className="mt-1 text-xs text-muted-foreground">{w.pages}</p> : null}
                  {w.contextNote ? (
                    <p className="mt-2 text-sm text-foreground line-clamp-2">{w.contextNote.en}</p>
                  ) : null}
                  <p className="mt-3 flex flex-wrap gap-1">
                    {w.keyVocabulary.slice(0, 3).map((kv, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {kv.en}
                      </span>
                    ))}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  )
}
