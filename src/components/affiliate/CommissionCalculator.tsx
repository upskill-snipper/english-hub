'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { TierBadge, getTierFromReferrals } from './TierBadge'
import { calculateCommissionGbp, PUBLIC_TIER_LADDER } from '@/lib/affiliate/tiers'
import { Calculator, PoundSterling } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'

// 19 April 2026: rewritten for flat-rate tiered affiliate commissions.
// Student plan is now £20/year flat; commission is per-signup, lifetime-counted.

export function CommissionCalculator() {
  const [signups, setSignups] = useState(50)
  const t = useT()

  const tier = getTierFromReferrals(Math.max(0, signups - 1))

  const { total, currentPerSignup, breakdown } = useMemo(() => {
    // Compute total lifetime earnings by stepping through tier buckets.
    let cumulativeTotal = 0
    const bucketBreakdown: Array<{
      tierKey: 'tier-1' | 'tier-2' | 'tier-3' | 'tier-4' | 'tier-5'
      range: string
      count: number
      perSignup: number
      subtotal: number
    }> = []
    let remaining = signups

    for (const tierRow of PUBLIC_TIER_LADDER) {
      if (remaining <= 0) break
      const bucketMax = tierRow.maxSignup ?? Infinity
      const bucketSize = bucketMax - tierRow.minSignup + 1
      const inThisBucket = Math.min(remaining, bucketSize)
      if (inThisBucket > 0) {
        const subtotal = inThisBucket * tierRow.commissionGbp
        cumulativeTotal += subtotal
        bucketBreakdown.push({
          tierKey: tierRow.tier,
          range: tierRow.range,
          count: inThisBucket,
          perSignup: tierRow.commissionGbp,
          subtotal,
        })
        remaining -= inThisBucket
      }
    }

    const currentRate = calculateCommissionGbp(Math.max(0, signups - 1))
    return { total: cumulativeTotal, currentPerSignup: currentRate, breakdown: bucketBreakdown }
  }, [signups])

  const fmt = (value: number) =>
    new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0,
    }).format(value)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Calculator className="h-4 w-4" />
          </div>
          <div>
            <CardTitle>{t('aff_comp.calc.title')}</CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5">{t('aff_comp.calc.subtitle')}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="signups">{t('aff_comp.calc.total_signups_label')}</Label>
            <span className="text-sm font-semibold text-foreground">
              {signups.toLocaleString('en-GB')}
            </span>
          </div>
          <input
            id="signups"
            type="range"
            min={1}
            max={2000}
            step={1}
            value={signups}
            onChange={(e) => setSignups(Number(e.target.value))}
            className="w-full accent-primary cursor-pointer"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1</span>
            <span>1,000</span>
            <span>2,000+</span>
          </div>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/30 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground uppercase tracking-wide">
              {t('aff_comp.calc.current_tier')}
            </span>
            <TierBadge tier={tier} showCommission />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">
              {t('aff_comp.calc.total_lifetime_earnings')}
            </p>
            <p className="text-3xl font-bold text-primary">{fmt(total)}</p>
          </div>
          <p className="text-xs text-muted-foreground">
            {t('aff_comp.calc.next_signup_prefix')}{' '}
            <strong className="text-foreground">£{currentPerSignup}</strong>
            {t('aff_comp.calc.next_signup_suffix')}
          </p>

          {breakdown.length > 1 && (
            <div className="mt-2 space-y-1 text-xs pt-3 border-t border-border/40">
              {breakdown.map((b) => (
                <div key={b.range} className="flex justify-between">
                  <span className="text-muted-foreground">
                    {t('aff_comp.calc.signups_label')} {b.range} ({b.count.toLocaleString('en-GB')}{' '}
                    × £{b.perSignup})
                  </span>
                  <span className="font-medium text-foreground">{fmt(b.subtotal)}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
            {t('aff_comp.calc.tier_ladder')}
          </p>
          <div className="space-y-1 text-xs">
            {PUBLIC_TIER_LADDER.map((row) => (
              <div key={row.tier} className="flex justify-between">
                <span className="text-muted-foreground">
                  {t(`aff_comp.tier.${row.tier}.label`)} &middot; {t('aff_comp.calc.signups_dot')}{' '}
                  {row.range}
                </span>
                <span className="font-semibold text-foreground">
                  £{row.commissionGbp}
                  {t('aff_comp.calc.per_signup_suffix')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
