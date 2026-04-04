'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PRICING } from '@/constants/pricing'
import {
  Sparkles,
  CheckCircle,
  School,
} from 'lucide-react'

const STUDENT_FEATURES = [
  'First month FREE — no payment due today',
  'All 470+ courses included',
  'All 130+ mock exam papers',
  'AI essay feedback (10/day)',
  '2,000+ flashcards & 52 terminology entries',
  'Board-specific content for AQA, Edexcel, OCR, WJEC & IGCSE',
  'Certificates on completion',
  'Progress tracking & analytics',
  'Cancel anytime — no contracts',
]

const SCHOOL_FEATURES = [
  'All student features included',
  'Department Analytics dashboard',
  'Teacher Admin Portal',
  'Bulk User Upload',
  'Progress Reports',
  'CPD Resources',
  'Unlimited students + teachers',
  'Dedicated school support',
]

export default function PricingSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="bg-emerald-500/10 border-emerald-500/25 text-emerald-400 text-base font-bold mb-8 gap-2 px-5 py-2">
            <Sparkles className="w-5 h-5" />
            First Month FREE!
          </Badge>
          <h2 className="text-foreground">
            Simple, Honest Pricing
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
            Try everything free for 30 days. No commitment, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Student Card */}
          <Card className="p-8 flex flex-col border-primary/30 relative">
            <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 shadow-lg shadow-primary/25">
              Full Access
            </Badge>
            <h3 className="text-lg font-bold tracking-tight text-foreground">Everything Included</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-6">
              Full access — cancel anytime.
            </p>
            <div className="mb-2 flex items-baseline gap-4 flex-wrap">
              <div>
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {PRICING.CURRENCY}{PRICING.MONTHLY}
                </span>
                <span className="text-muted-foreground text-sm ml-1">/month</span>
              </div>
              <span className="text-muted-foreground text-sm">or</span>
              <div>
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {PRICING.CURRENCY}{PRICING.ANNUAL}
                </span>
                <span className="text-muted-foreground text-sm ml-1">/year</span>
                <Badge variant="outline" className="ml-2 bg-emerald-500/10 border-emerald-500/25 text-emerald-400 text-xs font-semibold">
                  Save 33%
                </Badge>
              </div>
            </div>
            <p className="text-sm text-emerald-400 font-semibold mb-6">
              First month completely free
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {STUDENT_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="default" className="w-full shadow-lg shadow-primary/20" render={<Link href="/auth/register" />}>
              Start Free Trial
            </Button>
          </Card>

          {/* School Card */}
          <Card className="p-8 flex flex-col border-amber-500/40 relative bg-amber-500/5">
            <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1 shadow-lg shadow-amber-500/25 whitespace-nowrap">
              School Site License
            </Badge>
            <div className="flex items-center gap-2 mb-1">
              <School className="w-5 h-5 text-amber-400 shrink-0" />
              <h3 className="text-lg font-bold tracking-tight text-foreground">School Site License</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-1 mb-6">
              Unlimited students + teachers
            </p>
            <div className="mb-2 flex items-baseline gap-3 flex-wrap">
              <div>
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {PRICING.SCHOOL_CURRENCY}{PRICING.SCHOOL_ANNUAL}
                </span>
                <span className="text-muted-foreground text-sm ml-1">/year</span>
              </div>
            </div>
            <div className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3">
              <p className="text-sm font-bold text-amber-400 mb-0.5">
                FOUNDER Offer
              </p>
              <p className="text-sm text-muted-foreground">
                Use code <span className="font-mono font-bold text-amber-300">{PRICING.FOUNDER_PROMO_CODE}</span> to register FREE until August 2026 &mdash; then {PRICING.SCHOOL_CURRENCY}{PRICING.SCHOOL_ANNUAL}/year
              </p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {SCHOOL_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              className="w-full border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:text-amber-300"
              render={<Link href="/for-schools/register" />}
            >
              Register Your School
            </Button>
          </Card>

        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 max-w-lg mx-auto">
          Your free trial lasts 30 days. You won&rsquo;t be charged until the trial ends.
          Cancel anytime from your account settings &mdash; no questions asked.
        </p>
      </div>
    </section>
  )
}
