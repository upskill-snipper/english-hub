import { cn } from '@/lib/utils'
import { Award, Gem, Medal } from 'lucide-react'

// Supabase: persist tier to affiliate account when database is ready

export type AffiliateTier = 'bronze' | 'silver' | 'gold'

export const TIER_CONFIG: Record<
  AffiliateTier,
  {
    label: string
    commission: number
    minReferrals: number
    description: string
  }
> = {
  bronze: {
    label: 'Bronze',
    commission: 10,
    minReferrals: 0,
    description: 'Start earning as soon as you join',
  },
  silver: {
    label: 'Silver',
    commission: 15,
    minReferrals: 10,
    description: 'Unlock after 10 successful referrals',
  },
  gold: {
    label: 'Gold',
    commission: 25,
    minReferrals: 25,
    description: 'Unlock after 25 successful referrals',
  },
}

interface TierBadgeProps {
  tier: AffiliateTier
  size?: 'sm' | 'md' | 'lg'
  showCommission?: boolean
  className?: string
}

export function TierBadge({
  tier,
  size = 'md',
  showCommission = false,
  className,
}: TierBadgeProps) {
  const config = TIER_CONFIG[tier]

  const Icon = tier === 'gold' ? Gem : tier === 'silver' ? Award : Medal

  // Theme-token tints per tier
  const tint =
    tier === 'gold'
      ? 'bg-primary/15 text-primary border-primary/30'
      : tier === 'silver'
        ? 'bg-accent text-accent-foreground border-border'
        : 'bg-muted text-muted-foreground border-border'

  const sizeClasses =
    size === 'lg'
      ? 'px-4 py-2 text-sm gap-2 [&_svg]:size-5'
      : size === 'sm'
        ? 'px-2 py-0.5 text-xs gap-1 [&_svg]:size-3'
        : 'px-3 py-1 text-xs gap-1.5 [&_svg]:size-3.5'

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-semibold uppercase tracking-wide',
        tint,
        sizeClasses,
        className
      )}
    >
      <Icon />
      {config.label}
      {showCommission && <span className="opacity-80">· {config.commission}%</span>}
    </span>
  )
}

export function getTierFromReferrals(referrals: number): AffiliateTier {
  if (referrals >= TIER_CONFIG.gold.minReferrals) return 'gold'
  if (referrals >= TIER_CONFIG.silver.minReferrals) return 'silver'
  return 'bronze'
}
