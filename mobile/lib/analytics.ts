// ---------------------------------------------------------------------------
// Progress analytics engine — pure computation over AsyncStorage data
// ---------------------------------------------------------------------------

import { getItem } from './storage';
import type {
  ChartDataPoint,
  TimeSeries,
  TopicBreakdown,
  OverallProgress,
  QuizHistoryEntry,
  FlashcardHistoryEntry,
} from '../data/analytics-types';

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

async function loadQuizHistory(): Promise<QuizHistoryEntry[]> {
  return (await getItem<QuizHistoryEntry[]>('quizHistory')) ?? [];
}

async function loadFlashcardHistory(): Promise<FlashcardHistoryEntry[]> {
  return (await getItem<FlashcardHistoryEntry[]>('flashcardHistory')) ?? [];
}

/** Return an ISO date string (YYYY-MM-DD) for a Date. */
function toDateKey(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/** Build a map of dateKey -> entries for the last N days. */
function bucketByDay<T extends { date: string }>(
  entries: T[],
  days: number,
): Map<string, T[]> {
  const now = new Date();
  const cutoff = new Date(now);
  cutoff.setDate(cutoff.getDate() - days);
  const cutoffStr = toDateKey(cutoff);

  const buckets = new Map<string, T[]>();

  // Pre-populate every day so the chart has no gaps
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    buckets.set(toDateKey(d), []);
  }

  for (const entry of entries) {
    const key = entry.date.slice(0, 10);
    if (key < cutoffStr) continue;
    const bucket = buckets.get(key);
    if (bucket) {
      bucket.push(entry);
    }
  }

  return buckets;
}

