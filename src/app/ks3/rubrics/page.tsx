import type { Metadata } from 'next'
import Link from 'next/link'
import { KS3, STRAND_LABEL, RUBRIC_LEVEL_LABEL } from '@/lib/ks3/curriculum'
import type { Strand, RubricLevel } from '@/lib/ks3/curriculum'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'KS3 marking rubrics',
  description:
    'Marking rubrics for KS3 English — three years × four strands × four levels (Below target / Working towards / Expected / Greater depth).',
  alternates: { canonical: 'https://theenglishhub.app/ks3/rubrics' },
}

const STRANDS: Strand[] = ['reading', 'writing', 'language', 'speaking']
const LEVELS: RubricLevel[] = ['below', 'working', 'expected', 'depth']

export default async function RubricsPage() {
  const tr = await Promise.all([
    t('ks3.key_stage_3'), // 0
    t('ks3.marking_rubrics'), // 1
    t('ks3.rubrics.lead'), // 2
    t('ks3.rubrics.www_ebi'), // 3
    t('ks3.strand.reading'), // 4
    t('ks3.strand.writing'), // 5
    t('ks3.strand.language'), // 6
    t('ks3.strand.speaking'), // 7
    t('ks3.rubric.below'), // 8
    t('ks3.rubric.working'), // 9
    t('ks3.rubric.expected'), // 10
    t('ks3.rubric.depth'), // 11
    t('ks3.year_7'), // 12
    t('ks3.year_8'), // 13
    t('ks3.year_9'), // 14
    t('ks3.year_7_name'), // 15
    t('ks3.year_8_name'), // 16
    t('ks3.year_9_name'), // 17
  ])
  const strandTr: Record<string, string> = {
    reading: tr[4],
    writing: tr[5],
    language: tr[6],
    speaking: tr[7],
  }
  const levelTr: Record<string, string> = {
    below: tr[8],
    working: tr[9],
    expected: tr[10],
    depth: tr[11],
  }
  const yearLabelTr: Record<number, string> = { 7: tr[12], 8: tr[13], 9: tr[14] }
  const yearNameTr: Record<number, string> = { 7: tr[15], 8: tr[16], 9: tr[17] }

  return (
    <>
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/ks3" className="hover:text-foreground">
          {tr[0]}
        </Link>
        <span> · </span>
        <span>{tr[1]}</span>
      </p>
      <h1>{tr[1]}</h1>
      <p className="lead">{tr[2]}</p>
      <p>{tr[3]}</p>

      {KS3.years.map((y) => (
        <section key={y.number} className="my-10">
          <h2>
            {yearLabelTr[y.number]} — {yearNameTr[y.number]}
          </h2>
          {STRANDS.map((strand) => (
            <div key={strand} className="not-prose my-6">
              <h3 className="text-base font-semibold tracking-tight text-foreground mb-2">
                {strandTr[strand] ?? STRAND_LABEL[strand].en}
              </h3>
              <div className="overflow-x-auto rounded-xl border border-border/60">
                <table className="w-full text-sm">
                  <thead className="bg-muted/40">
                    <tr>
                      {LEVELS.map((l) => (
                        <th
                          key={l}
                          className="text-start p-3 font-semibold text-foreground border-b border-border/60"
                        >
                          {levelTr[l] ?? RUBRIC_LEVEL_LABEL[l].en}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {LEVELS.map((level) => {
                        const cell = y.rubric.find((r) => r.strand === strand && r.level === level)
                        return (
                          <td
                            key={level}
                            className="align-top p-3 text-muted-foreground border-e border-border/30 last:border-e-0"
                          >
                            <p className="text-xs leading-relaxed">{cell?.descriptor.en ?? '—'}</p>
                            {cell?.skillCodes.length ? (
                              <p className="mt-2 flex flex-wrap gap-1">
                                {cell.skillCodes.map((code) => (
                                  <Link
                                    key={code}
                                    href="/ks3/skills"
                                    className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-mono text-primary"
                                  >
                                    {code}
                                  </Link>
                                ))}
                              </p>
                            ) : null}
                          </td>
                        )
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>
      ))}
    </>
  )
}
