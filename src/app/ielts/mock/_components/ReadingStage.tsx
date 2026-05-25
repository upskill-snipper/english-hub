'use client'

// ─── ReadingStage ───────────────────────────────────────────────────────────
// The Reading section of the mock (60 min). Each passage is shown beside its
// questions (passage sticky on large screens, exactly like the standalone
// Reading page). On submit or timer expiry every answer is auto-marked and the
// raw score is converted with objectiveToBand('reading', correct, total, track)
// — the track matters because Academic and General Training use different band
// boundaries. The result is handed up; the runner then advances to Writing.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useMemo, useRef, useState } from 'react'
import { BookOpen, Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { IeltsTrack, ObjectiveQuestion, ReadingTest } from '@/lib/ielts/types'
import { objectiveToBand } from '@/lib/ielts/bands'

import type { ObjectiveResult, AnswerMap } from '../mock-types'
import { countCorrect, countAnswered, totalMarks, questionStartNumbers } from '../marking'
import { SECTION_SECONDS } from '../mock-types'
import { useMockT } from '../use-mock-t'
import StageHeader from './StageHeader'
import { ObjectiveQuestionList } from './ObjectiveQuestions'

export default function ReadingStage({
  test,
  track,
  stepLabel,
  onComplete,
}: {
  test: ReadingTest
  track: IeltsTrack
  stepLabel: string
  onComplete: (result: ObjectiveResult) => void
}) {
  const t = useMockT()
  const [answers, setAnswers] = useState<AnswerMap>({})
  const finishedRef = useRef(false)

  const allQuestions = useMemo<ObjectiveQuestion[]>(
    () => test.passages.flatMap((p) => p.questions),
    [test],
  )
  const total = totalMarks(allQuestions)

  const questionNumber = useMemo(() => questionStartNumbers(allQuestions), [allQuestions])

  const setAnswer = useCallback(
    (id: string, value: string) => setAnswers((prev) => ({ ...prev, [id]: value })),
    [],
  )

  const finish = useCallback(() => {
    if (finishedRef.current) return
    finishedRef.current = true
    const correct = countCorrect(allQuestions, answers)
    onComplete({
      skill: 'reading',
      correct,
      total,
      band: objectiveToBand('reading', correct, total, track),
    })
  }, [allQuestions, answers, total, track, onComplete])

  const answered = countAnswered(allQuestions, answers)

  return (
    <div className="min-h-screen bg-background">
      <StageHeader
        title={t('ielts.mock.stage.title', { n: 2, skill: 'Reading' })}
        stepLabel={t('ielts.mock.stage.step_answered', { skill: stepLabel, answered, total })}
        seconds={SECTION_SECONDS.reading}
        onExpire={finish}
        action={
          <Button size="sm" onClick={finish}>
            <Check className="size-4" />
            {t('ielts.mock.reading.submit')}
          </Button>
        }
      />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.04] p-4">
          <BookOpen className="mt-0.5 size-5 shrink-0 text-emerald-500" aria-hidden="true" />
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">{test.title}</p>
            <p className="mt-1">{t('ielts.mock.reading.intro', { total })}</p>
          </div>
        </div>

        <div className="space-y-10">
          {test.passages.map((passage, pIndex) => (
            <div key={passage.id} className="grid gap-6 lg:grid-cols-2">
              <div className="lg:sticky lg:top-20 lg:self-start">
                <div className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
                  <span className="mb-3 inline-block rounded-full border border-border/60 px-2.5 py-0.5 text-[0.7rem] font-medium text-muted-foreground">
                    {t('ielts.mock.reading.passage', { n: pIndex + 1 })}
                  </span>
                  <h2 className="font-serif text-xl font-medium tracking-tight">{passage.title}</h2>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/90">
                    {passage.body.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>

              <ObjectiveQuestionList
                questions={passage.questions}
                questionNumber={questionNumber}
                answers={answers}
                onAnswer={setAnswer}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border/60 bg-card p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              {t('ielts.mock.reading.footer_lead')}{' '}
              <span className="font-semibold tabular-nums text-foreground">{answered}</span>{' '}
              {t('ielts.mock.reading.footer_tail', { total })}
            </p>
            <Button size="lg" onClick={finish}>
              <Check className="size-4" />
              {t('ielts.mock.reading.finish')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
