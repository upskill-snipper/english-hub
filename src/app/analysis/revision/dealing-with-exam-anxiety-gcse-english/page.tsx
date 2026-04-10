import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dealing with Exam Anxiety in GCSE English | The English Hub',
  description:
    'Practical techniques for managing exam anxiety in GCSE English. Breathing, grounding, revision routines and when to ask for help, from GCSE examiners.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/dealing-with-exam-anxiety-gcse-english',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Dealing with Exam Anxiety in GCSE English',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'Evidence-based techniques for managing GCSE English exam anxiety.',
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/revision/dealing-with-exam-anxiety-gcse-english',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Dealing with exam anxiety</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Dealing with exam anxiety in GCSE English
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Exam anxiety is genuinely one of the most common reasons capable students underperform in GCSE
          English. Unlike maths, English requires you to generate original ideas and words under
          pressure, which is a cognitive load that anxiety attacks directly. The good news is that there
          are simple, evidence-based techniques you can practise in advance that will bring your nervous
          system back online in the exam room.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Understand what anxiety is actually doing</h2>
        <p>
          When you&rsquo;re anxious, your body releases cortisol and adrenaline. These make your heart
          race, your palms sweat, and your working memory shrink. Your brain is doing what it evolved to
          do: prepare you to fight or run. The problem is that there&rsquo;s nothing in the exam hall to
          fight or run from, so those resources are wasted. The goal of every anxiety technique is to
          tell your body that you&rsquo;re safe so it gives you your working memory back.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The 4-7-8 breathing technique</h2>
        <p>
          This is the single most effective quick-fix for in-exam panic. Breathe in quietly through your
          nose for four seconds. Hold your breath for seven seconds. Exhale slowly through your mouth
          for eight seconds. Repeat four times. This activates the parasympathetic nervous system &mdash;
          the part of you that controls &ldquo;rest and digest&rdquo; &mdash; and will physically lower
          your heart rate within 30 seconds.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Grounding: the 5-4-3-2-1 technique</h2>
        <p>
          If your mind goes blank, try to name: five things you can see, four things you can feel, three
          things you can hear, two things you can smell, and one thing you can taste. This snaps you out
          of the anxious loop and back into the room. It works because you can&rsquo;t name sensory
          input and spiral at the same time.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Reframe anxiety as excitement</h2>
        <p>
          Studies by Alison Wood Brooks at Harvard Business School found that students who said
          &ldquo;I&rsquo;m excited&rdquo; before an exam performed significantly better than those who
          said &ldquo;I&rsquo;m anxious,&rdquo; even though the physical sensations were identical. The
          trick is to tell your brain that the rapid heart rate is fuel for performance, not a warning
          signal.
        </p>

        <h2 className="text-xl font-semibold text-foreground">In the exam room: a step-by-step plan</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Take your seat. Do one round of 4-7-8 breathing before the paper is handed out.</li>
          <li>Read the full paper slowly. Do not start writing for the first two minutes.</li>
          <li>Choose your easiest question first to build confidence.</li>
          <li>If you panic mid-paper, stop, drop your pen, breathe for 30 seconds, and come back.</li>
          <li>Write your thesis first. Once you&rsquo;ve written one good sentence, your brain relaxes.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Prepare your nervous system in advance</h2>
        <p>
          Anxiety isn&rsquo;t just an in-exam problem; it&rsquo;s a chronic state that builds over
          weeks. In the month before the exam, make sure you&rsquo;re getting 8 hours of sleep, reducing
          caffeine, doing moderate exercise, and practising mock papers in silent conditions so the
          silence of the exam hall isn&rsquo;t an unfamiliar trigger. The more familiar the conditions,
          the less your body reacts to them.
        </p>

        <h2 className="text-xl font-semibold text-foreground">When to ask for help</h2>
        <p>
          If your anxiety is severe &mdash; panic attacks, insomnia that lasts more than a few days,
          inability to attend school or revise at all &mdash; please speak to a parent, your head of
          year, your GP, or a service like Young Minds (youngminds.org.uk). Exam anxiety is common and
          there is real support available, including access arrangements like rest breaks or a separate
          room for the exam.
        </p>

        <h2 className="text-xl font-semibold text-foreground">A final perspective</h2>
        <p>
          This one exam is not the end of the world. Universities, colleges and employers look at many
          things, and GCSE English can be retaken if it doesn&rsquo;t go as planned. Holding that
          perspective lightly in the back of your mind can take just enough pressure off to let you
          write better.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/night-before-gcse-english-exam">The night before the GCSE English exam</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/what-happens-if-you-fail-gcse-english">What happens if you fail GCSE English?</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/last-minute-gcse-english-revision">Last-minute revision</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-pass-gcse-english-grade-5">How to pass GCSE English</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Feel more in control</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Rehearse exam conditions with timed practice inside The English Hub &mdash; the more familiar the format, the less scary it feels.
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
