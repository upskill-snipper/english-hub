import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GCSE English Literature Set Texts List 2024 | The English Hub',
  description:
    'The full 2024 GCSE English Literature set texts list for AQA, Edexcel, OCR and Eduqas. Shakespeare, 19th-century novel, modern texts and poetry.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis/revision/gcse-english-literature-set-texts-list-2024',
  },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'GCSE English Literature Set Texts List 2024',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description:
      'Set texts for GCSE English Literature in 2024 across AQA, Edexcel, OCR and Eduqas.',
    mainEntityOfPage:
      'https://theenglishhub.app/analysis/revision/gcse-english-literature-set-texts-list-2024',
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/revision" className="hover:text-foreground">Revision &amp; Grade Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Set texts list 2024</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        GCSE English Literature set texts list 2024
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          All four major exam boards structure GCSE English Literature around four kinds of text: a
          Shakespeare play, a 19th-century novel, a modern text (prose or drama), and a poetry
          anthology. Within each category, schools choose from a menu set by the board. Below is the
          2024 set texts list for each major board, so you can check exactly what you need to revise.
        </p>

        <h2 className="text-xl font-semibold text-foreground">AQA (8702) 2024 set texts</h2>
        <p><strong className="text-foreground">Shakespeare:</strong> Macbeth, Romeo and Juliet, The Tempest, The Merchant of Venice, Much Ado About Nothing, Julius Caesar.</p>
        <p><strong className="text-foreground">19th-century novel:</strong> A Christmas Carol (Dickens), The Strange Case of Dr Jekyll and Mr Hyde (Stevenson), Great Expectations (Dickens), Jane Eyre (Bront&euml;), Frankenstein (Shelley), Pride and Prejudice (Austen), The Sign of the Four (Conan Doyle).</p>
        <p><strong className="text-foreground">Modern text (prose or drama):</strong> An Inspector Calls (Priestley), Blood Brothers (Russell), The History Boys (Bennett), DNA (Kelly), The Curious Incident of the Dog in the Night-Time (Stephens), A Taste of Honey (Delaney), Lord of the Flies (Golding), Animal Farm (Orwell), Never Let Me Go (Ishiguro), Anita and Me (Syal), Pigeon English (Kelman).</p>
        <p><strong className="text-foreground">Poetry anthologies:</strong> Power and Conflict OR Love and Relationships (each contains 15 poems).</p>

        <h2 className="text-xl font-semibold text-foreground">Edexcel (Pearson) 2024 set texts</h2>
        <p><strong className="text-foreground">Shakespeare:</strong> Macbeth, Romeo and Juliet, The Tempest, Much Ado About Nothing, Twelfth Night, The Merchant of Venice.</p>
        <p><strong className="text-foreground">19th-century novel:</strong> Jane Eyre (Bront&euml;), Great Expectations (Dickens), A Christmas Carol (Dickens), Dr Jekyll and Mr Hyde (Stevenson), Frankenstein (Shelley), Pride and Prejudice (Austen), Silas Marner (Eliot), The War of the Worlds (Wells).</p>
        <p><strong className="text-foreground">Modern drama / prose:</strong> An Inspector Calls, Hobson&rsquo;s Choice, Blood Brothers, Journey&rsquo;s End, Lord of the Flies, Animal Farm, The Whale Rider, I Know Why the Caged Bird Sings.</p>
        <p><strong className="text-foreground">Poetry anthology:</strong> Pearson Poetry Anthology &mdash; students choose one collection (Conflict, Relationships, Time &amp; Place, or Belonging).</p>

        <h2 className="text-xl font-semibold text-foreground">OCR 2024 set texts</h2>
        <p><strong className="text-foreground">Shakespeare:</strong> Macbeth, Romeo and Juliet, The Merchant of Venice, Much Ado About Nothing, The Tempest.</p>
        <p><strong className="text-foreground">19th-century novel:</strong> A Christmas Carol, Jane Eyre, Frankenstein, Pride and Prejudice, The Sign of the Four, The War of the Worlds.</p>
        <p><strong className="text-foreground">Modern text:</strong> An Inspector Calls, My Mother Said I Never Should, DNA, Animal Farm, Lord of the Flies, Never Let Me Go, Anita and Me.</p>
        <p><strong className="text-foreground">Poetry anthology:</strong> Love and Relationships OR Conflict (OCR anthology).</p>

        <h2 className="text-xl font-semibold text-foreground">WJEC Eduqas 2024 set texts</h2>
        <p><strong className="text-foreground">Shakespeare:</strong> Macbeth, Romeo and Juliet, Much Ado About Nothing, Henry V, The Merchant of Venice, Othello.</p>
        <p><strong className="text-foreground">19th-century novel:</strong> A Christmas Carol, Jane Eyre, Pride and Prejudice, Frankenstein, Silas Marner, The War of the Worlds.</p>
        <p><strong className="text-foreground">20th/21st-century drama / prose:</strong> An Inspector Calls, Blood Brothers, A Taste of Honey, Lord of the Flies, Anita and Me, Never Let Me Go.</p>
        <p><strong className="text-foreground">Poetry anthology:</strong> Eduqas Poetry Anthology (18 poems).</p>

        <h2 className="text-xl font-semibold text-foreground">The most commonly taught combination</h2>
        <p>
          By far the most common combination in English state schools is: AQA, Macbeth, A Christmas
          Carol, An Inspector Calls and Power and Conflict. This is the set that most online revision
          resources (including ours) focus on most heavily, because it&rsquo;s what the majority of
          students will sit.
        </p>

        <h2 className="text-xl font-semibold text-foreground">How to use this list</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Check with your teacher which texts you&rsquo;re actually studying.</li>
          <li>Find out which poetry anthology cluster your class is on.</li>
          <li>Identify any texts where you feel weakest and prioritise those in revision.</li>
          <li>Keep a paper copy of each set text on your desk during revision, even though you can&rsquo;t take it into the exam.</li>
        </ul>

        <p className="text-xs italic text-muted-foreground">
          This list reflects the 2024 GCSE English Literature specifications published by AQA, Pearson
          Edexcel, OCR and WJEC Eduqas. Always verify your specific text choices with your school, as
          schools may change texts across cohorts.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related guides</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/revision/all-gcse-english-exam-boards-compared">All exam boards compared</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/gcse-english-vs-english-language-vs-literature">Language vs Literature explained</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-get-grade-9-gcse-english-literature">How to get a Grade 9 in Literature</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/revision/how-to-memorise-quotes-gcse-english">How to memorise quotes</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Targeted revision for every set text</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The English Hub has analysis, quote banks and practice essays for every major set text.
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
