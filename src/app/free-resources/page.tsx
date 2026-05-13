import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import LevelChip, { type Level } from '@/components/home/LevelChip'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { tMany } from '@/lib/i18n/t'

/* ───────────────────── Metadata ───────────────────── */

const SITE_URL = 'https://theenglishhub.app'
const PAGE_URL = `${SITE_URL}/free-resources`
const OG_IMAGE =
  '/api/og?title=Free+GCSE+%26+IGCSE+English+resources&subtitle=Quote+banks,+essay+plans,+character+maps'

export const metadata: Metadata = {
  title: 'Free GCSE & IGCSE English resources — The English Hub',
  description:
    'Free quote banks, essay plan workbooks, character maps, and revision packs for GCSE and IGCSE English. Coming soon — get notified.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Free GCSE & IGCSE English resources — The English Hub',
    description:
      'Free quote banks, essay plan workbooks, character maps, and revision packs for GCSE and IGCSE English. Coming soon — get notified.',
    url: PAGE_URL,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Free GCSE and IGCSE English resources — The English Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free GCSE & IGCSE English resources — The English Hub',
    description:
      'Free quote banks, essay plan workbooks, character maps, and revision packs for GCSE and IGCSE English. Coming soon — get notified.',
    images: [OG_IMAGE],
  },
}

/* ───────────────────── Resource data ─────────────────────
 *
 * Six representative cards stand in for the planned lead-magnet library.
 * Each card is a "coming soon" stub: factual title, level chip, exam-board
 * scope, and a short factual description of the planned content. The
 * email-capture surface was removed on 4 May 2026 — the founder doesn't
 * want to be manually emailing PDFs to every sign-up. When the automated
 * delivery system is built, the cards can be re-enabled with a download
 * link instead of a "notify me" form.
 */

type ResourceLevel = Extract<Level, 'gcse' | 'igcse'>

type Resource = {
  id: string
  title: string
  level: ResourceLevel
  boardScope: string
  description: string
}

type ResourceDef = {
  id: string
  titleKey: string
  level: ResourceLevel
  boardScopeKey: string
  descKey: string
}

const RESOURCE_DEFS: ResourceDef[] = [
  {
    id: 'macbeth-quote-bank',
    titleKey: 'free_res.macbeth_qb.title',
    level: 'gcse',
    boardScopeKey: 'free_res.scope.aqa_edx_ocr_eduqas',
    descKey: 'free_res.macbeth_qb.desc',
  },
  {
    id: 'power-and-conflict-comparison-grid',
    titleKey: 'free_res.pc_grid.title',
    level: 'gcse',
    boardScopeKey: 'free_res.scope.aqa',
    descKey: 'free_res.pc_grid.desc',
  },
  {
    id: 'an-inspector-calls-character-map',
    titleKey: 'free_res.aic_map.title',
    level: 'gcse',
    boardScopeKey: 'free_res.scope.multi',
    descKey: 'free_res.aic_map.desc',
  },
  {
    id: 'ao2-mark-scheme-decoder',
    titleKey: 'free_res.ao2.title',
    level: 'gcse',
    boardScopeKey: 'free_res.scope.multi',
    descKey: 'free_res.ao2.desc',
  },
  {
    id: 'edexcel-igcse-4et1-anthology-cheatsheet',
    titleKey: 'free_res.edx_4et1.title',
    level: 'igcse',
    boardScopeKey: 'free_res.scope.pearson_edexcel',
    descKey: 'free_res.edx_4et1.desc',
  },
  {
    id: 'cambridge-igcse-0500-vs-0990-difference-guide',
    titleKey: 'free_res.cie_diff.title',
    level: 'igcse',
    boardScopeKey: 'free_res.scope.cambridge',
    descKey: 'free_res.cie_diff.desc',
  },
]

/* ───────────────────── Page ───────────────────── */

