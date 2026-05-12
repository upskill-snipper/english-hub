import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { KS3, getYear, STRAND_LABEL, RUBRIC_LEVEL_LABEL } from '@/lib/ks3/curriculum'
import type { YearNumber } from '@/lib/ks3/curriculum'

type Params = { year: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return KS3.years.map((y) => ({ year: `year-${y.number}` }))
}

/**
 * URL is `/ks3/year-7` so the dynamic param value is `"year-7"`. We
 * keep that human-readable URL shape (better than `/ks3/7`) and parse
 * it back to a YearNumber here.
 */
function parseYear(yearParam: string): YearNumber | null {
  const match = yearParam.match(/^year-(7|8|9)$/)
  if (!match) return null
  return Number(match[1]) as YearNumber
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { year } = await params
  const n = parseYear(year)
  if (!n) return { title: 'KS3 — Year not found' }
  const y = getYear(KS3, n)
  if (!y) return { title: 'KS3 — Year not found' }
  return {
    title: y.name.en,
    description: y.overview.en.slice(0, 160),
    alternates: { canonical: `https://theenglishhub.app/ks3/year-${n}` },
  }
}

export default async function YearPage({ params }: { params: Promise<Params> }) {
  const { year } = await params
  const n = parseYear(year)
  if (!n) notFound()
  const y = getYear(KS3, n)
  if (!y) notFound()

  return (
    <>
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/ks3" className="hover:text-foreground">
          KS3
        </Link>
        <span> · </span>
        <span>Year {n}</span>
      </p>
      <h1>{y.name.en}</h1>
      <p className="lead">{y.overview.en}</p>

      <h2>Yearly expectations</h2>
      <p>Students working at the expected standard by the end of Year {n} can:</p>

      {(['reading', 'writing', 'language', 'speaking'] as const).map((strand) => (
        <section
          key={strand}
          className="not-prose my-8 rounded-xl border border-border/60 bg-card p-5"
        >
          <h3 className="text-base font-semibold tracking-tight text-foreground mb-3">
            {STRAND_LABEL[strand].en}
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {y.yearlyExpectations[strand].map((exp, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-primary" aria-hidden>
                  •
                </span>
                <span>{exp.en}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <h2>Three terms</h2>
      <div className="not-prose grid gap-4 sm:grid-cols-3 my-6">
        {y.terms.map((t) => (
          <Link
            key={t.number}
            href={`/ks3/year-${n}/term-${t.number}`}
            className="group rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40 hover:bg-primary/[0.03]"
          >
            <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
              {t.label.en}
            </p>
            <p className="mt-3 text-sm text-muted-foreground line-clamp-4">{t.overview.en}</p>
            <p className="mt-4 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              View Term {t.number} →
            </p>
          </Link>
        ))}
      </div>

      <h2>Marking rubric — Year {n}</h2>
      <p>
        Four strands × four levels. Each cell is the descriptor a marker reads when awarding the
        level, with the skill codes it draws on.
      </p>
      <div className="not-prose overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-start py-2 pe-3 font-semibold">Strand</th>
              {(['below', 'working', 'expected', 'depth'] as const).map((l) => (
                <th key={l} className="text-start py-2 pe-3 font-semibold">
                  {RUBRIC_LEVEL_LABEL[l].en}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="[&_td]:align-top [&_td]:py-3 [&_td]:pe-3">
            {(['reading', 'writing', 'language', 'speaking'] as const).map((strand) => (
              <tr key={strand} className="border-b border-border/40">
                <td className="font-medium text-foreground">{STRAND_LABEL[strand].en}</td>
                {(['below', 'working', 'expected', 'depth'] as const).map((level) => {
                  const cell = y.rubric.find((r) => r.strand === strand && r.level === level)
                  return (
                    <td key={level} className="text-muted-foreground text-xs">
                      {cell?.descriptor.en ?? '—'}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What changes by the end of the year</h2>
      <p className="text-base font-medium text-foreground bg-primary/[0.04] border-s-2 border-primary/40 ps-4 py-3 italic">
        {y.terms[0].bigSkillJump.en}
      </p>
    </>
  )
}
