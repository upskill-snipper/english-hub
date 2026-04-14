import { useCallback, useEffect, useRef, useState } from 'react';
import { AppState, type AppStateStatus } from 'react-native';
import { getItem, setItem, type StorageKey } from './storage';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const FOCUS_DURATION_S = 25 * 60; // 25 minutes
const SHORT_BREAK_S = 5 * 60; // 5 minutes
const LONG_BREAK_S = 15 * 60; // 15 minutes
const SESSIONS_BEFORE_LONG_BREAK = 4;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type TimerPhase = 'idle' | 'focus' | 'shortBreak' | 'longBreak';
export type TimerStatus = 'idle' | 'running' | 'paused';

export interface TimerState {
  /** Current phase of the pomodoro cycle */
  phase: TimerPhase;
  /** Whether the timer is running, paused, or idle */
  status: TimerStatus;
  /** Seconds remaining in the current phase */
  remaining: number;
  /** Total seconds for the current phase (used for progress calculation) */
  total: number;
  /** Current focus session number (1-based, max SESSIONS_BEFORE_LONG_BREAK) */
  currentSession: number;
  /** Total focus sessions completed today */
  completedSessions: number;
  /** Total focused minutes accumulated today */
  totalFocusedMinutes: number;
}

export interface TimerSessionRecord {
  /** ISO date string (YYYY-MM-DD) */
  date: string;
  /** Total focused minutes that day */
  focusedMinutes: number;
  /** Number of completed focus sessions */
  sessions: number;
}

// ---------------------------------------------------------------------------
// Persistence helpers
// ---------------------------------------------------------------------------

const TIMER_SESSIONS_KEY: StorageKey = 'timerSessions';

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

async function loadTodayRecord(): Promise<TimerSessionRecord> {
  const all = await getItem<TimerSessionRecord[]>(TIMER_SESSIONS_KEY, []);
  const today = todayKey();
  const existing = (all ?? []).find((r) => r.date === today);
  return existing ?? { date: today, focusedMinutes: 0, sessions: 0 };
}

async function saveTodayRecord(record: TimerSessionRecord): Promise<void> {
  const all = await getItem<TimerSessionRecord[]>(TIMER_SESSIONS_KEY, []);
  const list = all ?? [];
  const idx = list.findIndex((r) => r.date === record.date);
  if (idx >= 0) {
    list[idx] = record;
  } else {
    list.push(record);
  }
  // Keep last 90 days of history
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 90);
  const cutoffStr = cutoff.toISOString().slice(0, 10);
  const trimmed = list.filter((r) => r.date >= cutoffStr);
  await setItem(TIMER_SESSIONS_KEY, trimmed);
}

// ---------------------------------------------------------------------------
// State machine helpers
// ---------------------------------------------------------------------------

function durationForPhase(phase: TimerPhase): number {
  switch (phase) {
    case 'focus':
      return FOCUS_DURATION_S;
    case 'shortBreak':
      return SHORT_BREAK_S;
    case 'longBreak':
      return LONG_BREAK_S;
    default:
      return 0;
  }
}

function nextPhase(current: TimerPhase, session: number): TimerPhase {
  if (current === 'focus') {
    return session >= SESSIONS_BEFORE_LONG_BREAK ? 'longBreak' : 'shortBreak';
  }
  // After any break, go back to focus
  return 'focus';
}

// ---------------------------------------------------------------------------
// Motivational quotes
// ---------------------------------------------------------------------------

const MOTIVATIONAL_QUOTES = [
  'Stay focused -- you are doing great!',
  'One session at a time.',
  'Discipline is choosing what you want most.',
  'Small steps lead to big results.',
  'Keep going, you are building momentum!',
  'Your future self will thank you.',
  'Focus is the bridge between goals and accomplishment.',
  'Progress, not perfection.',
];

export function getMotivationalQuote(): string {
  return MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
}

// ---------------------------------------------------------------------------
// Hook: useStudyTimer
// ---------------------------------------------------------------------------

export interface StudyTimerActions {
  start: () => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
  skip: () => void;
}

