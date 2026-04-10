import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The Night Before the GCSE English Exam: What to Do | The English Hub',
  description:
    'Exactly what to do the night before your GCSE English exam. Sleep, revision, equipment, food and nerves, written by GCSE examiners.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/night-before-gcse-english-exam',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Night Before the GCSE English Exam',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'Calm, practical advice for the evening before your GCSE English exam.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/revision/night-before-gcse-english-exam',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">The night before</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        The night before the GCSE English exam
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          The night before your GCSE English exam is not the time for heroic revision. It is the time to
          be kind to yourself, get a proper night&rsquo;s sleep, and trust the work you&rsquo;ve already
          done. Sleep has been shown in hundreds of studies to improve memory retrieval, reaction time
          and emotional resilience &mdash; all three of which you need tomorrow morning. Cramming
          the night before is the single most common mistake high-achieving students make.
        </p>

        <h2 className="text-xl font-semibold text-foreground">What to actually do (in order)</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Late afternoon:</strong> 30 minutes of light quote review. No new content.</li>
          <li><strong className="text-foreground">Early evening:</strong> A proper, balanced dinner (complex carbs, some protein, water).</li>
          <li><strong className="text-foreground">After dinner:</strong> Pack your exam bag (see below) and lay out your uniform.</li>
          <li><strong className="text-foreground">7&ndash;8pm:</strong> A 20-minute walk, ideally outside, to clear your head.</li>
          <li><strong className="text-foreground">8&ndash;9pm:</strong> Something relaxing that isn&rsquo;t a screen: a chapter of a book, a hot bath, a chat with family.</li>
          <li><strong className="text-foreground">9&ndash;10pm:</strong> Bed. Aim for at least 8 hours of sleep.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">What NOT to do</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Do not try to learn new quotes or re-read your entire novel.</li>
          <li>Do not look at your phone in bed. Blue light delays the sleep hormone melatonin.</li>
          <li>Do not drink caffeine after 4pm.</li>
          <li>Do not catastrophise with friends in a group chat. Stay calm.</li>
          <li>Do not pull an all-nighter. It will cost you marks, not buy them.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Your exam bag checklist</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Clear pencil case (all exam boards require this).</li>
          <li>Two black pens. Three is better. Four is ideal.</li>
          <li>Pencil, rubber, ruler.</li>
          <li>Water bottle with the label removed.</li>
          <li>Statement of entry / candidate number if your school requires it.</li>
          <li>Tissues (hayfever, runny nose, nerves).</li>
          <li>A snack for before the exam, not during.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Sleep is the magic trick</h2>
        <p>
          During deep sleep, your brain consolidates the memories you formed during the day. The quotes
          you revised this morning are literally being filed away overnight. Skipping sleep to cram more
          doesn&rsquo;t just tire you &mdash; it actively blocks the memory consolidation of what
          you&rsquo;ve just learned. A full night&rsquo;s sleep is the highest-ROI thing you can do
          before any exam.
        </p>

        <h2 className="text-xl font-semibold text-foreground">If you can&rsquo;t sleep</h2>
        <p>
          It&rsquo;s normal. Don&rsquo;t panic. Lie still, breathe slowly (in for four, hold for four,
          out for six) and accept that even resting in the dark is beneficial to your body. Most
          students who &ldquo;couldn&rsquo;t sleep&rdquo; actually get several hours of shallow sleep
          without realising, and perform perfectly well. Adrenaline in the morning will get you through.
        </p>

        <h2 className="text-xl font-semibold text-foreground">In the morning</h2>
        <p>
          Get up early enough to have a calm breakfast (porridge, toast, eggs &mdash; slow-release
          carbs). Review one page of notes or quotes only &mdash; not the whole folder. Get to school
          early so you&rsquo;re not rushing. Take a last look at your opening sentence for each probable
          question and then close the folder. You are ready.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The one thing to remember</h2>
        <p>
          You have already done the hard work. Tonight is about showing up tomorrow as the best version
          of yourself. Rest, breathe, and trust the preparation.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/what-to-bring-to-gcse-english-exam">What to bring to your GCSE English exam</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/dealing-with-exam-anxiety-gcse-english">Dealing with exam anxiety</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/last-minute-gcse-english-revision">Last-minute revision</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-memorise-quotes-gcse-english">How to memorise quotes</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Quick-fire quote review</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Run one final 5-minute spaced repetition drill in the app before you put your phone down.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/auth/signup"
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
