'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'

export default function CTABannerSection() {
  const t = useT()
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Card className="relative p-14 sm:p-18 overflow-hidden border-border/40">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />

          <div className="relative">
            <h2 className="text-foreground mb-5">{t('home.cta_banner.heading')}</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-body-lg">
              {t('home.cta_banner.body')}
            </p>
            <Button
              variant="default"
              size="lg"
              className="text-base px-10 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/register" />}
            >
              {t('home.start_trial')}
            </Button>
            <p className="mt-8 text-sm text-muted-foreground">
              <Link href="/courses" className="text-primary hover:underline font-medium">
                {t('home.cta_banner.view_all_courses')} &rarr;
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
