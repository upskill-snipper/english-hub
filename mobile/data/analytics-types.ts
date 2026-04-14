// ---------------------------------------------------------------------------
// Analytics types for The English Hub progress tracking
// ---------------------------------------------------------------------------

import type { Topic } from './quiz-questions';
import type { Flashcard } from './flashcards';

// ---------------------------------------------------------------------------
// Chart / time-series primitives
// ---------------------------------------------------------------------------

/** A single data point for charting (e.g. accuracy on a given day). */
export interface ChartDataPoint {
  /** Label for the x-axis (e.g. "Mon", "2026-04-10"). */
  label: string;
  /** Numeric value for the y-axis. */
  value: number;
}

/** An ordered array of chart data points with metadata. */
export interface TimeSeries {
  label: string;
  data: ChartDataPoint[];
  /** Average of all values in `data`. */
  average: number;
}

// ---------------------------------------------------------------------------
// Topic breakdown
// ---------------------------------------------------------------------------

/** Per-topic breakdown of quiz / flashcard performance. */
export interface TopicBreakdown {
  topic: string;
  /** Total questions attempted in this topic. */
  totalAttempted: number;
  /** Total correct answers. */
  totalCorrect: number;
  /** Accuracy as a 0-100 percentage. */
  accuracy: number;
  /** Total study time in minutes spent on this topic. */
  studyMinutes: number;
}

// ---------------------------------------------------------------------------
// Overall progress snapshot
// ---------------------------------------------------------------------------

/** High-level summary returned by getOverallProgress(). */
export interface OverallProgress {
  /** Total quizzes completed. */
  totalQuizzes: number;
  /** Total flashcard review sessions. */
  totalFlashcardSessions: number;
  /** Lifetime accuracy across all quizzes (0-100). */
  lifetimeAccuracy: number;
  /** Number of topics the user has "mastered" (>= 80% accuracy, >= 5 attempts). */
  masteredTopics: number;
  /** Total study time in minutes. */
  totalStudyMinutes: number;
  /** Current daily streak. */
  currentStreak: number;
  /** Longest ever daily streak. */
  longestStreak: number;
}

// ---------------------------------------------------------------------------
// History records persisted in AsyncStorage
// ---------------------------------------------------------------------------

/** A single completed quiz result stored in the 'quizHistory' key. */
export interface QuizHistoryEntry {
  /** ISO-8601 timestamp of quiz completion. */
  date: string;
  /** Quiz topic (undefined = mixed). */
  topic?: Topic;
  /** Number of questions in the quiz. */
  totalQuestions: number;
  /** Number of correct answers. */
  correctAnswers: number;
  /** Accuracy as a 0-100 percentage. */
  accuracy: number;
  /** Duration in seconds. */
  durationSeconds: number;
  /** Per-question results for deep analytics. */
  questions: QuizQuestionResult[];
}

/** Per-question result within a quiz. */
export interface QuizQuestionResult {
  questionId: string;
  topic: Topic;
  correct: boolean;
}

/** A single flashcard review session stored in the 'flashcardHistory' key. */
export interface FlashcardHistoryEntry {
  /** ISO-8601 timestamp of session completion. */
  date: string;
  /** Flashcard category reviewed. */
  category: Flashcard['category'];
  /** Number of cards reviewed. */
  cardsReviewed: number;
  /** Number marked correct / "Good" or "Easy". */
  cardsCorrect: number;
  /** Duration in seconds. */
  durationSeconds: number;
}
