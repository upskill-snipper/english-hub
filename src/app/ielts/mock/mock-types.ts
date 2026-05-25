// ─── IELTS Mock Test - local types ─────────────────────────────────────────
// Types that describe ONE assembled, timed mock test and its in-progress /
// finished state. These are LOCAL to the /ielts/mock route: they compose the
// shared item-bank types (@/lib/ielts/types) into a single sequenced sitting
// without modifying any shared contract.
//
// A full IELTS test is sat in a fixed order - Listening, Reading, Writing,
// Speaking - each under its own clock, with no going back to a finished
// section. We model that as an ordered list of "stages" plus a result bucket
// per skill that the final band report reads.
// ────────────────────────────────────────────────────────────────────────────

import type {
  Band,
  CriterionFeedback,
  IeltsTrack,
  ListeningTest,
  ReadingTest,
  SpeakingCue,
  WritingPrompt,
} from '@/lib/ielts/types'

/** The four sequenced stages of the mock, in real-exam order. */
export type MockStageKind = 'listening' | 'reading' | 'writing' | 'speaking'

/** Ordered list of stages a candidate moves through, plus the terminal report. */
export type MockPhase = 'intro' | MockStageKind | 'report'

/**
 * ONE assembled mock for a track: a single Listening test, a single Reading
 * test, the two Writing prompts (a Task 1 + a Task 2) and a Speaking set
 * (Part 1 + Part 2 + Part 3). Assembled once by `assembleMock`.
 */
export interface AssembledMock {
  track: IeltsTrack
  listening: ListeningTest
  reading: ReadingTest
  writingTask1: WritingPrompt
  writingTask2: WritingPrompt
  speakingPart1: SpeakingCue
  speakingPart2: SpeakingCue
  speakingPart3: SpeakingCue
}

/** Realistic per-section time limits, in seconds. */
export const SECTION_SECONDS: Record<MockStageKind, number> = {
  // A real Listening paper is ~30 min (recording + 10 min transfer time); our
  // TTS stand-in plays on demand, so we give the full half hour to listen,
  // answer and review.
  listening: 30 * 60,
  reading: 60 * 60,
  // Writing is 60 minutes total for BOTH tasks (≈20 for Task 1, ≈40 for Task 2);
  // the runner shares one clock across the two tasks, exactly like the real exam.
  writing: 60 * 60,
  // Speaking is 11-14 minutes; we budget 14 and pace the three parts within it.
  speaking: 14 * 60,
}

/** A finished objective section's outcome (Listening, Reading). */
export interface ObjectiveResult {
  skill: 'listening' | 'reading'
  correct: number
  total: number
  band: Band
}

/**
 * A finished AI-marked task's outcome (Writing task, Speaking part). When the
 * feedback API is unavailable / over-limit / refused, `band` stays null and
 * `status` records that the response was captured but not scored.
 */
export interface TaskResult {
  skill: 'writing' | 'speaking'
  /** 'scored' = a band came back; 'submitted' = recorded but not band-scored. */
  status: 'scored' | 'submitted'
  band: Band | null
  criteria: CriterionFeedback[]
  /** Optional human note shown in the report when not scored (e.g. why). */
  note?: string
}

/** Per-skill result bucket the final report reads. */
export interface MockResults {
  listening: ObjectiveResult | null
  reading: ObjectiveResult | null
  writing: TaskResult | null
  speaking: TaskResult | null
}

export const EMPTY_RESULTS: MockResults = {
  listening: null,
  reading: null,
  writing: null,
  speaking: null,
}

/** Answer map for objective sections: questionId → raw answer string. */
export type AnswerMap = Record<string, string>
