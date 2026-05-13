'use client'

import { useEffect, useState } from 'react'
import {
  CreditCard,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Mail,
  TrendingUp,
  Users,
  Building2,
  GraduationCap,
  Sparkles,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SchoolAccessData {
  schoolId: string
  schoolName: string
  accessType: 'founder' | 'paid' | 'trial' | 'expired'
  accessUntil: string | null
  isActive: boolean
  daysRemaining: number | null
  userRole: 'admin' | 'head_of_department' | 'teacher' | 'student'
  renewalPrice?: number
  renewalCurrency?: string
}

interface UsageStats {
  totalStudents: number
  totalTeachers: number
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const BILLING_EMAIL = 'info@Upskillenergy.com'
const FOUNDER_EXPIRY = new Date('2026-08-31T23:59:59Z')
const RENEWAL_WARNING_DAYS = 60
const FOUNDING_SCHOOLS_TOTAL = 10

interface PricingTier {
  id: string
  name: string
  yearGroups: string
  pricePerPupil: number
  founderPricePerPupil: number
  description: string
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'ks3',
    name: 'KS3 Only',
    yearGroups: 'Years 7\u20139',
    pricePerPupil: 12,
    founderPricePerPupil: 6,
    description: 'Key Stage 3 English resources for Years 7\u20139',
  },
  {
    id: 'ks4',
    name: 'KS4 Only',
    yearGroups: 'Years 10\u201311',
    pricePerPupil: 15,
    founderPricePerPupil: 7.5,
    description: 'GCSE English resources for Years 10\u201311',
  },
  {
    id: 'ks3-ks4',
    name: 'KS3 + KS4',
    yearGroups: 'Years 7\u201311',
    pricePerPupil: 22,
    founderPricePerPupil: 11,
    description: 'Complete KS3 and GCSE English coverage',
  },
  {
    id: 'whole-secondary',
    name: 'Whole Secondary',
    yearGroups: 'Years 7\u201313',
    pricePerPupil: 26,
    founderPricePerPupil: 13,
    description: 'Full secondary including KS5 / Sixth Form',
  },
]

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function calcDaysRemaining(): number {
  const ms = FOUNDER_EXPIRY.getTime() - Date.now()
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)))
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function buildRenewalMailto(schoolName: string): string {
  const subject = encodeURIComponent(`Renewal - ${schoolName}`)
  return `mailto:${BILLING_EMAIL}?subject=${subject}`
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function LoadingSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-40 rounded-xl bg-muted/40" />
      ))}
    </div>
  )
}

