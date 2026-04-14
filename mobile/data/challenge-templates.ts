// ---------------------------------------------------------------------------
// Daily challenge templates for The English Hub
// Each template defines a repeatable challenge with XP reward and completion
// condition. getDailyChallenges() in lib/daily-challenges.ts picks 3 per day.
// ---------------------------------------------------------------------------

export type ChallengeType =
  | 'quiz_count'        // answer N quiz questions
  | 'quiz_score'        // achieve a minimum score on a quiz
  | 'quiz_perfect'      // get a perfect score on any quiz
  | 'flashcard_review'  // review N flashcards
  | 'flashcard_streak'  // get N flashcards correct in a row
  | 'game_play'         // play a specific game N times
  | 'game_score'        // reach a score threshold in a game
  | 'study_time'        // study for N minutes
  | 'study_topics'      // visit N different study topics
  | 'device_learn'      // learn N literary devices
  | 'quote_learn'       // learn N quotes
  | 'daily_login'       // simply open the app
  | 'category_explore'  // explore a specific study category
  | 'mixed'             // complete a combination of activities

export interface ChallengeCondition {
  /** The metric to track */
  metric: string
  /** Target value to reach */
  target: number
  /** Optional: specific topic, game, or category filter */
  filter?: string
}

export interface ChallengeTemplate {
  id: string
  title: string
  description: string
  /** Ionicons icon name */
  icon: string
  type: ChallengeType
  condition: ChallengeCondition
  /** Base XP reward (before streak multiplier) */
  xpReward: number
}

// ---------------------------------------------------------------------------
// 24 challenge templates
// ---------------------------------------------------------------------------