/** Short weekday label from an ISO date string. */
function shortLabel(dateKey: string): string {
  const d = new Date(dateKey + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { weekday: 'short' });
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Daily accuracy trend over the last `days` days.
 * Each point is the average quiz accuracy for that day (0-100).
 * Days with no quizzes have a value of 0.
 */
export async function getAccuracyOverTime(days = 7): Promise<TimeSeries> {
  const history = await loadQuizHistory();
  const buckets = bucketByDay(history, days);

  const data: ChartDataPoint[] = [];
  let total = 0;
  let count = 0;

  for (const [dateKey, entries] of buckets) {
    if (entries.length === 0) {
      data.push({ label: shortLabel(dateKey), value: 0 });
    } else {
      const dayAcc =
        entries.reduce((sum, e) => sum + e.accuracy, 0) / entries.length;
      data.push({ label: shortLabel(dateKey), value: Math.round(dayAcc) });
      total += dayAcc;
      count += 1;
    }
  }

  return {
    label: 'Accuracy',
    data,
    average: count > 0 ? Math.round(total / count) : 0,
  };
}

/**
 * Topics where the user scores below 60% accuracy with at least 3 attempts.
 * Sorted worst-first.
 */
export async function getWeakTopics(): Promise<TopicBreakdown[]> {
  const breakdown = await getTopicBreakdown();
  return breakdown
    .filter((t) => t.totalAttempted >= 3 && t.accuracy < 60)
    .sort((a, b) => a.accuracy - b.accuracy);
}

/**
 * Topics where the user scores 80%+ accuracy with at least 5 attempts.
 * Sorted best-first.
 */
export async function getStrongTopics(): Promise<TopicBreakdown[]> {
  const breakdown = await getTopicBreakdown();
  return breakdown
    .filter((t) => t.totalAttempted >= 5 && t.accuracy >= 80)
    .sort((a, b) => b.accuracy - a.accuracy);
}

/**
 * Number of topics with >= 80% accuracy and >= 5 attempts ("mastered").
 */
export async function getMasteryCount(): Promise<number> {
  const strong = await getStrongTopics();
  return strong.length;
}

/**
 * Total study time across all quizzes and flashcard sessions (in minutes).
 */
export async function getTotalStudyTime(): Promise<number> {
  const [quizzes, flashcards] = await Promise.all([
    loadQuizHistory(),
    loadFlashcardHistory(),
  ]);

  const quizSeconds = quizzes.reduce((s, q) => s + q.durationSeconds, 0);
  const flashSeconds = flashcards.reduce((s, f) => s + f.durationSeconds, 0);

  return Math.round((quizSeconds + flashSeconds) / 60);
}

/**
 * Quiz score trend: one data point per quiz in chronological order.
 * Useful for a line chart showing improvement over time.
 */
export async function getQuizScoreTrend(): Promise<TimeSeries> {
  const history = await loadQuizHistory();

  // Sort chronologically
  const sorted = [...history].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  const data: ChartDataPoint[] = sorted.map((entry, i) => ({
    label: `Q${i + 1}`,
    value: entry.accuracy,
  }));

  const avg =
    data.length > 0
      ? Math.round(data.reduce((s, d) => s + d.value, 0) / data.length)
      : 0;

  return { label: 'Quiz Scores', data, average: avg };
}

/**
 * Per-topic accuracy and study-time breakdown, aggregated from quiz and
 * flashcard history.
 */
export async function getTopicBreakdown(): Promise<TopicBreakdown[]> {
  const [quizzes, flashcards] = await Promise.all([
    loadQuizHistory(),
    loadFlashcardHistory(),
  ]);

  const map = new Map<
    string,
    { attempted: number; correct: number; seconds: number }
  >();

  const ensure = (topic: string) => {
    if (!map.has(topic)) {
      map.set(topic, { attempted: 0, correct: 0, seconds: 0 });
    }
    return map.get(topic)!;
  };

  // Quiz question-level breakdown
  for (const quiz of quizzes) {
    // Spread quiz duration proportionally across questions by topic
    const secPerQ =
      quiz.totalQuestions > 0 ? quiz.durationSeconds / quiz.totalQuestions : 0;

    for (const q of quiz.questions) {
      const bucket = ensure(q.topic);
      bucket.attempted += 1;
      if (q.correct) bucket.correct += 1;
      bucket.seconds += secPerQ;
    }
  }

  // Flashcard sessions
  for (const fc of flashcards) {
    const bucket = ensure(fc.category);
    bucket.attempted += fc.cardsReviewed;
    bucket.correct += fc.cardsCorrect;
    bucket.seconds += fc.durationSeconds;
  }

  const result: TopicBreakdown[] = [];
  for (const [topic, stats] of map) {
    result.push({
      topic,
      totalAttempted: stats.attempted,
      totalCorrect: stats.correct,
      accuracy:
        stats.attempted > 0
          ? Math.round((stats.correct / stats.attempted) * 100)
          : 0,
      studyMinutes: Math.round(stats.seconds / 60),
    });
  }

  return result.sort((a, b) => b.totalAttempted - a.totalAttempted);
}

/**
 * Study time per day over the last `days` days (in minutes).
 */
export async function getStudyTimeByDay(days = 7): Promise<TimeSeries> {
  const [quizzes, flashcards] = await Promise.all([
    loadQuizHistory(),
    loadFlashcardHistory(),
  ]);

  // Merge into a single list with date + duration
  const all: { date: string; durationSeconds: number }[] = [
    ...quizzes.map((q) => ({
      date: q.date,
      durationSeconds: q.durationSeconds,
    })),
    ...flashcards.map((f) => ({
      date: f.date,
      durationSeconds: f.durationSeconds,
    })),
  ];

  const buckets = bucketByDay(all, days);

  const data: ChartDataPoint[] = [];
  let total = 0;
  let count = 0;

  for (const [dateKey, entries] of buckets) {
    const mins = Math.round(
      entries.reduce((s, e) => s + e.durationSeconds, 0) / 60,
    );
    data.push({ label: shortLabel(dateKey), value: mins });
    if (mins > 0) {
      total += mins;
      count += 1;
    }
  }

  return {
    label: 'Study Time (min)',
    data,
    average: count > 0 ? Math.round(total / count) : 0,
  };
}

/**
 * High-level progress snapshot combining quiz and flashcard data with streak
 * information from storage.
 */
export async function getOverallProgress(): Promise<OverallProgress> {
  const [quizzes, flashcards, streak] = await Promise.all([
    loadQuizHistory(),
    loadFlashcardHistory(),
    getItem<{ current: number; longest: number }>('streak'),
  ]);

  const totalCorrect = quizzes.reduce((s, q) => s + q.correctAnswers, 0);
  const totalQuestions = quizzes.reduce((s, q) => s + q.totalQuestions, 0);
  const lifetimeAccuracy =
    totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const quizSeconds = quizzes.reduce((s, q) => s + q.durationSeconds, 0);
  const flashSeconds = flashcards.reduce((s, f) => s + f.durationSeconds, 0);

  const breakdown = await getTopicBreakdown();
  const masteredTopics = breakdown.filter(
    (t) => t.totalAttempted >= 5 && t.accuracy >= 80,
  ).length;

  return {
    totalQuizzes: quizzes.length,
    totalFlashcardSessions: flashcards.length,
    lifetimeAccuracy,
    masteredTopics,
    totalStudyMinutes: Math.round((quizSeconds + flashSeconds) / 60),
    currentStreak: streak?.current ?? 0,
    longestStreak: streak?.longest ?? 0,
  };
}
