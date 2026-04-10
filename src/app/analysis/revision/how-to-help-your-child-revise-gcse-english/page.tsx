import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Help Your Child Revise GCSE English | The English Hub',
  description:
    'Practical advice for parents on supporting a teenager through GCSE English revision without pressure, written by GCSE examiners.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/how-to-help-your-child-revise-gcse-english',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Help Your Child Revise GCSE English',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'An examiner-written guide to parental support for GCSE English revision.',
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/revision/how-to-help-your-child-revise-gcse-english',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Helping your child revise</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How to help your child revise GCSE English
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Parents often feel helpless during GCSE year. You know your child is stressed, you want to
          support them, but you don&rsquo;t want to become the nagging voice that makes things worse.
          The good news is that the research is very clear on what parental support actually helps
          during revision &mdash; and it&rsquo;s much less about knowing the text than you might think.
          The most impactful things you can do require no English knowledge at all.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The three things that actually help</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Environment.</strong> A quiet space, consistent meal times, regular sleep.</li>
          <li><strong className="text-foreground">Quote testing.</strong> Hold the flashcards, read the front, check the back.</li>
          <li><strong className="text-foreground">Emotional regulation.</strong> Stay calm even when your child isn&rsquo;t.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Ask to be tested</h2>
        <p>
          The easiest parental contribution is quote drilling. You don&rsquo;t need to understand
          Macbeth &mdash; you just need to read the cue card and check the answer. Ten minutes of this
          a few times a week is genuinely grade-moving. Ask your child to write out their quotes on
          paper cards and then you become the examiner.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Read their writing out loud together</h2>
        <p>
          Reading aloud catches errors the eye misses. Sit together, let your child read their practice
          paragraph, and just listen. You&rsquo;ll both hear where sentences trail off, where a word is
          repeated, or where a thought isn&rsquo;t finished. This doesn&rsquo;t require you to know the
          text &mdash; it requires you to have ears.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Protect their sleep</h2>
        <p>
          The single biggest predictor of a good exam performance is a good night&rsquo;s sleep, and
          one of the things parents can genuinely control. Insist on a phone-free bedroom during the
          last month of revision. Make sure they&rsquo;re in bed by 10pm. Provide a full breakfast.
          These small rituals sound old-fashioned, but they&rsquo;re backed by decades of research.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Feed them well</h2>
        <p>
          Complex carbs, protein, fruit and water. Avoid loading them up on sugar before revision
          sessions &mdash; the crash will cost more than the calories gained. On exam day, porridge is
          the traditional choice for a reason: it releases energy slowly over three to four hours.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Stay calm when they don&rsquo;t</h2>
        <p>
          Your teenager will have moments of panic, frustration or tears during revision. Resist the
          urge to say &ldquo;You should have started earlier&rdquo; or &ldquo;You need to work harder.&rdquo;
          Instead, listen, acknowledge that it&rsquo;s hard, and help them identify one small thing they
          can do next. Your calm is more contagious than your advice.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Things to avoid</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Comparing them to siblings, classmates or yourself at their age.</li>
          <li>Offering unsolicited analysis of quotes you half-remember.</li>
          <li>Asking &ldquo;Have you done enough revision?&rdquo; every evening.</li>
          <li>Scheduling arguments about unrelated topics during revision weeks.</li>
          <li>Catastrophising about what happens if they fail.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Know when to back off</h2>
        <p>
          Some teenagers revise best with lots of check-ins; others need you to step back completely.
          Ask your child what they&rsquo;d like. Respecting their preference, even when it feels
          uncomfortable, tends to produce better results than imposing a system that doesn&rsquo;t fit
          them.
        </p>

        <h2 className="text-xl font-semibold text-foreground">On exam day</h2>
        <p>
          Give them a proper breakfast, a small compliment, and a calm goodbye. Do not ask
          &ldquo;How was it?&rdquo; the second they come out &mdash; they&rsquo;ll tell you when
          they&rsquo;re ready. A quiet, affectionate house between papers is worth more than any
          last-minute flashcards.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-explained-for-parents">GCSE English explained for parents</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/dealing-with-exam-anxiety-gcse-english">Dealing with exam anxiety</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/night-before-gcse-english-exam">The night before the exam</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-vs-english-language-vs-literature">Language vs Literature explained</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Support without guesswork</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Parents can track their child&rsquo;s progress and see examiner feedback inside The English Hub.
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
