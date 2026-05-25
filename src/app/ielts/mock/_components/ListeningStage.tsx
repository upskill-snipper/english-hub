'use client'

// ─── ListeningStage ─────────────────────────────────────────────────────────
// The Listening section of the mock (~30 min). All of the test's sections are
// shown on one scrolling page (the candidate plays each section's audio via the
// shared AudioPlayer TTS stand-in, then answers its questions). When the clock
// expires OR the candidate submits, every answer is auto-marked and the raw
// score is converted to a band with objectiveToBand('listening', …). The result
// is handed up to the runner, which advances to Reading — there is no return.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useMemo, useRef, useState } from 'react'
import { Headphones, Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import AudioPlayer from '@/app/ielts/listening/_components/AudioPlayer'
import type { ListeningTest, ObjectiveQuestion } from '@/lib/ielts/types'
import { objectiveToBand } from '@/lib/ielts/bands'

import type { ObjectiveResult, AnswerMap } from '../mock-types'
import { countCorrect, countAnswered } from '../marking'
import { SECTION_SECONDS } from '../mock-types'
import StageHeader from './StageHeader'
import { ObjectiveQuestionList } from './ObjectiveQuestions'

export default function ListeningStage({
  test,
  stepLabel,
  onComplete,
}: {
  test: ListeningTest
  stepLabel: string
  onComplete: (result: ObjectiveResult) => void
}) {
  const [answers, setAnswers] = useState<AnswerMap>({})
  // Guard so auto-submit (timer) and manual submit can never double-fire.
  const finishedRef = useRef(false)

  const allQuestions = useMemo<ObjectiveQuestion[]>(
    () => test.sections.flatMap((s) => s.questions),
    [test],
  )
  const total = allQuestions.length

  const questionNumber = useMemo(() => {
    const map: Record<string, number> = {}
    allQuestions.forEach((q, i) => {
      map[q.id] = i + 1
    })
    return map
  }, [allQuestions])

  const setAnswer = useCallback(
    (id: string, value: string) => setAnswers((prev) => ({ ...prev, [id]: value })),
    [],
  )

  const finish = useCallback(() => {
    if (finishedRef.current) return
    finishedRef.current = true
    const correct = countCorrect(allQuestions, answers)
    onComplete({
      skill: 'listening',
      correct,
      total,
      band: objectiveToBand('listening', correct, total),
    })
  }, [allQuestions, answers, total, onComplete])

  const answered = countAnswered(allQuestions, answers)

  return (
    <div className="min-h-screen bg-background">
      <StageHeader
        title="Section 1 of 4 · Listening"
        stepLabel={`${stepLabel} · ${answered}/${total} answered`}
        seconds={SECTION_SECONDS.listening}
        onExpire={finish}
        action={
          <Button size="sm" onClick={finish}>
            <Check className="size-4" />
            Submit Listening
          </Button>
        }
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-sky-500/25 bg-sky-500/[0.04] p-4">
          <Headphones className="mt-0.5 size-5 shrink-0 text-sky-500" aria-hidden="true" />
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">{test.title}</p>
            <p className="mt-1">
              Play each section&apos;s audio, then answer its questions. In the real exam the
              recording plays once — here you may replay to practise. Your answers are marked
              automatically when you submit or when the timer reaches zero.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          {test.sections.map((section, sIndex) => {
            const startNumber = questionNumber[section.questions[0]?.id] ?? 1
            const endNumber = startNumber + section.questions.length - 1
            return (
              <section key={section.id} className="space-y-4">
                <div>
                  <span className="inline-block rounded-full border border-border/60 px-2.5 py-0.5 text-[0.7rem] font-medium text-muted-foreground">
                    Part {sIndex + 1}
                  </span>
                  <h2 className="mt-2 font-serif text-xl font-medium tracking-tight text-foreground">
                    {section.title}
                  </h2>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Questions {startNumber}–{endNumber}
                  </p>
                </div>

                <AudioPlayer
                  transcript={section.transcript}
                  sectionTitle={section.title}
                  resetKey={section.id}
                />

                <ObjectiveQuestionList
                  questions={section.questions}
                  questionNumber={questionNumber}
                  answers={answers}
                  onAnswer={setAnswer}
                />
              </section>
            )
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-border/60 bg-card p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              You have answered{' '}
              <span className="font-semibold tabular-nums text-foreground">{answered}</span> of{' '}
              {total}. Submitting moves you on to Reading and you cannot return.
            </p>
            <Button size="lg" onClick={finish}>
              <Check className="size-4" />
              Finish Listening &amp; start Reading
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
