import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Language Paper Grade 9 Vocabulary Bank | The English Hub',
  description:
    'A Grade 9 vocabulary bank for AQA English Language Paper 1 and Paper 2: analysis verbs, evaluative phrases, ambitious adjectives and more. Written by GCSE examiners.',
  alternates: {
    canonical:
      'https://theenglishhub.app/analysis/language-paper/language-paper-grade-9-vocabulary-bank',
  },
}

const related = [
  { slug: '25-language-techniques-every-student-must-know', title: '25 language techniques every student must know' },
  { slug: 'persuasive-techniques-aforest-dafforest-explained', title: 'AFOREST persuasive techniques' },
  { slug: 'aqa-language-paper-1-question-2-language-analysis', title: 'Paper 1 Question 2 — language analysis' },
  { slug: 'aqa-language-paper-2-question-3-language', title: 'Paper 2 Question 3 — language' },
]

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Language Paper Grade 9 Vocabulary Bank',
    description:
      'A Grade 9 vocabulary bank for AQA English Language Paper 1 and Paper 2.',
    author: { '@type': 'Organization', name: 'The English Hub' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/language-paper/language-paper-grade-9-vocabulary-bank',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/analysis/language-paper" className="hover:text-foreground">Language Paper</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Grade 9 vocabulary bank</span>
      </nav>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Language Paper Grade 9 vocabulary bank
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Examiners say the same thing every year: the vocabulary gap between Grade 6
          and Grade 9 is not about knowing more long words. It is about knowing a small
          set of precise analytical verbs and evaluative adjectives and reaching for
          them automatically. This page is the vocabulary bank you should drill for two
          weeks before the exam. Every phrase here has been chosen because it signals
          top-band thinking without sounding forced.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Analysis verbs (replace &ldquo;shows&rdquo;)</h2>
        <p>
          The single weakest verb in GCSE answers is &ldquo;shows&rdquo;. Replace it
          with one of these and your analysis immediately climbs a band: evokes,
          conveys, suggests, implies, connotes, captures, underscores, reinforces,
          emphasises, heightens, intensifies, mirrors, establishes, foreshadows,
          exposes, undermines, complicates, subverts, positions, invites, provokes.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Evaluative phrases for Question 4 (Paper 1)</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>The student&apos;s claim is largely convincing because&hellip;</li>
          <li>A more nuanced reading might suggest&hellip;</li>
          <li>The impression is therefore one of&hellip;</li>
          <li>This is only partly true because&hellip;</li>
          <li>The writer complicates this view by&hellip;</li>
          <li>At first glance&hellip; but on closer reading&hellip;</li>
          <li>It would be fair to agree that&hellip; yet it is also possible to argue&hellip;</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground">Effect-on-the-reader phrases</h2>
        <ul className="list-disc space-y-1 pl-6">
          <li>positions the reader to feel&hellip;</li>
          <li>invites the reader to consider&hellip;</li>
          <li>unsettles the reader by&hellip;</li>
          <li>creates a growing sense of&hellip;</li>
          <li>distances the reader from&hellip;</li>
          <li>forces the reader to confront&hellip;</li>
          <li>lulls the reader into&hellip;</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground">Ambitious descriptive adjectives</h2>
        <p>
          For creative writing on Paper 1 Question 5. Use sparingly: one or two per
          paragraph is plenty.
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li><strong>Atmosphere:</strong> oppressive, leaden, brittle, suffocating, luminous, desolate, forlorn, feverish.</li>
          <li><strong>Light:</strong> muted, dappled, glacial, molten, spectral, searing, pallid.</li>
          <li><strong>Sound:</strong> brittle, hushed, resonant, strangled, guttural, plaintive.</li>
          <li><strong>Motion:</strong> staggering, lurching, hovering, gliding, shuddering, faltering.</li>
          <li><strong>Emotion:</strong> unmoored, bereft, hollowed, reluctant, resolved, trembling.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-foreground">Precise verbs (for description)</h2>
        <p>
          The fastest upgrade in creative writing is replacing weak verbs with specific
          ones. Instead of &ldquo;walked&rdquo;, try: staggered, shuffled, strode,
          drifted, slipped, wandered. Instead of &ldquo;looked&rdquo;, try: glanced,
          studied, peered, scanned, stared, glimpsed. Instead of &ldquo;said&rdquo;,
          try: murmured, hissed, breathed, conceded, insisted, demanded.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Comparative connectives (for Paper 2)</h2>
        <p>
          Whereas, conversely, by contrast, similarly, likewise, equally, in opposition,
          in stark contrast, unlike. Use at least one of these at the start of each
          comparative paragraph on Question 4.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Interpretive phrases (for Paper 2 Question 2)</h2>
        <p>
          This suggests, this implies, this reflects, this reveals, this perhaps
          indicates, this divergence arguably points to, this difference reflects a
          wider shift in. One of these belongs at the end of every summary paragraph.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Persuasive vocabulary (for Paper 2 Question 5)</h2>
        <p>
          Shameful, indefensible, urgent, unacceptable, unthinkable, inexcusable,
          overdue, catastrophic, transformative, essential, irreplaceable, dignified,
          restorative. Use these as the emotive verbs and adjectives inside your
          argument.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">How to learn the bank</h2>
        <p>
          Pick five words or phrases a day and write one sentence using each. Do not
          try to memorise the whole list. Examiners notice natural use far more than
          quantity, and one elegant sentence with &ldquo;positions the reader&rdquo;
          beats three awkward ones with &ldquo;underscores&rdquo;, &ldquo;subverts&rdquo;
          and &ldquo;complicates&rdquo; stacked up.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Examiner tip</h2>
        <p>
          Your everyday speech leaks into your exam writing. Use one or two of the
          Grade 9 verbs in class discussion, in homework and in essays you are not
          being marked on. Within a fortnight, you will reach for them automatically
          under exam pressure.
        </p>

        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground">Related guides</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/analysis/language-paper/${r.slug}`} className="text-primary hover:underline">
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-muted/40 p-6">
          <h3 className="text-lg font-semibold text-foreground">Revise the whole paper</h3>
          <p className="mt-2 text-sm">
            This guide is one glossary in a wider resource. Open the full Language
            revision hub to work through reading, writing and SPAG in order.
          </p>
          <div className="mt-4">
            <Link
              href="/revision/language"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
            >
              Open the Language revision hub
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
