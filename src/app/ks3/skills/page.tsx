import type { Metadata } from 'next'
import Link from 'next/link'
import { KS3, STRAND_LABEL } from '@/lib/ks3/curriculum'
import type { Strand, YearNumber } from '@/lib/ks3/curriculum'

export const metadata: Metadata = {
  title: 'KS3 skill codes',
  description:
    'Every KS3 English skill code (Y7→Y8→Y9 progression) across Reading, Writing, Language Control, and Speaking & Listening.',
  alternates: { canonical: 'https://theenglishhub.app/ks3/skills' },
}

const STRANDS: Strand[] = ['reading', 'writing', 'language', 'speaking']
const YEARS: YearNumber[] = [7, 8, 9]

export default function SkillsPage() {
  return (
    <>
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/ks3" className="hover:text-foreground">
          KS3
        </Link>
        <span> · </span>
        <span>Skill codes</span>
      </p>
      <h1>KS3 skill codes — progression Y7 → Y8 → Y9</h1>
      <p className="lead">
        Every weekly lesson plan, every rubric cell, every AI marking comment maps to one of these
        codes. Reading the progression column reveals how a skill grows from foundation to mastery
        across the three years.
      </p>

      {STRANDS.map((strand) => (
        <section key={strand} className="my-10">
          <h2>{STRAND_LABEL[strand].en}</h2>
          <div className="not-prose grid gap-3 sm:grid-cols-3">
            {YEARS.map((year) => (
              <div key={year} className="rounded-xl border border-border/60 bg-card p-4">
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
                  Year {year}
                </p>
                <ul className="space-y-2 text-sm">
                  {KS3.skillCodes
                    .filter((s) => s.year === year && s.strand === strand)
                    .map((s) => (
                      <li key={s.id}>
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-xs text-primary">{s.id}</span>
                          {s.becomes ? (
                            <span className="font-mono text-[10px] text-muted-foreground">
                              → {s.becomes}
                            </span>
                          ) : null}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {s.descriptor.en}
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