export default async function FreeResourcesPage() {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const resourceKeys = RESOURCE_DEFS.flatMap((r) => [r.titleKey, r.boardScopeKey, r.descKey])
  const baseKeys = [
    'free_res.crumb.home',
    'free_res.crumb.self',
    'free_res.eyebrow',
    'free_res.h1',
    'free_res.lead',
    'free_res.grid_sr',
    'free_res.coming_soon',
    'free_res.notify_when',
    'free_res.launch_eyebrow',
    'free_res.notify_h2',
    'free_res.notify_lead',
  ]
  const v = await tMany([...baseKeys, ...resourceKeys])
  let i = 0
  const tCrumbHome = v[i++]!
  const tCrumbSelf = v[i++]!
  const tEyebrow = v[i++]!
  const tH1 = v[i++]!
  const tLead = v[i++]!
  const tGridSr = v[i++]!
  const tComingSoon = v[i++]!
  const tNotifyWhen = v[i++]!
  const tLaunchEyebrow = v[i++]!
  const tNotifyH2 = v[i++]!
  const tNotifyLead = v[i++]!

  const RESOURCES: Resource[] = RESOURCE_DEFS.map((r) => ({
    id: r.id,
    title: v[i++]!,
    level: r.level,
    boardScope: v[i++]!,
    description: v[i++]!,
  }))

  return (
    <main className="min-h-screen bg-ink-950">
      <BreadcrumbJsonLd
        nonce={nonce}
        items={[
          { name: tCrumbHome, url: SITE_URL },
          { name: tCrumbSelf, url: PAGE_URL },
        ]}
      />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section aria-labelledby="free-resources-heading" className="bg-ink-950 pb-10 sm:pb-14">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-12 sm:pt-16">
          <nav className="mb-6 text-xs text-cream-200/55" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-cream-50 underline-offset-4 hover:underline">
              {tCrumbHome}
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-cream-100/85">{tCrumbSelf}</span>
          </nav>
          <div className="text-center mb-2">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase mb-3 text-emerald-300">
              {tEyebrow}
            </p>
            <h1
              id="free-resources-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-cream-50 leading-tight"
            >
              {tH1}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-cream-100/75 leading-relaxed">
              {tLead}
            </p>
          </div>
        </div>
      </section>

      {/* ── Resource grid ───────────────────────────────────────────── */}
      <section
        aria-labelledby="resource-grid-heading"
        className="bg-ink-950 pb-14 sm:pb-20 border-t border-cream-200/10 pt-12 sm:pt-16"
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <h2 id="resource-grid-heading" className="sr-only">
            {tGridSr}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {RESOURCES.map((r) => (
              <li
                key={r.id}
                className={`group relative flex h-full flex-col gap-4 rounded-2xl border border-cream-200/10 bg-cream-50/[0.02] p-5 sm:p-6 transition-colors ${
                  r.level === 'gcse' ? 'hover:border-emerald-400/30' : 'hover:border-clay-300/30'
                }`}
              >
                <LevelChip level={r.level} className="absolute right-4 top-4" />

                <div className="pr-16">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-cream-50 leading-tight">
                    {r.title}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] tracking-[0.12em] uppercase text-cream-200/55">
                    {r.boardScope}
                  </p>
                </div>

                <span
                  className="inline-flex w-fit items-center rounded-full border border-clay-300/30 bg-clay-300/[0.08] px-2.5 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.14em] leading-none text-clay-200"
                  aria-label={tComingSoon}
                >
                  {tComingSoon}
                </span>

                <p className="text-sm text-cream-100/70 leading-relaxed">{r.description}</p>

                <span
                  className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium ${
                    r.level === 'gcse' ? 'text-emerald-300' : 'text-clay-300'
                  }`}
                  aria-hidden="true"
                >
                  {tNotifyWhen} <span aria-hidden="true">&darr;</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Email capture ───────────────────────────────────────────── */}
      <section
        aria-labelledby="notify-heading"
        className="border-t border-cream-200/10 bg-cream-50/[0.02]"
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] tracking-[0.14em] uppercase mb-3 text-emerald-300">
                {tLaunchEyebrow}
              </p>
              <h2
                id="notify-heading"
                className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-cream-50 leading-tight"
              >
                {tNotifyH2}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-cream-100/75 leading-relaxed">
                {tNotifyLead}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
