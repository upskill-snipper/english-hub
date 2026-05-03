'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  PoundSterling,
  TrendingUp,
  Clock,
  Eye,
  Target,
  Zap,
  Trophy,
  ExternalLink,
  Copy,
  CheckCircle2,
  ArrowUpRight,
  AlertCircle,
  Tag,
  Info,
  ChevronDown,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

// ─── Types ────────────────────────────────────────────────────────────────

interface AccountInfo {
  code: string
  displayName: string
  status: string
  isActive: boolean
  tier: 'bronze' | 'silver' | 'gold'
  confirmedCount: number
  joinedAt: string
}

interface Stats {
  totalEarningsPence: number
  pendingEarningsPence: number
  paidOutPence: number
  thisMonthEarningsPence: number
  totalClicks: number
  totalConversions: number
  conversionRatePct: number
}

interface TierProgress {
  tier: 'bronze' | 'silver' | 'gold'
  nextTier: 'silver' | 'gold' | null
  progressPct: number
  currentCount: number
  nextThreshold: number | null
  commissionPct: number
  nextCommissionPct: number | null
}

interface DayBucket {
  date: string
  clicks: number
  earningsPence: number
}

interface Conversion {
  id: string
  commission_pence: number
  order_value_pence: number
  currency: string
  status: string
  tier_at_conversion: string
  product_type: string | null
  created_at: string
  confirmed_at: string | null
  paid_at: string | null
}

interface ClickEntry {
  id: string
  created_at: string
  country: string | null
  device: string | null
  referrer: string | null
}

interface AffiliateLink {
  id: string
  token: string
  target_path: string
  campaign: string | null
  click_count: number
  conversion_count: number
  created_at: string
}

interface Payout {
  id: string
  period_start: string
  period_end: string
  amount_pence: number
  conversion_count: number
  status: string
  paid_at: string | null
  created_at: string
}

interface Props {
  account: AccountInfo
  stats: Stats
  tierProgress: TierProgress
  last30Days: DayBucket[]
  conversions: Conversion[]
  clicks: ClickEntry[]
  links: AffiliateLink[]
  payouts: Payout[]
  referralUrl: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────

function formatGBP(pence: number): string {
  const pounds = pence / 100
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: pounds < 100 ? 2 : 0,
  }).format(pounds)
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

const TIER_META = {
  bronze: { label: 'Bronze', colour: 'from-amber-700 to-amber-500', iconColour: 'text-amber-600' },
  silver: { label: 'Silver', colour: 'from-slate-400 to-slate-300', iconColour: 'text-slate-500' },
  gold: { label: 'Gold', colour: 'from-yellow-500 to-yellow-300', iconColour: 'text-yellow-600' },
} as const

// ─── Main component ──────────────────────────────────────────────────────

