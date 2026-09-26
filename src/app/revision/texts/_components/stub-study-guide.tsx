import Link from 'next/link'
import { ArrowLeft, ArrowRight, BookOpen, Construction, Scale, Sparkles } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getSetText, type SetText } from '@/lib/board/set-texts'
import { guideElsewhere } from '@/lib/revision/guide-href'
import { t } from '@/lib/i18n/t'
import { ExamPlacementCard } from '@/components/revision/exam-placement-card'

// Per-category dictionary keys. Looked up at render time via t() so the
// AR toggle picks up the Khaleeji label without a separate prop change.
const CATEGORY_KEY: Record<SetText['category'], string> = {
  shakespeare: 'analysis.deep.set_text.cat.shakespeare',
  '19th-century': 'analysis.deep.set_text.cat.nineteenth',
  modern: 'analysis.deep.set_text.cat.modern',
  'poetry-anthology': 'analysis.deep.set_text.cat.poetry_anthology',
  'non-fiction': 'analysis.deep.set_text.cat.non_fiction',
  prose: 'analysis.deep.set_text.cat.prose',
}

type Props = {
  text: SetText
  /**
   * Where the "back" button should go. When `backLabel` is omitted, the
   * component renders the localized default ("Back to set texts").
   */
  backHref?: string
  backLabel?: string
}

/**
 * The canonical URL for a page that renders StubStudyGuide for `slug`.
 *
 * When the text's guide lives on another route, that route is the page worth
 * ranking and this one is a signpost to it, so the signpost says so. Otherwise
 * the page is its own canonical, as before. `ownPath` is the placeholder's own
 * path, because two routes render this component.
 */
export function stubCanonical(slug: string, ownPath: string): string {
  const elsewhere = guideElsewhere(slug, getSetText(slug)?.boards)
  return `https://theenglishhub.app${elsewhere?.href ?? ownPath}`
}

/**
 * Lightweight study-guide placeholder used while full content is being authored.
 * Renders the title, author, category and the registered teaser/keyThemes from
 * set-texts.ts, plus a "study guide in production" notice. All chrome routes
 * through `analysis.deep.stub.*` so the AR toggle is Khaleeji-aware. The
 * literary `text.description`, `text.keyThemes`, `text.title`, `text.author`,
 * and `text.ukRightsNotice` strings remain in source language by design.
 *
 * UNLESS THE GUIDE IS ALREADY WRITTEN SOMEWHERE ELSE. Until 26 September 2026
 * the notice was unconditional, so a placeholder whose text had a finished
 * guide on another route (the Language A anthology pages, the Literature
 * poetry pages, the revision-notes library) told the student it was still
 * being written and offered two links that led away from it. When
 * `guideElsewhere` finds that guide, the notice is replaced by a link to it.
 */
