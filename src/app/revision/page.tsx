'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Layers,
  FileText,
  PenTool,
  GraduationCap,
  Target,
  Brain,
  Sparkles,
  Clock,
  ArrowRight,
  TrendingUp,
  BookText,
  Zap,
  BarChart3,
  CheckCircle2,
  Flame,
  CalendarDays,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

// ─── Section data ──────────────────────────────────────────────────────────

interface RevisionSection {
  title: string
  description: string
  href: string
  icon: typeof BookOpen
  colour: string
  bgColour: string
  stats: string
  tag?: string
}

const SECTIONS: RevisionSection[] = [
  {
    title: 'Poetry',
    description:
      'Interactive analysis of every anthology poem. Annotations, comparisons, and practice questions.',
    href: '/revision/poetry',
    icon: FileText,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
    stats: '30+ poems',
    tag: 'Popular',
  },
  {
    title: 'Set Texts',
    description:
      'In-depth study guides for Shakespeare, 19th-century novels, and modern texts with reading tracker.',
    href: '/revision/texts',
    icon: BookText,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
    stats: '20+ texts',
  },
  {
    title: 'Language Skills',
    description:
      'Reading comprehension, creative writing, transactional writing, and SPaG mastery.',
    href: '/revision/language',
    icon: PenTool,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    stats: '4 skill areas',
  },
  {
    title: 'Flashcards',
    description:
      'Spaced repetition flashcards for quotes, terminology, and key concepts. Study smarter, not harder.',
    href: '/revision/flashcards',
    icon: Layers,
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
    stats: '500+ cards',
    tag: 'New',
  },
  {
    title: 'Exam Technique',
    description:
      'Essay structures, timing strategies, question types, and mark scheme breakdowns for every paper.',
    href: '/revision/exam-technique',
    icon: Target,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    stats: '12 guides',
  },
  {
    title: 'Grade Targets',
    description:
      'Personalised revision plans based on your target grade. Know exactly what to focus on.',
    href: '/revision/grade-targets',
    icon: TrendingUp,
    colour: 'text-cyan-400',
    bgColour: 'bg-cyan-500/10',
    stats: 'Grades 4-9',
  },
  {
    title: 'Quick Quizzes',
    description:
      'Test yourself with timed quizzes on any topic. Instant feedback and progress tracking.',
    href: '/revision/quiz',
    icon: Zap,
    colour: 'text-orange-400',
    bgColour: 'bg-orange-500/10',
    stats: '100+ quizzes',
  },
]

// ─── Quick stats ──────────────────────────────────────────────────────────

const QUICK_STATS = [
  { label: 'Subjects', value: '7', icon: BookOpen },
  { label: 'Resources', value: '200+', icon: FileText },
  { label: 'Flashcards', value: '500+', icon: Layers },
  { label: 'Quizzes', value: '100+', icon: Brain },
]

// ─── Recently studied keys ────────────────────────────────────────────────

const RECENTLY_STUDIED_KEY = 'english-hub-recently-studied'
const STUDIED_POEMS_KEY = 'english-hub-studied-poems'
const LAST_VISITED_KEY = 'english-hub-last-visited-revision'

interface RecentItem {
  title: string
  href: string
  section: string
  timestamp: number
}

function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((s) => (s.length > 0 ? s[0].toUpperCase() + s.slice(1) : s))
    .join(' ')
}

// ─── Suggested items ──────────────────────────────────────────────────────

const SUGGESTED_ITEMS = [
  {
    title: 'Power and Conflict Poetry',
    href: '/revision/poetry',
    section: 'Poetry',
    reason: 'Essential for AQA Literature',
    icon: FileText,
    colour: 'text-rose-400',
  },
  {
    title: 'Essay Structure Guide',
    href: '/revision/exam-technique',
    section: 'Exam Technique',
    reason: 'Boost your marks instantly',
    icon: Target,
    colour: 'text-emerald-400',
  },
  {
    title: 'Key Quotes Flashcards',
    href: '/revision/flashcards',
    section: 'Flashcards',
    reason: 'Most effective revision method',
    icon: Layers,
    colour: 'text-amber-400',
  },
  {
    title: 'Macbeth Study Guide',
    href: '/revision/texts',
    section: 'Set Texts',
    reason: 'Most popular text',
    icon: BookText,
    colour: 'text-blue-400',
  },
]

// ─── Component ──────────────────────────────────────────────────────────────

