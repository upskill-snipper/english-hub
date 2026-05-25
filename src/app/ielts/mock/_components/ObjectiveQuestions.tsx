'use client'

// ─── ObjectiveQuestions ─────────────────────────────────────────────────────
// Renders the answer controls for a list of auto-marked questions (MCQ /
// True-False-Not-Given / gap-fill) during the Listening and Reading stages of
// the mock. Presentational + controlled: the parent owns the AnswerMap and the
// numbering. Styling follows the standalone Reading page's question cards so the
// experience is consistent across the product.
// ────────────────────────────────────────────────────────────────────────────

import type { ObjectiveQuestion } from '@/lib/ielts/types'
import type { AnswerMap } from '../mock-types'
import { useMockT, type TFn } from '../use-mock-t'

const TFNG_OPTIONS: { value: 'true' | 'false' | 'not-given'; labelKey: string }[] = [
  { value: 'true', labelKey: 'ielts.mock.q.tfng.true' },
  { value: 'false', labelKey: 'ielts.mock.q.tfng.false' },
  { value: 'not-given', labelKey: 'ielts.mock.q.tfng.not_given' },
]

const QUESTION_TYPE_KEY: Record<ObjectiveQuestion['type'], string> = {
  mcq: 'ielts.mock.q.type.mcq',
  tfng: 'ielts.mock.q.type.tfng',
  gap: 'ielts.mock.q.type.gap',
}

export function ObjectiveQuestionList({
  questions,
  questionNumber,
  answers,
  onAnswer,
}: {
  questions: ObjectiveQuestion[]
  questionNumber: Record<string, number>
  answers: AnswerMap
  onAnswer: (id: string, value: string) => void
}) {
  const t = useMockT()
  return (
    <div className="space-y-4">
      {questions.map((q) => (
        <QuestionCard
          key={q.id}
          t={t}
          question={q}
          number={questionNumber[q.id]}
          value={answers[q.id]}
          onAnswer={(v) => onAnswer(q.id, v)}
        />
      ))}
    </div>
  )
}

function QuestionCard({
  t,
  question,
  number,
  value,
  onAnswer,
}: {
  t: TFn
  question: ObjectiveQuestion
  number: number
  value: string | undefined
  onAnswer: (value: string) => void
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-4 sm:p-5">
      <div className="mb-3 flex items-start gap-2">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold tabular-nums text-primary">
          {number}
        </span>
        <div className="min-w-0 flex-1">
          <p className="whitespace-pre-line text-sm font-medium leading-snug text-foreground">
            {question.prompt}
          </p>
          <span className="mt-1.5 inline-block text-[0.65rem] uppercase tracking-wide text-muted-foreground">
            {t(QUESTION_TYPE_KEY[question.type])}
          </span>
        </div>
      </div>

      {question.type === 'mcq' && (
        <div className="grid gap-2">
          {question.options.map((option, i) => {
            const selected = value === String(i)
            return (
              <button
                key={i}
                type="button"
                onClick={() => onAnswer(String(i))}
                aria-pressed={selected}
                className={`rounded-xl border p-3 text-left text-sm transition-all duration-200 ${
                  selected
                    ? 'border-primary/60 bg-primary/[0.06]'
                    : 'border-border/60 bg-card hover:border-primary/40 hover:bg-primary/[0.03]'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span
                    className={`flex size-6 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                      selected ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-foreground">{option}</span>
                </span>
              </button>
            )
          })}
        </div>
      )}

      {question.type === 'tfng' && (
        <div className="flex flex-wrap gap-2">
          {TFNG_OPTIONS.map((opt) => {
            const selected = value === opt.value
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onAnswer(opt.value)}
                aria-pressed={selected}
                className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                  selected
                    ? 'border-primary/60 bg-primary/[0.08] text-foreground'
                    : 'border-border/60 bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
                }`}
              >
                {t(opt.labelKey)}
              </button>
            )
          })}
        </div>
      )}

      {question.type === 'gap' && (
        <input
          type="text"
          value={value ?? ''}
          onChange={(e) => onAnswer(e.target.value)}
          placeholder={t('ielts.mock.q.gap_placeholder')}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          className="w-full rounded-lg border border-border/60 bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
        />
      )}
    </div>
  )
}
