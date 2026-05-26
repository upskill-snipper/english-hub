import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { KS3, getYear, getTerm } from '@/lib/ks3/curriculum'
import type { YearNumber } from '@/lib/ks3/curriculum'
import { t } from '@/lib/i18n/t'

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
  if (!parsed) return { title: 'KS3 - Term not found' }
  const y = getYear(KS3, parsed.year)
  const t = getTerm(KS3, parsed.year, parsed.term)
  if (!y || !t) return { title: 'KS3 - Term not found' }
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
  const term = getTerm(KS3, yearNum, termNum)
  if (!y || !term) notFound()

  const tr = await Promise.all([
    t('ks3.key_stage_3'), // 0
    t(`ks3.year_${yearNum}`), // 1
    t(`ks3.year_${yearNum}_name`), // 2
    t(`ks3.term_${termNum}`), // 3
    t('ks3.set_text'), // 4
    t('ks3.big_skill_jump'), // 5
    t('ks3.term.vocab_themes_heading'), // 6
    t('ks3.assessment'), // 7
    t('ks3.term.in_production'), // 8
    t('ks3.term.week_label'), // 9
  ])
  const isAr = tr[0] !== 'Key Stage 3'

  return (
    <>
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/ks3" className="hover:text-foreground">
          {tr[0]}
        </Link>
        <span> · </span>
        <Link href={`/ks3/year-${yearNum}`} className="hover:text-foreground">
          {isAr ? `${tr[1]} - ${tr[2]}` : y.name.en}
        </Link>
        <span> · </span>
        <span>{tr[3]}</span>
      </p>
      <h1>{tr[3]}</h1>
      <p className="lead">{term.overview.en}</p>

      <div className="not-prose grid gap-4 sm:grid-cols-2 my-6">
        <div className="rounded-xl border border-border/60 bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            {tr[4]}
          </p>
          <p className="text-base font-medium text-foreground">{term.setText.en}</p>
        </div>
        <div className="rounded-xl border border-border/60 bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-2">
            {tr[5]}
          </p>
          <p className="text-sm text-muted-foreground">{term.bigSkillJump.en}</p>
        </div>
      </div>

      <h2>{tr[6]}</h2>
      <ul>
        {term.vocabularyThemes.map((v, i) => (
          <li key={i}>{v.en}</li>
        ))}
      </ul>

      {term.halfTerms.map((h) => (
        <section key={h.id} className="my-8">
          <h2>{h.label.en}</h2>
          {h.assessment ? (
            <div className="not-prose rounded-xl border border-primary/30 bg-primary/[0.04] p-4 mb-6 text-sm">
              <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-primary mb-1">
                {tr[7]}
              </p>
              <p className="text-muted-foreground">{h.assessment.en}</p>
            </div>
          ) : null}

          {h.weeks.length === 0 ? (
            <p className="text-sm text-muted-foreground italic">{tr[8]}</p>
          ) : (
            <div className="not-prose grid gap-3 sm:grid-cols-2 lg:grid-cols-3 my-4">
              {h.weeks.map((w) => (
                <Link
                  key={w.number}
                  href={`/ks3/year-${yearNum}/term-${termNum}/week-${w.number}`}
                  className="group rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-primary/40 hover:bg-primary/[0.03]"
                >
                  <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                    {tr[9]} {w.number}
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
