'use client'

import Link from 'next/link'
import { Lock, Crown } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { type GatedFeature, FREE_USES_PER_FEATURE } from '@/lib/feature-gating'
import { PRICING } from '@/constants/pricing'
import { PromoCodePrompt } from '@/components/billing/AffiliateCodeField'
import { useT } from '@/lib/i18n/use-t'

const FEATURE_BENEFIT_KEYS: Record<GatedFeature, string> = {
  ai_essay_marking: 'feature.benefit.ai_essay_marking',
  mock_exam: 'feature.benefit.mock_exam',
  feedback_report: 'feature.benefit.feedback_report',
  ai_study_recommendations: 'feature.benefit.ai_study_recommendations',
  ai_lesson_plan: 'feature.benefit.ai_lesson_plan',
  worksheet_builder: 'feature.benefit.worksheet_builder',
  mark_scheme_generator: 'feature.benefit.mark_scheme_generator',
  export_pptx_word: 'feature.benefit.export_pptx_word',
  class_analytics: 'feature.benefit.class_analytics',
  student_reports: 'feature.benefit.student_reports',
}

const FEATURE_NAME_KEYS: Record<GatedFeature, string> = {
  ai_essay_marking: 'feature.name.ai_essay_marking',
  mock_exam: 'feature.name.mock_exam',
  feedback_report: 'feature.name.feedback_report',
  ai_study_recommendations: 'feature.name.ai_study_recommendations',
  ai_lesson_plan: 'feature.name.ai_lesson_plan',
  worksheet_builder: 'feature.name.worksheet_builder',
  mark_scheme_generator: 'feature.name.mark_scheme_generator',
  export_pptx_word: 'feature.name.export_pptx_word',
  class_analytics: 'feature.name.class_analytics',
  student_reports: 'feature.name.student_reports',
}

interface FeatureLockoutProps {
  feature: GatedFeature
}

export function FeatureLockout({ feature }: FeatureLockoutProps) {
  const t = useT()
  const featureName = t(FEATURE_NAME_KEYS[feature])
  const benefit = t(FEATURE_BENEFIT_KEYS[feature])
  const pricingLine = t('feature.lockout.plan_pricing')
    .replace('{currency}', PRICING.CURRENCY)
    .replace('{student}', String(PRICING.STUDENT_MONTHLY))
    .replace('{teacher}', String(PRICING.TEACHER_MONTHLY))
  const description = t('feature.lockout.description').replace(
    '{total}',
    String(FREE_USES_PER_FEATURE),
  )

  return (
    <Card className="mx-auto max-w-md border-amber-200/60 dark:border-amber-800/40">
      <CardHeader className="text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
          <Lock className="size-7 text-amber-600" />
        </div>
        <CardTitle className="text-lg">
          {featureName} {t('feature.lockout.title_suffix')}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{benefit}</p>
        </div>
        <div className="mt-4 flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 p-4">
          <div>
            <p className="text-sm font-semibold">{t('feature.lockout.plan_title')}</p>
            <p className="text-xs text-muted-foreground">{pricingLine}</p>
          </div>
          <Badge variant="default" className="bg-emerald-600 hover:bg-emerald-600">
            {PRICING.TRIAL_TEXT}
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button render={<Link href="/pricing" />} size="lg" className="w-full">
          <Crown className="size-4" />
          {t('feature.lockout.cta_trial')}
        </Button>
        <PromoCodePrompt className="w-full" />
        <p className="text-xs text-muted-foreground text-center">
          {t('feature.lockout.trial_note')}
        </p>
      </CardFooter>
    </Card>
  )
}
