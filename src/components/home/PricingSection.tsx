'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PRICING } from '@/constants/pricing'
import { VAT_LABEL } from '@/lib/copy/pricing'
import { PromoCodePrompt } from '@/components/billing/AffiliateCodeField'
import { useT } from '@/lib/i18n/use-t'
import { Sparkles, CheckCircle, School, GraduationCap, Phone, Award } from 'lucide-react'

export default function PricingSection() {
  const t = useT()
  const studentSavePercent = Math.round(
    (1 - PRICING.STUDENT_ANNUAL / (PRICING.STUDENT_MONTHLY * 12)) * 100,
  )
  const teacherSavePercent = Math.round(
    (1 - PRICING.TEACHER_ANNUAL / (PRICING.TEACHER_MONTHLY * 12)) * 100,
  )

  const STUDENT_FEATURES = [
    t('pricing.student.feat.trial'),
    t('pricing.student.feat.demo_uses'),
    t('pricing.student.feat.courses'),
    t('pricing.student.feat.mocks'),
    t('pricing.student.feat.ai_feedback'),
    t('pricing.student.feat.flashcards'),
    t('pricing.student.feat.board_content'),
    t('pricing.student.feat.certificates'),
    t('pricing.student.feat.tracking'),
    t('pricing.student.feat.cancel'),
  ]

  const TEACHER_FEATURES = [
    t('pricing.teacher.feat.trial'),
    t('pricing.teacher.feat.demo_uses'),
    t('pricing.teacher.feat.everything_student'),
    t('pricing.teacher.feat.lesson_builder'),
    t('pricing.teacher.feat.analytics'),
    t('pricing.teacher.feat.resources'),
    t('pricing.teacher.feat.assignments'),
    t('pricing.teacher.feat.reports'),
    t('pricing.teacher.feat.support'),
  ]

  const SCHOOL_FEATURES = [
    t('pricing.school.feat.all'),
    t('pricing.school.feat.dept_analytics'),
    t('pricing.school.feat.admin_portal'),
    t('pricing.school.feat.bulk_upload'),
    t('pricing.school.feat.progress_reports'),
    t('pricing.school.feat.cpd'),
    t('pricing.school.feat.unlimited'),
    t('pricing.school.feat.dedicated_support'),
  ]

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="bg-emerald-500/10 border-emerald-500/25 text-emerald-400 text-base font-bold mb-8 gap-2 px-5 py-2"
          >
            <Sparkles className="w-5 h-5" />
            {t('pricing.trial_badge')}
          </Badge>
          <h2 className="text-foreground">{t('pricing.title_simple_honest')}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
            {t('pricing.subtitle_demo_uses')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* ── Student Card ── */}
          <Card className="p-8 flex flex-col border-primary/30 relative">
            <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 shadow-lg shadow-primary/25">
              {t('pricing.badge.most_popular')}
            </Badge>
            <h3 className="text-lg font-bold tracking-tight text-foreground">Student</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              {t('pricing.student.tagline')}
            </p>
            {/* Early-access badge */}
            <span className="mb-3 inline-flex w-fit items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-400">
              {PRICING.EARLY_ACCESS_LABEL}
            </span>
            <div className="mb-2 flex items-baseline gap-4 flex-wrap">
              <div>
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {PRICING.CURRENCY}
                  {PRICING.STUDENT_MONTHLY}
                </span>
                <span className="text-muted-foreground text-sm ml-1">/month</span>
                <span className="ml-2 text-xs text-muted-foreground line-through decoration-amber-500/60">
                  {PRICING.CURRENCY}
                  {PRICING.STUDENT_MONTHLY_STANDARD}
                </span>
              </div>
              <span className="text-muted-foreground text-sm">or</span>
              <div>
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {PRICING.CURRENCY}
                  {PRICING.STUDENT_ANNUAL}
                </span>
                <span className="text-muted-foreground text-sm ml-1">/year</span>
                <span className="ml-2 text-xs text-muted-foreground line-through decoration-amber-500/60">
                  {PRICING.CURRENCY}
                  {PRICING.STUDENT_ANNUAL_STANDARD}
                </span>
                <Badge
                  variant="outline"
                  className="ml-2 bg-emerald-500/10 border-emerald-500/25 text-emerald-400 text-xs font-semibold"
                >
                  {t('pricing.save_label')} {studentSavePercent}%
                </Badge>
              </div>
            </div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-amber-400">
              ⚡ {PRICING.PRICE_INCREASE_MESSAGE}
            </p>
            <p className="text-sm text-emerald-400 font-semibold mb-2">
              {PRICING.TRIAL_TEXT} · {t('pricing.card_cancel')}
            </p>
            <div className="mb-6 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2">
              <p className="text-xs text-emerald-300 font-semibold">
                {t('pricing.use_code_prefix')}{' '}
                <code className="font-mono bg-emerald-500/20 px-1.5 py-0.5 rounded">
                  {PRICING.AFFILIATE_PROMO_CODE}
                </code>{' '}
                {t('pricing.use_code_or_affiliate')} → {PRICING.CURRENCY}
                {PRICING.STUDENT_ANNUAL_WITH_CODE}/year ({t('pricing.save_label_lower')}{' '}
                {PRICING.CURRENCY}
                {PRICING.STUDENT_ANNUAL_SAVINGS})
              </p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {STUDENT_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              variant="default"
              className="w-full shadow-lg shadow-primary/20"
              render={<Link href="/pricing" />}
            >
              {t('pricing.cta.view_pricing')}
            </Button>
            {/* Promo code: type code → routes to /pricing?code=X
                where the full <AffiliateCodeField> auto-applies it. */}
            <PromoCodePrompt className="mt-4" />
          </Card>

          {/* ── Teacher Card ── */}
          <Card className="p-8 flex flex-col border-purple-500/30 relative">
            <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-4 py-1 shadow-lg shadow-purple-500/25">
              {t('pricing.badge.for_educators')}
            </Badge>
            <div className="flex items-center gap-2 mb-0">
              <GraduationCap className="w-5 h-5 text-purple-400 shrink-0" />
              <h3 className="text-lg font-bold tracking-tight text-foreground">Teacher</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              {t('pricing.teacher.tagline')}
            </p>
            {/* Early-access badge */}
            <span className="mb-3 inline-flex w-fit items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-400">
              {PRICING.EARLY_ACCESS_LABEL}
            </span>
            <div className="mb-2 flex items-baseline gap-4 flex-wrap">
              <div>
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {PRICING.CURRENCY}
                  {PRICING.TEACHER_MONTHLY}
                </span>
                <span className="text-muted-foreground text-sm ml-1">/month</span>
                <span className="ml-2 text-xs text-muted-foreground line-through decoration-amber-500/60">
                  {PRICING.CURRENCY}
                  {PRICING.TEACHER_MONTHLY_STANDARD}
                </span>
              </div>
              <span className="text-muted-foreground text-sm">or</span>
              <div>
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {PRICING.CURRENCY}
                  {PRICING.TEACHER_ANNUAL}
                </span>
                <span className="text-muted-foreground text-sm ml-1">/year</span>
                <span className="ml-2 text-xs text-muted-foreground line-through decoration-amber-500/60">
                  {PRICING.CURRENCY}
                  {PRICING.TEACHER_ANNUAL_STANDARD}
                </span>
                <Badge
                  variant="outline"
                  className="ml-2 bg-emerald-500/10 border-emerald-500/25 text-emerald-400 text-xs font-semibold"
                >
                  {t('pricing.save_label')} {teacherSavePercent}%
                </Badge>
              </div>
            </div>
            <p className="text-sm text-emerald-400 font-semibold mb-6">
              {PRICING.TRIAL_TEXT} · {t('pricing.card_cancel')}
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {TEACHER_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              variant="default"
              className="w-full bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/20"
              render={<Link href="/auth/teacher-register" />}
            >
              {t('pricing.cta.start_trial')}
            </Button>
          </Card>

          {/* ── Schools Card ── */}
          <Card className="p-8 flex flex-col border-amber-500/40 relative bg-amber-500/5">
            <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1 shadow-lg shadow-amber-500/25 whitespace-nowrap">
              {t('pricing.badge.whole_school')}
            </Badge>
            <div className="flex items-center gap-2 mb-0">
              <School className="w-5 h-5 text-clay-600 shrink-0" />
              <h3 className="text-lg font-bold tracking-tight text-foreground">Schools</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-1 mb-6">
              {t('pricing.school.tagline_unlimited')}
            </p>
            <div className="mb-2">
              <span className="text-3xl font-extrabold tracking-tight text-foreground">
                {t('pricing.school.custom_pricing')}
              </span>
              <p className="text-sm text-muted-foreground mt-1">{t('pricing.school.tailored')}</p>
            </div>
            <div className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3">
              <div className="flex items-center gap-2 mb-0.5">
                <Award className="w-4 h-4 text-clay-600 shrink-0" />
                <p className="text-sm font-bold text-clay-600">
                  {t('pricing.founding_schools_2026')}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">{t('pricing.founding_schools.desc')}</p>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {SCHOOL_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-clay-600 shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                className="w-full border-amber-500/50 text-clay-600 hover:bg-amber-500/10 hover:text-amber-700 gap-2"
                render={<Link href="/for-schools" />}
              >
                <Phone className="w-4 h-4" />
                {t('pricing.cta.book_call')}
              </Button>
              <Button
                variant="ghost"
                className="w-full text-clay-600/80 hover:text-amber-700"
                render={<Link href="/demo" />}
              >
                {t('pricing.cta.view_demo')}
              </Button>
            </div>
          </Card>
        </div>

        {/* Founding Schools Banner */}
        <div className="mt-12 rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center">
            <Award className="w-5 h-5 text-clay-600" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-foreground text-base mb-0.5">
              {t('pricing.founding_banner.title')}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('pricing.founding_banner.desc')}
            </p>
          </div>
          <Button
            variant="outline"
            className="border-amber-500/50 text-clay-600 hover:bg-amber-500/10 hover:text-amber-700 shrink-0"
            render={<Link href="/for-schools" />}
          >
            {t('pricing.cta.learn_more')}
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 max-w-lg mx-auto">
          {t('pricing.footer_demo_note')}
        </p>
        <p className="text-center text-xs text-muted-foreground/80 mt-4 max-w-2xl mx-auto">
          {VAT_LABEL}
        </p>
      </div>
    </section>
  )
}
