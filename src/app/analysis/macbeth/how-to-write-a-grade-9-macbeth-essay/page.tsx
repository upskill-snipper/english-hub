import type { Metadata } from 'next'
import Link from 'next/link'
import { AnalysisBoardGate } from '../_components/AnalysisBoardGate'

export const metadata: Metadata = {
  title: 'How to Write a Grade 9 Macbeth Essay | The English Hub',
  description:
    'Step-by-step guide to writing a Grade 9 GCSE Macbeth essay. Structure, thesis, quotes, context and examiner tips.',
  alternates: { canonical: 'https://theenglishhub.app/analysis/macbeth/how-to-write-a-grade-9-macbeth-essay' },
}

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Write a Grade 9 Macbeth Essay',
    author: { '@type': 'Organization', name: 'The English Hub — GCSE Examiners' },
    publisher: { '@type': 'Organization', name: 'The English Hub' },
    description: 'Step-by-step guide to writing a Grade 9 GCSE Macbeth essay.',
    mainEntityOfPage: 'https://theenglishhub.app/analysis/macbeth/how-to-write-a-grade-9-macbeth-essay',
  }
  return (
    <AnalysisBoardGate>
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/analysis/macbeth" className="hover:text-foreground">Macbeth Analysis</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Grade 9 essay guide</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How to write a Grade 9 Macbeth essay
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">Written by GCSE examiners</p>

      <article className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          A Grade 9 Macbeth essay is not made of &ldquo;more quotes&rdquo; or
          &ldquo;harder words.&rdquo; It is made of a clear argument, precise evidence
          and context that pushes the argument forward. This guide walks you through
          the structure we teach at The English Hub and shows you exactly what
          examiners are looking for.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Step 1: decode the question</h2>
        <p>
          Underline the question&rsquo;s keywords. If it says &ldquo;How does
          Shakespeare present ambition&rdquo;, the word that matters most is
          &ldquo;how.&rdquo; Your essay is about methods, not just content. You should
          already be thinking: language, structure, form, context.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Step 2: write a thesis statement</h2>
        <p>
          A thesis is a single sentence that sums up your entire argument. Grade 9
          theses are usually conceptual rather than descriptive. Compare:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Grade 6:</strong> Macbeth is very ambitious and this leads to his downfall.</li>
          <li><strong className="text-foreground">Grade 9:</strong> Shakespeare presents ambition not as a simple vice but as a force that corrupts moral perception itself, so that by Act 5 Macbeth cannot tell the difference between his future and his damnation.</li>
        </ul>
        <p>
          Your thesis should tell the examiner what you think Shakespeare is
          <em> doing</em> with the theme, not just what is happening in the play.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Step 3: plan three clear arguments</h2>
        <p>
          Each argument becomes one main paragraph. Aim for a structural journey: how
          does the theme begin, develop and resolve? For ambition, that might be
          &ldquo;planted by the witches&rdquo; &rarr; &ldquo;activated by Lady Macbeth&rdquo;
          &rarr; &ldquo;emptied of meaning in the Tomorrow soliloquy.&rdquo; This gives
          your essay shape.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Step 4: build each paragraph with PEEL+C</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-foreground">Point</strong> &mdash; a single sentence arguing what Shakespeare is doing.</li>
          <li><strong className="text-foreground">Evidence</strong> &mdash; a short, embedded quotation.</li>
          <li><strong className="text-foreground">Explanation</strong> &mdash; zoom in on a single word or device.</li>
          <li><strong className="text-foreground">Link</strong> &mdash; back to the thesis.</li>
          <li><strong className="text-foreground">Context</strong> &mdash; one specific Jacobean idea that strengthens the point.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Step 5: use context that earns marks</h2>
        <p>
          Context is not &ldquo;Shakespeare was born in 1564.&rdquo; It is Jacobean
          beliefs that shape how the original audience would have read the line.
          Useful contexts for Macbeth include: the divine right of kings, the
          Gunpowder Plot of 1605, King James I&rsquo;s <em>Daemonologie</em>, the
          Great Chain of Being, and Jacobean gender expectations. Drop these in where
          they support your argument, not as stand-alone paragraphs.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Step 6: analyse method, not content</h2>
        <p>
          A Grade 9 zoom-in goes below the surface of the quote. Instead of writing
          &ldquo;this shows Macbeth is afraid&rdquo;, write about the device.
          &ldquo;Shakespeare gives Macbeth a rhetorical question, which dramatises a
          conscience debating itself in real time.&rdquo; Always name what
          Shakespeare <em>does</em>.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Step 7: embed quotations fluently</h2>
        <p>
          Long dropped quotes waste time. Aim for short, embedded evidence:
          Shakespeare uses the verb &ldquo;vaulting&rdquo; to&hellip; This is faster,
          looks more mature, and lets you analyse a single word in detail.
        </p>

        <h2 className="text-xl font-semibold text-foreground">Step 8: write a conclusion that lands a verdict</h2>
        <p>
          Do not summarise. End with a sentence that answers the question with
          conviction and references Shakespeare&rsquo;s purpose. For example: &ldquo;By
          the Tomorrow soliloquy, ambition has been exposed as the engine of its own
          destruction, and Shakespeare leaves a Jacobean audience with a chilling
          reinforcement of the divine order James I claimed to embody.&rdquo;
        </p>

        <h2 className="text-xl font-semibold text-foreground">Common mistakes to avoid</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Writing a plot summary instead of an argument.</li>
          <li>Using context as a stand-alone paragraph disconnected from the quote.</li>
          <li>Starting every sentence with &ldquo;This shows that&hellip;&rdquo;.</li>
          <li>Memorising long quotes instead of sharp, embeddable fragments.</li>
          <li>Ignoring structure and form &mdash; these are often the difference between 7 and 9.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">Final check before you leave the exam hall</h2>
        <p>
          Read your introduction and conclusion side by side. Do they agree? Does your
          thesis actually answer the question? Have you named Shakespeare as the
          author doing something, not just described what happens in the play? If all
          three answers are yes, you have a Grade 9 essay.
        </p>
      </article>

      <section className="mt-12 rounded-xl border border-border bg-muted/40 p-6">
        <h2 className="text-xl font-semibold text-foreground">Related Macbeth analyses</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/ambition-theme-analysis">Ambition theme analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/guilt-theme-analysis">Guilt theme analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/macbeth-character-analysis">Macbeth character analysis</Link></li>
          <li><Link className="text-primary hover:underline" href="/analysis/macbeth/lady-macbeth-character-analysis">Lady Macbeth character analysis</Link></li>
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-foreground">Revise the whole play</h2>
        <p className="mt-2 text-sm text-muted-foreground">For plot, context and act-by-act notes, head to our full Macbeth revision notes.</p>
        <div className="mt-4">
          <Link href="/resources/revision-notes/macbeth" className="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/85">
            Open Macbeth revision notes
          </Link>
        </div>
      </section>
    </main>
    </AnalysisBoardGate>
  )
}
