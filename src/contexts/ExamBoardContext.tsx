'use client'

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'

// ─── Types ──────────────────────────────────────────────────────────────

export type ExamBoard = 'AQA' | 'EDEXCEL' | 'CAMBRIDGE' | 'CAIE' | 'OCR'
export type Subject = 'LANGUAGE' | 'LITERATURE'

interface ExamBoardContextValue {
  selectedBoard: ExamBoard | null
  setSelectedBoard: (board: ExamBoard | null) => void
  subject: Subject
  setSubject: (subject: Subject) => void
}

// ─── Constants ──────────────────────────────────────────────────────────

const STORAGE_KEY_BOARD = 'teh_selected_exam_board'
const STORAGE_KEY_SUBJECT = 'teh_selected_subject'

const EXAM_BOARDS: { value: ExamBoard; label: string }[] = [
  { value: 'AQA', label: 'AQA' },
  { value: 'EDEXCEL', label: 'Edexcel' },
  { value: 'CAMBRIDGE', label: 'Cambridge' },
  { value: 'CAIE', label: 'Cambridge (CAIE)' },
  { value: 'OCR', label: 'OCR' },
]

const SUBJECTS: { value: Subject; label: string }[] = [
  { value: 'LANGUAGE', label: 'English Language' },
  { value: 'LITERATURE', label: 'English Literature' },
]

// ─── Context ────────────────────────────────────────────────────────────

const ExamBoardContext = createContext<ExamBoardContextValue | undefined>(undefined)

// ─── Provider ───────────────────────────────────────────────────────────

interface ExamBoardProviderProps {
  children: React.ReactNode
}

export function ExamBoardProvider({ children }: ExamBoardProviderProps) {
  const [selectedBoard, setSelectedBoardState] = useState<ExamBoard | null>(null)
  const [subject, setSubjectState] = useState<Subject>('LANGUAGE')
  const [hydrated, setHydrated] = useState(false)

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const storedBoard = localStorage.getItem(STORAGE_KEY_BOARD)
      if (storedBoard && isValidBoard(storedBoard)) {
        setSelectedBoardState(storedBoard as ExamBoard)
      }

      const storedSubject = localStorage.getItem(STORAGE_KEY_SUBJECT)
      if (storedSubject && isValidSubject(storedSubject)) {
        setSubjectState(storedSubject as Subject)
      }
    } catch {
      // localStorage unavailable (SSR / privacy mode)
    }

    setHydrated(true)
  }, [])

  // Read the user's selectedExamBoard from their profile on mount
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch('/api/user/profile')
        if (!res.ok) return

        const data = await res.json()
        if (data.selectedExamBoard && isValidBoard(data.selectedExamBoard)) {
          setSelectedBoardState(data.selectedExamBoard as ExamBoard)
          localStorage.setItem(STORAGE_KEY_BOARD, data.selectedExamBoard)
        }
      } catch {
        // Profile fetch failed - fall back to localStorage value
      }
    }

    // Only fetch if no board is already set from localStorage
    if (hydrated && !selectedBoard) {
      fetchProfile()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated])

  const setSelectedBoard = useCallback((board: ExamBoard | null) => {
    setSelectedBoardState(board)
    try {
      if (board) {
        localStorage.setItem(STORAGE_KEY_BOARD, board)
      } else {
        localStorage.removeItem(STORAGE_KEY_BOARD)
      }
    } catch {
      // localStorage unavailable
    }
  }, [])

  const setSubject = useCallback((s: Subject) => {
    setSubjectState(s)
    try {
      localStorage.setItem(STORAGE_KEY_SUBJECT, s)
    } catch {
      // localStorage unavailable
    }
  }, [])

  const value = useMemo<ExamBoardContextValue>(
    () => ({ selectedBoard, setSelectedBoard, subject, setSubject }),
    [selectedBoard, setSelectedBoard, subject, setSubject],
  )

  return <ExamBoardContext.Provider value={value}>{children}</ExamBoardContext.Provider>
}

// ─── Hook ───────────────────────────────────────────────────────────────

export function useExamBoard(): ExamBoardContextValue {
  const ctx = useContext(ExamBoardContext)
  if (!ctx) {
    throw new Error('useExamBoard must be used within an <ExamBoardProvider>')
  }
  return ctx
}

/** Safe version that returns null instead of throwing when outside the provider. */
export function useExamBoardSafe(): ExamBoardContextValue | null {
  return useContext(ExamBoardContext) ?? null
}

// ─── BoardSelector Component ────────────────────────────────────────────

interface BoardSelectorProps {
  /** Force the selector to show even when a board is already selected */
  forceShow?: boolean
  className?: string
}

export function BoardSelector({ forceShow = false, className = '' }: BoardSelectorProps) {
  const { selectedBoard, setSelectedBoard, subject, setSubject } = useExamBoard()

  // Only render when no board is selected, unless forceShow is true
  if (selectedBoard && !forceShow) return null

  return (
    <div
      className={[
        'mx-auto max-w-md rounded-xl border border-border bg-card p-6 shadow-sm',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <h2 className="text-lg font-semibold text-foreground mb-1">Choose your exam board</h2>
      <p className="text-sm text-muted-foreground mb-5">
        Content will be tailored to your board&apos;s mark scheme.
      </p>

      {/* ── Subject pills ─────────────────────────────────────────── */}
      <fieldset className="mb-5">
        <legend className="text-sm font-medium text-foreground mb-2">Subject</legend>
        <div className="flex gap-2">
          {SUBJECTS.map((s) => (
            <button
              key={s.value}
              type="button"
              onClick={() => setSubject(s.value)}
              className={[
                'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                subject === s.value
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted text-muted-foreground hover:bg-muted',
              ].join(' ')}
              aria-pressed={subject === s.value}
            >
              {s.label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* ── Board selection ───────────────────────────────────────── */}
      <fieldset>
        <legend className="text-sm font-medium text-foreground mb-2">Exam board</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {EXAM_BOARDS.map((b) => (
            <button
              key={b.value}
              type="button"
              onClick={() => setSelectedBoard(b.value)}
              className={[
                'rounded-lg border px-4 py-2.5 text-sm font-medium transition-all',
                selectedBoard === b.value
                  ? 'border-primary bg-primary/10 text-primary ring-1 ring-primary'
                  : 'border-border text-foreground hover:border-primary/50 hover:bg-primary/5',
              ].join(' ')}
              aria-pressed={selectedBoard === b.value}
            >
              {b.label}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  )
}

// ─── Helpers ────────────────────────────────────────────────────────────

function isValidBoard(value: string): value is ExamBoard {
  return ['AQA', 'EDEXCEL', 'CAMBRIDGE', 'CAIE', 'OCR'].includes(value)
}

function isValidSubject(value: string): value is Subject {
  return ['LANGUAGE', 'LITERATURE'].includes(value)
}
