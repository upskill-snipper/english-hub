'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { TIER_CONFIG, getTierFromReferrals, TierBadge } from './TierBadge'
import { Calculator, PoundSterling } from 'lucide-react'

// Supabase: pull actual plan prices from products table when available

const DEFAULT_PLAN_PRICE = 12.99

export function CommissionCalculator() {
  const [referrals, setReferrals] = useState(15)
  const [planPrice, setPlanPrice] = useState(DEFAULT_PLAN_PRICE)

  const tier = getTierFromReferrals(referrals)

  const { monthly, yearly, commissionRate } = useMemo(() => {
    const rate = TIER_CONFIG[tier].commission
    const monthlyValue = (referrals * planPrice * rate) / 100
    return {
      monthly: monthlyValue,
      yearly: monthlyValue * 12,
      commissionRate: rate,
    }
  }, [referrals, planPrice, tier])

  const format = (value: number) =>
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
            <CardTitle>Commission Calculator</CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5">
              See how much you could earn
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="referrals">Students referred / month</Label>
            <span className="text-sm font-semibold text-foreground">{referrals}</span>
          </div>
          <input
            id="referrals"
            type="range"
            min={1}
            max={50}
            value={referrals}
            onChange={(e) => setReferrals(Number(e.target.value))}
            className="w-full accent-primary cursor-pointer"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1</span>
            <span>25</span>
            <span>50</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Average plan price (£)</Label>
          <div className="relative">
            <PoundSterling className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="price"
              type="number"
              min={0}
              step={0.5}
              value={planPrice}
              onChange={(e) => setPlanPrice(Number(e.target.value) || 0)}
              className="pl-9"
            />
          </div>
        </div>

        <div className="rounded-xl border border-border/60 bg-muted/30 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground uppercase tracking-wide">
              Your tier
            </span>
            <TierBadge tier={tier} showCommission />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs text-muted-foreground">Monthly earnings</p>
              <p className="text-2xl font-bold text-foreground">{format(monthly)}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Yearly potential</p>
              <p className="text-2xl font-bold text-primary">{format(yearly)}</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground pt-2 border-t border-border/40">
            Based on {referrals} referrals × £{planPrice.toFixed(2)} × {commissionRate}%
            commission.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