export default function AffiliateDashboardClient({
  account,
  stats,
  tierProgress,
  last30Days,
  conversions,
  clicks,
  links,
  payouts,
  referralUrl,
}: Props) {
  return (
    <div className="space-y-6">
      {/* Welcome strip */}
      <WelcomeStrip account={account} referralUrl={referralUrl} />

      {!account.isActive && (
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-900">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
            <div>
              <p className="font-semibold">Account status: {account.status}</p>
              <p className="mt-1 text-amber-800">
                Your account isn&apos;t currently active. Contact{' '}
                <a href="mailto:info@upskillenergy.com" className="underline">
                  info@upskillenergy.com
                </a>{' '}
                if you think this is a mistake.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Stat tiles */}
      <StatGrid stats={stats} />

      {/* Earnings rules — clarifies which plans pay commission. Sits between
          earnings stats and the share/activity panels so affiliates see the
          rule once they've absorbed their potential earnings, but BEFORE
          they're nudged to share. */}
      <EarningsRulesBanner />

      {/* Two-column layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <ActivityChart data={last30Days} />
          <RecentConversions conversions={conversions} />
        </div>

        <div className="space-y-6">
          <TierProgressCard progress={tierProgress} />
          <SharePanel code={account.code} referralUrl={referralUrl} />
          <TrackingExplainer code={account.code} />
          <PayoutsCard payouts={payouts} />
        </div>
      </div>

      {/* Full-width bottom */}
      <LinksCard links={links} totalClicks={stats.totalClicks} />
      <RecentClicks clicks={clicks} />
    </div>
  )
}

// ─── Welcome strip ────────────────────────────────────────────────────────

function WelcomeStrip({ account, referralUrl }: { account: AccountInfo; referralUrl: string }) {
  const tierMeta = TIER_META[account.tier]
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    const showSuccess = () => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    // Modern path: Clipboard API (requires secure context)
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(referralUrl)
        showSuccess()
        return
      } catch {
        /* fall through to selection fallback */
      }
    }

    // Fallback: select the text in a hidden textarea (older Safari, iframes)
    if (typeof document !== 'undefined') {
      try {
        const textarea = document.createElement('textarea')
        textarea.value = referralUrl
        textarea.setAttribute('readonly', '')
        textarea.style.position = 'absolute'
        textarea.style.left = '-9999px'
        document.body.appendChild(textarea)
        textarea.select()
        textarea.setSelectionRange(0, referralUrl.length)
        document.execCommand('copy')
        document.body.removeChild(textarea)
        showSuccess()
      } catch {
        /* clipboard truly unavailable — no confirmation shown */
      }
    }
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-background to-background p-6 sm:p-8">
      <div className="absolute top-0 right-0 h-60 w-60 -translate-y-12 translate-x-12 rounded-full bg-primary/5 blur-3xl" />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              Welcome back, {account.displayName}
            </h1>
            <Badge
              variant="secondary"
              className={cn('text-xs font-semibold uppercase tracking-wider', tierMeta.iconColour)}
            >
              <Trophy className="mr-1 h-3 w-3" />
              {tierMeta.label}
            </Badge>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Your affiliate code is{' '}
            <code className="rounded bg-muted px-2 py-0.5 font-mono font-semibold text-foreground">
              {account.code}
            </code>{' '}
            &middot; partner since {formatDate(account.joinedAt)}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" render={<Link href={referralUrl} target="_blank" />}>
            <ExternalLink className="h-4 w-4" />
            <span className="hidden sm:inline">Preview your link</span>
            <span className="sm:hidden">Preview</span>
          </Button>
          <Button onClick={handleCopyLink} aria-live="polite">
            {copied ? (
              <>
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span className="hidden sm:inline">Copied!</span>
                <span className="sm:hidden">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span className="hidden sm:inline">Copy your referral link</span>
                <span className="sm:hidden">Copy link</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

// ─── Earnings rules banner ───────────────────────────────────────────────
//
// Single source of truth for the "annual subscriptions only" disclosure on
// the dashboard. The £5–£10 range tracks the flat-rate ladder in
// `src/lib/affiliate/tiers.ts` (Tier 1 Starter £5 → Tier 5 Partner £10).
//
// Sibling annual-only microcopy lives on the pricing page, the redeem page,
// and the AffiliateCodeField — keep those in sync if the rule changes.

function EarningsRulesBanner() {
  return (
    <div className={cn('rounded-xl border border-amber-500/30 bg-amber-500/5 p-4')}>
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
          <Tag className="h-4 w-4" />
        </div>
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Earnings rules
          </p>
          <p className="text-sm text-foreground">
            <span aria-hidden="true">&#x1F4B7; </span>
            You earn <strong className="font-semibold">£5–£10 commission</strong> per{' '}
            <strong className="font-semibold">Student Annual</strong> subscription bought via your
            code or link. Monthly plans and Teacher plans don&apos;t earn commission.
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Stat grid ────────────────────────────────────────────────────────────

function StatGrid({ stats }: { stats: Stats }) {
  const tiles = [
    {
      label: 'All-time earnings',
      value: formatGBP(stats.totalEarningsPence),
      icon: PoundSterling,
      accent: 'from-emerald-500/20 to-emerald-500/0',
      iconBg: 'bg-emerald-500/10 text-emerald-600',
      hint: 'Confirmed + paid commissions',
    },
    {
      label: 'This month',
      value: formatGBP(stats.thisMonthEarningsPence),
      icon: TrendingUp,
      accent: 'from-blue-500/20 to-blue-500/0',
      iconBg: 'bg-blue-500/10 text-blue-600',
      hint: 'Commission earned since the 1st',
    },
    {
      label: 'Pending',
      value: formatGBP(stats.pendingEarningsPence),
      icon: Clock,
      accent: 'from-amber-500/20 to-amber-500/0',
      iconBg: 'bg-amber-500/10 text-amber-600',
      hint: 'Awaiting the 30-day hold',
    },
    {
      label: 'Conversion rate',
      value: `${stats.conversionRatePct}%`,
      icon: Target,
      accent: 'from-violet-500/20 to-violet-500/0',
      iconBg: 'bg-violet-500/10 text-violet-600',
      hint: `${stats.totalConversions} from ${stats.totalClicks} clicks`,
    },
  ]
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {tiles.map((t) => {
        const Icon = t.icon
        return (
          <Card key={t.label} className="relative overflow-hidden border-border/40">
            <div
              className={cn('absolute inset-0 bg-gradient-to-br', t.accent, 'pointer-events-none')}
            />
            <CardContent className="relative p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.label}
                </p>
                <div
                  className={cn('flex h-8 w-8 items-center justify-center rounded-lg', t.iconBg)}
                >
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-3 text-3xl font-bold text-foreground">{t.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{t.hint}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

// ─── Activity chart (30-day sparkline) ────────────────────────────────────

function ActivityChart({ data }: { data: DayBucket[] }) {
  const [metric, setMetric] = useState<'clicks' | 'earnings'>('clicks')
  const maxValue = useMemo(() => {
    const values = data.map((d) => (metric === 'clicks' ? d.clicks : d.earningsPence))
    const max = Math.max(...values, 1)
    return max
  }, [data, metric])

  const totalClicks = data.reduce((s, d) => s + d.clicks, 0)
  const totalEarningsPence = data.reduce((s, d) => s + d.earningsPence, 0)

  return (
    <Card className="border-border/40">
      <CardContent className="p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-foreground">Activity — last 30 days</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {metric === 'clicks'
                ? `${totalClicks.toLocaleString('en-GB')} clicks`
                : formatGBP(totalEarningsPence) + ' earned'}{' '}
              over the period
            </p>
          </div>
          <div className="flex shrink-0 rounded-lg border border-border p-0.5">
            <button
              onClick={() => setMetric('clicks')}
              className={cn(
                'rounded-md px-3 py-1 text-xs font-medium transition-colors',
                metric === 'clicks'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              Clicks
            </button>
            <button
              onClick={() => setMetric('earnings')}
              className={cn(
                'rounded-md px-3 py-1 text-xs font-medium transition-colors',
                metric === 'earnings'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              Earnings
            </button>
          </div>
        </div>

        {/* Bars */}
        <div className="flex h-40 items-end gap-1">
          {data.map((d) => {
            const raw = metric === 'clicks' ? d.clicks : d.earningsPence
            const height = maxValue > 0 ? Math.max(2, (raw / maxValue) * 100) : 2
            const hasData = raw > 0
            return (
              <div
                key={d.date}
                className="group relative flex-1"
                title={`${d.date}: ${
                  metric === 'clicks' ? `${d.clicks} clicks` : formatGBP(d.earningsPence)
                }`}
              >
                <div
                  className={cn(
                    'w-full rounded-t-md transition-all',
                    hasData ? 'bg-primary/80 hover:bg-primary' : 'bg-muted/50',
                  )}
                  style={{ height: `${height}%` }}
                />
                <div className="pointer-events-none absolute -top-8 left-1/2 z-10 hidden -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background group-hover:block">
                  {metric === 'clicks' ? `${d.clicks} clicks` : formatGBP(d.earningsPence)}
                </div>
              </div>
            )
          })}
        </div>

        {/* Axis labels */}
        <div className="mt-3 flex justify-between text-xs text-muted-foreground">
          <span>{formatDate(data[0].date)}</span>
          <span>Today</span>
        </div>
      </CardContent>
    </Card>
  )
}

// ─── Tier progress card ──────────────────────────────────────────────────

function TierProgressCard({ progress }: { progress: TierProgress }) {
  const tierMeta = TIER_META[progress.tier]
  return (
    <Card className="relative overflow-hidden border-border/40">
      <div className={cn('absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r', tierMeta.colour)} />
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Current tier
            </p>
            <p className="mt-1 text-xl font-bold text-foreground">{tierMeta.label}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Commission
            </p>
            <p className="mt-1 text-xl font-bold text-foreground">{progress.commissionPct}%</p>
          </div>
        </div>

        {progress.nextTier && progress.nextThreshold !== null ? (
          <>
            <div className="mt-5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  {progress.currentCount} of {progress.nextThreshold} referrals
                </span>
                <span className="font-semibold text-foreground">{progress.progressPct}%</span>
              </div>
              <div className="relative h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className={cn(
                    'absolute inset-y-0 left-0 rounded-full bg-gradient-to-r',
                    TIER_META[progress.nextTier].colour,
                  )}
                  style={{ width: `${progress.progressPct}%` }}
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              {progress.nextThreshold - progress.currentCount} more confirmed referrals to unlock{' '}
              <strong className="text-foreground">
                {TIER_META[progress.nextTier].label} ({progress.nextCommissionPct}%)
              </strong>
            </p>
          </>
        ) : (
          <div className="mt-5 flex items-center gap-2 rounded-lg bg-yellow-500/10 px-3 py-2 text-sm text-yellow-900">
            <Trophy className="h-4 w-4" />
            <span className="font-medium">Maxed out — you&apos;re a Gold partner</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// ─── Share panel ─────────────────────────────────────────────────────────

function SharePanel({ code, referralUrl }: { code: string; referralUrl: string }) {
  return (
    <Card className="border-border/40">
      <CardContent className="p-5">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Share your link</h3>
        </div>
        <div className="mt-4 space-y-3">
          <CopyField label="Code" value={code} monospace />
          <CopyField label="Referral URL" value={referralUrl} />
        </div>
        {/* annual-only messaging — clarifies which plan earns commission */}
        <div className="mt-3 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-xs">
          <p className="font-semibold text-foreground">
            Commission is on Student Annual subscriptions only.
          </p>
          <p className="mt-1 text-muted-foreground">
            Your code unlocks the £20/year Student Annual rate (normally £29.99). Student Monthly
            and Teacher plans don&apos;t earn commission.
          </p>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Remember <strong className="text-foreground">#ad</strong> at the start of every post (ASA
          + CAP Code).
        </p>
      </CardContent>
    </Card>
  )
}

function CopyField({
  label,
  value,
  monospace,
}: {
  label: string
  value: string
  monospace?: boolean
}) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <div>
      <p className="mb-1 text-xs text-muted-foreground">{label}</p>
      <div className="flex items-stretch gap-2">
        <div
          className={cn(
            'flex-1 truncate rounded-md border border-border bg-muted/40 px-3 py-2 text-sm',
            monospace ? 'font-mono tracking-wide' : '',
          )}
        >
          {value}
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border hover:bg-accent"
        >
          {copied ? (
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      </div>
    </div>
  )
}

// ─── Tracking explainer (collapsible) ────────────────────────────────────
//
// Affiliate transparency: spells out exactly what counts as a commissionable
// sale, the payout cadence, and what voids a commission. Sits below the
// "Share your link" panel so the rules are right next to the link itself.
//
// Verified facts (do not fabricate):
//   - 30-day cookie window: src/lib/affiliate/attribution-v2.ts
//     (DEFAULT_ATTRIBUTION.windowDays = 30)
//   - 60-day clearance gate (14-day UK refund window + 46-day clawback
//     buffer): src/lib/affiliate/tiers.ts (line 19 doc comment)
//   - £20 minimum payout: src/app/affiliates/payouts/page.tsx
//     (minimumPayoutGbp={20})
//   - £20/year Student Annual (normally £29.99): see SharePanel above and
//     src/components/affiliates/AffiliateResources.tsx
//   - 7-day free trial: src/constants/pricing.ts (TRIAL_DAYS = 7)
function TrackingExplainer({ code }: { code: string }) {
  const [open, setOpen] = useState(false)
  const trackingUrl = `https://theenglishhub.app/?ref=${code}`

  return (
    <Card className="overflow-hidden border-amber-500/30 bg-amber-500/5">
      <CardContent className="p-0">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="tracking-explainer-body"
          className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left hover:bg-amber-500/10"
        >
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4 text-amber-600" />
            <h3 className="text-sm font-semibold text-foreground">How does tracking work?</h3>
          </div>
          <ChevronDown
            className={cn(
              'h-4 w-4 shrink-0 text-muted-foreground transition-transform',
              open && 'rotate-180',
            )}
          />
        </button>

        {open && (
          <div
            id="tracking-explainer-body"
            className="space-y-5 border-t border-amber-500/30 px-5 py-4 text-sm text-foreground"
          >
            <section>
              <p className="font-semibold">Two ways your code earns commission:</p>
              <ol className="mt-2 list-decimal space-y-2 pl-5 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Someone clicks your link.</span>{' '}
                  Your link{' '}
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                    {trackingUrl}
                  </code>{' '}
                  sets a 30-day attribution cookie. If they sign up and buy a Student Annual
                  subscription within 30 days, you&apos;re credited automatically — even if they
                  don&apos;t type the code.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Someone types your code at checkout.
                  </span>{' '}
                  Whether they paste it on the pricing page or at{' '}
                  <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                    /redeem
                  </code>
                  , the code applies the £20/year Student Annual discount AND credits you the
                  commission.
                </li>
              </ol>
            </section>

            <section>
              <p className="font-semibold">What earns commission</p>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li>
                  <span aria-hidden="true">✅</span> <span className="sr-only">Yes:</span>
                  Student Annual subscription (£20/year with your code, normally £29.99)
                </li>
                <li>
                  <span aria-hidden="true">❌</span> <span className="sr-only">No:</span>
                  Student Monthly (no commission)
                </li>
                <li>
                  <span aria-hidden="true">❌</span> <span className="sr-only">No:</span>
                  Teacher plans (no commission yet)
                </li>
                <li>
                  <span aria-hidden="true">❌</span> <span className="sr-only">No:</span>
                  Founding Schools (sales-led, separate)
                </li>
              </ul>
            </section>

            <section>
              <p className="font-semibold">When you get paid</p>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Day 0:</span> Customer pays →
                  conversion appears on this dashboard as &ldquo;Pending&rdquo;.
                </li>
                <li>
                  <span className="font-medium text-foreground">Day 60:</span> Conversion clears the
                  refund window → moves to &ldquo;Confirmed&rdquo;.
                </li>
                <li>
                  <span className="font-medium text-foreground">Day 60+ next 1st:</span> Confirmed
                  conversions are batched into a payout if the running total is ≥ £20.
                </li>
                <li>
                  <span className="font-medium text-foreground">Method:</span> BACS or PayPal
                  (whichever you&apos;ve set in Settings).
                </li>
              </ul>
            </section>

            <section>
              <p className="font-semibold">Things that void a commission</p>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li>Customer cancels within their 7-day free trial (no payment was taken).</li>
                <li>
                  Customer requests a refund within 14 days (UK statutory window) → conversion
                  flipped to &ldquo;Refunded&rdquo;.
                </li>
                <li>
                  Account terminated for ASA/CAP non-compliance (e.g. posting without #ad
                  disclosure).
                </li>
              </ul>
            </section>

            <section>
              <p className="font-semibold">Full tracking transparency</p>
              <p className="mt-2 text-muted-foreground">
                Every conversion shows up on this dashboard within ~2 minutes of payment. If
                you&apos;ve shared a link or code with someone who paid and you don&apos;t see it
                within an hour, ping support and we&apos;ll trace the attribution.
              </p>
            </section>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// ─── Recent conversions table ────────────────────────────────────────────

function RecentConversions({ conversions }: { conversions: Conversion[] }) {
  if (conversions.length === 0) {
    return (
      <Card className="border-border/40">
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <PoundSterling className="h-5 w-5 text-muted-foreground" />
          </div>
          <h3 className="font-semibold text-foreground">No conversions yet</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Share your link — every paid signup appears here within a few minutes.
          </p>
        </CardContent>
      </Card>
    )
  }
  return (
    <Card className="border-border/40">
      <CardContent className="p-6">
        <h2 className="mb-4 text-lg font-bold text-foreground">Recent conversions</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <th className="pb-3">Date</th>
                <th className="pb-3">Product</th>
                <th className="pb-3">Order</th>
                <th className="pb-3">Commission</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {conversions.map((c) => (
                <tr key={c.id} className="border-b border-border/50 last:border-0">
                  <td className="py-3 text-foreground">{formatDate(c.created_at)}</td>
                  <td className="py-3 capitalize text-muted-foreground">
                    {c.product_type?.replace('_', ' ') ?? 'Subscription'}
                  </td>
                  <td className="py-3 text-muted-foreground">{formatGBP(c.order_value_pence)}</td>
                  <td className="py-3 font-semibold text-foreground">
                    {formatGBP(c.commission_pence)}
                  </td>
                  <td className="py-3">
                    <StatusBadge status={c.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

function StatusBadge({ status }: { status: string }) {
  const meta: Record<string, { label: string; classes: string }> = {
    pending: {
      label: 'Pending',
      classes: 'bg-amber-500/10 text-amber-700 border-amber-500/30',
    },
    confirmed: {
      label: 'Confirmed',
      classes: 'bg-blue-500/10 text-blue-700 border-blue-500/30',
    },
    paid: {
      label: 'Paid',
      classes: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30',
    },
    voided: {
      label: 'Voided',
      classes: 'bg-slate-500/10 text-slate-700 border-slate-500/30',
    },
    refunded: {
      label: 'Refunded',
      classes: 'bg-rose-500/10 text-rose-700 border-rose-500/30',
    },
  }
  const m = meta[status] ?? {
    label: status,
    classes: 'bg-muted text-muted-foreground border-border',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
        m.classes,
      )}
    >
      {m.label}
    </span>
  )
}

// ─── Payouts card ────────────────────────────────────────────────────────

function PayoutsCard({ payouts }: { payouts: Payout[] }) {
  if (payouts.length === 0) {
    return (
      <Card className="border-border/40">
        <CardContent className="p-5">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Payouts</h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Your first payout lands once you cross the £20 threshold. Payouts run bi-monthly via
            BACS or PayPal.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-3 w-full"
            render={<Link href="/affiliates/payouts" />}
          >
            Set payout method
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Button>
        </CardContent>
      </Card>
    )
  }
  return (
    <Card className="border-border/40">
      <CardContent className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Payouts</h3>
          </div>
          <Link href="/affiliates/payouts" className="text-xs text-primary hover:underline">
            View all →
          </Link>
        </div>
        <ul className="space-y-3">
          {payouts.slice(0, 4).map((p) => (
            <li key={p.id} className="flex items-center justify-between text-sm">
              <div>
                <p className="font-medium text-foreground">{formatGBP(p.amount_pence)}</p>
                <p className="text-xs text-muted-foreground">
                  {formatDate(p.period_start)} – {formatDate(p.period_end)}
                </p>
              </div>
              <StatusBadge status={p.status} />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

// ─── Links performance ──────────────────────────────────────────────────

function LinksCard({ links, totalClicks }: { links: AffiliateLink[]; totalClicks: number }) {
  return (
    <Card className="border-border/40">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-foreground">Your tracked links</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {totalClicks.toLocaleString('en-GB')} clicks across {links.length || 'your default'}{' '}
              link{links.length === 1 ? '' : 's'}
            </p>
          </div>
          <Button variant="outline" size="sm" render={<Link href="/affiliate/links" />}>
            Create a custom link
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Button>
        </div>
        {links.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border/80 bg-muted/30 p-6 text-center">
            <Eye className="mx-auto mb-2 h-5 w-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Anyone visiting with{' '}
              <code className="mx-1 rounded bg-muted px-1.5 py-0.5 font-mono">?ref=YOURCODE</code>{' '}
              is already tracked. Create custom links per campaign to measure which content converts
              best.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <th className="pb-3">Campaign</th>
                  <th className="pb-3">Target</th>
                  <th className="pb-3 text-right">Clicks</th>
                  <th className="pb-3 text-right">Conversions</th>
                </tr>
              </thead>
              <tbody>
                {links.map((l) => (
                  <tr key={l.id} className="border-b border-border/50 last:border-0">
                    <td className="py-3 font-medium text-foreground">{l.campaign ?? '—'}</td>
                    <td className="py-3 font-mono text-xs text-muted-foreground">
                      {l.target_path}
                    </td>
                    <td className="py-3 text-right text-foreground">
                      {l.click_count.toLocaleString('en-GB')}
                    </td>
                    <td className="py-3 text-right font-semibold text-foreground">
                      {l.conversion_count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// ─── Recent clicks strip ────────────────────────────────────────────────

function RecentClicks({ clicks }: { clicks: ClickEntry[] }) {
  if (clicks.length === 0) return null
  return (
    <Card className="border-border/40">
      <CardContent className="p-6">
        <h2 className="mb-4 text-lg font-bold text-foreground">Recent clicks</h2>
        <ul className="space-y-2">
          {clicks.map((c) => (
            <li
              key={c.id}
              className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 px-4 py-2 text-sm"
            >
              <div className="flex items-center gap-3 text-muted-foreground">
                <Eye className="h-4 w-4" />
                <span>{formatDate(c.created_at)}</span>
                {c.country && <span className="text-xs">{c.country}</span>}
                {c.device && <span className="text-xs capitalize">{c.device}</span>}
              </div>
              <span className="max-w-[40%] truncate text-xs text-muted-foreground">
                {c.referrer ?? 'Direct'}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
