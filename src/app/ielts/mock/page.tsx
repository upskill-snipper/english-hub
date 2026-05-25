'use client'

// ─── IELTS Mock Test - runner (orchestrator) ────────────────────────────────
// The headline "timed, accurate mock tests" feature. This client page assembles
// ONE complete mock for the chosen track and sequences the candidate through the
// four sections in the real exam order under realistic per-section countdowns,
// with auto-submit at zero and no return to a finished section:
//
//   intro → Listening (≈30m) → Reading (60m) → Writing (60m) → Speaking (≈14m)
//         → band report
//
// • Listening / Reading are auto-marked (objectiveToBand) and the page persists
//   each as an ObjectiveAttempt via saveAttempt → progress + dashboard update.
// • Writing / Speaking POST to their feedback APIs for an AI band; those stages
//   persist their own TaskAttempts (scored, or "submitted" when AI is
//   unavailable / over-limit), so this page only stores their summarised result
//   for the report and does not double-persist.
// • The final report shows per-section bands + an overall band (overallBand of
//   the four), clearly labelled as a practice prediction.
//
// Exactly one <h1> exists on the route, and it lives in whichever phase view is
// mounted (intro / report own one each; only one is ever mounted at a time, and
// the running stages have none). Timers live inside CountdownTimer / the stages
// and are cleaned up on unmount.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useMemo, useState } from 'react'

import { useIeltsTrack } from '@/app/ielts/_components/TrackToggle'
import { saveAttempt, genId } from '@/lib/ielts/store'

import { assembleMock } from './assemble'
import {
  EMPTY_RESULTS,
  type MockPhase,
  type MockResults,
  type ObjectiveResult,
  type TaskResult,
} from './mock-types'
import MockIntro from './_components/MockIntro'
import MockReport from './_components/MockReport'
import ListeningStage from './_components/ListeningStage'
import ReadingStage from './_components/ReadingStage'
import WritingStage from './_components/WritingStage'
import SpeakingStage from './_components/SpeakingStage'

export default function IeltsMockPage() {
  const [track, setTrack] = useIeltsTrack()
  const [phase, setPhase] = useState<MockPhase>('intro')
  const [results, setResults] = useState<MockResults>(EMPTY_RESULTS)

  // Deterministically assemble the mock for the chosen track. Memoised on track
  // so switching tracks on the intro screen swaps the whole paper.
  const mock = useMemo(() => assembleMock(track), [track])

  // If the candidate switches track, only allow it before the mock starts; reset
  // any partial results so a half-finished paper can't bleed across tracks.
  useEffect(() => {
    if (phase === 'intro') setResults(EMPTY_RESULTS)
  }, [track, phase])

  // Warn before an accidental tab close / reload mid-mock (work would be lost
  // for unfinished sections). Only armed while a timed section is running.
  useEffect(() => {
    const running = phase !== 'intro' && phase !== 'report'
    if (!running) return
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = ''
    }
    window.addEventListener('beforeunload', handler)
    return () => window.removeEventListener('beforeunload', handler)
  }, [phase])

  // ── Stage completion handlers ─────────────────────────────────────────────

  const handleListeningDone = useCallback((result: ObjectiveResult) => {
    // Persist the Listening attempt so progress + the dashboard reflect the mock.
    try {
      saveAttempt({
        id: genId('ls'),
        skill: 'listening',
        testId: 'mock',
        rawScore: result.correct,
        total: result.total,
        band: result.band,
        date: new Date().toISOString(),
      })
    } catch {
      /* non-fatal - the report still shows the band */
    }
    setResults((prev) => ({ ...prev, listening: result }))
    setPhase('reading')
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  const handleReadingDone = useCallback((result: ObjectiveResult) => {
    try {
      saveAttempt({
        id: genId('rd'),
        skill: 'reading',
        testId: 'mock',
        rawScore: result.correct,
        total: result.total,
        band: result.band,
        date: new Date().toISOString(),
      })
    } catch {
      /* non-fatal */
    }
    setResults((prev) => ({ ...prev, reading: result }))
    setPhase('writing')
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  // Writing / Speaking stages persist their own TaskAttempts (scored or
  // submitted); here we only record the summarised result for the report.
  const handleWritingDone = useCallback((result: TaskResult) => {
    setResults((prev) => ({ ...prev, writing: result }))
    setPhase('speaking')
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  const handleSpeakingDone = useCallback((result: TaskResult) => {
    setResults((prev) => ({ ...prev, speaking: result }))
    setPhase('report')
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  const handleStart = useCallback(() => {
    if (!mock) return
    setResults(EMPTY_RESULTS)
    setPhase('listening')
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [mock])

  const handleRestart = useCallback(() => {
    setResults(EMPTY_RESULTS)
    setPhase('intro')
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  // ── Phase router ──────────────────────────────────────────────────────────

  if (phase === 'intro' || !mock) {
    return <MockIntro track={track} setTrack={setTrack} mock={mock} onStart={handleStart} />
  }

  if (phase === 'report') {
    return <MockReport results={results} track={track} onRestart={handleRestart} />
  }

  if (phase === 'listening') {
    return (
      <ListeningStage
        test={mock.listening}
        stepLabel="Listening"
        onComplete={handleListeningDone}
      />
    )
  }

  if (phase === 'reading') {
    return (
      <ReadingStage
        test={mock.reading}
        track={track}
        stepLabel="Reading"
        onComplete={handleReadingDone}
      />
    )
  }

  if (phase === 'writing') {
    return (
      <WritingStage
        task1={mock.writingTask1}
        task2={mock.writingTask2}
        track={track}
        stepLabel="Writing"
        onComplete={handleWritingDone}
      />
    )
  }

  // phase === 'speaking'
  return (
    <SpeakingStage
      part1={mock.speakingPart1}
      part2={mock.speakingPart2}
      part3={mock.speakingPart3}
      stepLabel="Speaking"
      onComplete={handleSpeakingDone}
    />
  )
}
