import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Compass,
  FileText,
  GraduationCap,
  Languages,
  Plane,
  Target,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'

// ─── UK Readiness Programme - overview / landing (Server Component) ──────────
// A single coherent overview that ties the four-domain UK Readiness programme
// together and links to each existing tool plus the Readiness Report itself.
// The two domains with no dedicated guided tool (English readiness and
// Application readiness) get concise self-authored guidance here — what "ready"
// looks like, the common gaps, and the next step. The visa and transition
// domains are NOT duplicated; we summarise and link out to their tools.
//
// Server Component so the copy renders statically for SEO. Exactly one <h1>.
// Title + canonical live in layout.tsx. Inline English copy (allowed).
// ────────────────────────────────────────────────────────────────────────────

// Structural metadata only. Every piece of user-facing copy is referenced by
// an i18n key (resolved server-side via `await t(...)` in the async page) and
// passed down to DomainSection pre-resolved. Counts in *ReadyCount / *GapsCount
// drive how many `ready.N` / `gaps.N` keys to resolve.
interface DomainGuideKeys {
  readyCount: number
  gapsCount: number
}

interface Domain {
  key: string
  step: number
  icon: typeof Languages
  accent: string
  bg: string
  href: string
  /** Present only for the two self-authored guidance domains. */
  guide?: DomainGuideKeys
}

const DOMAINS: Domain[] = [
  {
    key: 'english',
    step: 1,
    icon: Languages,
    accent: 'text-sky-600 dark:text-sky-400',
    bg: 'bg-sky-500/10',
    href: '/ielts/diagnostic',
    guide: { readyCount: 3, gapsCount: 3 },
  },
  {
    key: 'application',
    step: 2,
    icon: FileText,
    accent: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-500/10',
    href: '/ielts/admissions/personal-statement',
    guide: { readyCount: 4, gapsCount: 4 },
  },
  {
    key: 'visa',
    step: 3,
    icon: Plane,
    accent: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
    href: '/ielts/readiness/visa-finance',
  },
  {
    key: 'transition',
    step: 4,
    icon: Compass,
    accent: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-500/10',
    href: '/ielts/readiness/transition',
  },
]

// Pre-resolved copy for a single domain, handed to <DomainSection />.
interface ResolvedGuide {
  ready: string[]
  gaps: string[]
  next: string
}
interface ResolvedDomain {
  key: string
  step: number
  icon: typeof Languages
  accent: string
  bg: string
  href: string
  title: string
  summary: string
  cta: string
  guide?: ResolvedGuide
}

