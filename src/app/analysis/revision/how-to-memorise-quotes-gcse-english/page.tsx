import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Memorise Quotes for GCSE English | The English Hub',
  description:
    'Examiner-written guide to memorising GCSE English quotes that actually stick. Flashcards, flexible quotes, sound anchoring and spaced repetition.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/how-to-memorise-quotes-gcse-english',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Memorise Quotes for GCSE English',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'Proven techniques for memorising GCSE English quotes for Literature exams.',
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/revision/how-to-memorise-quotes-gcse-english',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Memorising quotes</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How to memorise quotes for GCSE English
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Memorising quotes is the single most anxiety-inducing part of GCSE English Literature revision.
          Students worry they&rsquo;ll forget key quotations under pressure, or they hoard too many and
          burn out trying to learn them all. The good news is that modern memory science gives us very
          clear guidance on how to memorise quotes quickly and keep them locked in until exam day.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Quality over quantity</h2>
        <p>
          You do not need 50 quotes per text. You need 10&ndash;12 truly flexible quotes that you can use
          to answer multiple question types. A good flexible quote has at least two analysable features
          (a metaphor and a rhythm, or an image and an alliteration) so it works for questions on theme,
          character, context or structure. Spend an hour choosing the right 10 quotes and memorising them
          will be three times easier.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The four memory techniques that work</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-foreground">Spaced repetition.</strong> Review a quote 1 day after
            first learning it, then 3 days, then 7, then 14. This mimics how the brain encodes long-term
            memories and is far more efficient than cramming.
          </li>
          <li>
            <strong className="text-foreground">Active recall.</strong> Cover the quote with your hand
            and try to say or write it from memory. If you can&rsquo;t, check, then try again in 30
            seconds. The effort of retrieval strengthens the memory more than re-reading ever will.
          </li>
          <li>
            <strong className="text-foreground">Sound anchoring.</strong> Say the quote out loud. The
            motor and auditory memory of your own voice reinforces the visual memory and acts as a
            backup in the exam room.
          </li>
          <li>
            <strong className="text-foreground">Chunking.</strong> Break long quotes into two or three
            musical phrases. Learn them as a rhythm, not a string of words.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">The flashcard system</h2>
        <p>
          Old-school paper flashcards still work brilliantly. On the front, write the quote. On the back,
          write the speaker, the moment, a one-word theme tag (ambition, guilt, kingship) and one
          technique you could analyse. Review your deck daily for five minutes using active recall. Move
          quotes you&rsquo;ve nailed to a &ldquo;weekly&rdquo; pile and keep struggling ones in a
          &ldquo;daily&rdquo; pile.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The write-it-out method</h2>
        <p>
          Every evening, write your target quotes from memory on a blank sheet. The physical act of
          writing engages motor memory, and the gaps you leave immediately show you which quotes need
          more work. This single habit, done daily for two weeks, will lock in a full Literature quote
          bank.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Mnemonics and imagery</h2>
        <p>
          For stubborn quotes, invent a vivid mental image. To remember &ldquo;vaulting ambition,&rdquo;
          picture a horse vaulting over a fence and falling on its rider. Your brain remembers pictures
          better than words. The sillier the image, the more it sticks.
        </p>

        <h2 className="text-xl font-semibold text-foreground">The 30-day memorisation plan</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Days 1&ndash;7: Choose and learn 10 quotes per text. Five minutes a day, per text.</li>
          <li>Days 8&ndash;14: Spaced recall. Review any quote you miss immediately.</li>
          <li>Days 15&ndash;21: Use quotes in timed paragraph writing.</li>
          <li>Days 22&ndash;30: Light daily review. Add 2&ndash;3 optional extra quotes.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">A note on partial quotes</h2>
        <p>
          Examiners will accept short, partial quotes as long as you mark them clearly with quotation
          marks and integrate them into your sentence. &ldquo;Vaulting ambition&rdquo; on its own, used
          well, scores exactly the same as the full &ldquo;I have no spur / To prick the sides of my
          intent, but only / Vaulting ambition&rdquo; line. Don&rsquo;t burn memory on extra words you
          won&rsquo;t use.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/spaced-repetition-for-gcse-english">Spaced repetition for GCSE English</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/active-recall-techniques-gcse-english">Active recall techniques for GCSE English</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/mind-map-gcse-english-revision">Mind maps for GCSE English</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-get-grade-9-gcse-english-literature">How to get a Grade 9</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Drill quotes inside The English Hub</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Our quote flashcards use spaced repetition automatically, so you always review the right quote at the right time.
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
