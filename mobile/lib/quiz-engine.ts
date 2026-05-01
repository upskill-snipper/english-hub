// ---------------------------------------------------------------------------
// Quiz engine — shuffle, score, timer
// ---------------------------------------------------------------------------
//
// Author bias note: the question bank in `data/quiz-questions.ts` has a
// strong positional bias toward option B (164 of 205 questions place the
// correct answer at correctIndex === 1). Lauren flagged this on 28 Apr 2026
// after spotting "B is right 95% of the time" while taking the quiz on
// theenglishhub.app. The web app fixed it with a render-time deterministic
// shuffle (FNV-1a + Mulberry32 seeded by `id + session salt`); this file
// applies the same approach at quiz-creation time so each `createQuiz()`
// returns a fresh permutation while the order stays stable for the duration
// of one quiz session.
// ---------------------------------------------------------------------------

import {
  QuizQuestion,
  Difficulty,
  Topic,
  quizQuestions as allQuestions,
  getQuestionsByTopic,
} from '../data/quiz-questions';

// ---------------------------------------------------------------------------
// Fisher-Yates shuffle (immutable, non-deterministic — used for question pool)
// ---------------------------------------------------------------------------

export function shuffle<T>(array: readonly T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ---------------------------------------------------------------------------
// Deterministic shuffle helpers (used to randomise option positions)
// ---------------------------------------------------------------------------

/** FNV-1a 32-bit hash of an arbitrary string. */
function fnv1a(input: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** Mulberry32 PRNG — small, fast, good distribution. */
function mulberry32(seed: number): () => number {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Fisher-Yates with a seeded RNG so the same seed → the same permutation. */
function shuffleSeeded<T>(arr: readonly T[], seed: number): T[] {
  const copy = [...arr];
  const rand = mulberry32(seed);
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Returns a copy of `q` with options shuffled deterministically (seeded by
 * `q.id + salt`) and `correctIndex` re-targeted to the option's new position.
 *
 * The same question + salt pair always yields the same permutation, so the
 * order is stable across the lifetime of one quiz session but fresh on the
 * next call to `createQuiz()`.
 */
export function shuffleQuestionOptions(q: QuizQuestion, salt: string): QuizQuestion {
  const seed = fnv1a(q.id + ':' + salt);
  const order = shuffleSeeded([0, 1, 2, 3], seed);
  const shuffledOpts = order.map((i) => q.options[i]) as [string, string, string, string];
  const newCorrectIndex = order.indexOf(q.correctIndex);
  return { ...q, options: shuffledOpts, correctIndex: newCorrectIndex };
}

/** Generate a fresh per-session salt. */
function makeSessionSalt(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
}

// ---------------------------------------------------------------------------
// Quiz configuration
// ---------------------------------------------------------------------------

export interface QuizConfig {
  /** Number of questions (default 10) */
  count: number;
  /** Filter by topic (undefined = all) */
  topic?: Topic;
  /** Filter by difficulty (undefined = all) */
  difficulty?: Difficulty;
}

const DEFAULT_CONFIG: QuizConfig = { count: 10 };

// ---------------------------------------------------------------------------
// Quiz state
// ---------------------------------------------------------------------------

export interface QuizState {
  questions: QuizQuestion[];
  currentIndex: number;
  score: number;
  answers: (number | null)[];    // user's chosen option per question
  isComplete: boolean;
  startTime: number;             // Date.now() at quiz start
  endTime: number | null;        // Date.now() at quiz end
}

// ---------------------------------------------------------------------------
// Create a new quiz
// ---------------------------------------------------------------------------

export function createQuiz(config: Partial<QuizConfig> = {}): QuizState {
  const { count, topic, difficulty } = { ...DEFAULT_CONFIG, ...config };

  let pool = topic ? getQuestionsByTopic(topic) : [...allQuestions];

  if (difficulty) {
    pool = pool.filter((q) => q.difficulty === difficulty);
  }

  const shuffled = shuffle(pool);
  const sliced = shuffled.slice(0, Math.min(count, shuffled.length));

  // Per-session salt: each call to createQuiz() yields a fresh permutation
  // of every question's options, so no two consecutive runs through the
  // same question pool look identical to the user.
  const salt = makeSessionSalt();
  const selected = sliced.map((q) => shuffleQuestionOptions(q, salt));

  return {
    questions: selected,
    currentIndex: 0,
    score: 0,
    answers: new Array(selected.length).fill(null),
    isComplete: false,
    startTime: Date.now(),
    endTime: null,
  };
}

// ---------------------------------------------------------------------------
// Answer the current question (returns updated state — immutable)
// ---------------------------------------------------------------------------

export function answerQuestion(state: QuizState, chosenIndex: number): QuizState {
  if (state.isComplete) return state;

  const question = state.questions[state.currentIndex];
  if (!question) return state;

  const isCorrect = chosenIndex === question.correctIndex;
  const newAnswers = [...state.answers];
  newAnswers[state.currentIndex] = chosenIndex;

  const newScore = state.score + (isCorrect ? 1 : 0);
  const isLast = state.currentIndex >= state.questions.length - 1;

  return {
    ...state,
    score: newScore,
    answers: newAnswers,
    isComplete: isLast,
    endTime: isLast ? Date.now() : null,
  };
}

// ---------------------------------------------------------------------------
// Advance to the next question
// ---------------------------------------------------------------------------

export function nextQuestion(state: QuizState): QuizState {
  if (state.isComplete) return state;
  return {
    ...state,
    currentIndex: state.currentIndex + 1,
  };
}

// ---------------------------------------------------------------------------
// Derived helpers
// ---------------------------------------------------------------------------

export function getPercentage(state: QuizState): number {
  if (state.questions.length === 0) return 0;
  return Math.round((state.score / state.questions.length) * 100);
}

export function getElapsedSeconds(state: QuizState): number {
  const end = state.endTime ?? Date.now();
  return Math.round((end - state.startTime) / 1000);
}

export function getEmojiForScore(percentage: number): string {
  if (percentage === 100) return '\u{1F31F}'; // star
  if (percentage >= 80) return '\u{1F4AA}';   // flexed biceps
  if (percentage >= 60) return '\u{1F44D}';   // thumbs up
  return '\u{1F4DA}';                          // books
}

export function getMessageForScore(percentage: number): string {
  if (percentage === 100) return 'Perfect score! You\'re a superstar!';
  if (percentage >= 80) return 'Amazing work! Nearly flawless!';
  if (percentage >= 60) return 'Good effort! Keep it up!';
  return 'Keep practising! You\'ll get there!';
}
