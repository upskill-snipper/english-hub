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
import {
  type GatedFeature,
  FEATURE_NAMES,
  FREE_USES_PER_FEATURE,
} from '@/lib/feature-gating'

const FEATURE_BENEFITS: Record<GatedFeature, string> = {
  ai_essay_marking:
    'Get detailed, exam-board-aligned feedback on every essay with AI-powered marking.',
  mock_exam:
    'Practise with full-length mock exams that mirror real GCSE and A-Level papers.',
  feedback_report:
    'Generate comprehensive feedback reports to share with students and parents.',
  ai_study_recommendations:
    'Receive personalised study plans tailored to each student\'s strengths and gaps.',
  ai_lesson_plan:
    'Create curriculum-aligned lesson plans in minutes with AI assistance.',
  worksheet_builder:
    'Build differentiated worksheets with auto-generated questions and mark schemes.',
  mark_scheme_generator:
    'Generate detailed mark schemes aligned to exam board criteria.',
  export_pptx_word:
    'Export lesson materials directly to PowerPoint and Word for easy classroom use.',
  class_analytics:
    'Track class-wide progress with detailed performance analytics and insights.',
  student_reports:
    'Generate individual student progress reports with targeted improvement areas.',
}

interface FeatureLockoutProps {
  feature: GatedFeature
}

export function FeatureLockout({ feature }: FeatureLockoutProps) {
  const featureName = FEATURE_NAMES[feature]
  const benefit = FEATURE_BENEFITS[feature]

  return (
    <Card className="mx-auto max-w-md border-amber-200/60 dark:border-amber-800/40">
      <CardHeader className="text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
          <Lock className="size-7 text-amber-600" />
        </div>
        <CardTitle className="text-lg">
          {featureName} is now locked
        </CardTitle>
        <CardDescription>
          You&apos;ve used all {FREE_USES_PER_FEATURE} free submissions.
          Upgrade to Premium for unlimited access.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {benefit}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between rounded-lg border border-border/60 bg-muted/30 p-4">
          <div>
            <p className="text-sm font-semibold">Premium Plan</p>
            <p className="text-xs text-muted-foreground">
              Unlimited access to everything
            </p>
          </div>
          <Badge variant="default" className="bg-emerald-600 hover:bg-emerald-600">
            First month free
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          render={<Link href="/pricing" />}
          size="lg"
          className="w-full"
        >
          <Crown className="size-4" />
          Upgrade to Premium
        </Button>
        <p className="text-xs text-muted-foreground text-center">
          Cancel anytime. No obligation after your free trial.
        </p>
      </CardFooter>
    </Card>
  )
}
