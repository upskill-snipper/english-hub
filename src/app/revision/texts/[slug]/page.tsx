import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Crown,
  Drama,
  FileText,
  Lightbulb,
  Quote,
  Sparkles,
  Users,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SET_TEXTS, getSetText, textAvailableForBoard, type SetText } from '@/lib/board/set-texts'
import { getServerBoard } from '@/lib/board/get-server-board'

// ─── Static params ──────────────────────────────────────────────────────────

export function generateStaticParams() {
  return SET_TEXTS.map((text) => ({ slug: text.slug }))
}

// ─── Metadata ────────────────────────────────────────────────────────────────

type Params = { slug: string }

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const text = getSetText(slug)
  if (!text) {
    return {
      title: 'Set Text Not Found | The English Hub',
      description: 'The set text you are looking for could not be found.',
    }
  }
  return {
    title: `${text.title} — Study Guide | The English Hub`,
    description: `In-depth study guide for ${text.title} by ${text.author}: characters, themes, key quotations and exam-ready analysis.`,
    alternates: {
      canonical: `https://theenglishhub.app/revision/texts/${text.slug}`,
    },
  }
}

// ─── Category metadata ─────────────────────────────────────────────────────

const CATEGORY_META: Record<
  SetText['category'],
  { label: string; icon: typeof Crown; colour: string; bgColour: string }
> = {
  shakespeare: {
    label: 'Shakespeare',
    icon: Crown,
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
  },
  '19th-century': {
    label: '19th-Century Novel',
    icon: BookOpen,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
  },
  modern: {
    label: 'Modern Text',
    icon: Drama,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
  },
  'poetry-anthology': {
    label: 'Poetry Anthology',
    icon: BookOpen,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
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

export default async function TextStudyGuidePage({
  params,
}: {
  params: Promise<Params>
}) {
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
  const analysisSlug = ANALYSIS_SLUG_MAP[text.slug]
  const igcseProseSlug = IGCSE_PROSE_SLUG_MAP[text.slug]

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
            Back to set texts
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <CategoryIcon className={`mr-1 size-3 ${category.colour}`} />
              {category.label}
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Sparkles className="mr-1 size-3" />
              {text.boards.length === 1 ? '1 exam board' : `${text.boards.length} exam boards`}
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {text.title}
          </h1>
          <p className="mt-2 text-body-lg text-muted-foreground">by {text.author}</p>

          {text.description && (
            <p className="mt-4 max-w-2xl text-body-md text-muted-foreground">
              {text.description}
            </p>
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
          <BookOpen className="size-5 text-blue-400" />
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">
              Study Resources
            </h2>
            <p className="text-body-sm text-muted-foreground">
              Everything we have on {text.title} in one place.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="group transition-all hover:border-border hover:shadow-card-hover">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
                  <FileText className="size-5 text-blue-400" />
                </div>
                <CardTitle className="text-heading-md font-heading">
                  Revision notes
                </CardTitle>
              </div>
              <CardDescription className="mt-2">
                Concise revision notes covering plot, characters, context and themes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href={`/resources/revision-notes/${revisionNotesSlug}`} />}
              >
                Open revision notes
                <ArrowRight className="size-3.5" />
              </Button>
            </CardContent>
          </Card>

          {analysisSlug && (
            <Card className="group transition-all hover:border-border hover:shadow-card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
                    <Quote className="size-5 text-violet-400" />
                  </div>
                  <CardTitle className="text-heading-md font-heading">
                    In-depth analysis
                  </CardTitle>
                </div>
                <CardDescription className="mt-2">
                  Long-form essays and quote-by-quote analysis written for top grades.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  render={<Link href={`/analysis/${analysisSlug}`} />}
                >
                  Read analysis
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
                    <Users className="size-5 text-emerald-400" />
                  </div>
                  <CardTitle className="text-heading-md font-heading">
                    Edexcel IGCSE guide
                  </CardTitle>
                </div>
                <CardDescription className="mt-2">
                  Plot beats, characters, themes and key quotations for the IGCSE prose paper.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  render={<Link href={`/igcse/edexcel/prose/${igcseProseSlug}`} />}
                >
                  Open IGCSE guide
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
                <CardTitle className="text-heading-md font-heading">
                  Active recall quiz
                </CardTitle>
              </div>
              <CardDescription className="mt-2">
                Test your knowledge with quote-completion and theme-matching questions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href="/revision/quiz" />}
              >
                Open the quiz hub
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
            How to revise {text.title}
          </h2>
        </div>

        <Card>
          <CardContent className="p-6 sm:p-8">
            <p className="mb-5 max-w-2xl text-body-sm text-muted-foreground">
              Follow these steps for high-impact revision. The best students do not just re-read
              the text — they actively engage with quotation, structure and writer&apos;s
              intentions.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 rounded-xl border border-border/60 bg-background/50 p-4">
                <h3 className="text-sm font-semibold text-foreground">
                  Memorise short quotations
                </h3>
                <p className="text-xs text-muted-foreground">
                  Aim for 10–15 short, versatile quotations. Choose ones that link to multiple
                  themes and contain analysable language techniques.
                </p>
              </div>
              <div className="space-y-2 rounded-xl border border-border/60 bg-background/50 p-4">
                <h3 className="text-sm font-semibold text-foreground">
                  Track character development
                </h3>
                <p className="text-xs text-muted-foreground">
                  Note how each major character changes from start to finish, and what those
                  changes reveal about the writer&apos;s message.
                </p>
              </div>
              <div className="space-y-2 rounded-xl border border-border/60 bg-background/50 p-4">
                <h3 className="text-sm font-semibold text-foreground">
                  Connect themes to context
                </h3>
                <p className="text-xs text-muted-foreground">
                  Always explain why the writer made specific choices. Link themes to the
                  historical, social or biographical context of the text.
                </p>
              </div>
              <div className="space-y-2 rounded-xl border border-border/60 bg-background/50 p-4">
                <h3 className="text-sm font-semibold text-foreground">
                  Plan timed essays
                </h3>
                <p className="text-xs text-muted-foreground">
                  Practise plans under timed conditions. Aim for three clear paragraphs, each
                  with a quotation, analysis and contextual link.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── Back to Hub ────────────────────────────────────────────── */}
      <div className="flex justify-center">
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/revision/texts" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to all set texts
        </Button>
      </div>
    </div>
  )
}
