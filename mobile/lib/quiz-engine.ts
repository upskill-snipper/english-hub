// ---------------------------------------------------------------------------
// Quiz engine — shuffle, score, timer
// ---------------------------------------------------------------------------

import {
  QuizQuestion,
  Difficulty,
  Topic,
  quizQuestions as allQuestions,
  getQuestionsByTopic,
} from '../data/quiz-questions';

// ---------------------------------------------------------------------------
// Fisher-Yates shuffle (immutable)
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
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));

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
