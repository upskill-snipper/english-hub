import { getItem, setItem } from './storage';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** ISO date string key (YYYY-MM-DD) mapped to study minutes. */
export type CalendarData = Record<string, number>;

export interface CalendarDayEntry {
  date: string;
  minutes: number;
}

export interface StreakInfo {
  current: number;
  longest: number;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Return today's date as an ISO date string (local timezone). */
function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Return ISO date string for a Date object (local timezone). */
function toISO(d: Date): string {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

/** Get start-of-day Date for an ISO date string. */
function parseISO(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/** Subtract one day from an ISO date string. */
function prevDay(iso: string): string {
  const d = parseISO(iso);
  d.setDate(d.getDate() - 1);
  return toISO(d);
}

// ---------------------------------------------------------------------------
// Core API
// ---------------------------------------------------------------------------

/**
 * Record study minutes for today. Adds to the existing value if already
 * recorded earlier in the same day.
 */
export async function recordStudyMinutes(minutes: number): Promise<void> {
  const data = (await getItem<CalendarData>('studyCalendar')) ?? {};
  const today = todayISO();
  data[today] = (data[today] ?? 0) + minutes;
  await setItem('studyCalendar', data);
}

/**
 * Return calendar data for the last `days` days (default 365).
 * Each entry is { date, minutes }. Days with no activity have minutes = 0.
 */
export async function getCalendarData(
  days: number = 365,
): Promise<CalendarDayEntry[]> {
  const data = (await getItem<CalendarData>('studyCalendar')) ?? {};
  const result: CalendarDayEntry[] = [];
  const today = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const iso = toISO(d);
    result.push({ date: iso, minutes: data[iso] ?? 0 });
  }

  return result;
}

/**
 * Calculate the current consecutive-day study streak ending at today.
 * Returns 0 if the user has not studied today (or ever).
 */
export async function getCurrentStreak(): Promise<number> {
  const data = (await getItem<CalendarData>('studyCalendar')) ?? {};
  let day = todayISO();
  let streak = 0;

  while (data[day] && data[day]! > 0) {
    streak++;
    day = prevDay(day);
  }

  return streak;
}

/**
 * Calculate the longest consecutive-day study streak across all history.
 */
export async function getLongestStreak(): Promise<number> {
  const data = (await getItem<CalendarData>('studyCalendar')) ?? {};
  const dates = Object.keys(data)
    .filter((k) => data[k]! > 0)
    .sort();

  if (dates.length === 0) return 0;

  let longest = 1;
  let current = 1;

  for (let i = 1; i < dates.length; i++) {
    const prev = parseISO(dates[i - 1]);
    const curr = parseISO(dates[i]);
    const diffMs = curr.getTime() - prev.getTime();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      current++;
      longest = Math.max(longest, current);
    } else {
      current = 1;
    }
  }

  return longest;
}

/**
 * Return total study minutes for the current calendar week (Mon–Sun).
 */
export async function getWeekTotal(): Promise<number> {
  const data = (await getItem<CalendarData>('studyCalendar')) ?? {};
  const today = new Date();
  // getDay() returns 0 for Sunday. Shift so Monday = 0.
  const dayOfWeek = (today.getDay() + 6) % 7;

  let total = 0;
  for (let i = dayOfWeek; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const iso = toISO(d);
    total += data[iso] ?? 0;
  }

  return total;
}
