import type { Metadata } from 'next'
import Link from 'next/link'
import { KS3, STRAND_LABEL } from '@/lib/ks3/curriculum'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'End of KS3 expectations',
  description:
    'British National Curriculum end-of-KS3 standard — what students working at the expected level can do at the end of Year 9.',
  alternates: { canonical: 'https://theenglishhub.app/ks3/end-of-ks3' },
}

const STRAND_LABEL_EXT: Record<string, string> = {
  reading: 'Reading',
  writing: 'Writing',
  grammar: 'Grammar and Linguistic Knowledge',
  speaking: 'Speaking and Listening',
  literary: 'Literary and Cultural Knowledge',
  language: 'Language, grammar and control',
}

export default async function EndOfKS3Page() {
  const tr = await Promise.all([
    t('ks3.key_stage_3'), // 0
    t('ks3.end_of_ks3'), // 1
    t('ks3.endks3.heading'), // 2
    t('ks3.endks3.by_strand_heading'), // 3
    t('ks3.endks3.expected_heading'), // 4
    t('ks3.endks3.expected_body'), // 5
    t('ks3.endks3.reading_formula_heading'), // 6
    t('ks3.endks3.writing_formula_heading'), // 7
    t('ks3.endks3.reading_y7'), // 8
    t('ks3.endks3.reading_y8'), // 9
    t('ks3.endks3.reading_y9'), // 10
    t('ks3.endks3.writing_y7'), // 11
    t('ks3.endks3.writing_y8'), // 12
    t('ks3.endks3.writing_y9'), // 13
    t('ks3.year_7'), // 14
    t('ks3.year_8'), // 15
    t('ks3.year_9'), // 16
  ])

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
      <p className="lead">{KS3.endOfKS3.overview.en}</p>

      <h2>{tr[3]}</h2>
      {KS3.endOfKS3.byStrand.map((section) => (
        <section key={section.strand} className="my-6">
          <h3>{section.label.en}</h3>
          <ul>
            {section.bullets.map((b, i) => (
              <li key={i}>{b.en}</li>
            ))}
          </ul>
        </section>
      ))}

      <h2>{tr[4]}</h2>
      <p>{tr[5]}</p>
      {KS3.endOfKS3.expectedAtEnd.map((section) => (
        <section key={section.strand} className="my-5">
          <h3>{STRAND_LABEL[section.strand]?.en ?? STRAND_LABEL_EXT[section.strand]}</h3>
          <ul>
            {section.bullets.map((b, i) => (
              <li key={i}>{b.en}</li>
            ))}
          </ul>
        </section>
      ))}

      <h2>{tr[6]}</h2>
      <ul>
        <li>
          <strong>{tr[14]}</strong> — {tr[8]}
        </li>
        <li>
          <strong>{tr[15]}</strong> — {tr[9]}
        </li>
        <li>
          <strong>{tr[16]}</strong> — {tr[10]}
        </li>
      </ul>

      <h2>{tr[7]}</h2>
      <ul>
        <li>
          <strong>{tr[14]}</strong> — {tr[11]}
        </li>
        <li>
          <strong>{tr[15]}</strong> — {tr[12]}
        </li>
        <li>
          <strong>{tr[16]}</strong> — {tr[13]}
        </li>
      </ul>
    </>
  )
}
