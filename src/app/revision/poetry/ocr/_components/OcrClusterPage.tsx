'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Info, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import StudyTools from '@/components/study/StudyTools'
import { useT } from '@/lib/i18n/use-t'
import { ocrCluster, type OcrClusterSlug, type OcrPoem } from '@/lib/board/ocr-anthology'
import { OCR_POEM_HOOKS, OCR_STUDY_PAGES, OCR_WIDER_READING } from './ocr-cluster-content'

/**
 * One OCR poetry cluster page, rendered from the list OCR actually sets.
 *
 * THE DEFECT, found 2 October 2026. Each cluster page carried its own
 * hand-written list of fifteen poems, and the lists were wrong: Love and
 * Relationships held none of the poems OCR sets, Conflict held four and Youth
 * and Age none. A fourth page described a cluster OCR has never had. The lists
 * now come from ocr-anthology.ts, which records where each poem was read from,
 * and a-poem-board-claim-is-true.test.ts holds these pages to it.
 *
 * WHAT A CARD SAYS. A poem links to a study page only where the site has one;
 * otherwise the card says so. Until this change a poem with no page was badged
 * "Key quotations only", which promised a page of quotations that did not
 * exist.
 */

const TITLE_KEY: Record<OcrClusterSlug, string> = {
  'love-and-relationships': 'poetry_hub.ocr.cluster.lr.title',
  conflict: 'poetry_hub.ocr.cluster.conflict.title',
  'youth-and-age': 'poetry_hub.ocr.cluster.ya.title',
}

function PoemCard({ poem, t }: { poem: OcrPoem; t: (key: string) => string }) {
  const page = OCR_STUDY_PAGES[poem.title]
  const body = (
    <>
      {page ? (
        <div className="absolute end-4 top-4">
          <CheckCircle2 className="size-4 text-emerald-400" />
        </div>
      ) : null}
      <h3
        className="pe-8 text-heading-md font-heading text-foreground group-hover:text-primary transition-colors"
        dir="ltr"
        lang="en"
      >
        {poem.title}
      </h3>
      <p className="mt-0.5 text-caption text-muted-foreground" dir="ltr" lang="en">
        {poem.poet}
      </p>
      <p
        className="mt-3 flex-1 text-body-sm text-muted-foreground leading-relaxed"
        dir="ltr"
        lang="en"
      >
        {OCR_POEM_HOOKS[poem.title]}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        <Badge variant="outline" className="text-[0.65rem]">
          {page ? t(page.whereKey) : t('poetry_hub.ocr.no_study_page')}
        </Badge>
        {poem.added2022 ? (
          <Badge variant="secondary" className="text-[0.65rem]">
            {t('poetry_hub.ocr.added_2022')}
          </Badge>
        ) : null}
      </div>
    </>
  )
  const className =
    'group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200'
  return page ? (
    <Link href={page.href} className={`${className} hover:border-border hover:shadow-card-hover`}>
      {body}
    </Link>
  ) : (
    <div className={className}>{body}</div>
  )
}

export default function OcrClusterPage({ slug, accent }: { slug: OcrClusterSlug; accent: string }) {
  const t = useT()
  const cluster = ocrCluster(slug)
  const wider = OCR_WIDER_READING[slug]
  const removed = cluster.removedIn2022.map((p) => `${p.title} (${p.poet})`).join(', ')
  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/revision/poetry/ocr" />}
        >
          <ArrowLeft className="size-3.5" />
          {t('poetry_hub.ocr.back_to_anthology')}
        </Button>
      </div>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="me-1 size-3" />
              {t('poetry_hub.ocr.badge_anthology')}
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">OCR</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {t(TITLE_KEY[slug])}
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            {t('poetry_hub.ocr.cluster_lead')}
          </p>
        </div>
      </section>

      <StudyTools
        textName={`OCR ${cluster.title}`}
        textType="anthology"
        examBoard="OCR"
        variant="banner"
      />

      <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-primary" />
          <div>
            <h2 className="text-heading-sm font-heading text-foreground">
              {t('poetry_hub.ocr.exam_title')}
            </h2>
            <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
              {t('poetry_hub.ocr.exam_body')}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className={`size-5 ${accent}`} />
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('poetry_hub.ocr.all_15')}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cluster.poems.map((poem) => (
            <PoemCard key={poem.title} poem={poem} t={t} />
          ))}
        </div>
      </section>

      {wider.length > 0 ? (
        <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
          <h2 className="text-heading-sm font-heading text-foreground">
            {t('poetry_hub.ocr.wider_title')}
          </h2>
          <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
            {t('poetry_hub.ocr.wider_body')}
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {wider.map((w) => (
              <li key={w.href}>
                <Link
                  href={w.href}
                  className="group flex h-full flex-col rounded-xl border border-border/60 p-4 transition-colors hover:border-border hover:bg-muted/40"
                >
                  <span
                    className="text-sm font-semibold text-foreground group-hover:text-primary"
                    dir="ltr"
                    lang="en"
                  >
                    {w.title}
                  </span>
                  <span className="text-caption text-muted-foreground" dir="ltr" lang="en">
                    {w.poet}
                  </span>
                  <span className="mt-2 text-caption text-muted-foreground">{t(w.noteKey)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="rounded-2xl border border-border/60 bg-muted/30 p-5 sm:p-6">
        <h2 className="text-heading-sm font-heading text-foreground">
          {t('poetry_hub.ocr.removed_title')}
        </h2>
        <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
          {t('poetry_hub.ocr.removed_body').replace('{list}', removed)}
        </p>
      </section>

      <section className="rounded-2xl border border-border/60 bg-muted/30 p-5 sm:p-6">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">{t('poetry_hub.ocr.rights_notice_label')}</strong>{' '}
          {t('poetry_hub.ocr.rights_body')}
        </p>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 text-center">
        <BookOpen className={`mx-auto mb-3 size-8 ${accent}`} />
        <h2 className="text-heading-lg font-heading text-foreground">
          {t('poetry_hub.ocr.explore_other_clusters')}
        </h2>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/revision/poetry/ocr" />}
        >
          {t('poetry_hub.ocr.back_to_anthology')}
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