export const CHALLENGE_TEMPLATES: ChallengeTemplate[] = [
  // --- Quiz challenges ---
  {
    id: 'ch-quiz-5',
    title: 'Quiz Whiz',
    description: 'Answer 5 quiz questions',
    icon: 'help-circle-outline',
    type: 'quiz_count',
    condition: { metric: 'quizQuestionsAnswered', target: 5 },
    xpReward: 30,
  },
  {
    id: 'ch-quiz-10',
    title: 'Quiz Marathon',
    description: 'Answer 10 quiz questions',
    icon: 'help-circle',
    type: 'quiz_count',
    condition: { metric: 'quizQuestionsAnswered', target: 10 },
    xpReward: 60,
  },
  {
    id: 'ch-quiz-80',
    title: 'High Achiever',
    description: 'Score 80% or higher on a quiz',
    icon: 'ribbon-outline',
    type: 'quiz_score',
    condition: { metric: 'quizScorePercent', target: 80 },
    xpReward: 50,
  },
  {
    id: 'ch-quiz-perfect',
    title: 'Flawless Victory',
    description: 'Get a perfect score on any quiz',
    icon: 'trophy-outline',
    type: 'quiz_perfect',
    condition: { metric: 'quizScorePercent', target: 100 },
    xpReward: 100,
  },
  {
    id: 'ch-quiz-poetry',
    title: 'Poetry Scholar',
    description: 'Answer 5 poetry questions correctly',
    icon: 'leaf-outline',
    type: 'quiz_count',
    condition: { metric: 'quizQuestionsCorrect', target: 5, filter: 'poetry' },
    xpReward: 40,
  },

  // --- Flashcard challenges ---
  {
    id: 'ch-flash-10',
    title: 'Card Shark',
    description: 'Review 10 flashcards',
    icon: 'albums-outline',
    type: 'flashcard_review',
    condition: { metric: 'flashcardsReviewed', target: 10 },
    xpReward: 30,
  },
  {
    id: 'ch-flash-20',
    title: 'Revision Blitz',
    description: 'Review 20 flashcards',
    icon: 'albums',
    type: 'flashcard_review',
    condition: { metric: 'flashcardsReviewed', target: 20 },
    xpReward: 60,
  },
  {
    id: 'ch-flash-streak-5',
    title: 'Hot Streak',
    description: 'Get 5 flashcards correct in a row',
    icon: 'flame-outline',
    type: 'flashcard_streak',
    condition: { metric: 'flashcardCorrectStreak', target: 5 },
    xpReward: 40,
  },
  {
    id: 'ch-flash-quotes',
    title: 'Quote Collector',
    description: 'Review 8 quote flashcards',
    icon: 'chatbubble-ellipses-outline',
    type: 'flashcard_review',
    condition: { metric: 'flashcardsReviewed', target: 8, filter: 'quotes' },
    xpReward: 35,
  },

  // --- Game challenges ---
  {
    id: 'ch-game-quotematch',
    title: 'Quote Matcher',
    description: 'Play Quote Matcher',
    icon: 'git-compare-outline',
    type: 'game_play',
    condition: { metric: 'gamesPlayed', target: 1, filter: 'quoteMatch' },
    xpReward: 25,
  },
  {
    id: 'ch-game-quotematch-2',
    title: 'Double Match',
    description: 'Play Quote Matcher twice',
    icon: 'git-compare',
    type: 'game_play',
    condition: { metric: 'gamesPlayed', target: 2, filter: 'quoteMatch' },
    xpReward: 50,
  },
  {
    id: 'ch-game-wordbuilder',
    title: 'Word Architect',
    description: 'Play Word Builder',
    icon: 'construct-outline',
    type: 'game_play',
    condition: { metric: 'gamesPlayed', target: 1, filter: 'wordBuilder' },
    xpReward: 25,
  },
  {
    id: 'ch-game-wordbuilder-2',
    title: 'Master Builder',
    description: 'Play Word Builder twice',
    icon: 'construct',
    type: 'game_play',
    condition: { metric: 'gamesPlayed', target: 2, filter: 'wordBuilder' },
    xpReward: 50,
  },
  {
    id: 'ch-game-score',
    title: 'Top Scorer',
    description: 'Score 500+ points in any game',
    icon: 'star-outline',
    type: 'game_score',
    condition: { metric: 'gameScore', target: 500 },
    xpReward: 60,
  },

  // --- Study time challenges ---
  {
    id: 'ch-study-15',
    title: 'Focused Study',
    description: 'Study for 15 minutes',
    icon: 'time-outline',
    type: 'study_time',
    condition: { metric: 'studyMinutes', target: 15 },
    xpReward: 40,
  },
  {
    id: 'ch-study-30',
    title: 'Deep Dive',
    description: 'Study for 30 minutes',
    icon: 'hourglass-outline',
    type: 'study_time',
    condition: { metric: 'studyMinutes', target: 30 },
    xpReward: 80,
  },

  // --- Topic exploration challenges ---
  {
    id: 'ch-topics-3',
    title: 'Explorer',
    description: 'Visit 3 different study topics',
    icon: 'compass-outline',
    type: 'study_topics',
    condition: { metric: 'topicsVisited', target: 3 },
    xpReward: 30,
  },
  {
    id: 'ch-category-poetry',
    title: 'Poet in Training',
    description: 'Explore a topic in the Poetry category',
    icon: 'book-outline',
    type: 'category_explore',
    condition: { metric: 'categoryVisited', target: 1, filter: 'poetry' },
    xpReward: 20,
  },
  {
    id: 'ch-category-texts',
    title: 'Text Detective',
    description: 'Explore a topic in Set Texts',
    icon: 'document-text-outline',
    type: 'category_explore',
    condition: { metric: 'categoryVisited', target: 1, filter: 'set-texts' },
    xpReward: 20,
  },

  // --- Literary device challenges ---
  {
    id: 'ch-devices-5',
    title: 'Device Spotter',
    description: 'Learn 5 literary devices',
    icon: 'bulb-outline',
    type: 'device_learn',
    condition: { metric: 'devicesLearned', target: 5 },
    xpReward: 40,
  },
  {
    id: 'ch-devices-10',
    title: 'Device Master',
    description: 'Learn 10 literary devices',
    icon: 'bulb',
    type: 'device_learn',
    condition: { metric: 'devicesLearned', target: 10 },
    xpReward: 75,
  },

  // --- Quote learning challenges ---
  {
    id: 'ch-quotes-5',
    title: 'Quote Learner',
    description: 'Learn 5 key quotes',
    icon: 'chatbox-outline',
    type: 'quote_learn',
    condition: { metric: 'quotesLearned', target: 5 },
    xpReward: 40,
  },

  // --- Daily login ---
  {
    id: 'ch-login',
    title: 'Daily Check-in',
    description: 'Open the app today',
    icon: 'log-in-outline',
    type: 'daily_login',
    condition: { metric: 'appOpened', target: 1 },
    xpReward: 10,
  },

  // --- Mixed / combo challenges ---
  {
    id: 'ch-mixed-all',
    title: 'Well-Rounded',
    description: 'Do a quiz, review flashcards, and play a game',
    icon: 'grid-outline',
    type: 'mixed',
    condition: { metric: 'activitiesCompleted', target: 3 },
    xpReward: 75,
  },
]