function FounderPlanCard({
  access,
  daysRemaining,
}: {
  access: SchoolAccessData
  daysRemaining: number
}) {
  const t = useT()
  const showRenewalWarning = daysRemaining <= RENEWAL_WARNING_DAYS

  return (
    <Card className="border-amber-500/30 bg-amber-500/5">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-clay-600" />
            <CardTitle className="text-foreground">{t('school.billing.current_plan')}</CardTitle>
          </div>
          <Badge className="shrink-0 border border-amber-500/40 bg-amber-500/15 text-clay-600 text-xs font-semibold">
            {t('school.billing.founder_badge')}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Plan heading + active badge */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t('school.billing.founder_access_heading')}
          </h2>
          <Badge className="w-fit border border-emerald-500/30 bg-emerald-500/15 text-emerald-400 text-xs">
            <CheckCircle className="mr-1 h-3 w-3" />
            {t('school.billing.active')}
          </Badge>
        </div>

        {/* Expiry info */}
        <div className="rounded-lg border border-border bg-muted/30 px-4 py-3 space-y-2">
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{t('school.billing.free_until')}</span>
          </div>
          <p className="text-sm text-muted-foreground pl-6">
            {t('school.billing.after_expiry_pre')}{' '}
            <span className="text-foreground font-medium">&pound;6/pupil/year</span>{' '}
            {t('school.billing.after_expiry_founder_suffix')}{' '}
            <span className="text-foreground font-medium">&pound;12/pupil/year</span>{' '}
            {t('school.billing.after_expiry_standard_suffix')}
          </p>
          <div className="pl-6 pt-1">
            <span className="inline-block rounded-md bg-muted/60 px-3 py-1 text-sm font-semibold text-foreground tabular-nums">
              {daysRemaining}{' '}
              {daysRemaining === 1
                ? t('school.billing.day_singular')
                : t('school.billing.day_plural')}{' '}
              {t('school.billing.remaining')}
            </span>
          </div>
        </div>

        {/* Renewal warning */}
        {showRenewalWarning && (
          <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-clay-600" />
            <p className="text-sm text-amber-700">
              {t('school.billing.warning_pre')}{' '}
              <span className="font-semibold">
                {daysRemaining} {t('school.billing.day_plural')}
              </span>
              . {t('school.billing.warning_post')}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-2 pt-1 sm:flex-row">
          <Button
            variant="outline"
            className="border-amber-500/40 text-clay-600 hover:bg-amber-500/10 hover:text-amber-700"
            render={<a href={buildRenewalMailto(access.schoolName)} />}
          >
            <Mail className="mr-2 h-4 w-4" />
            {t('school.billing.contact_renew')}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
            render={
              <a
                href={`mailto:${BILLING_EMAIL}?subject=Early%20Renewal%20-%20${encodeURIComponent(access.schoolName)}`}
              />
            }
          >
            {t('school.billing.renew_early')}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function PaidPlanCard({ access }: { access: SchoolAccessData }) {
  const t = useT()
  const [showCancelConfirm, setShowCancelConfirm] = useState(false)

  return (
    <Card className="border-border bg-card/60">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-foreground">{t('school.billing.current_plan')}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t('school.billing.subscription_heading')}
          </h2>
          <div className="flex items-center gap-2">
            <Badge className="w-fit border border-emerald-500/30 bg-emerald-500/15 text-emerald-400 text-xs">
              <CheckCircle className="mr-1 h-3 w-3" />
              {t('school.billing.active')}
            </Badge>
            <span className="text-sm text-muted-foreground font-medium">
              {t('school.billing.per_pupil_pricing')}
            </span>
          </div>
        </div>

        {access.accessUntil && (
          <div className="rounded-lg border border-border bg-muted/30 px-4 py-3 space-y-1">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{t('school.billing.renews_label')}</span>
              <span className="font-medium text-foreground">{formatDate(access.accessUntil)}</span>
            </div>
            {access.daysRemaining !== null && (
              <p className="pl-6 text-xs text-muted-foreground">
                {access.daysRemaining} {t('school.billing.days_until_renewal')}
              </p>
            )}
          </div>
        )}

        {!showCancelConfirm ? (
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-destructive"
            onClick={() => setShowCancelConfirm(true)}
          >
            {t('school.billing.cancel_subscription')}
          </Button>
        ) : (
          <div className="rounded-lg border border-destructive/40 bg-destructive/5 px-4 py-3 space-y-3">
            <p className="text-sm font-medium text-destructive">
              {t('school.billing.cancel_sure')}
            </p>
            <p className="text-xs text-muted-foreground">{t('school.billing.cancel_note')}</p>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="border-destructive/40 text-destructive hover:bg-destructive/10"
                render={
                  <a
                    href={`mailto:${BILLING_EMAIL}?subject=Cancel%20Subscription%20-%20${encodeURIComponent(access.schoolName)}`}
                  />
                }
              >
                <Mail className="mr-1.5 h-3.5 w-3.5" />
                {t('school.billing.email_cancel')}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setShowCancelConfirm(false)}>
                {t('school.billing.keep_subscription')}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function PricingTierRow({ tier, isFounder }: { tier: PricingTier; isFounder: boolean }) {
  const displayPrice = isFounder ? tier.founderPricePerPupil : tier.pricePerPupil
  const formattedPrice = displayPrice % 1 === 0 ? `${displayPrice}` : displayPrice.toFixed(2)

  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-muted/20 px-4 py-3">
      <div className="space-y-0.5">
        <p className="text-sm font-semibold text-foreground">{tier.name}</p>
        <p className="text-xs text-muted-foreground">{tier.yearGroups}</p>
      </div>
      <div className="text-right">
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold text-foreground tabular-nums">
            &pound;{formattedPrice}
          </span>
          <span className="text-xs text-muted-foreground">/pupil/year</span>
        </div>
        {isFounder && (
          <p className="text-xs text-muted-foreground line-through">
            &pound;{tier.pricePerPupil}/pupil/year
          </p>
        )}
      </div>
    </div>
  )
}

function PricingCard({ isFounder }: { isFounder: boolean }) {
  const t = useT()
  const featureKeys = [
    'school.billing.feat.per_pupil',
    'school.billing.feat.all_teachers',
    'school.billing.feat.full_library',
    'school.billing.feat.admin_portal',
    'school.billing.feat.analytics',
    'school.billing.feat.priority_support',
  ]
  return (
    <Card className="border-border bg-card/60">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-5 w-5 text-muted-foreground" />
          <div>
            <CardTitle className="text-foreground">{t('school.billing.pricing_title')}</CardTitle>
            <CardDescription className="mt-0.5">{t('school.billing.pricing_desc')}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Founding Schools banner */}
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 px-4 py-3 flex items-start gap-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-clay-600" />
          <div className="space-y-1">
            <p className="text-sm font-semibold text-amber-700">
              {t('school.billing.founding_50_title')}
            </p>
            <p className="text-xs text-muted-foreground">
              {t('school.billing.founding_50_pre')} {FOUNDING_SCHOOLS_TOTAL}{' '}
              {isFounder
                ? t('school.billing.founding_50_post_isfounder')
                : t('school.billing.founding_50_post_standard')}
            </p>
          </div>
        </div>

        {/* Pricing tiers */}
        <div className="space-y-2">
          {PRICING_TIERS.map((tier) => (
            <PricingTierRow key={tier.id} tier={tier} isFounder={isFounder} />
          ))}
        </div>

        {/* Example calculation */}
        <div className="rounded-lg border border-border bg-muted/30 px-4 py-3 space-y-1">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {t('school.billing.example_label')}
          </p>
          <p className="text-sm text-foreground">
            {t('school.billing.example_pre')}{' '}
            <span className="font-semibold">{t('school.billing.example_pupils')}</span>{' '}
            {t('school.billing.example_would_pay')}{' '}
            <span className="font-semibold">&pound;17,600{t('school.billing.example_year')}</span>{' '}
            {t('school.billing.example_standard_or')}{' '}
            <span className="font-semibold text-clay-600">
              &pound;8,800{t('school.billing.example_year')}
            </span>{' '}
            {t('school.billing.example_founding_suffix')}
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-2">
          {featureKeys.map((key) => (
            <li key={key} className="flex items-center gap-2.5 text-sm text-foreground">
              <CheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
              {t(key)}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex flex-col gap-2 pt-1 sm:flex-row">
          <Button
            className="bg-primary hover:bg-primary/90"
            render={<a href={`mailto:${BILLING_EMAIL}?subject=Subscription%20Enquiry`} />}
          >
            <Mail className="mr-2 h-4 w-4" />
            {t('school.billing.get_quote')}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-muted-foreground"
            render={<a href={`mailto:${BILLING_EMAIL}?subject=Pricing%20Question`} />}
          >
            {t('school.billing.ask_question')}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function UsageStatsCard({ stats, loading }: { stats: UsageStats; loading: boolean }) {
  const t = useT()
  const rows = [
    {
      icon: Users,
      label: t('school.billing.usage.students_enrolled'),
      value: loading ? t('school.billing.usage.dash') : String(stats.totalStudents),
      limit: t('school.billing.usage.billed_per_pupil'),
    },
    {
      icon: Users,
      label: t('school.billing.usage.teachers'),
      value: loading ? t('school.billing.usage.dash') : String(stats.totalTeachers),
      limit: t('school.billing.usage.teachers_included'),
    },
    {
      icon: TrendingUp,
      label: t('school.billing.usage.resources'),
      value: t('school.billing.usage.resources_full'),
      limit: t('school.billing.usage.all_included'),
    },
  ]

  return (
    <Card className="border-border bg-card/60">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <TrendingUp className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-foreground">{t('school.billing.usage_title')}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="divide-y divide-border">
          {rows.map(({ icon: Icon, label, value, limit }) => (
            <li key={label} className="flex items-center justify-between py-3">
              <div className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-foreground tabular-nums">{value}</span>
                <span className="mx-1 text-xs text-muted-foreground">
                  {t('school.billing.usage.of')}
                </span>
                <span className="text-sm text-muted-foreground">{limit}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function InvoiceHistoryCard({ isFounder }: { isFounder: boolean }) {
  const t = useT()
  return (
    <Card className="border-border bg-card/60">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-foreground">{t('school.billing.invoice_title')}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <CreditCard className="mb-3 h-8 w-8 text-muted-foreground/30" />
          <p className="text-sm text-muted-foreground">
            {isFounder
              ? t('school.billing.invoice_empty_founder')
              : t('school.billing.invoice_empty_standard')}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {t('school.billing.invoice_appear_when')}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

function RenewalCtaCard({
  daysRemaining,
  schoolName,
}: {
  daysRemaining: number
  schoolName: string
}) {
  if (daysRemaining > RENEWAL_WARNING_DAYS) return null

  return (
    <div className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-5 py-4">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-clay-600" />
        <div className="flex-1 space-y-3">
          <p className="text-sm font-semibold text-amber-700">
            Your FOUNDER access expires in{' '}
            <span className="font-bold">
              {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'}
            </span>
            . Renew now to maintain uninterrupted access for all students and teachers.
          </p>
          <Button
            className="bg-amber-500 text-amber-950 hover:bg-amber-400 font-semibold"
            size="sm"
            render={<a href={buildRenewalMailto(schoolName)} />}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Us to Renew
          </Button>
        </div>
      </div>
    </div>
  )
}

function BillingContactCard() {
  return (
    <Card className="border-border bg-card/60">
      <CardContent className="flex items-center gap-3 py-4">
        <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          For billing questions:{' '}
          <a
            href={`mailto:${BILLING_EMAIL}`}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {BILLING_EMAIL}
          </a>
        </p>
      </CardContent>
    </Card>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function SchoolBillingPage() {
  const [access, setAccess] = useState<SchoolAccessData | null>(null)
  const [stats, setStats] = useState<UsageStats>({ totalStudents: 0, totalTeachers: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [statsLoading, setStatsLoading] = useState(true)

  // Fetch access data
  useEffect(() => {
    async function fetchAccess() {
      try {
        const res = await fetch('/api/school/access')
        if (!res.ok) {
          const json = await res.json().catch(() => ({}))
          setError((json as { error?: string }).error ?? 'Failed to load billing information.')
          return
        }
        const data: SchoolAccessData = await res.json()
        setAccess(data)
      } catch {
        setError('Failed to load billing information. Please refresh the page.')
      } finally {
        setLoading(false)
      }
    }

    fetchAccess()
  }, [])

  // Fetch usage stats via overview endpoint
  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/school/overview')
        if (!res.ok) return
        const json = await res.json()
        setStats({
          totalStudents: json?.overview?.total_students ?? 0,
          totalTeachers: json?.overview?.total_teachers ?? 0,
        })
      } catch {
        // Stats are non-critical — fail silently
      } finally {
        setStatsLoading(false)
      }
    }

    fetchStats()
  }, [])

  const isFounder = access?.accessType === 'founder'
  const isPaid = access?.accessType === 'paid'
  const daysRemaining = isFounder ? calcDaysRemaining() : (access?.daysRemaining ?? 0)

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <CreditCard className="h-6 w-6 text-muted-foreground" />
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Billing &amp; Subscription
          </h1>
          {access?.schoolName && (
            <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
              <Building2 className="h-3.5 w-3.5" />
              {access.schoolName}
            </p>
          )}
        </div>
      </div>

      {/* Loading state */}
      {loading && <LoadingSkeleton />}

      {/* Error state */}
      {!loading && error && (
        <div className="rounded-lg border border-destructive/40 bg-destructive/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <p className="text-sm text-destructive">{error}</p>
          </div>
        </div>
      )}

      {/* Main content */}
      {!loading && !error && access && (
        <div className="flex flex-col gap-6">
          {/* Renewal CTA (shown when < 60 days from expiry) */}
          {isFounder && (
            <RenewalCtaCard daysRemaining={daysRemaining} schoolName={access.schoolName} />
          )}

          {/* Current plan card */}
          {isFounder && <FounderPlanCard access={access} daysRemaining={daysRemaining} />}
          {isPaid && <PaidPlanCard access={access} />}

          {/* Per-pupil pricing */}
          <PricingCard isFounder={isFounder} />

          {/* Usage stats */}
          <UsageStatsCard stats={stats} loading={statsLoading} />

          {/* Invoice history */}
          <InvoiceHistoryCard isFounder={isFounder} />

          {/* Billing contact */}
          <BillingContactCard />
        </div>
      )}
    </div>
  )
}
