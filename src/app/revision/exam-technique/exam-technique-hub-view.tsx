'use client'

import {
  Target,
  ArrowLeft,
  ArrowRight,
  PenLine,
  Clock,
  HelpCircle,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  BookOpen,
  Star,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { useT } from '@/lib/i18n/use-t'

/* ── Sub-page links ──────────────────────────────────────────────── */

interface GuideLink {
  titleKey: string
  descKey: string
  href: string
  icon: typeof PenLine
  colour: string
  bgColour: string
  tagKey?: string
}

const GUIDES: GuideLink[] = [
  {
    titleKey: 'revision.exam_technique.guide.essay_structure.title',
    descKey: 'revision.exam_technique.guide.essay_structure.desc',
    href: '/revision/exam-technique/essay-structure',
    icon: PenLine,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
    tagKey: 'revision.exam_technique.guide.essay_structure.tag',
  },
  {
    titleKey: 'revision.exam_technique.guide.time_management.title',
    descKey: 'revision.exam_technique.guide.time_management.desc',
    href: '/revision/exam-technique/time-management',
    icon: Clock,
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
  },
  {
    titleKey: 'revision.exam_technique.guide.question_types.title',
    descKey: 'revision.exam_technique.guide.question_types.desc',
    href: '/revision/exam-technique/question-types',
    icon: HelpCircle,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
  },
]

/* ── Quick tips data ─────────────────────────────────────────────── */

const QUICK_TIPS = [
  {
    titleKey: 'revision.exam_technique.tip.read_question.title',
    bodyKey: 'revision.exam_technique.tip.read_question.body',
    icon: BookOpen,
  },
  {
    titleKey: 'revision.exam_technique.tip.plan.title',
    bodyKey: 'revision.exam_technique.tip.plan.body',
    icon: Lightbulb,
  },
  {
    titleKey: 'revision.exam_technique.tip.embed_quotes.title',
    bodyKey: 'revision.exam_technique.tip.embed_quotes.body',
    icon: PenLine,
  },
  {
    titleKey: 'revision.exam_technique.tip.link_ideas.title',
    bodyKey: 'revision.exam_technique.tip.link_ideas.body',
    icon: Star,
  },
  {
    titleKey: 'revision.exam_technique.tip.watch_clock.title',
    bodyKey: 'revision.exam_technique.tip.watch_clock.body',
    icon: Clock,
  },
  {
    titleKey: 'revision.exam_technique.tip.terminology.title',
    bodyKey: 'revision.exam_technique.tip.terminology.body',
    icon: Target,
  },
]

/* ── Component ──────────────────────────────────────────────────── */

export default function ExamTechniqueHubView({
  boardName,
  shortName,
}: {
  boardName: string
  shortName: string
}) {
  const t = useT()

  return (
    <div className="space-y-10 pb-16">
      <Breadcrumb
        items={[
          { label: t('poetry.breadcrumb_revision'), href: '/revision' },
          { label: t('revision.exam_technique.breadcrumb_label') },
        ]}
      />
      {/* ── Header ──────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision" />}
        >
          <ArrowLeft className="size-3.5" />
          {t('revision.exam_technique.back_to_hub')}
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <Target className="size-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              {t('revision.exam_technique.page_title').replace('{board}', shortName)}
            </h1>
            <p className="text-body-sm text-muted-foreground">
              {t('revision.exam_technique.page_subtitle').replace('{board}', boardName)}
            </p>
          </div>
        </div>
      </div>

      {/* ── Overview banner ─────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Sparkles className="mr-1 size-3" />
          {t('revision.exam_technique.why_matters_badge')}
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          {t('revision.exam_technique.why_matters_heading')}
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          {t('revision.exam_technique.why_matters_body').replace('{board}', shortName)}
        </p>
      </section>

      {/* ── Guide cards ─────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('revision.exam_technique.guides_heading').replace('{board}', shortName)}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((guide) => {
            const title = t(guide.titleKey)
            const description = t(guide.descKey).replace('{board}', shortName)
            const tag = guide.tagKey ? t(guide.tagKey) : undefined
            return (
              <Link
                key={guide.href}
                href={guide.href}
                className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                {tag && (
                  <Badge
                    variant="default"
                    className="absolute right-4 top-4 text-[0.65rem] uppercase tracking-wider"
                  >
                    {tag}
                  </Badge>
                )}

                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`flex size-10 items-center justify-center rounded-xl ${guide.bgColour}`}
                  >
                    <guide.icon className={`size-5 ${guide.colour}`} />
                  </div>
                  <h3 className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                </div>

                <p className="flex-1 text-body-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>

                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  {t('revision.exam_technique.read_guide')}
                  <ArrowRight className="size-3.5" />
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Quick tips ──────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-clay-600" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('revision.exam_technique.quick_tips_heading')}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_TIPS.map((tip) => (
            <div key={tip.titleKey} className="rounded-2xl border border-border/60 bg-card p-5">
              <div className="mb-2 flex items-center gap-2">
                <tip.icon className="size-4 text-emerald-400" />
                <h3 className="text-sm font-semibold text-foreground">{t(tip.titleKey)}</h3>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{t(tip.bodyKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What markers look for reminder ──────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <CheckCircle2 className="size-5 text-emerald-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            {t('revision.exam_technique.markers_heading').replace('{board}', shortName)}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          {t('revision.exam_technique.markers_body')}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              ao: 'AO1',
              labelKey: 'revision.exam_technique.ao.response_quotation.label',
              detailKey: 'revision.exam_technique.ao.response_quotation.detail',
            },
            {
              ao: 'AO2',
              labelKey: 'revision.exam_technique.ao.language_structure.label',
              detailKey: 'revision.exam_technique.ao.language_structure.detail',
            },
            {
              ao: 'AO3',
              labelKey: 'revision.exam_technique.ao.context_synthesis.label',
              detailKey: 'revision.exam_technique.ao.context_synthesis.detail',
            },
            {
              ao: 'AO4 (Lit)',
              labelKey: 'revision.exam_technique.ao.ao4_lit.label',
              detailKey: 'revision.exam_technique.ao.ao4_lit.detail',
            },
            {
              ao: 'AO4 (Lang)',
              labelKey: 'revision.exam_technique.ao.ao4_lang.label',
              detailKey: 'revision.exam_technique.ao.ao4_lang.detail',
            },
            {
              ao: 'AO5',
              labelKey: 'revision.exam_technique.ao.ao5.label',
              detailKey: 'revision.exam_technique.ao.ao5.detail',
            },
            {
              ao: 'AO6',
              labelKey: 'revision.exam_technique.ao.ao6.label',
              detailKey: 'revision.exam_technique.ao.ao6.detail',
            },
          ].map((item) => (
            <div
              key={item.ao}
              className="flex gap-3 rounded-xl border border-border/40 bg-background/50 p-4"
            >
              <Badge variant="secondary" className="h-fit shrink-0 font-mono text-xs">
                {item.ao}
              </Badge>
              <div>
                <p className="text-sm font-semibold text-foreground">{t(item.labelKey)}</p>
                <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                  {t(item.detailKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-emerald-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8 text-center">
        <Target className="mx-auto mb-3 size-8 text-emerald-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          {t('revision.exam_technique.cta_heading').replace('{board}', shortName)}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          {t('revision.exam_technique.cta_body').replace('{board}', shortName)}
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/revision/exam-technique/essay-structure" />}
        >
          {t('revision.exam_technique.cta_button')}
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
