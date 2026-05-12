import type { Metadata } from 'next'
import Link from 'next/link'
import { KS3, STRAND_LABEL } from '@/lib/ks3/curriculum'
import type { Strand, YearNumber } from '@/lib/ks3/curriculum'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'KS3 skill codes',
  description:
    'Every KS3 English skill code (Y7→Y8→Y9 progression) across Reading, Writing, Language Control, and Speaking & Listening.',
  alternates: { canonical: 'https://theenglishhub.app/ks3/skills' },
}

const STRANDS: Strand[] = ['reading', 'writing', 'language', 'speaking']
const YEARS: YearNumber[] = [7, 8, 9]

export default async function SkillsPage() {
  const tr = await Promise.all([
    t('ks3.key_stage_3'), // 0
    t('ks3.skill_codes'), // 1
    t('ks3.skills.heading'), // 2
    t('ks3.skills.lead'), // 3
    t('ks3.strand.reading'), // 4
    t('ks3.strand.writing'), // 5
    t('ks3.strand.language'), // 6
    t('ks3.strand.speaking'), // 7
    t('ks3.year_7'), // 8
    t('ks3.year_8'), // 9
    t('ks3.year_9'), // 10
  ])
  const strandTr: Record<string, string> = {
    reading: tr[4],
    writing: tr[5],
    language: tr[6],
    speaking: tr[7],
  }
  const yearLabelTr: Record<number, string> = { 7: tr[8], 8: tr[9], 9: tr[10] }

  return (
    <>
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/ks3" className="hover:text-foreground">
          {tr[0]}
        </Link>
        <span> · </span>
        <span>{tr[1]}</span>
      </p>
      <h1>{tr[2]}</h1>
      <p className="lead">{tr[3]}</p>

      {STRANDS.map((strand) => (
        <section key={strand} className="my-10">
          <h2>{strandTr[strand] ?? STRAND_LABEL[strand].en}</h2>
          <div className="not-prose grid gap-3 sm:grid-cols-3">
            {YEARS.map((year) => (
              <div key={year} className="rounded-xl border border-border/60 bg-card p-4">
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
                  {yearLabelTr[year]}
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
