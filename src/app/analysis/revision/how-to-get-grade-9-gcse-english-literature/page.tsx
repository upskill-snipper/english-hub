import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Get a Grade 9 in GCSE English Literature | The English Hub',
  description:
    'An examiner-written guide on how to get a Grade 9 in GCSE English Literature. Marking criteria, essay structure, quote work, context and revision tips.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/how-to-get-grade-9-gcse-english-literature',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Get a Grade 9 in GCSE English Literature',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'A step-by-step guide to achieving a Grade 9 in GCSE English Literature, written by GCSE examiners.',
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/revision/how-to-get-grade-9-gcse-english-literature',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Grade 9 GCSE English Literature</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How to get a Grade 9 in GCSE English Literature
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          A Grade 9 in GCSE English Literature is awarded to roughly the top 4&ndash;5% of candidates each
          year. It is not about memorising more quotes than anyone else or writing the longest essay in the
          room. It is about showing an examiner, in a very specific way, that you can read a text as a
          constructed object &mdash; something Shakespeare, Dickens or Duffy built deliberately &mdash; and
          then write about the effects of those choices with confidence, precision and a point of view.
        </p>

        <h2 className="text-xl font-semibold text-foreground">What the top mark band actually rewards</h2>
        <p>
          Every exam board (AQA, Edexcel, OCR, WJEC Eduqas) uses almost identical mark schemes at the top.
          To hit Level 6 / Grade 9, the examiner is looking for four things in combination:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">A critical, conceptual reading</strong> &mdash; an overarching argument about what the writer is doing, not just what happens.</li>
          <li><strong className="text-foreground">Precise use of subject terminology</strong> &mdash; naming techniques correctly and analysing their effect, not just spotting them.</li>
          <li><strong className="text-foreground">Judicious quotation</strong> &mdash; short, embedded, zoomed-in on individual words and sounds.</li>
          <li><strong className="text-foreground">Context used as an argument</strong> &mdash; not a history lecture, but an explanation of why the text says what it says.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">The essay shape examiners reward</h2>
        <p>
          Top-band essays almost always follow a shape that looks something like this: a thesis in the first
          three sentences that directly answers the question; four to five analytical paragraphs that each
          drill into a single idea; and a closing line that reframes the argument rather than summarising it.
          Each paragraph should zoom from big idea, to quotation, to word-level analysis, back out to
          context or authorial intention. Examiners call this the &ldquo;zoom in, zoom out&rdquo; shape.
        </p>

        <h2 className="text-xl font-semibold text-foreground">A Grade 9 paragraph in practice</h2>
        <p>
          Consider a question on ambition in <em>Macbeth</em>. A Grade 5 candidate might write: &ldquo;Macbeth
          says &lsquo;vaulting ambition&rsquo; which shows he is ambitious.&rdquo; A Grade 9 candidate writes:
          &ldquo;Shakespeare&rsquo;s equestrian metaphor &lsquo;vaulting ambition&rsquo; casts Macbeth&rsquo;s
          desire as a rider who overshoots his horse, an image that would have read, to a Jacobean audience
          schooled in the Divine Right of Kings, as a physical manifestation of the spiritual chaos that
          comes from unseating God&rsquo;s chosen ruler.&rdquo; The second response does three things at
          once: analyses the metaphor, names the technique, and uses context as part of the argument.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Quote memorisation the smart way</h2>
        <p>
          Grade 9 candidates do not memorise 50 quotes per text. They memorise 10&ndash;12 flexible quotes
          that can be redeployed across multiple themes. The trick is to pick quotes that contain at least
          two analysable features &mdash; a metaphor and a rhythm, or an image and a sound pattern &mdash;
          so that you can use the same quote for questions on power, masculinity or the supernatural.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How to revise in the final six weeks</h2>
        <p>
          Spend 60% of your time writing timed paragraphs, 25% memorising and testing quotes using spaced
          repetition, and 15% re-reading the texts in full. The single biggest mistake high-achieving
          students make is spending too long making pretty revision notes and not enough time actually
          producing essay paragraphs against a clock. Examiners can tell within two sentences whether you
          have been writing or only reading.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Common Grade 9 blockers</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Feature-spotting without explaining effect (&ldquo;this is a metaphor&rdquo; is not analysis).</li>
          <li>Using context as a bolted-on paragraph rather than threading it through.</li>
          <li>Writing a long introduction instead of a sharp thesis.</li>
          <li>Relying on generic essay templates that ignore the specific wording of the question.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">One-sentence summary</h2>
        <p>
          A Grade 9 is earned by candidates who can argue that a text was deliberately constructed to make a
          point, and who can prove that argument with short quotations and precise word-level analysis under
          timed conditions.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-get-grade-9-gcse-english-language">How to get a Grade 9 in GCSE English Language</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-memorise-quotes-gcse-english">How to memorise quotes for GCSE English</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/6-month-gcse-english-revision-plan">6-month GCSE English revision plan</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-grade-boundaries-2024">GCSE English grade boundaries 2024</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Practise writing Grade 9 paragraphs</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Get examiner-style feedback on your English Literature paragraphs with The English Hub.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/auth/register"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85"
          >
            Create a free account
          </Link>
          <Link
            href="/analysis/revision"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-border bg-background px-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-muted"
          >
            All revision guides
          </Link>
        </div>
      </section>
    </main>
  )
}
