'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Crown,
  BookOpen,
  Drama,
  Lightbulb,
  Search,
  FileText,
  Newspaper,
  Feather,
  Star,
  ChevronDown,
  ChevronRight,
  Pin,
  X,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Breadcrumb } from '@/components/ui/breadcrumb'

import type { ExamBoard } from '@/lib/board/board-store'
import type { SetText, TextCategory } from '@/lib/board/set-texts'

// ─── Category definitions ───────────────────────────────────────────────────

const CATEGORIES: {
  key: TextCategory
  label: string
  description: string
  icon: typeof Crown
  colour: string
  bgColour: string
}[] = [
  {
    key: 'shakespeare',
    label: 'Shakespeare',
    description: 'Plays studied for the Shakespeare component of GCSE Literature',
    icon: Crown,
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
  },
  {
    key: '19th-century',
    label: '19th-Century Novels',
    description: 'Novels from the 1800s studied for the prose component',
    icon: BookOpen,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
  },
  {
    key: 'modern',
    label: 'Modern Texts',
    description: '20th and 21st-century plays and novels for the modern text component',
    icon: Drama,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
  },
  {
    key: 'poetry-anthology',
    label: 'Poetry Anthology',
    description: 'Anthology poems studied for the poetry component',
    icon: BookOpen,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
  },
  {
    key: 'non-fiction',
    label: 'Non-Fiction Anthology',
    description:
      'Speeches, memoirs, travel writing and journalism for IGCSE Language A Paper 1 Section A',
    icon: Newspaper,
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
  },
  {
    key: 'prose',
    label: 'Anthology Prose',
    description: 'Short stories from the Pearson IGCSE Language A anthology Section C',
    icon: Feather,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
  },
]

// ─── Local storage ──────────────────────────────────────────────────────────

const STUDIED_TEXTS_KEY = 'english-hub-studied-texts'
const STUDYING_TEXTS_KEY = 'english-hub-studying-texts'

type Props = {
  boardId: ExamBoard
  boardName: string
  texts: SetText[]
}

