'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Award, Sparkles, Eye, ListChecks, Zap } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'

const steps = [
  {
    step: 1,
    icon: ListChecks,
    titleKey: 'home.hiw.step1.title',
    descKey: 'home.hiw.step1.desc',
  },
  {
    step: 2,
    icon: BookOpen,
    titleKey: 'home.hiw.step2.title',
    descKey: 'home.hiw.step2.desc',
  },
  {
    step: 3,
    icon: Eye,
    titleKey: 'home.hiw.step3.title',
    descKey: 'home.hiw.step3.desc',
  },
  {
    step: 4,
    icon: Sparkles,
    titleKey: 'home.hiw.step4.title',
    descKey: 'home.hiw.step4.desc',
  },
  {
    step: 5,
    icon: Zap,
    titleKey: 'home.hiw.step5.title',
    descKey: 'home.hiw.step5.desc',
  },
  {
    step: 6,
    icon: Award,
    titleKey: 'home.hiw.step6.title',
    descKey: 'home.hiw.step6.desc',
  },
]

export default function HowItWorksSection() {
  const t = useT()
  return (
    <section className="py-24 sm:py-32 bg-card/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-foreground">{t('home.how_it_works')}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
            {t('home.hiw.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((item) => (
            <Card key={item.step} className="flex items-start gap-5 p-6 border-border/40">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-base font-bold text-primary">{item.step}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-foreground mb-1">
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-14">
          <Button
            variant="default"
            size="lg"
            className="text-base px-10 h-12 shadow-lg shadow-primary/20"
            render={<Link href="/auth/register" />}
          >
            {t('home.start_trial')}
          </Button>
        </div>
      </div>
    </section>
  )
}
