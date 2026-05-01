'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function CTABannerSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Card className="relative p-14 sm:p-18 overflow-hidden border-border/40">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />

          <div className="relative">
            <h2 className="text-foreground mb-5">Ready to Raise Your Grade?</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-body-lg">
              GCSE and IGCSE English revision, AI marked against the AO rubric.
            </p>
            <Button
              variant="default"
              size="lg"
              className="text-base px-10 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/register" />}
            >
              Start Free Trial
            </Button>
            <p className="mt-8 text-sm text-muted-foreground">
              <Link href="/courses" className="text-primary hover:underline font-medium">
                View all courses &rarr;
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