export default function TextsRevisionView({ boardId, boardName, texts }: Props) {
  const [studiedSlugs, setStudiedSlugs] = useState<Set<string>>(new Set())
  const [studyingSlugs, setStudyingSlugs] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)
  const [search, setSearch] = useState('')
  const [otherTextsOpen, setOtherTextsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem(STUDIED_TEXTS_KEY)
      if (stored) {
        const parsed: string[] = JSON.parse(stored)
        setStudiedSlugs(new Set(parsed))
      }
    } catch {
      // ignore parse errors
    }
    try {
      const studying = localStorage.getItem(STUDYING_TEXTS_KEY)
      if (studying) {
        const parsed: string[] = JSON.parse(studying)
        setStudyingSlugs(new Set(parsed))
      }
    } catch {
      // ignore parse errors
    }
  }, [])

  const toggleStudied = (slug: string) => {
    setStudiedSlugs((prev) => {
      const next = new Set(prev)
      if (next.has(slug)) {
        next.delete(slug)
      } else {
        next.add(slug)
      }
      localStorage.setItem(STUDIED_TEXTS_KEY, JSON.stringify([...next]))
      return next
    })
  }

  const toggleStudying = (slug: string) => {
    setStudyingSlugs((prev) => {
      const next = new Set(prev)
      if (next.has(slug)) {
        next.delete(slug)
      } else {
        next.add(slug)
      }
      localStorage.setItem(STUDYING_TEXTS_KEY, JSON.stringify([...next]))
      return next
    })
  }

  const clearStudying = () => {
    setStudyingSlugs(new Set())
    localStorage.setItem(STUDYING_TEXTS_KEY, JSON.stringify([]))
  }

  const filtered = useMemo(() => {
    if (!search.trim()) return texts
    const q = search.toLowerCase()
    return texts.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.author.toLowerCase().includes(q) ||
        (t.keyThemes ?? []).some((th) => th.toLowerCase().includes(q)),
    )
  }, [search, texts])

  // Texts the student has pinned as "currently studying" - only those that are
  // still in the board's prescribed list are shown (defensive in case the
  // board changes after pinning).
  const studyingTexts = useMemo(
    () => (mounted ? texts.filter((t) => studyingSlugs.has(t.slug)) : []),
    [mounted, texts, studyingSlugs],
  )

  const hasStudyingSelection = mounted && studyingTexts.length > 0

  // When the student has pinned texts, the "Other texts on your board"
  // accordion shows everything else (still subject to search).
  const otherTexts = useMemo(
    () => (hasStudyingSelection ? filtered.filter((t) => !studyingSlugs.has(t.slug)) : filtered),
    [filtered, hasStudyingSelection, studyingSlugs],
  )

  const categoriesWithTexts = CATEGORIES.map((cat) => ({
    ...cat,
    texts: otherTexts.filter((t) => t.category === cat.key),
  })).filter((cat) => cat.texts.length > 0)

  const totalTexts = texts.length
  const studiedInBoard = mounted ? texts.filter((t) => studiedSlugs.has(t.slug)).length : 0
  const progressPercent = totalTexts > 0 ? Math.round((studiedInBoard / totalTexts) * 100) : 0
  const otherTextsCount = categoriesWithTexts.reduce((sum, c) => sum + c.texts.length, 0)

  // Suppress unused prop warning while keeping it available for future use
  void boardId

  // ─── Render helpers ──────────────────────────────────────────────────────
  const renderTextCard = (text: SetText, featured = false) => {
    const isStudied = mounted && studiedSlugs.has(text.slug)
    const isStudying = mounted && studyingSlugs.has(text.slug)

    return (
      <Card
        key={text.slug}
        className={`group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover ${
          featured ? 'border-primary/30 bg-primary/[0.02]' : ''
        } ${isStudied ? 'border-emerald-500/20' : ''}`}
      >
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <CardTitle className="text-heading-md font-heading leading-tight">
                {text.title}
              </CardTitle>
              <CardDescription className="mt-1">{text.author}</CardDescription>
            </div>
            {isStudied && <CheckCircle2 className="size-5 shrink-0 text-emerald-400" />}
          </div>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-3">
          {/* Themes */}
          {text.keyThemes && text.keyThemes.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {text.keyThemes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                >
                  {theme}
                </span>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="mt-auto flex flex-col gap-2 pt-3">
            <Button
              variant="default"
              size="sm"
              className="w-full"
              render={<Link href={`/revision/texts/${text.slug}`} />}
            >
              Study guide
              <ArrowRight className="size-3.5" />
            </Button>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-xs"
                render={<Link href={`/resources/revision-notes/${text.slug}`} />}
              >
                <FileText className="size-3" />
                Revision notes
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className={`text-xs ${
                  isStudied ? 'text-emerald-400 hover:text-emerald-300' : 'text-muted-foreground'
                }`}
                onClick={() => toggleStudied(text.slug)}
              >
                <CheckCircle2 className="size-3" />
                {isStudied ? 'Studied' : 'Mark done'}
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleStudying(text.slug)}
              className={`text-xs ${isStudying ? 'text-primary' : 'text-muted-foreground'}`}
            >
              <Pin className="size-3" />
              {isStudying ? 'Pinned as studying' : 'Pin as studying'}
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const renderCategorySection = (cat: (typeof CATEGORIES)[number] & { texts: SetText[] }) => {
    const CatIcon = cat.icon
    const studiedInCategory = mounted ? cat.texts.filter((t) => studiedSlugs.has(t.slug)).length : 0

    return (
      <section key={cat.key}>
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`flex size-10 items-center justify-center rounded-xl ${cat.bgColour}`}>
              <CatIcon className={`size-5 ${cat.colour}`} />
            </div>
            <div>
              <h2 className="text-heading-lg font-heading text-foreground">{cat.label}</h2>
              <p className="text-body-sm text-muted-foreground">{cat.description}</p>
            </div>
          </div>
          {mounted && (
            <Badge variant="secondary" className="hidden sm:flex">
              <CheckCircle2 className="mr-1 size-3" />
              {studiedInCategory} / {cat.texts.length} studied
            </Badge>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cat.texts.map((text) => renderTextCard(text))}
        </div>
      </section>
    )
  }

  return (
    <div className="space-y-10 pb-16">
      <Breadcrumb items={[{ label: 'Revision', href: '/revision' }, { label: 'Set Texts' }]} />
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Revision Hub
          </Button>

          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 size-3" />
            {boardName} Literature
          </Badge>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Your {boardName} Set Texts
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            In-depth study guides for every set text on your {boardName} exam board. Shakespeare
            plays, 19th-century novels, and modern texts -- with character analysis, theme tracking,
            and key quotations.
          </p>

          {/* Progress tracker */}
          {mounted && (
            <div className="mt-6 max-w-md">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Texts studied</span>
                <span className="text-sm text-muted-foreground">
                  {studiedInBoard} / {totalTexts}
                </span>
              </div>
              <Progress value={progressPercent} className="h-2" />
              <p className="mt-1.5 text-caption text-muted-foreground">
                {progressPercent === 100
                  ? 'All texts studied -- incredible work!'
                  : progressPercent > 0
                    ? `${progressPercent}% complete -- keep going!`
                    : 'Mark texts as studied to track your progress'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── "What are you studying?" picker ─────────────────────────── */}
      {mounted && texts.length > 0 && (
        <section className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="flex items-center gap-2 text-heading-md font-heading text-foreground">
                <Pin className="size-4 text-primary" />
                What are you studying?
              </h2>
              <p className="mt-1 text-body-sm text-muted-foreground">
                Most students sit one Shakespeare, one 19th-century novel and one modern text. Pin
                the texts you&rsquo;re actually studying to focus your revision view.
              </p>
            </div>
            {hasStudyingSelection && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearStudying}
                className="text-xs text-muted-foreground"
              >
                <X className="size-3" />
                Clear selection
              </Button>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {texts.map((text) => {
              const pinned = studyingSlugs.has(text.slug)
              return (
                <button
                  key={text.slug}
                  type="button"
                  onClick={() => toggleStudying(text.slug)}
                  aria-pressed={pinned}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    pinned
                      ? 'border-primary/40 bg-primary/10 text-primary hover:bg-primary/15'
                      : 'border-border bg-background text-muted-foreground hover:border-border/80 hover:text-foreground'
                  }`}
                >
                  {pinned ? <CheckCircle2 className="size-3" /> : <Pin className="size-3" />}
                  {text.title}
                </button>
              )
            })}
          </div>
        </section>
      )}

      {/* ── Banner when no selection ────────────────────────────────── */}
      {mounted && texts.length > 0 && !hasStudyingSelection && (
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm text-foreground">
          <p>
            <span className="font-semibold">Tip:</span> pick the texts you&rsquo;re actually
            studying above to focus your revision view. You don&rsquo;t need to revise every text on{' '}
            {boardName} -- only the ones your school has chosen.
          </p>
        </div>
      )}

      {/* ── Search ─────────────────────────────────────────────────── */}
      <div className="relative max-w-xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <Search className="size-4 text-muted-foreground" />
        </div>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search texts, authors, or themes..."
          className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* ── "Your texts" featured section ───────────────────────────── */}
      {hasStudyingSelection && (
        <section>
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <Star className="size-5 text-primary" />
              </div>
              <div>
                <h2 className="text-heading-lg font-heading text-foreground">Your texts</h2>
                <p className="text-body-sm text-muted-foreground">
                  The texts you&rsquo;ve told us you&rsquo;re studying -- everything else is hidden
                  below.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {studyingTexts.map((text) => renderTextCard(text, true))}
          </div>
        </section>
      )}

      {/* ── No results ─────────────────────────────────────────────── */}
      {!hasStudyingSelection && categoriesWithTexts.length === 0 && (
        <div className="rounded-xl border border-border bg-card py-16 text-center">
          <Search className="mx-auto size-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold text-foreground">No texts found</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {texts.length === 0
              ? `${boardName} has no prescribed literature texts in our database yet.`
              : 'Try adjusting your search term.'}
          </p>
          {texts.length > 0 && (
            <Button variant="outline" size="sm" className="mt-4" onClick={() => setSearch('')}>
              Clear search
            </Button>
          )}
        </div>
      )}

      {/* ── Text Categories ────────────────────────────────────────── */}
      {hasStudyingSelection
        ? // When pinned texts exist, collapse the rest behind an accordion.
          otherTextsCount > 0 && (
            <section>
              <button
                type="button"
                onClick={() => setOtherTextsOpen((o) => !o)}
                aria-expanded={otherTextsOpen}
                className="flex w-full items-center justify-between rounded-xl border border-border bg-card px-5 py-4 text-left transition-colors hover:border-border/80"
              >
                <div className="flex items-center gap-3">
                  {otherTextsOpen ? (
                    <ChevronDown className="size-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="size-4 text-muted-foreground" />
                  )}
                  <div>
                    <h2 className="text-heading-md font-heading text-foreground">
                      Other texts on your board ({otherTextsCount})
                    </h2>
                    <p className="text-body-sm text-muted-foreground">
                      Browse the full {boardName} list -- click to expand.
                    </p>
                  </div>
                </div>
              </button>

              {otherTextsOpen && (
                <div className="mt-6 space-y-10">
                  {categoriesWithTexts.map((cat) => renderCategorySection(cat))}
                </div>
              )}
            </section>
          )
        : // Default view: render all categories full-width.
          categoriesWithTexts.map((cat) => renderCategorySection(cat))}

      {/* ── Study Tips ──────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-clay-600" />
          <h2 className="text-heading-lg font-heading text-foreground">Literature Revision Tips</h2>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-6 sm:p-8">
            <p className="mb-5 text-body-sm text-muted-foreground max-w-2xl">
              Follow these strategies to make your literature revision more effective and
              exam-focused. The best students do not just read -- they actively engage with every
              text.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-2">
                <h3 className="text-sm font-semibold text-foreground">Learn key quotations</h3>
                <p className="text-xs text-muted-foreground">
                  Aim for 10--15 short, versatile quotations per text. Choose ones that link to
                  multiple themes and contain analysable language techniques.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-2">
                <h3 className="text-sm font-semibold text-foreground">Connect themes to context</h3>
                <p className="text-xs text-muted-foreground">
                  Always explain why the writer made specific choices. Link themes to the
                  historical, social, or biographical context of the text.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-2">
                <h3 className="text-sm font-semibold text-foreground">Practise essay planning</h3>
                <p className="text-xs text-muted-foreground">
                  Before writing full essays, practise planning under timed conditions. Aim for
                  three clear paragraphs with a quotation, analysis, and context in each.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-2">
                <h3 className="text-sm font-semibold text-foreground">
                  Track character development
                </h3>
                <p className="text-xs text-muted-foreground">
                  Note how key characters change throughout the text. Markers reward analysis of
                  character arcs and what these reveal about the writer&apos;s message.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-2">
                <h3 className="text-sm font-semibold text-foreground">Analyse structure</h3>
                <p className="text-xs text-muted-foreground">
                  Do not just focus on language. Consider why events are ordered a certain way, how
                  chapters or acts are structured, and what the opening and ending reveal.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-2">
                <h3 className="text-sm font-semibold text-foreground">
                  Use the writer&apos;s name
                </h3>
                <p className="text-xs text-muted-foreground">
                  Always refer to what the writer does, not just what happens. Say &quot;Priestley
                  presents...&quot; or &quot;Shakespeare suggests...&quot; to show awareness of
                  authorial intent.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
