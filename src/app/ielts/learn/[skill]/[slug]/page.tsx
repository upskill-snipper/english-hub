'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Dumbbell,
  Headphones,
  Library,
  Mic,
  PenLine,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { levelMeta, unitsForSkill, type Lesson } from '@/lib/ielts/curriculum'
import { lessonBySlug, lessonsForUnit } from '@/lib/ielts/lessons'
import { getCompletedLessons, markLessonComplete } from '@/lib/ielts/store'
import { SKILL_META, type IeltsSkill } from '@/lib/ielts/types'
import { useT } from '@/lib/i18n/use-t'
import { useLocale } from '@/lib/i18n/use-locale'
import { IELTS_LEARN_DICTIONARY } from '@/lib/i18n/dictionary-ielts-learn'

// ─── Local i18n helper ────────────────────────────────────────────────────────
// ielts.learn.* keys live in the dictionary-ielts-learn shard, which isn't wired
// into the global lookup() chain — resolve them here against the live locale,
// falling back to the shared useT() for any cross-module ielts.* key. `vars`
// interpolates {token} placeholders (minutes, skill labels) so wrapping phrases
// stay translatable as a whole. Modelled on usePlanT() in app/ielts/plan/page.tsx.
type Vars = Record<string, string | number>
type LearnTFn = (key: string, vars?: Vars) => string

function interpolate(template: string, vars?: Vars): string {
  if (!vars) return template
  return template.replace(/\{(\w+)\}/g, (m, k) =>
    Object.prototype.hasOwnProperty.call(vars, k) ? String(vars[k]) : m,
  )
}

function useLearnT(): LearnTFn {
  const tBase = useT()
  const locale = useLocale()
  return (key: string, vars?: Vars) => {
    const entry = IELTS_LEARN_DICTIONARY[key]
    if (entry) {
      const value = locale === 'ar' && entry.ar ? entry.ar : entry.en
      return interpolate(value, vars)
    }
    return interpolate(tBase(key), vars)
  }
}

// ─── IELTS lesson page ─────────────────────────────────────────────────────
// Renders one self-study lesson: title + est. minutes + level badge, the
// Markdown body (via the safe in-house ./_components/Markdown renderer — the
// repo has no markdown lib in use), a "Mark complete" button (persists to the
// localStorage-backed completion store), prev/next navigation within the same
// skill (ordered by unit, then by position in the unit), and CTAs to practise
// the skill + return to the library.
//
// Client component (completion is in localStorage → mount, then read). Handles
// the unknown-skill / unknown-slug case with a graceful "not found" panel.
// Exactly one <h1>; the Markdown renderer emits <h2>+ only.
// ────────────────────────────────────────────────────────────────────────────

import { Markdown } from '../../_components/Markdown'

type LearnTrack = IeltsSkill | 'foundation'

const TRACK_ICON: Record<LearnTrack, typeof BookOpen> = {
  foundation: Compass,
  listening: Headphones,
  reading: BookOpen,
  writing: PenLine,
  speaking: Mic,
}

const FOUNDATION_ACCENT = { colour: 'text-amber-400', bgColour: 'bg-amber-500/10' } as const

function trackAccent(skill: LearnTrack): { colour: string; bgColour: string } {
  if (skill === 'foundation') return FOUNDATION_ACCENT
  const meta = SKILL_META[skill]
  return { colour: meta.colour, bgColour: meta.bgColour }
}

function trackLabel(skill: LearnTrack): string {
  return skill === 'foundation' ? 'Foundation' : SKILL_META[skill].label
}

/** Practice destination for a track (Foundation routes back into the loop). */
function practiceHref(skill: LearnTrack): string {
  return skill === 'foundation' ? '/ielts' : SKILL_META[skill].href
}

/**
 * Strip a single leading "# Heading" from a lesson body. Every body opens with
 * an H1 that duplicates lesson.title; we render the title as the page <h1>
 * ourselves, so removing it avoids a repeated heading (and a second H1-level
 * line) in the rendered content.
 */
