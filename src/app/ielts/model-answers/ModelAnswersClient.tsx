'use client'

// ─── IELTS Model Answers (gated, self-authored) ─────────────────────────────
// Shows band-targeted SAMPLE answers for Writing (Task 1 + 2) and Speaking
// (Parts 1/2/3). Each prompt has a "developing" (~6.5) and a "strong" (~8)
// sample with a plain-English "why this scores here" note. Content is original
// and any reference to marking criteria is paraphrased (see model-answers.ts).
//
// Gating mirrors the readiness/visa-finance pattern: the server page resolves
// hasIeltsAccess and passes it in. One sample item is free; the rest are blurred
// behind a CTA to /pricing#ielts for non-entitled users. Filter by skill.
// ────────────────────────────────────────────────────────────────────────────

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  ChevronDown,
  Lightbulb,
  Lock,
  Mic,
  PenLine,
  Sparkles,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { bandColour } from '@/lib/ielts/bands'
import {
  MODEL_ANSWERS,
  MODEL_ANSWER_SAMPLE_COUNT,
  type ModelAnswerItem,
  type ModelAnswerSample,
} from '@/lib/ielts/model-answers'

type SkillFilter = 'all' | 'writing' | 'speaking'

export function ModelAnswersClient({ hasAccess }: { hasAccess: boolean }) {
  const [filter, setFilter] = useState<SkillFilter>('all')

  const items = useMemo(
    () => (filter === 'all' ? MODEL_ANSWERS : MODEL_ANSWERS.filter((m) => m.skill === filter)),
    [filter],
  )

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 pb-16 sm:px-6 lg:px-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 text-muted-foreground"
          render={<Link href="/ielts" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to IELTS
        </Button>
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-sky-500/[0.05] p-6 sm:p-8">
        <Badge variant="secondary" className="mb-3">
          <BookOpenCheck className="mr-1 size-3" />
          Model answers
        </Badge>
        <h1 className="text-display-sm font-heading text-foreground sm:text-display">
          IELTS model answers, graded band by band
        </h1>
        <p className="mt-3 max-w-2xl text-body-md text-muted-foreground">
          {MODEL_ANSWER_SAMPLE_COUNT} self-authored sample answers for Writing and Speaking, each
          written to a target band — a developing answer (around 6.5) and a strong answer (around 8)
          for the same question — with a plain-English note on exactly what moves the answer up the
          scale.
        </p>
        <p className="mt-3 inline-flex items-start gap-2 rounded-lg border border-border/60 bg-background/50 p-3 text-xs text-muted-foreground">
          <Sparkles className="mt-0.5 size-3.5 shrink-0 text-sky-500" />
          <span>
            These are original examples written by The English Hub. They are not taken from any real
            exam paper, and our scoring notes describe the marking criteria in our own words. Bands
            are illustrative, not a guarantee of a result.
          </span>
        </p>
      </section>

      {/* ── Skill filter ─────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Show
        </span>
        <FilterChip label="All" active={filter === 'all'} onClick={() => setFilter('all')} />
        <FilterChip
          label="Writing"
          active={filter === 'writing'}
          onClick={() => setFilter('writing')}
        />
        <FilterChip
          label="Speaking"
          active={filter === 'speaking'}
          onClick={() => setFilter('speaking')}
        />
      </div>

      {/* ── Items ────────────────────────────────────────────────────── */}
      <div className="space-y-6">
        {items.map((item) => (
          <ModelAnswerCard key={item.id} item={item} hasAccess={hasAccess} />
        ))}
      </div>

      {/* ── Upsell footer for locked users ───────────────────────────── */}
      {!hasAccess && (
        <section className="rounded-2xl border border-sky-500/30 bg-sky-500/[0.06] p-6 text-center sm:p-8">
          <Lock className="mx-auto size-6 text-sky-500" />
          <h2 className="mt-3 font-heading text-xl font-semibold text-foreground">
            Unlock every model answer
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            The full library — and unlimited AI band feedback on your own Writing and Speaking — is
            part of the IELTS plan.
          </p>
          <Button
            size="lg"
            className="mt-5 gap-2 bg-sky-600 text-white hover:bg-sky-700"
            render={<Link href="/pricing#ielts" />}
          >
            See IELTS plans
            <ArrowRight className="size-4" />
          </Button>
        </section>
      )}
    </div>
  )
}

