import { ACHIEVEMENTS, Achievement, AchievementCondition } from '../data/achievements';
import { getItem, setItem } from './storage';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type UserStats = {
  quizzesCompleted: number;
  streakDays: number;
  flashcardsReviewed: number;
  poetryCorrect: number;
  fastestQuizMinutes: number | null;
  hasPerfectScore: boolean;
  studyHoursTotal: number;
  hasStudiedBeforeHour: Record<number, boolean>;
  hasStudiedAfterHour: Record<number, boolean>;
  categoriesExplored: string[];
  hasCompletedDeck: boolean;
  hasSharedResult: boolean;
  notesTaken: number;
  dailyChallengesCompleted: number;
};

export type UnlockedAchievement = {
  id: string;
  unlockedAt: string; // ISO timestamp
};

// ---------------------------------------------------------------------------
// XP / Level curve
// ---------------------------------------------------------------------------

/** Base XP required for level 2; each subsequent level needs 15% more. */
const BASE_XP = 100;
const GROWTH = 1.15;

/**
 * Return the cumulative XP needed to reach a given level.
 * Level 1 requires 0 XP, level 2 requires BASE_XP, etc.
 */
export function getXPForLevel(level: number): number {
  if (level <= 1) return 0;
  let total = 0;
  for (let l = 2; l <= level; l++) {
    total += Math.floor(BASE_XP * Math.pow(GROWTH, l - 2));
  }
  return total;
}

/**
 * Derive the current level from a cumulative XP value.
 */
export function getLevelForXP(xp: number): number {
  let level = 1;
  while (getXPForLevel(level + 1) <= xp) {
    level++;
  }
  return level;
}

// ---------------------------------------------------------------------------
// Condition evaluation
// ---------------------------------------------------------------------------

function evaluateCondition(
  condition: AchievementCondition,
  stats: UserStats,
): boolean {
  switch (condition.type) {
    case 'quizzesCompleted':
      return stats.quizzesCompleted >= condition.count;
    case 'streakDays':
      return stats.streakDays >= condition.count;
    case 'flashcardsReviewed':
      return stats.flashcardsReviewed >= condition.count;
    case 'poetryCorrect':
      return stats.poetryCorrect >= condition.count;
    case 'quizUnderMinutes':
      return (
        stats.fastestQuizMinutes !== null &&
        stats.fastestQuizMinutes < condition.minutes
      );
    case 'perfectScore':
      return stats.hasPerfectScore;
    case 'studyHours':
      return stats.studyHoursTotal >= condition.hours;
    case 'studyBeforeHour':
      return !!stats.hasStudiedBeforeHour[condition.hour];
    case 'studyAfterHour':
      return !!stats.hasStudiedAfterHour[condition.hour];
    case 'categoriesExplored':
      return stats.categoriesExplored.length >= condition.count;
    case 'deckCompleted':
      return stats.hasCompletedDeck;
    case 'resultShared':
      return stats.hasSharedResult;
    case 'notesTaken':
      return stats.notesTaken >= condition.count;
    case 'dailyChallengesCompleted':
      return stats.dailyChallengesCompleted >= condition.count;
    default:
      return false;
  }
}

// ---------------------------------------------------------------------------
// Core API
// ---------------------------------------------------------------------------

/**
 * Evaluate all achievements against the current stats and unlock any newly
 * earned ones. Returns the list of achievements that were *just* unlocked
 * (so callers can show a toast / animation).
 */
export async function checkAchievements(
  stats: UserStats,
): Promise<Achievement[]> {
  const unlocked = await getUnlockedAchievements();
  const unlockedIds = new Set(unlocked.map((u) => u.id));
  const newlyUnlocked: Achievement[] = [];

  for (const achievement of ACHIEVEMENTS) {
    if (unlockedIds.has(achievement.id)) continue;
    if (evaluateCondition(achievement.condition, stats)) {
      await unlockAchievement(achievement.id);
      newlyUnlocked.push(achievement);
    }
  }

  // Award XP for newly unlocked achievements
  if (newlyUnlocked.length > 0) {
    const xpGained = newlyUnlocked.reduce((sum, a) => sum + a.xpReward, 0);
    const currentXP = (await getItem<number>('xp', 0)) ?? 0;
    const newXP = currentXP + xpGained;
    await setItem('xp', newXP);
    await setItem('level', getLevelForXP(newXP));
  }

  return newlyUnlocked;
}

/**
 * Mark a single achievement as unlocked and persist the change.
 */
export async function unlockAchievement(id: string): Promise<void> {
  const unlocked = await getUnlockedAchievements();
  if (unlocked.some((u) => u.id === id)) return;

  unlocked.push({ id, unlockedAt: new Date().toISOString() });
  await setItem('achievements', unlocked);
}

/**
 * Retrieve the full list of unlocked achievements from storage.
 */
export async function getUnlockedAchievements(): Promise<
  UnlockedAchievement[]
> {
  return (await getItem<UnlockedAchievement[]>('achievements', [])) ?? [];
}

/**
 * Persist the latest user stats to storage (convenience wrapper).
 */
export async function saveUserStats(stats: UserStats): Promise<void> {
  await setItem('userStats', stats);
}

/**
 * Load user stats from storage, returning sensible defaults when none exist.
 */
export async function loadUserStats(): Promise<UserStats> {
  const defaults: UserStats = {
    quizzesCompleted: 0,
    streakDays: 0,
    flashcardsReviewed: 0,
    poetryCorrect: 0,
    fastestQuizMinutes: null,
    hasPerfectScore: false,
    studyHoursTotal: 0,
    hasStudiedBeforeHour: {},
    hasStudiedAfterHour: {},
    categoriesExplored: [],
    hasCompletedDeck: false,
    hasSharedResult: false,
    notesTaken: 0,
    dailyChallengesCompleted: 0,
  };
  return (await getItem<UserStats>('userStats', defaults)) ?? defaults;
}
