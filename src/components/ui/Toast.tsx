'use client'

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { useT } from '@/lib/i18n/use-t'

// ─── Types ──────────────────────────────────────────────────────────────

type ToastType = 'success' | 'error' | 'info'

interface ToastItem {
  id: number
  type: ToastType
  message: string
  exiting: boolean
}

type ToastFn = (type: ToastType, message: string) => void

interface ToastContextValue {
  toast: ToastFn
}

// ─── Context ────────────────────────────────────────────────────────────

const ToastContext = createContext<ToastContextValue | null>(null)

// ─── Icon per type ──────────────────────────────────────────────────────

function ToastIcon({ type }: { type: ToastType }) {
  if (type === 'success') {
    return (
      <svg
        className="h-5 w-5 text-success-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    )
  }

  if (type === 'error') {
    return (
      <svg
        className="h-5 w-5 text-red-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    )
  }

  // info
  return (
    <svg
      className="h-5 w-5 text-blue-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

// ─── Styles per type ────────────────────────────────────────────────────

const TYPE_STYLES: Record<ToastType, string> = {
  success: 'border-success-200 bg-success-50 text-success-800',
  error: 'border-red-200 bg-red-50 text-red-800',
  info: 'border-blue-200 bg-blue-50 text-blue-800',
}

// ─── Single toast component ────────────────────────────────────────────

const EXIT_DURATION = 300 // ms - matches the CSS transition

function ToastEntry({ item, onDismiss }: { item: ToastItem; onDismiss: (id: number) => void }) {
  const t = useT()
  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-lg border px-4 py-3 shadow-md transition-all ${
        item.exiting
          ? 'translate-x-4 opacity-0'
          : 'translate-x-0 opacity-100 animate-slide-in-right'
      } ${TYPE_STYLES[item.type]}`}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: `${EXIT_DURATION}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <ToastIcon type={item.type} />

      <p className="flex-1 text-sm font-medium leading-snug">{item.message}</p>

      <button
        type="button"
        onClick={() => onDismiss(item.id)}
        className="shrink-0 rounded-md p-0.5 opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-current"
        aria-label={t('ui.toast.dismiss')}
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

// ─── Provider ───────────────────────────────────────────────────────────

let nextId = 0

const AUTO_DISMISS_MS = 4000

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const t = useT()

  const dismiss = useCallback((id: number) => {
    // Mark as exiting so the CSS transition plays
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, exiting: true } : t)))
    // Remove from DOM after the animation completes
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, EXIT_DURATION)
  }, [])

  const toast: ToastFn = useCallback(
    (type, message) => {
      const id = ++nextId
      setToasts((prev) => [...prev, { id, type, message, exiting: false }])

      // Auto-dismiss
      setTimeout(() => dismiss(id), AUTO_DISMISS_MS)
    },
    [dismiss],
  )

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}

      {/* Toast container - bottom-right, stacked upward */}
      <div
        aria-label={t('ui.toast.region_label')}
        className="fixed bottom-4 right-4 z-[9999] flex flex-col-reverse items-end gap-2 pointer-events-none"
      >
        {toasts.map((item) => (
          <ToastEntry key={item.id} item={item} onDismiss={dismiss} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

// ─── Hook ───────────────────────────────────────────────────────────────

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext)
  if (!ctx) {
    throw new Error('useToast must be used within a <ToastProvider>')
  }
  return ctx
}
