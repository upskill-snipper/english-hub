import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Verified Content',
  description:
    'Every quote, date, and biography on The English Hub is cross-checked against primary sources — Project Gutenberg, Folger Shakespeare Library, and official board syllabus PDFs.',
  alternates: { canonical: 'https://theenglishhub.app/about/verified-content' },
  openGraph: {
    title: 'Verified Content — The English Hub',
    description:
      'Every quote, date, and biography on The English Hub is cross-checked against primary sources.',
  },
}

export default function VerifiedContentPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.12em] text-emerald-800">
        <span aria-hidden="true">{'✓'}</span>
        <span>Verified content</span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        How we verify our content
      </h1>
      <p className="mt-4 text-base text-muted-foreground leading-relaxed">
        Most revision sites copy errors from each other. We don&rsquo;t. Every quote, date, and
        biographical fact on The English Hub is cross-checked against a primary source before it
        ships. This page explains how, with figures and the sources we trust.
      </p>

      <div className="mt-10 space-y-10">
        {/* By the numbers */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">By the numbers</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { stat: '108', label: 'Texts inventoried' },
              { stat: '36', label: 'Verified quotes' },
              { stat: '30', label: 'Common errors flagged & corrected' },
              { stat: '6', label: 'Public-domain full texts' },
              { stat: '70', label: 'Restricted-source stubs' },
              { stat: '17', label: 'Mapped publishers' },
            ].map(({ stat, label }) => (
              <div key={label} className="rounded-lg border border-border bg-card p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{stat}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sources we cross-check against */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">Sources we cross-check against</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We layer multiple authoritative sources so that no single error can slip through.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">Project Gutenberg &amp; Wikisource</strong> —
              public-domain primary texts (Dickens, Stevenson, Bront&euml;, Shelley, Conan Doyle).
            </li>
            <li>
              <strong className="text-foreground">Folger Shakespeare Library</strong> — the
              authoritative public-domain edition of every Shakespeare play we cover.
            </li>
            <li>
              <strong className="text-foreground">BBC Bitesize &amp; Poetry Archive</strong> —
              estate-licensed sources for restricted modern texts where Gutenberg cannot be used.
            </li>
            <li>
              <strong className="text-foreground">Official board syllabus PDFs</strong> — Cambridge
              International, Pearson Edexcel, AQA, OCR, and WJEC/Eduqas. The syllabus PDF is the
              ground-truth for set texts, assessment objectives, and grade boundaries.
            </li>
          </ul>
        </section>

        {/* Confidence levels */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">Source confidence levels</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Not every source is equal. We grade each fact by the strength of evidence behind it.
          </p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold text-foreground">HIGHEST</p>
              <p className="text-sm text-muted-foreground">
                Direct quotation from an official board syllabus PDF (e.g.&nbsp;Cambridge 0475).
              </p>
            </li>
            <li className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold text-foreground">HIGH</p>
              <p className="text-sm text-muted-foreground">
                Project Gutenberg, Wikisource, BBC Bitesize, or Poetry Archive.
              </p>
            </li>
            <li className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold text-foreground">MEDIUM</p>
              <p className="text-sm text-muted-foreground">
                LitCharts, PMT, RevisionWorld &mdash; only when cross-validated against a primary
                source.
              </p>
            </li>
            <li className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold text-foreground">LOW / FLAGGED</p>
              <p className="text-sm text-muted-foreground">
                Decomposition or single-source claims. These are flagged in our internal library and
                excluded from student-facing content until corroborated.
              </p>
            </li>
          </ul>
        </section>

        {/* Common errors */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">Common errors we flag</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            We&rsquo;ve catalogued 30 of the most common errors that propagate across revision sites
            &mdash; misattributed quotes, wrong dates, garbled biographies &mdash; and corrected
            each one against the primary source. The list lives in our internal Verified Library,
            and corrected facts feed every page on this site.
          </p>
        </section>

        {/* Reporting */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">Spotted something?</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            If a quote, date, or fact on this site doesn&rsquo;t match the primary source you
            expect, please tell us. We treat content errors as bugs and fix them quickly.
          </p>
          <p className="mt-3">
            <Link
              href="/help/report"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Report a content error &rarr;
            </Link>
          </p>
        </section>
      </div>
    </main>
  )
}
