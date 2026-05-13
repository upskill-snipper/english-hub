'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookOpen,
  Heart,
  Swords,
  Clock,
  Mountain,
  Info,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { useT } from '@/lib/i18n/use-t'

interface Cluster {
  slug: string
  titleKey: string
  descKey: string
  count: number
  icon: typeof Heart
  iconColor: string
  iconBg: string
}

const CLUSTERS: Cluster[] = [
  {
    slug: 'love-and-relationships',
    titleKey: 'poetry_hub.ocr.cluster.lr.title',
    descKey: 'poetry_hub.ocr.cluster.lr.desc',
    count: 15,
    icon: Heart,
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/10',
  },
  {
    slug: 'conflict',
    titleKey: 'poetry_hub.ocr.cluster.conflict.title',
    descKey: 'poetry_hub.ocr.cluster.conflict.desc',
    count: 15,
    icon: Swords,
    iconColor: 'text-red-400',
    iconBg: 'bg-red-500/10',
  },
  {
    slug: 'youth-and-age',
    titleKey: 'poetry_hub.ocr.cluster.ya.title',
    descKey: 'poetry_hub.ocr.cluster.ya.desc',
    count: 15,
    icon: Clock,
    iconColor: 'text-clay-600',
    iconBg: 'bg-amber-500/10',
  },
  {
    slug: 'power-and-natural-world',
    titleKey: 'poetry_hub.ocr.cluster.pnw.title',
    descKey: 'poetry_hub.ocr.cluster.pnw.desc',
    count: 15,
    icon: Mountain,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
  },
]

export default function OCRPoetryHubPage() {
  const t = useT()
  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          {
            name: 'OCR Towards a World Unknown',
            url: 'https://theenglishhub.app/revision/poetry/ocr',
          },
        ]}
      />
      {/* ── Back nav ────────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          {t('poetry_hub.ocr.back_to_poetry')}
        </Button>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              {t('poetry_hub.ocr.badge_spec')}
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">OCR</Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {t('poetry_hub.ocr.hero_title')}
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            {t('poetry_hub.ocr.hero_lead')}
          </p>
        </div>
      </section>

      <StudyTools
        textName="OCR Poetry Anthology"
        textType="anthology"
        examBoard="OCR"
        variant="banner"
      />

      {/* ── Info banner ─────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-primary" />
          <div>
            <h2 className="text-heading-sm font-heading text-foreground">
              {t('poetry_hub.ocr.which_cluster')}
            </h2>
            <p className="mt-1 text-body-sm text-muted-foreground">
              {t('poetry_hub.ocr.which_cluster_body')}
            </p>
          </div>
        </div>
      </section>

      {/* ── Cluster cards ───────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('poetry_hub.ocr.four_clusters')}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {CLUSTERS.map((cluster) => (
            <Card
              key={cluster.slug}
              className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover"
            >
              <CardHeader className="pb-3">
                <div className="mb-2 flex items-center gap-3">
                  <div
                    className={`flex size-10 items-center justify-center rounded-xl ${cluster.iconBg}`}
                  >
                    <cluster.icon className={`size-5 ${cluster.iconColor}`} />
                  </div>
                  <div>
                    <CardTitle className="text-heading-md font-heading">
                      {t(cluster.titleKey)}
                    </CardTitle>
                    <CardDescription>
                      {cluster.count} {t('poetry_hub.ocr.poems_count')}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {t(cluster.descKey)}
                </p>
                <div className="mt-auto pt-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full"
                    render={<Link href={`/revision/poetry/ocr/${cluster.slug}`} />}
                  >
                    {t('poetry_hub.ocr.study')} {t(cluster.titleKey)}
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Copyright note ──────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-muted/30 p-5 sm:p-6">
        <h2 className="text-heading-sm font-heading text-foreground">
          {t('poetry_hub.ocr.about_pages_title')}
        </h2>
        <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
          {t('poetry_hub.ocr.about_pages_body')}
        </p>
      </section>

      {/* ── Back to Poetry CTA ──────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 text-center">
        <BookOpen className="mx-auto mb-3 size-8 text-primary" />
        <h2 className="text-heading-lg font-heading text-foreground">
          {t('poetry_hub.ocr.different_board_title')}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          {t('poetry_hub.ocr.different_board_body')}
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/revision/poetry" />}
        >
          {t('poetry_hub.ocr.back_to_hub')}
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
