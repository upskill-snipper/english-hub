import Link from 'next/link'
import {
  Headphones,
  BookOpen,
  PenLine,
  Mic,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import type { IeltsSkill, SKILL_META } from '@/lib/ielts/types'

// ─── SkillCard ─────────────────────────────────────────────────────────────
// One of the four IELTS skills on the hub landing page. Driven entirely by a
// SKILL_META entry: links to the skill's own route, uses its accent colour,
// and shows whether responses are auto-marked (Listening/Reading) or given an
// AI band (Writing/Speaking). Presentational — used by the server hub page.
// ────────────────────────────────────────────────────────────────────────────

type SkillMetaEntry = (typeof SKILL_META)[IeltsSkill]

const SKILL_ICON: Record<IeltsSkill, typeof Headphones> = {
  listening: Headphones,
  reading: BookOpen,
  writing: PenLine,
  speaking: Mic,
}

export interface SkillCardProps {
  skill: IeltsSkill
  meta: SkillMetaEntry
  /** Localised skill name (from the ielts.skill.* dictionary keys). */
  label: string
  /** Short, original blurb describing what the learner does in this skill. */
  blurb: string
  /** Localised label for the marking badge ("Auto-marked" / "AI band score"). */
  markingLabel: string
  /** Localised CTA, e.g. "Practise now". */
  ctaLabel: string
}

export function SkillCard({ skill, meta, label, blurb, markingLabel, ctaLabel }: SkillCardProps) {
  const Icon = SKILL_ICON[skill]
  const MarkingIcon = meta.marking === 'ai' ? Sparkles : CheckCircle2

  return (
    <Card className="group/skill relative flex flex-col gap-4 p-6 transition-colors hover:border-border">
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-xl',
            meta.bgColour,
          )}
        >
          <Icon className={cn('h-5 w-5', meta.colour)} aria-hidden />
        </span>
        <Badge variant="outline" className="gap-1 font-mono text-[10px] uppercase tracking-wide">
          <MarkingIcon className="h-3 w-3" aria-hidden />
          {markingLabel}
        </Badge>
      </div>

      <div>
        <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">{label}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{blurb}</p>
      </div>

      <Link
        href={meta.href}
        className={cn(
          'mt-auto inline-flex items-center gap-1.5 text-sm font-semibold transition-colors',
          meta.colour,
        )}
      >
        {ctaLabel}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/skill:translate-x-0.5" />
      </Link>
    </Card>
  )
}
