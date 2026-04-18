'use client'

import { useState } from 'react'
import {
  CheckCircle2,
  XCircle,
  Lightbulb,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const CHECKLIST_ITEMS = [
  'I can identify and name language techniques (metaphor, simile, alliteration, etc.)',
  'I use short, embedded quotes in my paragraphs rather than long block quotes',
  'I explain the effect of language on the reader, not just what it means',
  'I use subject terminology correctly (e.g. "the noun/verb/adjective suggests...")',
  'I write in clear PEE/PEEL paragraphs with a topic sentence',
  "I can comment on a writer's purpose — why they made that choice",
  'I can identify basic structural features (opening, shift in focus, ending)',
  'My creative writing uses a range of sentence types for effect',
  'I plan before I write, even if it is a short plan',
  'I leave time to check my SPaG (spelling, punctuation, and grammar)',
]

export function Grade5Checklist() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    setCheckedItems((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  const progress = Math.round((checkedItems.size / CHECKLIST_ITEMS.length) * 100)

  return (
    <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex size-9 items-center justify-center rounded-lg bg-amber-500/10">
          <CheckCircle2 className="size-4.5 text-clay-600" />
        </div>
        <h2 className="text-heading-md font-heading text-foreground">Mastery Checklist</h2>
      </div>
      <p className="text-body-sm text-muted-foreground mb-5">
        Tick off each skill as you feel confident with it. Aim to have all of these ticked before your exam.
      </p>

      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-2 rounded-full bg-muted/60">
          <div
            className="h-full rounded-full bg-amber-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-xs font-medium text-muted-foreground">
          {checkedItems.size}/{CHECKLIST_ITEMS.length}
        </span>
      </div>

      <div className="space-y-2">
        {CHECKLIST_ITEMS.map((item, i) => (
          <button
            key={i}
            onClick={() => toggleItem(i)}
            className={`w-full text-left flex items-start gap-3 rounded-lg border p-3.5 text-xs transition-all duration-200 ${
              checkedItems.has(i)
                ? 'border-amber-500/30 bg-amber-500/[0.04] text-foreground'
                : 'border-border/40 bg-background/50 text-muted-foreground hover:border-border'
            }`}
          >
            <div
              className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded border transition-colors ${
                checkedItems.has(i)
                  ? 'border-amber-400 bg-amber-400 text-background'
                  : 'border-muted-foreground/30'
              }`}
            >
              {checkedItems.has(i) && <CheckCircle2 className="size-3" />}
            </div>
            <span className={checkedItems.has(i) ? 'line-through opacity-70' : ''}>{item}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export function Grade5ComparisonExample({
  exampleTitle,
  exampleAuthor,
  lowerLabel,
  higherLabel,
  lowerEssay,
  higherEssay,
  contextNote,
}: {
  exampleTitle: string
  exampleAuthor: string
  lowerLabel: string
  higherLabel: string
  lowerEssay: string
  higherEssay: string
  contextNote?: string
}) {
  const [show, setShow] = useState(false)

  return (
    <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
          <Lightbulb className="size-4.5 text-primary" />
        </div>
        <h2 className="text-heading-md font-heading text-foreground">
          {lowerLabel} vs {higherLabel}: See the Difference
        </h2>
      </div>
      <p className="text-body-sm text-muted-foreground mb-5">
        Same question, same text ({exampleTitle} by {exampleAuthor}), same quote — but the {higherLabel} response does more with it. Study the difference carefully.
      </p>
      {contextNote && (
        <p className="text-xs text-muted-foreground italic mb-4">{contextNote}</p>
      )}

      <button
        onClick={() => setShow(!show)}
        className="flex items-center gap-2 text-sm font-medium text-primary mb-4 hover:underline"
      >
        {show ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
        {show ? 'Hide comparison' : 'Show comparison'}
      </button>

      {show && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-red-500/20 bg-red-500/[0.03] p-5">
            <Badge variant="destructive" className="mb-3">{lowerLabel}</Badge>
            <p className="text-xs text-muted-foreground leading-relaxed italic">{lowerEssay}</p>
            <div className="mt-3 space-y-1.5">
              {[
                'Long, unselected quote — too much copied text',
                'Vague analysis — no engagement with language',
                'No subject terminology or technique identification',
                'Undeveloped comment on the writer\'s purpose',
              ].map((reason) => (
                <p key={reason} className="text-[10px] text-red-400 flex items-start gap-1.5">
                  <XCircle className="size-3 shrink-0 mt-0.5" />
                  {reason}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-5">
            <Badge className="mb-3 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              {higherLabel}
            </Badge>
            <p className="text-xs text-muted-foreground leading-relaxed italic">{higherEssay}</p>
            <div className="mt-3 space-y-1.5">
              {[
                'Short, embedded quotes woven into analysis',
                'Subject terminology used precisely',
                'Explains the effect on the reader',
                'Links the detail to context or wider purpose',
              ].map((reason) => (
                <p key={reason} className="text-[10px] text-emerald-400 flex items-start gap-1.5">
                  <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  {reason}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
