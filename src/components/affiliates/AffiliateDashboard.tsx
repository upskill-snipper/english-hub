'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Copy,
  Check,
  TrendingUp,
  Clock,
  Users,
  AlertTriangle,
  ExternalLink,
  PoundSterling,
  Percent,
  GraduationCap,
  BookOpen,
  Award,
  Timer,
  Quote,
  Mail,
  Share2,
  QrCode,
  Activity,
  UserPlus,
  CheckCircle2,
  Wallet,
  ChevronUp,
  ChevronDown,
  BarChart3,
  Sparkles,
} from 'lucide-react'
import type {
  AffiliateWithRelations,
  AffiliateReferral,
  AffiliatePayout,
  AffiliateCommissionDefaults,
} from '@/lib/types'

/* ────────────────────────── Props ────────────────────────── */

interface AffiliateDashboardProps {
  affiliate: AffiliateWithRelations
  referrals: AffiliateReferral[]
  payouts: AffiliatePayout[]
  totalEarnings: number
  pendingEarnings: number
  totalPaid: number
  thisMonthEarnings: number
  totalClicks: number
  commissionRates: AffiliateCommissionDefaults | null
}

/* ────────────────────────── Mock data ────────────────────── */

const MOCK_TESTIMONIALS = [
  {
    quote:
      'Thanks to The English Hub, I went from a Grade 4 to a Grade 7 in just 3 months.',
    name: 'Year 11 Student',
    role: 'GCSE English',
    avatar: 'S',
  },
  {
    quote:
      'The AI marking changed everything for my essay writing. My teacher was amazed.',
    name: 'Year 10 Student',
    role: 'GCSE English Literature',
    avatar: 'A',
  },
  {
    quote:
      'I used to spend 6 hours planning per week. Now it\'s under 1 hour.',
    name: 'English Teacher',
    role: 'Secondary School',
    avatar: 'T',
  },
]

const MOCK_MONTHLY_EARNINGS = [
  { month: 'Nov', amount: 12 },
  { month: 'Dec', amount: 28 },
  { month: 'Jan', amount: 45 },
  { month: 'Feb', amount: 38 },
  { month: 'Mar', amount: 67 },
  { month: 'Apr', amount: 52 },
]

/* ────────────────────────── Helpers ──────────────────────── */

const formatGBP = (amount: number) => `£${amount.toFixed(2)}`

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

const formatRelativeTime = (dateStr: string) => {
  const now = new Date()
  const date = new Date(dateStr)
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  return formatDate(dateStr)
}

const anonymiseName = (index: number) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return `User ${letters[index % 26]}${letters[(index * 7 + 3) % 26]}`
}

/* ────────────────────────── Component ────────────────────── */

