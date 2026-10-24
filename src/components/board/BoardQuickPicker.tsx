'use client'

import * as React from 'react'
import { Check, Loader2 } from 'lucide-react'

import { events } from '@/lib/gtag'
import { useBoard, type ExamBoard } from '@/lib/board/board-store'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'

/**
 * Every exam board on one screen, chosen with one tap (24 October 2026).
 *
 * WHAT IT REPLACED. The "Which exam board do you study?" pop-up asked in up
 * to three steps: the level, then the awarding body, then, for International
 * GCSE, the paper. Each step was a column of tall pastel cards, so on a phone
 * the pop-up was 1,738 pixels tall on an 812-pixel screen. It was centred, so
 * its top, with the question and the close button, sat above the screen where
 * nothing could scroll to it, while the page behind was locked. The founder
 * reported pages that would not scroll, and having to "select twice with a
 * pop up page too". This lists the same boards the steps led to, grouped, and
 * a tap chooses.
 *
 * Board names are proper nouns and stay in English in every language, as on
 * /board-select, and are kept short so two fit side by side on a 320-pixel
 * phone. The ids are the store's (src/lib/board/board-config.ts).
 */

type Group = { headingKey: string; boards: { id: ExamBoard; label: string; labelKey?: string }[] }

export const QUICK_PICK_GROUPS: readonly Group[] = [
  {
    headingKey: 'board.gate.group.gcse',
    boards: [
      { id: 'aqa', label: 'AQA' },
      { id: 'edexcel', label: 'Pearson Edexcel' },
      { id: 'ocr', label: 'OCR' },
      { id: 'eduqas', label: 'WJEC Eduqas' },
    ],
  },
  {
    headingKey: 'board.gate.group.igcse',
    boards: [
      { id: 'cambridge-0500', label: 'Cambridge 0500' },
      { id: 'cambridge-0990', label: 'Cambridge 0990 (9-1)' },
      { id: 'cambridge-0475', label: 'Cambridge Literature 0475' },
      { id: 'edexcel-igcse', label: 'Edexcel English Literature' },
      { id: 'edexcel-igcse-lang', label: 'Edexcel English Language A' },
    ],
  },
  {
    headingKey: 'board.gate.group.ks3',
    boards: [{ id: 'ks3', label: 'KS3 English', labelKey: 'board.gate.ks3_label' }],
  },
  {
    headingKey: 'board.gate.group.a_level',
    boards: [
      // Named in full so no two buttons share a name: a screen reader reads
      // the button, not the heading above it.
      { id: 'aqa-a-level', label: 'AQA A level' },
      { id: 'edexcel-a-level', label: 'Edexcel A level' },
      { id: 'ocr-a-level', label: 'OCR A level' },
      { id: 'eduqas-a-level', label: 'Eduqas A level' },
      { id: 'ial-edexcel', label: 'Edexcel International A level' },
    ],
  },
] as const

export function BoardQuickPicker({ onChosen }: { onChosen: (board: ExamBoard) => void }) {
  const t = useT()
  const { board: current, setBoard } = useBoard()
  const [saving, setSaving] = React.useState<ExamBoard | null>(null)

  const choose = (id: ExamBoard) => {
    if (saving) return
    setSaving(id)
    // The store writes the cookie as well, so the server sees the choice on
    // the next request; the caller refreshes the page for it.
    setBoard(id)
    try {
      events.boardSelected(id)
    } catch {
      /* analytics never blocks a choice */
    }
    onChosen(id)
  }

  return (
    <div className="flex flex-col gap-5">
      {QUICK_PICK_GROUPS.map((group) => (
        <section key={group.headingKey} aria-labelledby={`gate-${group.headingKey}`}>
          <h3
            id={`gate-${group.headingKey}`}
            className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
          >
            {t(group.headingKey)}
          </h3>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {group.boards.map((b) => {
              const isCurrent = current === b.id
              const isSaving = saving === b.id
              return (
                <li key={b.id}>
                  <button
                    type="button"
                    onClick={() => choose(b.id)}
                    disabled={saving !== null}
                    aria-pressed={isCurrent}
                    className={cn(
                      'flex h-full min-h-11 w-full items-center justify-between gap-1.5 rounded-xl border px-3 py-2 text-start text-sm font-medium leading-snug transition-colors',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      isCurrent
                        ? 'border-primary bg-primary/10 text-foreground'
                        : 'border-border bg-background text-foreground hover:border-primary/50 hover:bg-primary/5',
                      saving !== null && !isSaving && 'opacity-60',
                    )}
                  >
                    <span>{b.labelKey ? t(b.labelKey) : b.label}</span>
                    {isSaving ? (
                      <Loader2
                        className="size-4 shrink-0 animate-spin text-primary"
                        aria-hidden="true"
                      />
                    ) : isCurrent ? (
                      <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    ) : null}
                  </button>
                </li>
              )
            })}
          </ul>
        </section>
      ))}
    </div>
  )
}
