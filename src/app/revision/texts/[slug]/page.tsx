import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Crown,
  Drama,
  Feather,
  FileText,
  Lightbulb,
  Newspaper,
  Quote,
  Sparkles,
  Users,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SET_TEXTS, getSetText, textAvailableForBoard, type SetText } from '@/lib/board/set-texts'
import { getServerBoard } from '@/lib/board/get-server-board'
import { t } from '@/lib/i18n/t'

// ─── Static params ──────────────────────────────────────────────────────────

export function generateStaticParams() {
  return SET_TEXTS.map((text) => ({ slug: text.slug }))
}

// ─── Metadata ────────────────────────────────────────────────────────────────

type Params = { slug: string }

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const text = getSetText(slug)
  if (!text) {
    return {
      title: await t('analysis.deep.set_text.not_found_title'),
      description: await t('analysis.deep.set_text.not_found_desc'),
    }
  }
  return {
    title: `${text.title} - Study Guide | The English Hub`,
    description: `In-depth study guide for ${text.title} by ${text.author}: characters, themes, key quotations and exam-ready analysis.`,
    alternates: {
      canonical: `https://theenglishhub.app/revision/texts/${text.slug}`,
    },
  }
}

// ─── Category metadata ─────────────────────────────────────────────────────

// Category metadata. The `labelKey` is looked up via t() at render time so
// the AR toggle picks up Khaleeji labels. Icons and colour classes stay as-is.
const CATEGORY_META: Record<
  SetText['category'],
  { labelKey: string; icon: typeof Crown; colour: string; bgColour: string }
> = {
  shakespeare: {
    labelKey: 'analysis.deep.set_text.cat.shakespeare',
    icon: Crown,
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
  },
  '19th-century': {
    labelKey: 'analysis.deep.set_text.cat.nineteenth',
    icon: BookOpen,
    colour: 'text-emerald-700',
    bgColour: 'bg-emerald-500/10',
  },
  modern: {
    labelKey: 'analysis.deep.set_text.cat.modern',
    icon: Drama,
    colour: 'text-violet-700',
    bgColour: 'bg-violet-500/10',
  },
  'poetry-anthology': {
    labelKey: 'analysis.deep.set_text.cat.poetry_anthology',
    icon: BookOpen,
    colour: 'text-blue-700',
    bgColour: 'bg-blue-500/10',
  },
  'non-fiction': {
    labelKey: 'analysis.deep.set_text.cat.non_fiction',
    icon: Newspaper,
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
  },
  prose: {
    labelKey: 'analysis.deep.set_text.cat.prose',
    icon: Feather,
    colour: 'text-rose-700',
    bgColour: 'bg-rose-500/10',
  },
}

// ─── Slug aliases for related pages ────────────────────────────────────────

// Some related routes use slightly different slugs from set-texts.ts.
// This map points to the correct revision-notes slug if it differs.
const REVISION_NOTES_SLUG_MAP: Record<string, string> = {
  'a-christmas-carol': 'christmas-carol',
  'an-inspector-calls': 'inspector-calls',
  'the-sign-of-four': 'sign-of-four',
  'much-ado-about-nothing': 'much-ado-about-nothing',
  'a-view-from-the-bridge': 'view-from-the-bridge',
  'the-merchant-of-venice': 'merchant-of-venice',
}

// Set of resolved revision-notes slugs that actually have a /resources/
// revision-notes/<slug>/page.tsx file. The "Open revision notes" Card is
// only rendered when the resolved slug is in this set. Without this gate,
// texts like To Kill a Mockingbird and Things Fall Apart linked to a 404
// - surfaced by the iOS WebView during ship-day TestFlight testing.
const REVISION_NOTES_AVAILABLE: ReadonlySet<string> = new Set([
  'animal-farm',
  'blood-brothers',
  'christmas-carol',
  'frankenstein',
  'great-expectations',
  'inspector-calls',
  'jane-eyre',
  'jekyll-and-hyde',
  'lord-of-the-flies',
  'macbeth',
  'merchant-of-venice',
  'much-ado',
  'much-ado-about-nothing',
  'never-let-me-go',
  'of-mice-and-men',
  'othello',
  'pride-and-prejudice',
  'romeo-and-juliet',
  'sign-of-four',
  'silas-marner',
  'the-crucible',
  'the-tempest',
  'view-from-the-bridge',
  'woman-in-black',
])

