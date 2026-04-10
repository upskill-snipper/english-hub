'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import {
  BookText,
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
  ExternalLink,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

// ─── Types ──────────────────────────────────────────────────────────────────

type Category = 'shakespeare' | 'nineteenth' | 'modern'

type TextEntry = {
  title: string
  slug: string
  author: string
  category: Category
  boards: string[]
  themes: string[]
  genre: string
}

// ─── Text data ──────────────────────────────────────────────────────────────

const TEXTS: TextEntry[] = [
  // Shakespeare
  {
    title: 'Macbeth',
    slug: 'macbeth',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'],
    themes: ['Ambition', 'Power', 'Guilt', 'Supernatural'],
    genre: 'Tragedy',
  },
  {
    title: 'Romeo and Juliet',
    slug: 'romeo-and-juliet',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'],
    themes: ['Love', 'Fate', 'Conflict', 'Family'],
    genre: 'Tragedy',
  },
  {
    title: 'The Tempest',
    slug: 'the-tempest',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'],
    themes: ['Power', 'Colonialism', 'Forgiveness', 'Magic'],
    genre: 'Romance',
  },
  {
    title: 'Much Ado About Nothing',
    slug: 'much-ado-about-nothing',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Deception', 'Love', 'Honour', 'Gender'],
    genre: 'Comedy',
  },
  {
    title: 'The Merchant of Venice',
    slug: 'merchant-of-venice',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'],
    themes: ['Justice', 'Mercy', 'Prejudice', 'Appearance vs Reality'],
    genre: 'Comedy',
  },
  {
    title: 'Othello',
    slug: 'othello',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'],
    themes: ['Jealousy', 'Race', 'Manipulation', 'Honour'],
    genre: 'Tragedy',
  },

  // 19th Century Novels
  {
    title: 'A Christmas Carol',
    slug: 'christmas-carol',
    author: 'Charles Dickens',
    category: 'nineteenth',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Redemption', 'Poverty', 'Social Responsibility', 'Christmas'],
    genre: 'Novella',
  },
  {
    title: 'Jekyll and Hyde',
    slug: 'jekyll-and-hyde',
    author: 'Robert Louis Stevenson',
    category: 'nineteenth',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Duality', 'Repression', 'Science', 'Secrecy'],
    genre: 'Gothic Novella',
  },
  {
    title: 'Frankenstein',
    slug: 'frankenstein',
    author: 'Mary Shelley',
    category: 'nineteenth',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Creation', 'Responsibility', 'Isolation', 'Ambition'],
    genre: 'Gothic Novel',
  },
  {
    title: 'Great Expectations',
    slug: 'great-expectations',
    author: 'Charles Dickens',
    category: 'nineteenth',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Class', 'Ambition', 'Identity', 'Loyalty'],
    genre: 'Bildungsroman',
  },
  {
    title: 'Jane Eyre',
    slug: 'jane-eyre',
    author: 'Charlotte Bront\u00EB',
    category: 'nineteenth',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Independence', 'Class', 'Gender', 'Love'],
    genre: 'Bildungsroman',
  },
  {
    title: 'Pride and Prejudice',
    slug: 'pride-and-prejudice',
    author: 'Jane Austen',
    category: 'nineteenth',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Love', 'Class', 'Pride', 'Marriage'],
    genre: 'Novel of Manners',
  },
  {
    title: 'The Sign of the Four',
    slug: 'sign-of-four',
    author: 'Arthur Conan Doyle',
    category: 'nineteenth',
    boards: ['Edexcel'],
    themes: ['Justice', 'Empire', 'Reason vs Emotion', 'Wealth'],
    genre: 'Detective Novel',
  },
  {
    title: 'Silas Marner',
    slug: 'silas-marner',
    author: 'George Eliot',
    category: 'nineteenth',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Community', 'Redemption', 'Class', 'Isolation'],
    genre: 'Novel',
  },

  // Modern Texts
  {
    title: 'An Inspector Calls',
    slug: 'inspector-calls',
    author: 'J.B. Priestley',
    category: 'modern',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Responsibility', 'Class', 'Gender', 'Morality'],
    genre: 'Well-Made Play',
  },
  {
    title: 'Animal Farm',
    slug: 'animal-farm',
    author: 'George Orwell',
    category: 'modern',
    boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'],
    themes: ['Power', 'Corruption', 'Revolution', 'Propaganda'],
    genre: 'Allegorical Novella',
  },
  {
    title: 'Lord of the Flies',
    slug: 'lord-of-the-flies',
    author: 'William Golding',
    category: 'modern',
    boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'],
    themes: ['Civilisation vs Savagery', 'Power', 'Fear', 'Innocence'],
    genre: 'Allegorical Novel',
  },
  {
    title: 'Blood Brothers',
    slug: 'blood-brothers',
    author: 'Willy Russell',
    category: 'modern',
    boards: ['AQA', 'Edexcel'],
    themes: ['Class', 'Nature vs Nurture', 'Superstition', 'Friendship'],
    genre: 'Musical Play',
  },
  {
    title: 'Of Mice and Men',
    slug: 'of-mice-and-men',
    author: 'John Steinbeck',
    category: 'modern',
    boards: ['AQA', 'Edexcel', 'CAIE', 'OCR'],
    themes: ['Loneliness', 'The American Dream', 'Friendship', 'Prejudice'],
    genre: 'Novella',
  },
  {
    title: 'Never Let Me Go',
    slug: 'never-let-me-go',
    author: 'Kazuo Ishiguro',
    category: 'modern',
    boards: ['AQA', 'Edexcel', 'OCR'],
    themes: ['Identity', 'Mortality', 'Ethics', 'Memory'],
    genre: 'Dystopian Novel',
  },
]

