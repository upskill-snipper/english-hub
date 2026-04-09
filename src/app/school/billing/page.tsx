"use client"

import { useEffect, useState } from "react"
import {
  CreditCard,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Mail,
  TrendingUp,
  Users,
  Building2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SchoolAccessData {
  schoolId: string
  schoolName: string
  accessType: "founder" | "paid" | "trial" | "expired"
  accessUntil: string | null
  isActive: boolean
  daysRemaining: number | null
  userRole: "admin" | "head_of_department" | "teacher" | "student"
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

const BILLING_EMAIL = "info@Upskillenergy.com"
const FOUNDER_EXPIRY = new Date("2026-08-31T23:59:59Z")
const LICENSE_PRICE = "1,500"
const RENEWAL_WARNING_DAYS = 60

const LICENSE_FEATURES = [
  "Unlimited students",
  "All teachers included",
  "Full resource library access",
  "Admin portal & dashboard",
  "Analytics & progress tracking",
  "Priority support",
]

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function calcDaysRemaining(): number {
  const ms = FOUNDER_EXPIRY.getTime() - Date.now()
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)))
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
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
  const showRenewalWarning = daysRemaining <= RENEWAL_WARNING_DAYS

  return (
    <Card className="border-amber-500/30 bg-amber-500/5">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-amber-400" />
            <CardTitle className="text-foreground">Current Plan</CardTitle>
          </div>
          <Badge className="shrink-0 border border-amber-500/40 bg-amber-500/15 text-amber-400 text-xs font-semibold">
            FOUNDER
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Plan heading + active badge */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            FOUNDER Access
          </h2>
          <Badge className="w-fit border border-emerald-500/30 bg-emerald-500/15 text-emerald-400 text-xs">
            <CheckCircle className="mr-1 h-3 w-3" />
            Active
          </Badge>
        </div>

        {/* Expiry info */}
        <div className="rounded-lg border border-border bg-muted/30 px-4 py-3 space-y-2">
          <div className="flex items-center gap-2 text-sm text-foreground">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">Free access until 31 August 2026</span>
          </div>
          <p className="text-sm text-muted-foreground pl-6">
            After expiry: <span className="text-foreground font-medium">&pound;{LICENSE_PRICE}/year</span> for school site license
          </p>
          <div className="pl-6 pt-1">
            <span className="inline-block rounded-md bg-muted/60 px-3 py-1 text-sm font-semibold text-foreground tabular-nums">
              {daysRemaining} {daysRemaining === 1 ? "day" : "days"} remaining
            </span>
          </div>
        </div>

        {/* Renewal warning */}
        {showRenewalWarning && (
          <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            <p className="text-sm text-amber-300">
              Your FOUNDER access expires in{" "}
              <span className="font-semibold">{daysRemaining} days</span>. Renew now to maintain
              uninterrupted access for all students and teachers.
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-2 pt-1 sm:flex-row">
          <Button
            variant="outline"
            className="border-amber-500/40 text-amber-400 hover:bg-amber-500/10 hover:text-amber-300"
            render={<a href={buildRenewalMailto(access.schoolName)} />}
          >
              <Mail className="mr-2 h-4 w-4" />
              Contact Us to Renew
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
            render={<a href={`mailto:${BILLING_EMAIL}?subject=Early%20Renewal%20-%20${encodeURIComponent(access.schoolName)}`} />}
          >
              Renew Early
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function PaidPlanCard({ access }: { access: SchoolAccessData }) {
  const [showCancelConfirm, setShowCancelConfirm] = useState(false)

  return (
    <Card className="border-border bg-card/60">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-foreground">Current Plan</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            School Site License
          </h2>
          <div className="flex items-center gap-2">
            <Badge className="w-fit border border-emerald-500/30 bg-emerald-500/15 text-emerald-400 text-xs">
              <CheckCircle className="mr-1 h-3 w-3" />
              Active
            </Badge>
            <span className="text-sm text-muted-foreground font-medium">
              &pound;{LICENSE_PRICE}/year
            </span>
          </div>
        </div>

        {access.accessUntil && (
          <div className="rounded-lg border border-border bg-muted/30 px-4 py-3 space-y-1">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Renews:</span>
              <span className="font-medium text-foreground">{formatDate(access.accessUntil)}</span>
            </div>
            {access.daysRemaining !== null && (
              <p className="pl-6 text-xs text-muted-foreground">
                {access.daysRemaining} days until renewal
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
            Cancel Subscription
          </Button>
        ) : (
          <div className="rounded-lg border border-destructive/40 bg-destructive/5 px-4 py-3 space-y-3">
            <p className="text-sm font-medium text-destructive">
              Are you sure you want to cancel?
            </p>
            <p className="text-xs text-muted-foreground">
              Your access will continue until the end of the billing period. Contact us to process
              the cancellation.
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="border-destructive/40 text-destructive hover:bg-destructive/10"
                render={<a href={`mailto:${BILLING_EMAIL}?subject=Cancel%20Subscription%20-%20${encodeURIComponent(access.schoolName)}`} />}
              >
                  <Mail className="mr-1.5 h-3.5 w-3.5" />
                  Email to Cancel
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCancelConfirm(false)}
              >
                Keep Subscription
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function SiteLicenseInfoCard() {
  return (
    <Card className="border-border bg-card/60">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Building2 className="h-5 w-5 text-muted-foreground" />
          <div>
            <CardTitle className="text-foreground">School Site License</CardTitle>
            <CardDescription className="mt-0.5">
              Everything your school needs in one plan.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Price */}
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl font-bold text-foreground">&pound;{LICENSE_PRICE}</span>
          <span className="text-sm text-muted-foreground">/ year</span>
        </div>

        {/* Features */}
        <ul className="space-y-2">
          {LICENSE_FEATURES.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground">
              <CheckCircle className="h-4 w-4 shrink-0 text-emerald-500" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex flex-col gap-2 pt-1 sm:flex-row">
          <Button className="bg-primary hover:bg-primary/90" render={<a href={`mailto:${BILLING_EMAIL}?subject=Upgrade%20to%20Site%20License`} />}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Us to Upgrade
          </Button>
          <Button variant="outline" size="sm" className="text-muted-foreground" render={<a href={`mailto:${BILLING_EMAIL}?subject=Site%20License%20Enquiry`} />}>
              Get a Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function UsageStatsCard({ stats, loading }: { stats: UsageStats; loading: boolean }) {
  const rows = [
    {
      icon: Users,
      label: "Students",
      value: loading ? "--" : String(stats.totalStudents),
      limit: "Unlimited",
    },
    {
      icon: Users,
      label: "Teachers",
      value: loading ? "--" : String(stats.totalTeachers),
      limit: "Unlimited",
    },
    {
      icon: TrendingUp,
      label: "Storage",
      value: "N/A",
      limit: "All resources included",
    },
  ]

  return (
    <Card className="border-border bg-card/60">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <TrendingUp className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-foreground">Usage</CardTitle>
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
                <span className="mx-1 text-xs text-muted-foreground">of</span>
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
  return (
    <Card className="border-border bg-card/60">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <CreditCard className="h-5 w-5 text-muted-foreground" />
          <CardTitle className="text-foreground">Invoice & Payment History</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <CreditCard className="mb-3 h-8 w-8 text-muted-foreground/30" />
          <p className="text-sm text-muted-foreground">
            {isFounder
              ? "No invoices yet. You are on a free FOUNDER plan."
              : "No payment history available."}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Invoices will appear here once a paid subscription is active.
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
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
        <div className="flex-1 space-y-3">
          <p className="text-sm font-semibold text-amber-300">
            Your FOUNDER access expires in{" "}
            <span className="font-bold">{daysRemaining} {daysRemaining === 1 ? "day" : "days"}</span>.
            Renew now to maintain uninterrupted access for all students and teachers.
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
          For billing questions:{" "}
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
        const res = await fetch("/api/school/access")
        if (!res.ok) {
          const json = await res.json().catch(() => ({}))
          setError((json as { error?: string }).error ?? "Failed to load billing information.")
          return
        }
        const data: SchoolAccessData = await res.json()
        setAccess(data)
      } catch {
        setError("Failed to load billing information. Please refresh the page.")
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
        const res = await fetch("/api/school/overview")
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

  const isFounder = access?.accessType === "founder"
  const isPaid = access?.accessType === "paid"
  const daysRemaining = isFounder ? calcDaysRemaining() : (access?.daysRemaining ?? 0)

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
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
          {isFounder && (
            <FounderPlanCard access={access} daysRemaining={daysRemaining} />
          )}
          {isPaid && <PaidPlanCard access={access} />}

          {/* Site license info */}
          <SiteLicenseInfoCard />

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
