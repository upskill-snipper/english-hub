'use client'

import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

/* ─── Types ──────────────────────────────────────────────────── */

type DisclaimerVariant = 'footer' | 'content' | 'ai-feedback' | 'marketing'

interface ExamBoardDisclaimerProps {
  /** @default "content" */
  variant?: DisclaimerVariant
  className?: string
  /** @deprecated No longer used - kept for API compatibility */
  selectedBoard?: string | null
}

/* ─── Info icon (inline SVG to avoid extra dependencies) ─────── */

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? 'h-4 w-4'}
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

/* ─── Warning icon for AI feedback ───────────────────────────── */

function WarningIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className ?? 'h-4 w-4'}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
      />
    </svg>
  )
}

/* ─── Variant renderers ──────────────────────────────────────── */

function FooterDisclaimer({ className }: { className?: string }) {
  const t = useT()
  return (
    <div
      className={`border-t border-primary/20 pt-4 ${className ?? ''}`}
      role="contentinfo"
      aria-label={t('disclaimer.aria.exam_board')}
    >
      <p className="text-xs leading-relaxed text-muted-foreground">{t('disclaimer.full')}</p>
    </div>
  )
}

function ContentDisclaimer({ className }: { className?: string }) {
  const t = useT()
  return (
    <div
      className={`flex items-start gap-2 rounded-lg border border-border bg-background px-3 py-2 ${className ?? ''}`}
      role="note"
      aria-label={t('disclaimer.aria.exam_board')}
    >
      <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      <p className="text-xs leading-relaxed text-muted-foreground">
        {t('disclaimer.compact')}{' '}
        <Link
          href="/legal/disclaimer"
          className="font-medium text-primary underline underline-offset-2 hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 rounded-sm"
        >
          {t('disclaimer.full_link')}
        </Link>
      </p>
    </div>
  )
}

function AiFeedbackDisclaimer({ className }: { className?: string }) {
  const t = useT()
  return (
    <div
      className={`flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 ${className ?? ''}`}
      role="alert"
      aria-label={t('disclaimer.aria.ai_feedback')}
    >
      <WarningIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
      <p className="text-xs leading-relaxed text-amber-800">{t('disclaimer.ai_feedback')}</p>
    </div>
  )
}

function MarketingDisclaimer({ className }: { className?: string }) {
  const t = useT()
  return (
    <p
      className={`text-xs text-muted-foreground ${className ?? ''}`}
      role="note"
      aria-label={t('disclaimer.aria.exam_board')}
    >
      {t('disclaimer.marketing')}
    </p>
  )
}

/* ─── Main component ─────────────────────────────────────────── */

export function ExamBoardDisclaimer({
  variant = 'content',
  className,
  selectedBoard: _selectedBoard,
}: ExamBoardDisclaimerProps) {
  void _selectedBoard
  switch (variant) {
    case 'footer':
      return <FooterDisclaimer className={className} />
    case 'content':
      return <ContentDisclaimer className={className} />
    case 'ai-feedback':
      return <AiFeedbackDisclaimer className={className} />
    case 'marketing':
      return <MarketingDisclaimer className={className} />
  }
}
