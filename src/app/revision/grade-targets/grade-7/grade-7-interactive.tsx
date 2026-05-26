'use client'

import { useState } from 'react'
import {
  CheckCircle2,
  XCircle,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  MessageSquare,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const VOCABULARY_BANK = [
  {
    word: 'Juxtaposition',
    usage: 'The writer juxtaposes innocence and corruption to highlight the moral decay of...',
  },
  { word: 'Microcosm', usage: 'The setting functions as a microcosm of society, reflecting...' },
  {
    word: 'Subvert',
    usage: "The writer subverts the reader's expectations by presenting the character as...",
  },
  { word: 'Pervasive', usage: 'The pervasive sense of guilt throughout the text suggests...' },
  { word: 'Catalyse', usage: "This event catalyses the character's descent into tyranny, as..." },
  {
    word: 'Emblematic',
    usage: "The symbol is emblematic of the character's fractured conscience, representing...",
  },
  {
    word: 'Foreground',
    usage: 'The writer foregrounds the suffering of the marginalised to compel readers to...',
  },
  {
    word: 'Underpin',
    usage: 'Patriarchal values underpin the power dynamics in the text, as evidenced by...',
  },
  {
    word: 'Nuanced',
    usage: 'The poet offers a nuanced portrayal of love, acknowledging both its...',
  },
  {
    word: 'Precipitate',
    usage: 'The manipulation precipitates the central conflict, raising questions about...',
  },
]

export function Grade7VocabBank() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex size-9 items-center justify-center rounded-lg bg-amber-500/10">
          <MessageSquare className="size-4.5 text-clay-600" />
        </div>
        <h2 className="text-heading-md font-heading text-foreground">Vocabulary Bank</h2>
      </div>
      <p className="text-body-sm text-muted-foreground mb-5">
        These words and phrases will make your analysis sound more precise and academic. Click each
        word to see how to use it in a sentence.
      </p>

      <div className="grid gap-2 sm:grid-cols-2">
        {VOCABULARY_BANK.map((item, i) => (
          <button
            key={item.word}
            onClick={() => setExpanded(expanded === i ? null : i)}
            className={`text-left rounded-xl border p-4 transition-all duration-200 ${
              expanded === i
                ? 'border-amber-500/30 bg-amber-500/[0.04]'
                : 'border-border/40 bg-background/50 hover:border-border'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">{item.word}</span>
              {expanded === i ? (
                <ChevronUp className="size-3.5 text-muted-foreground" />
              ) : (
                <ChevronDown className="size-3.5 text-muted-foreground" />
              )}
            </div>
            {expanded === i && (
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed italic">
                &quot;{item.usage}&quot;
              </p>
            )}
          </button>
        ))}
      </div>
    </section>
  )
}

export function Grade7ComparisonExample({
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
        Both responses analyse the same moment from {exampleTitle} by {exampleAuthor}. Notice how
        the {higherLabel} version develops ideas further and explores complexity.
      </p>
      {contextNote && <p className="text-xs text-muted-foreground italic mb-4">{contextNote}</p>}

      <button
        onClick={() => setShow(!show)}
        className="flex items-center gap-2 text-sm font-medium text-primary mb-4 hover:underline"
      >
        {show ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
        {show ? 'Hide comparison' : 'Show comparison'}
      </button>

      {show && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-orange-500/20 bg-orange-500/[0.03] p-5">
            <Badge className="mb-3 bg-orange-500/20 text-clay-600 border-orange-500/30">
              {lowerLabel}
            </Badge>
            <p className="text-xs text-muted-foreground leading-relaxed italic">{lowerEssay}</p>
            <div className="mt-3 space-y-1.5">
              {[
                'Good technique identification',
                'Context is bolted on at the end, not integrated',
                'Analysis stays at surface level',
              ].map((reason) => (
                <p key={reason} className="text-[10px] text-clay-600 flex items-start gap-1.5">
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
                'Analysis goes beyond the surface - explores what the choice achieves structurally',
                'Context is woven into the argument, not tagged on',
                'Moves from individual moment to universal significance',
                'Vocabulary is precise and controlled',
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
