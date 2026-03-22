'use client'

import { useEffect, useCallback, useRef } from 'react'
import { useExamStore } from '@/store/exam-store'

export type TimerWarning = 'none' | '5min' | '1min' | 'expired'

interface UseExamTimerOptions {
  /** Called when time runs out */
  onTimeUp?: () => void
  /** Called when a warning threshold is crossed */
  onWarning?: (warning: TimerWarning) => void
}

interface UseExamTimerReturn {
  /** Seconds remaining */
  timeRemaining: number
  /** Whether the timer is paused */
  isPaused: boolean
  /** Current warning level */
  warning: TimerWarning
  /** Formatted time string (HH:MM:SS or MM:SS) */
  formattedTime: string
  /** Toggle pause/resume */
  togglePause: () => void
  /** Whether time has expired */
  isExpired: boolean
  /** Percentage of time remaining (0-100) */
  percentRemaining: number
}

export function useExamTimer(
  totalTimeMinutes: number,
  { onTimeUp, onWarning }: UseExamTimerOptions = {}
): UseExamTimerReturn {
  const { timeRemainingSeconds, isPaused, tick, togglePause } = useExamStore()
  const prevWarningRef = useRef<TimerWarning>('none')

  // Tick every second
  useEffect(() => {
    if (isPaused || timeRemainingSeconds <= 0) return

    const interval = setInterval(() => {
      tick()
    }, 1000)

    return () => clearInterval(interval)
  }, [isPaused, timeRemainingSeconds, tick])

  // Determine warning level
  const getWarning = useCallback((): TimerWarning => {
    if (timeRemainingSeconds <= 0) return 'expired'
    if (timeRemainingSeconds <= 60) return '1min'
    if (timeRemainingSeconds <= 300) return '5min'
    return 'none'
  }, [timeRemainingSeconds])

  const warning = getWarning()

  // Fire callbacks when warning changes
  useEffect(() => {
    if (warning !== prevWarningRef.current) {
      prevWarningRef.current = warning
      if (warning === 'expired' && onTimeUp) {
        onTimeUp()
      }
      if (onWarning) {
        onWarning(warning)
      }
    }
  }, [warning, onTimeUp, onWarning])

  // Format time display
  const formattedTime = formatTimerDisplay(timeRemainingSeconds)

  const totalSeconds = totalTimeMinutes * 60
  const percentRemaining = totalSeconds > 0
    ? Math.max(0, Math.min(100, (timeRemainingSeconds / totalSeconds) * 100))
    : 0

  return {
    timeRemaining: timeRemainingSeconds,
    isPaused,
    warning,
    formattedTime,
    togglePause,
    isExpired: timeRemainingSeconds <= 0,
    percentRemaining,
  }
}

/** Format seconds as H:MM:SS or MM:SS */
export function formatTimerDisplay(totalSeconds: number): string {
  const s = Math.max(0, totalSeconds)
  const hours = Math.floor(s / 3600)
  const minutes = Math.floor((s % 3600) / 60)
  const seconds = s % 60

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}