export default function RevisionHubPage() {
  const [recentItems, setRecentItems] = useState<RecentItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const merged: RecentItem[] = []
      const seen = new Set<string>()

      // 1. Explicit recently-studied entries
      const stored = localStorage.getItem(RECENTLY_STUDIED_KEY)
      if (stored) {
        const parsed: RecentItem[] = JSON.parse(stored)
        for (const item of parsed) {
          if (!seen.has(item.href)) {
            merged.push(item)
            seen.add(item.href)
          }
        }
      }

      // 2. Last visited revision page (single string)
      const lastVisited = localStorage.getItem(LAST_VISITED_KEY)
      if (lastVisited) {
        try {
          const parsed = JSON.parse(lastVisited) as { href: string; title: string; section: string; timestamp: number }
          if (parsed && parsed.href && !seen.has(parsed.href)) {
            merged.push(parsed)
            seen.add(parsed.href)
          }
        } catch {
          // legacy plain-string fallback
          if (!seen.has(lastVisited)) {
            merged.push({
              title: slugToTitle(lastVisited.split('/').filter(Boolean).pop() ?? 'Revision'),
              href: lastVisited,
              section: 'Revision',
              timestamp: Date.now(),
            })
            seen.add(lastVisited)
          }
        }
      }

      // 3. Studied poem slugs (Set serialised as array)
      const studiedPoems = localStorage.getItem(STUDIED_POEMS_KEY)
      if (studiedPoems) {
        const slugs: string[] = JSON.parse(studiedPoems)
        for (const slug of slugs) {
          // poem slugs are stored as bare slugs — try common cluster paths
          const candidatePaths = [
            `/revision/poetry/power-and-conflict/${slug}`,
            `/revision/poetry/love-and-relationships/${slug}`,
            `/revision/poetry/eduqas/${slug}`,
          ]
          for (const href of candidatePaths) {
            if (seen.has(href)) continue
            // We can\'t verify existence at runtime, but the link will 404 if missing.
            // Add the first plausible candidate.
            merged.push({
              title: slugToTitle(slug),
              href,
              section: 'Poetry',
              timestamp: Date.now(),
            })
            seen.add(href)
            break
          }
        }
      }

      // Sort by timestamp desc and trim to 5
      merged.sort((a, b) => b.timestamp - a.timestamp)
      setRecentItems(merged.slice(0, 5))
    } catch {
      // ignore parse errors
    }
  }, [])

  const suggestedNext = useMemo(() => {
    const visitedHrefs = new Set(recentItems.map((r) => r.href))
    const unvisited = SUGGESTED_ITEMS.filter((s) => !visitedHrefs.has(s.href))
    return unvisited.length > 0 ? unvisited.slice(0, 3) : SUGGESTED_ITEMS.slice(0, 3)
  }, [recentItems])

  return (
    <div className="space-y-10 pb-16">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        {/* decorative glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 size-3" />
            GCSE English Revision
          </Badge>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Your Revision Hub
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Everything you need to ace your English exams in one place. Interactive study guides,
            spaced repetition flashcards, and exam technique mastery -- built around how your
            brain actually learns.
          </p>

          {/* Quick stats */}
          <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
            {QUICK_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/50 px-3 py-2"
              >
                <stat.icon className="size-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Study Plan CTA ──────────────────────────────────────────── */}
      <section className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/[0.08] via-card to-violet-500/[0.05] p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/15">
              <CalendarDays className="size-6 text-primary" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-2">
                <Sparkles className="mr-1 size-3" />
                Personalised
              </Badge>
              <h2 className="text-heading-md font-heading text-foreground">
                Build your study plan
              </h2>
              <p className="mt-1 max-w-xl text-body-sm text-muted-foreground">
                Answer 5 quick questions and get a week-by-week revision plan tailored to your
                exam date, target grade, and weakest area.
              </p>
            </div>
          </div>
          <Button variant="default" size="lg" render={<Link href="/revision/study-plan" />}>
            Start diagnostic
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>

      {/* ── Section Cards ────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <GraduationCap className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Explore Sections</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover"
            >
              {section.tag && (
                <Badge
                  variant="default"
                  className="absolute right-4 top-4 text-[0.65rem] uppercase tracking-wider"
                >
                  {section.tag}
                </Badge>
              )}

              <div className="mb-3 flex items-center gap-3">
                <div
                  className={`flex size-10 items-center justify-center rounded-xl ${section.bgColour}`}
                >
                  <section.icon className={`size-5 ${section.colour}`} />
                </div>
                <div>
                  <h3 className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <span className="text-caption text-muted-foreground">{section.stats}</span>
                </div>
              </div>

              <p className="flex-1 text-body-sm text-muted-foreground leading-relaxed">
                {section.description}
              </p>

              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Start revising
                <ArrowRight className="size-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Recently Studied ─────────────────────────────────────────── */}
      {mounted && recentItems.length > 0 && (
        <section>
          <div className="mb-5 flex items-center gap-3">
            <Clock className="size-5 text-muted-foreground" />
            <h2 className="text-heading-lg font-heading text-foreground">Recently Studied</h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {recentItems.map((item) => (
              <Link
                key={item.href + item.timestamp}
                href={item.href}
                className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="size-4 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.section}</p>
                </div>
                <ArrowRight className="size-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Suggested Next ───────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Flame className="size-5 text-orange-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Suggested Next</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {suggestedNext.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className={`size-5 ${item.colour}`} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">{item.section}</p>
                <div className="mt-2 flex items-center gap-1.5">
                  <CheckCircle2 className="size-3 text-emerald-400" />
                  <span className="text-caption text-emerald-400">{item.reason}</span>
                </div>
              </div>
              <ArrowRight className="mt-1 size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </section>

      {/* ── Motivational banner ──────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/[0.06] via-card to-violet-500/[0.04] p-6 sm:p-8 text-center">
        <BarChart3 className="mx-auto mb-3 size-8 text-primary" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Consistent revision beats cramming every time
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Students who revise for 20 minutes a day outperform those who cram for hours before the
          exam. Start with one section above and build the habit.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/revision/flashcards" />}
        >
          Start a quick session
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
