import type { Metadata } from 'next'
import Link from 'next/link'
import { tMany } from '@/lib/i18n/t'

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

// 2026-05-13: Wired through i18n (`about.verified.*` namespace). All
// user-facing strings route through the dictionary so AR / EN flips
// in step with the rest of the site.

export default async function VerifiedContentPage() {
  const [
    badge,
    h1,
    intro,
    numbersH2,
    numbersTextsLabel,
    numbersQuotesLabel,
    numbersErrorsLabel,
    numbersPublicDomainLabel,
    numbersRestrictedLabel,
    numbersPublishersLabel,
    sourcesH2,
    sourcesLede,
    sourceGutenbergStrong,
    sourceGutenbergBody,
    sourceFolgerStrong,
    sourceFolgerBody,
    sourceBbcStrong,
    sourceBbcBody,
    sourceBoardStrong,
    sourceBoardBody,
    confidenceH2,
    confidenceLede,
    confidenceHighestLabel,
    confidenceHighestBody,
    confidenceHighLabel,
    confidenceHighBody,
    confidenceMediumLabel,
    confidenceMediumBody,
    confidenceLowLabel,
    confidenceLowBody,
    errorsH2,
    errorsBody,
    reportH2,
    reportBody,
    reportCta,
  ] = await tMany([
    'about.verified.badge',
    'about.verified.h1',
    'about.verified.intro',
    'about.verified.numbers.h2',
    'about.verified.numbers.texts_label',
    'about.verified.numbers.quotes_label',
    'about.verified.numbers.errors_label',
    'about.verified.numbers.public_domain_label',
    'about.verified.numbers.restricted_label',
    'about.verified.numbers.publishers_label',
    'about.verified.sources.h2',
    'about.verified.sources.lede',
    'about.verified.sources.gutenberg_strong',
    'about.verified.sources.gutenberg_body',
    'about.verified.sources.folger_strong',
    'about.verified.sources.folger_body',
    'about.verified.sources.bbc_strong',
    'about.verified.sources.bbc_body',
    'about.verified.sources.board_strong',
    'about.verified.sources.board_body',
    'about.verified.confidence.h2',
    'about.verified.confidence.lede',
    'about.verified.confidence.highest_label',
    'about.verified.confidence.highest_body',
    'about.verified.confidence.high_label',
    'about.verified.confidence.high_body',
    'about.verified.confidence.medium_label',
    'about.verified.confidence.medium_body',
    'about.verified.confidence.low_label',
    'about.verified.confidence.low_body',
    'about.verified.errors.h2',
    'about.verified.errors.body',
    'about.verified.report.h2',
    'about.verified.report.body',
    'about.verified.report.cta',
  ])

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-mono uppercase tracking-[0.12em] text-emerald-800">
        <span aria-hidden="true">{'✓'}</span>
        <span>{badge}</span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{h1}</h1>
      <p className="mt-4 text-base text-muted-foreground leading-relaxed">{intro}</p>

      <div className="mt-10 space-y-10">
        {/* By the numbers */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{numbersH2}</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { stat: '108', label: numbersTextsLabel },
              { stat: '36', label: numbersQuotesLabel },
              { stat: '30', label: numbersErrorsLabel },
              { stat: '6', label: numbersPublicDomainLabel },
              { stat: '70', label: numbersRestrictedLabel },
              { stat: '17', label: numbersPublishersLabel },
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
          <h2 className="text-xl font-semibold text-foreground">{sourcesH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{sourcesLede}</p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">{sourceGutenbergStrong}</strong> —{' '}
              {sourceGutenbergBody}
            </li>
            <li>
              <strong className="text-foreground">{sourceFolgerStrong}</strong> — {sourceFolgerBody}
            </li>
            <li>
              <strong className="text-foreground">{sourceBbcStrong}</strong> — {sourceBbcBody}
            </li>
            <li>
              <strong className="text-foreground">{sourceBoardStrong}</strong> — {sourceBoardBody}
            </li>
          </ul>
        </section>

        {/* Confidence levels */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{confidenceH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{confidenceLede}</p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold text-foreground">{confidenceHighestLabel}</p>
              <p className="text-sm text-muted-foreground">{confidenceHighestBody}</p>
            </li>
            <li className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold text-foreground">{confidenceHighLabel}</p>
              <p className="text-sm text-muted-foreground">{confidenceHighBody}</p>
            </li>
            <li className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold text-foreground">{confidenceMediumLabel}</p>
              <p className="text-sm text-muted-foreground">{confidenceMediumBody}</p>
            </li>
            <li className="rounded-lg border border-border bg-card p-4">
              <p className="font-semibold text-foreground">{confidenceLowLabel}</p>
              <p className="text-sm text-muted-foreground">{confidenceLowBody}</p>
            </li>
          </ul>
        </section>

        {/* Common errors */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{errorsH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{errorsBody}</p>
        </section>

        {/* Reporting */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{reportH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{reportBody}</p>
          <p className="mt-3">
            <Link
              href="/help/report"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              {reportCta} &rarr;
            </Link>
          </p>
        </section>
      </div>
    </main>
  )
}