export default async function UkReadinessOverviewPage() {
  // Resolve every domain's copy up front (server component can't await inside
  // the JSX .map()). Each domain references keys under ielts.ukread.<key>.*.
  const resolvedDomains: ResolvedDomain[] = await Promise.all(
    DOMAINS.map(async (d): Promise<ResolvedDomain> => {
      const base = `ielts.ukread.${d.key}`
      const guide = d.guide
        ? {
            ready: await Promise.all(
              Array.from({ length: d.guide.readyCount }, (_, i) => t(`${base}.ready.${i}`)),
            ),
            gaps: await Promise.all(
              Array.from({ length: d.guide.gapsCount }, (_, i) => t(`${base}.gaps.${i}`)),
            ),
            next: await t(`${base}.next`),
          }
        : undefined
      return {
        key: d.key,
        step: d.step,
        icon: d.icon,
        accent: d.accent,
        bg: d.bg,
        href: d.href,
        title: await t(`${base}.title`),
        summary: await t(`${base}.summary`),
        cta: await t(`${base}.cta`),
        guide,
      }
    }),
  )

  // Standalone page chrome + section copy.
  const backLabel = await t('ielts.ukread.back')
  const eyebrow = await t('ielts.ukread.eyebrow')
  const h1 = await t('ielts.ukread.h1')
  const intro = await t('ielts.ukread.intro')
  const stepTemplate = await t('ielts.ukread.step')
  const readyLabel = await t('ielts.ukread.ready_label')
  const gapsLabel = await t('ielts.ukread.gaps_label')
  const nextLabel = await t('ielts.ukread.next_label')
  const fallbackBody = await t('ielts.ukread.fallback')
  const reportEyebrow = await t('ielts.ukread.report.eyebrow')
  const reportHeading = await t('ielts.ukread.report.heading')
  const reportBody = await t('ielts.ukread.report.body')
  const reportCta = await t('ielts.ukread.report.cta')
  const crossHeading = await t('ielts.ukread.cross.heading')
  const crossBody = await t('ielts.ukread.cross.body')
  const crossCta = await t('ielts.ukread.cross.cta')

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IELTS', url: 'https://theenglishhub.app/ielts' },
          { name: 'UK Readiness', url: 'https://theenglishhub.app/ielts/uk-readiness' },
        ]}
      />

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
          <Link
            href="/ielts"
            className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {backLabel}
          </Link>
          <div className="flex items-start gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
              <GraduationCap
                className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                aria-hidden
              />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-clay-500">
                {eyebrow}
              </p>
              <h1 className="mt-1 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {h1}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-10 px-4 py-8 sm:px-6">
        {/* ── The four domains ─────────────────────────────────────────── */}
        <section aria-labelledby="domains-heading" className="space-y-5">
          <h2 id="domains-heading" className="sr-only">
            The four readiness domains
          </h2>
          {resolvedDomains.map((d) => (
            <DomainSection
              key={d.key}
              domain={d}
              stepTemplate={stepTemplate}
              readyLabel={readyLabel}
              gapsLabel={gapsLabel}
              nextLabel={nextLabel}
              fallbackBody={fallbackBody}
            />
          ))}
        </section>

        {/* ── The Report (ties it together) ────────────────────────────── */}
        <section
          aria-labelledby="report-heading"
          className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-6 sm:p-8"
        >
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
              <Target className="h-6 w-6 text-emerald-600 dark:text-emerald-400" aria-hidden />
            </span>
            <div className="flex-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">
                {reportEyebrow}
              </p>
              <h2
                id="report-heading"
                className="mt-1 font-serif text-xl font-semibold tracking-tight text-foreground"
              >
                {reportHeading}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {reportBody}
              </p>
            </div>
            <Button
              size="lg"
              className="shrink-0 gap-2 bg-emerald-600 text-white hover:bg-emerald-700"
              render={<Link href="/ielts/readiness" />}
            >
              {reportCta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* ── Cross-link to model answers ──────────────────────────────── */}
        <section className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10">
                <BookOpenCheck className="h-5 w-5 text-sky-600 dark:text-sky-400" aria-hidden />
              </span>
              <div>
                <h2 className="font-serif text-lg font-semibold text-foreground">{crossHeading}</h2>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {crossBody}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="shrink-0 gap-2"
              render={<Link href="/ielts/model-answers" />}
            >
              {crossCta}
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}

// ─── One readiness domain ───────────────────────────────────────────────────

function DomainSection({
  domain,
  stepTemplate,
  readyLabel,
  gapsLabel,
  nextLabel,
  fallbackBody,
}: {
  domain: ResolvedDomain
  stepTemplate: string
  readyLabel: string
  gapsLabel: string
  nextLabel: string
  fallbackBody: string
}) {
  const Icon = domain.icon
  return (
    <article className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft">
      <div className="flex flex-col gap-4 border-b border-border/60 p-5 sm:flex-row sm:items-center sm:p-6">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${domain.bg}`}
        >
          <Icon className={`h-5 w-5 ${domain.accent}`} aria-hidden />
        </span>
        <div className="flex-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {stepTemplate.replace('{n}', String(domain.step))}
          </p>
          <h3 className="mt-0.5 font-serif text-lg font-semibold text-foreground">
            {domain.title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {domain.summary}
          </p>
        </div>
        <Button
          variant="outline"
          className={`shrink-0 gap-2 ${domain.accent}`}
          render={<Link href={domain.href} />}
        >
          {domain.cta}
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </div>

      {domain.guide ? (
        <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              {readyLabel}
            </p>
            <ul className="mt-2 space-y-1.5">
              {domain.guide.ready.map((line, i) => (
                <li key={i} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-emerald-500/70" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400">
              <Target className="h-4 w-4" />
              {gapsLabel}
            </p>
            <ul className="mt-2 space-y-1.5">
              {domain.guide.gaps.map((line, i) => (
                <li key={i} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-amber-500/70" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="rounded-lg border border-border/60 bg-background/50 p-3 text-xs leading-relaxed text-muted-foreground sm:col-span-2">
            <span className="font-semibold text-foreground">{nextLabel}</span>
            {domain.guide.next}
          </p>
        </div>
      ) : (
        <div className="p-5 sm:p-6">
          <p className="text-xs leading-relaxed text-muted-foreground">{fallbackBody}</p>
        </div>
      )}
    </article>
  )
}