function stripLeadingTitle(body: string): string {
  return body.replace(/^\s*#\s+.*(?:\r?\n)+/, '')
}

/** All lessons for a skill in curriculum order (unit order → within-unit order). */
function orderedSkillLessons(skill: LearnTrack): Lesson[] {
  return unitsForSkill(skill).flatMap((u) => lessonsForUnit(u.id))
}

export default function IeltsLessonPage() {
  const t = useLearnT()
  // Route params come from the [skill]/[slug] segments. useParams() is the
  // repo convention for reading them in a client component (see e.g.
  // app/learn/[courseId]/[moduleId]). Values are URL-decoded by Next.
  const routeParams = useParams<{ skill: string; slug: string }>()
  const skill = routeParams.skill ?? ''
  const slug = routeParams.slug ?? ''
  const lesson = lessonBySlug(skill, slug)

  const [mounted, setMounted] = useState(false)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (lesson) setComplete(getCompletedLessons().includes(lesson.id))
  }, [lesson])

  // Prev / next within the same skill (only meaningful when the lesson exists).
  const { prev, next } = useMemo(() => {
    if (!lesson) return { prev: undefined, next: undefined }
    const ordered = orderedSkillLessons(lesson.skill)
    const idx = ordered.findIndex((l) => l.id === lesson.id)
    return {
      prev: idx > 0 ? ordered[idx - 1] : undefined,
      next: idx >= 0 && idx < ordered.length - 1 ? ordered[idx + 1] : undefined,
    }
  }, [lesson])

  const cleanBody = useMemo(() => (lesson ? stripLeadingTitle(lesson.body) : ''), [lesson])

  // ── Not found (unknown skill or slug) ──────────────────────────────────────
  if (!lesson) {
    return (
      <main id="main-content" className="min-h-screen bg-background">
        <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:px-6">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
            <Library className="h-7 w-7 text-muted-foreground" aria-hidden />
          </span>
          <h1 className="mt-5 font-serif text-2xl font-semibold tracking-tight text-foreground">
            {t('ielts.learn.notfound.title')}
          </h1>
          <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted-foreground">
            {t('ielts.learn.notfound.body')}
          </p>
          <Button className="mt-7 gap-2" render={<Link href="/ielts/learn" />}>
            <Library className="h-4 w-4" aria-hidden />
            {t('ielts.learn.notfound.back')}
          </Button>
        </div>
      </main>
    )
  }

  const skillKey = lesson.skill as LearnTrack
  const accent = trackAccent(skillKey)
  const Icon = TRACK_ICON[skillKey]
  const level = levelMeta(lesson.level)

  function handleComplete() {
    if (!lesson) return
    markLessonComplete(lesson.id)
    setComplete(true)
  }

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* ── Lesson header ───────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <Link
              href="/ielts/learn"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {t('ielts.learn.crumb.library')}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-border" aria-hidden />
            <Link
              href={`/ielts/learn#track-${skillKey}-heading`}
              className={cn(
                'font-medium capitalize transition-colors hover:opacity-80',
                accent.colour,
              )}
            >
              {trackLabel(skillKey)}
            </Link>
          </div>

          <div className="mt-4 flex items-start gap-3">
            <span
              className={cn(
                'mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl',
                accent.bgColour,
              )}
            >
              <Icon className={cn('h-5 w-5', accent.colour)} aria-hidden />
            </span>
            <div>
              <h1 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
                {lesson.title}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className="font-mono text-[10px] uppercase tracking-wide"
                  title={`${level.label} · ${level.cefr} · ${level.bandRange}`}
                >
                  {level.label}
                </Badge>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {t('ielts.learn.lesson.minutes_read', { min: lesson.estMinutes })}
                </span>
                {mounted && complete ? (
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-500">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                    {t('ielts.learn.lesson.completed')}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lesson body ─────────────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Markdown source={cleanBody} />

        {/* ── Mark complete ─────────────────────────────────────────── */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-soft">
          {mounted && complete ? (
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" aria-hidden />
                </span>
                <div>
                  <p className="font-serif text-base font-semibold text-foreground">
                    {t('ielts.learn.complete.done_title')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {next
                      ? t('ielts.learn.complete.done_body_next')
                      : t('ielts.learn.complete.done_body_end')}
                  </p>
                </div>
              </div>
              {next ? (
                <Button
                  className="shrink-0 gap-2"
                  render={<Link href={`/ielts/learn/${next.skill}/${next.slug}`} />}
                >
                  {t('ielts.learn.complete.next_lesson')}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="shrink-0 gap-2"
                  render={<Link href={practiceHref(skillKey)} />}
                >
                  <Dumbbell className="h-4 w-4" aria-hidden />
                  {t('ielts.learn.complete.practise_skill', { skill: trackLabel(skillKey) })}
                </Button>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
              <div>
                <p className="font-serif text-base font-semibold text-foreground">
                  {t('ielts.learn.complete.cta_title')}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t('ielts.learn.complete.cta_body')}
                </p>
              </div>
              <Button
                size="lg"
                className="shrink-0 gap-2"
                onClick={handleComplete}
                disabled={!mounted}
              >
                <Check className="h-4 w-4" aria-hidden />
                {t('ielts.learn.complete.mark')}
              </Button>
            </div>
          )}
        </div>

        {/* ── Prev / next within the skill ──────────────────────────── */}
        {prev || next ? (
          <nav aria-label={t('ielts.learn.nav.aria')} className="mt-6 grid gap-3 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/ielts/learn/${prev.skill}/${prev.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-border"
              >
                <ChevronLeft className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
                <span className="min-w-0">
                  <span className="block text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    {t('ielts.learn.nav.previous')}
                  </span>
                  <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary">
                    {prev.title}
                  </span>
                </span>
              </Link>
            ) : (
              <span aria-hidden />
            )}
            {next ? (
              <Link
                href={`/ielts/learn/${next.skill}/${next.slug}`}
                className="group flex items-center justify-end gap-3 rounded-xl border border-border/60 bg-card p-4 text-right transition-colors hover:border-border"
              >
                <span className="min-w-0">
                  <span className="block text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    {t('ielts.learn.nav.next')}
                  </span>
                  <span className="block truncate text-sm font-medium text-foreground group-hover:text-primary">
                    {next.title}
                  </span>
                </span>
                <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden />
              </Link>
            ) : (
              <span aria-hidden />
            )}
          </nav>
        ) : null}

        {/* ── Footer CTAs ───────────────────────────────────────────── */}
        <div className="mt-8 flex flex-col gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5"
            render={<Link href="/ielts/learn" />}
          >
            <Library className="h-4 w-4" aria-hidden />
            {t('ielts.learn.footer.all_lessons')}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={cn('gap-1.5', accent.colour)}
            render={<Link href={practiceHref(skillKey)} />}
          >
            <Dumbbell className="h-4 w-4" aria-hidden />
            {t('ielts.learn.complete.practise_skill', { skill: trackLabel(skillKey) })}
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </article>
    </main>
  )
}