export async function StubStudyGuide({ text, backHref = '/revision/texts', backLabel }: Props) {
  const tByAuthor = await t('analysis.deep.stub.by_author')
  const tLangABadge = await t('analysis.deep.stub.lang_a_badge')
  const tUkRightsH3 = await t('analysis.deep.stub.uk_rights_h3')
  const tInProdH3 = await t('analysis.deep.stub.in_production_h3')
  const tInProdP1Prefix = await t('analysis.deep.stub.in_production_p1_prefix')
  const tInProdP1Suffix = await t('analysis.deep.stub.in_production_p1_suffix')
  const tInProdP2 = await t('analysis.deep.stub.in_production_p2')
  const tBrowseTexts = await t('analysis.deep.stub.cta_browse_texts')
  const tLangAHub = await t('analysis.deep.stub.cta_lang_a_hub')
  const tDefaultBack = await t('analysis.deep.stub.default_back_label')
  const tCategoryLabel = await t(CATEGORY_KEY[text.category])
  const resolvedBackLabel = backLabel ?? tDefaultBack
  const elsewhere = guideElsewhere(text.slug, text.boards)
  const elsewhereCopy: ElsewhereCopy = {
    heading: await t('analysis.deep.stub.elsewhere_h3'),
    prefix: await t('analysis.deep.stub.elsewhere_p1_prefix'),
    suffix: await t('analysis.deep.stub.elsewhere_p1_suffix'),
    open: await t('analysis.deep.stub.cta_open_guide'),
    browse: tBrowseTexts,
  }

  // Four things on this page are claims about where the text is examined: the
  // "Pearson IGCSE Language A (4EA1)" badge, the promise of questions aligned
  // with the 4EA1 mark scheme, the pointer to "other anthology texts" and the
  // link to the Language A hub. Until 25 September 2026 every stub carried all
  // four, whatever its boards, so The Pedestrian, The Man Who Loved Flowers and
  // When Greek Meets Greek, which no specification we cover prescribes, each
  // told students they were on 4EA1. They now follow set-texts.ts.
  const onLangA = text.boards.includes('edexcel-igcse-lang')
  // The labels for these three categories all say "Anthology", which is true
  // only of a text some board sets in one.
  const anthologyLabel = ['prose', 'non-fiction', 'poetry-anthology'].includes(text.category)
  const showCategory = !anthologyLabel || text.boards.length > 0

  return (
    <div className="space-y-10 pb-16">
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -start-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ms-2 text-muted-foreground"
            render={<Link href={backHref} />}
          >
            <ArrowLeft className="size-3.5" />
            {resolvedBackLabel}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            {showCategory && (
              <Badge variant="secondary">
                <Sparkles className="me-1 size-3" />
                {tCategoryLabel}
              </Badge>
            )}
            {text.year && (
              <Badge variant="outline" className="text-muted-foreground">
                {text.year}
              </Badge>
            )}
            {onLangA && (
              <Badge variant="outline" className="text-muted-foreground">
                {tLangABadge}
              </Badge>
            )}
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {text.title}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            {tByAuthor} {text.author}
          </p>

          {text.description && (
            <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">{text.description}</p>
          )}

          {text.keyThemes && text.keyThemes.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {text.keyThemes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {theme}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {text.ukRightsNotice && (
        <Card className="border-blue-500/40 bg-blue-500/[0.04]">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
                <Scale className="size-5 text-blue-700" />
              </div>
              <CardTitle className="text-heading-md font-heading">{tUkRightsH3}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2 text-body-sm text-muted-foreground">
            <p>{text.ukRightsNotice}</p>
          </CardContent>
        </Card>
      )}

      {/* Where this text sits on the exam.

          ADDED 19 September 2026. These twenty pages said the guide was in
          production and then offered two links away from the text. A student
          who arrived here learned nothing about the text they came for. The
          specification facts are the one thing we can give them honestly while
          the guide is unwritten: which paper, which section, and whether they
          had a choice. It renders its own "we have not checked" message when
          there is nothing verified, so it is safe on all twenty. */}
      <ExamPlacementCard slug={text.slug} />

      {elsewhere ? (
        <GuideElsewhereCard title={text.title} href={elsewhere.href} copy={elsewhereCopy} />
      ) : (
        <Card className="border-amber-500/40 bg-amber-500/[0.04]">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
                <Construction className="size-5 text-clay-600" />
              </div>
              <CardTitle className="text-heading-md font-heading">{tInProdH3}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 text-body-sm text-muted-foreground">
            <p>
              {tInProdP1Prefix} <strong className="text-foreground">{text.title}</strong>
              {onLangA ? tInProdP1Suffix : '.'}
            </p>
            {onLangA && <p>{tInProdP2}</p>}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button variant="outline" size="sm" render={<Link href="/revision/texts" />}>
                <BookOpen className="size-3.5" />
                {tBrowseTexts}
                <ArrowRight className="size-3.5" />
              </Button>
              {onLangA && (
                <Button variant="ghost" size="sm" render={<Link href="/igcse/edexcel-lang" />}>
                  {tLangAHub}
                  <ArrowRight className="size-3.5" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

type ElsewhereCopy = {
  heading: string
  prefix: string
  suffix: string
  open: string
  browse: string
}

/**
 * Where the finished guide is, in place of the "in production" notice.
 * Synchronous, with its copy resolved by the caller: an async child suspends
 * under renderToStaticMarkup, which is how the stub's own test renders it.
 */
function GuideElsewhereCard({
  title,
  href,
  copy,
}: {
  title: string
  href: string
  copy: ElsewhereCopy
}) {
  const {
    heading: tHeading,
    prefix: tPrefix,
    suffix: tSuffix,
    open: tOpen,
    browse: tBrowseTexts,
  } = copy

  return (
    <Card className="border-primary/40 bg-primary/[0.04]" data-guide-elsewhere={href}>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen className="size-5 text-primary" />
          </div>
          <CardTitle className="text-heading-md font-heading">{tHeading}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 text-body-sm text-muted-foreground">
        <p>
          {tPrefix} <strong className="text-foreground">{title}</strong> {tSuffix}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button size="sm" render={<Link href={href} />}>
            {tOpen}
            <ArrowRight className="size-3.5" />
          </Button>
          <Button variant="ghost" size="sm" render={<Link href="/revision/texts" />}>
            {tBrowseTexts}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
