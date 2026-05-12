import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { tMany } from '@/lib/i18n/t'

// 2026-05-04: Founder-section removed at the founder's request — the
// site does not currently make any examiner / qualification claims,
// and the founder's name is not surfaced. The page is purely
// informational about the product itself.
export const metadata: Metadata = {
  title: 'About — The English Hub',
  description:
    'How The English Hub works, who built it, and why it focuses on GCSE & IGCSE English revision.',
  alternates: { canonical: 'https://theenglishhub.app/about' },
  openGraph: {
    title: 'About — The English Hub',
    description:
      'How The English Hub works, who built it, and why it focuses on GCSE & IGCSE English revision.',
    url: 'https://theenglishhub.app/about',
    images: [
      {
        url: '/api/og?title=About+The+English+Hub&subtitle=Built+around+how+examiners+actually+mark',
        width: 1200,
        height: 630,
        alt: 'About The English Hub — built around how examiners actually mark',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — The English Hub',
    description:
      'How The English Hub works, who built it, and why it focuses on GCSE & IGCSE English revision.',
    images: [
      '/api/og?title=About+The+English+Hub&subtitle=Built+around+how+examiners+actually+mark',
    ],
  },
}

export default async function AboutPage() {
  const [
    h1,
    missionH2,
    missionBody,
    offerH2,
    offerBody,
    approachH2,
    approachIntro,
    approachExamBoardName,
    approachExamBoardDesc,
    approachAiName,
    approachAiDesc,
    approachMockName,
    approachMockDesc,
    approachGamesName,
    approachGamesDesc,
    whoH2,
    whoBody,
    valuesH2,
    valueQualityName,
    valueQualityDesc,
    valueAccessName,
    valueAccessDesc,
    valueEvidenceName,
    valueEvidenceDesc,
    valueAlignName,
    valueAlignDesc,
    glanceH2,
    statCoursesLabel,
    statBoardsLabel,
    statAiLabel,
    statMockLabel,
    statAiValue,
    statMockValue,
    entityH2,
    entityTradingLine,
    entityCompanyLine,
    entityIcoLine,
    entityOfficeLine,
    complianceH2,
    compDpia,
    compSafeguard,
    compVpat,
    compAccess,
    compCyber,
    compDpa,
    comingSoon,
    dpaAvailable,
    breadcrumbHome,
    breadcrumbAbout,
  ] = await tMany([
    'about.title',
    'about.mission.h2',
    'about.mission.body',
    'about.offer.h2',
    'about.offer.body',
    'about.approach.h2',
    'about.approach.intro',
    'about.approach.exam_board.name',
    'about.approach.exam_board.desc',
    'about.approach.ai.name',
    'about.approach.ai.desc',
    'about.approach.mock.name',
    'about.approach.mock.desc',
    'about.approach.games.name',
    'about.approach.games.desc',
    'about.who.h2',
    'about.who.body',
    'about.values.h2',
    'about.values.quality.name',
    'about.values.quality.desc',
    'about.values.access.name',
    'about.values.access.desc',
    'about.values.evidence.name',
    'about.values.evidence.desc',
    'about.values.align.name',
    'about.values.align.desc',
    'about.glance.h2',
    'about.glance.courses_label',
    'about.glance.boards_label',
    'about.glance.ai_label',
    'about.glance.mock_label',
    'about.glance.ai_value',
    'about.glance.mock_value',
    'about.entity.h2',
    'about.entity.trading',
    'about.entity.company_no',
    'about.entity.ico',
    'about.entity.office',
    'about.compliance.h2',
    'about.compliance.dpia',
    'about.compliance.safeguard',
    'about.compliance.vpat',
    'about.compliance.access_statement',
    'about.compliance.cyber',
    'about.compliance.dpa',
    'about.compliance.coming_soon',
    'about.compliance.dpa_available',
    'nav.home',
    'footer.link.about',
  ])

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: breadcrumbHome, url: 'https://theenglishhub.app' },
          { name: breadcrumbAbout, url: 'https://theenglishhub.app/about' },
        ]}
      />
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{h1}</h1>

      <div className="mt-8 space-y-8">
        {/* Mission */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{missionH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{missionBody}</p>
        </section>

        {/* What We Offer */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{offerH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{offerBody}</p>
        </section>

        {/* Our Approach */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{approachH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{approachIntro}</p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">{approachExamBoardName}</strong> —{' '}
              {approachExamBoardDesc}
            </li>
            <li>
              <strong className="text-foreground">{approachAiName}</strong> — {approachAiDesc}
            </li>
            <li>
              <strong className="text-foreground">{approachMockName}</strong> — {approachMockDesc}
            </li>
            <li>
              <strong className="text-foreground">{approachGamesName}</strong> — {approachGamesDesc}
            </li>
          </ul>
        </section>

        {/* Who It's For */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{whoH2}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{whoBody}</p>
        </section>

        {/* Our Values */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{valuesH2}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">{valueQualityName}</strong> — {valueQualityDesc}
            </li>
            <li>
              <strong className="text-foreground">{valueAccessName}</strong> — {valueAccessDesc}
            </li>
            <li>
              <strong className="text-foreground">{valueEvidenceName}</strong> — {valueEvidenceDesc}
            </li>
            <li>
              <strong className="text-foreground">{valueAlignName}</strong> — {valueAlignDesc}
            </li>
          </ul>
        </section>

        {/* At a Glance */}
        <section>
          <h2 className="text-xl font-semibold text-foreground">{glanceH2}</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { stat: '15+', label: statCoursesLabel },
              { stat: '5', label: statBoardsLabel },
              { stat: statAiValue, label: statAiLabel },
              { stat: statMockValue, label: statMockLabel },
            ].map(({ stat, label }) => (
              <div key={label} className="rounded-lg border border-border bg-card p-4 text-center">
                <p className="text-2xl font-bold text-foreground">{stat}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Entity details — reconciled against Companies House 2026-04-24 */}
        <section id="entity">
          <h2 className="text-xl font-semibold text-foreground">{entityH2}</h2>
          <ul className="mt-4 space-y-1 text-muted-foreground leading-relaxed">
            <li>{entityTradingLine}</li>
            <li>{entityCompanyLine}</li>
            <li>{entityIcoLine}</li>
            <li>{entityOfficeLine}</li>
          </ul>
        </section>

        {/* Compliance */}
        <section id="compliance">
          <h2 className="text-xl font-semibold text-foreground">{complianceH2}</h2>
          {/* Compliance documents will be published here once finalised. See business-docs/. */}
          <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>
              {compDpia}{' '}
              <span className="text-xs uppercase tracking-wide text-muted-foreground/70">
                — {comingSoon}
              </span>
            </li>
            <li>
              {compSafeguard}{' '}
              <span className="text-xs uppercase tracking-wide text-muted-foreground/70">
                — {comingSoon}
              </span>
            </li>
            <li>
              {compVpat}{' '}
              <span className="text-xs uppercase tracking-wide text-muted-foreground/70">
                — {comingSoon}
              </span>
            </li>
            <li>
              <a className="underline hover:text-foreground" href="/accessibility">
                {compAccess}
              </a>
            </li>
            <li>
              {compCyber}{' '}
              <span className="text-xs uppercase tracking-wide text-muted-foreground/70">
                — {comingSoon}
              </span>
            </li>
            <li>
              {compDpa}{' '}
              <span className="text-xs uppercase tracking-wide text-muted-foreground/70">
                — {dpaAvailable}
              </span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
