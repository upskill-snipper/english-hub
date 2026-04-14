// Achievement badge definitions for The English Hub mobile app

export type AchievementCategory =
  | 'quiz'
  | 'streak'
  | 'flashcard'
  | 'study'
  | 'special';

export type AchievementCondition =
  | { type: 'quizzesCompleted'; count: number }
  | { type: 'streakDays'; count: number }
  | { type: 'flashcardsReviewed'; count: number }
  | { type: 'poetryCorrect'; count: number }
  | { type: 'quizUnderMinutes'; minutes: number }
  | { type: 'perfectScore' }
  | { type: 'studyHours'; hours: number }
  | { type: 'studyBeforeHour'; hour: number }
  | { type: 'studyAfterHour'; hour: number }
  | { type: 'categoriesExplored'; count: number }
  | { type: 'deckCompleted' }
  | { type: 'resultShared' }
  | { type: 'notesTaken'; count: number }
  | { type: 'dailyChallengesCompleted'; count: number };

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: AchievementCategory;
  xpReward: number;
  condition: AchievementCondition;
};

// ---------------------------------------------------------------------------
// 20 achievement badges
// ---------------------------------------------------------------------------

export const ACHIEVEMENTS: Achievement[] = [
  // --- Quiz ---
  {
    id: 'first_steps',
    title: 'First Steps',
    description: 'Complete your first quiz.',
    icon: '👣',
    category: 'quiz',
    xpReward: 50,
    condition: { type: 'quizzesCompleted', count: 1 },
  },
  {
    id: 'quiz_enthusiast',
    title: 'Quiz Enthusiast',
    description: 'Complete 10 quizzes.',
    icon: '📝',
    category: 'quiz',
    xpReward: 150,
    condition: { type: 'quizzesCompleted', count: 10 },
  },
  {
    id: 'quiz_master',
    title: 'Quiz Master',
    description: 'Complete 50 quizzes.',
    icon: '🏆',
    category: 'quiz',
    xpReward: 500,
    condition: { type: 'quizzesCompleted', count: 50 },
  },
  {
    id: 'speed_demon',
    title: 'Speed Demon',
    description: 'Complete a quiz in under 2 minutes.',
    icon: '⚡',
    category: 'quiz',
    xpReward: 200,
    condition: { type: 'quizUnderMinutes', minutes: 2 },
  },
  {
    id: 'perfect_score',
    title: 'Perfect Score',
    description: 'Score 100% on any quiz.',
    icon: '💯',
    category: 'quiz',
    xpReward: 300,
    condition: { type: 'perfectScore' },
  },

  // --- Streak ---
  {
    id: 'streak_starter',
    title: 'Streak Starter',
    description: 'Maintain a 3-day study streak.',
    icon: '🔥',
    category: 'streak',
    xpReward: 100,
    condition: { type: 'streakDays', count: 3 },
  },
  {
    id: 'on_fire',
    title: 'On Fire',
    description: 'Maintain a 7-day study streak.',
    icon: '🌋',
    category: 'streak',
    xpReward: 250,
    condition: { type: 'streakDays', count: 7 },
  },
  {
    id: 'streak_legend',
    title: 'Streak Legend',
    description: 'Maintain a 30-day study streak.',
    icon: '🌟',
    category: 'streak',
    xpReward: 1000,
    condition: { type: 'streakDays', count: 30 },
  },

  // --- Flashcard ---
  {
    id: 'flashcard_scholar',
    title: 'Flashcard Scholar',
    description: 'Review 25 flashcards.',
    icon: '🃏',
    category: 'flashcard',
    xpReward: 100,
    condition: { type: 'flashcardsReviewed', count: 25 },
  },
  {
    id: 'memory_master',
    title: 'Memory Master',
    description: 'Review 100 flashcards.',
    icon: '🧠',
    category: 'flashcard',
    xpReward: 400,
    condition: { type: 'flashcardsReviewed', count: 100 },
  },
  {
    id: 'completionist',
    title: 'Completionist',
    description: 'Complete all cards in a deck.',
    icon: '✅',
    category: 'flashcard',
    xpReward: 350,
    condition: { type: 'deckCompleted' },
  },

  // --- Study ---
  {
    id: 'poetry_pro',
    title: 'Poetry Pro',
    description: 'Answer 50 poetry questions correctly.',
    icon: '🎭',
    category: 'study',
    xpReward: 300,
    condition: { type: 'poetryCorrect', count: 50 },
  },
  {
    id: 'bookworm',
    title: 'Bookworm',
    description: 'Study for a total of 5 hours.',
    icon: '📚',
    category: 'study',
    xpReward: 200,
    condition: { type: 'studyHours', hours: 5 },
  },
  {
    id: 'dedicated',
    title: 'Dedicated',
    description: 'Study for a total of 20 hours.',
    icon: '🎓',
    category: 'study',
    xpReward: 750,
    condition: { type: 'studyHours', hours: 20 },
  },
  {
    id: 'early_bird',
    title: 'Early Bird',
    description: 'Study before 8 AM.',
    icon: '🌅',
    category: 'study',
    xpReward: 100,
    condition: { type: 'studyBeforeHour', hour: 8 },
  },
  {
    id: 'night_owl',
    title: 'Night Owl',
    description: 'Study after 10 PM.',
    icon: '🦉',
    category: 'study',
    xpReward: 100,
    condition: { type: 'studyAfterHour', hour: 22 },
  },
  {
    id: 'explorer',
    title: 'Explorer',
    description: 'Study across 5 different categories.',
    icon: '🧭',
    category: 'study',
    xpReward: 200,
    condition: { type: 'categoriesExplored', count: 5 },
  },
  {
    id: 'note_taker',
    title: 'Note Taker',
    description: 'Create 10 notes.',
    icon: '📓',
    category: 'study',
    xpReward: 150,
    condition: { type: 'notesTaken', count: 10 },
  },

  // --- Special ---
  {
    id: 'social_butterfly',
    title: 'Social Butterfly',
    description: 'Share a quiz result.',
    icon: '🦋',
    category: 'special',
    xpReward: 100,
    condition: { type: 'resultShared' },
  },
  {
    id: 'daily_champion',
    title: 'Daily Champion',
    description: 'Complete 7 daily challenges.',
    icon: '🏅',
    category: 'special',
    xpReward: 400,
    condition: { type: 'dailyChallengesCompleted', count: 7 },
  },
];