export default function AffiliateDashboard({
  affiliate,
  referrals,
  payouts,
  totalEarnings,
  pendingEarnings,
  totalPaid,
  thisMonthEarnings,
  totalClicks,
  commissionRates,
}: AffiliateDashboardProps) {
  const [copiedLink, setCopiedLink] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)
  const [earningsTab, setEarningsTab] = useState<'thisMonth' | 'lastMonth' | 'allTime'>('thisMonth')

  const viaToken =
    affiliate.rewardful_link_token ?? affiliate.rewardful_affiliate_id ?? 'YOUR_CODE'
  const affiliateUrl = `https://theenglishhub.app?via=${viaToken}`
  const promoCode = viaToken.toUpperCase()

  /* ── Copy handlers ── */
  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(affiliateUrl)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(promoCode)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  /* ── Computed data ── */
  const activeReferrals = referrals.filter(
    (r) => r.converted_to_paid_at && r.commission_status !== 'voided'
  )
  const conversionRate =
    totalClicks > 0 ? ((activeReferrals.length / totalClicks) * 100).toFixed(1) : '0.0'

  const confirmedEarnings = referrals
    .filter((r) => r.commission_status === 'confirmed')
    .reduce((sum, r) => sum + (r.commission_amount_gbp ?? 0), 0)

  // Impact stats (mock multiplied by real referral count)
  const studentCount = Math.max(activeReferrals.length, 1)
  const hoursLearning = studentCount * 47
  const teacherHoursSaved = Math.round(studentCount * 3.2)

  // Earnings by period
  const now = new Date()
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1)
  const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1)
  const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0)

  const filterByPeriod = (tab: typeof earningsTab) => {
    switch (tab) {
      case 'thisMonth':
        return referrals.filter(
          (r) =>
            r.converted_to_paid_at &&
            new Date(r.converted_to_paid_at) >= monthStart
        )
      case 'lastMonth':
        return referrals.filter(
          (r) =>
            r.converted_to_paid_at &&
            new Date(r.converted_to_paid_at) >= lastMonthStart &&
            new Date(r.converted_to_paid_at) <= lastMonthEnd
        )
      case 'allTime':
        return referrals.filter((r) => r.converted_to_paid_at)
    }
  }

  const filteredReferrals = filterByPeriod(earningsTab)
  const periodPending = filteredReferrals
    .filter((r) => r.commission_status === 'pending')
    .reduce((sum, r) => sum + (r.commission_amount_gbp ?? 0), 0)
  const periodConfirmed = filteredReferrals
    .filter((r) => r.commission_status === 'confirmed')
    .reduce((sum, r) => sum + (r.commission_amount_gbp ?? 0), 0)
  const periodPaid = filteredReferrals
    .filter((r) => r.commission_status === 'paid')
    .reduce((sum, r) => sum + (r.commission_amount_gbp ?? 0), 0)

  // Activity feed items
  const activityItems = [
    ...referrals.map((r) => ({
      type: 'signup' as const,
      date: r.created_at,
      amount: r.commission_amount_gbp,
      status: r.commission_status,
    })),
    ...payouts
      .filter((p) => p.status === 'paid')
      .map((p) => ({
        type: 'payout' as const,
        date: p.paid_at ?? p.created_at,
        amount: p.gross_commission_gbp,
        status: 'paid' as const,
      })),
  ]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 8)

  // Chart max for scaling
  const chartMax = Math.max(...MOCK_MONTHLY_EARNINGS.map((e) => e.amount), 1)

  /* ── Share handlers ── */
  const shareText = `Check out The English Hub — AI-powered GCSE English revision! ${affiliateUrl}`

  const handleShareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
      '_blank'
    )
  }
  const handleShareEmail = () => {
    window.open(
      `mailto:?subject=${encodeURIComponent('Check out The English Hub')}&body=${encodeURIComponent(shareText)}`,
      '_blank'
    )
  }

  /* ── Status badge ── */
  const statusBadge = (status: string) => {
    const styles: Record<string, string> = {
      pending: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      confirmed: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      paid: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      voided: 'bg-red-500/10 text-red-400 border-red-500/20',
      refunded: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    }
    return (
      <span
        className={`inline-block text-xs px-2.5 py-0.5 rounded-full border font-medium ${styles[status] ?? 'bg-muted text-muted-foreground border-border'}`}
      >
        {status}
      </span>
    )
  }

  /* ── SVG Ring Chart ── */
  const conversionRateNum = parseFloat(conversionRate)
  const ringCircumference = 2 * Math.PI * 36
  const ringOffset = ringCircumference - (conversionRateNum / 100) * ringCircumference

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to dashboard
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                Affiliate Portal
              </h1>
              <p className="text-sm text-muted-foreground">
                Welcome back, {affiliate.full_name.split(' ')[0]}
              </p>
            </div>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold w-fit">
            Tier {affiliate.tier} Partner
          </span>
        </div>

        {/* ── Disclosure Reminder ── */}
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-8 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
          <div className="text-sm text-yellow-200/90">
            <strong>Required for every post:</strong> Include{' '}
            <code className="bg-yellow-500/20 px-1.5 py-0.5 rounded text-yellow-300 font-mono text-xs">
              #ad
            </code>{' '}
            in the first 3 words of your caption. Posts without disclosure will not earn
            commission.{' '}
            <a
              href="https://www.asa.org.uk/advice-online/recognising-ads-social-media.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-100 inline-flex items-center gap-1"
            >
              ASA guidance <ExternalLink className="inline w-3 h-3" />
            </a>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            1. HERO STATS ROW
        ══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <GradientStatCard
            gradient="from-emerald-600/20 via-emerald-500/10 to-teal-600/5"
            borderGlow="border-emerald-500/20"
            icon={<PoundSterling className="w-5 h-5" />}
            iconColor="text-emerald-400"
            label="Total Earnings"
            value={formatGBP(totalEarnings)}
            trend={thisMonthEarnings > 0 ? `+${formatGBP(thisMonthEarnings)} this month` : undefined}
            trendUp={thisMonthEarnings > 0}
          />
          <GradientStatCard
            gradient="from-blue-600/20 via-blue-500/10 to-indigo-600/5"
            borderGlow="border-blue-500/20"
            icon={<Users className="w-5 h-5" />}
            iconColor="text-blue-400"
            label="Active Referrals"
            value={String(activeReferrals.length)}
            trend={`${referrals.length} total signups`}
          />
          <GradientStatCard
            gradient="from-amber-600/20 via-amber-500/10 to-orange-600/5"
            borderGlow="border-amber-500/20"
            icon={<Clock className="w-5 h-5" />}
            iconColor="text-amber-400"
            label="Pending Commission"
            value={formatGBP(pendingEarnings)}
            trend={confirmedEarnings > 0 ? `${formatGBP(confirmedEarnings)} confirmed` : 'Awaiting confirmation'}
          />
          {/* Conversion rate card with ring chart */}
          <div
            className={`relative overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-fuchsia-600/5 p-5`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Percent className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-muted-foreground">Conversion Rate</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-foreground">
                  {conversionRate}%
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {totalClicks} clicks total
                </p>
              </div>
              <svg
                className="w-20 h-20 -rotate-90 shrink-0"
                viewBox="0 0 80 80"
              >
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  className="text-purple-500/10"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  fill="none"
                  stroke="url(#convGradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray={ringCircumference}
                  strokeDashoffset={ringOffset}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="convGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#d946ef" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            2. YOUR IMPACT SECTION
        ══════════════════════════════════════════════════════════════ */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Your Impact</h2>
            <span className="text-xs text-muted-foreground ml-1">
              The difference you&apos;re making
            </span>
          </div>

          {/* Impact stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <ImpactCard
              icon={<GraduationCap className="w-6 h-6" />}
              value={String(studentCount)}
              label="Students you've helped"
              sublabel="improving their grades"
              color="text-emerald-400"
              bg="bg-emerald-500/10"
            />
            <ImpactCard
              icon={<BookOpen className="w-6 h-6" />}
              value={hoursLearning.toLocaleString()}
              label="Hours of learning"
              sublabel="delivered through your link"
              color="text-blue-400"
              bg="bg-blue-500/10"
            />
            <ImpactCard
              icon={<Award className="w-6 h-6" />}
              value="+1.2"
              label="Avg grade improvement"
              sublabel="across referred students"
              color="text-amber-400"
              bg="bg-amber-500/10"
              badge="grades"
            />
            <ImpactCard
              icon={<Timer className="w-6 h-6" />}
              value={String(teacherHoursSaved)}
              label="Teacher hours saved"
              sublabel="across referred teachers"
              color="text-purple-400"
              bg="bg-purple-500/10"
              badge="hours"
            />
          </div>

          {/* Testimonial cards */}
          <div className="grid md:grid-cols-3 gap-4">
            {MOCK_TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="relative bg-card border border-border rounded-xl p-5 hover:border-primary/20 transition-colors group"
              >
                <Quote className="w-8 h-8 text-primary/15 absolute top-4 right-4 group-hover:text-primary/25 transition-colors" />
                <p className="text-sm text-foreground/90 leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            3. EARNINGS BREAKDOWN
        ══════════════════════════════════════════════════════════════ */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Earnings Breakdown</h2>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-4 bg-card border border-border rounded-lg p-1 w-fit">
            {(
              [
                ['thisMonth', 'This Month'],
                ['lastMonth', 'Last Month'],
                ['allTime', 'All Time'],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setEarningsTab(key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  earningsTab === key
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Summary row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Pending</p>
              <p className="text-lg font-bold text-yellow-400">{formatGBP(periodPending)}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Confirmed</p>
              <p className="text-lg font-bold text-blue-400">{formatGBP(periodConfirmed)}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Paid</p>
              <p className="text-lg font-bold text-emerald-400">{formatGBP(periodPaid)}</p>
            </div>
          </div>

          {/* Table */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            {filteredReferrals.length === 0 ? (
              <p className="text-muted-foreground text-sm py-12 text-center">
                No referrals in this period yet.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-muted-foreground bg-secondary/30">
                      <th className="px-5 py-3 font-medium">Referral</th>
                      <th className="px-5 py-3 font-medium">Plan</th>
                      <th className="px-5 py-3 font-medium">Commission</th>
                      <th className="px-5 py-3 font-medium">Status</th>
                      <th className="px-5 py-3 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredReferrals.map((r, i) => (
                      <tr
                        key={r.id}
                        className="text-foreground hover:bg-secondary/20 transition-colors"
                      >
                        <td className="px-5 py-3 font-medium">{anonymiseName(i)}</td>
                        <td className="px-5 py-3 capitalize text-muted-foreground">
                          {r.plan_type ?? '\u2014'}
                        </td>
                        <td className="px-5 py-3 font-semibold">
                          {r.commission_amount_gbp != null
                            ? formatGBP(r.commission_amount_gbp)
                            : '\u2014'}
                        </td>
                        <td className="px-5 py-3">{statusBadge(r.commission_status)}</td>
                        <td className="px-5 py-3 text-muted-foreground text-xs">
                          {r.converted_to_paid_at
                            ? formatDate(r.converted_to_paid_at)
                            : formatDate(r.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            4. YOUR LINKS & PROMO
        ══════════════════════════════════════════════════════════════ */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <Share2 className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Your Links &amp; Promo</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            {/* Affiliate Link */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-primary" />
                Your Affiliate Link
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex-1 bg-background rounded-lg border border-border px-4 py-3 font-mono text-sm text-muted-foreground truncate">
                  {affiliateUrl}
                </div>
                <button
                  onClick={handleCopyLink}
                  className="btn-primary px-4 py-3 gap-2 text-sm shrink-0"
                >
                  {copiedLink ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  {copiedLink ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Promo Code */}
              <h3 className="text-sm font-semibold text-foreground mb-3 mt-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Personal Promo Code
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 bg-background rounded-lg border border-border px-4 py-3 font-mono text-lg font-bold text-foreground tracking-wider text-center">
                  {promoCode}
                </div>
                <button
                  onClick={handleCopyCode}
                  className="btn-secondary px-4 py-3 gap-2 text-sm shrink-0"
                >
                  {copiedCode ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  {copiedCode ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {commissionRates && (
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                  You earn{' '}
                  <strong className="text-foreground">
                    £{commissionRates.commission_annual_gbp}
                  </strong>{' '}
                  per annual signup{' \u00B7 '}
                  <strong className="text-foreground">
                    £{commissionRates.commission_monthly_gbp}
                  </strong>{' '}
                  per monthly signup{' \u00B7 '}
                  Paid monthly on the 1st
                </p>
              )}
            </div>

            {/* QR Code + Share buttons */}
            <div className="bg-card border border-border rounded-xl p-6 flex flex-col">
              <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <QrCode className="w-4 h-4 text-primary" />
                QR Code
              </h3>
              {/* Simple text-based QR placeholder */}
              <div className="bg-white rounded-xl p-4 w-fit mx-auto mb-5">
                <div className="grid grid-cols-11 gap-[2px]" aria-label="QR code placeholder">
                  {QR_PATTERN.map((row, ri) =>
                    row.map((cell, ci) => (
                      <div
                        key={`${ri}-${ci}`}
                        className={`w-[6px] h-[6px] rounded-[1px] ${cell ? 'bg-gray-900' : 'bg-white'}`}
                      />
                    ))
                  )}
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center mb-5">
                Share this QR code in your content
              </p>

              {/* Share buttons */}
              <h3 className="text-sm font-semibold text-foreground mb-3">Share on</h3>
              <div className="grid grid-cols-2 gap-2 mt-auto">
                <button
                  onClick={handleCopyLink}
                  className="btn-secondary px-3 py-2.5 text-xs gap-2"
                >
                  <Copy className="w-3.5 h-3.5" />
                  Copy Link
                </button>
                <button
                  onClick={handleShareTwitter}
                  className="btn-secondary px-3 py-2.5 text-xs gap-2"
                >
                  <XIcon className="w-3.5 h-3.5" />
                  Twitter / X
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `https://www.instagram.com/`,
                      '_blank'
                    )
                  }
                  className="btn-secondary px-3 py-2.5 text-xs gap-2"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  Instagram
                </button>
                <button
                  onClick={() =>
                    window.open(
                      `https://www.tiktok.com/`,
                      '_blank'
                    )
                  }
                  className="btn-secondary px-3 py-2.5 text-xs gap-2"
                >
                  <TikTokIcon className="w-3.5 h-3.5" />
                  TikTok
                </button>
                <button
                  onClick={handleShareEmail}
                  className="btn-secondary px-3 py-2.5 text-xs gap-2 col-span-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            5. PERFORMANCE CHART + 6. RECENT ACTIVITY
        ══════════════════════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-5 gap-4 mb-10">
          {/* Performance Chart */}
          <section className="lg:col-span-3 bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">Monthly Earnings</h2>
            </div>
            <div className="flex items-end gap-3 h-48">
              {MOCK_MONTHLY_EARNINGS.map((m) => {
                const heightPct = (m.amount / chartMax) * 100
                return (
                  <div
                    key={m.month}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <span className="text-xs text-muted-foreground font-medium">
                      £{m.amount}
                    </span>
                    <div className="w-full relative flex-1 flex items-end">
                      <div
                        className="w-full rounded-t-md bg-gradient-to-t from-primary/80 to-primary/40 transition-all duration-500"
                        style={{ height: `${heightPct}%`, minHeight: '4px' }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{m.month}</span>
                  </div>
                )
              })}
            </div>
            {/* Click trend line (simplified) */}
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                <span className="flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5" />
                  Click-through trend
                </span>
                <span>{totalClicks} total clicks</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full transition-all duration-700"
                  style={{
                    width: `${Math.min(
                      (totalClicks / Math.max(totalClicks * 1.5, 100)) * 100,
                      100
                    )}%`,
                  }}
                />
              </div>
            </div>
          </section>

          {/* Recent Activity Feed */}
          <section className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">Recent Activity</h2>
            </div>
            {activityItems.length === 0 ? (
              <p className="text-muted-foreground text-sm py-8 text-center">
                No activity yet. Share your link to get started!
              </p>
            ) : (
              <div className="space-y-1">
                {activityItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-secondary/30 transition-colors"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        item.type === 'signup'
                          ? item.status === 'paid'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : item.status === 'confirmed'
                              ? 'bg-blue-500/10 text-blue-400'
                              : 'bg-yellow-500/10 text-yellow-400'
                          : 'bg-emerald-500/10 text-emerald-400'
                      }`}
                    >
                      {item.type === 'signup' ? (
                        item.status === 'paid' ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : (
                          <UserPlus className="w-4 h-4" />
                        )
                      ) : (
                        <Wallet className="w-4 h-4" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground truncate">
                        {item.type === 'signup'
                          ? item.status === 'paid'
                            ? 'Commission confirmed'
                            : item.status === 'confirmed'
                              ? 'Commission confirmed'
                              : 'New signup via your link'
                          : 'Payout processed'}
                        {item.amount != null && (
                          <span className="font-semibold text-primary ml-1">
                            {formatGBP(item.amount)}
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatRelativeTime(item.date)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   Sub-components
═══════════════════════════════════════════════════════════════ */

function GradientStatCard({
  gradient,
  borderGlow,
  icon,
  iconColor,
  label,
  value,
  trend,
  trendUp,
}: {
  gradient: string
  borderGlow: string
  icon: React.ReactNode
  iconColor: string
  label: string
  value: string
  trend?: string
  trendUp?: boolean
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border ${borderGlow} bg-gradient-to-br ${gradient} p-5`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className={iconColor}>{icon}</span>
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <p className="text-2xl sm:text-3xl font-bold text-foreground">{value}</p>
      {trend && (
        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
          {trendUp !== undefined &&
            (trendUp ? (
              <ChevronUp className="w-3 h-3 text-emerald-400" />
            ) : (
              <ChevronDown className="w-3 h-3 text-red-400" />
            ))}
          {trend}
        </p>
      )}
    </div>
  )
}

function ImpactCard({
  icon,
  value,
  label,
  sublabel,
  color,
  bg,
  badge,
}: {
  icon: React.ReactNode
  value: string
  label: string
  sublabel: string
  color: string
  bg: string
  badge?: string
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/15 transition-colors">
      <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center mb-3 ${color}`}>
        {icon}
      </div>
      <div className="flex items-baseline gap-1.5">
        <p className="text-2xl font-bold text-foreground">{value}</p>
        {badge && (
          <span className="text-xs text-muted-foreground font-medium">{badge}</span>
        )}
      </div>
      <p className="text-sm font-medium text-foreground mt-1">{label}</p>
      <p className="text-xs text-muted-foreground">{sublabel}</p>
    </div>
  )
}

/* ── Simple social SVG icons ── */

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5.5" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.3z" />
    </svg>
  )
}

/* ── QR-like decorative pattern (11x11 grid) ── */
const QR_PATTERN = [
  [1,1,1,1,1,1,1,0,1,0,1],
  [1,0,0,0,0,0,1,0,0,1,0],
  [1,0,1,1,1,0,1,0,1,0,1],
  [1,0,1,1,1,0,1,0,0,1,1],
  [1,0,1,1,1,0,1,0,1,0,0],
  [1,0,0,0,0,0,1,0,1,1,0],
  [1,1,1,1,1,1,1,0,1,0,1],
  [0,0,0,0,0,0,0,0,0,1,0],
  [1,0,1,0,1,1,1,0,1,1,1],
  [0,1,0,1,0,0,0,0,1,0,0],
  [1,1,1,0,1,0,1,0,1,1,1],
]
