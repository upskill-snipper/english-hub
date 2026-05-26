// School pricing cards - server component. Renders the indicative
// Founder School Pilot tiers and the Annual Deployment tiers. Every
// figure is "from" framed and the indicative-pricing caveat is always
// shown. Values come from the single source of truth in
// @/constants/pricing so nothing is duplicated.

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PRICING_DISPLAY } from '@/constants/pricing'
import { cn } from '@/lib/utils'

interface Tier {
  name: string
  price: string
  blurb: string
  highlight?: boolean
}

const PILOT_TIERS: Tier[] = [
  {
    name: 'Single year group',
    price: PRICING_DISPLAY.pilotYearGroupFrom,
    blurb: 'Run the pilot with one year group to prove value before wider rollout.',
  },
  {
    name: 'English department',
    price: PRICING_DISPLAY.pilotDepartmentFrom,
    blurb: 'A whole-department pilot across KS3-KS4 English Language and Literature.',
    highlight: true,
  },
  {
    name: 'Multi-campus / group',
    price: PRICING_DISPLAY.pilotMultiCampus,
    blurb: 'For school groups and multi-campus trusts. Scope and pricing tailored.',
  },
]

const ANNUAL_TIERS: Tier[] = [
  {
    name: 'Small school',
    price: PRICING_DISPLAY.annualSmallFrom,
    blurb: 'Single-site secondary schools with a focused English department.',
  },
  {
    name: 'Mid-sized school',
    price: PRICING_DISPLAY.annualMidFrom,
    blurb: 'Larger schools deploying across multiple year groups and teachers.',
    highlight: true,
  },
  {
    name: 'Large school or group',
    price: PRICING_DISPLAY.annualLargeFrom,
    blurb: 'Multi-campus schools and education groups with custom requirements.',
  },
]

function TierCard({ tier }: { tier: Tier }) {
  return (
    <Card
      className={cn(
        'flex h-full flex-col p-6',
        tier.highlight ? 'border-primary/40 ring-1 ring-primary/15' : 'border-border/50',
      )}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        {tier.name}
      </p>
      <p className="mt-2 font-serif text-2xl font-semibold text-foreground">{tier.price}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{tier.blurb}</p>
    </Card>
  )
}

export function SchoolPricingCards({
  showPilots = true,
  showAnnual = true,
  ctaHref = '/school-pilot',
  ctaLabel = 'Request Founder School Pricing',
  className,
}: {
  showPilots?: boolean
  showAnnual?: boolean
  ctaHref?: string
  ctaLabel?: string
  className?: string
}) {
  return (
    <div className={cn('space-y-10', className)}>
      {showPilots && (
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground">Founder School Pilot</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Most schools begin with a structured pilot over {PRICING_DISPLAY.schoolPilotLength}.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {PILOT_TIERS.map((t) => (
              <TierCard key={t.name} tier={t} />
            ))}
          </div>
        </div>
      )}

      {showAnnual && (
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground">
            Annual school deployment
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Following a successful pilot, schools move to an annual deployment.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {ANNUAL_TIERS.map((t) => (
              <TierCard key={t.name} tier={t} />
            ))}
          </div>
        </div>
      )}

      <div className="rounded-xl border border-border/60 bg-muted/40 px-5 py-4">
        <p className="text-xs leading-relaxed text-muted-foreground">
          {PRICING_DISPLAY.schoolPricingCaveat}
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button size="lg" className="h-12" render={<Link href={ctaHref} />}>
          {ctaLabel}
        </Button>
        <Button variant="outline" size="lg" className="h-12" render={<Link href="/contact" />}>
          Discuss your English department needs
        </Button>
      </div>
    </div>
  )
}
