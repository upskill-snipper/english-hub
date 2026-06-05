'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { TrustBox } from '@/components/trustpilot/TrustBox'
import { VAT_LABEL } from '@/lib/copy/pricing'
import { InfographicBanner } from '@/components/marketing/InfographicBanner'
import { PromoCodePrompt } from '@/components/billing/AffiliateCodeField'
import { FAQPageJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'
import {
  GraduationCap,
  BookOpen,
  Users,
  BarChart3,
  ChevronDown,
  CheckCircle,
  Sparkles,
  Layers,
  PenTool,
  ClipboardList,
  Clock,
  AlertTriangle,
  TrendingUp,
  Zap,
  FileText,
  Library,
  Building2,
  ChevronRight,
  Award,
  Download,
  Play,
  Monitor,
  Eye,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  DATA                                                                */
/* ------------------------------------------------------------------ */

// i18n-keyed copy. Titles/descriptions/questions resolve at render via
// useT() so AR/EN flips with the rest of the site. Icons/colors are not
// user-facing and stay inline.
const features = [
  {
    icon: Layers,
    color: 'text-primary bg-primary/10',
    titleKey: 'mkt.teachers.ft.feat.lesson_builder.title',
    descKey: 'mkt.teachers.ft.feat.lesson_builder.desc',
  },
  {
    icon: PenTool,
    color: 'text-teal-700 bg-emerald-500/10',
    titleKey: 'mkt.teachers.ft.feat.ai_marking.title',
    descKey: 'mkt.teachers.ft.feat.ai_marking.desc',
  },
  {
    icon: BarChart3,
    color: 'text-blue-600 bg-blue-500/10',
    titleKey: 'mkt.teachers.ft.feat.analytics.title',
    descKey: 'mkt.teachers.ft.feat.analytics.desc',
  },
  {
    icon: ClipboardList,
    color: 'text-purple-600 bg-purple-500/10',
    titleKey: 'mkt.teachers.ft.feat.homework.title',
    descKey: 'mkt.teachers.ft.feat.homework.desc',
  },
  {
    icon: Library,
    color: 'text-amber-600 bg-amber-500/10',
    titleKey: 'mkt.teachers.ft.feat.library.title',
    descKey: 'mkt.teachers.ft.feat.library.desc',
  },
  {
    icon: Award,
    color: 'text-red-600 bg-red-500/10',
    titleKey: 'mkt.teachers.ft.feat.board.title',
    descKey: 'mkt.teachers.ft.feat.board.desc',
  },
]

const timeSaverKeys = [
  'mkt.teachers.ft.timesaver.1',
  'mkt.teachers.ft.timesaver.2',
  'mkt.teachers.ft.timesaver.3',
  'mkt.teachers.ft.timesaver.4',
  'mkt.teachers.ft.timesaver.5',
  'mkt.teachers.ft.timesaver.6',
  'mkt.teachers.ft.timesaver.7',
  'mkt.teachers.ft.timesaver.8',
]

const faqKeys = [
  { q: 'mkt.teachers.ft.faq.cost.q', a: 'mkt.teachers.ft.faq.cost.a' },
  { q: 'mkt.teachers.ft.faq.features.q', a: 'mkt.teachers.ft.faq.features.a' },
  { q: 'mkt.teachers.ft.faq.boards.q', a: 'mkt.teachers.ft.faq.boards.a' },
  { q: 'mkt.teachers.ft.faq.marking.q', a: 'mkt.teachers.ft.faq.marking.a' },
  { q: 'mkt.teachers.ft.faq.upgrade.q', a: 'mkt.teachers.ft.faq.upgrade.a' },
  { q: 'mkt.teachers.ft.faq.free_tries.q', a: 'mkt.teachers.ft.faq.free_tries.a' },
]

/* ------------------------------------------------------------------ */
/*  SUB-COMPONENTS                                                      */
/* ------------------------------------------------------------------ */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const id = q
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
  return (
    <Card className="overflow-hidden border-border/40">
      <button
        id={`faq-trigger-${id}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-panel-${id}`}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-accent/30 transition-colors duration-200"
      >
        <span className="font-semibold text-foreground pr-4">{q}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300',
            open && 'rotate-180',
          )}
        />
      </button>
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-trigger-${id}`}
        className={cn(
          'grid transition-all duration-300',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </Card>
  )
}

function ProgressBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="text-muted-foreground">{label}</span>
        <span className="text-foreground font-medium">{value}%</span>
      </div>
      <div className="h-2 bg-border/40 rounded-full overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all', color)}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function ForTeachersPage() {
  const t = useT()
  // Resolve FAQ copy at render so it flips AR/EN; also feeds JSON-LD.
  const resolvedFaqs = faqKeys.map((f) => ({ q: t(f.q), a: t(f.a) }))
  return (
    <main className="min-h-screen bg-background">
      {/* ================================================================
          INFOGRAPHIC BANNER - one-glance product summary for teachers
      ================================================================ */}
      <InfographicBanner
        src="/infographics/for-teachers.png"
        alt="Infographic: powerful AI tools and insights for English teachers - save time, teach with precision, personalise learning, track progress, plan with confidence. Shows class overview, focus areas (vocabulary, structuring writing, reading inference, spelling), AI Lesson Builder, faster lesson planning, and student reports."
      />

      {/* ================================================================
          HERO
      ================================================================ */}
      <section className="relative overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.06] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Badge
            variant="outline"
            className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-10 gap-2 px-4 py-1.5"
          >
            <GraduationCap className="w-4 h-4" />
            {t('audience.teachers.hero.badge')}
          </Badge>

          <h1 className="text-foreground">{t('audience.teachers.hero.title')}</h1>

          <p className="mt-7 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('audience.teachers.hero.sub')}
          </p>

          <div className="mt-8 max-w-2xl mx-auto">
            <TrustBox variant="mini-carousel" />
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/teacher-register" />}
            >
              {t('audience.teachers.cta.start_free')}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="text-base px-8 h-12"
              render={<Link href="/pricing" />}
            >
              {t('pricing.cta.view_pricing')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-12"
              render={<Link href="/demo/teacher" />}
            >
              <Play className="w-4 h-4 mr-2" />
              {t('audience.teachers.cta.try_demo')}
            </Button>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            {t('audience.teachers.hero.demo_note')}
          </p>
        </div>
      </section>

      {/* ================================================================
          STATS BAR
      ================================================================ */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {[
              {
                icon: Clock,
                color: 'text-primary bg-primary/10',
                value: t('mkt.teachers.ft.stat.planning.value'),
                label: t('mkt.teachers.ft.stat.planning.label'),
              },
              {
                icon: PenTool,
                color: 'text-teal-700 bg-emerald-500/10',
                value: t('mkt.teachers.ft.stat.marking.value'),
                label: t('mkt.teachers.ft.stat.marking.label'),
              },
              {
                icon: BookOpen,
                color: 'text-purple-600 bg-purple-500/10',
                value: t('mkt.teachers.ft.stat.library.value'),
                label: t('mkt.teachers.ft.stat.library.label'),
              },
              {
                icon: Award,
                color: 'text-amber-600 bg-amber-500/10',
                value: '5',
                label: t('mkt.teachers.ft.stat.boards.label'),
              },
              {
                icon: Users,
                color: 'text-blue-600 bg-blue-500/10',
                value: t('mkt.teachers.ft.stat.founding.value'),
                label: t('mkt.teachers.ft.stat.founding.label'),
              },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 sm:gap-14">
                {i > 0 && <div className="hidden sm:block w-px h-10 bg-border/50" />}
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center',
                      stat.color,
                    )}
                  >
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold tracking-tight text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          START FREE -> TRY PREMIUM FLOW
      ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="border-emerald-500/20 bg-emerald-500/[0.06] text-teal-700 text-xs font-semibold mb-6 gap-1.5 px-3 py-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              {t('mkt.teachers.ft.startfree.badge')}
            </Badge>
            <h2 className="text-foreground">{t('mkt.teachers.ft.startfree.title')}</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              {t('mkt.teachers.ft.startfree.body')}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: Layers,
                color: 'text-primary bg-primary/10',
                title: t('mkt.teachers.ft.tool.lesson_plans.title'),
                desc: t('mkt.teachers.ft.tool.lesson_plans.desc'),
                uses: t('mkt.teachers.ft.tool.free_uses'),
              },
              {
                icon: PenTool,
                color: 'text-teal-700 bg-emerald-500/10',
                title: t('mkt.teachers.ft.tool.marking.title'),
                desc: t('mkt.teachers.ft.tool.marking.desc'),
                uses: t('mkt.teachers.ft.tool.free_uses'),
              },
              {
                icon: FileText,
                color: 'text-purple-600 bg-purple-500/10',
                title: t('mkt.teachers.ft.tool.worksheet.title'),
                desc: t('mkt.teachers.ft.tool.worksheet.desc'),
                uses: t('mkt.teachers.ft.tool.free_uses'),
              },
            ].map((tool) => (
              <Card
                key={tool.title}
                className="p-6 border-border/40 hover:border-primary/40 transition-colors duration-300 flex flex-col"
              >
                <div
                  className={cn(
                    'w-11 h-11 rounded-xl flex items-center justify-center mb-5',
                    tool.color,
                  )}
                >
                  <tool.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                  {tool.desc}
                </p>
                <Badge
                  variant="outline"
                  className="text-xs border-emerald-500/20 text-teal-700 w-fit"
                >
                  {tool.uses}
                </Badge>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-muted-foreground text-lg">{t('mkt.teachers.ft.upgrade_note')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                className="text-base px-8 h-12 shadow-lg shadow-primary/20"
                render={<Link href="/auth/teacher-register" />}
              >
                {t('mkt.teachers.ft.cta.start_free')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 h-12"
                render={<Link href="/pricing" />}
              >
                {t('mkt.teachers.ft.cta.view_pricing')}
              </Button>
            </div>
            {/* Promo code: routes to /pricing?code=X where the full
                AffiliateCodeField auto-applies. Surfaced here because
                affiliates may share their code with teachers via
                Twitter / school newsletters / emails. */}
            <PromoCodePrompt className="mt-6" />
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          TRY THE PLATFORM -- INTERACTIVE DEMO
      ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-6 gap-1.5 px-3 py-1"
            >
              <Play className="w-3.5 h-3.5" />
              {t('mkt.teachers.ft.demo.badge')}
            </Badge>
            <h2 className="text-foreground">{t('mkt.teachers.ft.demo.title')}</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
              {t('mkt.teachers.ft.demo.body')}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: Monitor,
                color: 'text-primary bg-primary/10',
                title: t('mkt.teachers.ft.demo.dashboard.title'),
                desc: t('mkt.teachers.ft.demo.dashboard.desc'),
                href: '/demo/teacher',
              },
              {
                icon: Layers,
                color: 'text-teal-700 bg-emerald-500/10',
                title: t('mkt.teachers.ft.demo.lessons.title'),
                desc: t('mkt.teachers.ft.demo.lessons.desc'),
                href: '/demo/teacher/lessons',
              },
              {
                icon: BarChart3,
                color: 'text-blue-600 bg-blue-500/10',
                title: t('mkt.teachers.ft.demo.analytics.title'),
                desc: t('mkt.teachers.ft.demo.analytics.desc'),
                href: '/demo/teacher/students/s1',
              },
            ].map((card) => (
              <Link key={card.title} href={card.href}>
                <Card className="p-6 border-border/40 hover:border-primary/40 transition-colors duration-300 h-full">
                  <div
                    className={cn(
                      'w-11 h-11 rounded-xl flex items-center justify-center mb-5',
                      card.color,
                    )}
                  >
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="default"
              size="lg"
              className="text-base px-8 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/demo/teacher" />}
            >
              <Play className="w-4 h-4 mr-2" />
              {t('mkt.teachers.ft.demo.launch')}
            </Button>
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          FEATURES (6 CARDS)
      ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">{t('mkt.teachers.ft.features.title')}</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
              {t('mkt.teachers.ft.features.body')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((item) => (
              <Card
                key={item.titleKey}
                className="p-6 flex flex-col border-border/40 hover:border-border/70 transition-colors duration-300"
              >
                <div
                  className={cn(
                    'w-11 h-11 rounded-xl flex items-center justify-center mb-5',
                    item.color,
                  )}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          CONTENT CREATION PREVIEW
      ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge
                variant="outline"
                className="border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-6 gap-1.5 px-3 py-1"
              >
                <Zap className="w-3.5 h-3.5" />
                {t('mkt.teachers.ft.content.badge')}
              </Badge>
              <h2 className="text-foreground mb-5">{t('mkt.teachers.ft.content.title')}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t('mkt.teachers.ft.content.body')}
              </p>
              <ul className="space-y-3">
                {[
                  'mkt.teachers.ft.content.point.1',
                  'mkt.teachers.ft.content.point.2',
                  'mkt.teachers.ft.content.point.3',
                  'mkt.teachers.ft.content.point.4',
                  'mkt.teachers.ft.content.point.5',
                ].map((pointKey) => (
                  <li key={pointKey} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{t(pointKey)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-6 h-11"
                  render={<Link href="/demo/teacher/lessons" />}
                >
                  <Play className="w-4 h-4 mr-2" />
                  {t('mkt.teachers.ft.content.cta')}
                </Button>
              </div>
            </div>

            {/* Mock generated lesson card */}
            <div className="space-y-3">
              <Card className="p-5 border-border/40 bg-card/60">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {t('mkt.teachers.ft.content.mock.generated')}
                  </span>
                  <Badge className="ml-auto text-xs bg-emerald-500/10 text-teal-700 border-emerald-500/20">
                    AQA
                  </Badge>
                </div>
                <h4 className="font-bold text-foreground mb-1">
                  {t('mkt.teachers.ft.content.mock.lesson_title')}
                </h4>
                <p className="text-xs text-muted-foreground mb-4">
                  {t('mkt.teachers.ft.content.mock.lesson_meta')}
                </p>

                <div className="space-y-2.5">
                  {[
                    {
                      label: t('mkt.teachers.ft.content.mock.starter.label'),
                      desc: t('mkt.teachers.ft.content.mock.starter.desc'),
                    },
                    {
                      label: t('mkt.teachers.ft.content.mock.main1.label'),
                      desc: t('mkt.teachers.ft.content.mock.main1.desc'),
                    },
                    {
                      label: t('mkt.teachers.ft.content.mock.main2.label'),
                      desc: t('mkt.teachers.ft.content.mock.main2.desc'),
                    },
                    {
                      label: t('mkt.teachers.ft.content.mock.plenary.label'),
                      desc: t('mkt.teachers.ft.content.mock.plenary.desc'),
                    },
                  ].map((step) => (
                    <div key={step.label} className="flex gap-3 text-sm">
                      <span className="font-semibold text-primary shrink-0 w-24">{step.label}</span>
                      <span className="text-muted-foreground leading-snug">{step.desc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <Badge variant="outline" className="text-xs border-border/40">
                    {t('mkt.teachers.ft.content.mock.worksheet_included')}
                  </Badge>
                  <Badge variant="outline" className="text-xs border-border/40">
                    {t('mkt.teachers.ft.content.mock.markscheme_included')}
                  </Badge>
                </div>
              </Card>

              <Card className="p-4 border-border/40 bg-card/40">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium text-foreground">
                    {t('mkt.teachers.ft.content.mock.diff_worksheet')}
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {t('mkt.teachers.ft.content.mock.levels')}
                  </span>
                </div>
              </Card>
              <Card className="p-4 border-border/40 bg-card/40">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-foreground">
                    {t('mkt.teachers.ft.content.mock.model_answer')}
                  </span>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {t('mkt.teachers.ft.content.mock.aqa_aligned')}
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          ANALYTICS PREVIEW
      ================================================================ */}
      <section className="py-24 sm:py-32 bg-card/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mock analytics dashboard */}
            <div className="space-y-4 order-2 lg:order-1">
              <Card className="p-6 border-border/40 bg-card/60">
                <div className="flex items-center gap-2 mb-5">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-foreground">
                    {t('mkt.teachers.ft.analytics.class_progress')}
                  </h4>
                </div>
                <div className="space-y-4">
                  <ProgressBar
                    label={t('mkt.teachers.ft.analytics.bar.reading')}
                    value={78}
                    color="bg-blue-400"
                  />
                  <ProgressBar
                    label={t('mkt.teachers.ft.analytics.bar.essay')}
                    value={62}
                    color="bg-primary"
                  />
                  <ProgressBar
                    label={t('mkt.teachers.ft.analytics.bar.language')}
                    value={54}
                    color="bg-purple-400"
                  />
                  <ProgressBar
                    label={t('mkt.teachers.ft.analytics.bar.context')}
                    value={41}
                    color="bg-amber-400"
                  />
                  <ProgressBar
                    label={t('mkt.teachers.ft.analytics.bar.homework')}
                    value={88}
                    color="bg-emerald-400"
                  />
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 border-red-500/20 bg-red-500/[0.04]">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-semibold text-red-600">
                      {t('mkt.teachers.ft.analytics.at_risk')}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {['Liam B.', 'Amara J.', 'Tyler R.'].map((name) => (
                      <div key={name} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                        <span className="text-xs text-muted-foreground">{name}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-4 border-emerald-500/20 bg-emerald-500/[0.04]">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-teal-700" />
                    <span className="text-sm font-semibold text-teal-700">
                      {t('mkt.teachers.ft.analytics.most_improved')}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {['Priya M.', 'Daniel H.', 'Sofia C.'].map((name) => (
                      <div key={name} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="text-xs text-muted-foreground">{name}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <Card className="p-4 border-border/40 bg-card/60">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ClipboardList className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-semibold text-foreground">
                      {t('mkt.teachers.ft.analytics.assignment_completion')}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-teal-700">87%</span>
                </div>
                <div className="mt-3 h-2 bg-border/40 rounded-full overflow-hidden">
                  <div className="h-full w-[87%] bg-emerald-400 rounded-full" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  {t('mkt.teachers.ft.analytics.submitted_on_time')}
                </p>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <Badge
                variant="outline"
                className="border-blue-500/20 bg-blue-500/[0.06] text-blue-600 text-xs font-semibold mb-6 gap-1.5 px-3 py-1"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                {t('mkt.teachers.ft.analytics.badge')}
              </Badge>
              <h2 className="text-foreground mb-5">{t('mkt.teachers.ft.analytics.title')}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t('mkt.teachers.ft.analytics.body')}
              </p>
              <ul className="space-y-3">
                {[
                  'mkt.teachers.ft.analytics.point.1',
                  'mkt.teachers.ft.analytics.point.2',
                  'mkt.teachers.ft.analytics.point.3',
                  'mkt.teachers.ft.analytics.point.4',
                  'mkt.teachers.ft.analytics.point.5',
                ].map((pointKey) => (
                  <li key={pointKey} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{t(pointKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          HOW IT SAVES TIME
      ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-foreground">{t('mkt.teachers.ft.savetime.title')}</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
              {t('mkt.teachers.ft.savetime.body')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {timeSaverKeys.map((itemKey) => (
              <div key={itemKey} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{t(itemKey)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          FOUNDING TEACHERS - EMPTY STATE
      ================================================================ */}
      <section className="py-24 sm:py-32 bg-card/20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-foreground">{t('mkt.teachers.ft.founding.title')}</h2>
          </div>

          <Card className="p-6 bg-muted/30 border-dashed">
            <p className="text-muted-foreground text-center">
              {t('mkt.teachers.ft.founding.body_pre')}{' '}
              <Link
                href="/auth/teacher-register"
                className="font-medium text-primary underline underline-offset-2"
              >
                {t('mkt.teachers.ft.founding.link')}
              </Link>
              .
            </p>
          </Card>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          FREE TEACHING RESOURCES
      ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="border-amber-500/20 bg-amber-500/[0.06] text-amber-600 text-xs font-semibold mb-6 gap-1.5 px-3 py-1"
            >
              <Download className="w-3.5 h-3.5" />
              {t('mkt.teachers.ft.free.badge')}
            </Badge>
            <h2 className="text-foreground">{t('mkt.teachers.ft.free.title')}</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
              {t('mkt.teachers.ft.free.body')}
            </p>
          </div>

          <Card className="max-w-2xl mx-auto p-8 border-border/40 bg-card/60 mb-10">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">
                  {t('mkt.teachers.ft.free.pack_title')}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t('mkt.teachers.ft.free.pack_sub')}
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {[
                'mkt.teachers.ft.free.item.1',
                'mkt.teachers.ft.free.item.2',
                'mkt.teachers.ft.free.item.3',
                'mkt.teachers.ft.free.item.4',
              ].map((itemKey) => (
                <div key={itemKey} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{t(itemKey)}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="default"
                size="lg"
                className="text-base h-12 flex-1 shadow-lg shadow-primary/20"
                render={<Link href="/for-teachers/free-resources" />}
              >
                <Download className="w-4 h-4 mr-2" />
                {t('mkt.teachers.ft.free.cta_download')}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="text-base h-12 flex-1"
                render={<Link href="/auth/teacher-register" />}
              >
                <Eye className="w-4 h-4 mr-2" />
                {t('mkt.teachers.ft.free.cta_all')}
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          PRICING
      ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-foreground">{t('mkt.teachers.ft.pricing.title')}</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
              {t('mkt.teachers.ft.pricing.body')}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {/* Free tier */}
            <Card className="p-8 border-border/40 bg-card/60 flex flex-col">
              <div className="mb-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                  {t('mkt.teachers.ft.pricing.free.label')}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground tracking-tight">£0</span>
                  <span className="text-muted-foreground">
                    {t('mkt.teachers.ft.pricing.free.forever')}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1.5">
                  {t('mkt.teachers.ft.pricing.free.sub')}
                </p>
              </div>

              <Separator className="my-6 opacity-40" />

              <div className="space-y-3 mb-8 flex-1">
                {[
                  'mkt.teachers.ft.pricing.free.feat.1',
                  'mkt.teachers.ft.pricing.free.feat.2',
                  'mkt.teachers.ft.pricing.free.feat.3',
                  'mkt.teachers.ft.pricing.free.feat.4',
                  'mkt.teachers.ft.pricing.free.feat.5',
                  'mkt.teachers.ft.pricing.free.feat.6',
                ].map((featureKey) => (
                  <div key={featureKey} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{t(featureKey)}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="secondary"
                size="lg"
                className="w-full text-base h-12"
                render={<Link href="/auth/teacher-register" />}
              >
                {t('mkt.teachers.ft.cta.start_free')}
              </Button>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                {t('mkt.teachers.ft.pricing.free.note')}
              </p>
            </Card>

            {/* Teacher Premium plan */}
            <Card className="p-8 border-primary/30 bg-primary/[0.03] relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-bl-lg">
                {t('mkt.teachers.ft.pricing.premium.trial_tag')}
              </div>

              <div className="mb-2">
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest">
                    {t('mkt.teachers.ft.pricing.premium.label')}
                  </p>
                  <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                    {t('mkt.teachers.ft.pricing.premium.early_access')}
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground tracking-tight">£6.99</span>
                  <span className="text-muted-foreground">
                    {t('mkt.teachers.ft.pricing.premium.month')}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {t('mkt.teachers.ft.pricing.premium.standard_pre')}{' '}
                  <span className="line-through">£11.99/month</span>{' '}
                  {t('mkt.teachers.ft.pricing.premium.standard_post')}
                </p>
                <p className="text-sm text-teal-700 font-semibold mt-1.5">
                  {t('mkt.teachers.ft.pricing.premium.year_pre')}{' '}
                  <span className="line-through">£99</span>{' '}
                  {t('mkt.teachers.ft.pricing.premium.year_post')}
                </p>
                <p className="mt-2 text-[11px] font-medium text-amber-700">
                  {t('mkt.teachers.ft.pricing.premium.increase')}
                </p>
              </div>

              <Separator className="my-6 opacity-40" />

              <div className="space-y-3 mb-8 flex-1">
                {[
                  'mkt.teachers.ft.pricing.premium.feat.1',
                  'mkt.teachers.ft.pricing.premium.feat.2',
                  'mkt.teachers.ft.pricing.premium.feat.3',
                  'mkt.teachers.ft.pricing.premium.feat.4',
                  'mkt.teachers.ft.pricing.premium.feat.5',
                  'mkt.teachers.ft.pricing.premium.feat.6',
                  'mkt.teachers.ft.pricing.premium.feat.7',
                  'mkt.teachers.ft.pricing.premium.feat.8',
                  'mkt.teachers.ft.pricing.premium.feat.9',
                ].map((featureKey) => (
                  <div key={featureKey} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{t(featureKey)}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="default"
                size="lg"
                className="w-full text-base h-12 shadow-lg shadow-primary/20"
                render={<Link href="/auth/teacher-register" />}
              >
                {t('mkt.teachers.ft.cta.start_free')}
              </Button>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                {t('mkt.teachers.ft.pricing.premium.note')}
              </p>
            </Card>

            {/* School plan */}
            <Card className="p-8 border-border/40 bg-card/60 flex flex-col">
              <div className="mb-2">
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    {t('mkt.teachers.ft.pricing.school.label')}
                  </p>
                  <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                    {t('mkt.teachers.ft.pricing.school.founding_tag')}
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground tracking-tight">£4,000</span>
                  <span className="text-muted-foreground">
                    {t('mkt.teachers.ft.pricing.school.year')}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {t('mkt.teachers.ft.pricing.school.standard_pre')}{' '}
                  <span className="line-through">£8,000/year</span>{' '}
                  {t('mkt.teachers.ft.pricing.school.standard_post')}
                </p>
                <p className="text-sm text-muted-foreground mt-1.5">
                  {t('mkt.teachers.ft.pricing.school.sub')}
                </p>
              </div>

              <Separator className="my-6 opacity-40" />

              <div className="space-y-3 mb-8 flex-1">
                {[
                  'mkt.teachers.ft.pricing.school.feat.1',
                  'mkt.teachers.ft.pricing.school.feat.2',
                  'mkt.teachers.ft.pricing.school.feat.3',
                  'mkt.teachers.ft.pricing.school.feat.4',
                  'mkt.teachers.ft.pricing.school.feat.5',
                  'mkt.teachers.ft.pricing.school.feat.6',
                  'mkt.teachers.ft.pricing.school.feat.7',
                ].map((featureKey) => (
                  <div key={featureKey} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{t(featureKey)}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="secondary"
                size="lg"
                className="w-full text-base h-12"
                render={<Link href="/for-schools" />}
              >
                <Building2 className="w-4 h-4 mr-2" />
                {t('mkt.teachers.ft.pricing.school.cta')}
              </Button>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                {t('mkt.teachers.ft.pricing.school.note')}
              </p>
            </Card>
          </div>

          <p className="text-center text-xs text-muted-foreground/80 mt-10 max-w-2xl mx-auto">
            {VAT_LABEL}
          </p>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          QUICK SIGNUP FORM
      ================================================================ */}
      <section className="py-24 sm:py-32 bg-card/20">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-10">
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold mb-6 gap-1.5 px-3 py-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              {t('mkt.teachers.ft.signup.badge')}
            </Badge>
            <h2 className="text-foreground">{t('mkt.teachers.ft.signup.title')}</h2>
            <p className="mt-4 text-muted-foreground text-lg">{t('mkt.teachers.ft.signup.body')}</p>
          </div>

          <Card className="p-8 border-border/40">
            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="signup-name" className="text-sm font-medium">
                  {t('mkt.teachers.ft.signup.name_label')}
                </Label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder={t('mkt.teachers.ft.signup.name_ph')}
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-email" className="text-sm font-medium">
                  {t('mkt.teachers.ft.signup.email_label')}
                </Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@school.ac.uk"
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-school" className="text-sm font-medium">
                  {t('mkt.teachers.ft.signup.school_label')}{' '}
                  <span className="text-muted-foreground font-normal">
                    {t('mkt.teachers.ft.signup.school_optional')}
                  </span>
                </Label>
                <Input
                  id="signup-school"
                  type="text"
                  placeholder={t('mkt.teachers.ft.signup.school_ph')}
                  className="h-11"
                />
              </div>

              <Button
                variant="default"
                size="lg"
                className="w-full text-base h-12 shadow-lg shadow-primary/20 mt-2"
                render={<Link href="/auth/teacher-register" />}
              >
                {t('mkt.teachers.ft.signup.submit')}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                {t('mkt.teachers.ft.signup.terms')}
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ================================================================
          FAQ
      ================================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">{t('mkt.teachers.ft.faq.heading')}</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
              {t('mkt.teachers.ft.faq.sub')}
            </p>
          </div>

          <div className="space-y-3">
            {resolvedFaqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          <FAQPageJsonLd faqs={resolvedFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
        </div>
      </section>

      {/* ================================================================
          FINAL CTA
      ================================================================ */}
      <section className="py-24 sm:py-32 border-t border-border/40 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Link href="/growth" className="inline-block mb-8">
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/[0.06] text-primary text-xs font-semibold gap-1.5 px-3 py-1 hover:bg-primary/[0.1] transition-colors"
            >
              <Users className="w-3.5 h-3.5" />
              {t('mkt.teachers.ft.final.badge')}
            </Badge>
          </Link>

          <h2 className="text-foreground mb-6">{t('mkt.teachers.ft.final.title')}</h2>
          <p className="text-muted-foreground text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            {t('mkt.teachers.ft.final.body')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="text-base px-10 h-12 shadow-lg shadow-primary/20"
              render={<Link href="/auth/teacher-register" />}
            >
              {t('mkt.teachers.ft.cta.start_free')}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="text-base px-8 h-12"
              render={<Link href="/pricing" />}
            >
              {t('mkt.teachers.ft.cta.view_pricing')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-12"
              render={<Link href="/demo/teacher" />}
            >
              <Play className="w-4 h-4 mr-2" />
              {t('mkt.teachers.ft.final.try_demo')}
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            {t('mkt.teachers.ft.final.price.pre')}{' '}
            <span className="font-semibold text-foreground">
              {t('mkt.teachers.ft.final.price.amount')}
            </span>{' '}
            <span className="text-muted-foreground/80">
              {t('mkt.teachers.ft.final.price.standard_pre')}{' '}
              <span className="line-through">£11.99/month</span>{' '}
              {t('mkt.teachers.ft.final.price.standard_post')}
            </span>{' '}
            {t('mkt.teachers.ft.final.price.trial')}
          </p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-amber-700">
            {t('mkt.teachers.ft.final.price.increase')}
          </p>
          <p className="mt-3 text-xs text-muted-foreground/80 max-w-2xl mx-auto">{VAT_LABEL}</p>
        </div>
      </section>
    </main>
  )
}
