// ─── IELTS Mock Test — assembly ────────────────────────────────────────────
// Builds ONE complete, sittable mock for a given track by SELECTING from the
// existing item banks (it never edits them):
//   • Listening — one full ListeningTest (Listening is identical across tracks,
//     so the bank carries no `track`; any test is valid for either track).
//   • Reading   — one ReadingTest whose `track` matches the chosen track.
//   • Writing   — one Task 1 + one Task 2 WritingPrompt for the chosen track
//     (Academic Task 1 = data report; General Training Task 1 = a letter).
//   • Speaking  — a Part 1 + Part 2 + Part 3 SpeakingCue (Speaking is identical
//     across tracks, so cues carry no `track`).
//
// A real candidate sits ONE fixed paper, so we pick deterministically (the first
// matching item of each kind) rather than shuffling — this also makes the mock
// reproducible for a given bank. Returns null only if the bank cannot satisfy a
// required slot for the track, which the page renders as a graceful empty state.
// ────────────────────────────────────────────────────────────────────────────

import type { IeltsTrack } from '@/lib/ielts/types'
import { READING_TESTS } from '@/app/ielts/reading/reading-tests'
import { LISTENING_TESTS } from '@/app/ielts/listening/listening-tests'
import { WRITING_PROMPTS } from '@/app/ielts/writing/writing-prompts'
import { SPEAKING_CUES } from '@/app/ielts/speaking/speaking-cues'

import type { AssembledMock } from './mock-types'

/**
 * Assemble a single mock for `track`, or null if the banks lack a required
 * piece for that track. Pure + deterministic (no shuffling), so it is safe to
 * memoise on `track` in the page.
 */
export function assembleMock(track: IeltsTrack): AssembledMock | null {
  // Listening: track-agnostic — take the first complete test in the bank.
  const listening = LISTENING_TESTS[0]

  // Reading: must match the selected track.
  const reading = READING_TESTS.find((rt) => rt.track === track)

  // Writing: first Task 1 and first Task 2 prompt for the selected track.
  const writingTask1 = WRITING_PROMPTS.find((p) => p.task === 'writing-task-1' && p.track === track)
  const writingTask2 = WRITING_PROMPTS.find((p) => p.task === 'writing-task-2' && p.track === track)

  // Speaking: track-agnostic — first cue of each part.
  const speakingPart1 = SPEAKING_CUES.find((c) => c.part === 'speaking-part-1')
  const speakingPart2 = SPEAKING_CUES.find((c) => c.part === 'speaking-part-2')
  const speakingPart3 = SPEAKING_CUES.find((c) => c.part === 'speaking-part-3')

  if (
    !listening ||
    !reading ||
    !writingTask1 ||
    !writingTask2 ||
    !speakingPart1 ||
    !speakingPart2 ||
    !speakingPart3
  ) {
    return null
  }

  return {
    track,
    listening,
    reading,
    writingTask1,
    writingTask2,
    speakingPart1,
    speakingPart2,
    speakingPart3,
  }
}

/** Total objective question count across a Listening test's sections. */
export function listeningQuestionCount(mock: AssembledMock): number {
  return mock.listening.sections.reduce((n, s) => n + s.questions.length, 0)
}

/** Total objective question count across a Reading test's passages. */
export function readingQuestionCount(mock: AssembledMock): number {
  return mock.reading.passages.reduce((n, p) => n + p.questions.length, 0)
}
