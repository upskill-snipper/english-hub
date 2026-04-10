import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mind Maps for GCSE English Revision | The English Hub',
  description:
    'How to use mind maps for GCSE English Literature revision. Themes, characters and quotes, with worked examples by GCSE examiners.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/mind-map-gcse-english-revision',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mind Maps for GCSE English Revision',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'A guide to using mind maps for GCSE English revision, with worked examples for Macbeth and A Christmas Carol.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/revision/mind-map-gcse-english-revision',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Mind maps</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Mind maps for GCSE English revision
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Mind maps are one of the most popular revision tools for GCSE English, and with good reason:
          they visually show the connections between themes, characters and quotations in a way linear
          notes can&rsquo;t. Done well, a mind map compresses an entire text onto a single sheet. Done
          badly, a mind map is just a prettier version of copying out your notes. The difference comes
          down to whether you create it actively from memory or passively from your textbook.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The one rule of effective mind mapping</h2>
        <p>
          Never make a mind map while looking at your notes. Always build it from memory first, then
          check and add what you missed. This simple shift turns mind mapping from passive copying into
          an active recall exercise, which is the whole reason it works.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Theme-based mind maps</h2>
        <p>
          Put a theme in the centre of your page (ambition, guilt, kingship). Around it, draw four
          branches: key characters who embody the theme, key quotations, context that supports it and
          essay points you could make. Each branch gets 3&ndash;5 leaves. This format forces you to
          think in essay shapes from the start.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Character mind maps</h2>
        <p>
          Put a character in the centre. Branches: key quotations, key moments, relationships with other
          characters, how they change across the play, and authorial intention. This layout is
          particularly useful for revising Shakespeare texts where you need to track character arcs
          across five acts.
        </p>

        <h2 className="text-xl font-semibold text-foreground">A worked example: Macbeth and ambition</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Centre: AMBITION</li>
          <li>Branch 1 &mdash; Characters: Macbeth, Lady Macbeth, Banquo (rejects ambition), Macduff (restorative).</li>
          <li>Branch 2 &mdash; Quotes: &ldquo;vaulting ambition&rdquo;, &ldquo;unsex me here&rdquo;, &ldquo;milk of human kindness&rdquo;, &ldquo;screw your courage to the sticking-place&rdquo;.</li>
          <li>Branch 3 &mdash; Context: Jacobean Divine Right, Gunpowder Plot, James I&rsquo;s interest in regicide.</li>
          <li>Branch 4 &mdash; Essay points: ambition inverts nature, ambition is gendered, ambition is punished, ambition is contagious.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Digital vs paper mind maps</h2>
        <p>
          Research suggests that hand-drawn mind maps are slightly more effective for memory than
          digital ones, probably because the physical act of drawing slows you down and engages motor
          memory. However, digital tools make it easier to rearrange and share. For GCSE, we recommend
          paper for first drafts and digital only if you want a neat final version to revise from later.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How many mind maps do you need?</h2>
        <p>
          Fewer than most students think. For Literature, aim for 3&ndash;4 mind maps per text: one per
          major theme, plus one per major character. For Language, mind maps are less useful because the
          paper is skills-based, although you can usefully map out creative writing openings.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Common mind mapping mistakes</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Making them too pretty. Spend the time on content, not colour.</li>
          <li>Including entire quotes rather than just two or three words per branch.</li>
          <li>Mapping from the book instead of from memory.</li>
          <li>Only making them once and never revisiting them.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">The weekly mind map habit</h2>
        <p>
          Every Sunday during the revision period, pick one theme or character and redraw its mind map
          from scratch on a blank sheet, without checking your old one. Compare the two afterwards. This
          weekly ritual is a very efficient form of retrieval practice and tells you exactly where your
          knowledge has faded.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/active-recall-techniques-gcse-english">Active recall techniques</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/spaced-repetition-for-gcse-english">Spaced repetition for GCSE English</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-memorise-quotes-gcse-english">How to memorise quotes</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-revision-timetable-template">Revision timetable template</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Turn mind maps into full essays</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The English Hub helps you go from theme map to Grade 9 essay paragraph in minutes.
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