// Texts that have a dedicated long-form analysis section under /analysis/[text]
const ANALYSIS_SLUG_MAP: Record<string, string> = {
  'jekyll-and-hyde': 'jekyll-hyde',
  'a-christmas-carol': 'christmas-carol',
  'an-inspector-calls': 'inspector-calls',
  macbeth: 'macbeth',
}

// Texts that have an Edexcel IGCSE prose page
const IGCSE_PROSE_SLUG_MAP: Record<string, string> = {
  'of-mice-and-men': 'of-mice-and-men',
  'things-fall-apart': 'things-fall-apart',
  'to-kill-a-mockingbird': 'to-kill-a-mockingbird',
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function TextStudyGuidePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params

  // ── Board guard (STRICT) ────────────────────────────────────────────
  // Redirect to the texts hub if the user's board does not study this text.
  const board = await getServerBoard()
  if (board && !textAvailableForBoard(slug, board)) {
    redirect('/revision/texts')
  }

  const text = getSetText(slug)

  if (!text) {
    notFound()
  }

  const category = CATEGORY_META[text.category]
  const CategoryIcon = category.icon

  const revisionNotesSlug = REVISION_NOTES_SLUG_MAP[text.slug] ?? text.slug
  const hasRevisionNotes = REVISION_NOTES_AVAILABLE.has(revisionNotesSlug)
  const analysisSlug = ANALYSIS_SLUG_MAP[text.slug]
  const igcseProseSlug = IGCSE_PROSE_SLUG_MAP[text.slug]

  // Chrome translations. Author name, title, description, themes and key
  // quotations stay in source language - literary content per task scope.
  const tCategoryLabel = await t(category.labelKey)
  const tBackToTexts = await t('analysis.deep.set_text.back_to_texts')
  const tBackToAll = await t('analysis.deep.set_text.back_to_all_texts')
  const tBy = await t('analysis.deep.set_text.by_author')
  const tBoardsOne = await t('analysis.deep.set_text.boards_one')
  const tBoardsManySuffix = await t('analysis.deep.set_text.boards_many_suffix')
  const tResourcesH2 = await t('analysis.deep.set_text.resources_h2')
  const tResIntroPre = await t('analysis.deep.set_text.resources_intro_prefix')
  const tResIntroPost = await t('analysis.deep.set_text.resources_intro_suffix')
  const tNotesTitle = await t('analysis.deep.set_text.notes_title')
  const tNotesDesc = await t('analysis.deep.set_text.notes_desc')
  const tNotesCta = await t('analysis.deep.set_text.notes_cta')
  const tAnalysisTitle = await t('analysis.deep.set_text.analysis_title')
  const tAnalysisDesc = await t('analysis.deep.set_text.analysis_desc')
  const tAnalysisCta = await t('analysis.deep.set_text.analysis_cta')
  const tIgcseTitle = await t('analysis.deep.set_text.igcse_title')
  const tIgcseDesc = await t('analysis.deep.set_text.igcse_desc')
  const tIgcseCta = await t('analysis.deep.set_text.igcse_cta')
  const tQuizTitle = await t('analysis.deep.set_text.quiz_title')
  const tQuizDesc = await t('analysis.deep.set_text.quiz_desc')
  const tQuizCta = await t('analysis.deep.set_text.quiz_cta')
  const tHowToRevise = await t('analysis.deep.set_text.how_to_revise_prefix')
  const tHowToReviseIntro = await t('analysis.deep.set_text.how_to_revise_intro')
  const tTip1H3 = await t('analysis.deep.set_text.tip1_h3')
  const tTip1Body = await t('analysis.deep.set_text.tip1_body')
  const tTip2H3 = await t('analysis.deep.set_text.tip2_h3')
  const tTip2Body = await t('analysis.deep.set_text.tip2_body')
  const tTip3H3 = await t('analysis.deep.set_text.tip3_h3')
  const tTip3Body = await t('analysis.deep.set_text.tip3_body')
  const tTip4H3 = await t('analysis.deep.set_text.tip4_h3')
  const tTip4Body = await t('analysis.deep.set_text.tip4_body')

  const boardsLabel =
    text.boards.length === 1 ? tBoardsOne : `${text.boards.length} ${tBoardsManySuffix}`

  return (
    <div className="space-y-10 pb-16">
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/texts" />}
          >
            <ArrowLeft className="size-3.5" />
            {tBackToTexts}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <CategoryIcon className={`mr-1 size-3 ${category.colour}`} />
              {tCategoryLabel}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              {boardsLabel}
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {text.title}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">
            {tBy} {text.author}
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

      {/* ── Study Resources ────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-blue-700" />
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">{tResourcesH2}</h2>
            <p className="text-body-sm text-muted-foreground">
              {tResIntroPre} {text.title} {tResIntroPost}
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {hasRevisionNotes && (
            <Card className="group transition-all hover:border-border hover:shadow-card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
                    <FileText className="size-5 text-blue-700" />
                  </div>
                  <CardTitle className="text-heading-md font-heading">{tNotesTitle}</CardTitle>
                </div>
                <CardDescription className="mt-2">{tNotesDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  render={<Link href={`/resources/revision-notes/${revisionNotesSlug}`} />}
                >
                  {tNotesCta}
                  <ArrowRight className="size-3.5" />
                </Button>
              </CardContent>
            </Card>
          )}

          {analysisSlug && (
            <Card className="group transition-all hover:border-border hover:shadow-card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
                    <Quote className="size-5 text-violet-700" />
                  </div>
                  <CardTitle className="text-heading-md font-heading">{tAnalysisTitle}</CardTitle>
                </div>
                <CardDescription className="mt-2">{tAnalysisDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  render={<Link href={`/analysis/${analysisSlug}`} />}
                >
                  {tAnalysisCta}
                  <ArrowRight className="size-3.5" />
                </Button>
              </CardContent>
            </Card>
          )}

          {igcseProseSlug && (
            <Card className="group transition-all hover:border-border hover:shadow-card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
                    <Users className="size-5 text-emerald-700" />
                  </div>
                  <CardTitle className="text-heading-md font-heading">{tIgcseTitle}</CardTitle>
                </div>
                <CardDescription className="mt-2">{tIgcseDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  render={<Link href={`/igcse/edexcel/prose/${igcseProseSlug}`} />}
                >
                  {tIgcseCta}
                  <ArrowRight className="size-3.5" />
                </Button>
              </CardContent>
            </Card>
          )}

          <Card className="group transition-all hover:border-border hover:shadow-card-hover">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
                  <Lightbulb className="size-5 text-clay-600" />
                </div>
                <CardTitle className="text-heading-md font-heading">{tQuizTitle}</CardTitle>
              </div>
              <CardDescription className="mt-2">{tQuizDesc}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href="/revision/quiz" />}
              >
                {tQuizCta}
                <ArrowRight className="size-3.5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Study Tips ─────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-clay-600" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {tHowToRevise} {text.title}
          </h2>
        </div>

        <Card>
          <CardContent className="p-6 sm:p-8">
            <p className="mb-5 max-w-2xl text-body-sm text-muted-foreground">{tHowToReviseIntro}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 rounded-xl border border-border/60 bg-background/50 p-4">
                <h3 className="text-sm font-semibold text-foreground">{tTip1H3}</h3>
                <p className="text-xs text-muted-foreground">{tTip1Body}</p>
              </div>
              <div className="space-y-2 rounded-xl border border-border/60 bg-background/50 p-4">
                <h3 className="text-sm font-semibold text-foreground">{tTip2H3}</h3>
                <p className="text-xs text-muted-foreground">{tTip2Body}</p>
              </div>
              <div className="space-y-2 rounded-xl border border-border/60 bg-background/50 p-4">
                <h3 className="text-sm font-semibold text-foreground">{tTip3H3}</h3>
                <p className="text-xs text-muted-foreground">{tTip3Body}</p>
              </div>
              <div className="space-y-2 rounded-xl border border-border/60 bg-background/50 p-4">
                <h3 className="text-sm font-semibold text-foreground">{tTip4H3}</h3>
                <p className="text-xs text-muted-foreground">{tTip4Body}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── Back to Hub ────────────────────────────────────────────── */}
      <div className="flex justify-center">
        <Button variant="ghost" size="sm" render={<Link href="/revision/texts" />}>
          <ArrowLeft className="size-3.5" />
          {tBackToAll}
        </Button>
      </div>
    </div>
  )
}
