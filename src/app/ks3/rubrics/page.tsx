import type { Metadata } from 'next'
import Link from 'next/link'
import { KS3, STRAND_LABEL, RUBRIC_LEVEL_LABEL } from '@/lib/ks3/curriculum'
import type { Strand, RubricLevel } from '@/lib/ks3/curriculum'

export const metadata: Metadata = {
  title: 'KS3 marking rubrics',
  description:
    'Marking rubrics for KS3 English — three years × four strands × four levels (Below target / Working towards / Expected / Greater depth).',
  alternates: { canonical: 'https://theenglishhub.app/ks3/rubrics' },
}

const STRANDS: Strand[] = ['reading', 'writing', 'language', 'speaking']
const LEVELS: RubricLevel[] = ['below', 'working', 'expected', 'depth']

export default function RubricsPage() {
  return (
    <>
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/ks3" className="hover:text-foreground">
          KS3
        </Link>
        <span> · </span>
        <span>Marking rubrics</span>
      </p>
      <h1>Marking rubrics</h1>
      <p className="lead">
        Three years × four strands × four levels. Each cell is the descriptor a marker reads when
        awarding the level. Skill-code chips link back to the master skills list.
      </p>
      <p>
        As per school policy students should receive <strong>What Went Well (WWW)</strong> and{' '}
        <strong>Even Better If (EBI)</strong> feedback every 8 lessons — in English that means once
        every two weeks. Feedback is constructive and based on outcomes recently covered in class.
      </p>

      {KS3.years.map((y) => (
        <section key={y.number} className="my-10">
          <h2>{y.name.en}</h2>
          {STRANDS.map((strand) => (
            <div key={strand} className="not-prose my-6">
              <h3 className="text-base font-semibold tracking-tight text-foreground mb-2">
                {STRAND_LABEL[strand].en}
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
                          {RUBRIC_LEVEL_LABEL[l].en}
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