export function useStudyTimer(
  onPhaseComplete?: (completedPhase: TimerPhase) => void,
): [TimerState, StudyTimerActions] {
  const [state, setState] = useState<TimerState>({
    phase: 'idle',
    status: 'idle',
    remaining: 0,
    total: 0,
    currentSession: 1,
    completedSessions: 0,
    totalFocusedMinutes: 0,
  });

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onPhaseCompleteRef = useRef(onPhaseComplete);
  onPhaseCompleteRef.current = onPhaseComplete;

  // Track time spent in focus when app goes to background
  const backgroundTimeRef = useRef<number | null>(null);

  // ------ Load today's persisted stats on mount ------
  useEffect(() => {
    (async () => {
      const record = await loadTodayRecord();
      setState((prev) => ({
        ...prev,
        completedSessions: record.sessions,
        totalFocusedMinutes: record.focusedMinutes,
      }));
    })();
  }, []);

  // ------ Handle app state changes (background/foreground) ------
  useEffect(() => {
    const handleAppState = (next: AppStateStatus) => {
      if (next === 'background' || next === 'inactive') {
        backgroundTimeRef.current = Date.now();
      } else if (next === 'active' && backgroundTimeRef.current !== null) {
        const elapsed = Math.floor((Date.now() - backgroundTimeRef.current) / 1000);
        backgroundTimeRef.current = null;
        setState((prev) => {
          if (prev.status !== 'running') return prev;
          const newRemaining = Math.max(0, prev.remaining - elapsed);
          if (newRemaining === 0) {
            // Phase completed while in background -- will be handled by the
            // interval tick setting remaining to 0
          }
          return { ...prev, remaining: newRemaining };
        });
      }
    };
    const sub = AppState.addEventListener('change', handleAppState);
    return () => sub.remove();
  }, []);

  // ------ Tick logic ------
  const clearTick = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startTick = useCallback(() => {
    clearTick();
    intervalRef.current = setInterval(() => {
      setState((prev) => {
        if (prev.status !== 'running' || prev.remaining <= 0) return prev;
        const newRemaining = prev.remaining - 1;
        if (newRemaining <= 0) {
          // Phase complete
          const wasFocus = prev.phase === 'focus';
          const newCompletedSessions = wasFocus
            ? prev.completedSessions + 1
            : prev.completedSessions;
          const addedMinutes = wasFocus ? Math.round(FOCUS_DURATION_S / 60) : 0;
          const newTotalMinutes = prev.totalFocusedMinutes + addedMinutes;

          // Persist
          const record: TimerSessionRecord = {
            date: todayKey(),
            focusedMinutes: newTotalMinutes,
            sessions: newCompletedSessions,
          };
          saveTodayRecord(record);

          const next = nextPhase(prev.phase, prev.currentSession);
          const nextSessionNum =
            prev.phase !== 'focus'
              ? // Starting a new focus session after break
                next === 'focus'
                ? (prev.currentSession % SESSIONS_BEFORE_LONG_BREAK) + 1
                : prev.currentSession
              : prev.currentSession;

          // Fire callback
          onPhaseCompleteRef.current?.(prev.phase);

          const dur = durationForPhase(next);
          return {
            ...prev,
            phase: next,
            status: 'paused' as TimerStatus,
            remaining: dur,
            total: dur,
            currentSession: nextSessionNum,
            completedSessions: newCompletedSessions,
            totalFocusedMinutes: newTotalMinutes,
          };
        }
        return { ...prev, remaining: newRemaining };
      });
    }, 1000);
  }, [clearTick]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => clearTick();
  }, [clearTick]);

  // ------ Actions ------

  const start = useCallback(() => {
    const dur = FOCUS_DURATION_S;
    setState((prev) => ({
      ...prev,
      phase: 'focus',
      status: 'running',
      remaining: dur,
      total: dur,
      currentSession: 1,
    }));
    startTick();
  }, [startTick]);

  const pause = useCallback(() => {
    clearTick();
    setState((prev) => ({ ...prev, status: 'paused' }));
  }, [clearTick]);

  const resume = useCallback(() => {
    setState((prev) => ({ ...prev, status: 'running' }));
    startTick();
  }, [startTick]);

  const reset = useCallback(() => {
    clearTick();
    setState((prev) => ({
      ...prev,
      phase: 'idle',
      status: 'idle',
      remaining: 0,
      total: 0,
      currentSession: 1,
    }));
  }, [clearTick]);

  const skip = useCallback(() => {
    clearTick();
    setState((prev) => {
      if (prev.phase === 'idle') return prev;

      const wasFocus = prev.phase === 'focus';
      // Don't count skipped focus sessions as completed
      const next = nextPhase(prev.phase, prev.currentSession);
      const nextSessionNum =
        prev.phase !== 'focus' && next === 'focus'
          ? (prev.currentSession % SESSIONS_BEFORE_LONG_BREAK) + 1
          : prev.currentSession;

      const dur = durationForPhase(next);
      return {
        ...prev,
        phase: next,
        status: 'paused',
        remaining: dur,
        total: dur,
        currentSession: nextSessionNum,
      };
    });
  }, [clearTick]);

  return [state, { start, pause, resume, reset, skip }];
}

// ---------------------------------------------------------------------------
// Exports for display helpers
// ---------------------------------------------------------------------------

export function formatTimeDisplay(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export function phaseLabel(phase: TimerPhase): string {
  switch (phase) {
    case 'focus':
      return 'Focus Time';
    case 'shortBreak':
      return 'Short Break';
    case 'longBreak':
      return 'Long Break';
    default:
      return 'Ready to Study';
  }
}

export function isBreakPhase(phase: TimerPhase): boolean {
  return phase === 'shortBreak' || phase === 'longBreak';
}

export { SESSIONS_BEFORE_LONG_BREAK };
