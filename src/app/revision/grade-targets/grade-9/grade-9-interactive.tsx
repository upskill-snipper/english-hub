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

export function Grade9ComparisonExample({
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
        Both responses analyse the same moment from {exampleTitle} by {exampleAuthor}. The {higherLabel} response does not just analyse more — it thinks differently.
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
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] p-5">
            <Badge className="mb-3 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">{lowerLabel}</Badge>
            <p className="text-xs text-muted-foreground leading-relaxed italic">{lowerEssay}</p>
            <div className="mt-3 space-y-1.5">
              {[
                'Strong analysis with good technique identification',
                'Context is relevant and connected',
                'Argument is solid but predictable — follows a standard reading',
                "Treats the text's meaning as settled rather than open to debate",
              ].map((reason, idx) => (
                <p
                  key={reason}
                  className={`text-[10px] flex items-start gap-1.5 ${idx < 2 ? 'text-emerald-400' : 'text-clay-600'}`}
                >
                  {idx < 2 ? (
                    <CheckCircle2 className="size-3 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="size-3 shrink-0 mt-0.5" />
                  )}
                  {reason}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.03] p-5">
            <Badge className="mb-3 bg-amber-500/20 text-clay-600 border-amber-500/30">{higherLabel}</Badge>
            <p className="text-xs text-muted-foreground leading-relaxed italic">{higherEssay}</p>
            <div className="mt-3 space-y-1.5">
              {[
                'Goes beyond the obvious to find paradox or complexity in the text',
                'Considers the role of the writer and the reader — meta-awareness',
                'Ends with a genuinely original insight rather than a closed conclusion',
                'Vocabulary is precise and controlled',
              ].map((reason) => (
                <p key={reason} className="text-[10px] text-clay-600 flex items-start gap-1.5">
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
