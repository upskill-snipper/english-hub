import AsyncStorage from '@react-native-async-storage/async-storage';

// ---------------------------------------------------------------------------
// Typed storage keys
// ---------------------------------------------------------------------------

export type StorageKey =
  | 'theme'
  | 'board'
  | 'streak'
  | 'studyProgress'
  | 'quizResults'
  | 'savedItems'
  | 'dailyGoal'
  | 'lastTopic'
  | 'syncQueue'
  | 'lastSyncTime'
  | 'onboardingComplete'
  | 'userName'
  | 'userBoard'
  | 'yearGroup'
  | 'studyGoalMinutes'
  | 'targetGrade'
  | 'studyCalendar'
  | 'examDates'
  | 'customExamDate'
  | 'achievements'
  | 'xp'
  | 'level'
  | 'userStats'
  | 'srState'
  | 'quizHistory'
  | 'flashcardHistory'
  | 'dailyChallenges'
  | 'challengeStreak'
  | 'notes'
  | 'timerSessions'
  | 'accessibility'
  | 'tutorialsSeen'
  | 'lastSeenBadgeDate';

const PREFIX = 'eh_';

function prefixed(key: StorageKey): string {
  return `${PREFIX}${key}`;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Retrieve a value from AsyncStorage. Returns `defaultValue` (or `null`) on
 * any failure (missing key, parse error, etc.).
 */
export async function getItem<T = unknown>(
  key: StorageKey,
  defaultValue: T | null = null,
): Promise<T | null> {
  try {
    const raw = await AsyncStorage.getItem(prefixed(key));
    if (raw === null) return defaultValue;
    return JSON.parse(raw) as T;
  } catch {
    return defaultValue;
  }
}

/**
 * Persist a value in AsyncStorage. Silently swallows errors so callers don't
 * need to wrap every save in try/catch.
 */
export async function setItem<T = unknown>(
  key: StorageKey,
  value: T,
): Promise<void> {
  try {
    await AsyncStorage.setItem(prefixed(key), JSON.stringify(value));
  } catch (err) {
    console.warn(`[storage] Failed to set "${key}":`, err);
  }
}

/**
 * Remove a value from AsyncStorage. Silently swallows errors.
 */
export async function removeItem(key: StorageKey): Promise<void> {
  try {
    await AsyncStorage.removeItem(prefixed(key));
  } catch (err) {
    console.warn(`[storage] Failed to remove "${key}":`, err);
  }
}
