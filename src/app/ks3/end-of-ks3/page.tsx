import type { Metadata } from 'next'
import Link from 'next/link'
import { KS3, STRAND_LABEL } from '@/lib/ks3/curriculum'

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

export default function EndOfKS3Page() {
  return (
    <>
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground">
        <Link href="/ks3" className="hover:text-foreground">
          KS3
        </Link>
        <span> · </span>
        <span>End of KS3</span>
      </p>
      <h1>End of KS3 expectations</h1>
      <p className="lead">{KS3.endOfKS3.overview.en}</p>

      <h2>By strand (British National Curriculum)</h2>
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

      <h2>What &ldquo;expected at end of KS3&rdquo; looks like</h2>
      <p>
        A student working at the expected standard at the end of Year 9 can do all of the following.
        This is the bridge to GCSE — students who hit these markers walk into Year 10 with the
        analytical, compositional and oracy reflexes their GCSE specifications already assume.
      </p>
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

      <h2>Reading-progression formula</h2>
      <ul>
        <li>
          <strong>Year 7</strong> — &ldquo;This shows…&rdquo; and can identify similarities.
        </li>
        <li>
          <strong>Year 8</strong> — &ldquo;This suggests… because…&rdquo; and can explain
          similarities AND differences.
        </li>
        <li>
          <strong>Year 9</strong> — &ldquo;This suggests… which reflects…&rdquo; and analyse methods
          across texts.
        </li>
      </ul>

      <h2>Writing-progression formula</h2>
      <ul>
        <li>
          <strong>Year 7</strong> — control + basic structure.
        </li>
        <li>
          <strong>Year 8</strong> — deliberate choices + clearer development.
        </li>
        <li>
          <strong>Year 9</strong> — craft + conceptual depth.
        </li>
      </ul>
    </>
  )
}