// ─── Category definitions ───────────────────────────────────────────────────

const CATEGORIES: {
  key: Category
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
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
  },
  {
    key: 'nineteenth',
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
]

// ─── Board badge colours ────────────────────────────────────────────────────

const BOARD_COLOURS: Record<string, string> = {
  AQA: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Edexcel: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  OCR: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  CAIE: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
}

// ─── Local storage ──────────────────────────────────────────────────────────

const STUDIED_TEXTS_KEY = 'english-hub-studied-texts'

// ─── Component ──────────────────────────────────────────────────────────────

export default function TextsRevisionPage() {
  const [studiedSlugs, setStudiedSlugs] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)
  const [search, setSearch] = useState('')

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

  const filtered = useMemo(() => {
    if (!search.trim()) return TEXTS
    const q = search.toLowerCase()
    return TEXTS.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.author.toLowerCase().includes(q) ||
        t.themes.some((th) => th.toLowerCase().includes(q)) ||
        t.genre.toLowerCase().includes(q) ||
        t.boards.some((b) => b.toLowerCase().includes(q))
    )
  }, [search])

  const categoriesWithTexts = CATEGORIES.map((cat) => ({
    ...cat,
    texts: filtered.filter((t) => t.category === cat.key),
  })).filter((cat) => cat.texts.length > 0)

  const totalTexts = TEXTS.length
  const studiedCount = mounted ? studiedSlugs.size : 0
  const progressPercent = totalTexts > 0 ? Math.round((studiedCount / totalTexts) * 100) : 0

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
            render={<Link href="/revision" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Revision Hub
          </Button>

          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 size-3" />
            GCSE English Literature
          </Badge>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Set Texts Revision
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            In-depth study guides for every GCSE Literature set text. Shakespeare plays,
            19th-century novels, and modern texts -- with character analysis, theme tracking, key
            quotations, and exam board information.
          </p>

          {/* Progress tracker */}
          {mounted && (
            <div className="mt-6 max-w-md">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Texts studied</span>
                <span className="text-sm text-muted-foreground">
                  {studiedCount} / {totalTexts}
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

      {/* ── Search ─────────────────────────────────────────────────── */}
      <div className="relative max-w-xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <Search className="size-4 text-muted-foreground" />
        </div>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search texts, authors, themes, or exam boards..."
          className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* ── No results ─────────────────────────────────────────────── */}
      {categoriesWithTexts.length === 0 && (
        <div className="rounded-xl border border-border bg-card py-16 text-center">
          <Search className="mx-auto size-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold text-foreground">No texts found</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Try adjusting your search term.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-4"
            onClick={() => setSearch('')}
          >
            Clear search
          </Button>
        </div>
      )}

      {/* ── Text Categories ────────────────────────────────────────── */}
      {categoriesWithTexts.map((cat) => {
        const CatIcon = cat.icon
        const studiedInCategory = mounted
          ? cat.texts.filter((t) => studiedSlugs.has(t.slug)).length
          : 0

        return (
          <section key={cat.key}>
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`flex size-10 items-center justify-center rounded-xl ${cat.bgColour}`}
                >
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
              {cat.texts.map((text) => {
                const isStudied = mounted && studiedSlugs.has(text.slug)

                return (
                  <Card
                    key={text.slug}
                    className={`group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover ${
                      isStudied ? 'border-emerald-500/20' : ''
                    }`}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-heading-md font-heading leading-tight">
                            {text.title}
                          </CardTitle>
                          <CardDescription className="mt-1">{text.author}</CardDescription>
                        </div>
                        {isStudied && (
                          <CheckCircle2 className="size-5 shrink-0 text-emerald-400" />
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="flex flex-1 flex-col gap-3">
                      {/* Genre badge */}
                      <div>
                        <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                          {text.genre}
                        </span>
                      </div>

                      {/* Themes */}
                      <div className="flex flex-wrap gap-1.5">
                        {text.themes.map((theme) => (
                          <span
                            key={theme}
                            className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                          >
                            {theme}
                          </span>
                        ))}
                      </div>

                      {/* Exam board badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {text.boards.map((board) => (
                          <span
                            key={board}
                            className={`rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                              BOARD_COLOURS[board] ?? 'bg-muted text-muted-foreground border-border'
                            }`}
                          >
                            {board}
                          </span>
                        ))}
                      </div>

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
                              isStudied
                                ? 'text-emerald-400 hover:text-emerald-300'
                                : 'text-muted-foreground'
                            }`}
                            onClick={() => toggleStudied(text.slug)}
                          >
                            <CheckCircle2 className="size-3" />
                            {isStudied ? 'Studied' : 'Mark done'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>
        )
      })}

      {/* ── Study Tips ──────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-amber-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Literature Revision Tips
          </h2>
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
                <h3 className="text-sm font-semibold text-foreground">
                  Learn key quotations
                </h3>
                <p className="text-xs text-muted-foreground">
                  Aim for 10--15 short, versatile quotations per text. Choose ones that link to
                  multiple themes and contain analysable language techniques.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-2">
                <h3 className="text-sm font-semibold text-foreground">
                  Connect themes to context
                </h3>
                <p className="text-xs text-muted-foreground">
                  Always explain why the writer made specific choices. Link themes to the
                  historical, social, or biographical context of the text.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-2">
                <h3 className="text-sm font-semibold text-foreground">
                  Practise essay planning
                </h3>
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
                  Note how key characters change throughout the text. Examiners reward analysis
                  of character arcs and what these reveal about the writer&apos;s message.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background/50 p-4 space-y-2">
                <h3 className="text-sm font-semibold text-foreground">
                  Analyse structure
                </h3>
                <p className="text-xs text-muted-foreground">
                  Do not just focus on language. Consider why events are ordered a certain way,
                  how chapters or acts are structured, and what the opening and ending reveal.
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

      {/* ── Exam Board Guide ───────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookText className="size-5 text-blue-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Which texts are on my exam board?
          </h2>
        </div>

        <Card>
          <CardContent className="p-6">
            <p className="mb-4 text-body-sm text-muted-foreground">
              Different exam boards study different set texts. Check the colour-coded badges on each
              card above to see which boards include each text, or use the search bar to filter by
              board name. Focus your revision on the texts your school has chosen for your exam.
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(BOARD_COLOURS).map(([board, cls]) => {
                const count = TEXTS.filter((t) => t.boards.includes(board)).length
                return (
                  <div
                    key={board}
                    className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/50 p-3"
                  >
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide ${cls}`}
                    >
                      {board}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {count} text{count !== 1 ? 's' : ''}
                    </span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
