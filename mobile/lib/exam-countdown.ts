// ---------------------------------------------------------------------------
// Exam countdown helpers
// ---------------------------------------------------------------------------

import {
  ALL_EXAM_DATES,
  AQA_GCSE_DATES,
  IGCSE_DATES,
  type ExamBoard,
  type ExamDate,
} from '../data/exam-dates';
import { getItem, setItem } from './storage';

// ── Days calculation ───────────────────────────────────────────────────────

/**
 * Returns the number of whole days between today and the given ISO date
 * string. Negative values mean the date is in the past.
 */
export function getDaysUntilExam(date: string): number {
  const now = new Date();
  const target = new Date(date);

  // Strip time component so we compare calendar days only
  const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const targetMidnight = new Date(
    target.getFullYear(),
    target.getMonth(),
    target.getDate(),
  );

  const diffMs = targetMidnight.getTime() - todayMidnight.getTime();
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

// ── Next exam lookup ───────────────────────────────────────────────────────

/**
 * Returns the next upcoming exam for the given board (or across all boards
 * when no board is specified). Returns `null` if every exam is in the past.
 */
export function getNextExam(board?: ExamBoard): ExamDate | null {
  const pool =
    board === 'aqa'
      ? AQA_GCSE_DATES
      : board === 'igcse'
        ? IGCSE_DATES
        : ALL_EXAM_DATES;

  const upcoming = pool
    .filter((e) => getDaysUntilExam(e.date) >= 0)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return upcoming[0] ?? null;
}

// ── Motivational messages ──────────────────────────────────────────────────

/**
 * Returns an encouraging revision prompt based on how many days remain.
 */
export function getMotivationalMessage(daysLeft: number): string {
  if (daysLeft > 90) return 'Build strong foundations now — you have plenty of time!';
  if (daysLeft > 60) return 'Keep practising regularly — consistency is key!';
  if (daysLeft > 30) return 'Focus on your weak areas — targeted revision pays off!';
  if (daysLeft > 14) return 'Past papers time! Practice under timed conditions.';
  if (daysLeft > 7) return 'Nearly there! Review key quotes and techniques.';
  if (daysLeft > 0) return 'Stay calm and trust your preparation!';
  return 'Good luck — you\'ve got this!';
}

// ── Custom exam date persistence ───────────────────────────────────────────

/**
 * Retrieve a user-set custom exam date (if any).
 */
export async function getCustomExamDate(): Promise<ExamDate | null> {
  return getItem<ExamDate>('customExamDate');
}

/**
 * Persist a custom exam date chosen by the user.
 */
export async function setCustomExamDate(exam: ExamDate): Promise<void> {
  await setItem('customExamDate', exam);
}