// ─── One prompt with its two band samples ───────────────────────────────────

function ModelAnswerCard({ item, hasAccess }: { item: ModelAnswerItem; hasAccess: boolean }) {
  const unlocked = hasAccess || Boolean(item.free)
  const Icon = item.skill === 'writing' ? PenLine : Mic

  return (
    <article className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-soft">
      {/* Header */}
      <div className="border-b border-border/60 bg-muted/30 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="text-[0.65rem] uppercase">
            <Icon className="mr-1 size-3" />
            {item.section}
          </Badge>
          {item.free && !hasAccess && (
            <Badge variant="outline" className="text-[0.65rem] uppercase text-emerald-500">
              Free sample
            </Badge>
          )}
        </div>
        <p className="mt-3 whitespace-pre-line text-sm font-medium leading-relaxed text-foreground">
          {item.prompt}
        </p>
        {item.promptNote && (
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.promptNote}</p>
        )}
      </div>

      {/* Body */}
      {unlocked ? (
        <div className="space-y-5 p-5 sm:p-6">
          {item.samples.map((sample, i) => (
            <SampleBlock key={i} sample={sample} defaultOpen={i === 0} />
          ))}
          <div className="flex justify-end pt-1">
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5"
              render={<Link href={item.practiceHref} />}
            >
              Practise this with AI feedback
              <ArrowRight className="size-3.5" />
            </Button>
          </div>
        </div>
      ) : (
        <LockedBody />
      )}
    </article>
  )
}

// ─── A single band-targeted sample (collapsible) ────────────────────────────

function SampleBlock({ sample, defaultOpen }: { sample: ModelAnswerSample; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="rounded-xl border border-border/60 bg-background/40">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 p-4 text-left"
      >
        <span className="flex items-center gap-2">
          <span
            className={cn('font-heading text-xl font-bold tabular-nums', bandColour(sample.band))}
          >
            {sample.band.toFixed(1)}
          </span>
          <span className="text-sm font-semibold text-foreground">{sample.label}</span>
        </span>
        <ChevronDown
          className={cn(
            'size-4 shrink-0 text-muted-foreground transition-transform',
            open && 'rotate-180',
          )}
          aria-hidden
        />
      </button>

      {open && (
        <div className="space-y-4 px-4 pb-4">
          <div className="whitespace-pre-line rounded-lg border border-border/60 bg-card p-4 text-sm leading-relaxed text-foreground">
            {sample.text}
          </div>
          <div className="rounded-lg border border-violet-500/20 bg-violet-500/[0.04] p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-violet-500">
              <Lightbulb className="size-4" />
              Why this sits at this band
            </p>
            <ul className="mt-2 space-y-1.5">
              {sample.why.map((line, i) => (
                <li key={i} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-violet-400/70" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Locked teaser body ─────────────────────────────────────────────────────

function LockedBody() {
  return (
    <div className="relative p-5 sm:p-6">
      <div aria-hidden className="space-y-2 blur-sm select-none">
        <div className="h-4 w-3/4 rounded bg-muted" />
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-5/6 rounded bg-muted" />
        <div className="h-4 w-2/3 rounded bg-muted" />
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Lock className="size-4 text-sky-500" />
        <span>
          The full sample answers and scoring notes are part of the IELTS plan.{' '}
          <Link
            href="/pricing#ielts"
            className="font-semibold text-sky-600 underline underline-offset-2"
          >
            Unlock
          </Link>
        </span>
      </div>
    </div>
  )
}

// ─── Filter chip ────────────────────────────────────────────────────────────

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1.5 text-sm transition-colors',
        active
          ? 'border-primary/40 bg-primary/10 font-medium text-foreground'
          : 'border-border/60 bg-card text-muted-foreground hover:border-border hover:text-foreground',
      )}
    >
      {label}
    </button>
  )
}
