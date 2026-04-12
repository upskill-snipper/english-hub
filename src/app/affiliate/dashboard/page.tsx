'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { AffiliateSidebar } from '@/components/affiliate/AffiliateSidebar'
import {
  TierBadge,
  TIER_CONFIG,
  getTierFromReferrals,
  type AffiliateTier,
} from '@/components/affiliate/TierBadge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  getAccount,
  getClicks,
  getConversions,
  seedMockData,
  type AffiliateAccount,
  type AffiliateClick,
  type AffiliateConversion,
} from '@/components/affiliate/mock-data'
import {
  MousePointerClick,
  TrendingUp,
  PoundSterling,
  Users,
  ArrowUpRight,
} from 'lucide-react'

// TODO(Phase-7): Supabase — hydrate dashboard from server queries instead of localStorage

export default function AffiliateDashboardPage() {
  const [account, setAccountState] = useState<AffiliateAccount | null>(null)
  const [clicks, setClicks] = useState<AffiliateClick[]>([])
  const [conversions, setConversions] = useState<AffiliateConversion[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    seedMockData()
    setAccountState(getAccount())
    setClicks(getClicks())
    setConversions(getConversions())
    setHydrated(true)
  }, [])

  const stats = useMemo(() => {
    const totalClicks = clicks.length
    const totalConversions = conversions.length
    const earnings = conversions.reduce((sum, c) => sum + c.commission, 0)
    const conversionRate =
      totalClicks > 0 ? (totalConversions / totalClicks) * 100 : 0
    return { totalClicks, totalConversions, earnings, conversionRate }
  }, [clicks, conversions])

  const tier: AffiliateTier = account?.tier ?? getTierFromReferrals(conversions.length)
  const currentTierConfig = TIER_CONFIG[tier]
  const nextTier: AffiliateTier | null =
    tier === 'bronze' ? 'silver' : tier === 'silver' ? 'gold' : null
  const nextTierConfig = nextTier ? TIER_CONFIG[nextTier] : null
  const progressToNext = nextTierConfig
    ? Math.min(
        100,
        (conversions.length / nextTierConfig.minReferrals) * 100
      )
    : 100

  const topLinks = useMemo(() => {
    const map = new Map<string, { clicks: number; conversions: number; earnings: number }>()
    clicks.forEach((c) => {
      const entry = map.get(c.linkId) ?? { clicks: 0, conversions: 0, earnings: 0 }
      entry.clicks += 1
      map.set(c.linkId, entry)
    })
    conversions.forEach((c) => {
      const entry = map.get(c.linkId) ?? { clicks: 0, conversions: 0, earnings: 0 }
      entry.conversions += 1
      entry.earnings += c.commission
      map.set(c.linkId, entry)
    })
    return Array.from(map.entries())
      .map(([linkId, data]) => ({ linkId, ...data }))
      .sort((a, b) => b.earnings - a.earnings)
      .slice(0, 5)
  }, [clicks, conversions])

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-muted-foreground">
        Loading...
      </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <AffiliateSidebar />
      <main className="flex-1 px-4 py-8 sm:px-8 max-w-6xl mx-auto w-full">
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-sm text-muted-foreground">
                Welcome back{account?.name ? `, ${account.name.split(' ')[0]}` : ''}
              </p>
              <h1 className="text-3xl font-bold text-foreground mt-1">Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <TierBadge tier={tier} size="lg" showCommission />
              <Button size="sm" render={<Link href="/affiliate/links" />}>
                Create link
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={MousePointerClick}
            label="Total clicks"
            value={stats.totalClicks.toLocaleString()}
          />
          <StatCard
            icon={Users}
            label="Conversions"
            value={stats.totalConversions.toLocaleString()}
          />
          <StatCard
            icon={TrendingUp}
            label="Conversion rate"
            value={`${stats.conversionRate.toFixed(1)}%`}
          />
          <StatCard
            icon={PoundSterling}
            label="Total earnings"
            value={`£${stats.earnings.toFixed(2)}`}
            highlight
          />
        </div>

        {/* Tier progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tier progress</CardTitle>
            <p className="text-sm text-muted-foreground">
              {nextTierConfig
                ? `${nextTierConfig.minReferrals - conversions.length} more referrals to unlock ${nextTierConfig.label}`
                : 'Congratulations — you have reached our top tier.'}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <TierBadge tier={tier} size="sm" />
                <span className="text-muted-foreground">
                  {currentTierConfig.commission}% current rate
                </span>
              </div>
              {nextTier && (
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">
                    {nextTierConfig?.commission}% next rate
                  </span>
                  <TierBadge tier={nextTier} size="sm" />
                </div>
              )}
            </div>
            <div
              role="progressbar"
              aria-valuenow={Math.round(progressToNext)}
              aria-valuemin={0}
              aria-valuemax={100}
              className="h-3 w-full overflow-hidden rounded-full bg-muted"
            >
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${progressToNext}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{conversions.length} referrals</span>
              {nextTierConfig && <span>{nextTierConfig.minReferrals} goal</span>}
            </div>
          </CardContent>
        </Card>

        {/* Top links */}
        <Card>
          <CardHeader>
            <CardTitle>Top-performing links</CardTitle>
            <p className="text-sm text-muted-foreground">
              Your best revenue generators this period
            </p>
          </CardHeader>
          <CardContent>
            {topLinks.length === 0 ? (
              <p className="text-sm text-muted-foreground">No data yet.</p>
            ) : (
              <div className="overflow-x-auto -mx-5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/60 text-xs uppercase tracking-wide text-muted-foreground">
                      <th className="py-2 px-5 text-left font-medium">Link</th>
                      <th className="py-2 px-3 text-right font-medium">Clicks</th>
                      <th className="py-2 px-3 text-right font-medium">Conv.</th>
                      <th className="py-2 px-5 text-right font-medium">Earnings</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topLinks.map((row) => (
                      <tr
                        key={row.linkId}
                        className="border-b border-border/40 last:border-0"
                      >
                        <td className="py-3 px-5">
                          <span className="font-medium text-foreground capitalize">
                            {row.linkId}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-right text-muted-foreground">
                          {row.clicks}
                        </td>
                        <td className="py-3 px-3 text-right text-muted-foreground">
                          {row.conversions}
                        </td>
                        <td className="py-3 px-5 text-right font-semibold text-foreground">
                          £{row.earnings.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

function StatCard({
  icon: Icon,
  label,
  value,
  highlight,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  highlight?: boolean
}) {
  return (
    <Card size="sm">
      <CardContent className="pt-2 space-y-3">
        <div
          className={
            highlight
              ? 'flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary'
              : 'flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-foreground'
          }
        >
          <Icon className="h-4 w-4" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            {label}
          </p>
          <p
            className={
              highlight
                ? 'text-2xl font-bold text-primary mt-1'
                : 'text-2xl font-bold text-foreground mt-1'
            }
          >
            {value}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
